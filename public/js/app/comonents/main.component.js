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
const form_service_1 = require("../vehicule/form.service");
const step_service_1 = require("../Engine/step.service");
const collection_service_1 = require("../Engine/collection.service");
const mail_service_1 = require("../Engine/mail.service");
const saveService_1 = require("../components/saveService");
let MainComponent = class MainComponent {
    // public my_form = new FormGroup({
    //     mileage_input: new FormControl()
    // });
    //formVehicule: ControlGroup;
    //formService: FormService;
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
        console.log(this.datas[0].name);
        console.log(this._stepService.steps);
        console.log(this.stepId);
        //  this.goToNextStep();
    }
    goPreviousStep($event) {
        this.indexStepObj = $event.newIdxStepObj;
        console.log(this.indexStepObj);
        this.goToStep(this._stepService.steps[this.indexStepObj].step_id);
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
                        // IF A LIST EXISTS IN STEP SERVICE
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
    // GO TO NEXT STEP ( x + 1)
    goToNextStep(x) {
        console.log(this._stepService);
        console.log(this._formService);
        console.log("GO NEXT STEP");
        console.log(this._stepService.steps);
        console.log(x);
        this.indexStepObj = x;
        // IF A MAIL IS CONFIGURED IN STEP CONFIG
        if (this.indexStepObj > -1) {
            // IF A MAIL IS CONFIGURED IN STEP CONFIG OR IF LAST STEP OF FORM
            if (typeof this._stepService.steps[this.indexStepObj].configuration.mail_id != "undefined") {
                this._mailService.sendMail(this._stepService.steps[this.indexStepObj].configuration.mail_id)
                    .subscribe(mailState => {
                    console.log(mailState);
                }, error => console.log(error));
            }
        }
        // if (this.indexStepObj <= 0 )
        // {
        // IF WE ARE ON THE LAST STEP OF THE FORM WE SAVE THE FORM IN DB, SEND AN EMAIL AND SHOW A MESSAGE TO THE USER
        if (this.indexStepObj == this._stepService.steps.length - 1) {
            console.log('save form');
            console.log(this._formService.arraySteps);
            this._saveService.saveData(this._stepService.steps[this.indexStepObj].step_id)
                .subscribe(data => {
                this.formCompleted = true;
                console.log(data);
            }, error => console.log(error));
        }
        else {
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
        }
    }
    onValueSelected($event) {
        console.log($event.valueSelected);
        console.log($event.valueName);
        console.log(this.indexStepObj);
        var tmpObj = {};
        tmpObj[$event.valueName] = $event.valueSelected;
        console.log(tmpObj);
        this._formService.previous_step_id = this.stepId;
        this._formService.arrayStepsIdx = $event.stepIdx;
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
        this._formService.previous_step_id = this.stepId;
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

    <div *ngIf="formCompleted" class="alert alert-success" role="alert">
        Your request has been sent, you should receive a email with the information you sent to us. We'll come back to you very soon
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
    __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, (typeof (_a = typeof form_service_1.FormService !== 'undefined' && form_service_1.FormService) === 'function' && _a) || Object, step_service_1.StepService, collection_service_1.CollectionService, mail_service_1.MailService, saveService_1.SaveService])
], MainComponent);
exports.MainComponent = MainComponent;
var _a;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW9uZW50cy9tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXVDLGVBQ3ZDLENBQUMsQ0FEcUQ7QUFDdEQseUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0Msd0JBQThELGdCQUFnQixDQUFDLENBQUE7QUFJL0UsK0JBQTBCLDBCQUEwQixDQUFDLENBQUE7QUFFckQsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQscUNBQWdDLDhCQUE4QixDQUFDLENBQUE7QUFHL0QsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsOEJBQTBCLDJCQUEyQixDQUFDLENBQUE7QUFzR3REO0lBaUJJLG1DQUFtQztJQUNuQyx1Q0FBdUM7SUFDdkMsTUFBTTtJQUNOLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsWUFDWSxLQUFxQixFQUFVLEdBQWdCLEVBQy9DLFlBQXlCLEVBQVUsWUFBeUIsRUFDNUQsa0JBQXFDLEVBQVUsWUFBeUIsRUFDeEUsWUFBeUI7UUFIekIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFhO1FBQy9DLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDNUQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQ3hFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBekJyQyxxQ0FBcUM7UUFDckMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVsQixhQUFhO1FBQ2IsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUloQiwwQkFBMEI7UUFDekIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLG1CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGlCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWF0Qix5QkFBeUI7UUFDekIsNEJBQTRCO1FBQzVCLGlDQUFpQztRQUNqQyxtQ0FBbUM7UUFDbkMsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNMLGdCQUFXLEdBQVUsQ0FBQyxDQUFDO1FBRzlCLHlCQUFvQixHQUFFLEVBQUUsQ0FBQztJQVZwQixDQUFDO0lBWU4sUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxnQ0FBZ0M7UUFDaEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEUsQ0FBQztRQUViLDhCQUE4QjtRQUM5QixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2hCLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO2dCQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUk7YUFDeEQsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakQscUVBQXFFO1FBQ3JFLDJCQUEyQjtRQUcvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBRXpELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUs7YUFDNUIsV0FBVzthQUNYLEdBQUcsQ0FBQyxNQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FDcEMsQ0FBQztRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLHNEQUFzRDtRQUN0RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFFckQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFakUsQ0FBQztRQUNMLENBQUM7UUFFRCxJQUFJLENBQUMsQ0FBQztZQUNGLHFDQUFxQztZQUNyQywrQ0FBK0M7WUFDL0MsMEJBQTBCO1lBQzFCLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0Qsa0NBQWtDO1FBQ2xDLHlDQUF5QztRQUd6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLHdCQUF3QjtJQUM5QixDQUFDO0lBRUcsY0FBYyxDQUFDLE1BQU07UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLDZEQUE2RDtJQUNqRSxDQUFDO0lBR0QsUUFBUTtRQUNKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7SUFFRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQ7OztPQUdHO0lBRUgsUUFBUSxDQUFDLFNBQVM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQUEsQ0FBQztRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBRXRELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDOUQsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDdEMsS0FBSyxpQkFBaUI7d0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzt3QkFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDaEQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7NEJBQzVFLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs0QkFDcEIsNkNBQTZDOzRCQUM3Qyx1Q0FBdUM7NEJBQy9CLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOzRCQUM5RSxxQkFBcUI7NEJBQ3JCOzsrQkFFRzs0QkFDSCxvRUFBb0U7NEJBQ3BFLElBQUksYUFBYSxHQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzs0QkFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzs0QkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzs0QkFDcEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7NEJBRS9CLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQzs0QkFFaEYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO2dDQUNsRixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQzs0QkFDaEYsQ0FBQzs0QkFDRCxJQUFJLENBQUMsQ0FBQztnQ0FDRixXQUFXLEdBQUcsRUFBRSxDQUFBOzRCQUNwQixDQUFDOzRCQUNELHlIQUF5SDs0QkFDekgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQ3pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQ0FDbEYsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7NEJBQ2hGLENBQUM7NEJBQ0QsSUFBSSxDQUFDLENBQUM7Z0NBQ0YsV0FBVyxHQUFHLEVBQUUsQ0FBQTs0QkFDcEIsQ0FBQzs0QkFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUU7aUNBQ3JGLElBQUksQ0FBQyxJQUFJO2dDQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQ0FDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQ0FFbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUMsQ0FBQztnQ0FDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUN2QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7cUNBQzdLLElBQUksQ0FBQyxNQUFNO29DQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7b0NBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO3dDQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJO3dDQUN2QyxNQUFNLEVBQUUsTUFBTTtxQ0FDakIsQ0FBQyxDQUFDO29DQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQ0FDbEMsbUVBQW1FO29DQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztvQ0FDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0NBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29DQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztvQ0FDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0NBQzdCLENBQUMsRUFDRyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FFOUIsQ0FBQTs0QkFDTCxDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7d0JBRVYsQ0FBQzt3QkFDRCxtQ0FBbUM7d0JBQ25DLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDOzRCQUNuSCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQzt3QkFDNUIsQ0FBQzt3QkFDRCxLQUFLLENBQUM7b0JBR1YsS0FBSyxhQUFhO3dCQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQzt3QkFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7d0JBQ3hCLEtBQUssQ0FBQztvQkFFVjt3QkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsaUNBQWlDLENBQUMsQ0FBQztnQkFDekcsQ0FBQztnQkFDRCxLQUFLLENBQUM7WUFDVixDQUFDLENBQUMsWUFBWTtZQUNkLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFakQsQ0FBQztJQUNMLENBQUM7SUFHRCwyQkFBMkI7SUFDM0IsWUFBWSxDQUFDLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdyQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIseUNBQXlDO1FBQ3pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3hCLGlFQUFpRTtZQUNqRSxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxJQUFJLFdBQVksQ0FBQyxDQUM1RixDQUFDO2dCQUNHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO3FCQUN2RixTQUFTLENBQ04sU0FBUztvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUVELCtCQUErQjtRQUMvQixJQUFJO1FBQ0osOEdBQThHO1FBQzlHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQztpQkFDekUsU0FBUyxDQUNOLElBQUk7Z0JBQ0EsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFBQyxDQUFDLEVBQ3ZCLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBQ1QsQ0FBQztRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRyxDQUFDO1lBQ2pDLFdBQVc7WUFDSCw4RUFBOEU7WUFDOUUsNEJBQTRCO1lBQzVCLElBQUk7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBR3hELG9FQUFvRTtZQUNwRSxJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3RFLG9EQUFvRDtZQUNwRCxnREFBZ0Q7WUFDaEQsd0NBQXdDO1lBRXhDLDhCQUE4QjtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUl6RCxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDdEQsS0FBSyxpQkFBaUI7b0JBRWxCLHVEQUF1RDtvQkFDdkQsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO3dCQUM1RixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7d0JBQ3hDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzt3QkFDcEIsNENBQTRDO3dCQUM1QywwRUFBMEU7d0JBQzFFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzt3QkFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDeEQ7OzJCQUVHO3dCQUNILG9FQUFvRTt3QkFDcEUsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDMUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQzt3QkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ25HLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO3dCQUUvQixVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO3dCQUN4RixJQUFJO3dCQUNKLDZEQUE2RDt3QkFDN0QsdUNBQXVDO3dCQUN2QyxnRUFBZ0U7d0JBQ2hFLElBQUk7d0JBRUosOENBQThDO3dCQUM5QyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDOzRCQUNsRyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7d0JBQ2hHLENBQUM7d0JBQ0QsSUFBSSxDQUFDLENBQUM7NEJBQ0YsV0FBVyxHQUFHLEVBQUUsQ0FBQTt3QkFDcEIsQ0FBQzt3QkFDRCx5SEFBeUg7d0JBQ3pILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxVQUFVLEVBQUUsV0FBVyxDQUFDOzZCQUNwRSxJQUFJLENBQUMsSUFBSTs0QkFDRixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUVsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0NBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJO2dDQUN2RCxNQUFNLEVBQUUsSUFBSTs2QkFDZixDQUFDLENBQUM7NEJBQ0gsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOzRCQUNsQyxtRUFBbUU7NEJBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDOzRCQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDN0IsQ0FBQyxFQUNELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFDO29CQUNWLENBQUM7b0JBRUQsNkNBQTZDO29CQUM3QyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDN0QsaUZBQWlGO3dCQUNqRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQzs0QkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUk7NEJBQ3ZELE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsYUFBYSxDQUFDLElBQUk7eUJBQ3hFLENBQUMsQ0FBQzt3QkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7b0JBQy9CLENBQUM7b0JBQ0QsS0FBSyxDQUFDO2dCQUVWLEtBQUssaUJBQWlCO29CQUNsQixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQzt3QkFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7NEJBQ1osTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJOzRCQUN2RCxNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxJQUFJO3lCQUN4RSxDQUFDLENBQUM7d0JBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO29CQUMvQixDQUFDO29CQUNELEtBQUssQ0FBQztnQkFFVixLQUFLLGFBQWE7b0JBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7b0JBQzNCLEtBQUssQ0FBQztnQkFFVjtvQkFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9CLENBQUM7UUFDSixDQUFDO0lBR04sQ0FBQztJQUVELGVBQWUsQ0FBQyxNQUFNO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNqRCxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELG9CQUFvQjtJQUNwQixpQkFBaUIsQ0FBQyxNQUFNO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLDZDQUE2QztRQUM3QyxpQ0FBaUM7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDakQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUUsQ0FBQyxFQUFFLENBQUMsR0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztZQUV2RCxvREFBb0Q7WUFDcEQsbURBQW1EO1lBRS9DLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSyxDQUFDLENBQUEsQ0FBQztnQkFDckQsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3ZDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUMsQ0FBQztvQkFDOUMsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxRQUFRLEdBQUksTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFFeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUUsU0FBUyxDQUFFLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxDQUFDO29CQUM3RCxpR0FBaUc7b0JBRXpFLGtCQUFrQjtvQkFDbEIsZ0RBQWdEO29CQUNoRCx1QkFBdUI7b0JBQ3ZCLHdEQUF3RDtvQkFDeEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNyRSw0REFBNEQ7b0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztvQkFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsQ0FBQztZQUNMLENBQUM7UUFDVCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLEVBQUU7UUFDRixtQkFBbUI7UUFDbkIsb0RBQW9EO1FBQ3BELDREQUE0RDtRQUM1RCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLDJEQUEyRDtRQUUzRCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsYUFBYSxDQUFDLE1BQU07UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0FBOERMLENBQUM7QUF6bEJEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F1RmI7UUFFRyxNQUFNLEVBQUUsQ0FBQzs7Ozs7OztjQU9DLENBQUM7S0FFZCxDQUFDOztpQkFBQTtBQUNXLHFCQUFhLGdCQW9mekIsQ0FBQSIsImZpbGUiOiJjb21vbmVudHMvbWFpbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQge1ZhbGlkYXRvcnMsIEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7U3RlcE1vZGVsfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXBNb2RlbFwiO1xyXG5cclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uL3ZlaGljdWxlL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuLi92ZWhpY3VsZS9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvc2F2ZVNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ZlaGljdWxlLWRldGFpbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gXHJcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCI+XHJcbiAgIFxyXG48IS0tPHA+U2Vzc2lvbiBJRDoge3sgY3VycmVudF9zdGVwX2lkIHwgYXN5bmMgfX08L3A+LS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPCEtLTxkaXYgIGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiPiBEYXRhIGdyaWQgPC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTkVXIEZPUk08L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+IEFqb3V0ZXIgY29udGFjdCA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+IExpc3RlciBjb250YWN0cyA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnI+XHJcbiAgICBcclxuICAgIFxyXG4gICAgPGRpdiAqbmdJZj1cInRoaXMuc3RlcElkICE9IDFcIj5cclxuICAgICAgICA8cHJldmlvdXMtcGFnZSBcclxuICAgICAgICAgICAgW3N0ZXBJZF0gPSBcInN0ZXBJZFwiXHJcbiAgICAgICAgICAgIFtpZHhTdGVwT2JqXSA9ICBcImluZGV4U3RlcE9ialwiXHJcbiAgICAgICAgICAgIChjaGFuZ2UpID0gZ29QcmV2aW91c1N0ZXAoJGV2ZW50KSA+XHJcbiAgICAgICAgPC9wcmV2aW91cy1wYWdlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8YnI+XHJcbiAgICBcclxuICAgPGRpdiAqbmdGb3I9XCJsZXQgb2JqU3RlcCBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwczsgbGV0IGkgPSBpbmRleFwiID5cclxuICAgICAgICA8IS0tIElNQUdFIExJU1QgQlVUVE9OIFBBTkVMIC0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicgXCI+XHJcbiAgICAgICAgICAgIDxwYW5lbC1idG4taW1nXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5zZWxlY3Rpb25cIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgW2xpc3RPZkVsZW1lbnRzXT1cInRoaXMuZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25WYWx1ZVNlbGVjdGVkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9wYW5lbC1idG4taW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gTElTVCBCVVRUT04gUEFORUwgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnY2xpY2tfc2VsZWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICA8bGlzdC1idXR0b25zICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbGlzdE9mRWxlbWVudHNdPVwidGhpcy5kYXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2xpc3QtYnV0dG9ucz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBNVUxUSVBMRSBTRUxFQ1RJT04gTElTVCBCVVRUT04tLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdtdWx0aV9zZWxlY3Rpb24nXCI+XHJcbiAgICAgICAgICAgIDxtdWx0aS1zZWxlY3Rpb25cclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlU2VsZWN0ZWRdPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLnNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2xpc3RPZkVsZW1lbnRzXT1cInRoaXMuZGF0YXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZ2V0U2VsZWN0aW9ucygkZXZlbnQpXCIgICAgICAgICBcclxuICAgICAgICAgICAgPjwvbXVsdGktc2VsZWN0aW9uPiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLS0gRklFTEQgUEFORUwgLS0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ZpZWxkX3BhbmVsJ1wiPlxyXG4gICAgICAgICAgICA8ZmllbGQtcGFuZWwgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKHNlbnQpPVwib25TdWJtaXRpbmdGaWVsZHMoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2ZpZWxkLXBhbmVsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gPC9kaXY+XHJcbiAgICAgIDxwcm9ncmVzcyBjbGFzcz1cInByb2dyZXNzIHByb2dyZXNzLWRhbmdlclwiIFthdHRyLnZhbHVlXT1cInByb2dyZXNzQmFyXCIgbWF4PVwiMTAwXCIgPjwvcHJvZ3Jlc3M+XHJcbjxzYXZlLWJ1dHRvblxyXG4gICAgKm5nSWY9XCJ0aGlzLl9zdGVwU2VydmljZS5zdGVwWzBdLm1hc3Rlcl90eXBlID09ICd3b3JrZmxvdydcIlxyXG4gICAgKHNhdmVTdGVwKT1cInNhdmVTdGVwKCRldmVudClcIlxyXG4gICAgW3N0ZXBJZF09XCJ0aGlzLnN0ZXBJZFwiXHJcbj5cclxuXHJcbjwvc2F2ZS1idXR0b24+XHJcblxyXG4gICAgPGRpdiAqbmdJZj1cImZvcm1Db21wbGV0ZWRcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXN1Y2Nlc3NcIiByb2xlPVwiYWxlcnRcIj5cclxuICAgICAgICBZb3VyIHJlcXVlc3QgaGFzIGJlZW4gc2VudCwgeW91IHNob3VsZCByZWNlaXZlIGEgZW1haWwgd2l0aCB0aGUgaW5mb3JtYXRpb24geW91IHNlbnQgdG8gdXMuIFdlJ2xsIGNvbWUgYmFjayB0byB5b3UgdmVyeSBzb29uXHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG48L2Rpdj5cclxuYCxcclxuXHJcbiAgICBzdHlsZXM6IFtgIG5hdnsgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1gXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIE1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgLy9tb2RlbCA9IG5ldyBGb3JtVmVoaWN1bGUoMCwgZmFsc2UpO1xyXG4gICAgc3VibWl0dGVkID0gZmFsc2U7XHJcblxyXG4gICAgLy9saXN0cyA9IFtdO1xyXG4gICAgbGlzdHNEYXRhID0gW107XHJcblxyXG5cclxuICAgIGN1cnJlbnRfc3RlcF9pZDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xyXG4gICAvL0BJbnB1dCgpIG1hcnF1ZTogTWFycXVlO1xyXG4gICAgc3RlcElkID0gMTtcclxuICAgIHByZXZpb3VzU3RlcElkID0gMDtcclxuICAgIGluZGV4U3RlcE9iaiA9IDA7XHJcbiAgICBsYWJlbFBhbmVsID0gXCJcIjtcclxuICAgIGRhdGFzID0gW107XHJcbiAgICBsaXN0cyA9IFtdO1xyXG4gICAgZm9ybUNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgLy8gcHVibGljIG15X2Zvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgIC8vICAgICBtaWxlYWdlX2lucHV0OiBuZXcgRm9ybUNvbnRyb2woKVxyXG4gICAgLy8gfSk7XHJcbiAgICAvL2Zvcm1WZWhpY3VsZTogQ29udHJvbEdyb3VwO1xyXG4gICAgLy9mb3JtU2VydmljZTogRm9ybVNlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLFxyXG4gICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX2NvbGxlY3Rpb25TZXJ2aWNlOiBDb2xsZWN0aW9uU2VydmljZSwgcHJpdmF0ZSBfbWFpbFNlcnZpY2U6IE1haWxTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgX3NhdmVTZXJ2aWNlOiBTYXZlU2VydmljZSlcclxuICAgICAgICB7fVxyXG5cclxuICAgIC8vIHZlaGljdWxlczogVmVoaWN1bGVbXTtcclxuICAgIC8vIGNvbmZpcm06IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIC8vIHZlcmlmTWlsZWFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gbWlzc2luZ01pbGVhZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRtcF9pZCA9ICcnO1xyXG4gICAgcHVibGljIHByb2dyZXNzQmFyOm51bWJlciA9IDA7XHJcblxyXG4gICAgc3RlcHM6IFN0ZXBNb2RlbFtdO1xyXG4gICAgY3VzdG9tQ29sbGVjdGlvbkRhdGE9IFtdO1xyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2luaXQgbWFpbiBDb21wb25lbnQnKTtcclxuICAgICAgICAvLyBJRiBGSVJTVCBTVEVQIElTIEEgQ09MTEVDVElPTlxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAvKiAgSUYgRklSU1QgU1RFUCBJUyBBIExJU1QgKi9cclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgdGhpcy5saXN0c0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubmFtZSxcclxuICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHNEYXRhKTtcclxuICAgICAgICB0aGlzLl9zdGVwU2VydmljZS5kYXRhcyA9IHRoaXMubGlzdHNEYXRhLnNsaWNlKCk7XHJcbiAgICAgICAgLy8gSU5JVElBVEUgRk9STSBTRVJWSUNFIFRPIEtFRVAgQUxMIFNFTEVDVElPTlMgTUFERSBCWSBVU0VSIElOIFNURVBTXHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICB2YXIgbWFzdGVyX3R5cGUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50X3N0ZXBfaWQgPSB0aGlzLnJvdXRlXHJcbiAgICAgICAgICAgIC5xdWVyeVBhcmFtc1xyXG4gICAgICAgICAgICAubWFwKHBhcmFtcyA9PiBwYXJhbXNbJ2lkJ10gfHwgJ05vbmUnXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudF9zdGVwX2lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5pZCk7XHJcbiAgICAgICAgaWYgKCEodHlwZW9mIHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCA9PSAndW5kZWZpbmVkJykpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCAhPSAnTm9uZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG1wX2lkID0gdGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5faWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5nb1RvU3RlcCh0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmN1cnJlbnRfaWQpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTVEFSVCBUSEUgRklSU1QgU1RFUFxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvL3RoaXMuY3VycmVudF9zdGVwX2lkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgIC8vdGhpcy5kYXRhcyA9IHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzLnNsaWNlKCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKC0xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIC8vIGNvbnMgb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5kYXRhcyk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzWzBdLm5hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgIC8vICB0aGlzLmdvVG9OZXh0U3RlcCgpO1xyXG59XHJcblxyXG4gICAgZ29QcmV2aW91c1N0ZXAoJGV2ZW50KXtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9ICRldmVudC5uZXdJZHhTdGVwT2JqO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICB0aGlzLmdvVG9TdGVwKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkKTtcclxuICAgICAgICAvL3RoaXMubGFiZWxQYW5lbCA9IHRoaXMuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmxhYmVsUGFuZWw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uU3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuc3VibWl0dGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU3RlcCgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICB0aGlzLnN0ZXBJZCA9PSBDVVJSRU5UIFNURVAgSURcclxuICAgICB0aGlzLnRtcF9pZCA9PSBEQVRBIElEIFRPIFJFVFJJRVZFIEFMTCBEQVRBUyBTRUxFQ1RFRCBGUk9NIFRISVMgV09SS0ZMT1dcclxuICAgICAqL1xyXG5cclxuICAgIGdvVG9TdGVwKGN1clN0ZXBJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiR08gTkVYVCBTVEVQIDogXCIgKyBjdXJTdGVwSWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTs7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9zdGVwU2VydmljZS5zdGVwcy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQgPT0gY3VyU3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBJRCA6ICcgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5zdGVwX2lkKVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xpY2tfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0xJU1QgQlVUVE9OUyBDQVNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpbHRlckxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gY3VyU3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEVQX0lEIE9VIFNFIFRST1VWRSBMRSBOT00gREUgTEEgVkFSSUFCTEUgREUgTEEgVkFMRVVSIEEgRklMVFJFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0ZpbHRlciA9ICB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlVG9GaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0tlZXAgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvS2VlcCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lKS50aGVuKGNvbGxlY3Rpb25EYXRhUmV0dXJuID0+IHRoaXMubGlzdHMucHVzaChjb2xsZWN0aW9uRGF0YVJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldEZvcm1EYXRhKHRoaXMudG1wX2lkLCBjb2xsZWN0aW9uTmFtZSwgZmlsdGVyTGlzdCwgdmFsdWVUb0tlZXAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FwcmVzIGdldEZvcm1EYXRhKCknKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIFNFUlZJQ0UgTicgKyBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXModGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLm5hbWUsIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCwgdmFsdWVUb0tlZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IGN1clN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElGIEEgTElTVCBFWElTVFMgSU4gU1RFUCBTRVJWSUNFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1wibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5uYW1lICwgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24ubGlzdH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdmaWVsZF9wYW5lbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGSUVMRCBQQU5FTCBDQVNFJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gY3VyU3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NURVAgVFlQRTogJyArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnR5cGUgKyAnRE9FUyBOT1QgRVhJU1QgSU4gU1RFUC5TRVJWSUNFICcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH0gLy9GSU4gU1dJVENIXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YXMgPSB0aGlzLl9zdGVwU2VydmljZS5kYXRhcy5zbGljZSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIEdPIFRPIE5FWFQgU1RFUCAoIHggKyAxKVxyXG4gICAgZ29Ub05leHRTdGVwKHgpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHTyBORVhUIFNURVBcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coeCk7XHJcbiAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmogPSB4O1xyXG4gICAgICAgIC8vIElGIEEgTUFJTCBJUyBDT05GSUdVUkVEIElOIFNURVAgQ09ORklHXHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXhTdGVwT2JqID4gLTEpe1xyXG4gICAgICAgICAgICAvLyBJRiBBIE1BSUwgSVMgQ09ORklHVVJFRCBJTiBTVEVQIENPTkZJRyBPUiBJRiBMQVNUIFNURVAgT0YgRk9STVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQgIT0gXCJ1bmRlZmluZWRcIiApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX21haWxTZXJ2aWNlLnNlbmRNYWlsKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLm1haWxfaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbFN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1haWxTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLmluZGV4U3RlcE9iaiA8PSAwIClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gSUYgV0UgQVJFIE9OIFRIRSBMQVNUIFNURVAgT0YgVEhFIEZPUk0gV0UgU0FWRSBUSEUgRk9STSBJTiBEQiwgU0VORCBBTiBFTUFJTCBBTkQgU0hPVyBBIE1FU1NBR0UgVE8gVEhFIFVTRVJcclxuICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPT0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIGZvcm0nKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZVNlcnZpY2Uuc2F2ZURhdGEodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1Db21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmogKys7XHJcbi8vICAgICAgICB9XHJcbiAgICAgICAgLy8gd2hpbGUgKCB0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0gPT0gJ3VuZGVmaW5lZCcgKSB7XHJcbiAgICAgICAgLy8gICAgICB0aGlzLmluZGV4U3RlcE9iaisrO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuaW5kZXhTdGVwT2JqIFwiK3RoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0pO1xyXG5cclxuXHJcbiAgICAgICAgLy8gVEVNUE9SQVJZIFNURVBfSUQgQkVDQVVTRSBXRSBORUVEIFRPIFdBSVQgRk9SIEFTWU5DSFJPVU5PVVMgUVVFUllcclxuICAgICAgICB2YXIgdG1wTmV3c3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2luZGV4U3RwT2JqIDonICsgdGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0bXBOZXdTdGVwSWQ6ICcrICB0bXBOZXdzdGVwSWQpO1xyXG4gICAgICAgIC8vIC8vIHRoaXMucHJldmlvdXNTdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuXHJcbiAgICAgICAgLyogSUYgTElTVCBCVVRUT04gQ09NUE9ORU5UICovXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnR5cGUpO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdjbGlja19zZWxlY3Rpb24nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiBJRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBDT0xMRUNUSU9OIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBDT0xMRUNUSU9OXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2ZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2lmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkID09IHRtcE5ld3N0ZXBJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBUT0RPIFRFU1RFUiBTSSBGSUxURVIgRVhJU1RFIERBTlMgQ09MTEVDVElPTlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU1RFUF9JRCBPVSBTRSBUUk9VVkUgTEUgTk9NIERFIExBIFZBUklBQkxFIERFIExBIFZBTEVVUiBBIEZJTFRSRVJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9GaWx0ZXIgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZVRvRmlsdGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlckxpc3QgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAoTnVtYmVyKGl0ZW0uc3RlcF9pZCkgPT0gTnVtYmVyKHRoaXMucHJldmlvdXNTdGVwSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhpdGVtLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIHZhbHVlRmlsdGVyTGlzdCA9IGl0ZW0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNFVCBOT00gREUgVkFSSUFCTEUgVE8gU0FWRSBJTiBGT1JNIFNFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0tlZXAgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0tlZXAgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUpLnRoZW4oY29sbGVjdGlvbkRhdGFSZXR1cm4gPT4gdGhpcy5saXN0cy5wdXNoKGNvbGxlY3Rpb25EYXRhUmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy50bXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyhjb2xsZWN0aW9uTmFtZSwgZmlsdGVyTGlzdCwgdmFsdWVUb0tlZXApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9JRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBMSVNUIElOIENPTkZJRyBGSUxFXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBMSVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ltYWdlX3NlbGVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiR0VUIERBVEEgRlJPTSBMSVNUXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaWVsZF9wYW5lbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVTZWxlY3RlZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50LnZhbHVlTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIHZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZDtcclxuICAgICAgICBjb25zb2xlLmxvZyh0bXBPYmopO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnByZXZpb3VzX3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzSWR4ID0gJGV2ZW50LnN0ZXBJZHg7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudC5zdGVwSWR4OiBcIiArICRldmVudC5zdGVwSWR4KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoJGV2ZW50LnN0ZXBJZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFdIRU4gU1VCTUlUSU5HICovXHJcbiAgICBvblN1Ym1pdGluZ0ZpZWxkcygkZXZlbnQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnT25TdWJtaXRpbmdGaWVsZHMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVTZWxlY3RlZFswXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJGV2ZW50LnZhbHVlTmFtZSk7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuY3VycmVudF9zdGVwX2lkID0gJGV2ZW50LnN0ZXBJZDtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5wcmV2aW91c19zdGVwX2lkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9MDsgajx0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmxlbmd0aDsgaisrKXtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5rZXlzKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLm5vbSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal0ubm9tID09ICRldmVudC5uYW1lICl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRtcEtleU5hbWUgPSAkZXZlbnQubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRtcEtleU5hbWU6IFwiK3RtcEtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwkZXZlbnQudmFsdWVTZWxlY3RlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlPYmplY3QgPSAkZXZlbnQudmFsdWVOYW1lW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSAgJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleU9iamVjdDogXCIrIGtleU9iamVjdCApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1ZhbHVlOiBcIiArIG5ld1ZhbHVlKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdW3RtcEtleU5hbWVdW2ldW2tleU9iamVjdF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy92YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IHRtcFNhdmUgPSB0bXBLZXlOYW1lKydbJytpKyddLicra2V5T2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRtcFNhdmUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXT0gJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV0gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdW3RtcEtleU5hbWVdW2ldW2tleU9iamVjdF0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdW2V2YWwodG1wU2F2ZSldID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcgJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB2YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9MDtpPCRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0bXBPYmopO1xyXG4gICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcblxyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCRldmVudC5zdGVwSWR4KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZWxlY3Rpb25zKCRldmVudCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50KTtcclxuICAgIH1cclxuICAgIC8vIGdldExpc3RFcXVpcG1lbnQoKXtcclxuICAgIC8vICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWRbaV0gPT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQuc3BsaWNlKGksMSk7XHJcbiAgICAvLyAgICAgICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChhZGRPcHRpb24pe1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcblxyXG4gICAgLy8gICAgIC8vQ2hlY2sgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZSBjaG9pY2UgcG9zc2libGUsIHdlIGRpc3BsYXkgdGhlIGNob2ljZXMgaWYgbm90LCB3ZSBza2lwIHRoaXMgc3RlcCBhbmQgZ29lcyBkaXJlY3RseSB0byB0aGUgZ2VhcmJveCBzZWxlY3Rpb25cclxuICAgIC8vICAgICBpZiAodGhpcy5saXN0TmJQb3J0ZXMubGVuZ3RoID4gMSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmxpc3ROYlBvcnRlcy5zb3J0KCk7XHJcbiAgICAvLyAgICAgICAgIC8vIHRoaXMuaW5kZXhTdGVwT2JqICsrO1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5wb3J0ZVNlbGVjdGVkID0gXCJcIjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPSB0aGlzLmxpc3ROYlBvcnRlc1swXTtcclxuICAgIC8vICAgICAgICAgdGhpcy5nZXRHZWFyQm94KCcnKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pbmRleFN0ZXBPYmogKz0gMTA7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy90aGlzLnNob3dDYXJidXJhbnQgPSBmYWxzZTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvL1xyXG5cclxuXHJcbiAgICAvLyBnZXRPcHRpb24oZXZlbnQ6YW55KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQpO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHZhciBhZGRPcHRpb24gPSB0cnVlO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAvLyAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5zcGxpY2UoaSwxKTtcclxuICAgICAgICAvLyAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKGFkZE9wdGlvbil7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG4vLyAgICB9O1xyXG4gICAgLy9cclxuICAgIC8vIGlzU2VsZWN0ZWQob3B0aW9uKXtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWRbaV0gPT0gb3B0aW9uKXtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vIH1cclxuXHJcblxyXG5cclxufVxyXG4iXX0=
