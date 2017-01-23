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
const vehicule_service_1 = require("./vehicule.service");
const marque_service_1 = require("../marque/marque.service");
const marque_1 = require("../marque/marque");
const formVehicule_1 = require("./formVehicule");
const forms_1 = require("@angular/forms");
const form_service_1 = require("./form.service");
const step_service_1 = require("../Engine/step.service");
const collection_service_1 = require("../Engine/collection.service");
let VehiculeComponent = class VehiculeComponent {
    //formVehicule: ControlGroup;
    //formService: FormService;
    constructor(_marqueService, _vehiculeService, route, _fb, _formService, _stepService, _collectionService) {
        this._marqueService = _marqueService;
        this._vehiculeService = _vehiculeService;
        this.route = route;
        this._fb = _fb;
        this._formService = _formService;
        this._stepService = _stepService;
        this._collectionService = _collectionService;
        this.model = new formVehicule_1.FormVehicule(0, false);
        this.submitted = false;
        this.stepId = 1;
        this.previousStepId = '';
        this.indexStepObj = 0;
        this.labelPanel = "";
        this.my_form = new forms_1.FormGroup({
            mileage_input: new forms_1.FormControl()
        });
        this.lists = [];
        //listModeles = [];
        this.listYears = [];
        this.listCarburant = [];
        this.listNbPortes = [];
        this.listGearBox = [];
        this.listPower = [];
        this.listVersion = [];
        this.confirm = false;
        this.verifMileage = false;
        this.missingMileage = false;
        this.progressBar = 0;
        this.customCollectionData = [];
    }
    //steps = this._stepService.step;
    //Affiche la liste des modeles de la marque choisie
    ngOnInit() {
        this._stepService.getSteps()
            .subscribe(stepReturn => {
            this.steps = stepReturn;
            this._stepService.step = stepReturn;
            //this.lists.push(["/images/logo-audi.jpg", "/images/logo-bmw.jpg"]);
            /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
            if (typeof this._stepService.step[0].configuration.collection != 'undefined') {
            }
            /*  IF A LIST EXISTS IN CONFIG FILE */
            if (typeof this._stepService.step[0].configuration.list != 'undefined') {
                this.lists.push(this._stepService.step[0].configuration.list);
            }
            // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
            this._formService.init();
            //Big list contains all list of buttons
            //var keyName = this._stepService.step[0].configuration.form_value.name;
            //this._formService.arraySteps[0][keyName] =  this.route.snapshot.params.name;
            //this.labelPanel = this._stepService.step[this.indexStepObj].configuration.labelPanel;
        }, error => console.log(error));
    }
    // ngAfterContentInit(){
    //     console.log(this.lists);
    //     console.log(this.lists.length);
    //     console.log(this.indexStepObj);
    //     console.log(this.lists[this.indexStepObj]);
    // }
    //
    //   console.log(this._marqueService);
    //      //var keyName = this._stepService.step[0].configuration.form_value.name;
    //      console.log("FORM_SERVICE");
    //      this._formService.init();
    //      console.log(this._formService) ;
    // 
    //       //  console.log(this._formService.arraySteps[0][keyName]);
    //         this._formService.marqueSelected = this.route.snapshot.params.name;
    // this.indexStepObj ++;
    //         // Load Config file
    //         this.labelPanel = this._stepService.step[this.indexStepObj].configuration.labelPanel;
    //         this.stepId = this._stepService.step[this.indexStepObj].step_id;
    //         for (let index = 0; index < this._marqueService.marques.length; index++) {
    //             if (this._marqueService.marques[index].name == this.route.snapshot.params.name) {
    //                 var listModeles = this._marqueService.marques[index].modeles;
    //                 listModeles.sort();
    //                 //this.lists.splice(9,9,listModeles);
    //                 this.lists.push(listModeles); //Big list contains all list of buttons
    //                 break;
    //             }
    //         }
    // getDataFromCollection(){
    // var age= 23;
    // var arr = ["j",age,age+=10, age--, age-1, undefined ];
    // console.log(arr);
    // arr.length = 2;
    // console.log(arr);
    // delete arr[3];
    // console.log(arr.length);
    // delete arr[0];
    // console.log(arr);
    // console.log(arr.length);
    // arr[6]="Sam";
    // console.log(arr);
    // console.log(age);
    // //console.log(Name.lastname);
    //
    // console.log('FIN');
    // console.log(this._stepService.step);
    // console.log(this.stepId);
    // console.log(this.previousStepId);
    // console.log(this._formService.arraySteps[this.previousStepId]);
    //     var filterList = [];
    //     for (var item of this._stepService.step){
    //         if (item.step_id == this.stepId){
    //             var collectionName = item.configuration.collection.name;
    //             /*
    //                 TODO TESTER SI FILTER EXISTE DANS COLLECTION
    //              */
    //             filterList.push(item.configuration.collection.filter);
    //         }
    //         if (Number(item.step_id) == Number(this.previousStepId)){
    //             var valueFilterList = item.configuration.form_value.name;
    //         }
    //     }
    //
    //     //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
    //     this._collectionService.getDatas(collectionName, filterList)
    //         //.debounceTime(200)
    //         //.subscribe(
    //         .then (data => {
    //             console.log(data[0].modeles);
    //             this.lists.push(data[0].modeles);
    //             return data[0].modeles
    //             //return data[0].modeles
    //             //console.log(this.lists);
    //             //    this.customCollectionData = collectionDataReturn.__zone_symbol.value;
    //             //console.log(this.customCollectionData);
    //
    //             //this._marqueService.marques = collectionDataReturn;
    //
    //         },
    //         error => console.log(error)
    //     );
    // }
    goPreviousStep($event) {
        this.indexStepObj = $event.newStepId;
        //this.labelPanel = this.steps[this.indexStepObj].labelPanel;
    }
    onValueSelected($event) {
        console.log($event.valueSelected);
        console.log($event.valueName);
        console.log(this.indexStepObj);
        var tmpObj = {};
        tmpObj[$event.valueName] = $event.valueSelected;
        this._formService.arraySteps[this.indexStepObj] = tmpObj;
        this.goToNextStep();
    }
    onSubmit() {
        this.submitted = true;
    }
    goToNextStep() {
        console.log(this.indexStepObj);
        this.indexStepObj++;
        // while ( typeof this._stepService.step[this.indexStepObj] == 'undefined' ) {
        //      this.indexStepObj++;
        // }
        console.log("this.indexStepObj " + this.indexStepObj);
        console.log(this._stepService.step[this.indexStepObj].configuration);
        // TEMPORARY STEP_ID BECAUSE WE NEED TO WAIT FOR ASYNCHROUNOUS QUERY
        var tmpNewstepId = this._stepService.step[this.indexStepObj].step_id;
        // this.previousStepId = this.stepId;
        /* IF LIST BUTTON COMPONENT */
        console.log(this._stepService.step[this.indexStepObj].type);
        switch (this._stepService.step[this.indexStepObj].type) {
            case 'click_selection':
                /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
                if (typeof this._stepService.step[this.indexStepObj].configuration.collection != 'undefined') {
                    var filterList = [];
                    for (var item of this._stepService.step) {
                        if (item.step_id == tmpNewstepId) {
                            var collectionName = item.configuration.collection.name;
                            console.log(item);
                            /*
                             TODO TESTER SI FILTER EXISTE DANS COLLECTION
                             */
                            // STEP_ID OU SE TROUVE LE NOM DE LA VARIABLE DE LA VALEUR A FILTRER
                            var valueToFilter = item.configuration.collection.filter[0].step_id;
                            console.log(valueToFilter);
                            console.log(item.configuration.collection.filter[0].step_id);
                            console.log(this._formService);
                            filterList = item.configuration.collection.filter;
                        }
                        if (Number(item.step_id) == Number(this.previousStepId)) {
                            var valueFilterList = item.configuration.form_value.name;
                        }
                    }
                    if (typeof this._stepService.step[this.indexStepObj].configuration.collection.value != 'undefined') {
                        var valueToKeep = this._stepService.step[this.indexStepObj].configuration.collection.value;
                    }
                    else {
                        valueToKeep = '';
                    }
                    //   this._collectionService.getDatas(collectionName).then(collectionDataReturn => this.lists.push(collectionDataReturn))
                    this._collectionService.getDatas(collectionName, filterList, valueToKeep)
                        .then(data => {
                        console.log(data);
                        //console.log(data[0]);
                        // if (typeof this._stepService.step[this.indexStepObj].configuration.collection.value != 'undefined') {
                        //     //var valueToKeep = this._stepService.step[this.indexStepObj].configuration.collection.value;
                        //     console.log(valueToKeep);
                        //     //var value1ToKeep = data[0].modele;
                        //     console.log(data[0].date_debut);
                        //    // console.log(data[0].modele.[eval(valueToKeep)]);
                        // }
                        this.lists.push(data);
                        this.previousStepId = this.stepId;
                        // this.stepId = this._stepService.step[this.indexStepObj].step_id;
                        this.stepId = tmpNewstepId;
                        console.log(this.stepId);
                        console.log(this.lists);
                    }, error => console.log(error));
                }
                //IF DATA ARE STORED IN A LIST IN CONFIG FILE
                if (typeof this._stepService.step[this.indexStepObj].configuration.list != 'undefined') {
                    console.log("GET DATA FROM LIST");
                    this.lists.push(this._stepService.step[this.indexStepObj].configuration.list);
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
    onSubmitingFields($event) {
        console.log('OnSubmitingFields');
        // console.log($event.valueSelected);
        // console.log(this.indexStepObj);
        // console.log(this._formService.arraySteps);
        // console.log($event.valueName);
        for (let j = 0; j < this._formService.arraySteps.length; j++) {
            for (let i = 0; i < $event.valueSelected.length; i++) {
                if (typeof this._formService.arraySteps[j][$event.valueName[i]] != 'undefined') {
                    this._formService.arraySteps[j][$event.valueName[i]] = $event.valueSelected[i];
                }
            }
        }
        // console.log(this._formService.arraySteps);
        //
        // var tmpObj = {};
        // for (let i =0;i<$event.valueSelected.length;i++){
        //     tmpObj[$event.valueName[i]] = $event.valueSelected[i]
        // }
        // console.log(tmpObj);
        //this._formService.arraySteps[this.indexStepObj] = tmpObj;
        this.goToNextStep();
    }
    //Recupere les annees de production du modele selectionne
    //recupère toutes les années pour la marque sélectionnée
    getAvailableYears() {
        this.listYears = [];
        var j = 0;
        var minYear = 2016;
        if (this._vehiculeService.vehicules[0].date_fin == '--') {
            var maxYear = 2016; //new Date().getFullYear;
        }
        else {
            var maxYear = parseInt(this._vehiculeService.vehicules[0].date_fin);
        }
        for (let index = 0; index < this._vehiculeService.vehicules.length; index++) {
            if (minYear > parseInt(this._vehiculeService.vehicules[index].date_debut)) {
                minYear = parseInt(this._vehiculeService.vehicules[index].date_debut);
            }
            if (maxYear < parseInt(this._vehiculeService.vehicules[index].date_fin)) {
                maxYear = parseInt(this._vehiculeService.vehicules[index].date_fin);
            }
        }
        for (minYear; minYear <= maxYear; minYear++) {
            this.listYears.push(minYear);
        }
        this.listYears.sort();
        return this.listYears;
    }
    showYears(event) {
        this.progressBar = this.progressBar + 10;
        this.getAvailableYears();
        // this._formService.monthSelected = event.target.value;
        this.indexStepObj += 10;
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', marque_1.Marque)
], VehiculeComponent.prototype, "marque", void 0);
VehiculeComponent = __decorate([
    core_1.Component({
        selector: 'vehicule-detail',
        template: `
  <progress class="progress progress-danger" [attr.value]="progressBar" max="100" ></progress>


<div><a [routerLink]="['/']"> BACK </a></div>

   <div *ngFor="let objStep of this._stepService.step" >
        <!-- IMAGE LIST BUTTON PANEL -->
        <div *ngIf="objStep.type == 'image_selection' ">
            <panel-btn-img
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep" 
                    [valueSelected]="objStep.configuration.selection"  
                    [listOfElements]="this.lists[indexStepObj]"
                    (change)="onValueSelected($event)">
            </panel-btn-img>
        </div>
        
        <!-- LIST BUTTON PANEL -->
        <div *ngIf="objStep.type == 'click_selection'">
            <list-buttons          
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep" 
                    [valueSelected]="objStep.configuration.selection"  
                    [listOfElements]="this.lists[indexStepObj]"
                    (change)="onValueSelected($event)"
            ></list-buttons>
        </div>
        
        <!--- FIELD PANEL --->
        <div *ngIf="objStep.type == 'field_panel'">
            <field-panel          
                *ngIf="stepId == objStep.step_id"
                    [objStep] = "objStep" 
                    (sent)="onSubmitingFields($event)"
            ></field-panel>
        </div>
        
 </div>
     
<div> ici </div>

<div class="panel-body panel-body-custom" >


<div class="panel panel-default">




<div class="panel-heading-custom" align="center">
    <previous-page
        *ngIf="stepId != 10"
        [stepId]="this.stepId" 
        [currentStep]="this.steps" 
        (change)="goPreviousStep($event)">
    </previous-page>
 </div>

    
<div class="panel panel-default" *ngIf="stepId == 90">
   <div class="panel-heading panel-heading-custom" align="center">INDIQUEZ LE KILOMETRAGE DU VEHICULE </div>
   <div class="panel-body">
   <form [formGroup] = "my_form"   >
        <label for="mileage_input" align="center"></label>
        <!--<input id="mileageInput" type="text" ngControl="mileageInput" #mileageInput="ngForm" class="form-control">-->
        <input formControlName="mileage_input"
               name="mileage_input" type="number" #mileage_input
               id="mileage_input" class="form-control"
               required>
        <div *ngIf="missingMileage" class="alert alert-danger">Kilométrage est requis.</div>
        <button type="button"  (click)="onSubmitMileage(mileage_input)" class="btn btn-primary btn-primary-custom">SUIVANT</button>
    </form>
    </div>
</div>

    
    
    <multi-selection
            *ngIf="stepId == 100"
            [labelPanel]="this.steps[100].labelPanel" 
            [valueSelected]="this._formService.optionsSelected"
            [listOfElements]="this.lists[2]"
            (change)="getOption($event)"         
    ></multi-selection>
</div>
</div> 

<nav>
    <div><a [routerLink]="['/state']"> VERS ETAPE 2 </a></div>
</nav>
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
    __metadata('design:paramtypes', [marque_service_1.MarqueService, vehicule_service_1.VehiculeService, router_1.ActivatedRoute, forms_1.FormBuilder, form_service_1.FormService, step_service_1.StepService, collection_service_1.CollectionService])
], VehiculeComponent);
exports.VehiculeComponent = VehiculeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL3ZlaGljdWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXVDLGVBQ3ZDLENBQUMsQ0FEcUQ7QUFDdEQseUJBQTZCLGlCQUFpQixDQUFDLENBQUE7QUFDL0MsbUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQTRCLDBCQUEwQixDQUFDLENBQUE7QUFFdkQseUJBQXFCLGtCQUFrQixDQUFDLENBQUE7QUFFeEMsK0JBQTJCLGdCQUFnQixDQUFDLENBQUE7QUFDNUMsd0JBQThELGdCQUFnQixDQUFDLENBQUE7QUFDL0UsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFFM0MsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQscUNBQWdDLDhCQUE4QixDQUFDLENBQUE7QUEyRy9EO0lBZ0JJLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0IsWUFDVyxjQUE2QixFQUFVLGdCQUFpQyxFQUFVLEtBQXFCLEVBQ3RHLEdBQWdCLEVBQVMsWUFBeUIsRUFBUyxZQUF5QixFQUNyRixrQkFBcUM7UUFGckMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFBVSxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdEcsUUFBRyxHQUFILEdBQUcsQ0FBYTtRQUFTLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDckYsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQXBCaEQsVUFBSyxHQUFHLElBQUksMkJBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUtsQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsbUJBQWMsR0FBRyxFQUFFLENBQUM7UUFDcEIsaUJBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUdULFlB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LHlCQUFpQixvQkEra0I3QixDQUFBIiwiZmlsZSI6InZlaGljdWxlL3ZlaGljdWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7VmVoaWN1bGVTZXJ2aWNlfSBmcm9tIFwiLi92ZWhpY3VsZS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWFycXVlU2VydmljZX0gZnJvbSBcIi4uL21hcnF1ZS9tYXJxdWUuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBNb2RlbH0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwTW9kZWxcIjtcclxuaW1wb3J0IHtNYXJxdWV9IGZyb20gXCIuLi9tYXJxdWUvbWFycXVlXCI7XHJcbmltcG9ydCB7VmVoaWN1bGV9IGZyb20gXCIuLi92ZWhpY3VsZS92ZWhpY3VsZVwiO1xyXG5pbXBvcnQge0Zvcm1WZWhpY3VsZX0gZnJvbSBcIi4vZm9ybVZlaGljdWxlXCI7XHJcbmltcG9ydCB7VmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICd2ZWhpY3VsZS1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICA8cHJvZ3Jlc3MgY2xhc3M9XCJwcm9ncmVzcyBwcm9ncmVzcy1kYW5nZXJcIiBbYXR0ci52YWx1ZV09XCJwcm9ncmVzc0JhclwiIG1heD1cIjEwMFwiID48L3Byb2dyZXNzPlxyXG5cclxuXHJcbjxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gQkFDSyA8L2E+PC9kaXY+XHJcblxyXG4gICA8ZGl2ICpuZ0Zvcj1cImxldCBvYmpTdGVwIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBcIiA+XHJcbiAgICAgICAgPCEtLSBJTUFHRSBMSVNUIEJVVFRPTiBQQU5FTCAtLT5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIFwiPlxyXG4gICAgICAgICAgICA8cGFuZWwtYnRuLWltZ1xyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmxpc3RzW2luZGV4U3RlcE9ial1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25WYWx1ZVNlbGVjdGVkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9wYW5lbC1idG4taW1nPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwhLS0gTElTVCBCVVRUT04gUEFORUwgLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnY2xpY2tfc2VsZWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICA8bGlzdC1idXR0b25zICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCJzdGVwSWQgPT0gb2JqU3RlcC5zdGVwX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICBbb2JqU3RlcF0gPSBcIm9ialN0ZXBcIiBcclxuICAgICAgICAgICAgICAgICAgICBbdmFsdWVTZWxlY3RlZF09XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uc2VsZWN0aW9uXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmxpc3RzW2luZGV4U3RlcE9ial1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25WYWx1ZVNlbGVjdGVkKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9saXN0LWJ1dHRvbnM+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPCEtLS0gRklFTEQgUEFORUwgLS0tPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ZpZWxkX3BhbmVsJ1wiPlxyXG4gICAgICAgICAgICA8ZmllbGQtcGFuZWwgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN0ZXBJZCA9PSBvYmpTdGVwLnN0ZXBfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtvYmpTdGVwXSA9IFwib2JqU3RlcFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChzZW50KT1cIm9uU3VibWl0aW5nRmllbGRzKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9maWVsZC1wYW5lbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuIDwvZGl2PlxyXG4gICAgIFxyXG48ZGl2PiBpY2kgPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBwYW5lbC1ib2R5LWN1c3RvbVwiID5cclxuXHJcblxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiPlxyXG5cclxuXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmctY3VzdG9tXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgIDxwcmV2aW91cy1wYWdlXHJcbiAgICAgICAgKm5nSWY9XCJzdGVwSWQgIT0gMTBcIlxyXG4gICAgICAgIFtzdGVwSWRdPVwidGhpcy5zdGVwSWRcIiBcclxuICAgICAgICBbY3VycmVudFN0ZXBdPVwidGhpcy5zdGVwc1wiIFxyXG4gICAgICAgIChjaGFuZ2UpPVwiZ29QcmV2aW91c1N0ZXAoJGV2ZW50KVwiPlxyXG4gICAgPC9wcmV2aW91cy1wYWdlPlxyXG4gPC9kaXY+XHJcblxyXG4gICAgXHJcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzdGVwSWQgPT0gOTBcIj5cclxuICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiBhbGlnbj1cImNlbnRlclwiPklORElRVUVaIExFIEtJTE9NRVRSQUdFIERVIFZFSElDVUxFIDwvZGl2PlxyXG4gICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICA8Zm9ybSBbZm9ybUdyb3VwXSA9IFwibXlfZm9ybVwiICAgPlxyXG4gICAgICAgIDxsYWJlbCBmb3I9XCJtaWxlYWdlX2lucHV0XCIgYWxpZ249XCJjZW50ZXJcIj48L2xhYmVsPlxyXG4gICAgICAgIDwhLS08aW5wdXQgaWQ9XCJtaWxlYWdlSW5wdXRcIiB0eXBlPVwidGV4dFwiIG5nQ29udHJvbD1cIm1pbGVhZ2VJbnB1dFwiICNtaWxlYWdlSW5wdXQ9XCJuZ0Zvcm1cIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPi0tPlxyXG4gICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJtaWxlYWdlX2lucHV0XCJcclxuICAgICAgICAgICAgICAgbmFtZT1cIm1pbGVhZ2VfaW5wdXRcIiB0eXBlPVwibnVtYmVyXCIgI21pbGVhZ2VfaW5wdXRcclxuICAgICAgICAgICAgICAgaWQ9XCJtaWxlYWdlX2lucHV0XCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICByZXF1aXJlZD5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwibWlzc2luZ01pbGVhZ2VcIiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPktpbG9tw6l0cmFnZSBlc3QgcmVxdWlzLjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICAoY2xpY2spPVwib25TdWJtaXRNaWxlYWdlKG1pbGVhZ2VfaW5wdXQpXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+U1VJVkFOVDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8bXVsdGktc2VsZWN0aW9uXHJcbiAgICAgICAgICAgICpuZ0lmPVwic3RlcElkID09IDEwMFwiXHJcbiAgICAgICAgICAgIFtsYWJlbFBhbmVsXT1cInRoaXMuc3RlcHNbMTAwXS5sYWJlbFBhbmVsXCIgXHJcbiAgICAgICAgICAgIFt2YWx1ZVNlbGVjdGVkXT1cInRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFwiXHJcbiAgICAgICAgICAgIFtsaXN0T2ZFbGVtZW50c109XCJ0aGlzLmxpc3RzWzJdXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJnZXRPcHRpb24oJGV2ZW50KVwiICAgICAgICAgXHJcbiAgICA+PC9tdWx0aS1zZWxlY3Rpb24+XHJcbjwvZGl2PlxyXG48L2Rpdj4gXHJcblxyXG48bmF2PlxyXG4gICAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJy9zdGF0ZSddXCI+IFZFUlMgRVRBUEUgMiA8L2E+PC9kaXY+XHJcbjwvbmF2PlxyXG5gLFxyXG5cclxuICAgIHN0eWxlczogW2AgbmF2eyAgICBcclxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfWBdXHJcblxyXG59KVxyXG5leHBvcnQgY2xhc3MgVmVoaWN1bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgbW9kZWwgPSBuZXcgRm9ybVZlaGljdWxlKDAsIGZhbHNlKTtcclxuICAgIHN1Ym1pdHRlZCA9IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gICAgQElucHV0KCkgbWFycXVlOiBNYXJxdWU7XHJcbiAgICBzdGVwSWQgPSAxO1xyXG4gICAgcHJldmlvdXNTdGVwSWQgPSAnJztcclxuICAgIGluZGV4U3RlcE9iaiA9IDA7XHJcbiAgICBsYWJlbFBhbmVsID0gXCJcIjtcclxuXHJcblxyXG4gICAgcHVibGljIG15X2Zvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICBtaWxlYWdlX2lucHV0OiBuZXcgRm9ybUNvbnRyb2woKVxyXG4gICAgfSk7XHJcbiAgICAvL2Zvcm1WZWhpY3VsZTogQ29udHJvbEdyb3VwO1xyXG4gICAgLy9mb3JtU2VydmljZTogRm9ybVNlcnZpY2U7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgX21hcnF1ZVNlcnZpY2U6IE1hcnF1ZVNlcnZpY2UsIHByaXZhdGUgX3ZlaGljdWxlU2VydmljZTogVmVoaWN1bGVTZXJ2aWNlLCBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgXHJcbiAgICAgICAgcHJpdmF0ZSBfZmI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHVibGljIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIF9jb2xsZWN0aW9uU2VydmljZTogQ29sbGVjdGlvblNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICB2ZWhpY3VsZXM6IFZlaGljdWxlW107XHJcbiAgXHJcbiAgICBsaXN0cyA9IFtdO1xyXG5cclxuICAgIC8vbGlzdE1vZGVsZXMgPSBbXTtcclxuICAgIGxpc3RZZWFycyA9IFtdO1xyXG4gICAgbGlzdENhcmJ1cmFudCA9IFtdO1xyXG4gICAgbGlzdE5iUG9ydGVzID0gW107XHJcbiAgICBsaXN0R2VhckJveCA9IFtdO1xyXG4gICAgbGlzdFBvd2VyID0gW107XHJcbiAgICBsaXN0VmVyc2lvbiA9IFtdO1xyXG4gIFxyXG4gICAgY29uZmlybTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgdmVyaWZNaWxlYWdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBtaXNzaW5nTWlsZWFnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBwcm9ncmVzc0JhcjpudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICBzdGVwczogU3RlcE1vZGVsW107XHJcbiAgICAgICAgY3VzdG9tQ29sbGVjdGlvbkRhdGE9IFtdO1xyXG4gICAgLy9zdGVwcyA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXA7XHJcbiAgICAvL0FmZmljaGUgbGEgbGlzdGUgZGVzIG1vZGVsZXMgZGUgbGEgbWFycXVlIGNob2lzaWVcclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHN0ZXBSZXR1cm4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwcyA9IHN0ZXBSZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCA9IHN0ZXBSZXR1cm47IFxyXG4vL3RoaXMubGlzdHMucHVzaChbXCIvaW1hZ2VzL2xvZ28tYXVkaS5qcGdcIiwgXCIvaW1hZ2VzL2xvZ28tYm13LmpwZ1wiXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwWzBdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogIElGIEEgTElTVCBFWElTVFMgSU4gQ09ORklHIEZJTEUgKi8gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7IFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSU5JVElBVEUgRk9STSBTRVJWSUNFIFRPIEtFRVAgQUxMIFNFTEVDVElPTlMgTUFERSBCWSBVU0VSIElOIFNURVBTXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuaW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vQmlnIGxpc3QgY29udGFpbnMgYWxsIGxpc3Qgb2YgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdmFyIGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwWzBdLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1swXVtrZXlOYW1lXSA9ICB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vdGhpcy5sYWJlbFBhbmVsID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsO1xyXG4gICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgXHJcbiB9XHJcbiBcclxuIC8vIG5nQWZ0ZXJDb250ZW50SW5pdCgpe1xyXG4gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHMpO1xyXG4gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHMubGVuZ3RoKTtcclxuIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAvLyAgICAgY29uc29sZS5sb2codGhpcy5saXN0c1t0aGlzLmluZGV4U3RlcE9ial0pO1xyXG4gLy8gfVxyXG4gXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9cclxuICAgIC8vICAgY29uc29sZS5sb2codGhpcy5fbWFycXVlU2VydmljZSk7XHJcbiAgICAgIFxyXG4gICAgLy8gICAgICAvL3ZhciBrZXlOYW1lID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgXHJcbiAgICAvLyAgICAgIGNvbnNvbGUubG9nKFwiRk9STV9TRVJWSUNFXCIpO1xyXG4gICAgLy8gICAgICB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbiAgICAvLyAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKSA7XHJcbiAgICAgICAgLy8gXHJcbi8vICAgICAgIC8vICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzWzBdW2tleU5hbWVdKTtcclxuLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5tYXJxdWVTZWxlY3RlZCA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLm5hbWU7XHJcbi8vIHRoaXMuaW5kZXhTdGVwT2JqICsrO1xyXG4vLyAgICAgICAgIC8vIExvYWQgQ29uZmlnIGZpbGVcclxuLy8gICAgICAgICB0aGlzLmxhYmVsUGFuZWwgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWw7XHJcbi8vICAgICAgICAgdGhpcy5zdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4vLyAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9tYXJxdWVTZXJ2aWNlLm1hcnF1ZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbi8vICAgICAgICAgICAgIGlmICh0aGlzLl9tYXJxdWVTZXJ2aWNlLm1hcnF1ZXNbaW5kZXhdLm5hbWUgPT0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMubmFtZSkge1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIGxpc3RNb2RlbGVzID0gdGhpcy5fbWFycXVlU2VydmljZS5tYXJxdWVzW2luZGV4XS5tb2RlbGVzO1xyXG4vLyAgICAgICAgICAgICAgICAgbGlzdE1vZGVsZXMuc29ydCgpO1xyXG4vLyAgICAgICAgICAgICAgICAgLy90aGlzLmxpc3RzLnNwbGljZSg5LDksbGlzdE1vZGVsZXMpO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaChsaXN0TW9kZWxlcyk7IC8vQmlnIGxpc3QgY29udGFpbnMgYWxsIGxpc3Qgb2YgYnV0dG9uc1xyXG4vLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldERhdGFGcm9tQ29sbGVjdGlvbigpe1xyXG4gICAgICAgIC8vIHZhciBhZ2U9IDIzO1xyXG4gICAgICAgIC8vIHZhciBhcnIgPSBbXCJqXCIsYWdlLGFnZSs9MTAsIGFnZS0tLCBhZ2UtMSwgdW5kZWZpbmVkIF07XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyKTtcclxuICAgICAgICAvLyBhcnIubGVuZ3RoID0gMjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgICAgIC8vIGRlbGV0ZSBhcnJbM107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXJyLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gZGVsZXRlIGFyclswXTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFyci5sZW5ndGgpO1xyXG4gICAgICAgIC8vIGFycls2XT1cIlNhbVwiO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFycik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYWdlKTtcclxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKE5hbWUubGFzdG5hbWUpO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ0ZJTicpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJldmlvdXNTdGVwSWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5wcmV2aW91c1N0ZXBJZF0pO1xyXG5cclxuICAgIC8vICAgICB2YXIgZmlsdGVyTGlzdCA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCl7XHJcbiAgICAvLyAgICAgICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gdGhpcy5zdGVwSWQpe1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb25OYW1lID0gaXRlbS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24ubmFtZTtcclxuICAgIC8vICAgICAgICAgICAgIC8qXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgVE9ETyBURVNURVIgU0kgRklMVEVSIEVYSVNURSBEQU5TIENPTExFQ1RJT05cclxuICAgIC8vICAgICAgICAgICAgICAqL1xyXG4gICAgLy8gICAgICAgICAgICAgZmlsdGVyTGlzdC5wdXNoKGl0ZW0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYgKE51bWJlcihpdGVtLnN0ZXBfaWQpID09IE51bWJlcih0aGlzLnByZXZpb3VzU3RlcElkKSl7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdmFsdWVGaWx0ZXJMaXN0ID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gICB0aGlzLl9jb2xsZWN0aW9uU2VydmljZS5nZXREYXRhcyhjb2xsZWN0aW9uTmFtZSkudGhlbihjb2xsZWN0aW9uRGF0YVJldHVybiA9PiB0aGlzLmxpc3RzLnB1c2goY29sbGVjdGlvbkRhdGFSZXR1cm4pKVxyXG4gICAgLy8gICAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lLCBmaWx0ZXJMaXN0KVxyXG4gICAgLy8gICAgICAgICAvLy5kZWJvdW5jZVRpbWUoMjAwKVxyXG4gICAgLy8gICAgICAgICAvLy5zdWJzY3JpYmUoXHJcbiAgICAvLyAgICAgICAgIC50aGVuIChkYXRhID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0ubW9kZWxlcyk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2goZGF0YVswXS5tb2RlbGVzKTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBkYXRhWzBdLm1vZGVsZXNcclxuICAgIC8vICAgICAgICAgICAgIC8vcmV0dXJuIGRhdGFbMF0ubW9kZWxlc1xyXG4gICAgLy8gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmxpc3RzKTtcclxuICAgIC8vICAgICAgICAgICAgIC8vICAgIHRoaXMuY3VzdG9tQ29sbGVjdGlvbkRhdGEgPSBjb2xsZWN0aW9uRGF0YVJldHVybi5fX3pvbmVfc3ltYm9sLnZhbHVlO1xyXG4gICAgLy8gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmN1c3RvbUNvbGxlY3Rpb25EYXRhKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICAvL3RoaXMuX21hcnF1ZVNlcnZpY2UubWFycXVlcyA9IGNvbGxlY3Rpb25EYXRhUmV0dXJuO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgZ29QcmV2aW91c1N0ZXAoJGV2ZW50KXtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiA9ICRldmVudC5uZXdTdGVwSWQ7XHJcbiAgICAgICAgLy90aGlzLmxhYmVsUGFuZWwgPSB0aGlzLnN0ZXBzW3RoaXMuaW5kZXhTdGVwT2JqXS5sYWJlbFBhbmVsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmFsdWVTZWxlY3RlZCgkZXZlbnQpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC52YWx1ZVNlbGVjdGVkKTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAgICAgdmFyIHRtcE9iaiA9IHt9O1xyXG4gICAgICAgIHRtcE9ialskZXZlbnQudmFsdWVOYW1lXSA9ICRldmVudC52YWx1ZVNlbGVjdGVkXHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcblxyXG4gICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblN1Ym1pdCgpIHtcclxuICAgICAgICB0aGlzLnN1Ym1pdHRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub05leHRTdGVwKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pbmRleFN0ZXBPYmopO1xyXG5cclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArKztcclxuICAgICAgICAvLyB3aGlsZSAoIHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXSA9PSAndW5kZWZpbmVkJyApIHtcclxuICAgICAgICAvLyAgICAgIHRoaXMuaW5kZXhTdGVwT2JqKys7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5pbmRleFN0ZXBPYmogXCIrdGhpcy5pbmRleFN0ZXBPYmopO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24pO1xyXG5cclxuICAgICAgICAvLyBURU1QT1JBUlkgU1RFUF9JRCBCRUNBVVNFIFdFIE5FRUQgVE8gV0FJVCBGT1IgQVNZTkNIUk9VTk9VUyBRVUVSWVxyXG4gICAgICAgIHZhciB0bXBOZXdzdGVwSWQgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5zdGVwX2lkO1xyXG4gICAgICAgIC8vIHRoaXMucHJldmlvdXNTdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuXHJcbiAgICAgICAgLyogSUYgTElTVCBCVVRUT04gQ09NUE9ORU5UICovXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0udHlwZSk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS50eXBlKXtcclxuICAgICAgICAgICAgY2FzZSAnY2xpY2tfc2VsZWN0aW9uJzpcclxuICAgICAgICAgICAgICAgIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmaWx0ZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaXRlbSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gdG1wTmV3c3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29sbGVjdGlvbk5hbWUgPSBpdGVtLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRPRE8gVEVTVEVSIFNJIEZJTFRFUiBFWElTVEUgREFOUyBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNURVBfSUQgT1UgU0UgVFJPVVZFIExFIE5PTSBERSBMQSBWQVJJQUJMRSBERSBMQSBWQUxFVVIgQSBGSUxUUkVSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVUb0ZpbHRlciA9IGl0ZW0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlclswXS5zdGVwX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVUb0ZpbHRlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbi5maWx0ZXJbMF0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyTGlzdCA9IGl0ZW0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLmZpbHRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoTnVtYmVyKGl0ZW0uc3RlcF9pZCkgPT0gTnVtYmVyKHRoaXMucHJldmlvdXNTdGVwSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWVGaWx0ZXJMaXN0ID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24udmFsdWUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlVG9LZWVwID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVUb0tlZXAgPSAnJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgIHRoaXMuX2NvbGxlY3Rpb25TZXJ2aWNlLmdldERhdGFzKGNvbGxlY3Rpb25OYW1lKS50aGVuKGNvbGxlY3Rpb25EYXRhUmV0dXJuID0+IHRoaXMubGlzdHMucHVzaChjb2xsZWN0aW9uRGF0YVJldHVybikpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29sbGVjdGlvblNlcnZpY2UuZ2V0RGF0YXMoY29sbGVjdGlvbk5hbWUsIGZpbHRlckxpc3QsIHZhbHVlVG9LZWVwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGRhdGFbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vdmFyIHZhbHVlVG9LZWVwID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh2YWx1ZVRvS2VlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vdmFyIHZhbHVlMVRvS2VlcCA9IGRhdGFbMF0ubW9kZWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmRhdGVfZGVidXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0ubW9kZWxlLltldmFsKHZhbHVlVG9LZWVwKV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2goZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91c1N0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RlcElkID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uc3RlcF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBJZCA9IHRtcE5ld3N0ZXBJZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0cyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL0lGIERBVEEgQVJFIFNUT1JFRCBJTiBBIExJU1QgSU4gQ09ORklHIEZJTEVcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVQgREFUQSBGUk9NIExJU1RcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwSWQgPSB0bXBOZXdzdGVwSWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdmaWVsZF9wYW5lbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcElkID0gdG1wTmV3c3RlcElkO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlZmF1bHQnKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgb25TdWJtaXRpbmdGaWVsZHMoJGV2ZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ09uU3VibWl0aW5nRmllbGRzJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJGV2ZW50LnZhbHVlU2VsZWN0ZWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5kZXhTdGVwT2JqKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudmFsdWVOYW1lKTtcclxuICAgICAgICBmb3IgKGxldCBqID0wOyBqPHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0wO2k8JGV2ZW50LnZhbHVlU2VsZWN0ZWQubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal1bJGV2ZW50LnZhbHVlTmFtZVtpXV0gIT0gJ3VuZGVmaW5lZCcgKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW2pdWyRldmVudC52YWx1ZU5hbWVbaV1dID0gJGV2ZW50LnZhbHVlU2VsZWN0ZWRbaV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB2YXIgdG1wT2JqID0ge307XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9MDtpPCRldmVudC52YWx1ZVNlbGVjdGVkLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIC8vICAgICB0bXBPYmpbJGV2ZW50LnZhbHVlTmFtZVtpXV0gPSAkZXZlbnQudmFsdWVTZWxlY3RlZFtpXVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0bXBPYmopO1xyXG4gICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmluZGV4U3RlcE9ial0gPSB0bXBPYmo7XHJcblxyXG4gICAgICAgIHRoaXMuZ29Ub05leHRTdGVwKCk7XHJcbiAgICB9XHJcbiAgICAvL1JlY3VwZXJlIGxlcyBhbm5lZXMgZGUgcHJvZHVjdGlvbiBkdSBtb2RlbGUgc2VsZWN0aW9ubmVcclxuICAgIC8vcmVjdXDDqHJlIHRvdXRlcyBsZXMgYW5uw6llcyBwb3VyIGxhIG1hcnF1ZSBzw6lsZWN0aW9ubsOpZVxyXG5cclxuXHJcbiAgICBnZXRBdmFpbGFibGVZZWFycygpIHtcclxuICAgICAgICB0aGlzLmxpc3RZZWFycyA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgaiA9IDA7XHJcblxyXG4gICAgICAgIHZhciBtaW5ZZWFyID0gMjAxNjtcclxuICAgICAgICBpZiAodGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1swXS5kYXRlX2ZpbiA9PSAnLS0nKXtcclxuICAgICAgICAgICAgdmFyIG1heFllYXIgPSAyMDE2Oy8vbmV3IERhdGUoKS5nZXRGdWxsWWVhcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBtYXhZZWFyID0gcGFyc2VJbnQodGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1swXS5kYXRlX2Zpbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAobWluWWVhciA+IHBhcnNlSW50KHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmRhdGVfZGVidXQpKSB7XHJcbiAgICAgICAgICAgICAgICBtaW5ZZWFyID0gcGFyc2VJbnQodGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0uZGF0ZV9kZWJ1dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1heFllYXIgPCBwYXJzZUludCh0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5kYXRlX2ZpbikpIHtcclxuICAgICAgICAgICAgICAgIG1heFllYXIgPSBwYXJzZUludCh0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5kYXRlX2Zpbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKCBtaW5ZZWFyOyBtaW5ZZWFyIDw9IG1heFllYXI7IG1pblllYXIrKylcclxuICAgICAgICB7ICAgICAgICAgICAgLy9pZiAodGhpcy5saXN0WWVhcnMuaW5kZXhPZih0bXBEYXRlRGVidXQpID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RZZWFycy5wdXNoKG1pblllYXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMubGlzdE5iUG9ydGVzW2pdID0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0uZGF0ZV9kZWJ1dDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxpc3RZZWFycy5zb3J0KCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlzdFllYXJzXHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1llYXJzKGV2ZW50OmFueSkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnByb2dyZXNzQmFyICsgMTA7XHJcbiAgICAgICAgdGhpcy5nZXRBdmFpbGFibGVZZWFycygpO1xyXG4gICAgICAgLy8gdGhpcy5fZm9ybVNlcnZpY2UubW9udGhTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLmluZGV4U3RlcE9iaiArPSAxMDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZWN1cGVyZSBsZXMgY2FyYnVyYW50cyBkaXNwb25pYmxlcyBwb3VyIGNlIG1vZGVsZSBkZSB2ZWhpY3VsZVxyXG4gICAgLy8gZ2V0TGlzdEZ1ZWwoKVxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIC8vIHZhciBjaGVja0RlcGVuZGVuY2llcyA9IHRoaXMuc3RlcHNbNDBdLmRlcGVuZHM7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjaGVja0RlcGVuZGVuY2llcy5sZW5ndGg7IGluZGV4Kyspe1xyXG4gICAgLy8gICAgIC8vXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5tb2RlbGVTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5tb2RlbGUpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciB0bXBDYXJidXJhbnQgPSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5jYXJidXJhbnQ7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMubGlzdENhcmJ1cmFudC5pbmRleE9mKHRtcENhcmJ1cmFudCkgPT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXJidXJhbnRbal0gPSB0bXBDYXJidXJhbnQ7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldExpc3REb29ycygpIHtcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5tb2RlbGVTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5tb2RlbGUgJiYgdGhpcy5fZm9ybVNlcnZpY2UuZnVlbFNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmNhcmJ1cmFudCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIHRtcFBvcnRlcyA9IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLnBvcnRlcztcclxuICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmxpc3ROYlBvcnRlcy5pbmRleE9mKHRtcFBvcnRlcykgPT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3ROYlBvcnRlc1tqXSA9IHRtcFBvcnRlcztcclxuICAgIC8vICAgICAgICAgICAgICAgICBqKys7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldExpc3RHZWFyQm94KCl7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm1vZGVsZVNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLm1vZGVsZVxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UuZnVlbFNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmNhcmJ1cmFudFxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0ucG9ydGVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wR2VhckJveCA9IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmJvaXRlX3ZpdGVzc2U7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5saXN0R2VhckJveC5pbmRleE9mKHRtcEdlYXJCb3gpID09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5saXN0R2VhckJveFtqXSA9IHRtcEdlYXJCb3g7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldExpc3RQb3dlcigpe1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm1vZGVsZVNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLm1vZGVsZVxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UuZnVlbFNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmNhcmJ1cmFudFxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5wb3J0ZXNcclxuICAgIC8vICAgICAgICAgICAgICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLmdlYXJCb3hTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5ib2l0ZV92aXRlc3NlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wUG93ZXIgPSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5wdWlzc2FuY2U7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5saXN0UG93ZXIuaW5kZXhPZih0bXBQb3dlcikgPT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3RQb3dlcltqXSA9IHRtcFBvd2VyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGorKztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmxpc3RQb3dlci5zb3J0KCk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0TGlzdFZlcnNpb24oKXtcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5tb2RlbGVTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5tb2RlbGVcclxuICAgIC8vICAgICAgICAgICAgICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLmZ1ZWxTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5jYXJidXJhbnRcclxuICAgIC8vICAgICAgICAgICAgICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPT0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0ucG9ydGVzXHJcbiAgICAvLyAgICAgICAgICAgICAmJiB0aGlzLl9mb3JtU2VydmljZS5nZWFyQm94U2VsZWN0ZWQgPT0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0uYm9pdGVfdml0ZXNzZVxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UucG93ZXJTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5wdWlzc2FuY2UpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wVmVyc2lvbiA9IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLnZlcnNpb247XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5saXN0VmVyc2lvbi5pbmRleE9mKHRtcFZlcnNpb24pID09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5saXN0VmVyc2lvbltqXSA9IHRtcFZlcnNpb247XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldExpc3RFcXVpcG1lbnQoKXtcclxuICAgIC8vICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuICAgIC8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZC5sZW5ndGg7IGkrKyl7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWRbaV0gPT0gZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQuc3BsaWNlKGksMSk7XHJcbiAgICAvLyAgICAgICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGlmIChhZGRPcHRpb24pe1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXROYlBvcnRlcyhldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLnByb2dyZXNzQmFyID0gdGhpcy5wcm9ncmVzc0JhciArIDEwO1xyXG4gICAgLy8gICAvLyAgdGhpcy5fZm9ybVNlcnZpY2UuZnVlbFNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm1vZGVsZVNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLm1vZGVsZSAmJiB0aGlzLl9mb3JtU2VydmljZS5mdWVsU2VsZWN0ZWQgPT0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0uY2FyYnVyYW50KSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wUG9ydGVzID0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0ucG9ydGVzO1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKHRoaXMubGlzdE5iUG9ydGVzLmluZGV4T2YodG1wUG9ydGVzKSA9PSAtMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubGlzdE5iUG9ydGVzW2pdID0gdG1wUG9ydGVzO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGorKztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvL0NoZWNrIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgY2hvaWNlIHBvc3NpYmxlLCB3ZSBkaXNwbGF5IHRoZSBjaG9pY2VzIGlmIG5vdCwgd2Ugc2tpcCB0aGlzIHN0ZXAgYW5kIGdvZXMgZGlyZWN0bHkgdG8gdGhlIGdlYXJib3ggc2VsZWN0aW9uXHJcbiAgICAvLyAgICAgaWYgKHRoaXMubGlzdE5iUG9ydGVzLmxlbmd0aCA+IDEpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5saXN0TmJQb3J0ZXMuc29ydCgpO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmluZGV4U3RlcE9iaiArKztcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IFwiXCI7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5wb3J0ZVNlbGVjdGVkID0gdGhpcy5saXN0TmJQb3J0ZXNbMF07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZ2V0R2VhckJveCgnJyk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaW5kZXhTdGVwT2JqICs9IDEwO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmluZGV4U3RlcE9iaik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vdGhpcy5zaG93Q2FyYnVyYW50ID0gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vIGdldEdlYXJCb3goZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAxMDtcclxuICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9PSAnJylcclxuICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgdmFyIGogPSAwO1xyXG4gICAgLy8gICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UubW9kZWxlU2VsZWN0ZWQgPT0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0ubW9kZWxlICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLmZ1ZWxTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5jYXJidXJhbnQgJiYgdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0ucG9ydGVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wR2VhckJveCA9IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmJvaXRlX3ZpdGVzc2U7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5saXN0R2VhckJveC5pbmRleE9mKHRtcEdlYXJCb3gpID09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5saXN0R2VhckJveFtqXSA9IHRtcEdlYXJCb3g7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuaW5kZXhTdGVwT2JqICs9MTA7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0UG93ZXIoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAxMDtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5nZWFyQm94U2VsZWN0ZWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJkYW5zIGdldCBwb3dlclwiICsgdGhpcy5fZm9ybVNlcnZpY2UuZ2VhckJveFNlbGVjdGVkKTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIm5iIGRlIHBvcnRlcyBzZWxlY3RcIiArIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQpO1xyXG4gICAgLy8gICAgIHZhciBqID0gMDtcclxuICAgIC8vICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm1vZGVsZVNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLm1vZGVsZVxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UuZnVlbFNlbGVjdGVkID09IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLmNhcmJ1cmFudFxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UucG9ydGVTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5wb3J0ZXNcclxuICAgIC8vICAgICAgICAgICAgICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLmdlYXJCb3hTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5ib2l0ZV92aXRlc3NlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wUG93ZXIgPSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5wdWlzc2FuY2U7XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5saXN0UG93ZXIuaW5kZXhPZih0bXBQb3dlcikgPT0gLTEpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmxpc3RQb3dlcltqXSA9IHRtcFBvd2VyO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGorKztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmxpc3RQb3dlci5zb3J0KCk7XHJcbiAgICAvLyAgICAgdGhpcy5pbmRleFN0ZXBPYmogKz0xMDtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRWZXJzaW9uKGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMucHJvZ3Jlc3NCYXIgPSB0aGlzLnByb2dyZXNzQmFyICsgMTA7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UucG93ZXJTZWxlY3RlZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vICAgICB2YXIgaiA9IDA7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5tb2RlbGVTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5tb2RlbGVcclxuICAgIC8vICAgICAgICAgICAgICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLmZ1ZWxTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5jYXJidXJhbnRcclxuICAgIC8vICAgICAgICAgICAgICYmIHRoaXMuX2Zvcm1TZXJ2aWNlLnBvcnRlU2VsZWN0ZWQgPT0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0ucG9ydGVzXHJcbiAgICAvLyAgICAgICAgICAgICAmJiB0aGlzLl9mb3JtU2VydmljZS5nZWFyQm94U2VsZWN0ZWQgPT0gdGhpcy5fdmVoaWN1bGVTZXJ2aWNlLnZlaGljdWxlc1tpbmRleF0uYm9pdGVfdml0ZXNzZVxyXG4gICAgLy8gICAgICAgICAgICAgJiYgdGhpcy5fZm9ybVNlcnZpY2UucG93ZXJTZWxlY3RlZCA9PSB0aGlzLl92ZWhpY3VsZVNlcnZpY2UudmVoaWN1bGVzW2luZGV4XS5wdWlzc2FuY2UpIHtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgdG1wVmVyc2lvbiA9IHRoaXMuX3ZlaGljdWxlU2VydmljZS52ZWhpY3VsZXNbaW5kZXhdLnZlcnNpb247XHJcbiAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5saXN0VmVyc2lvbi5pbmRleE9mKHRtcFZlcnNpb24pID09IC0xKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5saXN0VmVyc2lvbltqXSA9IHRtcFZlcnNpb247XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuaW5kZXhTdGVwT2JqICs9MTA7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy9cclxuICAgIC8vIGdldE1pbGVhZ2UoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9ncmVzc0JhciA9IHRoaXMucHJvZ3Jlc3NCYXIgKyAxMDtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5jb2xvclNlbGVjdGVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIHRoaXMuaW5kZXhTdGVwT2JqICs9MTA7XHJcbiAgICAvLyB9O1xyXG4gICAgLy9cclxuICAgIC8vIGdldE9wdGlvbihldmVudDphbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9mb3JtU2VydmljZS5vcHRpb25zU2VsZWN0ZWQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnNwbGljZShpLDEpO1xyXG4gICAgICAgIC8vICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAoYWRkT3B0aW9uKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbi8vICAgIH07XHJcbiAgICAvL1xyXG4gICAgLy8gaXNTZWxlY3RlZChvcHRpb24pe1xyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZm9ybVNlcnZpY2Uub3B0aW9uc1NlbGVjdGVkLmxlbmd0aDsgaSsrKXtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLm9wdGlvbnNTZWxlY3RlZFtpXSA9PSBvcHRpb24pe1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG9uU3VibWl0TWlsZWFnZSgpIHtcclxuICAgIC8vICAgICAgaWYgKHRoaXMubXlfZm9ybS52YWx1ZS5taWxlYWdlX2lucHV0ID09IG51bGwpXHJcbiAgICAvLyAgICAgICAgIHRoaXMubWlzc2luZ01pbGVhZ2UgPSB0cnVlO1xyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5taWxlYWdlU2VsZWN0ZWQgPSB0aGlzLm15X2Zvcm0udmFsdWUubWlsZWFnZV9pbnB1dDtcclxuICAgIC8vICAgICAgICAgdGhpcy5taXNzaW5nTWlsZWFnZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmdvVG9OZXh0U3RlcCgpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
