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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const form_service_1 = require("./form.service");
const emailValidator_component_1 = require("./emailValidator.component");
const step_service_1 = require("../Engine/step.service");
let FieldPanelComponent = class FieldPanelComponent {
    constructor(_fb, _formService, _stepService) {
        this._fb = _fb;
        this._formService = _formService;
        this._stepService = _stepService;
        this.sent = new core_1.EventEmitter();
        this.display = false;
        this.tempDisplay = false;
        this.myGroup = new forms_1.FormGroup({});
        this.arr = new forms_1.FormArray([]);
        this.errorForm = false;
        this.btnDisabled = false;
    }
    ngOnInit() {
        console.log('NgOnInit');
        console.log(this.objStep);
        this.app_name = this.objStep.master_name;
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
                var objFieldsPanel = this._formService.arraySteps.find(y => y["nom"] === this.objStep.name);
                console.log("objFieldsPanel");
                console.log(objFieldsPanel);
                if (typeof objFieldsPanel != 'undefined') {
                    if (typeof objFieldsPanel[this.objStep.name][index] != 'undefined') {
                        let keyField = objFieldsPanel[this.objStep.name][index];
                        let valueField = keyField[this.objStep.configuration.form_values[index].name];
                        this.myGroup.controls[this.objStep.configuration.form_values[index].name].setValue(valueField);
                    }
                }
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
            this.btnDisabled = true;
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
    __metadata("design:type", Object)
], FieldPanelComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FieldPanelComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], FieldPanelComponent.prototype, "sent", void 0);
FieldPanelComponent = __decorate([
    core_1.Component({
        selector: 'field-panel',
        template: `
 <div *ngIf="display">
    <div class="{{_stepService.template.panel_heading}}">
        <p *ngIf="_stepService.language == 'en'" class="text-uppercase">{{objStep.configuration.labelPanel}} </p>
        <p *ngIf="_stepService.language == 'es'" class="text-uppercase">{{objStep.configuration.labelPanel_es}} </p>
        <p *ngIf="_stepService.language == 'fr'" class="text-uppercase">{{objStep.configuration.labelPanel_fr}} </p>
    </div>
    <div class="panel-body">
        <form  class="form-horizontal" name="{{objStep.name}}"  >
            <div [formGroup]="myGroup">                  

               <!--/* FORMAT Configuration.form_values-->
                    <!--[{  name,     :id
                        ,  type :string, number-->
                    <!--}]-->
               <!--*/ -->
                <div *ngFor="let field of objStep.configuration.form_values; let i = index">
                     <div *ngIf="field.type == 'text'">
                         <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                             <label *ngIf="_stepService.language == 'en'" for="{{field.value}}"   class="col-sm-2 control-label" >{{field.label}} </label>
                             <label *ngIf="_stepService.language == 'es'" for="{{field.value}}"   class="col-sm-2 control-label" >{{field.label_es}} </label>
                             <label *ngIf="_stepService.language == 'fr'" for="{{field.value}}"   class="col-sm-2 control-label" >{{field.label_fr}} </label>
                             <div class="col-sm-10">
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
                          
                                <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched ">
                                    <div *ngIf="_stepService.language == 'en'">This field is required</div>
                                    <div *ngIf="_stepService.language == 'es'">Este campo es obligatorio</div>
                                    <div *ngIf="_stepService.language == 'fr'">Champs obligatoire</div>
                                </div>
                                <div *ngIf="myGroup.controls[field.name].hasError('min') && myGroup.controls[field.name].touched" class="alert alert-danger">
                                    <p *ngIf="_stepService.language == 'en'">Field must be at least {{field.minlength}} characters long.</p>
                                    <p *ngIf="_stepService.language == 'fr'">Ce champs doit contenir au minimum {{field.minlength}} caractères.</p>
                                </div>
                               </div>
                         </div>
                     </div>
                     
                    <div *ngIf="field.type == 'number'">
                        <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                             <label *ngIf="_stepService.language == 'en'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label}} </label>
                             <label *ngIf="_stepService.language == 'es'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_es}} </label>
                             <label *ngIf="_stepService.language == 'fr'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_fr}} </label>
                             <div class="col-sm-10">
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
                         <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid  && myGroup.controls[field.name].touched"></div>   
                         <div *ngIf="myGroup.controls[field.name].hasError('min') && myGroup.controls[field.name].touched" class="alert alert-danger">Veuillez indiquer un nombre plus grand</div>
                        
                        </div> 
                           
                        </div>
                    </div>
                         
                    <div *ngIf="field.type == 'date'">
                        <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                             <label *ngIf="_stepService.language == 'en'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label}} </label>
                             <label *ngIf="_stepService.language == 'es'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_es}} </label>
                             <label *ngIf="_stepService.language == 'fr'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_fr}} </label>
                             <div class="col-sm-10">
                                <input class="form-control"  
                                    type='date' 
                                    name='{{field.name}}'
                                    id="{{field.name}}"
                                    formControlName="{{field.name}}"
                                    required="{{field.required}}"
                                    [formControl]="myGroup.controls[field.name]"/>
                             </div>
                        </div>
                    </div> 
                     
                    <div *ngIf="field.type == 'email'">
                        <div class="form-group" [ngClass]="{'has-error':!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched}">
                            <label for="{{field.value}}"   class="col-sm-2 control-label">EMAIL:</label>
                            
                            <div class="col-sm-10">
                                <input *ngIf="i == 0"  
                                    myAutofocus 
                                    class="form-control" 
                                    type="{{field.type}}" 
                                    id="{{field.name}}"
                                    name="{{field.name}}"
                                  
                                    #email
                                    formControlName="{{field.name}}"
                                    required="{{field.required}}"
                                    [formControl]="myGroup.controls[field.name]">
                                    
                                <input *ngIf="i > 0"  
                                    class="form-control" 
                                    type="{{field.type}}" 
                                    id="{{field.name}}"
                                    name="{{field.name}}"
                                    #email
                                    formControlName="{{field.name}}"
                                    required="{{field.required}}"
                                    [formControl]="myGroup.controls[field.name]">
                                                                  
                                <div *ngIf="!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched" class="alert alert-danger">
                                    <p *ngIf="_stepService.language == 'en'"> We need a valid adress email </p>
                                    <p *ngIf="_stepService.language == 'es'"> Necesitamos una dirección de e-mail correcta</p>
                                    <p *ngIf="_stepService.language == 'fr'"> Merci d'indiquer un e-mail valide.</p>
                                </div>
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
                <h4 *ngIf="_stepService.language == 'en'" class="modal-title">Fields mandatory </h4>
                <h4 *ngIf="_stepService.language == 'es'" class="modal-title">Campos obligatorios</h4>
                <h4 *ngIf="_stepService.language == 'fr'" class="modal-title">Champs obligatoire</h4>
              </div>
              <div class="modal-body">
                <p *ngIf="_stepService.language == 'en'">THANKS FOR FILL IN ALL THE MANDATOY FIELDS</p>
                <p *ngIf="_stepService.language == 'es'">GRACIAS POR RELLENAR TODOS LOS CAMPOS</p>
                <p *ngIf="_stepService.language == 'fr'">Merci de remplir tous les champs obligatoires</p>
              </div>
              <div class="modal-footer">
                <button *ngIf="_stepService.language == 'en'" type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                <button *ngIf="_stepService.language == 'es'" type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                <button *ngIf="_stepService.language == 'fr'" type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
              </div>
            </div>
        
          </div>
        </div>
             <div *ngIf="btnDisabled"><i class="fa fa-spinner fa-spin" style="font-size:96px"></i></div>       
             <!--<button type="submit" class="btn btn-primary" [disabled]="myGroup.invalid">Valider</button>-->
             <div align="center">
                <button [disabled]="btnDisabled" *ngIf="_stepService.language == 'en'" type="button" data-target="#myModal" (click)="onClick()" class="btn btn-default btn-lg">   Send   </button>
                <button [disabled]="btnDisabled" *ngIf="_stepService.language == 'es'" type="button" data-target="#myModal" (click)="onClick()" class="btn btn-default btn-lg">   Enviar  </button>
                <button [disabled]="btnDisabled" *ngIf="_stepService.language == 'fr'" type="button" data-target="#myModal" (click)="onClick()" class="btn btn-default btn-lg">   Envoyer  </button>
                <button [disabled]="btnDisabled" *ngIf="_stepService.language == 'nl'" type="button" data-target="#myModal" (click)="onClick()" class="btn btn-default btn-lg">   VERZENDEN  </button>
             </div>
                </div>   
    </form>
    </div> 
 </div>
`
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, form_service_1.FormService, step_service_1.StepService])
], FieldPanelComponent);
exports.FieldPanelComponent = FieldPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBb0U7QUFDcEUsMENBQTBGO0FBQzFGLGlEQUEyQztBQUMzQyx5RUFBMEQ7QUFDMUQseURBQW1EO0FBeU1uRCxJQUFhLG1CQUFtQixHQUFoQztJQUtJLFlBQW9CLEdBQWdCLEVBQVMsWUFBeUIsRUFBVSxZQUF5QjtRQUFyRixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUYvRixTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFLcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxpQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLFFBQUcsR0FBRyxJQUFJLGlCQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQVJwQixDQUFDO0lBVUQsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8s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QUFBO0FBdElZO0lBQVIsWUFBSyxFQUFFOztvREFBUztBQUNSO0lBQVIsWUFBSyxFQUFFOztvREFBUztBQUNQO0lBQVQsYUFBTSxFQUFFOztpREFBMkI7QUFIM0IsbUJBQW1CO0lBeE0vQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FtTWI7S0FDQSxDQUFDO3FDQU8yQixtQkFBVyxFQUF1QiwwQkFBVyxFQUF3QiwwQkFBVztHQUxoRyxtQkFBbUIsQ0F1SS9CO0FBdklZLGtEQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkUGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCAkIDogYW55O1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXl9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbWFpbFZhbGlkYXRvcn0gZnJvbSBcIi4vZW1haWxWYWxpZGF0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWVsZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj5cclxuICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L3A+XHJcbiAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX0gPC9wPlxyXG4gICAgICAgIDxwICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9mcn19IDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8Zm9ybSAgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiBuYW1lPVwie3tvYmpTdGVwLm5hbWV9fVwiICA+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+ICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICA8IS0tLyogRk9STUFUIENvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tW3sgIG5hbWUsICAgICA6aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCAgdHlwZSA6c3RyaW5nLCBudW1iZXItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tfV0tLT5cclxuICAgICAgICAgICAgICAgPCEtLSovIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC50eXBlID09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbbmdDbGFzc109XCJ7J2hhcy1lcnJvcic6IW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e2ZpZWxkLmxhYmVsX2VzfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICAgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7ZmllbGQubGFiZWxfZnJ9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA9PSAwXCIgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA+IDBcIiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCI+RXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIj5DaGFtcHMgb2JsaWdhdG9pcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5oYXNFcnJvcignbWluJykgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiPkZpZWxkIG11c3QgYmUgYXQgbGVhc3Qge3tmaWVsZC5taW5sZW5ndGh9fSBjaGFyYWN0ZXJzIGxvbmcuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCI+Q2UgY2hhbXBzIGRvaXQgY29udGVuaXIgYXUgbWluaW11bSB7e2ZpZWxkLm1pbmxlbmd0aH19IGNhcmFjdMOocmVzLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAnbnVtYmVyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e2ZpZWxkLmxhYmVsX2VzfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbF9mcn19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImkgPT0gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID4gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZFwiPjwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0uaGFzRXJyb3IoJ21pbicpICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+VmV1aWxsZXogaW5kaXF1ZXIgdW4gbm9tYnJlIHBsdXMgZ3JhbmQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLnR5cGUgPT0gJ2RhdGUnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW25nQ2xhc3NdPVwieydoYXMtZXJyb3InOiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7ZmllbGQubGFiZWxfZXN9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e2ZpZWxkLmxhYmVsX2ZyfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPSdkYXRlJyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT0ne3tmaWVsZC5uYW1lfX0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImZpZWxkLnR5cGUgPT0gJ2VtYWlsJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiIFtuZ0NsYXNzXT1cInsnaGFzLWVycm9yJzohbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWR9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIj5FTUFJTDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA9PSAwXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1cyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA+IDBcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiPiBXZSBuZWVkIGEgdmFsaWQgYWRyZXNzIGVtYWlsIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiPiBOZWNlc2l0YW1vcyB1bmEgZGlyZWNjacOzbiBkZSBlLW1haWwgY29ycmVjdGE8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIj4gTWVyY2kgZCdpbmRpcXVlciB1biBlLW1haWwgdmFsaWRlLjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgIGlkPVwibXlNb2RhbFwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1kaWFsb2dcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBNb2RhbCBjb250ZW50LS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+RmllbGRzIG1hbmRhdG9yeSA8L2g0PlxyXG4gICAgICAgICAgICAgICAgPGg0ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Q2FtcG9zIG9ibGlnYXRvcmlvczwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGNsYXNzPVwibW9kYWwtdGl0bGVcIj5DaGFtcHMgb2JsaWdhdG9pcmU8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCI+VEhBTktTIEZPUiBGSUxMIElOIEFMTCBUSEUgTUFOREFUT1kgRklFTERTPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiPkdSQUNJQVMgUE9SIFJFTExFTkFSIFRPRE9TIExPUyBDQU1QT1M8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCI+TWVyY2kgZGUgcmVtcGxpciB0b3VzIGxlcyBjaGFtcHMgb2JsaWdhdG9pcmVzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2VycmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPkZlcm1lcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJ0bkRpc2FibGVkXCI+PGkgY2xhc3M9XCJmYSBmYS1zcGlubmVyIGZhLXNwaW5cIiBzdHlsZT1cImZvbnQtc2l6ZTo5NnB4XCI+PC9pPjwvZGl2PiAgICAgICBcclxuICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIFtkaXNhYmxlZF09XCJteUdyb3VwLmludmFsaWRcIj5WYWxpZGVyPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidG5EaXNhYmxlZFwiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj4gICBTZW5kICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidG5EaXNhYmxlZFwiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj4gICBFbnZpYXIgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiYnRuRGlzYWJsZWRcIiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXCI+ICAgRW52b3llciAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidG5EaXNhYmxlZFwiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCdcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj4gICBWRVJaRU5ERU4gIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PiBcclxuIDwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgRmllbGRQYW5lbENvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwOyAgICAgLy9WYWx1ZSByZWNlaXZlZCBmcm9tIE1haW5Db21wb25lbnRcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIHNlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlciwgcHVibGljIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIHRlbXBEaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBteUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7fSk7XHJcbiAgICBhcnIgPSBuZXcgRm9ybUFycmF5KFtdKTtcclxuICAgIGVycm9yRm9ybSA9IGZhbHNlO1xyXG4gICAgYXBwX25hbWU7XHJcbiAgICBidG5EaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnTmdPbkluaXQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgICAgIHRoaXMuYXBwX25hbWUgPSB0aGlzLm9ialN0ZXAubWFzdGVyX25hbWU7XHJcbiAgICAgICAgLy8gQ0hFQ0sgSUYgVEhJUyBNVVNUIERJU1BMQVlFRFxyXG4gICAgICAgIGlmICh0aGlzLm9ialN0ZXAuY29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkeCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKGtleUNvbmRpdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodmFsdWVDb25kaXRpb24gPT0gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0bXBTdGVwSWR4XVtrZXlDb25kaXRpb25dKXtcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcERpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRlbXBEaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRlbXBEaXNwbGF5KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgICAgICAgICAvLyBBREQgQUxMIFNQRUNJRklDIENPTlRST0wgRk9SIEVBQ0ggRklFTERcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0pXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0uYXV0b2ZvY3VzKSA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5hdXRvZm9jdXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lKTsgICAvLyAxID0gTk9NIDsgMiA9IEVNQUlMXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLnR5cGUgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlHcm91cC5hZGRDb250cm9sKFt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZV0udG9Mb2NhbGVTdHJpbmcoKSwgbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgRW1haWxWYWxpZGF0b3IuY2hlY2tFbWFpbF0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubXlHcm91cC5hZGRDb250cm9sKFt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0ubmFtZV0udG9Mb2NhbGVTdHJpbmcoKSwgbmV3IEZvcm1Db250cm9sKCcnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMildKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU0VUIEZJRUxEIFZBTFVFIElGIEEgREFUQSBIQVMgQkVFTiBJTlNFUlRFRCBQUkVWSU9VU0xZXHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqRmllbGRzUGFuZWwgPSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeSA9PiB5W1wibm9tXCJdID09PSB0aGlzLm9ialN0ZXAubmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJvYmpGaWVsZHNQYW5lbFwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG9iakZpZWxkc1BhbmVsKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqRmllbGRzUGFuZWxbdGhpcy5vYmpTdGVwLm5hbWVdW2luZGV4XSlcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqRmllbGRzUGFuZWwgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpGaWVsZHNQYW5lbFt0aGlzLm9ialN0ZXAubmFtZV1baW5kZXhdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlGaWVsZCA9IG9iakZpZWxkc1BhbmVsW3RoaXMub2JqU3RlcC5uYW1lXVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZpZWxkID0ga2V5RmllbGRbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15R3JvdXAuY29udHJvbHNbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdLnNldFZhbHVlKHZhbHVlRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLmludmFsaWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLmludmFsaWQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlUGhvbmUoYzogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICAvLyAgICAgbGV0IFBIT05FX1JFR0VYUCA9IC9eKD86KD86XFwoPyg/OjAwfFxcKykoWzEtNF1cXGRcXGR8WzEtOV1cXGQ/KVxcKT8pP1tcXC1cXC5cXCBcXFxcXFwvXT8pPygoPzpcXCg/XFxkezEsfVxcKT9bXFwtXFwuXFwgXFxcXFxcL10/KXswLH0pKD86W1xcLVxcLlxcIFxcXFxcXC9dPyg/OiN8ZXh0XFwuP3xleHRlbnNpb258eClbXFwtXFwuXFwgXFxcXFxcL10/KFxcZCspKT8kL2k7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBQSE9ORV9SRUdFWFAudGVzdChjLnZhbHVlKSA/IG51bGwgOiB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YWxpZGF0ZVBob25lOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICAvLyBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAuY29udHJvbHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cC5pbnZhbGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAudmFsaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXlHcm91cC52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKTtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzFdLm5hbWVdLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXNOYW1lID0gW107XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXNTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNOYW1lLnB1c2godGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNTZWxlY3RlZC5wdXNoKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZW50LmVtaXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVOYW1lOiB2YWx1ZXNOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQ6IHZhbHVlc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBJZHg6IHRoaXMuc3RlcElkeCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm9ialN0ZXAubmFtZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI215TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
