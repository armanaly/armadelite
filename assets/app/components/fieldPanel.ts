import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {FormService} from "./form.service";
import {EmailValidator} from "./emailValidator.component";
@Component({
    selector: 'field-panel',
    template: `
 <div *ngIf="display">
        <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
        <div class="panel-body">
            <form name="{{objStep.name}}"  >
                <div [formGroup]="myGroup">                  

               <!--/* FORMAT Configuration.form_values-->
                    <!--[{  name,     :id -->
                        <!--type,     :string, number-->
                    <!--}]-->
               <!--*/ -->
                    <div *ngFor="let field of objStep.configuration.form_values">
                         <div *ngIf="field.type == 'text'">
                             <label >{{field.label}} </label>
                             <input   
                                    class="form-control" 
                                    type="{{field.type}}" 
                                    id="{{field.name}}"
                                    name="{{field.name}}"
                                    required="{{field.required}}"
                                    minlength="{{field.minlength}}"
                                    maxlength="{{field.maxlength}}"
                                    formControlName="{{field.name}}"
                                    >
                         
                            <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid">This field is required</div>   
                         </div>
                         <!--<div *ngIf="field.type == 'phone'">-->
                                <!--<div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">-->
                                    <!--<label>{{field.label}}</label>-->
                                    <!--<input  -->
                                        <!--class="form-control" -->
                                        <!--type="text" -->
                                        <!--placeholder="Type your phone number" -->
                                        <!--(change)="validatePhone(field.type)"-->
                                        <!--#phone-->
                                        <!--formControlName="{{field.type}}"-->
                                        <!--[formControl]="myGroup.controls[field.name]">-->
                                    <!--<div *ngIf="!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched" class="alert alert-danger">Please enter a phone number valid.-->
                                    <!---->
                                    <!--</div>-->
                                   <!---->
                                <!--</div>-->
                            <!--&lt;!&ndash;<div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid">This field is required</div>   &ndash;&gt;-->
                         <!--</div>-->
                          <div *ngIf="field.type == 'email'">
                                <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                                    <label>Email:</label>
                                    <input  
                                        class="form-control" 
                                        type="{{field.type}}" 
                                         id="{{field.name}}"
                                        name="{{field.name}}"
                                        placeholder="John@doe.com" 
                                        #email
                                        formControlName="{{field.name}}"
                                        required="{{field.required}}"
                                        [formControl]="myGroup.controls[field.name]">
                                    <div *ngIf="!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched" class="alert alert-danger">
                                        Email is required and format should be john@doe.com
                                    </div>
                                   
                                </div>
                         </div>
                    </div>
                
                    <button type="button" (click)="onClick()" class="btn btn-primary">Valider</button>
                </div>   
            </form>
        </div> 
        </div>
`

})

export class FieldPanelComponent {
    @Input() objStep;     //Value received from MainComponent
    @Input() stepIdx;     //Value received from MainComponent
    @Output() sent = new EventEmitter(); // Emitter to send back data to parent component

    constructor(private _fb: FormBuilder, public _formService: FormService ) {}
    display = false;
    myGroup = new FormGroup({});
    ngOnInit() {

        if (this.objStep.conditions.length > 0){
            let valueCondition = this.objStep.conditions[0].value;
            let keyCondition = this.objStep.conditions[0].key;
            console.log(valueCondition);
            console.log(keyCondition);
            console.log(this.stepIdx);
            console.log(this._formService);
            // console.log(this._formService.arraySteps.find(keyCondition));

            if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined'){
            // if (valueCondition == this._formService.arraySteps[tmpStepIdx][keyCondition]){
                this.display = true;
            }
        }
        else{
            this.display = true;
        }

        for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
            //console.log(this.objStep.configuration.form_values[index])
            if (this.objStep.configuration.form_values[index].type == 'email')
            {
                this.myGroup.controls[this.objStep.configuration.form_values[index].name] = new FormControl('', [Validators.required, EmailValidator.checkEmail]);
            }
            else
            {
                this.myGroup.controls[this.objStep.configuration.form_values[index].name] = new FormControl();
            }
        }
    }

    validatePhone(c: FormControl) {
        let PHONE_REGEXP = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i;
        return PHONE_REGEXP.test(c.value) ? null : {
            validatePhone: {
                valid: false
            }
    };
    }


    onClick() {
        console.log('form');
        console.log(this.objStep.name);
        console.log(eval(this.objStep.name));
        console.log(this.objStep.configuration.form_values[0].name);
        console.log(eval(this.objStep.name)[this.objStep.configuration.form_values[0].name].value);
        console.log(this.objStep.configuration.form_values);
      //  console.log(eval(this.objStep.name)[this.objStep.configuration.form_values[1].name].value);

        var valuesName= [];
        var valuesSelected = [];
        for (let index=0; index < this.objStep.configuration.form_values.length; index++) {
            valuesName.push(this.objStep.configuration.form_values[index].name)
            valuesSelected.push(eval(this.objStep.name)[this.objStep.configuration.form_values[index].name].value);
        }
        console.log(valuesSelected);

        this.sent.emit(
            {
            valueName : valuesName,
            valueSelected : valuesSelected,
            stepIdx : this.stepIdx,
            name: this.objStep.name
            })
    }
}