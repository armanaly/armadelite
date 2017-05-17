"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const forms_1 = require("@angular/forms");
const form_service_1 = require("./form.service");
const emailValidator_component_1 = require("./emailValidator.component");
let FieldPanelComponent = class FieldPanelComponent {
    constructor(_fb, _formService) {
        this._fb = _fb;
        this._formService = _formService;
        this.sent = new core_1.EventEmitter(); // Emitter to send back data to parent component
        this.display = false;
        this.myGroup = new forms_1.FormGroup({});
        this.arr = new forms_1.FormArray([]);
        this.errorForm = false;
    }
    ngOnInit() {
        console.log('NgOnInit');
        // CHECK IF THIS MUST DISPLAYED
        if (this.objStep.conditions.length > 0) {
            let valueCondition = this.objStep.conditions[0].value;
            let keyCondition = this.objStep.conditions[0].key;
            console.log(valueCondition);
            console.log(keyCondition);
            console.log(this.stepIdx);
            console.log(this._formService);
            // console.log(this._formService.arraySteps.find(keyCondition));
            if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined') {
                // if (valueCondition == this._formService.arraySteps[tmpStepIdx][keyCondition]){
                this.display = true;
            }
        }
        else {
            this.display = true;
        }
        console.log(this.myGroup);
        if (this.display) {
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
                console.log(this.objStep.configuration.form_values[index].name); // 1 = NOM ; 2 = EMAIL
                console.log(this._formService.arraySteps);
                if (this.objStep.configuration.form_values[index].type == 'email') {
                    this.myGroup.addControl([this.objStep.configuration.form_values[index].name].toLocaleString(), new forms_1.FormControl('', [forms_1.Validators.required, emailValidator_component_1.EmailValidator.checkEmail]));
                }
                else {
                    this.myGroup.addControl([this.objStep.configuration.form_values[index].name].toLocaleString(), new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]));
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
    validatePhone(c) {
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
            var valuesName = [];
            var valuesSelected = [];
            for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
                valuesName.push(this.objStep.configuration.form_values[index].name);
                valuesSelected.push(eval(this.objStep.name)[this.objStep.configuration.form_values[index].name].value);
            }
            console.log(valuesSelected);
            this.sent.emit({
                valueName: valuesName,
                valueSelected: valuesSelected,
                stepIdx: this.stepIdx,
                name: this.objStep.name
            });
        }
        else {
            $("#myModal").modal('show');
        }
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "objStep", void 0);
__decorate([
    //Value received from MainComponent
    core_1.Input(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "stepIdx", void 0);
__decorate([
    //Value received from MainComponent
    core_1.Output(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "sent", void 0);
FieldPanelComponent = __decorate([
    core_1.Component({
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
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, form_service_1.FormService])
], FieldPanelComponent);
exports.FieldPanelComponent = FieldPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsd0JBQXlFLGdCQUFnQixDQUFDLENBQUE7QUFDMUYsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsMkNBQTZCLDRCQUE0QixDQUFDLENBQUE7QUFrSTFEO0lBS0ksWUFBb0IsR0FBZ0IsRUFBUyxZQUF5QjtRQUFsRCxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFGNUQsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEO1FBR3JGLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLElBQUksaUJBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixRQUFHLEdBQUcsSUFBSSxpQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFKd0QsQ0FBQztJQUszRSxRQUFRO1FBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUN2QiwrQkFBK0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDcEMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FB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b25lbnRzL2ZpZWxkUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXl9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbWFpbFZhbGlkYXRvcn0gZnJvbSBcIi4vZW1haWxWYWxpZGF0b3IuY29tcG9uZW50XCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWVsZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBuYW1lPVwie3tvYmpTdGVwLm5hbWV9fVwiICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPiAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgPCEtLS8qIEZPUk1BVCBDb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLVt7ICBuYW1lLCAgICAgOmlkIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZSwgICAgIDpzdHJpbmcsIG51bWJlci0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS19XS0tPlxyXG4gICAgICAgICAgICAgICA8IS0tKi8gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW25nQ2xhc3NdPVwieydoYXMtZXJyb3InOiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPnt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCBcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5oYXNFcnJvcignbWluJykgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5GaWVsZCBtdXN0IGJlIGF0IGxlYXN0IHt7ZmllbGQubWlubGVuZ3RofX0gY2hhcmFjdGVycyBsb25nLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC50eXBlID09ICdudW1iZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW25nQ2xhc3NdPVwieydoYXMtZXJyb3InOiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPnt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cIiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkIFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLmhhc0Vycm9yKCdtaW4nKSAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlZldWlsbGV6IGluZGlxdWVyIHVuIG5vbWJyZSBwbHVzIGdyYW5kPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIHZhbHVlPVwie3tmaWVsZC50eXBlfX1cIiAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkX25hbWVdLiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAncGhvbmUnXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW25nQ2xhc3NdPVwieydoYXMtZXJyb3InOiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZH1cIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbD57e2ZpZWxkLmxhYmVsfX08L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0ICAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1jbGFzcz1cImZvcm0tY29udHJvbFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJ0ZXh0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgcGhvbmUgbnVtYmVyXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tKGNoYW5nZSk9XCJ2YWxpZGF0ZVBob25lKGZpZWxkLnR5cGUpXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0jcGhvbmUtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1mb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLnR5cGV9fVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlBsZWFzZSBlbnRlciBhIHBob25lIG51bWJlciB2YWxpZC4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDs8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj4gICAmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC50eXBlID09ICdlbWFpbCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huQGRvZS5jb21cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbWFpbCBpcyByZXF1aXJlZCBhbmQgZm9ybWF0IHNob3VsZCBiZSBqb2huQGRvZS5jb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgIGlkPVwibXlNb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIj5cclxuICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcblxyXG4gICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgIDxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Q2hhbXBzIG9ibGlnYXRvaXJlczwvaDQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgIDxwPk1lcmNpIGRlIHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzIG9ibGlnYXRvaXJlczwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIm15R3JvdXAuaW52YWxpZFwiPlZhbGlkZXI8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIDwvZGl2PlxyXG5gXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpZWxkUGFuZWxDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4OyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBzZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlICkge31cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIG15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICAgIGFyciA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG4gICAgZXJyb3JGb3JtID0gZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ05nT25Jbml0JylcclxuICAgICAgICAvLyBDSEVDSyBJRiBUSElTIE1VU1QgRElTUExBWUVEXHJcbiAgICAgICAgaWYgKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZHgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZChrZXlDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIC8vIGlmICh2YWx1ZUNvbmRpdGlvbiA9PSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RtcFN0ZXBJZHhdW2tleUNvbmRpdGlvbl0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXApO1xyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXkpe1xyXG4gICAgICAgICAgICB2YXIgb2JqRmllbGRzUGFuZWwgPSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeSA9PiB5W1wibm9tXCJdID09PSB0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9iakZpZWxkc1BhbmVsXCIpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmpGaWVsZHNQYW5lbCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBREQgQUxMIFNQRUNJRklDIENPTlRST0wgRk9SIEVBQ0ggRklFTERcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAubmFtZSk7IC8va2lsb21ldHJhZ2VcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lKTsgICAvLyAxID0gTk9NIDsgMiA9IEVNQUlMXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLnR5cGUgPT0gJ2VtYWlsJylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15R3JvdXAuYWRkQ29udHJvbChbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdLnRvTG9jYWxlU3RyaW5nKCksIG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIEVtYWlsVmFsaWRhdG9yLmNoZWNrRW1haWxdKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUdyb3VwLmFkZENvbnRyb2woW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS50b0xvY2FsZVN0cmluZygpLCBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTRVQgRklFTEQgVkFMVUUgSUYgQSBEQVRBIEhBUyBCRUVOIElOU0VSVEVEIFBSRVZJT1VTTFlcclxuICAgICAgICAgICAgICAgIGxldCBrZXlGaWVsZCA9IG9iakZpZWxkc1BhbmVsW3RoaXMub2JqU3RlcC5uYW1lXVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWVGaWVsZCA9IGtleUZpZWxkW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXTtcclxuICAgICAgICAgICAgICAgIHRoaXMubXlHcm91cC5jb250cm9sc1t0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZV0uc2V0VmFsdWUodmFsdWVGaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLmludmFsaWQpO1xyXG4gICAgICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdKVxyXG4gICAgLy8gICAgIGlmICh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0udHlwZSA9PSAnZW1haWwnKVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnIucHVzaChuZXcgRm9ybUNvbnRyb2wodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBFbWFpbFZhbGlkYXRvci5jaGVja0VtYWlsXSkpO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXApO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFyci5wdXNoKG5ldyBGb3JtQ29udHJvbCh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZSwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpXSkpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlUGhvbmUoYzogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBsZXQgUEhPTkVfUkVHRVhQID0gL14oPzooPzpcXCg/KD86MDB8XFwrKShbMS00XVxcZFxcZHxbMS05XVxcZD8pXFwpPyk/W1xcLVxcLlxcIFxcXFxcXC9dPyk/KCg/OlxcKD9cXGR7MSx9XFwpP1tcXC1cXC5cXCBcXFxcXFwvXT8pezAsfSkoPzpbXFwtXFwuXFwgXFxcXFxcL10/KD86I3xleHRcXC4/fGV4dGVuc2lvbnx4KVtcXC1cXC5cXCBcXFxcXFwvXT8oXFxkKykpPyQvaTtcclxuICAgICAgICByZXR1cm4gUEhPTkVfUkVHRVhQLnRlc3QoYy52YWx1ZSkgPyBudWxsIDoge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVBob25lOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgIG9uQ2xpY2soKSB7XHJcbiAgIC8vIG9uU3VibWl0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cC5jb250cm9scyk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cC5pbnZhbGlkKTtcclxuICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLnZhbGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXApO1xyXG4gICAgICAgIGlmICh0aGlzLm15R3JvdXAudmFsaWQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZhbCh0aGlzLm9ialN0ZXAubmFtZSkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWVdLnZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcyk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1sxXS5uYW1lXS52YWx1ZSk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZXNOYW1lPSBbXTtcclxuICAgICAgICB2YXIgdmFsdWVzU2VsZWN0ZWQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpbmRleD0wOyBpbmRleCA8IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICB2YWx1ZXNOYW1lLnB1c2godGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUpXHJcbiAgICAgICAgICAgIHZhbHVlc1NlbGVjdGVkLnB1c2goZXZhbCh0aGlzLm9ialN0ZXAubmFtZSlbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICB0aGlzLnNlbnQuZW1pdChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB2YWx1ZXNOYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkIDogdmFsdWVzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHgsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMub2JqU3RlcC5uYW1lXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgJChcIiNteU1vZGFsXCIpLm1vZGFsKCdzaG93JylcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5lcnJvckZvcm0pO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZXJyb3InKTtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy5lcnJvckZvcm0gPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVycm9yRm9ybSk7XHJcbiAgICAgICAgICAgIC8vIGFsZXJ0KFwiZm9ybSBwYXMgdmFsaWRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
