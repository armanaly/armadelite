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
                console.log(objFieldsPanel[this.objStep.name][index]);
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
                                    <div *ngIf="_stepService.language == 'nl'">Dit veld is vermeld</div>
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
                             <!--<label *ngIf="_stepService.language == 'es'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_es}} </label>-->
                             <!--<label *ngIf="_stepService.language == 'fr'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_fr}} </label>-->
                             <!--<label *ngIf="_stepService.language == 'nl'" for="{{field.value}}"  class="col-sm-2 control-label" >{{field.label_nl}} </label>-->
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
                          <div class="alert alert-danger" role="alert" *ngIf="!myGroup.controls[field.name].valid && myGroup.controls[field.name].touched ">
                                    <div>ERROR</div>
                                    <div *ngIf="_stepService.language == 'en'">This field is required</div>
                                    <div *ngIf="_stepService.language == 'nl'">Dit veld is vermeld</div>
                                    <div *ngIf="_stepService.language == 'es'">Este campo es obligatorio</div>
                                    <div *ngIf="_stepService.language == 'fr'">Champs obligatoire</div>
                          </div>
                         
                         
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBb0U7QUFDcEUsMENBQTBGO0FBQzFGLGlEQUEyQztBQUMzQyx5RUFBMEQ7QUFDMUQseURBQW1EO0FBbU5uRCxJQUFhLG1CQUFtQixHQUFoQztJQUtJLFlBQW9CLEdBQWdCLEVBQVMsWUFBeUIsRUFBVSxZQUF5QjtRQUFyRixRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUYvRixTQUFJLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFLcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxpQkFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLFFBQUcsR0FBRyxJQUFJLGlCQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixnQkFBVyxHQUFHLEtBQUssQ0FBQztJQVJwQixDQUFDO0lBVUQsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8s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Q0FBQyxDQUFDO1lBQ0YsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMvQixDQUFDO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUF0SVk7SUFBUixZQUFLLEVBQUU7O29EQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7O29EQUFTO0FBQ1A7SUFBVCxhQUFNLEVBQUU7O2lEQUEyQjtBQUgzQixtQkFBbUI7SUFsTi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2TWI7S0FDQSxDQUFDO3FDQU8yQixtQkFBVyxFQUF1QiwwQkFBVyxFQUF3QiwwQkFBVztHQUxoRyxtQkFBbUIsQ0F1SS9CO0FBdklZLGtEQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkUGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCAkIDogYW55O1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3JtQXJyYXl9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtFbWFpbFZhbGlkYXRvcn0gZnJvbSBcIi4vZW1haWxWYWxpZGF0b3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdmaWVsZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj5cclxuICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L3A+XHJcbiAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX0gPC9wPlxyXG4gICAgICAgIDxwICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9mcn19IDwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICA8Zm9ybSAgY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiBuYW1lPVwie3tvYmpTdGVwLm5hbWV9fVwiICA+XHJcbiAgICAgICAgICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+ICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICA8IS0tLyogRk9STUFUIENvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tW3sgIG5hbWUsICAgICA6aWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLCAgdHlwZSA6c3RyaW5nLCBudW1iZXItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tfV0tLT5cclxuICAgICAgICAgICAgICAgPCEtLSovIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC50eXBlID09ICd0ZXh0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbbmdDbGFzc109XCJ7J2hhcy1lcnJvcic6IW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e2ZpZWxkLmxhYmVsX2VzfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICAgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7ZmllbGQubGFiZWxfZnJ9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA9PSAwXCIgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmxlbmd0aD1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZC5tYXhsZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaSA+IDBcIiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwie3tmaWVsZC5yZXF1aXJlZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5sZW5ndGg9XCJ7e2ZpZWxkLm1pbmxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cIm15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiPlRoaXMgZmllbGQgaXMgcmVxdWlyZWQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCI+RXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIj5DaGFtcHMgb2JsaWdhdG9pcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnbmwnXCI+RGl0IHZlbGQgaXMgdmVybWVsZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLmhhc0Vycm9yKCdtaW4nKSAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCI+RmllbGQgbXVzdCBiZSBhdCBsZWFzdCB7e2ZpZWxkLm1pbmxlbmd0aH19IGNoYXJhY3RlcnMgbG9uZy48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIj5DZSBjaGFtcHMgZG9pdCBjb250ZW5pciBhdSBtaW5pbXVtIHt7ZmllbGQubWlubGVuZ3RofX0gY2FyYWN0w6hyZXMuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJmaWVsZC50eXBlID09ICdudW1iZXInXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW25nQ2xhc3NdPVwieydoYXMtZXJyb3InOiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbH19IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e2ZpZWxkLmxhYmVsX2VzfX0gPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxhYmVsICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7ZmllbGQubGFiZWxfZnJ9fSA8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbF9ubH19IDwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cImkgPT0gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID4gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj1cInt7ZmllbGQubWlubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cInt7ZmllbGQubWF4bGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cIiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5FUlJPUjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIj5UaGlzIGZpZWxkIGlzIHJlcXVpcmVkPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJ1wiPkRpdCB2ZWxkIGlzIHZlcm1lbGQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCI+RXN0ZSBjYW1wbyBlcyBvYmxpZ2F0b3JpbzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIj5DaGFtcHMgb2JsaWdhdG9pcmU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5oYXNFcnJvcignbWluJykgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5WZXVpbGxleiBpbmRpcXVlciB1biBub21icmUgcGx1cyBncmFuZDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAnZGF0ZSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiBbbmdDbGFzc109XCJ7J2hhcy1lcnJvcic6IW15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsaWQgJiYgbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS50b3VjaGVkfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgZm9yPVwie3tmaWVsZC52YWx1ZX19XCIgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID57e2ZpZWxkLmxhYmVsfX0gPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGZvcj1cInt7ZmllbGQudmFsdWV9fVwiICBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+e3tmaWVsZC5sYWJlbF9lc319IDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPnt7ZmllbGQubGFiZWxfZnJ9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J2RhdGUnIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPSd7e2ZpZWxkLm5hbWV9fSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQudHlwZSA9PSAnZW1haWwnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgW25nQ2xhc3NdPVwieydoYXMtZXJyb3InOiFteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbGlkICYmIG15R3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udG91Y2hlZH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2ZpZWxkLnZhbHVlfX1cIiAgIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiPkVNQUlMOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID09IDBcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwie3tmaWVsZC50eXBlfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2VtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID4gMFwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7ZmllbGQudHlwZX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD1cInt7ZmllbGQucmVxdWlyZWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhbXlHcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWxpZCAmJiBteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnRvdWNoZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCI+IFdlIG5lZWQgYSB2YWxpZCBhZHJlc3MgZW1haWwgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCI+IE5lY2VzaXRhbW9zIHVuYSBkaXJlY2Npw7NuIGRlIGUtbWFpbCBjb3JyZWN0YTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiPiBNZXJjaSBkJ2luZGlxdWVyIHVuIGUtbWFpbCB2YWxpZGUuPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAgaWQ9XCJteU1vZGFsXCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIGNsYXNzPVwibW9kYWwtdGl0bGVcIj5GaWVsZHMgbWFuZGF0b3J5IDwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8aDQgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGNsYXNzPVwibW9kYWwtdGl0bGVcIj5DYW1wb3Mgb2JsaWdhdG9yaW9zPC9oND5cclxuICAgICAgICAgICAgICAgIDxoNCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgY2xhc3M9XCJtb2RhbC10aXRsZVwiPkNoYW1wcyBvYmxpZ2F0b2lyZTwvaDQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIj5USEFOS1MgRk9SIEZJTEwgSU4gQUxMIFRIRSBNQU5EQVRPWSBGSUVMRFM8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCI+R1JBQ0lBUyBQT1IgUkVMTEVOQVIgVE9ET1MgTE9TIENBTVBPUzwvcD5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIj5NZXJjaSBkZSByZW1wbGlyIHRvdXMgbGVzIGNoYW1wcyBvYmxpZ2F0b2lyZXM8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj5DZXJyYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+RmVybWVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYnRuRGlzYWJsZWRcIj48aSBjbGFzcz1cImZhIGZhLXNwaW5uZXIgZmEtc3BpblwiIHN0eWxlPVwiZm9udC1zaXplOjk2cHhcIj48L2k+PC9kaXY+ICAgICAgIFxyXG4gICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgW2Rpc2FibGVkXT1cIm15R3JvdXAuaW52YWxpZFwiPlZhbGlkZXI8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgIDxkaXYgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ0bkRpc2FibGVkXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPiAgIFNlbmQgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ0bkRpc2FibGVkXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPiAgIEVudmlhciAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCJidG5EaXNhYmxlZFwiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj4gICBFbnZveWVyICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gW2Rpc2FibGVkXT1cImJ0bkRpc2FibGVkXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJ1wiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPiAgIFZFUlpFTkRFTiAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+IFxyXG4gPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFBhbmVsQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7ICAgICAvL1ZhbHVlIHJlY2VpdmVkIGZyb20gTWFpbkNvbXBvbmVudFxyXG4gICAgQElucHV0KCkgc3RlcElkeDsgICAgIC8vVmFsdWUgcmVjZWl2ZWQgZnJvbSBNYWluQ29tcG9uZW50XHJcbiAgICBAT3V0cHV0KCkgc2VudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgdGVtcERpc3BsYXkgPSBmYWxzZTtcclxuICAgIG15R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHt9KTtcclxuICAgIGFyciA9IG5ldyBGb3JtQXJyYXkoW10pO1xyXG4gICAgZXJyb3JGb3JtID0gZmFsc2U7XHJcbiAgICBhcHBfbmFtZTtcclxuICAgIGJ0bkRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdOZ09uSW5pdCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XHJcbiAgICAgICAgdGhpcy5hcHBfbmFtZSA9IHRoaXMub2JqU3RlcC5tYXN0ZXJfbmFtZTtcclxuICAgICAgICAvLyBDSEVDSyBJRiBUSElTIE1VU1QgRElTUExBWUVEXHJcbiAgICAgICAgaWYgKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coa2V5Q29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWR4KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoa2V5Q29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmICh2YWx1ZUNvbmRpdGlvbiA9PSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RtcFN0ZXBJZHhdW2tleUNvbmRpdGlvbl0pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wRGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGVtcERpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXApO1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGVtcERpc3BsYXkpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XHJcbiAgICAgICAgICAgIC8vIEFERCBBTEwgU1BFQ0lGSUMgQ09OVFJPTCBGT1IgRUFDSCBGSUVMRFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XSlcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5hdXRvZm9jdXMpID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLmF1dG9mb2N1cyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUpOyAgIC8vIDEgPSBOT00gOyAyID0gRU1BSUxcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1tpbmRleF0udHlwZSA9PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUdyb3VwLmFkZENvbnRyb2woW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS50b0xvY2FsZVN0cmluZygpLCBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBFbWFpbFZhbGlkYXRvci5jaGVja0VtYWlsXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5teUdyb3VwLmFkZENvbnRyb2woW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS50b0xvY2FsZVN0cmluZygpLCBuZXcgRm9ybUNvbnRyb2woJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgyKV0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTRVQgRklFTEQgVkFMVUUgSUYgQSBEQVRBIEhBUyBCRUVOIElOU0VSVEVEIFBSRVZJT1VTTFlcclxuICAgICAgICAgICAgICAgIHZhciBvYmpGaWVsZHNQYW5lbCA9IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh5ID0+IHlbXCJub21cIl0gPT09IHRoaXMub2JqU3RlcC5uYW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9iakZpZWxkc1BhbmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqRmllbGRzUGFuZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cob2JqRmllbGRzUGFuZWxbdGhpcy5vYmpTdGVwLm5hbWVdW2luZGV4XSlcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqRmllbGRzUGFuZWwgIT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpGaWVsZHNQYW5lbFt0aGlzLm9ialN0ZXAubmFtZV1baW5kZXhdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlGaWVsZCA9IG9iakZpZWxkc1BhbmVsW3RoaXMub2JqU3RlcC5uYW1lXVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUZpZWxkID0ga2V5RmllbGRbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm15R3JvdXAuY29udHJvbHNbdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWVdLnNldFZhbHVlKHZhbHVlRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLmludmFsaWQpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5teUdyb3VwLmludmFsaWQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHZhbGlkYXRlUGhvbmUoYzogRm9ybUNvbnRyb2wpIHtcclxuICAgICAgICAvLyAgICAgbGV0IFBIT05FX1JFR0VYUCA9IC9eKD86KD86XFwoPyg/OjAwfFxcKykoWzEtNF1cXGRcXGR8WzEtOV1cXGQ/KVxcKT8pP1tcXC1cXC5cXCBcXFxcXFwvXT8pPygoPzpcXCg/XFxkezEsfVxcKT9bXFwtXFwuXFwgXFxcXFxcL10/KXswLH0pKD86W1xcLVxcLlxcIFxcXFxcXC9dPyg/OiN8ZXh0XFwuP3xleHRlbnNpb258eClbXFwtXFwuXFwgXFxcXFxcL10/KFxcZCspKT8kL2k7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBQSE9ORV9SRUdFWFAudGVzdChjLnZhbHVlKSA/IG51bGwgOiB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YWxpZGF0ZVBob25lOiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gfTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICAvLyBvblN1Ym1pdCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAuY29udHJvbHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cC5pbnZhbGlkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15R3JvdXAudmFsaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlHcm91cCk7XHJcbiAgICAgICAgaWYgKHRoaXMubXlHcm91cC52YWxpZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm0nKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzBdLm5hbWUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmFsKHRoaXMub2JqU3RlcC5uYW1lKVt0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlc1swXS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKTtcclxuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzWzFdLm5hbWVdLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXNOYW1lID0gW107XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZXNTZWxlY3RlZCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNOYW1lLnB1c2godGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXNbaW5kZXhdLm5hbWUpXHJcbiAgICAgICAgICAgICAgICB2YWx1ZXNTZWxlY3RlZC5wdXNoKGV2YWwodGhpcy5vYmpTdGVwLm5hbWUpW3RoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzW2luZGV4XS5uYW1lXS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZW50LmVtaXQoXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVOYW1lOiB2YWx1ZXNOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQ6IHZhbHVlc1NlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBJZHg6IHRoaXMuc3RlcElkeCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm9ialN0ZXAubmFtZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI215TW9kYWxcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
