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
    __metadata('design:paramtypes', [router_1.ActivatedRoute, forms_1.FormBuilder, form_service_1.FormService, step_service_1.StepService, collection_service_1.CollectionService, mail_service_1.MailService, saveService_1.SaveService])
], MainComponent);
exports.MainComponent = MainComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL21haW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUMsZUFDdkMsQ0FBQyxDQURxRDtBQUN0RCx5QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyx3QkFBOEQsZ0JBQWdCLENBQUMsQ0FBQTtBQUkvRSwrQkFBMEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUUzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCxxQ0FBZ0MsOEJBQThCLENBQUMsQ0FBQTtBQUcvRCwrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCw4QkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQXNHdEQ7SUFpQkksbUNBQW1DO0lBQ25DLHVDQUF1QztJQUN2QyxNQUFNO0lBQ04sNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixZQUNZLEtBQXFCLEVBQVUsR0FBZ0IsRUFDL0MsWUFBeUIsRUFBVSxZQUF5QixFQUM1RCxrQkFBcUMsRUFBVSxZQUF5QixFQUN4RSxZQUF5QjtRQUh6QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQWE7UUFDL0MsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUM1RCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDeEUsaUJBQVksR0FBWixZQUFZLENBQWE7UUF6QnJDLHFDQUFxQztRQUNyQyxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGFBQWE7UUFDYixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBSWhCLDBCQUEwQjtRQUN6QixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFDbkIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFB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R0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hCLENBQUM7QUE4REwsQ0FBQztBQXpsQkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVGYjtRQUVHLE1BQU0sRUFBRSxDQUFDOzs7Ozs7O2NBT0MsQ0FBQztLQUVkLENBQUM7O2lCQUFBO0FBQ1cscUJBQWEsZ0JBb2Z6QixDQUFBIiwiZmlsZSI6InZlaGljdWxlL21haW4uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHtWYWxpZGF0b3JzLCBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5pbXBvcnQge1N0ZXBNb2RlbH0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwTW9kZWxcIjtcclxuXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zYXZlU2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAndmVoaWN1bGUtZGV0YWlsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiBcclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgXHJcbjwhLS08cD5TZXNzaW9uIElEOiB7eyBjdXJyZW50X3N0ZXBfaWQgfCBhc3luYyB9fTwvcD4tLT5cclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tPGRpdiAgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCI+IERhdGEgZ3JpZCA8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3N0ZXAnXVwiPiBORVcgRk9STTwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gQWpvdXRlciBjb250YWN0IDwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gTGlzdGVyIGNvbnRhY3RzIDwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxicj5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8ZGl2ICpuZ0lmPVwidGhpcy5zdGVwSWQgIT0gMVwiPlxyXG4gICAgICAgIDxwcmV2aW91cy1wYWdlIFxyXG4gICAgICAgICAgICBbc3RlcElkXSA9IFwic3RlcElkXCJcclxuICAgICAgICAgICAgW2lkeFN0ZXBPYmpdID0gIFwiaW5kZXhTdGVwT2JqXCJcclxuICAgICAgICAgICAgKGNoYW5nZSkgPSBnb1ByZXZpb3VzU3RlcCgkZXZlbnQpID5cclxuICAgICAgICA8L3ByZXZpb3VzLXBhZ2U+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxicj5cclxuICAgIFxyXG4gICA8ZGl2ICpuZ0Zvcj1cImxldCBvYmpTdGVwIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzOyBsZXQgaSA9IGluZGV4XCIgPlxyXG4gICAgICAgIDwhLS0gSU1BR0UgTElTVCBCVVRUT04gUEFORUwgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyBcIj5cclxuICAgICAgICAgICAgPHBhbmVsLWJ0bi1pbWdcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZHhdPVwiaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlU2VsZWN0ZWRdPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLnNlbGVjdGlvblwiICBcclxuICAgICAgICAgICAgICAgICAgICBbbGlzdE9mRWxlbWVudHNdPVwidGhpcy5kYXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvblZhbHVlU2VsZWN0ZWQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8L3BhbmVsLWJ0bi1pbWc+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLSBMSVNUIEJVVFRPTiBQQU5FTCAtLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdjbGlja19zZWxlY3Rpb24nXCI+XHJcbiAgICAgICAgICAgIDxsaXN0LWJ1dHRvbnMgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5zZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWR4XT1cImlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmRhdGFzXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uVmFsdWVTZWxlY3RlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvbGlzdC1idXR0b25zPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8IS0tIE1VTFRJUExFIFNFTEVDVElPTiBMSVNUIEJVVFRPTi0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ211bHRpX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgPG11bHRpLXNlbGVjdGlvblxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICBbbGlzdE9mRWxlbWVudHNdPVwidGhpcy5kYXRhc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJnZXRTZWxlY3Rpb25zKCRldmVudClcIiAgICAgICAgIFxyXG4gICAgICAgICAgICA+PC9tdWx0aS1zZWxlY3Rpb24+ICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8IS0tLSBGSUVMRCBQQU5FTCAtLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnZmllbGRfcGFuZWwnXCI+XHJcbiAgICAgICAgICAgIDxmaWVsZC1wYW5lbCAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IG9ialN0ZXAuc3RlcF9pZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgW29ialN0ZXBdID0gXCJvYmpTdGVwXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkeF09XCJpXCJcclxuICAgICAgICAgICAgICAgICAgICAoc2VudCk9XCJvblN1Ym1pdGluZ0ZpZWxkcygkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvZmllbGQtcGFuZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiA8L2Rpdj5cclxuICAgICAgPHByb2dyZXNzIGNsYXNzPVwicHJvZ3Jlc3MgcHJvZ3Jlc3MtZGFuZ2VyXCIgW2F0dHIudmFsdWVdPVwicHJvZ3Jlc3NCYXJcIiBtYXg9XCIxMDBcIiA+PC9wcm9ncmVzcz5cclxuPHNhdmUtYnV0dG9uXHJcbiAgICAqbmdJZj1cInRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbMF0ubWFzdGVyX3R5cGUgPT0gJ3dvcmtmbG93J1wiXHJcbiAgICAoc2F2ZVN0ZXApPVwic2F2ZVN0ZXAoJGV2ZW50KVwiXHJcbiAgICBbc3RlcElkXT1cInRoaXMuc3RlcElkXCJcclxuPlxyXG5cclxuPC9zYXZlLWJ1dHRvbj5cclxuXHJcbiAgICA8ZGl2ICpuZ0lmPVwiZm9ybUNvbXBsZXRlZFwiIGNsYXNzPVwiYWxlcnQgYWxlcnQtc3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxyXG4gICAgICAgIFlvdXIgcmVxdWVzdCBoYXMgYmVlbiBzZW50LCB5b3Ugc2hvdWxkIHJlY2VpdmUgYSBlbWFpbCB3aXRoIHRoZSBpbmZvcm1hdGlvbiB5b3Ugc2VudCB0byB1cy4gV2UnbGwgY29tZSBiYWNrIHRvIHlvdSB2ZXJ5IHNvb25cclxuICAgIDwvZGl2PlxyXG4gICAgXHJcbjwvZGl2PlxyXG5gLFxyXG5cclxuICAgIHN0eWxlczogW2AgbmF2eyAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfWBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICAvL21vZGVsID0gbmV3IEZvcm1WZWhpY3VsZSgwLCBmYWxzZSk7XHJcbiAgICBzdWJtaXR0ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAvL2xpc3RzID0gW107XHJcbiAgICBsaXN0c0RhdGEgPSBbXTtcclxuXHJcblxyXG4gICAgY3VycmVudF9zdGVwX2lkOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgIC8vQElucHV0KCkgbWFycXVlOiBNYXJxdWU7XHJcbiAgICBzdGVwSWQgPSAxO1xyXG4gICAgcHJldmlvdXNTdGVwSWQgPSAwO1xyXG4gICAgaW5kZXhTdGVwT2JqID0gMDtcclxuICAgIGxhYmVsUGFuZWwgPSBcIlwiO1xyXG4gICAgZGF0YXMgPSBbXTtcclxuICAgIGxpc3RzID0gW107XHJcbiAgICBmb3JtQ29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAvLyBwdWJsaWMgbXlfZm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgLy8gICAgIG1pbGVhZ2VfaW5wdXQ6IG5ldyBGb3JtQ29udHJvbCgpXHJcbiAgICAvLyB9KTtcclxuICAgIC8vZm9ybVZlaGljdWxlOiBDb250cm9sR3JvdXA7XHJcbiAgICAvL2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9mYjogRm9ybUJ1aWxkZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfY29sbGVjdGlvblNlcnZpY2U6IENvbGxlY3Rpb25TZXJ2aWNlLCBwcml2YXRlIF9tYWlsU2VydmljZTogTWFpbFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBfc2F2ZVNlcnZpY2U6IFNhdmVTZXJ2aWNlKVxyXG4gICAgICAgIHt9XHJcblxyXG4gICAgLy8gdmVoaWN1bGVzOiBWZWhpY3VsZVtdO1xyXG4gICAgLy8gY29uZmlybTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gdmVyaWZNaWxlYWdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAvLyBtaXNzaW5nTWlsZWFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdG1wX2lkID0gJyc7XHJcbiAgICBwdWJsaWMgcHJvZ3Jlc3NCYXI6bnVtYmVyID0gMDtcclxuXHJcbiAgICBzdGVwczogU3RlcE1vZGVsW107XHJcbiAgICBjdXN0b21Db2xsZWN0aW9uRGF0YT0gW107XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnaW5pdCBtYWluIENvbXBvbmVudCcpO1xyXG4gICAgICAgIC8vIElGIEZJUlNUIFNURVAgSVMgQSBDT0xMRUNUSU9OXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qICBJRiBGSVJTVCBTVEVQIElTIEEgTElTVCAqL1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RzRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0c0RhdGEpO1xyXG4gICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuICAgICAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gS0VFUCBBTEwgU0VMRUNUSU9OUyBNQURFIEJZIFVTRVIgSU4gU1RFUFNcclxuICAgICAgICAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgICAgIHZhciBtYXN0ZXJfdHlwZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRfc3RlcF9pZCA9IHRoaXMucm91dGVcclxuICAgICAgICAgICAgLnF1ZXJ5UGFyYW1zXHJcbiAgICAgICAgICAgIC5tYXAocGFyYW1zID0+IHBhcmFtc1snaWQnXSB8fCAnTm9uZSdcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50X3N0ZXBfaWQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLmlkKTtcclxuICAgICAgICBpZiAoISh0eXBlb2YgdGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5jdXJyZW50X2lkID09ICd1bmRlZmluZWQnKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50X3N0ZXBfaWQuc291cmNlLl92YWx1ZS5jdXJyZW50X2lkICE9ICdOb25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50bXBfaWQgPSB0aGlzLmN1cnJlbnRfc3RlcF9pZC5zb3VyY2UuX3ZhbHVlLl9pZDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdvVG9TdGVwKHRoaXMuY3VycmVudF9zdGVwX2lkLnNvdXJjZS5fdmFsdWUuY3VycmVudF9pZCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNUQVJUIFRIRSBGSVJTVCBTVEVQXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vdGhpcy5jdXJyZW50X3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAgICAgLy90aGlzLmRhdGFzID0gdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoLTEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgLy8gY29ucyBvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzKTtcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXNbMF0ubmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgLy8gIHRoaXMuZ29Ub05leHRTdGVwKCk7XHJcbn1cclxuXHJcbiAgICBnb1ByZXZpb3VzU3RlcCgkZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqID0gJGV2ZW50Lm5ld0lkeFN0ZXBPYmo7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIHRoaXMuZ29Ub1N0ZXAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQpO1xyXG4gICAgICAgIC8vdGhpcy5sYWJlbFBhbmVsID0gdGhpcy5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubGFiZWxQYW5lbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTdGVwKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3NhdmUnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgIHRoaXMuc3RlcElkID09IENVUlJFTlQgU1RFUCBJRFxyXG4gICAgIHRoaXMudG1wX2lkID09IERBVEEgSUQgVE8gUkVUUklFVkUgQUxMIERBVEFTIFNFTEVDVEVEIEZST00gVEhJUyBXT1JLRkxPV1xyXG4gICAgICovXHJcblxyXG4gICAgZ29Ub1N0ZXAoY3VyU3RlcElkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJHTyBORVhUIFNURVAgOiBcIiArIGN1clN0ZXBJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpOztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uc3RlcF9pZCA9PSBjdXJTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTVEVQIElEIDogJyArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnN0ZXBfaWQpXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjbGlja19zZWxlY3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTElTVCBCVVRUT05TIENBU0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBjdXJTdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVE9ETyBURVNURVIgU0kgRklMVEVSIEVYSVNURSBEQU5TIENPTExFQ1RJT05cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNURVBfSUQgT1UgU0UgVFJPVVZFIExFIE5PTSBERSBMQSBWQVJJQUJMRSBERSBMQSBWQUxFVVIgQSBGSUxUUkVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvRmlsdGVyID0gIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVUb0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJMaXN0ID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlVG9LZWVwID0gJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUpLnRoZW4oY29sbGVjdGlvbkRhdGFSZXR1cm4gPT4gdGhpcy5saXN0cy5wdXNoKGNvbGxlY3Rpb25EYXRhUmV0dXJuKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudG1wX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9LZWVwID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0tlZXAgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0Rm9ybURhdGEodGhpcy50bXBfaWQsIGNvbGxlY3Rpb25OYW1lLCBmaWx0ZXJMaXN0LCB2YWx1ZVRvS2VlcCApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYXByZXMgZ2V0Rm9ybURhdGEoKScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1NURVAgU0VSVklDRSBOJyArIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24ubmFtZSwgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkLCB2YWx1ZVRvS2VlcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNTdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnN0ZXBJZCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gY3VyU3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMubGlzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUYgQSBMSVNUIEVYSVNUUyBJTiBTVEVQIFNFUlZJQ0VcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1tpXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW2ldLm5hbWUgLCBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0uY29uZmlndXJhdGlvbi5saXN0fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IGN1clN0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2ZpZWxkX3BhbmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZJRUxEIFBBTkVMIENBU0UnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSBjdXJTdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU1RFUCBUWVBFOiAnICsgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbaV0udHlwZSArICdET0VTIE5PVCBFWElTVCBJTiBTVEVQLlNFUlZJQ0UgJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSAvL0ZJTiBTV0lUQ0hcclxuICAgICAgICAgICAgdGhpcy5kYXRhcyA9IHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzLnNsaWNlKCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gR08gVE8gTkVYVCBTVEVQICggeCArIDEpXHJcbiAgICBnb1RvTmV4dFN0ZXAoeCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkdPIE5FWFQgU1RFUFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh4KTtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9IHg7XHJcbiAgICAgICAgLy8gSUYgQSBNQUlMIElTIENPTkZJR1VSRUQgSU4gU1RFUCBDT05GSUdcclxuICAgICAgICBpZiAodGhpcy5pbmRleFN0ZXBPYmogPiAtMSl7XHJcbiAgICAgICAgICAgIC8vIElGIEEgTUFJTCBJUyBDT05GSUdVUkVEIElOIFNURVAgQ09ORklHIE9SIElGIExBU1QgU1RFUCBPRiBGT1JNXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubWFpbF9pZCAhPSBcInVuZGVmaW5lZFwiIClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbWFpbFNlcnZpY2Uuc2VuZE1haWwodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubWFpbF9pZClcclxuICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYWlsU3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFpbFN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuaW5kZXhTdGVwT2JqIDw9IDAgKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyBJRiBXRSBBUkUgT04gVEhFIExBU1QgU1RFUCBPRiBUSEUgRk9STSBXRSBTQVZFIFRIRSBGT1JNIElOIERCLCBTRU5EIEFOIEVNQUlMIEFORCBTSE9XIEEgTUVTU0FHRSBUTyBUSEUgVVNFUlxyXG4gICAgICAgIGlmICh0aGlzLmluZGV4U3RlcE9iaiA9PSB0aGlzLl9zdGVwU2VydmljZS5zdGVwcy5sZW5ndGggLSAxKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NhdmUgZm9ybScpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlU2VydmljZS5zYXZlRGF0YSh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZClcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybUNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArKztcclxuLy8gICAgICAgIH1cclxuICAgICAgICAvLyB3aGlsZSAoIHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXSA9PSAndW5kZWZpbmVkJyApIHtcclxuICAgICAgICAvLyAgICAgIHRoaXMuaW5kZXhTdGVwT2JqKys7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbmRleFN0ZXBPYmogXCIrdGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSk7XHJcblxyXG5cclxuICAgICAgICAvLyBURU1QT1JBUlkgU1RFUF9JRCBCRUNBVVNFIFdFIE5FRUQgVE8gV0FJVCBGT1IgQVNZTkNIUk9VTk9VUyBRVUVSWVxyXG4gICAgICAgIHZhciB0bXBOZXdzdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaW5kZXhTdHBPYmogOicgKyB0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RtcE5ld1N0ZXBJZDogJysgIHRtcE5ld3N0ZXBJZCk7XHJcbiAgICAgICAgLy8gLy8gdGhpcy5wcmV2aW91c1N0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG5cclxuICAgICAgICAvKiBJRiBMSVNUIEJVVFRPTiBDT01QT05FTlQgKi9cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0udHlwZSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsaWNrX3NlbGVjdGlvbic6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIENPTExFQ1RJT05cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLnN0ZXBfaWQgPT0gdG1wTmV3c3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uTmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pbmRleFN0ZXBPYmpdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTVEVQX0lEIE9VIFNFIFRST1VWRSBMRSBOT00gREUgTEEgVkFSSUFCTEUgREUgTEEgVkFMRVVSIEEgRklMVFJFUlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0ZpbHRlciA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyWzBdLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlVG9GaWx0ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24uZmlsdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChOdW1iZXIoaXRlbS5zdGVwX2lkKSA9PSBOdW1iZXIodGhpcy5wcmV2aW91c1N0ZXBJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGl0ZW0uY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB2YXIgdmFsdWVGaWx0ZXJMaXN0ID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU0VUIE5PTSBERSBWQVJJQUJMRSBUTyBTQVZFIElOIEZPUk0gU0VSVklDRVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZVRvS2VlcCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVRvS2VlcCA9ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyhjb2xsZWN0aW9uTmFtZSkudGhlbihjb2xsZWN0aW9uRGF0YVJldHVybiA9PiB0aGlzLmxpc3RzLnB1c2goY29sbGVjdGlvbkRhdGFSZXR1cm4pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRtcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lLCBmaWx0ZXJMaXN0LCB2YWx1ZVRvS2VlcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpb3VzU3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL0lGIERBVEEgQVJFIFNUT1JFRCBJTiBBIExJU1QgSU4gQ09ORklHIEZJTEVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIExJU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAnaW1hZ2Vfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIExJU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRhdGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2ZpZWxkX3BhbmVsJzpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWNpJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZGVmYXVsdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVTZWxlY3RlZCgkZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgdmFyIHRtcE9iaiA9IHt9O1xyXG4gICAgICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucHJldmlvdXNfc3RlcF9pZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNJZHggPSAkZXZlbnQuc3RlcElkeDtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSA9IHRtcE9iajtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImV2ZW50LnN0ZXBJZHg6IFwiICsgJGV2ZW50LnN0ZXBJZHgpXHJcbiAgICAgICAgY29uc29sZS5sb2codG1wT2JqKTtcclxuICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCgkZXZlbnQuc3RlcElkeCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogV0hFTiBTVUJNSVRJTkcgKi9cclxuICAgIG9uU3VibWl0aW5nRmllbGRzKCRldmVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdPblN1Ym1pdGluZ0ZpZWxkcycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkWzBdKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5jdXJyZW50X3N0ZXBfaWQgPSAkZXZlbnQuc3RlcElkO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnByZXZpb3VzX3N0ZXBfaWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICBmb3IgKGxldCBqID0wOyBqPHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMubGVuZ3RoOyBqKyspe1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdLmtleXMpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal0ubm9tKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXS5ub20gPT0gJGV2ZW50Lm5hbWUgKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG1wS2V5TmFtZSA9ICRldmVudC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG1wS2V5TmFtZTogXCIrdG1wS2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleU9iamVjdCA9ICRldmVudC52YWx1ZU5hbWVbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9ICAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5T2JqZWN0OiBcIisga2V5T2JqZWN0ICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3VmFsdWU6IFwiICsgbmV3VmFsdWUpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3ZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9sZXQgdG1wU2F2ZSA9IHRtcEtleU5hbWUrJ1snK2krJ10uJytrZXlPYmplY3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codG1wU2F2ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRtcE9ialskZXZlbnQudmFsdWVOYW1lW2ldPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bdG1wS2V5TmFtZV1baV1ba2V5T2JqZWN0XSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bZXZhbCh0bXBTYXZlKV0gPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tqXVt0bXBLZXlOYW1lXVtpXVtrZXlPYmplY3RdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJyAnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIHZhciB0bXBPYmogPSB7fTtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0wO2k8JGV2ZW50LnZhbHVlU2VsZWN0ZWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lW2ldXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkW2ldXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRtcE9iaik7XHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXSA9IHRtcE9iajtcclxuXHJcbiAgICAgICAgdGhpcy5nb1RvTmV4dFN0ZXAoJGV2ZW50LnN0ZXBJZHgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGlvbnMoJGV2ZW50KXtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0TGlzdEVxdWlwbWVudCgpe1xyXG4gICAgLy8gICAgIHZhciBhZGRPcHRpb24gPSB0cnVlO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5zcGxpY2UoaSwxKTtcclxuICAgIC8vICAgICAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYgKGFkZE9wdGlvbil7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuXHJcbiAgICAvLyAgICAgLy9DaGVjayBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGNob2ljZSBwb3NzaWJsZSwgd2UgZGlzcGxheSB0aGUgY2hvaWNlcyBpZiBub3QsIHdlIHNraXAgdGhpcyBzdGVwIGFuZCBnb2VzIGRpcmVjdGx5IHRvIHRoZSBnZWFyYm94IHNlbGVjdGlvblxyXG4gICAgLy8gICAgIGlmICh0aGlzLmxpc3ROYlBvcnRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubGlzdE5iUG9ydGVzLnNvcnQoKTtcclxuICAgIC8vICAgICAgICAgLy8gdGhpcy5pbmRleFN0ZXBPYmogKys7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPSBcIlwiO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IHRoaXMubGlzdE5iUG9ydGVzWzBdO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdldEdlYXJCb3goJycpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArPSAxMDtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvL3RoaXMuc2hvd0NhcmJ1cmFudCA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vXHJcblxyXG5cclxuICAgIC8vIGdldE9wdGlvbihldmVudDphbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnNwbGljZShpLDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoYWRkT3B0aW9uKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbi8vICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gaXNTZWxlY3RlZChvcHRpb24pe1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBvcHRpb24pe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcblxyXG59XHJcbiJdfQ==
