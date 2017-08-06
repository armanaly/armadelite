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
        console.log(this.datas[0].name);
        console.log(this._stepService.steps);
        console.log(this.stepId);
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
        // let stepId = this._stepService.steps[stepIndex].step_id
        this.indexStepObj = stepIndex;
        console.log('currentStepId: ' + this.current_step_id);
        console.log(this.current_step_id);
        console.log("indexStepObj : " + this.indexStepObj);
        console.log('tmp_id : ' + this.tmp_id);
        console.log(this.datas);
        // if (this.indexStepObj <= 0 )
        // {
        /*
            BUG POSSIBLE SI CE N EST PAS LE DERNIERE STEP DANS STEPS ARRAY
         */
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
            // console.log(this._stepService.steps[this.indexStepObj].step_id);
            this.indexStepObj++;
            console.log(this.stepId);
            console.log(this._stepService.steps[this.indexStepObj].step_id);
            if (this.indexStepObj > 1) {
                //     console.log(this._stepService.steps[this.indexStepObj].step_id);
                //     console.log("this.indexStepObj " + this.indexStepObj);
                //     console.log("this.stepId " + this.stepId);
                while (this._stepService.steps[this.indexStepObj].step_id == this.stepId) {
                    this.indexStepObj++;
                }
            }
            console.log(this.stepId);
            console.log(this._stepService.steps[this.indexStepObj].step_id);
            // }
            // SI IL Y A DES CONDITIONS DEFINIES A L'ETAPE SUIVANTE ALORS ON VERIFIE QUELLE ETAPE CORRESPOND A LA CONDITION SINON ON AVANCE
            // DANS LE TABLEAU DES ETAPES
            if (this._stepService.steps[this.indexStepObj].conditions.length > 0) {
                let keyCondition = this._stepService.steps[this.indexStepObj].conditions[0].key;
                let valueCondition = this._stepService.steps[this.indexStepObj].conditions[0].value;
                console.log("valueCondition: " + valueCondition);
                console.log("keyCondition: " + keyCondition);
                console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition));
                while (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) === 'undefined') {
                    //while (this._formService.arraySteps[stepIndex][keyCondition] != valueCondition){
                    console.log((typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition))));
                    console.log("condition pas remplie, j'avance de 1 indice dans le tableau. Indice: " + this.indexStepObj);
                    this.indexStepObj++;
                    if (this._stepService.steps[this.indexStepObj].conditions.length > 0) {
                        let keyCondition = this._stepService.steps[this.indexStepObj].conditions[0].key;
                        let valueCondition = this._stepService.steps[this.indexStepObj].conditions[0].value;
                        console.log(valueCondition);
                        console.log(this._formService.arraySteps[0][keyCondition]);
                    }
                    break;
                }
                console.log('condition remplie, je reste sur l indice: ' + this.indexStepObj);
            }
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
                    console.log('field_panel');
                    this.stepId = tmpNewstepId;
                    break;
                case 'file_upload':
                    console.log("file_upload");
                    this.stepId = tmpNewstepId;
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
    /* WHEN CLICK NEXT ON FILE UPLOAD STEP */
    onSubmitFile($event) {
        console.log($event);
        console.log($event.fileUploaded);
        this._formService.arraySteps[this.indexStepObj].file_uploaded = $event.fileUploaded;
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
        
        <!--UPLOAD FILE PANEL --->
        <div *ngIf="objStep.type == 'file_upload'">
            <file-upload          
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep"
                    [stepIdx]="i"
                    (sent)="onSubmitFile($event)"
            ></file-upload>
        </div>
        
        
 </div>
      <!--<progress class="progress progress-danger" [attr.value]="progressBar" max="100" ></progress>-->
      <!--<div class="progress">-->
  <!--<div class="progress-bar" role="progressbar" aria-valuenow="11" aria-valuemin="3" aria-valuemax="12" style="min-width: 2em;">-->
    <!--0%-->
  <!--</div>-->
<!--</div>-->
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF1QyxlQUN2QyxDQUFDLENBRHFEO0FBQ3RELHlCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBSS9FLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTNDLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHFDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRy9ELCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEwQixlQUFlLENBQUMsQ0FBQTtBQTBIMUM7SUFrQkksWUFBb0IsS0FBcUIsRUFBVSxHQUFnQixFQUMvQyxZQUF5QixFQUFVLFlBQXlCLEVBQzVELGtCQUFxQyxFQUFVLFlBQXlCLEVBQ3hFLFlBQXlCO1FBSHpCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUMvQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzVELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN4RSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQXBCN0MscUNBQXFDO1FBQ3JDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBYTtRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFJZiwwQkFBMEI7UUFDMUIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEVB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QzFFLCtEQUErRDtBQUMvRCwyQkFBMkI7QUFDM0IsWUFBWTtBQUNaLFFBQVE7QUFDUixvQkFBb0I7QUFDcEIsSUFBSSIsImZpbGUiOiJhc3NldHMvYXBwL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7U3RlcE1vZGVsfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXBNb2RlbFwiO1xyXG5cclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFja0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vYmFja0J1dHRvblwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvbWFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL3NhdmVTZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2ZWhpY3VsZS1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuIFxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwiZm9ybUNvbXBsZXRlZCA9PSBmYWxzZVwiPlxyXG4gICBcclxuPCEtLTxwPlNlc3Npb24gSUQ6IHt7IGN1cnJlbnRfc3RlcF9pZCB8IGFzeW5jIH19PC9wPi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS08ZGl2ICBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIj4gRGF0YSBncmlkIDwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5FVyBGT1JNPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy8nXVwiPiBBam91dGVyIGNvbnRhY3QgPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy8nXVwiPiBMaXN0ZXIgY29udGFjdHMgPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyPlxyXG4gICAgXHJcbiAgICBcclxuICAgIDxkaXYgKm5nSWY9XCJ0aGlzLnN0ZXBJZCAhPSAxXCI+XHJcbiAgICAgICAgPHByZXZpb3VzLXBhZ2UgXHJcbiAgICAgICAgICAgIFtzdGVwSWRdID0gXCJzdGVwSWRcIlxyXG4gICAgICAgICAgICBbaWR4U3RlcE9ial0gPSAgXCJpbmRleFN0ZXBPYmpcIlxyXG4gICAgICAgICAgICAoY2hhbmdlKSA9IGdvUHJldmlvdXNTdGVwKCRldmVudCkgPlxyXG4gICAgICAgIDwvcHJldmlvdXMtcGFnZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJyPlxyXG4gICAgXHJcbiAgIDxkaXYgKm5nRm9yPVwibGV0IG9ialN0ZXAgb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHM7IGxldCBpID0gaW5kZXhcIiA+XHJcbiAgICAgICAgPCEtLSBJTUFHRSBMSVNUIEJVVFRPTiBQQU5FTCAtLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIFwiPlxyXG4gICAgICAgICAgICA8cGFuZWwtYnRuLWltZ1xyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uVmFsdWVTZWxlY3RlZCgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgIDwvcGFuZWwtYnRuLWltZz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tIExJU1QgQlVUVE9OIFBBTkVMIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2NsaWNrX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgPGxpc3QtYnV0dG9ucyAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlU2VsZWN0ZWRdPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLnNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2xpc3RPZkVsZW1lbnRzXT1cInRoaXMuZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25WYWx1ZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9saXN0LWJ1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gTVVMVElQTEUgU0VMRUNUSU9OIExJU1QgQlVUVE9OLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnbXVsdGlfc2VsZWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICA8bXVsdGktc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVzU2VsZWN0ZWRdPVwidGhpcy52YWx1ZXNTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJnZXRTZWxlY3Rpb25zKCRldmVudClcIiAgICAgICAgIFxyXG4gICAgICAgICAgICA+PC9tdWx0aS1zZWxlY3Rpb24+ICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tLSBGSUVMRCBQQU5FTCAtLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnZmllbGRfcGFuZWwnXCI+XHJcbiAgICAgICAgICAgIDxmaWVsZC1wYW5lbCAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VudCk9XCJvblN1Ym1pdGluZ0ZpZWxkcygkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvZmllbGQtcGFuZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLVVQTE9BRCBGSUxFIFBBTkVMIC0tLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdmaWxlX3VwbG9hZCdcIj5cclxuICAgICAgICAgICAgPGZpbGUtdXBsb2FkICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZW50KT1cIm9uU3VibWl0RmlsZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvZmlsZS11cGxvYWQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiA8L2Rpdj5cclxuICAgICAgPCEtLTxwcm9ncmVzcyBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLWRhbmdlclwiIFthdHRyLnZhbHVlXT1cInByb2dyZXNzQmFyXCIgbWF4PVwiMTAwXCIgPjwvcHJvZ3Jlc3M+LS0+XHJcbiAgICAgIDwhLS08ZGl2IGNsYXNzPVwicHJvZ3Jlc3NcIj4tLT5cclxuICA8IS0tPGRpdiBjbGFzcz1cInByb2dyZXNzLWJhclwiIHJvbGU9XCJwcm9ncmVzc2JhclwiIGFyaWEtdmFsdWVub3c9XCIxMVwiIGFyaWEtdmFsdWVtaW49XCIzXCIgYXJpYS12YWx1ZW1heD1cIjEyXCIgc3R5bGU9XCJtaW4td2lkdGg6IDJlbTtcIj4tLT5cclxuICAgIDwhLS0wJS0tPlxyXG4gIDwhLS08L2Rpdj4tLT5cclxuPCEtLTwvZGl2Pi0tPlxyXG48c2F2ZS1idXR0b25cclxuICAgICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ3dvcmtmbG93J1wiXHJcbiAgICAoc2F2ZVN0ZXApPVwic2F2ZVN0ZXAoJGV2ZW50KVwiXHJcbiAgICBbc3RlcElkXT1cInRoaXMuc3RlcElkXCJcclxuPlxyXG5cclxuPC9zYXZlLWJ1dHRvbj5cclxuXHJcbjwvZGl2PlxyXG5cclxuIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiAqbmdJZj1cImZvcm1Db21wbGV0ZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxoMT5Zb3VyIHJlcXVlc3QgaGFzIGJlZW4gc2VudCwgeW91IHNob3VsZCByZWNlaXZlIGEgZW1haWwgd2l0aCB0aGUgaW5mb3JtYXRpb24geW91IHNlbnQgdG8gdXMuIDxicj5cclxuICAgICAgICBXZSdsbCBjb21lIGJhY2sgdG8geW91IHZlcnkgc29vbjwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiA8L2Rpdj5cclxuYCxcclxuXHJcbiAgICBzdHlsZXM6IFtgIG5hdnsgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1gXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy9tb2RlbCA9IG5ldyBGb3JtVmVoaWN1bGUoMCwgZmFsc2UpO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy9saXN0cyA9IFtdO1xyXG4gICAgbGlzdHNEYXRhID0gW107XHJcblxyXG5cclxuICAgIGN1cnJlbnRfc3RlcF9pZDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAgLy9ASW5wdXQoKSBtYXJxdWU6IE1hcnF1ZTtcclxuICAgIHN0ZXBJZCA9IDE7XHJcbiAgICBwcmV2aW91c1N0ZXBJZCA9IDA7XHJcbiAgICBpbmRleFN0ZXBPYmogPSAwO1xyXG4gICAgbGFiZWxQYW5lbCA9IFwiXCI7XHJcbiAgICBkYXRhcyA9IFtdO1xyXG4gICAgbGlzdHMgPSBbXTtcclxuICAgIGZvcm1Db21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIHZhbHVlc1NlbGVjdGVkID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jb2xsZWN0aW9uU2VydmljZTogQ29sbGVjdGlvblNlcnZpY2UsIHByaXZhdGUgX21haWxTZXJ2aWNlOiBNYWlsU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX3NhdmVTZXJ2aWNlOiBTYXZlU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHRtcF9pZCA9ICcnO1xyXG4gICAgcHVibGljIHByb2dyZXNzQmFyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgLy8gc3RlcHM6IFN0ZXBNb2RlbFtdO1xyXG4gICAgY3VzdG9tQ29sbGVjdGlvbkRhdGEgPSBbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBtYWluIENvbXBvbmVudCcpO1xyXG4gICAgICAgIC8vIElGIEZJUlNUIFNURVAgSVMgQSBDT0xMRUNUSU9OXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qICBJRiBGSVJTVCBTVEVQIElTIEEgTElTVCAqL1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RzRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0c0RhdGEpO1xyXG4gICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuICAgICAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gS0VFUCBBTEwgU0VMRUNUSU9OUyBNQURFIEJZIFVTRVIgSU4gU1RFUFNcclxuICAgICAgICAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuXHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbiAgICAgICAgdmFyIG1hc3Rlcl90eXBlID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGU7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudF9zdGVwX2lkID0gdGhpcy5yb3V0ZVxyXG4gICAgICAgICAgICAucXVlcnlQYXJhbXNcclxuICAgICAgICAgICAgLm1hcChwYXJhbXMgPT4gcGFyYW1zWydpZCddIHx8ICdOb25lJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfc3RlcF9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuaWQpO1xyXG4gICAgICAgIGlmICghKHR5cGVvZiB0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmN1cnJlbnRfaWQgPT0gJ3VuZGVmaW5lZCcpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmN1cnJlbnRfaWQgPT0gJ05vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRtcF9pZCA9IHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuX2lkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmN1cnJlbnRfaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNUQVJUIFRIRSBGSVJTVCBTVEVQXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50X3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAgICAgLy90aGlzLmRhdGFzID0gdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzWzBdLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ29QcmV2aW91c1N0ZXAoJGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmogPSAkZXZlbnQubmV3SWR4U3RlcE9iajtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgIHRoaXMuc3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgbGV0IHN0ZXBOYW1lID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0pO1xyXG4gICAgICAgIC8vdGhpcy52YWx1ZXNTZWxlY3RlZCA9IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN0ZXBOYW1lID09IHRoaXMuZGF0YXNbaV0ubmFtZSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgLy9pY2kgaidhaSBsYSBsaXN0ZSBhdmVjIGxlcyBkYXRhcyBkZSBsYSBzdGVwIGNvdXJhbnRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIC8vdGhpcy5nb1RvU3RlcCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZCk7XHJcbiAgICAgICAgLy90aGlzLmxhYmVsUGFuZWwgPSB0aGlzLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5sYWJlbFBhbmVsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVN0ZXAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgIHRoaXMuc3RlcElkID09IENVUlJFTlQgU1RFUCBJRFxyXG4gICAgIHRoaXMudG1wX2lkID09IERBVEEgSUQgVE8gUkVUUklFVkUgQUxMIERBVEFTIFNFTEVDVEVEIEZST00gVEhJUyBXT1JLRkxPV1xyXG4gICAgICovXHJcblxyXG4gICAgZ29Ub1N0ZXAoY3VyU3RlcElkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHTyBUTyBTVEVQIDogXCIgKyBjdXJTdGVwSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zdGVwU2VydmljZS5zdGVwcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQgPT0gY3VyU3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBJRCA6ICcgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5zdGVwX2lkKVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2tfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xJU1QgQlVUVE9OUyBDQVNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gY3VyU3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUT0RPIFRFU1RFUiBTSSBGSUxURVIgRVhJU1RFIERBTlMgQ09MTEVDVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEVQX0lEIE9VIFNFIFRST1VWRSBMRSBOT00gREUgTEEgVkFSSUFCTEUgREUgTEEgVkFMRVVSIEEgRklMVFJFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9GaWx0ZXIgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVRvRmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0tlZXAgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvS2VlcCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lKS50aGVuKGNvbGxlY3Rpb25EYXRhUmV0dXJuID0+IHRoaXMubGlzdHMucHVzaChjb2xsZWN0aW9uRGF0YVJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudFN0ZXBJZDogJyArIHRoaXMuY3VycmVudF9zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0bXBfaWQgOiAnICsgdGhpcy50bXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0Rm9ybURhdGEodGhpcy50bXBfaWQsIGNvbGxlY3Rpb25OYW1lLCBmaWx0ZXJMaXN0LCB2YWx1ZVRvS2VlcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhcHJlcyBnZXRGb3JtRGF0YSgpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBTRVJWSUNFIE4nICsgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24ubmFtZSwgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkLCB2YWx1ZVRvS2VlcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gY3VyU3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRiBBIExJU1QgRVhJU1RTIElOIFNURVAgU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5saXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmaWVsZF9wYW5lbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGSUVMRCBQQU5FTCBDQVNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gY3VyU3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NURVAgVFlQRTogJyArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnR5cGUgKyAnRE9FUyBOT1QgRVhJU1QgSU4gU1RFUC5TRVJWSUNFICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gLy9GSU4gU1dJVENIXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLl9zdGVwU2VydmljZS5kYXRhcy5zbGljZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEdPIFRPIE5FWFQgU1RFUCAoIHggKyAxKVxyXG4gICAgZ29Ub05leHRTdGVwKHN0ZXBJbmRleCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHTyBORVhUIFNURVBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coc3RlcEluZGV4KTtcclxuICAgICAgICAvLyBsZXQgc3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbc3RlcEluZGV4XS5zdGVwX2lkXHJcbiAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmogPSBzdGVwSW5kZXg7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudFN0ZXBJZDogJyArIHRoaXMuY3VycmVudF9zdGVwX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfc3RlcF9pZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFN0ZXBPYmogOiBcIiArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndG1wX2lkIDogJyArIHRoaXMudG1wX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5kZXhTdGVwT2JqIDw9IDAgKVxyXG4gICAgICAgIC8vIHtcclxuXHJcbiAgICAgICAgLypcclxuICAgICAgICAgICAgQlVHIFBPU1NJQkxFIFNJIENFIE4gRVNUIFBBUyBMRSBERVJOSUVSRSBTVEVQIERBTlMgU1RFUFMgQVJSQVlcclxuICAgICAgICAgKi9cclxuICAgICAgICAvLyBJRiBXRSBBUkUgT04gVEhFIExBU1QgU1RFUCBPRiBUSEUgRk9STSBXRSBTQVZFIFRIRSBGT1JNIElOIERCLCBTRU5EIEFOIEVNQUlMIEFORCBTSE9XIEEgTUVTU0FHRSBUTyBUSEUgVVNFUlxyXG4gICAgICAgIGxldCBuYlN0ZXBzID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMubGVuZ3RoO1xyXG4gICAgICAgIG5iU3RlcHMgPSBuYlN0ZXBzIC0gMTtcclxuICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPT0gbmJTdGVwcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2F2ZSBmb3JtJylcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NhdmVTZXJ2aWNlLnNhdmVEYXRhKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtQ29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5tYWlsX2lkICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYWlsU2VydmljZS5zZW5kTWFpbCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5tYWlsX2lkLCBkYXRhLl9ib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1haWxTdGF0ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYWlsU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5fYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqKys7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbmRleFN0ZXBPYmogXCIgKyB0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0ZXBJZCBcIiArIHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZCA9PSB0aGlzLnN0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqKys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgLy8gU0kgSUwgWSBBIERFUyBDT05ESVRJT05TIERFRklOSUVTIEEgTCdFVEFQRSBTVUlWQU5URSBBTE9SUyBPTiBWRVJJRklFIFFVRUxMRSBFVEFQRSBDT1JSRVNQT05EIEEgTEEgQ09ORElUSU9OIFNJTk9OIE9OIEFWQU5DRVxyXG4gICAgICAgICAgICAvLyBEQU5TIExFIFRBQkxFQVUgREVTIEVUQVBFU1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVDb25kaXRpb246IFwiICsgdmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlDb25kaXRpb246IFwiICsga2V5Q29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKVxyXG5cclxuICAgICAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSA9PT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgLy93aGlsZSAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tzdGVwSW5kZXhdW2tleUNvbmRpdGlvbl0gIT0gdmFsdWVDb25kaXRpb24pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29uZGl0aW9uIHBhcyByZW1wbGllLCBqJ2F2YW5jZSBkZSAxIGluZGljZSBkYW5zIGxlIHRhYmxlYXUuIEluZGljZTogXCIgKyB0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmorKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzWzBdW2tleUNvbmRpdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gcmVtcGxpZSwgamUgcmVzdGUgc3VyIGwgaW5kaWNlOiAnICsgdGhpcy5pbmRleFN0ZXBPYmopXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRFTVBPUkFSWSBTVEVQX0lEIEJFQ0FVU0UgV0UgTkVFRCBUTyBXQUlUIEZPUiBBU1lOQ0hST1VOT1VTIFFVRVJZXHJcbiAgICAgICAgICAgIHZhciB0bXBOZXdzdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuXHJcbiAgICAgICAgICAgIC8qIElGIExJU1QgQlVUVE9OIENPTVBPTkVOVCAqL1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0udHlwZSk7XHJcblxyXG5cclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY2xpY2tfc2VsZWN0aW9uJzpcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJpbmRleFN0ZXBPYmogOiBcIiArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndG1wX2lkIDogJyArIHRoaXMudG1wX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgdGhpcy5kYXRhc1t0aGlzLmluZGV4U3RlcE9ial0ubG9hZGVkID09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBEQVRBIEZST00gQ09MTEVDVElPTlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2ZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZCA9PSB0bXBOZXdzdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNURVBfSUQgT1UgU0UgVFJPVVZFIExFIE5PTSBERSBMQSBWQVJJQUJMRSBERSBMQSBWQUxFVVIgQSBGSUxUUkVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVUb0ZpbHRlciA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVRvRmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3QgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChOdW1iZXIoaXRlbS5zdGVwX2lkKSA9PSBOdW1iZXIodGhpcy5wcmV2aW91c1N0ZXBJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciB2YWx1ZUZpbHRlckxpc3QgPSBpdGVtLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFVCBOT00gREUgVkFSSUFCTEUgVE8gU0FWRSBJTiBGT1JNIFNFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9LZWVwID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHZhciB2YWx1ZVRvS2VlcCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lKS50aGVuKGNvbGxlY3Rpb25EYXRhUmV0dXJuID0+IHRoaXMubGlzdHMucHVzaChjb2xsZWN0aW9uRGF0YVJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyhjb2xsZWN0aW9uTmFtZSwgZmlsdGVyTGlzdCwgdmFsdWVUb0tlZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvYWRlZFwiOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIHRoZSBzdGVwIGlmIHRoZXJlIGlzIG9ubHkgMSByZXN1bHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVCBJRiBPTkxZIDEgUkVDT1JEXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXVt0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWVdID0gZGF0YVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgTElTVCBJTiBDT05GSUcgRklMRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBMSVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvL31cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdpbWFnZV9zZWxlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVCBEQVRBIEZST00gTElTVFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnZmllbGRfcGFuZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmaWVsZF9wYW5lbCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpbGVfdXBsb2FkJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpbGVfdXBsb2FkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ211bHRpX3NlbGVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU1BR0UgU0VMRUNUSU9OIC0gR0VUIERBVEEgRlJPTSBMSVNUIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSUYgQSBNQUlMIElTIENPTkZJR1VSRUQgSU4gU1RFUCBDT05GSUdcclxuICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPiAtMSkge1xyXG4gICAgICAgICAgICAvLyBJRiBBIE1BSUwgSVMgQ09ORklHVVJFRCBJTiBTVEVQIENPTkZJRyBPUiBJRiBMQVNUIFNURVAgT0YgRk9STVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25WYWx1ZVNlbGVjdGVkKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgbGV0IHRtcE9iaiA9IHt9O1xyXG4gICAgICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgLy8gIHRoaXMuX2Zvcm1TZXJ2aWNlLnByZXZpb3VzX3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAvLyAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc0lkeCA9ICRldmVudC5zdGVwSWR4O1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdID0gdG1wT2JqO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQuc3RlcElkeDogXCIgKyAkZXZlbnQuc3RlcElkeCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG1wT2JqKTtcclxuICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCgkZXZlbnQuc3RlcElkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogV0hFTiBDTElDSyBORVhUIE9OIEZJTEUgVVBMT0FEIFNURVAgKi9cclxuICAgIG9uU3VibWl0RmlsZSgkZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudClcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQuZmlsZVVwbG9hZGVkKVxyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmZpbGVfdXBsb2FkZWQgPSAkZXZlbnQuZmlsZVVwbG9hZGVkO1xyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogV0hFTiBTVUJNSVRJTkcgKi9cclxuICAgIG9uU3VibWl0aW5nRmllbGRzKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPblN1Ym1pdGluZ0ZpZWxkcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkWzBdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5jdXJyZW50X3N0ZXBfaWQgPSAkZXZlbnQuc3RlcElkO1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLnByZXZpb3VzX3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5rZXlzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLm5vbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5ub20gPT0gJGV2ZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0bXBLZXlOYW1lID0gJGV2ZW50Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRtcEtleU5hbWU6IFwiICsgdG1wS2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleU9iamVjdCA9ICRldmVudC52YWx1ZU5hbWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5T2JqZWN0OiBcIiArIGtleU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdWYWx1ZTogXCIgKyBuZXdWYWx1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVt0bXBLZXlOYW1lXVtpXVtrZXlPYmplY3RdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgdG1wU2F2ZSA9IHRtcEtleU5hbWUrJ1snK2krJ10uJytrZXlPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0bXBTYXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXT0gJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV0gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVtldmFsKHRtcFNhdmUpXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB2YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9MDtpPCRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0bXBPYmopO1xyXG4gICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcblxyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3Rpb25zKCRldmVudCkge1xyXG4gICAgICAgIC8vIENvcHkgc2VsZWN0aW9uIGludG8gX2Zvcm1TZXJ2aWNlXHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1skZXZlbnQuc3RlcElkeF1bJGV2ZW50LnZhbHVlTmFtZV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZDtcclxuICAgICAgICAvL0dvIHRvIG5leHQgU3RlcFxyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxufVxyXG4gICAgLy8gZ2V0TGlzdEVxdWlwbWVudCgpe1xyXG4gICAgLy8gICAgIHZhciBhZGRPcHRpb24gPSB0cnVlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5zcGxpY2UoaSwxKTtcclxuICAgIC8vICAgICAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGFkZE9wdGlvbil7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuXHJcbiAgICAvLyAgICAgLy9DaGVjayBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNob2ljZSBwb3NzaWJsZSwgd2UgZGlzcGxheSB0aGUgY2hvaWNlcyBpZiBub3QsIHdlIHNraXAgdGhpcyBzdGVwIGFuZCBnb2VzIGRpcmVjdGx5IHRvIHRoZSBnZWFyYm94IHNlbGVjdGlvblxyXG4gICAgLy8gICAgIGlmICh0aGlzLmxpc3ROYlBvcnRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdE5iUG9ydGVzLnNvcnQoKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5pbmRleFN0ZXBPYmogKys7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPSBcIlwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IHRoaXMubGlzdE5iUG9ydGVzWzBdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdldEdlYXJCb3goJycpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArPSAxMDtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvL3RoaXMuc2hvd0NhcmJ1cmFudCA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcblxyXG5cclxuICAgIC8vIGdldE9wdGlvbihldmVudDphbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnNwbGljZShpLDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoYWRkT3B0aW9uKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbi8vICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gaXNTZWxlY3RlZChvcHRpb24pe1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBvcHRpb24pe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
