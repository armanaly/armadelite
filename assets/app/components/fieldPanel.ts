import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormBuilder, Validators, FormGroup, FormControl} from "@angular/forms";
import {FormService} from "./form.service";
@Component({
    selector: 'field-panel',
    template: `
 
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
                     <label >{{field.label}}</label>
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
                      <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid">*</div>         
                </div>
                
                <button type="button" (click)="onClick()" class="btn btn-primary">Valider</button>
            </div>   
            </form>
        </div>
        <!--<!--id="{{objStep.configuration.form_values[0].name}}"-->
  
`

})

export class FieldPanelComponent {
    @Input() objStep;
    @Input() stepIdx;
    @Output() sent = new EventEmitter(); // Emitter to send back data to parent component

    constructor(private _fb: FormBuilder, public _formService: FormService ) {  //private _profileService: ProfileService
    }
       // registerForm = FormGroup;
    myGroup = new FormGroup({});
    ngOnInit() {
        // for (let index = 0; index < this.objStep.configuration.form_values.length; index++){
        //     eval(this.objStep.configuration.form_values[index].name) : new FormControl()
        //
        // }


        for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
            this.myGroup.controls[this.objStep.configuration.form_values[index].name] = new FormControl();
        }


 // console.log(x);
 //        this.myGroup = new FormGroup({
 //            //eval(this.objStep.configuration.form_values[1].name) :  new FormControl();
 //            adresse: new FormControl(),
 //            nom: new FormControl(),
 //            c: new FormControl(),
 //                email: new FormControl()
 //
 //        });

        console.log(this.myGroup);

        console.log(this.objStep);

        // console.log(this._formService);
        // for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
        //     window['val'+index] = this.objStep.configuration.form_values[index].name;
        //     console.log(index);
        // }
        // console.log(this.objStep);
        // console.log(val0);
        //  this.registerForm = this._fb.group({
        // //     eval(this.objStep.configuration.form_values[0].name): ['', Validators.required]
        //     eval(val1) : ['', Validators.required]
        //  })
    }

    log(x){
        console.log(x);
    }

    onClick() {
        console.log('form');
        console.log(this.objStep.name);
        console.log(eval(this.objStep.name));
        console.log(this.objStep.configuration.form_values[0].name);
        console.log(eval(this.objStep.name)[this.objStep.configuration.form_values[0].name].value);
        console.log(eval(this.objStep.name)[this.objStep.configuration.form_values[1].name].value);

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