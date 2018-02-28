import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from "@angular/router"
import {FormBuilder} from "@angular/forms";
import {FormService} from "./Engine/form.service";
import {StepService} from "./Engine/step.service";
import {CollectionService} from "./Engine/collection.service";
import {Observable} from 'rxjs/Observable';
import {MailService} from "./Engine/mail.service";
import {SaveService} from "./form/saveService";
@Component({
    selector: 'vehicule-detail',
    template: `
    <div *ngIf="formCompleted == false" class="{{_stepService.template.panel_heading}}">
        <div class="row">
            <!--<div class="col-md-8" *ngIf="this.stepId == 1 && this.appName !='play'" >-->
              <!--<button class="{{_stepService.template.back_btn}}" ><i class="glyphicon glyphicon-triangle-left" >  </i></button>-->
            <!--</div>-->
            <div class="col-md-8" *ngIf="this.stepId == 1 && this.appName !='play'"><button  style="height:20px; background-color: transparent; border-width: 0px 0 0;" ></button></div>
            <div class="col-md-8" *ngIf="this.stepId != 1 && this.appName !='play'" align="left" >
                <previous-page 
                    [stepId] = "stepId"
                    [idxStepObj] =  "indexStepObj"
                    (change) = goPreviousStep($event) >
                </previous-page>
            </div>
            <div class="col-md-4" >

                  <div class="pull-right" *ngIf="this.stepId == 1">
                    <span style="width: 20px; height:20px;" *ngFor="let language of _stepService.languages">
                         <button title="{{language}}"   (click)="changeLanguage(language)" style="background-color: transparent; border-width: 0px 0 0;">
                            <img src="images/flags/{{language}}.png" />
                         </button>
                    </span>
                 </div>
            </div>
        </div>
        <div class="row">
            <div align="center" *ngIf="_stepService.steps[0].logo_url != ''" >    
                <img class="img-thumbnail"  src="{{_stepService.steps[0].logo_url}}" width="240" height="160">
            </div>
        </div>
        <div class="row" >
        </div>
 </div>
<div class="panel panel-default" *ngIf="formCompleted == false">
   
   <div *ngFor="let objStep of this._stepService.steps; let i = index" >
        <!-- IMAGE LIST BUTTON PANEL -->
        <div *ngIf="objStep.type == 'image_selection' && dataLoaded ">
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
    [app_name]="this.appName"
>

</save-button>

</div>



 <div align="center" class="jumbotron" *ngIf="formCompleted" class="alert alert-success" role="alert">
      <div class="container">
         <h1 *ngIf="_stepService.language == 'en'" >Your application form has been sent correctly. Thank you very much. We will contact you shortly.</h1> 
         <h1 *ngIf="_stepService.language == 'es'" >Su formulario de solicitud ha sido enviado correctamente. Muchas gracias. Nos pondremos en contacto con usted en breve.</h1>
         <h1 *ngIf="_stepService.language == 'fr'" >Votre demande a bien été envoyée, nous prendrons contact avec vous dans les plus brefs délais.</h1>         
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

})
export class MainComponent implements OnInit {
    submitted = false;

    listsData = [];

    dataLoaded = false;
    current_step_id: Observable<string>;
    stepId = 1;
    previousStepId = 0;
    indexStepObj = 0;
    labelPanel = "";
    datas = [];
    appName = "";
    lists = [];
    formCompleted = false;
    valuesSelected = [];
    constructor(private route: ActivatedRoute, private _fb: FormBuilder,
                private _formService: FormService, private _stepService: StepService,
                private _collectionService: CollectionService, private _mailService: MailService,
                private _saveService: SaveService) {
    }

    btn_class = "black_button"

    tmp_id = '';
    public progressBar: number = 0;

    customCollectionData = [];

    ngOnInit() {
        // IF FIRST STEP IS A COLLECTION
        // console.log(this._stepService.steps[0].configuration)
        /*  IF FIRST STEP IS A LIST */
        if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
            this.lists.push(this._stepService.steps[0].configuration.list);
            this.listsData.push({
                "name": this._stepService.steps[0].name,
                "list": this._stepService.steps[0].configuration.list
            });
        } // FIN IF COMMENTE POUR TEST EN BAS DE CODE
        // console.log(this.listsData);
        // this._stepService.datas = this.listsData.slice();

        var master_type = this._stepService.steps[0].master_type;
        this.appName = this._stepService.steps[0].master_name;
        this.current_step_id = this.route
            .queryParams
            .map(params => params['id'] || 'None'
            );
        // console.log(this.stepId);
        // console.log(this.current_step_id);
        // console.log(this._formService);
        this.goToNextStep(-1);
        // console.log(this._stepService.steps);
        // console.log(this.stepId);
    }

    goPreviousStep($event) {
        this.indexStepObj = $event.newIdxStepObj;
        // console.log(this._formService);
        // console.log(this._stepService);
        // console.log(this.datas);
        this.stepId = this._stepService.steps[this.indexStepObj].step_id;
        let stepName = this._stepService.steps[this.indexStepObj].name;
        // console.log(this._formService.arraySteps[this.indexStepObj]);

        // for (let i = 0; i < this.datas.length; i++) {
        //     if (stepName == this.datas[i].name){
        //     // console.log(this.datas[i]);
        //         //ici j'ai la liste avec les datas de la step courante
        //     }
        // }
    }

    onSubmit() {
        this.submitted = true;
    }

    /*
     this.stepId == CURRENT STEP ID
     this.tmp_id == DATA ID TO RETRIEVE ALL DATAS SELECTED FROM THIS WORKFLOW
     */

    // goToStep(curStepId) {
    //     console.log("GO TO STEP : " + curStepId);
    //     console.log(this._formService);
    //
    //     for (let i = 0; i < this._stepService.steps.length; i++) {
    //
    //         if (this._stepService.steps[i].step_id == curStepId) {
    //             console.log('STEP ID : ' + this._stepService.steps[i].step_id)
    //             switch (this._stepService.steps[i].type) {
    //                 case 'click_selection':
    //                     console.log('LIST BUTTONS CASE');
    //                     console.log(this._stepService.steps[i].step_id);
    //                     if (typeof this._stepService.steps[i].configuration.collection != 'undefined') {
    //                         var filterList = [];
    //                         // for (var item of this._stepService.step) {
    //                         //     if (item.step_id == curStepId) {
    //                         var collectionName = this._stepService.steps[i].configuration.collection.name;
    //                         // console.log(item);
    //                         /*
    //                          TODO TESTER SI FILTER EXISTE DANS COLLECTION
    //                          */
    //                         // STEP_ID OU SE TROUVE LE NOM DE LA VARIABLE DE LA VALEUR A FILTRER
    //                         var valueToFilter = this._stepService.steps[i].configuration.collection.filter[0].step_id;
    //                         console.log(valueToFilter);
    //                         console.log(this._stepService.steps[i].configuration.collection.filter[0].step_id);
    //                         console.log(this._formService);
    //
    //                         filterList = this._stepService.steps[i].configuration.collection.filter;
    //
    //                         if (typeof this._stepService.steps[i].configuration.collection.value != 'undefined') {
    //                             var valueToKeep = this._stepService.steps[i].configuration.collection.value;
    //                         }
    //                         else {
    //                             valueToKeep = ''
    //                         }
    //                         //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
    //                         console.log('currentStepId: ' + this.current_step_id);
    //                         console.log('tmp_id : ' + this.tmp_id);
    //                         console.log(this.datas);
    //
    //                         this._collectionService.getFormData(this.tmp_id, collectionName, filterList, valueToKeep)
    //                             .subscribe(data => {
    //                                     console.log('apres getFormData()');
    //                                     console.log(data);
    //
    //                                     console.log('STEP SERVICE N' + i);
    //                                     console.log(this._stepService.steps[i]);
    //                                     this._collectionService.getDatas(this._stepService.steps[i].configuration.collection.name, this._stepService.steps[i].configuration.collection.filter[0].step_id, valueToKeep,'btn')
    //                                         .then(result => {
    //                                                 console.log(result);
    //                                                 this.datas.push({
    //                                                     "name": this._stepService.steps[i].name,
    //                                                     "list": result
    //                                                 });
    //
    //                                                 this.previousStepId = this.stepId;
    //                                                 // this.stepId = this._stepService.step[this.indexStepObj].step_id;
    //                                                 console.log(this.stepId);
    //                                                 console.log(this.lists);
    //                                                 console.log(this.datas);
    //                                                 this.stepId = curStepId;
    //                                                 console.log(this.stepId);
    //                                             },
    //                                             error => console.log(error)
    //                                             //this.lists.push(data);
    //                                         )
    //                                 },
    //                                 error => console.log(error)
    //                             );
    //
    //                     }
    //                     // IF A LIST EXISTS IN STEP SERVICE
    //                     if (typeof this._stepService.steps[i].configuration.list != 'undefined') {
    //                         this.datas.push({
    //                             "name": this._stepService.steps[i].name,
    //                             "list": this._stepService.steps[i].configuration.list,
    //                             "list_es": this._stepService.steps[i].configuration.list_es,
    //                             "loaded": true
    //                         });
    //                         this.stepId = curStepId;
    //                     }
    //                     break;
    //
    //
    //                 case 'field_panel':
    //                     console.log('FIELD PANEL CASE');
    //                     this.stepId = curStepId;
    //                     break;
    //
    //                 default:
    //                     console.log('STEP TYPE: ' + this._stepService.steps[i].type + 'DOES NOT EXIST IN STEP.SERVICE ');
    //             }
    //             break;
    //         } //FIN SWITCH
    //         this.datas = this._stepService.datas.slice();
    //
    //     }
    // }

    // GO TO NEXT STEP ( x + 1)
    goToNextStep(stepIndex) {
        // if (stepIndex > 0){
        //     console.log(this._stepService.steps[stepIndex].name);
        // }
        //     console.log(this._formService);
        // console.log("GO NEXT STEP");
        //
        // console.log(stepIndex);

        this.indexStepObj = stepIndex;

        // console.log('currentStepId: ' + this.current_step_id);
        // console.log("indexStepObj : " + this.indexStepObj);
        // console.log('tmp_id : ' + this.tmp_id);
        //
        // console.log(this.datas);

        /*
            BUG POSSIBLE SI CE N EST PAS LE DERNIERE STEP DANS STEPS ARRAY
         */
        /* IF WE ARE ON THE LAST STEP OF THE FORM WE SAVE THE FORM IN DB, SEND AN EMAIL AND SHOW A MESSAGE TO THE USER */
        let nbSteps = this._stepService.steps.length;
        nbSteps = nbSteps - 1;
        if (this.indexStepObj == nbSteps) {
            // console.log('save form');
            // console.log(this._formService.arraySteps);

            /* SAVE UPLOADED FILES */
            this._saveService.saveFiles()
                .subscribe(
                    data => {
                        // console.log('*****************************************************');
                        // console.log(data);
                        let arrayFiles= [];
                        for (let i in data) {
                            // console.log(data[i]);
                            arrayFiles.push({"fileName":data[i].step_name, "file_url": data[i].file_url})
                        }

                        if (arrayFiles.length > 0 ){
                            this._formService.arraySteps.push({"fileDetails" : arrayFiles});
                        }
                        // console.log(this._formService.arraySteps);

                        /* SAVE FORM DATA */
                        this._saveService.saveData(this._stepService.steps[this.indexStepObj].step_id,this.appName)
                            .subscribe(
                                data => {
                                    this.formCompleted = true;
                                    if (typeof this._stepService.steps[this.indexStepObj].configuration.mail_id != 'undefined') {
                                        // console.log(data._body)
                                        /* SEND MAIL CONFIRMATION */
                                        this._mailService.sendMail(this._stepService.steps[this.indexStepObj].configuration.mail_id, data._body, this.appName)
                                            .subscribe(
                                                mailState => {
                                                    console.log(mailState);
                                                },
                                                error => console.log(error)
                                            );
                                        // console.log(data._body)
                                    }
                                },
                                error => console.log(error)
                            )
                    },
                    error => console.log(error)
                )
        }
        else {
            let tmp_step_id = this.indexStepObj;
            this.indexStepObj++;
            // console.log("stepId: " + this.stepId);
            // console.log("indexStepObj: " + this.indexStepObj);
            // console.log(this._stepService.steps[this.indexStepObj].step_id);
            if (this.indexStepObj > 1) {
                //     console.log(this._stepService.steps[this.indexStepObj].step_id);
                //     console.log("this.indexStepObj " + this.indexStepObj);
                //     console.log("this.stepId " + this.stepId);
                while (this._stepService.steps[this.indexStepObj].step_id == this.stepId) {
                    this.indexStepObj++;
                }
            }
            let condition = false;
            while (condition == false) {
                // SI IL Y A DES CONDITIONS DEFINIES A L'ETAPE SUIVANTE ALORS ON VERIFIE QUELLE ETAPE CORRESPOND A LA CONDITION SINON ON AVANCE
                // DANS LE TABLEAU DES ETAPES
                // console.log(this._stepService.steps[this.indexStepObj])
                // console.log(this._stepService.steps[this.indexStepObj].conditions)
                if (this._stepService.steps[this.indexStepObj].conditions.length == 0){
                    // console.log("pas de condition l'index " + this.indexStepObj);
                    condition = true;
                    break;
                }

                if (this._stepService.steps[this.indexStepObj].conditions.length == 1) {
                    // console.log("1 condition dans step à l'index " + this.indexStepObj)
                    // let keyCondition = this._stepService.steps[this.indexStepObj].conditions[0].key;
                    // console.log(keyCondition);
                    // for (let cond of this._stepService.steps[this.indexStepObj].conditions[0].value){
                    //     console.log(cond);
                    //     console.log(this._formService.arraySteps);
                    //     if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === cond)) != 'undefined') {
                    //         console.log(condition);
                    //         condition = true;
                    //         console.log(condition);
                    //         break;
                    //     }
                    // }
                    // console.log("1 condition dans step à l'index " + this.indexStepObj)
                    let keyCondition = this._stepService.steps[this.indexStepObj].conditions[0].key;
                    let valueCondition = this._stepService.steps[this.indexStepObj].conditions[0].value;

                    // console.log("valueCondition: " + valueCondition);
                    // console.log("keyCondition: " + keyCondition);
                    // console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition))
                    // CHECK IF CONDITION OK
                    if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined') {
                        condition = true;
                        break;
                    }

                    // CHECK IF CONDITION OK
                    // if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined') {
                    //     condition = true;
                    //     break;
                    // }

                }
                if (this._stepService.steps[this.indexStepObj].conditions.length == 2) {
                    // console.log("2 conditions dans step à l'index " + this.indexStepObj)
                    let keyCondition = this._stepService.steps[this.indexStepObj].conditions[0].key;
                    let valueCondition = this._stepService.steps[this.indexStepObj].conditions[0].value;
                    // console.log(this._stepService.steps[this.indexStepObj])
                    let keyCondition2 = this._stepService.steps[this.indexStepObj].conditions[1].key;
                    let valueCondition2 = this._stepService.steps[this.indexStepObj].conditions[1].value;
                    // CHECK WHILE CONDITION IS FULLFILLED
                    if (typeof (this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2)) != 'undefined' && typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined') {
                        condition = true;
                        break;
                    }
                }
                // console.log(this._stepService.steps[this.indexStepObj].conditions);
                // console.log(typeof (this._stepService.steps[this.indexStepObj].conditions));
                if (condition == false)
                    this.indexStepObj++;
            }

            /* TEMPORARY STEP_ID BECAUSE WE NEED TO WAIT FOR ASYNCHROUNOUS QUERY */
            var tmpNewstepId = this._stepService.steps[this.indexStepObj].step_id;

            /* IF LIST BUTTON COMPONENT */
            // console.log("type component: " + this._stepService.steps[this.indexStepObj].type);
            switch (this._stepService.steps[this.indexStepObj].type) {
                case 'click_selection':

                    // console.log("indexStepObj : " + this.indexStepObj);
                    // console.log('tmp_id : ' + this.tmp_id);
                    // console.log(this.datas);
                   // if (typeof this.datas[this.indexStepObj].loaded == 'undefined') {
                        /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
                        if (typeof this._stepService.steps[this.indexStepObj].configuration.collection != 'undefined') {
                            // console.log("GET DATA FROM COLLECTION");
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
                            // console.log(valueToFilter);
                            // console.log(this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id);
                            // console.log(this._formService);

                            filterList = this._stepService.steps[this.indexStepObj].configuration.collection.filter;

                            var valueToKeep = ''
                            // SET NOM DE VARIABLE TO SAVE IN FORM SERVICE
                            if (typeof this._stepService.steps[this.indexStepObj].configuration.collection.value != 'undefined') {
                                valueToKeep = this._stepService.steps[this.indexStepObj].configuration.collection.value;
                            }
                            // console.log(this.tmp_id);
                            this._collectionService.getDatas(collectionName, filterList, valueToKeep, 'btn')
                                .then(data => {
                                        // console.log(data);
                                        var objLists = {"name": this._stepService.steps[this.indexStepObj].name, "list_fr":"","list_nl":"","list_en":"", "list_es":"",  "loaded": true};
                                        objLists.list_fr = data;
                                        objLists.list_nl = data;
                                        objLists.list_es = data;
                                        objLists.list_en = data;

                                        for (let i in this.datas){
                                            if (this.datas[i].name == this._stepService.steps[this.indexStepObj].name){
                                                this.datas.splice(parseInt(i),1);
                                        }
                                    }
                                        this.lists.push(data);
                                        this.datas.push(objLists);

                                        this.previousStepId = this.stepId;
                                        // this.stepId = this._stepService.step[this.indexStepObj].step_id;
                                        // console.log(this.stepId);
                                        this.stepId = tmpNewstepId;

                                        // Skip the step if there is only 1 result
                                        // console.log("TEST IF ONLY 1 RECORD");
                                        // if (data.length == 1) {
                                        //     this._formService.arraySteps[this.indexStepObj][this._stepService.steps[this.indexStepObj].configuration.form_value.name] = data[0];
                                        //     this.goToNextStep(this.indexStepObj);
                                        // }
                                    },
                                    error => console.log(error)
                                );
                        }
                        //IF DATA ARE STORED IN A LIST IN CONFIG FILE
                        else {
                            let leaveFunction = false;
                            // if (typeof this._stepService.steps[this.indexStepObj].configuration.list_fr !== 'undefined' ){
                            //     if (this._stepService.steps[this.indexStepObj].configuration.list_fr.length == 1)
                            //     {
                            //         console.log("1 SEULE VALEUR ALORS GO TO NEXT STEP")
                            //         leaveFunction = true;
                            //         this._formService.arraySteps[this.indexStepObj][this._stepService.steps[this.indexStepObj].configuration.form_value.name] = this._stepService.steps[this.indexStepObj].configuration.list_fr[0];
                            //         this.goToNextStep(this.indexStepObj);
                            //
                            //     }
                            // }
                            // if (typeof this._stepService.steps[this.indexStepObj].configuration.list !== 'undefined' && leaveFunction == false ){
                            //     if (this._stepService.steps[this.indexStepObj].configuration.list.length == 1)
                            //     {
                            //         console.log("1 SEULE VALEUR ALORS GO TO NEXT STEP")
                            //         leaveFunction = true;
                            //         this._formService.arraySteps[this.indexStepObj][this._stepService.steps[this.indexStepObj].configuration.form_value.name] = this._stepService.steps[this.indexStepObj].configuration.list[0];
                            //         this.goToNextStep(this.indexStepObj);
                            //     }
                            // }

                            if (leaveFunction == false) {

                            // console.log("GET DATA FROM LIST");
                            // console.log(this._stepService.steps[this.indexStepObj].configuration.list_fr);
                            // console.log(this._stepService.steps[this.indexStepObj].name);
                            //this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                            var objLists = {"name": this._stepService.steps[this.indexStepObj].name, "list_fr":[],"list_nl":[],"list_en":[], "list_es":[], "list":[]};
                            if (typeof this._stepService.steps[this.indexStepObj].configuration.list !== 'undefined')
                            {    objLists.list = this._stepService.steps[this.indexStepObj].configuration.list; }
                            if (typeof this._stepService.steps[this.indexStepObj].configuration.list_fr !== 'undefined')
                            {    objLists.list_fr = this._stepService.steps[this.indexStepObj].configuration.list_fr; }
                            if (typeof this._stepService.steps[this.indexStepObj].configuration.list_nl !== 'undefined')
                            { objLists.list_nl = this._stepService.steps[this.indexStepObj].configuration.list_nl;}
                            if (typeof this._stepService.steps[this.indexStepObj].configuration.list_en !== 'undefined')
                            { objLists.list_en = this._stepService.steps[this.indexStepObj].configuration.list_en;}
                            if (typeof this._stepService.steps[this.indexStepObj].configuration.list_es !== 'undefined')
                            { objLists.list_es = this._stepService.steps[this.indexStepObj].configuration.list_es;}

                            for (let i in this.datas){
                                if (this.datas[i].name == this._stepService.steps[this.indexStepObj].name){
                                    this.datas.splice(parseInt(i),1);
                                }
                            }
                            this.datas.push(objLists);

                            // console.log(this._stepService.steps[this.indexStepObj]);
                            // console.log(this.indexStepObj);
                            // console.log(this.datas);
                            this.stepId = tmpNewstepId;
                            }
                        }
                    break;

                case 'image_selection':
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.collection != 'undefined') {
                        // console.log("GET DATA FROM COLLECTION");
                        let filterList = [];
                        //for (var item of this._stepService.step) {
                        //if (this._stepService.step[this.indexStepObj].step_id == tmpNewstepId) {
                        let collectionName = this._stepService.steps[this.indexStepObj].configuration.collection.name;
                        // console.log(collectionName);
                        //
                        // console.log(this._stepService.steps[this.indexStepObj]);
                        /*
                         TODO TESTER SI FILTER EXISTE DANS COLLECTION
                         */
                        // STEP_ID OU SE TROUVE LE NOM DE LA VARIABLE DE LA VALEUR A FILTRER
                        if (typeof this._stepService.steps[this.indexStepObj].configuration.filter != 'undefined'){
                            let valueToFilter = this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id;
                            // console.log(valueToFilter);
                            // console.log(this._stepService.steps[this.indexStepObj].configuration.collection.filter[0].step_id);
                            // console.log(this._formService);

                            filterList = this._stepService.steps[this.indexStepObj].configuration.collection.filter;
                        }

                        var valueToKeep = ''
                        // SET NOM DE VARIABLE TO SAVE IN FORM SERVICE
                        if (typeof this._stepService.steps[this.indexStepObj].configuration.collection.value != 'undefined') {
                            valueToKeep = this._stepService.steps[this.indexStepObj].configuration.collection.value;
                        }
                        // console.log(valueToKeep);
                        // console.log(this.tmp_id);
                        this._collectionService.getDatas(collectionName, filterList, valueToKeep, 'img_btn')
                            .then(data => {
                                    // console.log('service returns data');
                                    // console.log(data);

                                    this.lists.push(data);
                                    for (let i in data){
                                        this.datas.push({
                                            "name": data[i].name,
                                            "url": data[i].url,
                                            "list": data[i].list,
                                            "loaded": true
                                        });
                                    }

                                    this.previousStepId = this.stepId;
                                    this.stepId = tmpNewstepId;
                                    // Skip the step if there is only 1 result
                                    // console.log("TEST IF ONLY 1 RECORD");
                                    this.dataLoaded = true;
                                    if (data.length == 1) {
                                        this._formService.arraySteps[this.indexStepObj][this._stepService.steps[this.indexStepObj].configuration.form_value.name] = data[0];
                                        this.goToNextStep(this.indexStepObj);
                                    }
                                    // console.log(this.stepId);
                                },
                                error => console.log(error)
                            );
                    }

                    //IF DATA ARE STORED IN A LIST IN CONFIG FILE
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list != 'undefined') {
                        // console.log("GET DATA FROM LIST");
                        this.lists.push(this._stepService.steps[this.indexStepObj].configuration.list);
                        this.datas.push({
                            "name": this._stepService.steps[this.indexStepObj].name,
                            "list": this._stepService.steps[this.indexStepObj].configuration.list
                        });
                        // console.log(this.datas);
                        this.stepId = tmpNewstepId;
                    }
                     break;

                case 'field_panel':
                    // console.log('field_panel');
                    this.stepId = tmpNewstepId;
                    break;

                case 'file_upload':
                    // console.log("file_upload");
                    this.stepId = tmpNewstepId;
                    break;

                case 'multi_selection':
                    var listData = { "name": this._stepService.steps[this.indexStepObj].name, "list_fr":"", "list_nl":""};
                    // console.log(this._stepService.language)
                    // console.log(listData);
                    //
                    // console.log(this._stepService.steps[this.indexStepObj].configuration.list_fr)
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list_fr != 'undefined') {
                        // console.log(listData);
                        listData.list_fr = this._stepService.steps[this.indexStepObj].configuration.list_fr ;
                    }
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list_en != 'undefined') {
                        //listData.append("list_en", this._stepService.steps[this.indexStepObj].configuration.list_en )
                    }
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list_es != 'undefined') {
                       // listData.append("list_es", this._stepService.steps[this.indexStepObj].configuration.list_es )
                    }
                    if (typeof this._stepService.steps[this.indexStepObj].configuration.list_nl != 'undefined') {
                        listData.list_nl = this._stepService.steps[this.indexStepObj].configuration.list_nl ;
                    }
                    // console.log(listData);
                    this.datas.push(listData);
                    // console.log(this.datas);
                    this.stepId = tmpNewstepId;

                    break;

                default:
                    // console.log('default');
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
        // let tmpObj = {};
        // tmpObj[$event.valueName] = $event.valueSelected;

        let keyToFind = $event.valueName
        // console.log(keyToFind)
        // console.log(this._formService.arraySteps)
        let isFound = false
        for (let i=0; i < this._formService.arraySteps.length; i++){
            if (typeof (this._formService.arraySteps[i][keyToFind]) !== 'undefined'){
                // console.log(this._formService.arraySteps[i])
                // console.log($event.valueSelected)
                this._formService.arraySteps[i][keyToFind] = $event.valueSelected
                // console.log("I: " + i);
                isFound = true;
                break;
            }
        }

        if (isFound == false){
            this._mailService.logMail(keyToFind, $event.valueSelected, this.appName)
                .subscribe(
                    mailState => {
                        // console.log(mailState);
                    },
                    error => console.log(error)
                );
        }
        this.goToNextStep($event.stepIdx);
    }

    /* WHEN CLICK NEXT ON FILE UPLOAD STEP */
    onSubmitFile($event){
        // console.log($event);
        // console.log($event.fileUploaded);
        this._formService.arraySteps[this.indexStepObj].file_uploaded = $event.fileUploaded;
        this.goToNextStep($event.stepIdx);
    }


    /* WHEN SUBMITING */
    onSubmitingFields($event) {
        // console.log('OnSubmitingFields');
        // console.log($event.valueSelected[0]);
        // console.log($event);
        // console.log($event.stepIdx);
        // console.log($event.name);

        this._formService.current_step_id = $event.stepId;
        // this._formService.previous_step_id = this.stepId;
        for (let j = 0; j < this._formService.arraySteps.length; j++) {
            //
            // console.log(this._formService.arraySteps[j].keys);
            // console.log(this._formService.arraySteps[j].nom);

            if (this._formService.arraySteps[j].nom == $event.name) {
                let tmpKeyName = $event.name;
                // console.log("tmpKeyName: " + tmpKeyName);
                for (let i = 0; i < $event.valueSelected.length; i++) {
                    let keyObject = $event.valueName[i];
                    let newValue = $event.valueSelected[i];

                    // console.log("keyObject: " + keyObject);
                    // console.log("newValue: " + newValue);

                    this._formService.arraySteps[j][tmpKeyName][i][keyObject] = newValue;
                    // console.log(this._formService.arraySteps[j][tmpKeyName][i][keyObject]);
                    // console.log(' ');
                }
                break;
            }
        }
        // console.log(this._formService.arraySteps);
        // console.log(this._formService);

        this.goToNextStep($event.stepIdx);
    }

    getSelections($event) {
        // Copy selection into _formService
        this._formService.arraySteps[$event.stepIdx][$event.valueName] = $event.valueSelected;
        //Go to next Step
        this.goToNextStep($event.stepIdx);
    }

    changeLanguage(language){
        this._stepService.language = language
    }
}




