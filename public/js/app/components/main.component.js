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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbWFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF1QyxlQUN2QyxDQUFDLENBRHFEO0FBQ3RELHlCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHdCQUE4RCxnQkFBZ0IsQ0FBQyxDQUFBO0FBSS9FLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTNDLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHFDQUFnQyw4QkFBOEIsQ0FBQyxDQUFBO0FBRy9ELCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELDhCQUEwQixlQUFlLENBQUMsQ0FBQTtBQStHMUM7SUFrQkksWUFBb0IsS0FBcUIsRUFBVSxHQUFnQixFQUMvQyxZQUF5QixFQUFVLFlBQXlCLEVBQzVELGtCQUFxQyxFQUFVLFlBQXlCLEVBQ3hFLFlBQXlCO1FBSHpCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUMvQyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzVELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN4RSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQXBCN0MscUNBQXFDO1FBQ3JDLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsYUFBYTtRQUNiLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFJZiwwQkFBMEI7UUFDMUIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixtQkFBYyxHQUFHLEVB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NkRBQTZEO0FBQzdELGlDQUFpQztBQUNqQyxxQkFBcUI7QUFDckIsWUFBWTtBQUNaLFFBQVE7QUFDUixzQkFBc0I7QUFDdEIsc0VBQXNFO0FBQ3RFLFFBQVE7QUFDUixJQUFJO0FBQ0osRUFBRTtBQUVGLHFKQUFxSjtBQUNySiwwQ0FBMEM7QUFDMUMsb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyxnREFBZ0Q7QUFDaEQsUUFBUTtBQUNSLGFBQWE7QUFDYixrRUFBa0U7QUFDbEUsK0JBQStCO0FBQy9CLG1DQUFtQztBQUNuQywwQ0FBMEM7QUFDMUMsUUFBUTtBQUNSLG9DQUFvQztBQUNwQyxJQUFJO0FBQ0osRUFBRTtBQUNGLEVBQUU7QUFHRix5QkFBeUI7QUFDckIsaURBQWlEO0FBRWpELEVBQUU7QUFDRix3QkFBd0I7QUFDeEIsc0VBQXNFO0FBQ3RFLHdFQUF3RTtBQUN4RSx5REFBeUQ7QUFDekQsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQixRQUFRO0FBQ1IsSUFBSTtBQUNKLGtCQUFrQjtBQUNsQixrRUFBa0U7QUFDbEUsSUFBSTtBQUNaLFFBQVE7QUFDSixFQUFFO0FBQ0Ysc0JBQXNCO0FBQ3RCLDBFQUEwRTtBQUMxRSwrREFBK0Q7QUFDL0QsMkJBQTJCO0FBQzNCLFlBQVk7QUFDWixRQUFRO0FBQ1Isb0JBQW9CO0FBQ3BCLElBQUkiLCJmaWxlIjoiY29tcG9uZW50cy9tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuaW1wb3J0IHtTdGVwTW9kZWx9IGZyb20gXCIuLi9FbmdpbmUvc3RlcE1vZGVsXCI7XHJcblxyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vc2F2ZVNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZlaGljdWxlLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gXHJcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJmb3JtQ29tcGxldGVkID09IGZhbHNlXCI+XHJcbiAgIFxyXG48IS0tPHA+U2Vzc2lvbiBJRDoge3sgY3VycmVudF9zdGVwX2lkIHwgYXN5bmMgfX08L3A+LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPCEtLTxkaXYgIGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiPiBEYXRhIGdyaWQgPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTkVXIEZPUk08L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+IEFqb3V0ZXIgY29udGFjdCA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+IExpc3RlciBjb250YWN0cyA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnI+XHJcbiAgICBcclxuICAgIFxyXG4gICAgPGRpdiAqbmdJZj1cInRoaXMuc3RlcElkICE9IDFcIj5cclxuICAgICAgICA8cHJldmlvdXMtcGFnZSBcclxuICAgICAgICAgICAgW3N0ZXBJZF0gPSBcInN0ZXBJZFwiXHJcbiAgICAgICAgICAgIFtpZHhTdGVwT2JqXSA9ICBcImluZGV4U3RlcE9ialwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpID0gZ29QcmV2aW91c1N0ZXAoJGV2ZW50KSA+XHJcbiAgICAgICAgPC9wcmV2aW91cy1wYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnI+XHJcbiAgICBcclxuICAgPGRpdiAqbmdGb3I9XCJsZXQgb2JqU3RlcCBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwczsgbGV0IGkgPSBpbmRleFwiID5cclxuICAgICAgICA8IS0tIElNQUdFIExJU1QgQlVUVE9OIFBBTkVMIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicgXCI+XHJcbiAgICAgICAgICAgIDxwYW5lbC1idG4taW1nXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5zZWxlY3Rpb25cIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgW2xpc3RPZkVsZW1lbnRzXT1cInRoaXMuZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25WYWx1ZVNlbGVjdGVkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9wYW5lbC1idG4taW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gTElTVCBCVVRUT04gUEFORUwgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnY2xpY2tfc2VsZWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICA8bGlzdC1idXR0b25zICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbGlzdE9mRWxlbWVudHNdPVwidGhpcy5kYXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2xpc3QtYnV0dG9ucz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBNVUxUSVBMRSBTRUxFQ1RJT04gTElTVCBCVVRUT04tLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdtdWx0aV9zZWxlY3Rpb24nXCI+XHJcbiAgICAgICAgICAgIDxtdWx0aS1zZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlU2VsZWN0ZWRdPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLnNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2xpc3RPZkVsZW1lbnRzXT1cInRoaXMuZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZXNTZWxlY3RlZF09XCJ0aGlzLnZhbHVlc1NlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImdldFNlbGVjdGlvbnMoJGV2ZW50KVwiICAgICAgICAgXHJcbiAgICAgICAgICAgID48L211bHRpLXNlbGVjdGlvbj4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0tIEZJRUxEIFBBTkVMIC0tLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdmaWVsZF9wYW5lbCdcIj5cclxuICAgICAgICAgICAgPGZpZWxkLXBhbmVsICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIChzZW50KT1cIm9uU3VibWl0aW5nRmllbGRzKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9maWVsZC1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuIDwvZGl2PlxyXG4gICAgICA8IS0tPHByb2dyZXNzIGNsYXNzPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MtZGFuZ2VyXCIgW2F0dHIudmFsdWVdPVwicHJvZ3Jlc3NCYXJcIiBtYXg9XCIxMDBcIiA+PC9wcm9ncmVzcz4tLT5cclxuICAgICAgPCEtLTxkaXYgY2xhc3M9XCJwcm9ncmVzc1wiPi0tPlxyXG4gIDwhLS08ZGl2IGNsYXNzPVwicHJvZ3Jlc3MtYmFyXCIgcm9sZT1cInByb2dyZXNzYmFyXCIgYXJpYS12YWx1ZW5vdz1cIjExXCIgYXJpYS12YWx1ZW1pbj1cIjNcIiBhcmlhLXZhbHVlbWF4PVwiMTJcIiBzdHlsZT1cIm1pbi13aWR0aDogMmVtO1wiPi0tPlxyXG4gICAgPCEtLTAlLS0+XHJcbiAgPCEtLTwvZGl2Pi0tPlxyXG48IS0tPC9kaXY+LS0+XHJcbjxzYXZlLWJ1dHRvblxyXG4gICAgKm5nSWY9XCJ0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnd29ya2Zsb3cnXCJcclxuICAgIChzYXZlU3RlcCk9XCJzYXZlU3RlcCgkZXZlbnQpXCJcclxuICAgIFtzdGVwSWRdPVwidGhpcy5zdGVwSWRcIlxyXG4+XHJcblxyXG48L3NhdmUtYnV0dG9uPlxyXG5cclxuPC9kaXY+XHJcblxyXG4gPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiICpuZ0lmPVwiZm9ybUNvbXBsZXRlZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgxPllvdXIgcmVxdWVzdCBoYXMgYmVlbiBzZW50LCB5b3Ugc2hvdWxkIHJlY2VpdmUgYSBlbWFpbCB3aXRoIHRoZSBpbmZvcm1hdGlvbiB5b3Ugc2VudCB0byB1cy4gPGJyPlxyXG4gICAgICAgIFdlJ2xsIGNvbWUgYmFjayB0byB5b3UgdmVyeSBzb29uPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuIDwvZGl2PlxyXG5gLFxyXG5cclxuICAgIHN0eWxlczogW2AgbmF2eyAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfWBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvL21vZGVsID0gbmV3IEZvcm1WZWhpY3VsZSgwLCBmYWxzZSk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvL2xpc3RzID0gW107XHJcbiAgICBsaXN0c0RhdGEgPSBbXTtcclxuXHJcblxyXG4gICAgY3VycmVudF9zdGVwX2lkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgICAvL0BJbnB1dCgpIG1hcnF1ZTogTWFycXVlO1xyXG4gICAgc3RlcElkID0gMTtcclxuICAgIHByZXZpb3VzU3RlcElkID0gMDtcclxuICAgIGluZGV4U3RlcE9iaiA9IDA7XHJcbiAgICBsYWJlbFBhbmVsID0gXCJcIjtcclxuICAgIGRhdGFzID0gW107XHJcbiAgICBsaXN0cyA9IFtdO1xyXG4gICAgZm9ybUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgdmFsdWVzU2VsZWN0ZWQgPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TZXJ2aWNlOiBDb2xsZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBfbWFpbFNlcnZpY2U6IE1haWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfc2F2ZVNlcnZpY2U6IFNhdmVTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgdG1wX2lkID0gJyc7XHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3NCYXI6IG51bWJlciA9IDA7XHJcblxyXG4gICAvLyBzdGVwczogU3RlcE1vZGVsW107XHJcbiAgICBjdXN0b21Db2xsZWN0aW9uRGF0YSA9IFtdO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbml0IG1haW4gQ29tcG9uZW50Jyk7XHJcbiAgICAgICAgLy8gSUYgRklSU1QgU1RFUCBJUyBBIENPTExFQ1RJT05cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyogIElGIEZJUlNUIFNURVAgSVMgQSBMSVNUICovXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHNEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzRGF0YSk7XHJcbiAgICAgICAgdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMgPSB0aGlzLmxpc3RzRGF0YS5zbGljZSgpO1xyXG4gICAgICAgIC8vIElOSVRJQVRFIEZPUk0gU0VSVklDRSBUTyBLRUVQIEFMTCBTRUxFQ1RJT05TIE1BREUgQlkgVVNFUiBJTiBTVEVQU1xyXG4gICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuaW5pdCgpO1xyXG5cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICB2YXIgbWFzdGVyX3R5cGUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X3N0ZXBfaWQgPSB0aGlzLnJvdXRlXHJcbiAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xyXG4gICAgICAgICAgICAubWFwKHBhcmFtcyA9PiBwYXJhbXNbJ2lkJ10gfHwgJ05vbmUnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudF9zdGVwX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5pZCk7XHJcbiAgICAgICAgaWYgKCEodHlwZW9mIHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCA9PSAndW5kZWZpbmVkJykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCA9PSAnTm9uZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG1wX2lkID0gdGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5faWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9TdGVwKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU1RBUlQgVEhFIEZJUlNUIFNURVBcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy90aGlzLmN1cnJlbnRfc3RlcF9pZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAvL3RoaXMuZGF0YXMgPSB0aGlzLl9zdGVwU2VydmljZS5kYXRhcy5zbGljZSgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCgtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXNbMF0ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgIH1cclxuXHJcbiAgICBnb1ByZXZpb3VzU3RlcCgkZXZlbnQpIHtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9ICRldmVudC5uZXdJZHhTdGVwT2JqO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuICAgICAgICBsZXQgc3RlcE5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSk7XHJcbiAgICAgICAgLy90aGlzLnZhbHVlc1NlbGVjdGVkID0gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial07XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc3RlcE5hbWUgPT0gdGhpcy5kYXRhc1tpXS5uYW1lKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAvL2ljaSBqJ2FpIGxhIGxpc3RlIGF2ZWMgbGVzIGRhdGFzIGRlIGxhIHN0ZXAgY291cmFudGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgLy90aGlzLmdvVG9TdGVwKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKTtcclxuICAgICAgICAvL3RoaXMubGFiZWxQYW5lbCA9IHRoaXMuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmxhYmVsUGFuZWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RlcCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2F2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgdGhpcy5zdGVwSWQgPT0gQ1VSUkVOVCBTVEVQIElEXHJcbiAgICAgdGhpcy50bXBfaWQgPT0gREFUQSBJRCBUTyBSRVRSSUVWRSBBTEwgREFUQVMgU0VMRUNURUQgRlJPTSBUSElTIFdPUktGTE9XXHJcbiAgICAgKi9cclxuXHJcbiAgICBnb1RvU3RlcChjdXJTdGVwSWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdPIFRPIFNURVAgOiBcIiArIGN1clN0ZXBJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uc3RlcF9pZCA9PSBjdXJTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIElEIDogJyArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQpXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGlja19zZWxlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTElTVCBCVVRUT05TIENBU0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBjdXJTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNURVBfSUQgT1UgU0UgVFJPVVZFIExFIE5PTSBERSBMQSBWQVJJQUJMRSBERSBMQSBWQUxFVVIgQSBGSUxUUkVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0ZpbHRlciA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlVG9GaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0ID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUpLnRoZW4oY29sbGVjdGlvbkRhdGFSZXR1cm4gPT4gdGhpcy5saXN0cy5wdXNoKGNvbGxlY3Rpb25EYXRhUmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50U3RlcElkOiAnICsgdGhpcy5jdXJyZW50X3N0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RtcF9pZCA6ICcgKyB0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXRGb3JtRGF0YSh0aGlzLnRtcF9pZCwgY29sbGVjdGlvbk5hbWUsIGZpbHRlckxpc3QsIHZhbHVlVG9LZWVwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcmVzIGdldEZvcm1EYXRhKCknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIFNFUlZJQ0UgTicgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lLCB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQsIHZhbHVlVG9LZWVwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGlzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElGIEEgTElTVCBFWElTVFMgSU4gU1RFUCBTRVJWSUNFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2FkZWRcIjogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IGN1clN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpZWxkX3BhbmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZJRUxEIFBBTkVMIENBU0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBUWVBFOiAnICsgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0udHlwZSArICdET0VTIE5PVCBFWElTVCBJTiBTVEVQLlNFUlZJQ0UgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAvL0ZJTiBTV0lUQ0hcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzLnNsaWNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gR08gVE8gTkVYVCBTVEVQICggeCArIDEpXHJcbiAgICBnb1RvTmV4dFN0ZXAoc3RlcEluZGV4KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdPIE5FWFQgU1RFUFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhzdGVwSW5kZXgpO1xyXG4gICAgICAgIC8vIGxldCBzdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tzdGVwSW5kZXhdLnN0ZXBfaWRcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9IHN0ZXBJbmRleDtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdjdXJyZW50U3RlcElkOiAnICsgdGhpcy5jdXJyZW50X3N0ZXBfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudF9zdGVwX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4U3RlcE9iaiA6IFwiICsgdGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCd0bXBfaWQgOiAnICsgdGhpcy50bXBfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5pbmRleFN0ZXBPYmogPD0gMCApXHJcbiAgICAgICAgLy8ge1xyXG5cclxuICAgICAgICAvKlxyXG4gICAgICAgICAgICBCVUcgUE9TU0lCTEUgU0kgQ0UgTiBFU1QgUEFTIExFIERFUk5JRVJFIFNURVAgREFOUyBTVEVQUyBBUlJBWVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIC8vIElGIFdFIEFSRSBPTiBUSEUgTEFTVCBTVEVQIE9GIFRIRSBGT1JNIFdFIFNBVkUgVEhFIEZPUk0gSU4gREIsIFNFTkQgQU4gRU1BSUwgQU5EIFNIT1cgQSBNRVNTQUdFIFRPIFRIRSBVU0VSXHJcbiAgICAgICAgbGV0IG5iU3RlcHMgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwcy5sZW5ndGg7XHJcbiAgICAgICAgbmJTdGVwcyA9IG5iU3RlcHMgLSAxO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4U3RlcE9iaiA9PSBuYlN0ZXBzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIGZvcm0nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZVNlcnZpY2Uuc2F2ZURhdGEodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21haWxTZXJ2aWNlLnNlbmRNYWlsKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQsIGRhdGEuX2JvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFpbFN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLl9ib2R5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmorKztcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4U3RlcE9iaiA+IDEpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGlzLmluZGV4U3RlcE9iaiBcIiArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInRoaXMuc3RlcElkIFwiICsgdGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkID09IHRoaXMuc3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmorKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBTSSBJTCBZIEEgREVTIENPTkRJVElPTlMgREVGSU5JRVMgQSBMJ0VUQVBFIFNVSVZBTlRFIEFMT1JTIE9OIFZFUklGSUUgUVVFTExFIEVUQVBFIENPUlJFU1BPTkQgQSBMQSBDT05ESVRJT04gU0lOT04gT04gQVZBTkNFXHJcbiAgICAgICAgICAgIC8vIERBTlMgTEUgVEFCTEVBVSBERVMgRVRBUEVTXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZUNvbmRpdGlvbjogXCIgKyB2YWx1ZUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpXHJcblxyXG4gICAgICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpID09PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAvL3doaWxlICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3N0ZXBJbmRleF1ba2V5Q29uZGl0aW9uXSAhPSB2YWx1ZUNvbmRpdGlvbil7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb25kaXRpb24gcGFzIHJlbXBsaWUsIGonYXZhbmNlIGRlIDEgaW5kaWNlIGRhbnMgbGUgdGFibGVhdS4gSW5kaWNlOiBcIiArIHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4U3RlcE9iaisrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbMF1ba2V5Q29uZGl0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NvbmRpdGlvbiByZW1wbGllLCBqZSByZXN0ZSBzdXIgbCBpbmRpY2U6ICcgKyB0aGlzLmluZGV4U3RlcE9iailcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gVEVNUE9SQVJZIFNURVBfSUQgQkVDQVVTRSBXRSBORUVEIFRPIFdBSVQgRk9SIEFTWU5DSFJPVU5PVVMgUVVFUllcclxuICAgICAgICAgICAgdmFyIHRtcE5ld3N0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG5cclxuICAgICAgICAgICAgLyogSUYgTElTVCBCVVRUT04gQ09NUE9ORU5UICovXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS50eXBlKTtcclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjbGlja19zZWxlY3Rpb24nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImluZGV4U3RlcE9iaiA6IFwiICsgdGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0bXBfaWQgOiAnICsgdGhpcy50bXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgLy8gaWYgKHR5cGVvZiB0aGlzLmRhdGFzW3RoaXMuaW5kZXhTdGVwT2JqXS5sb2FkZWQgPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyogSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgQ09MTEVDVElPTiBJTiBDT05GSUcgRklMRSAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBDT0xMRUNUSU9OXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2lmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkID09IHRtcE5ld3N0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9ETyBURVNURVIgU0kgRklMVEVSIEVYSVNURSBEQU5TIENPTExFQ1RJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RFUF9JRCBPVSBTRSBUUk9VVkUgTEUgTk9NIERFIExBIFZBUklBQkxFIERFIExBIFZBTEVVUiBBIEZJTFRSRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZVRvRmlsdGVyID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlVG9GaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKE51bWJlcihpdGVtLnN0ZXBfaWQpID09IE51bWJlcih0aGlzLnByZXZpb3VzU3RlcElkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHZhbHVlRmlsdGVyTGlzdCA9IGl0ZW0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0tlZXAgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU0VUIE5PTSBERSBWQVJJQUJMRSBUTyBTQVZFIElOIEZPUk0gU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0tlZXAgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUpLnRoZW4oY29sbGVjdGlvbkRhdGFSZXR1cm4gPT4gdGhpcy5saXN0cy5wdXNoKGNvbGxlY3Rpb25EYXRhUmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG1wX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lLCBmaWx0ZXJMaXN0LCB2YWx1ZVRvS2VlcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZGVkXCI6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNraXAgdGhlIHN0ZXAgaWYgdGhlcmUgaXMgb25seSAxIHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJURVNUIElGIE9OTFkgMSBSRUNPUkRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdW3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZV0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9JRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBMSVNUIElOIENPTkZJRyBGSUxFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIExJU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlX3NlbGVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBMSVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaWVsZF9wYW5lbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ211bHRpX3NlbGVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSU1BR0UgU0VMRUNUSU9OIC0gR0VUIERBVEEgRlJPTSBMSVNUIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSUYgQSBNQUlMIElTIENPTkZJR1VSRUQgSU4gU1RFUCBDT05GSUdcclxuICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPiAtMSkge1xyXG4gICAgICAgICAgICAvLyBJRiBBIE1BSUwgSVMgQ09ORklHVVJFRCBJTiBTVEVQIENPTkZJRyBPUiBJRiBMQVNUIFNURVAgT0YgRk9STVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQgIT0gXCJ1bmRlZmluZWRcIikge1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25WYWx1ZVNlbGVjdGVkKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgbGV0IHRtcE9iaiA9IHt9O1xyXG4gICAgICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgLy8gIHRoaXMuX2Zvcm1TZXJ2aWNlLnByZXZpb3VzX3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAvLyAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc0lkeCA9ICRldmVudC5zdGVwSWR4O1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdID0gdG1wT2JqO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXZlbnQuc3RlcElkeDogXCIgKyAkZXZlbnQuc3RlcElkeCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG1wT2JqKTtcclxuICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCgkZXZlbnQuc3RlcElkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogV0hFTiBTVUJNSVRJTkcgKi9cclxuICAgIG9uU3VibWl0aW5nRmllbGRzKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPblN1Ym1pdGluZ0ZpZWxkcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkWzBdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5jdXJyZW50X3N0ZXBfaWQgPSAkZXZlbnQuc3RlcElkO1xyXG4gICAgICAgIC8vIHRoaXMuX2Zvcm1TZXJ2aWNlLnByZXZpb3VzX3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5rZXlzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLm5vbSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5ub20gPT0gJGV2ZW50Lm5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0bXBLZXlOYW1lID0gJGV2ZW50Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRtcEtleU5hbWU6IFwiICsgdG1wS2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8ICRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleU9iamVjdCA9ICRldmVudC52YWx1ZU5hbWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1ZhbHVlID0gJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5T2JqZWN0OiBcIiArIGtleU9iamVjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXdWYWx1ZTogXCIgKyBuZXdWYWx1ZSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVt0bXBLZXlOYW1lXVtpXVtrZXlPYmplY3RdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy92YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sZXQgdG1wU2F2ZSA9IHRtcEtleU5hbWUrJ1snK2krJ10uJytrZXlPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0bXBTYXZlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXT0gJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV0gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVtldmFsKHRtcFNhdmUpXSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB2YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9MDtpPCRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0bXBPYmopO1xyXG4gICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcblxyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3Rpb25zKCRldmVudCkge1xyXG4gICAgICAgIC8vIENvcHkgc2VsZWN0aW9uIGludG8gX2Zvcm1TZXJ2aWNlXHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1skZXZlbnQuc3RlcElkeF1bJGV2ZW50LnZhbHVlTmFtZV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZDtcclxuICAgICAgICAvL0dvIHRvIG5leHQgU3RlcFxyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxufVxyXG4gICAgLy8gZ2V0TGlzdEVxdWlwbWVudCgpe1xyXG4gICAgLy8gICAgIHZhciBhZGRPcHRpb24gPSB0cnVlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5zcGxpY2UoaSwxKTtcclxuICAgIC8vICAgICAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGFkZE9wdGlvbil7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuXHJcbiAgICAvLyAgICAgLy9DaGVjayBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNob2ljZSBwb3NzaWJsZSwgd2UgZGlzcGxheSB0aGUgY2hvaWNlcyBpZiBub3QsIHdlIHNraXAgdGhpcyBzdGVwIGFuZCBnb2VzIGRpcmVjdGx5IHRvIHRoZSBnZWFyYm94IHNlbGVjdGlvblxyXG4gICAgLy8gICAgIGlmICh0aGlzLmxpc3ROYlBvcnRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdE5iUG9ydGVzLnNvcnQoKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5pbmRleFN0ZXBPYmogKys7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPSBcIlwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IHRoaXMubGlzdE5iUG9ydGVzWzBdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdldEdlYXJCb3goJycpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArPSAxMDtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvL3RoaXMuc2hvd0NhcmJ1cmFudCA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcblxyXG5cclxuICAgIC8vIGdldE9wdGlvbihldmVudDphbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnNwbGljZShpLDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoYWRkT3B0aW9uKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbi8vICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gaXNTZWxlY3RlZChvcHRpb24pe1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBvcHRpb24pe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG5cclxuIl19
