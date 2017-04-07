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
const saveService_1 = require("./saveService");
let MainComponent = class MainComponent {
    constructor(route, _fb, _formService, _stepService, _collectionService, _mailService, _saveService) {
        this.route = route;
        this._fb = _fb;
        this._formService = _formService;
        this._stepService = _stepService;
        this._collectionService = _collectionService;
        this._mailService = _mailService;
        this._saveService = _saveService;
        //model = new FormVehicule(0, false);
        this.submitted = false;
        //lists = [];
        this.listsData = [];
        //@Input() marque: Marque;
        this.stepId = 1;
        this.previousStepId = 0;
        this.indexStepObj = 0;
        this.labelPanel = "";
        this.datas = [];
        this.lists = [];
        this.formCompleted = false;
        this.valuesSelected = [];
        this.tmp_id = '';
        this.progressBar = 0;
        // steps: StepModel[];
        this.customCollectionData = [];
    }
    ngOnInit() {
        console.log('init main Component');
        // IF FIRST STEP IS A COLLECTION
        if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
        }
        /*  IF FIRST STEP IS A LIST */
        if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
            this.lists.push(this._stepService.steps[0].configuration.list);
            this.listsData.push({
                "name": this._stepService.steps[0].name,
                "list": this._stepService.steps[0].configuration.list
            });
        }
        console.log(this.listsData);
        this._stepService.datas = this.listsData.slice();
        // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
        //this._formService.init();
        // console.log(this._stepService.step);
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
            if (this.current_step_id.source._value.current_id == 'None') {
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
        console.log(this.datas[0].name);
        console.log(this._stepService.steps);
        console.log(this.stepId);
        //  this.goToNextStep();
    }
    goPreviousStep($event) {
        this.indexStepObj = $event.newIdxStepObj;
        console.log(this._formService);
        console.log(this._stepService);
        console.log(this.datas);
        this.stepId = this._stepService.steps[this.indexStepObj].step_id;
        let stepName = this._stepService.steps[this.indexStepObj].name;
        console.log(this._formService.arraySteps[this.indexStepObj]);
        //this.valuesSelected = this._formService.arraySteps[this.indexStepObj];
        for (let i = 0; i < this.datas.length; i++) {
            if (stepName == this.datas[i].name) {
                console.log(this.datas[i]);
            }
        }
        console.log(this.indexStepObj);
        //this.goToStep(this._stepService.steps[this.indexStepObj].step_id);
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
        console.log("GO TO STEP : " + curStepId);
        console.log(this._formService);
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
                            console.log('currentStepId: ' + this.current_step_id);
                            console.log('tmp_id : ' + this.tmp_id);
                            console.log(this.datas);
                            this._collectionService.getFormData(this.tmp_id, collectionName, filterList, valueToKeep)
                                .then(data => {
                                console.log('apres getFormData()');
                                console.log(data);
                                console.log('STEP SERVICE N' + i);
                                console.log(this._stepService.steps[i]);
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
                        // IF A LIST EXISTS IN STEP SERVICE
                        if (typeof this._stepService.steps[i].configuration.list != 'undefined') {
                            this.datas.push({
                                "name": this._stepService.steps[i].name,
                                "list": this._stepService.steps[i].configuration.list,
                                "loaded": true
                            });
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
    // GO TO NEXT STEP ( x + 1)
    goToNextStep(stepIndex) {
        console.log(this._stepService);
        console.log(this._formService);
        console.log("GO NEXT STEP");
        console.log(this._stepService.steps);
        console.log(stepIndex);
        this.indexStepObj = stepIndex;
        console.log('currentStepId: ' + this.current_step_id);
        console.log("indexStepObj : " + this.indexStepObj);
        console.log('tmp_id : ' + this.tmp_id);
        console.log(this.datas);
        // if (this.indexStepObj <= 0 )
        // {
        // IF WE ARE ON THE LAST STEP OF THE FORM WE SAVE THE FORM IN DB, SEND AN EMAIL AND SHOW A MESSAGE TO THE USER
        let nbSteps = this._stepService.steps.length;
        nbSteps = nbSteps - 1;
        if (this.indexStepObj == nbSteps) {
            console.log('save form');
            console.log(this._formService.arraySteps);
            this._saveService.saveData(this._stepService.steps[this.indexStepObj].step_id)
                .subscribe(data => {
                this.formCompleted = true;
                if (typeof this._stepService.steps[this.indexStepObj].configuration.mail_id != 'undefined') {
                    this._mailService.sendMail(this._stepService.steps[this.indexStepObj].configuration.mail_id, data._body)
                        .subscribe(mailState => {
                        console.log(mailState);
                    }, error => console.log(error));
                    console.log(data._body);
                }
            }, error => console.log(error));
        }
        else {
            this.indexStepObj++;
            console.log("this.indexStepObj " + this.indexStepObj);
            console.log(this._stepService.steps[this.indexStepObj]);
            // TEMPORARY STEP_ID BECAUSE WE NEED TO WAIT FOR ASYNCHROUNOUS QUERY
            var tmpNewstepId = this._stepService.steps[this.indexStepObj].step_id;
            /* IF LIST BUTTON COMPONENT */
            console.log(this._stepService.steps[this.indexStepObj].type);
            switch (this._stepService.steps[this.indexStepObj].type) {
                case 'click_selection':
                    console.log("indexStepObj : " + this.indexStepObj);
                    console.log('tmp_id : ' + this.tmp_id);
                    console.log(this.datas);
                    // if (typeof this.datas[this.indexStepObj].loaded == 'undefined') {
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
                        let valueToFilter = this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id;
                        console.log(valueToFilter);
                        console.log(this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id);
                        console.log(this._formService);
                        filterList = this._stepService.steps[this.indexStepObj].configuration.collection.filter;
                        // }
                        // if (Number(item.step_id) == Number(this.previousStepId)) {
                        //     console.log(item.configuration);
                        //     var valueFilterList = item.configuration.form_value.name;
                        // }
                        var valueToKeep = '';
                        // SET NOM DE VARIABLE TO SAVE IN FORM SERVICE
                        if (typeof this._stepService.steps[this.indexStepObj].configuration.collection.value != 'undefined') {
                            valueToKeep = this._stepService.steps[this.indexStepObj].configuration.collection.value;
                        }
                        // else {
                        //     var valueToKeep = ''
                        // }
                        //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
                        console.log(this.tmp_id);
                        this._collectionService.getDatas(collectionName, filterList, valueToKeep)
                            .then(data => {
                            console.log(data);
                            this.lists.push(data);
                            this.datas.push({
                                "name": this._stepService.steps[this.indexStepObj].name,
                                "list": data,
                                "loaded": true
                            });
                            this.previousStepId = this.stepId;
                            // this.stepId = this._stepService.step[this.indexStepObj].step_id;
                            console.log(this.stepId);
                            console.log(this.lists);
                            console.log(this.datas);
                            this.stepId = tmpNewstepId;
                            // Skip the step if there is only 1 result
                            console.log("TEST IF ONLY 1 RECORD");
                            if (data.length == 1) {
                                this._formService.arraySteps[this.indexStepObj][this._stepService.steps[this.indexStepObj].configuration.form_value.name] = data[0];
                                this.goToNextStep(this.indexStepObj);
                            }
                            console.log(this.stepId);
                        }, error => console.log(error));
                    }
                    //IF DATA ARE STORED IN A LIST IN CONFIG FILE
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                        console.log("GET DATA FROM LIST");
                        console.log(this._stepService.steps[this.indexStepObj].configuration.list);
                        console.log(this._stepService.steps[this.indexStepObj].name);
                        //this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                        this.datas.push({
                            "name": this._stepService.steps[this.indexStepObj].name,
                            "list": this._stepService.steps[this.indexStepObj].configuration.list
                        });
                        console.log(this.datas);
                        this.stepId = tmpNewstepId;
                    }
                    //}
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
                case 'multi_selection':
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                        console.log("IMAGE SELECTION - GET DATA FROM LIST ");
                        console.log(this._stepService.steps[this.indexStepObj].configuration.list);
                        console.log(this._stepService.steps[this.indexStepObj].name);
                        //this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                        this.datas.push({
                            "name": this._stepService.steps[this.indexStepObj].name,
                            "list": this._stepService.steps[this.indexStepObj].configuration.list
                        });
                        console.log(this.datas);
                        this.stepId = tmpNewstepId;
                    }
                    break;
                default:
                    console.log('default');
            }
        }
        // IF A MAIL IS CONFIGURED IN STEP CONFIG
        if (this.indexStepObj > -1) {
            // IF A MAIL IS CONFIGURED IN STEP CONFIG OR IF LAST STEP OF FORM
            if (typeof this._stepService.steps[this.indexStepObj].configuration.mail_id != "undefined") {
            }
        }
    }
    onValueSelected($event) {
        console.log($event.valueSelected);
        console.log($event.valueName);
        console.log(this.indexStepObj);
        let tmpObj = {};
        tmpObj[$event.valueName] = $event.valueSelected;
        console.log(tmpObj);
        //  this._formService.previous_step_id = this.stepId;
        //  this._formService.arrayStepsIdx = $event.stepIdx;
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
        // this._formService.previous_step_id = this.stepId;
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
        // Copy selection into _formService
        this._formService.arraySteps[$event.stepIdx][$event.valueName] = $event.valueSelected;
        //Go to next Step
        this.goToNextStep($event.stepIdx);
    }
};
MainComponent = __decorate([
    core_1.Component({
        selector: 'vehicule-detail',
        template: `
 
<div class="panel panel-default" *ngIf="formCompleted == false">
   
<!--<p>Session ID: {{ current_step_id | async }}</p>-->
    <div class="row" align="center">
        
            <!--<div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>-->
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> NEW FORM</a></button></div>-->
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Ajouter contact </a></button></div>-->
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Lister contacts </a></button></div>-->

    </div>
    <br>
    
    
    <div *ngIf="this.stepId != 1">
        <previous-page 
            [stepId] = "stepId"
            [idxStepObj] =  "indexStepObj"
            (change) = goPreviousStep($event) >
        </previous-page>
    </div>
    <br>
    
   <div *ngFor="let objStep of this._stepService.steps; let i = index" >
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
                    [valuesSelected]="this.valuesSelected"
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
      <div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="11" aria-valuemin="3" aria-valuemax="12" style="min-width: 2em;">
    0%
  </div>
</div>
<save-button
    *ngIf="this._stepService.steps[0].master_type == 'workflow'"
    (saveStep)="saveStep($event)"
    [stepId]="this.stepId"
>

</save-button>

</div>

 <div class="jumbotron" *ngIf="formCompleted" class="alert alert-success" role="alert">
      <div class="container">
        <h1>Your request has been sent, you should receive a email with the information you sent to us. <br>
        We'll come back to you very soon</h1>
        </div>
 </div>
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
    __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, form_service_1.FormService, step_service_1.StepService, collection_service_1.CollectionService, mail_service_1.MailService, saveService_1.SaveService])
], MainComponent);
exports.MainComponent = MainComponent;
// getListEquipment(){
//     var addOption = true;
//     for (let i = 0; i < this._formService.optionsSelected.length; i++){
//         if (this._formService.optionsSelected[i] == event.target.value) {
//             this._formService.optionsSelected.splice(i,1);
//             addOption = false;
//             break;
//         }
//     }
//     if (addOption){
//         this._formService.optionsSelected.push(event.target.value);
//     }
// }
//
//     //Check if there is more than one choice possible, we display the choices if not, we skip this step and goes directly to the gearbox selection
//     if (this.listNbPortes.length > 1) {
//         this.listNbPortes.sort();
//         // this.indexStepObj ++;
//         this._formService.porteSelected = "";
//     }
//     else {
//         this._formService.porteSelected = this.listNbPortes[0];
//         this.getGearBox('');
//         this.indexStepObj += 10;
//         console.log(this.indexStepObj);
//     }
//     //this.showCarburant = false;
// }
//
//
// getOption(event:any) {
//console.log(this._formService.optionsSelected);
//
// var addOption = true;
// for (let i = 0; i < this._formService.optionsSelected.length; i++){
//     if (this._formService.optionsSelected[i] == event.target.value) {
//         this._formService.optionsSelected.splice(i,1);
//         addOption = false;
//         break;
//     }
// }
// if (addOption){
//     this._formService.optionsSelected.push(event.target.value);
// }
//    };
//
// isSelected(option){
//     for (let i = 0; i < this._formService.optionsSelected.length; i++){
//         if (this._formService.optionsSelected[i] == option){
//             return true;
//         }
//     }
//     return false;
// }

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF1QyxlQUN2QyxDQUFDLENBRHFEO0FBQ3RELHlCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBSS9FLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTNDLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHFDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRy9ELCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEwQixlQUFlLENBQUMsQ0FBQTtBQStHMUM7SUFrQkksWUFBb0IsS0FBcUIsRUFBVSxHQUFnQixFQUMvQyxZQUF5QixFQUFVLFlBQXlCLEVBQzVELGtCQUFxQyxFQUFVLFlBQXlCLEVBQ3hFLFlBQXlCO1FBSHpCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUMvQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzVELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN4RSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQXBCN0MscUNBQXFDO1FBQ3JDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBYTtRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFJZiwwQkFBMEI7UUFDMUIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEVB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Q25DLDBDQUEwQztBQUMxQyxRQUFRO0FBQ1Isb0NBQW9DO0FBQ3BDLElBQUk7QUFDSixFQUFFO0FBQ0YsRUFBRTtBQUdGLHlCQUF5QjtBQUNyQixpREFBaUQ7QUFFakQsRUFBRTtBQUNGLHdCQUF3QjtBQUN4QixzRUFBc0U7QUFDdEUsd0VBQXdFO0FBQ3hFLHlEQUF5RDtBQUN6RCw2QkFBNkI7QUFDN0IsaUJBQWlCO0FBQ2pCLFFBQVE7QUFDUixJQUFJO0FBQ0osa0JBQWtCO0FBQ2xCLGtFQUFrRTtBQUNsRSxJQUFJO0FBQ1osUUFBUTtBQUNKLEVBQUU7QUFDRixzQkFBc0I7QUFDdEIsMEVBQTBFO0FBQzFFLCtEQUErRDtBQUMvRCwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaLFFBQVE7QUFDUixvQkFBb0I7QUFDcEIsSUFBSSIsImZpbGUiOiJjb21wb25lbnRzL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQge1N0ZXBNb2RlbH0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwTW9kZWxcIjtcclxuXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9zYXZlU2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVoaWN1bGUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiBcclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cImZvcm1Db21wbGV0ZWQgPT0gZmFsc2VcIj5cclxuICAgXHJcbjwhLS08cD5TZXNzaW9uIElEOiB7eyBjdXJyZW50X3N0ZXBfaWQgfCBhc3luYyB9fTwvcD4tLT5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tPGRpdiAgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCI+IERhdGEgZ3JpZCA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3N0ZXAnXVwiPiBORVcgRk9STTwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gQWpvdXRlciBjb250YWN0IDwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gTGlzdGVyIGNvbnRhY3RzIDwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxicj5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8ZGl2ICpuZ0lmPVwidGhpcy5zdGVwSWQgIT0gMVwiPlxyXG4gICAgICAgIDxwcmV2aW91cy1wYWdlIFxyXG4gICAgICAgICAgICBbc3RlcElkXSA9IFwic3RlcElkXCJcclxuICAgICAgICAgICAgW2lkeFN0ZXBPYmpdID0gIFwiaW5kZXhTdGVwT2JqXCJcclxuICAgICAgICAgICAgKGNoYW5nZSkgPSBnb1ByZXZpb3VzU3RlcCgkZXZlbnQpID5cclxuICAgICAgICA8L3ByZXZpb3VzLXBhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxicj5cclxuICAgIFxyXG4gICA8ZGl2ICpuZ0Zvcj1cImxldCBvYmpTdGVwIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzOyBsZXQgaSA9IGluZGV4XCIgPlxyXG4gICAgICAgIDwhLS0gSU1BR0UgTElTVCBCVVRUT04gUEFORUwgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyBcIj5cclxuICAgICAgICAgICAgPHBhbmVsLWJ0bi1pbWdcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlU2VsZWN0ZWRdPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLnNlbGVjdGlvblwiICBcclxuICAgICAgICAgICAgICAgICAgICBbbGlzdE9mRWxlbWVudHNdPVwidGhpcy5kYXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8L3BhbmVsLWJ0bi1pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBMSVNUIEJVVFRPTiBQQU5FTCAtLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdjbGlja19zZWxlY3Rpb24nXCI+XHJcbiAgICAgICAgICAgIDxsaXN0LWJ1dHRvbnMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uVmFsdWVTZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvbGlzdC1idXR0b25zPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIE1VTFRJUExFIFNFTEVDVElPTiBMSVNUIEJVVFRPTi0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ211bHRpX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgPG11bHRpLXNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbGlzdE9mRWxlbWVudHNdPVwidGhpcy5kYXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlc1NlbGVjdGVkXT1cInRoaXMudmFsdWVzU2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZ2V0U2VsZWN0aW9ucygkZXZlbnQpXCIgICAgICAgICBcclxuICAgICAgICAgICAgPjwvbXVsdGktc2VsZWN0aW9uPiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLS0gRklFTEQgUEFORUwgLS0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ZpZWxkX3BhbmVsJ1wiPlxyXG4gICAgICAgICAgICA8ZmllbGQtcGFuZWwgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbnQpPVwib25TdWJtaXRpbmdGaWVsZHMoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2ZpZWxkLXBhbmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gPC9kaXY+XHJcbiAgICAgIDxwcm9ncmVzcyBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLWRhbmdlclwiIFthdHRyLnZhbHVlXT1cInByb2dyZXNzQmFyXCIgbWF4PVwiMTAwXCIgPjwvcHJvZ3Jlc3M+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy1iYXJcIiByb2xlPVwicHJvZ3Jlc3NiYXJcIiBhcmlhLXZhbHVlbm93PVwiMTFcIiBhcmlhLXZhbHVlbWluPVwiM1wiIGFyaWEtdmFsdWVtYXg9XCIxMlwiIHN0eWxlPVwibWluLXdpZHRoOiAyZW07XCI+XHJcbiAgICAwJVxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuPHNhdmUtYnV0dG9uXHJcbiAgICAqbmdJZj1cInRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICd3b3JrZmxvdydcIlxyXG4gICAgKHNhdmVTdGVwKT1cInNhdmVTdGVwKCRldmVudClcIlxyXG4gICAgW3N0ZXBJZF09XCJ0aGlzLnN0ZXBJZFwiXHJcbj5cclxuXHJcbjwvc2F2ZS1idXR0b24+XHJcblxyXG48L2Rpdj5cclxuXHJcbiA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCIgKm5nSWY9XCJmb3JtQ29tcGxldGVkXCIgY2xhc3M9XCJhbGVydCBhbGVydC1zdWNjZXNzXCIgcm9sZT1cImFsZXJ0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8aDE+WW91ciByZXF1ZXN0IGhhcyBiZWVuIHNlbnQsIHlvdSBzaG91bGQgcmVjZWl2ZSBhIGVtYWlsIHdpdGggdGhlIGluZm9ybWF0aW9uIHlvdSBzZW50IHRvIHVzLiA8YnI+XHJcbiAgICAgICAgV2UnbGwgY29tZSBiYWNrIHRvIHlvdSB2ZXJ5IHNvb248L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gPC9kaXY+XHJcbmAsXHJcblxyXG4gICAgc3R5bGVzOiBbYCBuYXZ7ICAgIFxyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9YF1cclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vbW9kZWwgPSBuZXcgRm9ybVZlaGljdWxlKDAsIGZhbHNlKTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vbGlzdHMgPSBbXTtcclxuICAgIGxpc3RzRGF0YSA9IFtdO1xyXG5cclxuXHJcbiAgICBjdXJyZW50X3N0ZXBfaWQ6IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICAgIC8vQElucHV0KCkgbWFycXVlOiBNYXJxdWU7XHJcbiAgICBzdGVwSWQgPSAxO1xyXG4gICAgcHJldmlvdXNTdGVwSWQgPSAwO1xyXG4gICAgaW5kZXhTdGVwT2JqID0gMDtcclxuICAgIGxhYmVsUGFuZWwgPSBcIlwiO1xyXG4gICAgZGF0YXMgPSBbXTtcclxuICAgIGxpc3RzID0gW107XHJcbiAgICBmb3JtQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICB2YWx1ZXNTZWxlY3RlZCA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2ZiOiBGb3JtQnVpbGRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfY29sbGVjdGlvblNlcnZpY2U6IENvbGxlY3Rpb25TZXJ2aWNlLCBwcml2YXRlIF9tYWlsU2VydmljZTogTWFpbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9zYXZlU2VydmljZTogU2F2ZVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICB0bXBfaWQgPSAnJztcclxuICAgIHB1YmxpYyBwcm9ncmVzc0JhcjogbnVtYmVyID0gMDtcclxuXHJcbiAgIC8vIHN0ZXBzOiBTdGVwTW9kZWxbXTtcclxuICAgIGN1c3RvbUNvbGxlY3Rpb25EYXRhID0gW107XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgbWFpbiBDb21wb25lbnQnKTtcclxuICAgICAgICAvLyBJRiBGSVJTVCBTVEVQIElTIEEgQ09MTEVDVElPTlxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiAgSUYgRklSU1QgU1RFUCBJUyBBIExJU1QgKi9cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgdGhpcy5saXN0c0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubmFtZSxcclxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHNEYXRhKTtcclxuICAgICAgICB0aGlzLl9zdGVwU2VydmljZS5kYXRhcyA9IHRoaXMubGlzdHNEYXRhLnNsaWNlKCk7XHJcbiAgICAgICAgLy8gSU5JVElBVEUgRk9STSBTRVJWSUNFIFRPIEtFRVAgQUxMIFNFTEVDVElPTlMgTUFERSBCWSBVU0VSIElOIFNURVBTXHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcblxyXG4gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgICAgIHZhciBtYXN0ZXJfdHlwZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRfc3RlcF9pZCA9IHRoaXMucm91dGVcclxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXHJcbiAgICAgICAgICAgIC5tYXAocGFyYW1zID0+IHBhcmFtc1snaWQnXSB8fCAnTm9uZSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50X3N0ZXBfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmlkKTtcclxuICAgICAgICBpZiAoISh0eXBlb2YgdGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5jdXJyZW50X2lkID09ICd1bmRlZmluZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5jdXJyZW50X2lkID09ICdOb25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50bXBfaWQgPSB0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLl9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9TdGVwKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNUQVJUIFRIRSBGSVJTVCBTVEVQXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50X3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAgICAgLy90aGlzLmRhdGFzID0gdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgLy8gY29ucyBvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXNbMF0ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAvLyAgdGhpcy5nb1RvTmV4dFN0ZXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1ByZXZpb3VzU3RlcCgkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9ICRldmVudC5uZXdJZHhTdGVwT2JqO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuICAgICAgICBsZXQgc3RlcE5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSk7XHJcbiAgICAgICAgLy90aGlzLnZhbHVlc1NlbGVjdGVkID0gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3RlcE5hbWUgPT0gdGhpcy5kYXRhc1tpXS5uYW1lKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAvL2ljaSBqJ2FpIGxhIGxpc3RlIGF2ZWMgbGVzIGRhdGFzIGRlIGxhIHN0ZXAgY291cmFudGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgLy90aGlzLmdvVG9TdGVwKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKTtcclxuICAgICAgICAvL3RoaXMubGFiZWxQYW5lbCA9IHRoaXMuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmxhYmVsUGFuZWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RlcCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgdGhpcy5zdGVwSWQgPT0gQ1VSUkVOVCBTVEVQIElEXHJcbiAgICAgdGhpcy50bXBfaWQgPT0gREFUQSBJRCBUTyBSRVRSSUVWRSBBTEwgREFUQVMgU0VMRUNURUQgRlJPTSBUSElTIFdPUktGTE9XXHJcbiAgICAgKi9cclxuXHJcbiAgICBnb1RvU3RlcChjdXJTdGVwSWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdPIFRPIFNURVAgOiBcIiArIGN1clN0ZXBJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uc3RlcF9pZCA9PSBjdXJTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIElEIDogJyArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQpXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGlja19zZWxlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTElTVCBCVVRUT05TIENBU0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBjdXJTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNURVBfSUQgT1UgU0UgVFJPVVZFIExFIE5PTSBERSBMQSBWQVJJQUJMRSBERSBMQSBWQUxFVVIgQSBGSUxUUkVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0ZpbHRlciA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlVG9GaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0ID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUpLnRoZW4oY29sbGVjdGlvbkRhdGFSZXR1cm4gPT4gdGhpcy5saXN0cy5wdXNoKGNvbGxlY3Rpb25EYXRhUmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50U3RlcElkOiAnICsgdGhpcy5jdXJyZW50X3N0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RtcF9pZCA6ICcgKyB0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXRGb3JtRGF0YSh0aGlzLnRtcF9pZCwgY29sbGVjdGlvbk5hbWUsIGZpbHRlckxpc3QsIHZhbHVlVG9LZWVwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcmVzIGdldEZvcm1EYXRhKCknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIFNFUlZJQ0UgTicgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lLCB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQsIHZhbHVlVG9LZWVwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGlzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElGIEEgTElTVCBFWElTVFMgSU4gU1RFUCBTRVJWSUNFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IGN1clN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpZWxkX3BhbmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZJRUxEIFBBTkVMIENBU0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBUWVBFOiAnICsgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0udHlwZSArICdET0VTIE5PVCBFWElTVCBJTiBTVEVQLlNFUlZJQ0UgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAvL0ZJTiBTV0lUQ0hcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzLnNsaWNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gR08gVE8gTkVYVCBTVEVQICggeCArIDEpXHJcbiAgICBnb1RvTmV4dFN0ZXAoc3RlcEluZGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdPIE5FWFQgU1RFUFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhzdGVwSW5kZXgpO1xyXG4gICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqID0gc3RlcEluZGV4O1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2N1cnJlbnRTdGVwSWQ6ICcgKyB0aGlzLmN1cnJlbnRfc3RlcF9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFN0ZXBPYmogOiBcIiArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndG1wX2lkIDogJyArIHRoaXMudG1wX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5kZXhTdGVwT2JqIDw9IDAgKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyBJRiBXRSBBUkUgT04gVEhFIExBU1QgU1RFUCBPRiBUSEUgRk9STSBXRSBTQVZFIFRIRSBGT1JNIElOIERCLCBTRU5EIEFOIEVNQUlMIEFORCBTSE9XIEEgTUVTU0FHRSBUTyBUSEUgVVNFUlxyXG4gICAgICAgIGxldCBuYlN0ZXBzID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMubGVuZ3RoO1xyXG4gICAgICAgIG5iU3RlcHMgPSBuYlN0ZXBzIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPT0gbmJTdGVwcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZSBmb3JtJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmVTZXJ2aWNlLnNhdmVEYXRhKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5tYWlsX2lkICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYWlsU2VydmljZS5zZW5kTWFpbCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5tYWlsX2lkLCBkYXRhLl9ib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYWlsU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5fYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4U3RlcE9iaisrO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmluZGV4U3RlcE9iaiBcIiArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdKTtcclxuXHJcblxyXG4gICAgICAgICAgICAvLyBURU1QT1JBUlkgU1RFUF9JRCBCRUNBVVNFIFdFIE5FRUQgVE8gV0FJVCBGT1IgQVNZTkNIUk9VTk9VUyBRVUVSWVxyXG4gICAgICAgICAgICB2YXIgdG1wTmV3c3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcblxyXG4gICAgICAgICAgICAvKiBJRiBMSVNUIEJVVFRPTiBDT01QT05FTlQgKi9cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnR5cGUpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWNrX3NlbGVjdGlvbic6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaW5kZXhTdGVwT2JqIDogXCIgKyB0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RtcF9pZCA6ICcgKyB0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAvLyBpZiAodHlwZW9mIHRoaXMuZGF0YXNbdGhpcy5pbmRleFN0ZXBPYmpdLmxvYWRlZCA9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBJRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBDT0xMRUNUSU9OIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIENPTExFQ1RJT05cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9mb3IgKHZhciBpdGVtIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQgPT0gdG1wTmV3c3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUT0RPIFRFU1RFUiBTSSBGSUxURVIgRVhJU1RFIERBTlMgQ09MTEVDVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEVQX0lEIE9VIFNFIFRST1VWRSBMRSBOT00gREUgTEEgVkFSSUFCTEUgREUgTEEgVkFMRVVSIEEgRklMVFJFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlVG9GaWx0ZXIgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVUb0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0ID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoTnVtYmVyKGl0ZW0uc3RlcF9pZCkgPT0gTnVtYmVyKHRoaXMucHJldmlvdXNTdGVwSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coaXRlbS5jb25maWd1cmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdmFsdWVGaWx0ZXJMaXN0ID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTRVQgTk9NIERFIFZBUklBQkxFIFRPIFNBVkUgSU4gRk9STSBTRVJWSUNFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdmFsdWVUb0tlZXAgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyhjb2xsZWN0aW9uTmFtZSkudGhlbihjb2xsZWN0aW9uRGF0YVJldHVybiA9PiB0aGlzLmxpc3RzLnB1c2goY29sbGVjdGlvbkRhdGFSZXR1cm4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50bXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUsIGZpbHRlckxpc3QsIHZhbHVlVG9LZWVwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2tpcCB0aGUgc3RlcCBpZiB0aGVyZSBpcyBvbmx5IDEgcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRFU1QgSUYgT05MWSAxIFJFQ09SRFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial1bdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lXSA9IGRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAodGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lGIERBVEEgQVJFIFNUT1JFRCBJTiBBIExJU1QgSU4gQ09ORklHIEZJTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBEQVRBIEZST00gTElTVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy99XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2Vfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIExJU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpZWxkX3BhbmVsJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWNpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnbXVsdGlfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJTUFHRSBTRUxFQ1RJT04gLSBHRVQgREFUQSBGUk9NIExJU1QgXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJRiBBIE1BSUwgSVMgQ09ORklHVVJFRCBJTiBTVEVQIENPTkZJR1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4U3RlcE9iaiA+IC0xKSB7XHJcbiAgICAgICAgICAgIC8vIElGIEEgTUFJTCBJUyBDT05GSUdVUkVEIElOIFNURVAgQ09ORklHIE9SIElGIExBU1QgU1RFUCBPRiBGT1JNXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubWFpbF9pZCAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50LnZhbHVlU2VsZWN0ZWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZU5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICBsZXQgdG1wT2JqID0ge307XHJcbiAgICAgICAgdG1wT2JqWyRldmVudC52YWx1ZU5hbWVdID0gJGV2ZW50LnZhbHVlU2VsZWN0ZWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2codG1wT2JqKTtcclxuICAgICAgICAvLyAgdGhpcy5fZm9ybVNlcnZpY2UucHJldmlvdXNfc3RlcF9pZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIC8vICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzSWR4ID0gJGV2ZW50LnN0ZXBJZHg7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudC5zdGVwSWR4OiBcIiArICRldmVudC5zdGVwSWR4KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0bXBPYmopO1xyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBXSEVOIFNVQk1JVElORyAqL1xyXG4gICAgb25TdWJtaXRpbmdGaWVsZHMoJGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09uU3VibWl0aW5nRmllbGRzJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50LnZhbHVlU2VsZWN0ZWRbMF0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZU5hbWUpO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmN1cnJlbnRfc3RlcF9pZCA9ICRldmVudC5zdGVwSWQ7XHJcbiAgICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UucHJldmlvdXNfc3RlcF9pZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLmtleXMpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal0ubm9tKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLm5vbSA9PSAkZXZlbnQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcEtleU5hbWUgPSAkZXZlbnQubmFtZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG1wS2V5TmFtZTogXCIgKyB0bXBLZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgJGV2ZW50LnZhbHVlU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5T2JqZWN0ID0gJGV2ZW50LnZhbHVlTmFtZVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlPYmplY3Q6IFwiICsga2V5T2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1ZhbHVlOiBcIiArIG5ld1ZhbHVlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdW3RtcEtleU5hbWVdW2ldW2tleU9iamVjdF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL3ZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAvL2xldCB0bXBTYXZlID0gdG1wS2V5TmFtZSsnWycraSsnXS4nK2tleU9iamVjdDtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRtcFNhdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRtcE9ialskZXZlbnQudmFsdWVOYW1lW2ldPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVt0bXBLZXlOYW1lXVtpXVtrZXlPYmplY3RdID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdW2V2YWwodG1wU2F2ZSldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVt0bXBLZXlOYW1lXVtpXVtrZXlPYmplY3RdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0wO2k8JGV2ZW50LnZhbHVlU2VsZWN0ZWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lW2ldXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkW2ldXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSA9IHRtcE9iajtcclxuXHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoJGV2ZW50LnN0ZXBJZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGlvbnMoJGV2ZW50KSB7XHJcbiAgICAgICAgLy8gQ29weSBzZWxlY3Rpb24gaW50byBfZm9ybVNlcnZpY2VcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzWyRldmVudC5zdGVwSWR4XVskZXZlbnQudmFsdWVOYW1lXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkO1xyXG4gICAgICAgIC8vR28gdG8gbmV4dCBTdGVwXHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoJGV2ZW50LnN0ZXBJZHgpO1xyXG4gICAgfVxyXG59XHJcbiAgICAvLyBnZXRMaXN0RXF1aXBtZW50KCl7XHJcbiAgICAvLyAgICAgdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnNwbGljZShpLDEpO1xyXG4gICAgLy8gICAgICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAoYWRkT3B0aW9uKXtcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG5cclxuICAgIC8vICAgICAvL0NoZWNrIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgY2hvaWNlIHBvc3NpYmxlLCB3ZSBkaXNwbGF5IHRoZSBjaG9pY2VzIGlmIG5vdCwgd2Ugc2tpcCB0aGlzIHN0ZXAgYW5kIGdvZXMgZGlyZWN0bHkgdG8gdGhlIGdlYXJib3ggc2VsZWN0aW9uXHJcbiAgICAvLyAgICAgaWYgKHRoaXMubGlzdE5iUG9ydGVzLmxlbmd0aCA+IDEpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0TmJQb3J0ZXMuc29ydCgpO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmluZGV4U3RlcE9iaiArKztcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IFwiXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5wb3J0ZVNlbGVjdGVkID0gdGhpcy5saXN0TmJQb3J0ZXNbMF07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ2V0R2VhckJveCgnJyk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqICs9IDEwO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vdGhpcy5zaG93Q2FyYnVyYW50ID0gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy9cclxuXHJcblxyXG4gICAgLy8gZ2V0T3B0aW9uKGV2ZW50OmFueSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWRbaV0gPT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQuc3BsaWNlKGksMSk7XHJcbiAgICAgICAgLy8gICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChhZGRPcHRpb24pe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIC8vIH1cclxuLy8gICAgfTtcclxuICAgIC8vXHJcbiAgICAvLyBpc1NlbGVjdGVkKG9wdGlvbil7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IG9wdGlvbil7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuXHJcblxyXG4iXX0=
