import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormBuilder, Validators, FormGroup, FormControl, FormArray} from "@angular/forms";
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
                         <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
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
                                    [formControl]="myGroup.controls[field.name]"
                                   
                                    >
                         
                            <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid ">This field is required</div>   
                            <div *ngIf="myGroup.controls[field.name].hasError('min') && myGroup.controls[field.name].touched" class="alert alert-danger">Field must be at least {{field.minlength}} characters long.</div>
                         </div>
                         </div>
                         
                    <div *ngIf="field.type == 'number'">
                        <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                             <label >{{field.label}} </label>
                             <input   
                                    class="form-control" 
                                    type="{{field.type}}" 
                                    id="{{field.name}}"
                                    name="{{field.name}}"
                                    required="{{field.required}}"
                                    min="{{field.minlength}}"
                                    max="{{field.maxlength}}"
                                    minlength="{{field.minlength}}"
                                    maxlength="{{field.maxlength}}"
                                    formControlName="{{field.name}}"
                                    [formControl]="myGroup.controls[field.name]"
                                   
                                    >
                         
                            <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid ">This field is required</div>   
                            <div *ngIf="myGroup.controls[field.name].hasError('min') && myGroup.controls[field.name].touched" class="alert alert-danger">Veuillez indiquer un nombre plus grand</div>
                        </div>
                    </div>
                         
                         <!-- value="{{field.type}}" && myGroup.controls[field_name]. -->
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
                    <div  id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Champs obligatoires</h4>
      </div>
      <div class="modal-body">
        <p>Merci de remplir tous les champs obligatoires</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
      </div>
    </div>

  </div>
</div>
            
                 <!--<button type="submit" class="btn btn-primary" [disabled]="myGroup.invalid">Valider</button>-->
                    <button type="button"  data-target="#myModal" (click)="onClick()" class="btn btn-primary">Valider</button>
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
    arr = new FormArray([]);
    errorForm = false;
    ngOnInit() {

        console.log('NgOnInit')
        // CHECK IF THIS MUST DISPLAYED
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
        console.log(this.myGroup);



        if (this.display){
            var objFieldsPanel = this._formService.arraySteps.find(y => y["nom"] === this.objStep.name);
            // console.log(this.objStep.configuration.form_values[0].name);
            // console.log(this.objStep.name);
            // console.log(this._formService.arraySteps);
            //
            // console.log("objFieldsPanel");
            // console.log(objFieldsPanel);

            // ADD ALL SPECIFIC CONTROL FOR EACH FIELD
            for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
                //console.log(this.objStep.configuration.form_values[index])
                console.log(this.objStep.name); //kilometrage
                console.log(this.objStep.configuration.form_values[index].name);   // 1 = NOM ; 2 = EMAIL
                console.log(this._formService.arraySteps);

                if (this.objStep.configuration.form_values[index].type == 'email')
                {
                    this.myGroup.addControl([this.objStep.configuration.form_values[index].name].toLocaleString(), new FormControl('', [Validators.required, EmailValidator.checkEmail]));
                }
                else
                {
                    this.myGroup.addControl([this.objStep.configuration.form_values[index].name].toLocaleString(), new FormControl('', [Validators.required, Validators.minLength(2)]));
                }

                // SET FIELD VALUE IF A DATA HAS BEEN INSERTED PREVIOUSLY
                let keyField = objFieldsPanel[this.objStep.name][index];
                let valueField = keyField[this.objStep.configuration.form_values[index].name];
                this.myGroup.controls[this.objStep.configuration.form_values[index].name].setValue(valueField);
            }
            console.log(this.myGroup);
            console.log(this.myGroup.invalid);
        }
    //
    //     //**********************************
    //     for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
    //     //console.log(this.objStep.configuration.form_values[index])
    //     if (this.objStep.configuration.form_values[index].type == 'email')
    //     {
    //         this.arr.push(new FormControl(this.objStep.configuration.form_values[index].name, [Validators.required, EmailValidator.checkEmail]));
    //         console.log(this.myGroup);
    //     }
    //     else
    //     {
    //         this.arr.push(new FormControl(this.objStep.configuration.form_values[index].name, [Validators.required, Validators.minLength(2)]));
    //     }
    // }


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
   // onSubmit(){
        console.log(this.arr);
        console.log(this.myGroup.controls);
         console.log(this.myGroup.invalid);
         console.log(this.myGroup.valid);
        console.log(this.myGroup);
        if (this.myGroup.valid) {

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
        else {
            $("#myModal").modal('show')
            // console.log(this.errorForm);
            // console.log('error');
            // // this.errorForm = true;
            // console.log(this.errorForm);
            // alert("form pas valide");
        }
    }
}