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
        this.sent = new core_1.EventEmitter();
        this.display = false;
        this.tempDisplay = false;
        this.myGroup = new forms_1.FormGroup({});
        this.arr = new forms_1.FormArray([]);
        this.errorForm = false;
    }
    ngOnInit() {
        console.log('NgOnInit');
        if (this.objStep.conditions.length > 0) {
            let valueCondition = this.objStep.conditions[0].value;
            let keyCondition = this.objStep.conditions[0].key;
            console.log(valueCondition);
            console.log(keyCondition);
            console.log(this.stepIdx);
            console.log(this._formService);
            if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined') {
                this.tempDisplay = true;
            }
        }
        else {
            this.tempDisplay = true;
        }
        console.log(this.myGroup);
        if (this.tempDisplay) {
            var objFieldsPanel = this._formService.arraySteps.find(y => y["nom"] === this.objStep.name);
            console.log("objFieldsPanel");
            console.log(objFieldsPanel);
            console.log(this.objStep);
            for (let index = 0; index < this.objStep.configuration.form_values.length; index++) {
                if (typeof (this.objStep.configuration.form_values[index].autofocus) == 'undefined') {
                    this.objStep.configuration.form_values[index].autofocus = false;
                }
                console.log(this.objStep.name);
                console.log(this.objStep.configuration.form_values[index].name);
                console.log(this._formService.arraySteps);
                if (this.objStep.configuration.form_values[index].type == 'email') {
                    this.myGroup.addControl([this.objStep.configuration.form_values[index].name].toLocaleString(), new forms_1.FormControl('', [forms_1.Validators.required, emailValidator_component_1.EmailValidator.checkEmail]));
                }
                else {
                    this.myGroup.addControl([this.objStep.configuration.form_values[index].name].toLocaleString(), new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2)]));
                }
                let keyField = objFieldsPanel[this.objStep.name][index];
                let valueField = keyField[this.objStep.configuration.form_values[index].name];
                this.myGroup.controls[this.objStep.configuration.form_values[index].name].setValue(valueField);
            }
            this.display = true;
            console.log(this.myGroup);
            console.log(this.myGroup.invalid);
            console.log(this.myGroup);
            console.log(this.myGroup.invalid);
        }
    }
    onClick() {
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
    core_1.Input(), 
    __metadata('design:type', Object)
], FieldPanelComponent.prototype, "stepIdx", void 0);
__decorate([
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
                    <!--[{  name,     :id
                        ,  type :string, number-->
                    <!--}]-->
               <!--*/ -->
                    <div *ngFor="let field of objStep.configuration.form_values; let i = index">
                         <div *ngIf="field.type == 'text'">
                             <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                                 <label >{{field.label}} </label>
                                 <input *ngIf="i == 0"     
                                        myAutofocus
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
                             
                                    <input *ngIf="i > 0"     
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
                             <input *ngIf="i == 0"  
                                    myAutofocus
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
                         
                         <input *ngIf="i > 0"  
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
                         
                     
                    <div *ngIf="field.type == 'email'">
                        <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                            <label>Email:</label>
                            <input *ngIf="i == 0"  
                                myAutofocus 
                                class="form-control" 
                                type="{{field.type}}" 
                                id="{{field.name}}"
                                name="{{field.name}}"
                                placeholder="John@doe.com" 
                                #email
                                formControlName="{{field.name}}"
                                required="{{field.required}}"
                                [formControl]="myGroup.controls[field.name]">
                                
                            <input *ngIf="i > 0"  
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
    __metadata('design:paramtypes', [(typeof (_a = typeof forms_1.FormBuilder !== 'undefined' && forms_1.FormBuilder) === 'function' && _a) || Object, form_service_1.FormService])
], FieldPanelComponent);
exports.FieldPanelComponent = FieldPanelComponent;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHdCQUF5RSxnQkFBZ0IsQ0FBQyxDQUFBO0FBQzFGLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDJDQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBMkoxRDtJQUtJLFlBQW9CLEdBQWdCLEVBQVMsWUFBeUI7UUFBbEQsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRjVELFNBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUdwQyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxJQUFJLGlCQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUIsUUFBRyxHQUFHLElBQUksaUJBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4QixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBTHdELENBQUM7SUFNM0UsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7UUFFdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDcEMsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ3RELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxD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LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybUFycmF5fSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RW1haWxWYWxpZGF0b3J9IGZyb20gXCIuL2VtYWlsVmFsaWRhdG9yLmNvbXBvbmVudFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmllbGQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX0gPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInt7b2JqU3RlcC5uYW1lfX1cIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgIDwhLS0vKiBGT1JNQVQgQ29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1beyAgbmFtZSwgICAgIDppZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAsICB0eXBlIDpzdHJpbmcsIG51bWJlci0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS19XS0tPlxyXG4gICAgICAgICAgICAgICA8IS0tKi8gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAndGV4dCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+e3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImkgPT0gMFwiICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA+IDBcIiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cIiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkIFwiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5oYXNFcnJvcignbWluJykgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5GaWVsZCBtdXN0IGJlIGF0IGxlYXN0IHt7ZmllbGQubWlubGVuZ3RofX0gY2hhcmFjdGVycyBsb25nLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAnbnVtYmVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsID57e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID09IDBcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA+IDBcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgXCI+VGhpcyBmaWVsZCBpcyByZXF1aXJlZDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0uaGFzRXJyb3IoJ21pbicpICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+VmV1aWxsZXogaW5kaXF1ZXIgdW4gbm9tYnJlIHBsdXMgZ3JhbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLnR5cGUgPT0gJ2VtYWlsJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw6PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImkgPT0gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1cyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huQGRvZS5jb21cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID4gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJKb2huQGRvZS5jb21cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVtYWlsIGlzIHJlcXVpcmVkIGFuZCBmb3JtYXQgc2hvdWxkIGJlIGpvaG5AZG9lLmNvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuXHJcbiAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgPGg0IGNsYXNzPVwibW9kYWwtdGl0bGVcIj5DaGFtcHMgb2JsaWdhdG9pcmVzPC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgPHA+TWVyY2kgZGUgcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgb2JsaWdhdG9pcmVzPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5GZXJtZXI8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiBbZGlzYWJsZWRdPVwibXlHcm91cC5pbnZhbGlkXCI+VmFsaWRlcjwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmFsaWRlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgPC9kaXY+XHJcbmBcclxuXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRQYW5lbENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwOyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIHNlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHVibGljIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UgKSB7fVxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgdGVtcERpc3BsYXkgPSBmYWxzZTtcclxuICAgIG15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICAgIGFyciA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG4gICAgZXJyb3JGb3JtID0gZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ05nT25Jbml0JylcclxuICAgICAgICAvLyBDSEVDSyBJRiBUSElTIE1VU1QgRElTUExBWUVEXHJcbiAgICAgICAgaWYgKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZHgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZChrZXlDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgIC8vIGlmICh2YWx1ZUNvbmRpdGlvbiA9PSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RtcFN0ZXBJZHhdW2tleUNvbmRpdGlvbl0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy50ZW1wRGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVtcERpc3BsYXkpe1xyXG4gICAgICAgICAgICB2YXIgb2JqRmllbGRzUGFuZWwgPSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeSA9PiB5W1wibm9tXCJdID09PSB0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgY29uc29sZS5sb2coXCJvYmpGaWVsZHNQYW5lbFwiKTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iakZpZWxkc1BhbmVsKTtcclxuY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuICAgICAgICAgICAgLy8gQUREIEFMTCBTUEVDSUZJQyBDT05UUk9MIEZPUiBFQUNIIEZJRUxEXHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdKVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLmF1dG9mb2N1cykgPT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5hdXRvZm9jdXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTsgLy9raWxvbWV0cmFnZVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUpOyAgIC8vIDEgPSBOT00gOyAyID0gRU1BSUxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0udHlwZSA9PSAnZW1haWwnKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlHcm91cC5hZGRDb250cm9sKFt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZV0udG9Mb2NhbGVTdHJpbmcoKSwgbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IuY2hlY2tFbWFpbF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm15R3JvdXAuYWRkQ29udHJvbChbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdLnRvTG9jYWxlU3RyaW5nKCksIG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNFVCBGSUVMRCBWQUxVRSBJRiBBIERBVEEgSEFTIEJFRU4gSU5TRVJURUQgUFJFVklPVVNMWVxyXG4gICAgICAgICAgICAgICAgbGV0IGtleUZpZWxkID0gb2JqRmllbGRzUGFuZWxbdGhpcy5vYmpTdGVwLm5hbWVdW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZpZWxkID0ga2V5RmllbGRbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5teUdyb3VwLmNvbnRyb2xzW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS5zZXRWYWx1ZSh2YWx1ZUZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAuaW52YWxpZCk7XHJcblxyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XSlcclxuICAgIC8vICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLnR5cGUgPT0gJ2VtYWlsJylcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuYXJyLnB1c2gobmV3IEZvcm1Db250cm9sKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IuY2hlY2tFbWFpbF0pKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hcnIucHVzaChuZXcgRm9ybUNvbnRyb2wodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKV0pKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLmludmFsaWQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyB2YWxpZGF0ZVBob25lKGM6IEZvcm1Db250cm9sKSB7XHJcbiAgICAvLyAgICAgbGV0IFBIT05FX1JFR0VYUCA9IC9eKD86KD86XFwoPyg/OjAwfFxcKykoWzEtNF1cXGRcXGR8WzEtOV1cXGQ/KVxcKT8pP1tcXC1cXC5cXCBcXFxcXFwvXT8pPygoPzpcXCg/XFxkezEsfVxcKT9bXFwtXFwuXFwgXFxcXFxcL10/KXswLH0pKD86W1xcLVxcLlxcIFxcXFxcXC9dPyg/OiN8ZXh0XFwuP3xleHRlbnNpb258eClbXFwtXFwuXFwgXFxcXFxcL10/KFxcZCspKT8kL2k7XHJcbiAgICAvLyAgICAgcmV0dXJuIFBIT05FX1JFR0VYUC50ZXN0KGMudmFsdWUpID8gbnVsbCA6IHtcclxuICAgIC8vICAgICAgICAgdmFsaWRhdGVQaG9uZToge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vIH07XHJcbiAgICB9XHJcblxyXG5cclxuICAgICBvbkNsaWNrKCkge1xyXG4gICAvLyBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAuY29udHJvbHMpO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAuaW52YWxpZCk7XHJcbiAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cC52YWxpZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgICAgICBpZiAodGhpcy5teUdyb3VwLnZhbGlkKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdmb3JtJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMpO1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coZXZhbCh0aGlzLm9ialN0ZXAubmFtZSlbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbMV0ubmFtZV0udmFsdWUpO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWVzTmFtZT0gW107XHJcbiAgICAgICAgdmFyIHZhbHVlc1NlbGVjdGVkID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaW5kZXg9MDsgaW5kZXggPCB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgdmFsdWVzTmFtZS5wdXNoKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lKVxyXG4gICAgICAgICAgICB2YWx1ZXNTZWxlY3RlZC5wdXNoKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlc1NlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZW50LmVtaXQoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmFsdWVOYW1lIDogdmFsdWVzTmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6IHZhbHVlc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4LFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLm9ialN0ZXAubmFtZVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICQoXCIjbXlNb2RhbFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZXJyb3JGb3JtKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Vycm9yJyk7XHJcbiAgICAgICAgICAgIC8vIC8vIHRoaXMuZXJyb3JGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5lcnJvckZvcm0pO1xyXG4gICAgICAgICAgICAvLyBhbGVydChcImZvcm0gcGFzIHZhbGlkZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
