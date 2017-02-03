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
const router_1 = require("@angular/router");
const forms_1 = require("@angular/forms");
const form_service_1 = require("./form.service");
const step_service_1 = require("../Engine/step.service");
const collection_service_1 = require("../Engine/collection.service");
const mail_service_1 = require("../Engine/mail.service");
let MainComponent = class MainComponent {
    //formVehicule: ControlGroup;
    //formService: FormService;
    constructor(route, _fb, _formService, _stepService, _collectionService, _mailService) {
        this.route = route;
        this._fb = _fb;
        this._formService = _formService;
        this._stepService = _stepService;
        this._collectionService = _collectionService;
        this._mailService = _mailService;
        //model = new FormVehicule(0, false);
        this.submitted = false;
        //@Input() marque: Marque;
        this.stepId = 1;
        this.previousStepId = 0;
        this.indexStepObj = 0;
        this.labelPanel = "";
        this.datas = [];
        this.lists = [];
        this.my_form = new forms_1.FormGroup({
            mileage_input: new forms_1.FormControl()
        });
        // vehicules: Vehicule[];
        // confirm: boolean = false;
        // verifMileage: boolean = false;
        // missingMileage: boolean = false;
        this.tmp_id = '';
        this.progressBar = 0;
        this.customCollectionData = [];
    }
    ngOnInit() {
        console.log('init main Component');
        console.log(this._stepService.steps);
        var master_type = this._stepService.steps[0].master_type;
        this.current_step_id = this.route
            .queryParams
            .map(params => params['id'] || 'None');
        console.log(this.stepId);
        console.log(this.current_step_id);
        console.log(this._formService);
        // console.log(this.current_step_id.source._value.id);
        if (!(typeof this.current_step_id.source._value.current_id == 'undefined')) {
            if (this.current_step_id.source._value.current_id != 'None') {
                this.tmp_id = this.current_step_id.source._value._id;
                this.goToStep(this.current_step_id.source._value.current_id);
            }
        }
        else {
            //this.current_step_id = this.stepId;
            //this.datas = this._stepService.datas.slice();
            //console.log(this.datas);
            this.goToNextStep(-1);
        }
        // console.log(this._stepService);
        // cons ole.log(this._stepService.datas);
        console.log(this.datas);
        //  this.goToNextStep();
    }
    goPreviousStep($event) {
        this.indexStepObj = $event.newStepId;
        //this.labelPanel = this.steps[this.indexStepObj].labelPanel;
    }
    onSubmit() {
        this.submitted = true;
    }
    saveStep() {
        console.log('save');
    }
    /*
     this.stepId == CURRENT STEP ID
     this.tmp_id == DATA ID TO RETRIEVE ALL DATAS SELECTED FROM THIS WORKFLOW
     */
    goToStep(curStepId) {
        console.log("GO NEXT STEP : " + curStepId);
        console.log(this._formService);
        ;
        for (let i = 0; i < this._stepService.steps.length; i++) {
            if (this._stepService.steps[i].step_id == curStepId) {
                console.log('STEP ID : ' + this._stepService.steps[i].step_id);
                switch (this._stepService.steps[i].type) {
                    case 'click_selection':
                        console.log('LIST BUTTONS CASE');
                        console.log(this._stepService.steps[i].step_id);
                        if (typeof this._stepService.steps[i].configuration.collection != 'undefined') {
                            var filterList = [];
                            // for (var item of this._stepService.step) {
                            //     if (item.step_id == curStepId) {
                            var collectionName = this._stepService.steps[i].configuration.collection.name;
                            // console.log(item);
                            /*
                             TODO TESTER SI FILTER EXISTE DANS COLLECTION
                             */
                            // STEP_ID OU SE TROUVE LE NOM DE LA VARIABLE DE LA VALEUR A FILTRER
                            var valueToFilter = this._stepService.steps[i].configuration.collection.filter[0].step_id;
                            console.log(valueToFilter);
                            console.log(this._stepService.steps[i].configuration.collection.filter[0].step_id);
                            console.log(this._formService);
                            filterList = this._stepService.steps[i].configuration.collection.filter;
                            if (typeof this._stepService.steps[i].configuration.collection.value != 'undefined') {
                                var valueToKeep = this._stepService.steps[i].configuration.collection.value;
                            }
                            else {
                                valueToKeep = '';
                            }
                            //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
                            console.log(this.tmp_id);
                            if (typeof this._stepService.steps[i].configuration.collection.value != 'undefined') {
                                var valueToKeep = this._stepService.steps[i].configuration.collection.value;
                            }
                            else {
                                valueToKeep = '';
                            }
                            this._collectionService.getFormData(this.tmp_id, collectionName, filterList, valueToKeep)
                                .then(data => {
                                console.log('apres getFormData()');
                                console.log(data);
                                console.log('STEP SERVICE N' + i);
                                console.log(this._stepService.step[i]);
                                this._collectionService.getDatas(this._stepService.steps[i].configuration.collection.name, this._stepService.steps[i].configuration.collection.filter[0].step_id, valueToKeep)
                                    .then(result => {
                                    console.log(result);
                                    this.datas.push({
                                        "name": this._stepService.steps[i].name,
                                        "list": result
                                    });
                                    this.previousStepId = this.stepId;
                                    // this.stepId = this._stepService.step[this.indexStepObj].step_id;
                                    console.log(this.stepId);
                                    console.log(this.lists);
                                    console.log(this.datas);
                                    this.stepId = curStepId;
                                    console.log(this.stepId);
                                }, error => console.log(error));
                            }, error => console.log(error));
                        }
                        if (typeof this._stepService.steps[i].configuration.list != 'undefined') {
                            this.datas.push({ "name": this._stepService.steps[i].name, "list": this._stepService.steps[i].configuration.list });
                            this.stepId = curStepId;
                        }
                        break;
                    case 'field_panel':
                        console.log('FIELD PANEL CASE');
                        this.stepId = curStepId;
                        break;
                    default:
                        console.log('STEP TYPE: ' + this._stepService.steps[i].type + 'DOES NOT EXIST IN STEP.SERVICE ');
                }
                break;
            } //FIN SWITCH
            this.datas = this._stepService.datas.slice();
        }
    }
    goToNextStep(x) {
        console.log(this._stepService);
        console.log(this._formService);
        console.log("GO NEXT STEP");
        console.log(this._stepService.steps.length);
        console.log(x);
        this.indexStepObj = x;
        // IF A MAIL IS CONFIGURED IN STEP CONFIG
        if (typeof this._stepService.steps[this.indexStepObj].configuration.mail_id != "undefined" && this.indexStepObj > -1) {
            this._mailService.sendMail(this._stepService.steps[this.indexStepObj].configuration.mail_id)
                .subscribe(mailState => {
                console.log(mailState);
            }, error => console.log(error));
        }
        // if (this.indexStepObj <= 0 )
        // {
        this.indexStepObj++;
        //        }
        // while ( typeof this._stepService.step[this.indexStepObj] == 'undefined' ) {
        //      this.indexStepObj++;
        // }
        console.log("this.indexStepObj " + this.indexStepObj);
        console.log(this._stepService.steps[this.indexStepObj]);
        // TEMPORARY STEP_ID BECAUSE WE NEED TO WAIT FOR ASYNCHROUNOUS QUERY
        var tmpNewstepId = this._stepService.steps[this.indexStepObj].step_id;
        // console.log('indexStpObj :' + this.indexStepObj);
        // console.log('tmpNewStepId: '+  tmpNewstepId);
        // // this.previousStepId = this.stepId;
        /* IF LIST BUTTON COMPONENT */
        console.log(this._stepService.steps[this.indexStepObj].type);
        // if (this.indexStepObj > this._stepService.steps.length){
        //     console.log('save form')
        //     console.log(this._formService.arraySteps)
        // }
        // else {
        switch (this._stepService.steps[this.indexStepObj].type) {
            case 'click_selection':
                /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
                if (typeof this._stepService.steps[this.indexStepObj].configuration.collection != 'undefined') {
                    console.log("GET DATA FROM COLLECTION");
                    var filterList = [];
                    //for (var item of this._stepService.step) {
                    //if (this._stepService.step[this.indexStepObj].step_id == tmpNewstepId) {
                    var collectionName = this._stepService.steps[this.indexStepObj].configuration.collection.name;
                    console.log(this._stepService.steps[this.indexStepObj]);
                    /*
                     TODO TESTER SI FILTER EXISTE DANS COLLECTION
                     */
                    // STEP_ID OU SE TROUVE LE NOM DE LA VARIABLE DE LA VALEUR A FILTRER
                    var valueToFilter = this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id;
                    console.log(valueToFilter);
                    console.log(this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id);
                    console.log(this._formService);
                    filterList = this._stepService.steps[this.indexStepObj].configuration.collection.filter;
                    // }
                    // if (Number(item.step_id) == Number(this.previousStepId)) {
                    //     console.log(item.configuration);
                    //     var valueFilterList = item.configuration.form_value.name;
                    // }
                    // SET NOM DE VARIABLE TO SAVE IN FORM SERVICE
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.collection.value != 'undefined') {
                        var valueToKeep = this._stepService.steps[this.indexStepObj].configuration.collection.value;
                    }
                    else {
                        valueToKeep = '';
                    }
                    //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
                    console.log(this.tmp_id);
                    this._collectionService.getDatas(collectionName, filterList, valueToKeep)
                        .then(data => {
                        console.log(data);
                        this.lists.push(data);
                        this.datas.push({
                            "name": this._stepService.steps[this.indexStepObj].name,
                            "list": data
                        });
                        this.previousStepId = this.stepId;
                        // this.stepId = this._stepService.step[this.indexStepObj].step_id;
                        console.log(this.stepId);
                        console.log(this.lists);
                        console.log(this.datas);
                        this.stepId = tmpNewstepId;
                        console.log(this.stepId);
                    }, error => console.log(error));
                }
                //IF DATA ARE STORED IN A LIST IN CONFIG FILE
                if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                    console.log("GET DATA FROM LIST");
                    this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                    this.datas.push({
                        "name": this._stepService.steps[this.indexStepObj].name,
                        "list": this._stepService.steps[this.indexStepObj].configuration.list
                    });
                    console.log(this.datas);
                    this.stepId = tmpNewstepId;
                }
                break;
            case 'image_selection':
                if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                    console.log("GET DATA FROM LIST");
                    this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                    this.datas.push({
                        "name": this._stepService.steps[this.indexStepObj].name,
                        "list": this._stepService.steps[this.indexStepObj].configuration.list
                    });
                    console.log(this.datas);
                    this.stepId = tmpNewstepId;
                }
                break;
            case 'field_panel':
                console.log('ici');
                this.stepId = tmpNewstepId;
                break;
            default:
                console.log('default');
        }
        // }
    }
    onValueSelected($event) {
        console.log($event.valueSelected);
        console.log($event.valueName);
        console.log(this.indexStepObj);
        var tmpObj = {};
        tmpObj[$event.valueName] = $event.valueSelected;
        this._formService.current_step_id = $event.stepId;
        this._formService.arraySteps[this.indexStepObj] = tmpObj;
        console.log("event.stepIdx: " + $event.stepIdx);
        console.log(tmpObj);
        this.goToNextStep($event.stepIdx);
    }
    /* WHEN SUBMITING */
    onSubmitingFields($event) {
        console.log('OnSubmitingFields');
        console.log($event.valueSelected[0]);
        console.log($event);
        // console.log(this._formService.arraySteps);
        // console.log($event.valueName);
        this._formService.current_step_id = $event.stepId;
        for (let j = 0; j < this._formService.arraySteps.length; j++) {
            //console.log(this._formService.arraySteps[j].keys);
            //console.log(this._formService.arraySteps[j].nom);
            if (this._formService.arraySteps[j].nom == $event.name) {
                let tmpKeyName = $event.name;
                console.log("tmpKeyName: " + tmpKeyName);
                for (let i = 0; i < $event.valueSelected.length; i++) {
                    let keyObject = $event.valueName[i];
                    let newValue = $event.valueSelected[i];
                    console.log("keyObject: " + keyObject);
                    console.log("newValue: " + newValue);
                    //                        console.log(this._formService.arraySteps[j][tmpKeyName][i][keyObject]);
                    //var tmpObj = {};
                    //let tmpSave = tmpKeyName+'['+i+'].'+keyObject;
                    //console.log(tmpSave);
                    // tmpObj[$event.valueName[i]= $event.valueSelected[i] ;
                    this._formService.arraySteps[j][tmpKeyName][i][keyObject] = newValue;
                    //this._formService.arraySteps[j][eval(tmpSave)] = newValue;
                    console.log(this._formService.arraySteps[j][tmpKeyName][i][keyObject]);
                    console.log(' ');
                }
            }
        }
        console.log(this._formService.arraySteps);
        console.log(this._formService);
        //
        // var tmpObj = {};
        // for (let i =0;i<$event.valueSelected.length;i++){
        //     tmpObj[$event.valueName[i]] = $event.valueSelected[i]
        // }
        // console.log(tmpObj);
        //this._formService.arraySteps[this.indexStepObj] = tmpObj;
        this.goToNextStep($event.stepIdx);
    }
    getSelections($event) {
        console.log($event);
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: 'vehicule-detail',
        template: `
 
<div class="panel panel-default">
   
<!--<p>Session ID: {{ current_step_id | async }}</p>-->
    <div class="row" align="center">
        
            <!--<div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>-->
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> NEW FORM</a></button></div>
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Ajouter contact </a></button></div>-->
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Lister contacts </a></button></div>-->
            <div>
            
             <!--*ngFor="let valeurList of _formService"-->
            </div>
    </div>
    <br>
    
    
    <div *ngIf="this.step_id != 1"><previous-page></previous-page></div>
    
   <div *ngFor="let objStep of this._stepService.step; let i = index" >
        <!-- IMAGE LIST BUTTON PANEL -->
        <div *ngIf="objStep.type == 'image_selection' ">
            <panel-btn-img
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep" 
                    [stepIdx]="i"
                    [valueSelected]="objStep.configuration.selection"  
                    [listOfElements]="this.datas"
                    (change)="onValueSelected($event)">
            </panel-btn-img>
        </div>
        
        <!-- LIST BUTTON PANEL -->
        <div *ngIf="objStep.type == 'click_selection'">
            <list-buttons          
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep" 
                    [valueSelected]="objStep.configuration.selection"
                    [stepIdx]="i"
                    [listOfElements]="this.datas"
                    (change)="onValueSelected($event)"
            ></list-buttons>
        </div>

        <!-- MULTIPLE SELECTION LIST BUTTON-->
        <div *ngIf="objStep.type == 'multi_selection'">
            <multi-selection
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep" 
                    [valueSelected]="objStep.configuration.selection"
                    [stepIdx]="i"
                    [listOfElements]="this.datas"
                    (change)="getSelections($event)"         
            ></multi-selection>        
        </div>
        
        <!--- FIELD PANEL --->
        <div *ngIf="objStep.type == 'field_panel'">
            <field-panel          
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep"
                    [stepIdx]="i"
                    (sent)="onSubmitingFields($event)"
            ></field-panel>
        </div>
        
 </div>
      <progress class="progress progress-danger" [attr.value]="progressBar" max="100" ></progress>
<save-button
    *ngIf="this._stepService.step[0].master_type == 'workflow'"
    (saveStep)="saveStep($event)"
    [stepId]="this.stepId"
>

</save-button>
</div>
<!--<div class="panel-body panel-body-custom" >-->


<!--<div class="panel panel-default">-->




<!--<div class="panel-heading-custom" align="center">-->
    <!--<previous-page-->
        <!--*ngIf="stepId != 10"-->
        <!--[stepId]="this.stepId" -->
        <!--[currentStep]="this.steps" -->
        <!--(change)="goPreviousStep($event)">-->
    <!--</previous-page>-->
 <!--</div>-->

    <!---->
<!--<div class="panel panel-default" *ngIf="stepId == 90">-->
   <!--<div class="panel-heading panel-heading-custom" align="center">INDIQUEZ LE KILOMETRAGE DU VEHICULE </div>-->
   <!--<div class="panel-body">-->
   <!--<form [formGroup] = "my_form"   >-->
        <!--<label for="mileage_input" align="center"></label>-->
        <!--&lt;!&ndash;<input id="mileageInput" type="text" ngControl="mileageInput" #mileageInput="ngForm" class="form-control">&ndash;&gt;-->
        <!--<input formControlName="mileage_input"-->
               <!--name="mileage_input" type="number" #mileage_input-->
               <!--id="mileage_input" class="form-control"-->
               <!--required>-->
        <!--<div *ngIf="missingMileage" class="alert alert-danger">Kilométrage est requis.</div>-->
        <!--<button type="button"  (click)="onSubmitMileage(mileage_input)" class="btn btn-primary btn-primary-custom">SUIVANT</button>-->
    <!--</form>-->
    <!--</div>-->
<!--</div>-->

    <!---->
    <!---->
    
<!--</div>-->
<!--</div> -->

<!--<nav>-->
    <!--<div><a [routerLink]="['/state']"> VERS ETAPE 2 </a></div>-->
<!--</nav>-->
`,
        styles: [` nav{    
            width: 150px;
            float: left;
            display: inline;
            margin: 0;
            padding: 0;
            margin-right: 10px;
            }`]
    }), 
    __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, form_service_1.FormService, step_service_1.StepService, collection_service_1.CollectionService, mail_service_1.MailService])
], MainComponent);
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUMsZUFDdkMsQ0FBQyxDQURxRDtBQUN0RCx5QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBOEQsZ0JBQWdCLENBQUMsQ0FBQTtBQUkvRSwrQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCxxQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUcvRCwrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQXdJbkQ7SUFpQkksNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixZQUNZLEtBQXFCLEVBQVUsR0FBZ0IsRUFDaEQsWUFBeUIsRUFBUyxZQUF5QixFQUMzRCxrQkFBcUMsRUFBUyxZQUF5QjtRQUZ0RSxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDaEQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUMzRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFyQmxGLHFDQUFxQztRQUNyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBSW5CLDBCQUEwQjtRQUN6QixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUVKLFlBQU8sR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDM0IsYUFBYSxFQUFFLElBQUksbUJBQVcsRUFBRTtTQUNuQyxDQUFDLENBQUM7UUFTSCx5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGlDQUFpQztRQUNqQyxt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LEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXlIYjtRQUVHLE1BQU0sRUFBRSxDQUFDOzs7Ozs7O2NBT0MsQ0FBQztLQUVkLENBQUM7O2lCQUFBO0FBQ1cscUJBQWEsZ0JBb2N6QixDQUFBIiwiZmlsZSI6InZlaGljdWxlL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQge1N0ZXBNb2RlbH0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwTW9kZWxcIjtcclxuXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVoaWN1bGUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiBcclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgXHJcbjwhLS08cD5TZXNzaW9uIElEOiB7eyBjdXJyZW50X3N0ZXBfaWQgfCBhc3luYyB9fTwvcD4tLT5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tPGRpdiAgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCI+IERhdGEgZ3JpZCA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5FVyBGT1JNPC9hPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy8nXVwiPiBBam91dGVyIGNvbnRhY3QgPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy8nXVwiPiBMaXN0ZXIgY29udGFjdHMgPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIDwhLS0qbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBfZm9ybVNlcnZpY2VcIi0tPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyPlxyXG4gICAgXHJcbiAgICBcclxuICAgIDxkaXYgKm5nSWY9XCJ0aGlzLnN0ZXBfaWQgIT0gMVwiPjxwcmV2aW91cy1wYWdlPjwvcHJldmlvdXMtcGFnZT48L2Rpdj5cclxuICAgIFxyXG4gICA8ZGl2ICpuZ0Zvcj1cImxldCBvYmpTdGVwIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXA7IGxldCBpID0gaW5kZXhcIiA+XHJcbiAgICAgICAgPCEtLSBJTUFHRSBMSVNUIEJVVFRPTiBQQU5FTCAtLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIFwiPlxyXG4gICAgICAgICAgICA8cGFuZWwtYnRuLWltZ1xyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uVmFsdWVTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDwvcGFuZWwtYnRuLWltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIExJU1QgQlVUVE9OIFBBTkVMIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2NsaWNrX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgPGxpc3QtYnV0dG9ucyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlU2VsZWN0ZWRdPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLnNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2xpc3RPZkVsZW1lbnRzXT1cInRoaXMuZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25WYWx1ZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9saXN0LWJ1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gTVVMVElQTEUgU0VMRUNUSU9OIExJU1QgQlVUVE9OLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnbXVsdGlfc2VsZWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICA8bXVsdGktc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImdldFNlbGVjdGlvbnMoJGV2ZW50KVwiICAgICAgICAgXHJcbiAgICAgICAgICAgID48L211bHRpLXNlbGVjdGlvbj4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0tIEZJRUxEIFBBTkVMIC0tLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdmaWVsZF9wYW5lbCdcIj5cclxuICAgICAgICAgICAgPGZpZWxkLXBhbmVsICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZW50KT1cIm9uU3VibWl0aW5nRmllbGRzKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9maWVsZC1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuIDwvZGl2PlxyXG4gICAgICA8cHJvZ3Jlc3MgY2xhc3M9XCJwcm9ncmVzcyBwcm9ncmVzcy1kYW5nZXJcIiBbYXR0ci52YWx1ZV09XCJwcm9ncmVzc0JhclwiIG1heD1cIjEwMFwiID48L3Byb2dyZXNzPlxyXG48c2F2ZS1idXR0b25cclxuICAgICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXS5tYXN0ZXJfdHlwZSA9PSAnd29ya2Zsb3cnXCJcclxuICAgIChzYXZlU3RlcCk9XCJzYXZlU3RlcCgkZXZlbnQpXCJcclxuICAgIFtzdGVwSWRdPVwidGhpcy5zdGVwSWRcIlxyXG4+XHJcblxyXG48L3NhdmUtYnV0dG9uPlxyXG48L2Rpdj5cclxuPCEtLTxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5IHBhbmVsLWJvZHktY3VzdG9tXCIgPi0tPlxyXG5cclxuXHJcbjwhLS08ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPi0tPlxyXG5cclxuXHJcblxyXG5cclxuPCEtLTxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+LS0+XHJcbiAgICA8IS0tPHByZXZpb3VzLXBhZ2UtLT5cclxuICAgICAgICA8IS0tKm5nSWY9XCJzdGVwSWQgIT0gMTBcIi0tPlxyXG4gICAgICAgIDwhLS1bc3RlcElkXT1cInRoaXMuc3RlcElkXCIgLS0+XHJcbiAgICAgICAgPCEtLVtjdXJyZW50U3RlcF09XCJ0aGlzLnN0ZXBzXCIgLS0+XHJcbiAgICAgICAgPCEtLShjaGFuZ2UpPVwiZ29QcmV2aW91c1N0ZXAoJGV2ZW50KVwiPi0tPlxyXG4gICAgPCEtLTwvcHJldmlvdXMtcGFnZT4tLT5cclxuIDwhLS08L2Rpdj4tLT5cclxuXHJcbiAgICA8IS0tLS0+XHJcbjwhLS08ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic3RlcElkID09IDkwXCI+LS0+XHJcbiAgIDwhLS08ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+SU5ESVFVRVogTEUgS0lMT01FVFJBR0UgRFUgVkVISUNVTEUgPC9kaXY+LS0+XHJcbiAgIDwhLS08ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPi0tPlxyXG4gICA8IS0tPGZvcm0gW2Zvcm1Hcm91cF0gPSBcIm15X2Zvcm1cIiAgID4tLT5cclxuICAgICAgICA8IS0tPGxhYmVsIGZvcj1cIm1pbGVhZ2VfaW5wdXRcIiBhbGlnbj1cImNlbnRlclwiPjwvbGFiZWw+LS0+XHJcbiAgICAgICAgPCEtLSZsdDshJm5kYXNoOzxpbnB1dCBpZD1cIm1pbGVhZ2VJbnB1dFwiIHR5cGU9XCJ0ZXh0XCIgbmdDb250cm9sPVwibWlsZWFnZUlucHV0XCIgI21pbGVhZ2VJbnB1dD1cIm5nRm9ybVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCI+Jm5kYXNoOyZndDstLT5cclxuICAgICAgICA8IS0tPGlucHV0IGZvcm1Db250cm9sTmFtZT1cIm1pbGVhZ2VfaW5wdXRcIi0tPlxyXG4gICAgICAgICAgICAgICA8IS0tbmFtZT1cIm1pbGVhZ2VfaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgI21pbGVhZ2VfaW5wdXQtLT5cclxuICAgICAgICAgICAgICAgPCEtLWlkPVwibWlsZWFnZV9pbnB1dFwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cclxuICAgICAgICAgICAgICAgPCEtLXJlcXVpcmVkPi0tPlxyXG4gICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwibWlzc2luZ01pbGVhZ2VcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPktpbG9tw6l0cmFnZSBlc3QgcmVxdWlzLjwvZGl2Pi0tPlxyXG4gICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiAgKGNsaWNrKT1cIm9uU3VibWl0TWlsZWFnZShtaWxlYWdlX2lucHV0KVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlNVSVZBTlQ8L2J1dHRvbj4tLT5cclxuICAgIDwhLS08L2Zvcm0+LS0+XHJcbiAgICA8IS0tPC9kaXY+LS0+XHJcbjwhLS08L2Rpdj4tLT5cclxuXHJcbiAgICA8IS0tLS0+XHJcbiAgICA8IS0tLS0+XHJcbiAgICBcclxuPCEtLTwvZGl2Pi0tPlxyXG48IS0tPC9kaXY+IC0tPlxyXG5cclxuPCEtLTxuYXY+LS0+XHJcbiAgICA8IS0tPGRpdj48YSBbcm91dGVyTGlua109XCJbJy9zdGF0ZSddXCI+IFZFUlMgRVRBUEUgMiA8L2E+PC9kaXY+LS0+XHJcbjwhLS08L25hdj4tLT5cclxuYCxcclxuXHJcbiAgICBzdHlsZXM6IFtgIG5hdnsgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1gXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy9tb2RlbCA9IG5ldyBGb3JtVmVoaWN1bGUoMCwgZmFsc2UpO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG5cclxuICAgIGN1cnJlbnRfc3RlcF9pZDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAvL0BJbnB1dCgpIG1hcnF1ZTogTWFycXVlO1xyXG4gICAgc3RlcElkID0gMTtcclxuICAgIHByZXZpb3VzU3RlcElkID0gMDtcclxuICAgIGluZGV4U3RlcE9iaiA9IDA7XHJcbiAgICBsYWJlbFBhbmVsID0gXCJcIjtcclxuICAgIGRhdGFzID0gW107XHJcbiAgICBsaXN0cyA9IFtdO1xyXG5cclxuICAgIHB1YmxpYyBteV9mb3JtID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICAgbWlsZWFnZV9pbnB1dDogbmV3IEZvcm1Db250cm9sKClcclxuICAgIH0pO1xyXG4gICAgLy9mb3JtVmVoaWN1bGU6IENvbnRyb2xHcm91cDtcclxuICAgIC8vZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHVibGljIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIF9jb2xsZWN0aW9uU2VydmljZTogQ29sbGVjdGlvblNlcnZpY2UsIHB1YmxpYyBfbWFpbFNlcnZpY2U6IE1haWxTZXJ2aWNlKVxyXG4gICAgICAgIHt9XHJcblxyXG4gICAgLy8gdmVoaWN1bGVzOiBWZWhpY3VsZVtdO1xyXG4gICAgLy8gY29uZmlybTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gdmVyaWZNaWxlYWdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBtaXNzaW5nTWlsZWFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdG1wX2lkID0gJyc7XHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3NCYXI6bnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGVwczogU3RlcE1vZGVsW107XHJcbiAgICBjdXN0b21Db2xsZWN0aW9uRGF0YT0gW107XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbmNvbnNvbGUubG9nKCdpbml0IG1haW4gQ29tcG9uZW50Jyk7XHJcbmNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICB2YXIgbWFzdGVyX3R5cGUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRfc3RlcF9pZCA9IHRoaXMucm91dGVcclxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXHJcbiAgICAgICAgICAgIC5tYXAocGFyYW1zID0+IHBhcmFtc1snaWQnXSB8fCAnTm9uZSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50X3N0ZXBfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmlkKTtcclxuICAgICAgICBpZiAoISh0eXBlb2YgdGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5jdXJyZW50X2lkID09ICd1bmRlZmluZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5jdXJyZW50X2lkICE9ICdOb25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50bXBfaWQgPSB0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLl9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9TdGVwKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudF9zdGVwX2lkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kYXRhcyA9IHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIC8vIGNvbnMgb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5kYXRhcyk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgLy8gIHRoaXMuZ29Ub05leHRTdGVwKCk7XHJcbn1cclxuXHJcbiAgICBnb1ByZXZpb3VzU3RlcCgkZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqID0gJGV2ZW50Lm5ld1N0ZXBJZDtcclxuICAgICAgICAvL3RoaXMubGFiZWxQYW5lbCA9IHRoaXMuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmxhYmVsUGFuZWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RlcCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICB0aGlzLnN0ZXBJZCA9PSBDVVJSRU5UIFNURVAgSURcclxuICAgICB0aGlzLnRtcF9pZCA9PSBEQVRBIElEIFRPIFJFVFJJRVZFIEFMTCBEQVRBUyBTRUxFQ1RFRCBGUk9NIFRISVMgV09SS0ZMT1dcclxuICAgICAqL1xyXG5cclxuICAgIGdvVG9TdGVwKGN1clN0ZXBJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR08gTkVYVCBTVEVQIDogXCIgKyBjdXJTdGVwSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTs7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zdGVwU2VydmljZS5zdGVwcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQgPT0gY3VyU3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBJRCA6ICcgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5zdGVwX2lkKVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2tfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xJU1QgQlVUVE9OUyBDQVNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gY3VyU3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEVQX0lEIE9VIFNFIFRST1VWRSBMRSBOT00gREUgTEEgVkFSSUFCTEUgREUgTEEgVkFMRVVSIEEgRklMVFJFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0ZpbHRlciA9ICB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlVG9GaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0tlZXAgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvS2VlcCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lKS50aGVuKGNvbGxlY3Rpb25EYXRhUmV0dXJuID0+IHRoaXMubGlzdHMucHVzaChjb2xsZWN0aW9uRGF0YVJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldEZvcm1EYXRhKHRoaXMudG1wX2lkLCBjb2xsZWN0aW9uTmFtZSwgZmlsdGVyTGlzdCwgdmFsdWVUb0tlZXAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcmVzIGdldEZvcm1EYXRhKCknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIFNFUlZJQ0UgTicgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXModGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLm5hbWUsIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCwgdmFsdWVUb0tlZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IGN1clN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1wibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5uYW1lICwgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24ubGlzdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmaWVsZF9wYW5lbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGSUVMRCBQQU5FTCBDQVNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gY3VyU3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NURVAgVFlQRTogJyArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnR5cGUgKyAnRE9FUyBOT1QgRVhJU1QgSU4gU1RFUC5TRVJWSUNFICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gLy9GSU4gU1dJVENIXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLl9zdGVwU2VydmljZS5kYXRhcy5zbGljZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdvVG9OZXh0U3RlcCh4KXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR08gTkVYVCBTVEVQXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLmxlbmd0aCk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9IHg7XHJcbiAgICAgICAgLy8gSUYgQSBNQUlMIElTIENPTkZJR1VSRUQgSU4gU1RFUCBDT05GSUdcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQgIT0gXCJ1bmRlZmluZWRcIiAmJiB0aGlzLmluZGV4U3RlcE9iaiA+IC0xKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFpbFNlcnZpY2Uuc2VuZE1haWwodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubWFpbF9pZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbFN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFpbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmluZGV4U3RlcE9iaiA8PSAwIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqICsrO1xyXG4vLyAgICAgICAgfVxyXG4gICAgICAgIC8vIHdoaWxlICggdHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdID09ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgIC8vICAgICAgdGhpcy5pbmRleFN0ZXBPYmorKztcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmluZGV4U3RlcE9iaiBcIit0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFRFTVBPUkFSWSBTVEVQX0lEIEJFQ0FVU0UgV0UgTkVFRCBUTyBXQUlUIEZPUiBBU1lOQ0hST1VOT1VTIFFVRVJZXHJcbiAgICAgICAgdmFyIHRtcE5ld3N0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbmRleFN0cE9iaiA6JyArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG1wTmV3U3RlcElkOiAnKyAgdG1wTmV3c3RlcElkKTtcclxuICAgICAgICAvLyAvLyB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcblxyXG4gICAgICAgIC8qIElGIExJU1QgQlVUVE9OIENPTVBPTkVOVCAqL1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS50eXBlKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5kZXhTdGVwT2JqID4gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMubGVuZ3RoKXtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ3NhdmUgZm9ybScpXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjbGlja19zZWxlY3Rpb24nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBJRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBDT0xMRUNUSU9OIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBDT0xMRUNUSU9OXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkID09IHRtcE5ld3N0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUT0RPIFRFU1RFUiBTSSBGSUxURVIgRVhJU1RFIERBTlMgQ09MTEVDVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RFUF9JRCBPVSBTRSBUUk9VVkUgTEUgTk9NIERFIExBIFZBUklBQkxFIERFIExBIFZBTEVVUiBBIEZJTFRSRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9GaWx0ZXIgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVRvRmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3QgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoTnVtYmVyKGl0ZW0uc3RlcF9pZCkgPT0gTnVtYmVyKHRoaXMucHJldmlvdXNTdGVwSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHZhbHVlRmlsdGVyTGlzdCA9IGl0ZW0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFVCBOT00gREUgVkFSSUFCTEUgVE8gU0FWRSBJTiBGT1JNIFNFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0tlZXAgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0tlZXAgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUpLnRoZW4oY29sbGVjdGlvbkRhdGFSZXR1cm4gPT4gdGhpcy5saXN0cy5wdXNoKGNvbGxlY3Rpb25EYXRhUmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50bXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyhjb2xsZWN0aW9uTmFtZSwgZmlsdGVyTGlzdCwgdmFsdWVUb0tlZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9JRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBMSVNUIElOIENPTkZJRyBGSUxFXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBMSVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZV9zZWxlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBEQVRBIEZST00gTElTVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmllbGRfcGFuZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2knKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVTZWxlY3RlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50LnZhbHVlTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIHZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZFxyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmN1cnJlbnRfc3RlcF9pZCA9ICRldmVudC5zdGVwSWQ7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudC5zdGVwSWR4OiBcIiArICRldmVudC5zdGVwSWR4KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoJGV2ZW50LnN0ZXBJZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFdIRU4gU1VCTUlUSU5HICovXHJcbiAgICBvblN1Ym1pdGluZ0ZpZWxkcygkZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT25TdWJtaXRpbmdGaWVsZHMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVTZWxlY3RlZFswXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJGV2ZW50LnZhbHVlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuY3VycmVudF9zdGVwX2lkID0gJGV2ZW50LnN0ZXBJZDtcclxuICAgICAgICBmb3IgKGxldCBqID0wOyBqPHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMubGVuZ3RoOyBqKyspe1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLmtleXMpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal0ubm9tKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5ub20gPT0gJGV2ZW50Lm5hbWUgKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wS2V5TmFtZSA9ICRldmVudC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG1wS2V5TmFtZTogXCIrdG1wS2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleU9iamVjdCA9ICRldmVudC52YWx1ZU5hbWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9ICAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5T2JqZWN0OiBcIisga2V5T2JqZWN0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3VmFsdWU6IFwiICsgbmV3VmFsdWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9sZXQgdG1wU2F2ZSA9IHRtcEtleU5hbWUrJ1snK2krJ10uJytrZXlPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codG1wU2F2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRtcE9ialskZXZlbnQudmFsdWVOYW1lW2ldPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bZXZhbCh0bXBTYXZlKV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVt0bXBLZXlOYW1lXVtpXVtrZXlPYmplY3RdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0wO2k8JGV2ZW50LnZhbHVlU2VsZWN0ZWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lW2ldXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkW2ldXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSA9IHRtcE9iajtcclxuXHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoJGV2ZW50LnN0ZXBJZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGlvbnMoJGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0TGlzdEVxdWlwbWVudCgpe1xyXG4gICAgLy8gICAgIHZhciBhZGRPcHRpb24gPSB0cnVlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5zcGxpY2UoaSwxKTtcclxuICAgIC8vICAgICAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGFkZE9wdGlvbil7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuXHJcbiAgICAvLyAgICAgLy9DaGVjayBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNob2ljZSBwb3NzaWJsZSwgd2UgZGlzcGxheSB0aGUgY2hvaWNlcyBpZiBub3QsIHdlIHNraXAgdGhpcyBzdGVwIGFuZCBnb2VzIGRpcmVjdGx5IHRvIHRoZSBnZWFyYm94IHNlbGVjdGlvblxyXG4gICAgLy8gICAgIGlmICh0aGlzLmxpc3ROYlBvcnRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdE5iUG9ydGVzLnNvcnQoKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5pbmRleFN0ZXBPYmogKys7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPSBcIlwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IHRoaXMubGlzdE5iUG9ydGVzWzBdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdldEdlYXJCb3goJycpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArPSAxMDtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvL3RoaXMuc2hvd0NhcmJ1cmFudCA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcblxyXG5cclxuICAgIC8vIGdldE9wdGlvbihldmVudDphbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnNwbGljZShpLDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoYWRkT3B0aW9uKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbi8vICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gaXNTZWxlY3RlZChvcHRpb24pe1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBvcHRpb24pe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
