import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router";
import {Validators, FormBuilder, FormGroup, FormControl} from "@angular/forms";

import {StepModel} from "../Engine/stepModel";

import {FormService} from "./form.service";
import {BackButtonComponent} from "./backButton";
import {StepService} from "../Engine/step.service";
import {CollectionService} from "../Engine/collection.service";
import {forEach} from "../../../public/js/vendor/@angular/router/src/utils/collection";
import {Observable} from "rxjs";
@Component({
    selector: 'vehicule-detail',
    template: `
 
<div class="panel panel-default">
   
<!--<p>Session ID: {{ current_step_id | async }}</p>-->
    <div class="row" align="center">
        
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Ajouter contact </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Lister contacts </a></button></div>
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

})
export class MainComponent implements OnInit {
    //model = new FormVehicule(0, false);
    submitted = false;


    current_step_id: Observable<string>;
   //@Input() marque: Marque;
    stepId = 1;
    previousStepId = 0;
    indexStepObj = 0;
    labelPanel = "";
    datas = [];
    lists = [];

    public my_form = new FormGroup({
        mileage_input: new FormControl()
    });
    //formVehicule: ControlGroup;
    //formService: FormService;
    constructor(
        private route: ActivatedRoute, private _fb: FormBuilder,
        public _formService: FormService, public _stepService: StepService,
        public _collectionService: CollectionService) {

    }

    // vehicules: Vehicule[];
    // confirm: boolean = false;
    // verifMileage: boolean = false;
    // missingMileage: boolean = false;
    tmp_id = '';
    public progressBar:number = 0;

    steps: StepModel[];
    customCollectionData= [];

    ngOnInit(): void {
console.log('init main Component');
console.log(this._stepService.steps);
        var master_type = this._stepService.steps[0].master_type;
        this.current_step_id = this.route
            .queryParams
            .map(params => params['id'] || 'None'
            );
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

    goPreviousStep($event){
        this.indexStepObj = $event.newStepId;
        //this.labelPanel = this.steps[this.indexStepObj].labelPanel;
    }


    onSubmit() {
        this.submitted = true;
    }

    saveStep(){
        console.log('save');
    }

    /*
     this.stepId == CURRENT STEP ID
     this.tmp_id == DATA ID TO RETRIEVE ALL DATAS SELECTED FROM THIS WORKFLOW
     */

    goToStep(curStepId) {
        console.log("GO NEXT STEP : " + curStepId);

        for (let i = 0; i < this._stepService.steps.length; i++) {

            if (this._stepService.steps[i].step_id == curStepId) {
                console.log('STEP ID : ' + this._stepService.steps[i].step_id)
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
                                    var valueToFilter =  this._stepService.steps[i].configuration.collection.filter[0].step_id;
                                    console.log(valueToFilter);
                                    console.log( this._stepService.steps[i].configuration.collection.filter[0].step_id);
                                    console.log(this._formService);

                                    filterList = this._stepService.steps[i].configuration.collection.filter;

                            if (typeof this._stepService.steps[i].configuration.collection.value != 'undefined') {
                                var valueToKeep = this._stepService.steps[i].configuration.collection.value;
                            }
                            else {
                                valueToKeep = ''
                            }
                            //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
                            console.log(this.tmp_id);
                            if (typeof this._stepService.steps[i].configuration.collection.value != 'undefined') {
                                var valueToKeep = this._stepService.steps[i].configuration.collection.value;
                            }
                            else {
                                valueToKeep = ''
                            }
                            this._collectionService.getFormData(this.tmp_id, collectionName, filterList, valueToKeep )
                                .then(data => {
                                        console.log('apres getFormData()');
                                        console.log(data);

                                        console.log('STEP SERVICE N' + i);
                                        console.log(this._stepService.step[i]);
                                        this._collectionService.getDatas(this._stepService.steps[i].configuration.collection.name, this._stepService.steps[i].configuration.collection.filter[0].step_id, valueToKeep)
                                        .then(result => {
                                            console.log(result)
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
                                        },
                                            error => console.log(error)
                                        //this.lists.push(data);
                                        )
                                    },
                                    error => console.log(error)
                                );

                        }
                        if (typeof this._stepService.steps[i].configuration.list != 'undefined') {
                            this.datas.push({"name": this._stepService.steps[i].name , "list": this._stepService.steps[i].configuration.list});
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


    goToNextStep(x){
        console.log("GO NEXT STEP");
        console.log(this._stepService.steps);
        console.log(x);
        this.indexStepObj = x;
        if (this.indexStepObj < 0 )
        {
            this.indexStepObj ++;
        }
        // while ( typeof this._stepService.step[this.indexStepObj] == 'undefined' ) {
        //      this.indexStepObj++;
        // }
        console.log("this.indexStepObj "+this.indexStepObj);
        console.log(this._stepService.steps[this.indexStepObj]);

        // TEMPORARY STEP_ID BECAUSE WE NEED TO WAIT FOR ASYNCHROUNOUS QUERY
        var tmpNewstepId = this._stepService.steps[this.indexStepObj].step_id;
        // console.log('indexStpObj :' + this.indexStepObj);
        // console.log('tmpNewStepId: '+  tmpNewstepId);
        // // this.previousStepId = this.stepId;

        /* IF LIST BUTTON COMPONENT */
        console.log(this._stepService.steps[this.indexStepObj].type);
        switch (this._stepService.steps[this.indexStepObj].type){
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
                        valueToKeep = ''
                    }
                    //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
                    console.log(this.tmp_id);
                    this._collectionService.getDatas(collectionName, filterList, valueToKeep)
                                .then(data => {
                                        console.log(data);

                                        this.lists.push(data);
                                        this.datas.push({"name": this._stepService.steps[this.indexStepObj].name , "list": data});
                                        this.previousStepId = this.stepId;
                                        // this.stepId = this._stepService.step[this.indexStepObj].step_id;
                                        console.log(this.stepId);
                                        console.log(this.lists);
                                        console.log(this.datas);
                                        this.stepId = tmpNewstepId;
                                        console.log(this.stepId);
                            },
                            error => console.log(error)
                        );
                }

                //IF DATA ARE STORED IN A LIST IN CONFIG FILE
                if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                    console.log("GET DATA FROM LIST");
                    this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                    this.datas.push({"name": this._stepService.steps[this.indexStepObj].name , "list": this._stepService.steps[this.indexStepObj].configuration.list});
                    console.log(this.datas);
                    this.stepId = tmpNewstepId;
                }
                break;

            case 'image_selection':
                if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                    console.log("GET DATA FROM LIST");
                    this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                    this.datas.push({"name": this._stepService.steps[this.indexStepObj].name , "list": this._stepService.steps[this.indexStepObj].configuration.list});
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

    onValueSelected($event){
        console.log($event.valueSelected);
        console.log($event.valueName);
        console.log(this.indexStepObj);
        var tmpObj = {};
        tmpObj[$event.valueName] = $event.valueSelected
        this._formService.current_step_id = $event.stepId;
        this._formService.arraySteps[this.indexStepObj] = tmpObj;
        console.log("event.stepIdx: " + $event.stepIdx)
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
        for (let j =0; j<this._formService.arraySteps.length; j++){

            //console.log(this._formService.arraySteps[j].keys);
            //console.log(this._formService.arraySteps[j].nom);

                if (this._formService.arraySteps[j].nom == $event.name ){
                    let tmpKeyName = $event.name;
                    console.log("tmpKeyName: "+tmpKeyName);
                    for (let i=0; i<$event.valueSelected.length; i++){
                        let keyObject = $event.valueName[i];
                        let newValue =  $event.valueSelected[i];

                        console.log("keyObject: "+ keyObject );
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

    getSelections($event){
        console.log($event);
    }
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



}
