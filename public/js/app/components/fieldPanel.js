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
    }
    ngOnInit() {
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
        for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
            //console.log(this.objStep.configuration.form_values[index])
            if (this.objStep.configuration.form_values[index].type == 'email') {
                this.myGroup.controls[this.objStep.configuration.form_values[index].name] = new forms_1.FormControl('', [forms_1.Validators.required, emailValidator_component_1.EmailValidator.checkEmail]);
            }
            else {
                this.myGroup.controls[this.objStep.configuration.form_values[index].name] = new forms_1.FormControl();
            }
        }
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
    }), 
    __metadata('design:paramtypes', [forms_1.FormBuilder, form_service_1.FormService])
], FieldPanelComponent);
exports.FieldPanelComponent = FieldPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ25FLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNHLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTVCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNWO1lBQ0EsU0FBUyxFQUFHLFVBQVU7WUFDdEIsYUFBYSxFQUFHLGNBQWM7WUFDOUIsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1lBQ3RCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUk7U0FDdEIsQ0FBQyxDQUFBO0lBQ1YsQ0FBQztBQUNMLENBQUM7QUEzRUc7SUFBQyxZQUFLLEVBQUU7O29EQUFBO0FBQ1I7SUFEc0IsbUNBQW1DO0lBQ3hELFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQURzQixtQ0FBbUM7SUFDeEQsYUFBTSxFQUFFOztpREFBQTtBQWpGYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXdFYjtLQUVBLENBQUM7O3VCQUFBO0FBRVcsMkJBQW1CLHNCQTRFL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkUGFuZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RW1haWxWYWxpZGF0b3J9IGZyb20gXCIuL2VtYWlsVmFsaWRhdG9yLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmllbGQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX0gPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInt7b2JqU3RlcC5uYW1lfX1cIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIDwhLS0vKiBGT1JNQVQgQ29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1beyAgbmFtZSwgICAgIDppZCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGUsICAgICA6c3RyaW5nLCBudW1iZXItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tfV0tLT5cclxuICAgICAgICAgICAgICAgPCEtLSovIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGZpZWxkIG9mIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLnR5cGUgPT0gJ3RleHQnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID57e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cIiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cImZpZWxkLnR5cGUgPT0gJ3Bob25lJ1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWw+e3tmaWVsZC5sYWJlbH19PC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwidGV4dFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIHBob25lIG51bWJlclwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLShjaGFuZ2UpPVwidmFsaWRhdGVQaG9uZShmaWVsZC50eXBlKVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tI3Bob25lLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC50eXBlfX1cIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5QbGVhc2UgZW50ZXIgYSBwaG9uZSBudW1iZXIgdmFsaWQuLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWRcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+ICAgJm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAnZW1haWwnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbbmdDbGFzc109XCJ7J2hhcy1lcnJvcic6IW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkpvaG5AZG9lLmNvbVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGlzIHJlcXVpcmVkIGFuZCBmb3JtYXQgc2hvdWxkIGJlIGpvaG5AZG9lLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbmBcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRQYW5lbENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwOyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIHNlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHVibGljIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UgKSB7fVxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgbXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9ialN0ZXAuY29uZGl0aW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5Q29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWR4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoa2V5Q29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAvLyBpZiAodmFsdWVDb25kaXRpb24gPT0gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0bXBTdGVwSWR4XVtrZXlDb25kaXRpb25dKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0pXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0udHlwZSA9PSAnZW1haWwnKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm15R3JvdXAuY29udHJvbHNbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdID0gbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IuY2hlY2tFbWFpbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teUdyb3VwLmNvbnRyb2xzW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXSA9IG5ldyBGb3JtQ29udHJvbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlUGhvbmUoYzogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICBsZXQgUEhPTkVfUkVHRVhQID0gL14oPzooPzpcXCg/KD86MDB8XFwrKShbMS00XVxcZFxcZHxbMS05XVxcZD8pXFwpPyk/W1xcLVxcLlxcIFxcXFxcXC9dPyk/KCg/OlxcKD9cXGR7MSx9XFwpP1tcXC1cXC5cXCBcXFxcXFwvXT8pezAsfSkoPzpbXFwtXFwuXFwgXFxcXFxcL10/KD86I3xleHRcXC4/fGV4dGVuc2lvbnx4KVtcXC1cXC5cXCBcXFxcXFwvXT8oXFxkKykpPyQvaTtcclxuICAgICAgICByZXR1cm4gUEhPTkVfUkVHRVhQLnRlc3QoYy52YWx1ZSkgPyBudWxsIDoge1xyXG4gICAgICAgICAgICB2YWxpZGF0ZVBob25lOiB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZDogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnZm9ybScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbMF0ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZhbCh0aGlzLm9ialN0ZXAubmFtZSlbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbMF0ubmFtZV0udmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKTtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzFdLm5hbWVdLnZhbHVlKTtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlc05hbWU9IFtdO1xyXG4gICAgICAgIHZhciB2YWx1ZXNTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4PTA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIHZhbHVlc05hbWUucHVzaCh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZSlcclxuICAgICAgICAgICAgdmFsdWVzU2VsZWN0ZWQucHVzaChldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZV0udmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXNTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VudC5lbWl0KFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHZhbHVlc05hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiB2YWx1ZXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeCxcclxuICAgICAgICAgICAgbmFtZTogdGhpcy5vYmpTdGVwLm5hbWVcclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxufSJdfQ==
