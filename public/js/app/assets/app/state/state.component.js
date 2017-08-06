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
const form_service_1 = require("../components/form.service");
let StateComponent = class StateComponent {
    constructor(_formService) {
        this._formService = _formService;
        this.listPannes = ["Moteur", "Turbo", "Alternateur", "Joint de culasse", "Démarreur", "Distribution", "Boite de vitesse", "Embrayage", "Injecteur", "Autre ou inconnue"];
        // roulant = '';
        // raisonNonRoulant = '';
        // responsableAccident = '';
        // typeAssurance = '';
        // importee = '';
        // cles = '';
        // firstHand = '';
        // carnet = '';
        // nature= '';
        this.previous = ''; //UTILE POUR SAVOIR VERS QUELLE QUESTION RETOURNER
        this.showRoulant = true;
        this.showNaturePanne = false;
        this.showRaisonPanne = false;
        this.showDetails = false;
        this.showInfoAccident = false;
    }
    // getRoulant(event:any) {
    //     this._formService.roulant = event.target.value;
    //     console.log(this._formService.roulant);
    //     if (this._formService.roulant) {
    //         this.showRoulant = false;
    //         this.showDetails = true;
    //         this.previous = 'goToRoulant';
    //     }
    //     else {
    //     this.showRaisonPanne = true;
    //     this.showRoulant = false;
    //     }
    //
    // }
    //
    // getRaison(event:any) {
    //     this._formService.raisonNonRoulant = event.target.value;
    //     switch (this._formService.raisonNonRoulant)
    //     {
    //         case 'PANNE':
    //             this.showNaturePanne = true;
    //             break;
    //         case 'ACCIDENT':
    //             this.showInfoAccident = true;
    //             break;
    //         case 'AUTRE':
    //
    //             break;
    //     }
    //
    //     this.showRaisonPanne = false;
    // }
    //
    // getImport(event:any) {
    //     this._formService.importee = event.target.value;
    // }
    //
    // getFirstHand(event:any) {
    //     this._formService.firstHand = event.target.value;
    // }
    //
    // getKeys(event:any) {
    //     this._formService.cles = event.target.value;
    // }
    //
    // getCarnet(event:any) {
    //     this._formService.carnet = event.target.value;
    // }
    //
    // getNature(event:any) {
    //     this._formService.nature = event.target.value;
    //     this.showDetails = true;
    //     this.showNaturePanne = false;
    //     this.previous = 'showNaturePanne';
    // }
    //
    // getResponsableAccident(event:any) {
    //     this._formService.responsableAccident =  event.target.value;
    //     if (this._formService.typeAssurance != '') {
    //         this.showDetails = true;
    //         this.showInfoAccident = false;
    //     }
    //     this.previous = 'showInfoAccident';
    // }
    //
    // getTypeAssurance(event:any) {
    //     this._formService.typeAssurance = event.target.value;
    //     if (this._formService.responsableAccident != '') {
    //         this.showDetails = true;
    //         this.showInfoAccident = false;
    //     }
    //     this.previous = 'showInfoAccident';
    // }
    choosePrevious() {
        console.log(this.previous);
        switch (this.previous) {
            case 'showNaturePanne':
                this.showNaturePanne = true;
                break;
            case 'showInfoAccident':
                this.showInfoAccident = true;
                break;
            case 'goToRoulant':
                this.showRoulant = true;
                break;
        }
        this.showDetails = false;
    }
};
StateComponent = __decorate([
    core_1.Component({
        selector: 'state-vehicule',
        template: `


<div class="panel panel-default"  *ngIf="showRoulant">
        <div class="panel-heading panel-heading-custom" align="center">Véhicule roulant?</div>
    <div class="panel-body">
         <div class="col-md-3">
               <button type="button" (click)="getRoulant($event)" value="true" class="btn btn-primary btn-primary-custom">OUI</button>
               <button type="button" (click)="getRoulant($event)" value="false" class="btn btn-primary btn-primary-custom">NON</button>
         </div>
    </div>
</div>

<div  class="panel panel-default" *ngIf="showRaisonPanne">
<div class="panel-heading panel-heading-custom" align="center">Raison: </div>
<div class="panel-body">
         
        <div class="col-md-3">
             <button type="button" (click)="getRaison($event)" value="PANNE" class="btn btn-primary btn-primary-custom">PANNE</button>
             <button type="button" (click)="getRaison($event)" value="ACCIDENT" class="btn btn-primary btn-primary-custom">ACCIDENT</button>
             <button type="button" (click)="getRaison($event)" value="AUTRE" class="btn btn-primary btn-primary-custom">AUTRE</button>
        </div>
</div>
    <nav class="form-navArrow">
        <button (click)="this.showRoulant = true; this.showRaisonPanne = false;"> Précédent</button>
    </nav>
</div>


<div  class="panel panel-default" *ngIf="showNaturePanne">
     <div class="panel-heading panel-heading-custom" align="center">Indiquez la raison de la panne</div>

    <div class="panel-body">
            <div class="col-md-3" *ngFor="let panne of listPannes">
                        <button type="button" (click)="getNature($event)" value="{{panne}}" class="btn btn-primary btn-primary-custom">
                            {{panne}}
                        </button>
            </div>
    </div>
    <nav class="form-navArrow">
        <i class="glyphicon glyphicon-chevron-left" (click)="this.showRaisonPanne = true; this.showNaturePanne = false;"></i>
    </nav>

</div>

<div  class="panel panel-default" *ngIf="showDetails">
<div class="panel-heading panel-heading-custom" align="center">Voiture importée</div>
<div class="row"  >  
        <div class="col-md-3">
              
             <button *ngIf="_formService.importee != 'OUI'" type="button" (click)="getImport($event)" value="OUI" class="btn btn-primary btn-primary-custom">OUI</button>
             <button *ngIf="_formService.importee == 'OUI'" type="button" (click)="getImport($event)" value="OUI" class="btn btn-info-custom">OUI</button>
             <button *ngIf="_formService.importee != 'NON'" type="button" (click)="getImport($event)" value="NON" class="btn btn-primary btn-primary-custom">NON</button>
             <button *ngIf="_formService.importee == 'NON'" type="button" (click)="getImport($event)" value="NON" class="btn btn-info-custom">NON</button>
        </div>
</div>
<div class="row"  >
        
        <div class="col-md-3">
             <div>Première Main</div>
             <button *ngIf="_formService.firstHand != 'OUI'" type="button" (click)="getFirstHand($event)" value="OUI" class="btn btn-primary btn-primary-custom">OUI</button>
             <button *ngIf="_formService.firstHand == 'OUI'" type="button" (click)="getFirstHand($event)" value="OUI" class="btn btn-info-custom">OUI</button>
             <button *ngIf="_formService.firstHand != 'NON'" type="button" (click)="getFirstHand($event)" value="NON" class="btn btn-primary btn-primary-custom">NON</button>
             <button *ngIf="_formService.firstHand == 'NON'" type="button" (click)="getFirstHand($event)" value="NON" class="btn btn-info-custom">NON</button>
        </div>
</div>
<div class="row"  >  
        <div class="col-md-3">
             <div>Possédez-vous le double des clés</div>
             <button *ngIf="_formService.cles != 'OUI'" type="button" (click)="getKeys($event)" value="OUI" class="btn btn-primary btn-primary-custom">OUI</button>
             <button *ngIf="_formService.cles == 'OUI'" type="button" (click)="getKeys($event)" value="OUI" class="btn btn-info-custom">OUI</button>
             <button *ngIf="_formService.cles != 'NON'" type="button" (click)="getKeys($event)" value="NON" class="btn btn-primary btn-primary-custom">NON</button>
             <button *ngIf="_formService.cles == 'NON'" type="button" (click)="getKeys($event)" value="NON" class="btn btn-info-custom">NON</button>
        </div>
</div>
<div class="row"  >  
        <div class="col-md-3">
             <div>Carnet d'entretien</div>
             <button *ngIf="_formService.carnet != 'OUI'" type="button" (click)="getCarnet($event)" value="OUI" class="btn btn-primary btn-primary-custom">OUI</button>
             <button *ngIf="_formService.carnet == 'OUI'" type="button" (click)="getCarnet($event)" value="OUI" class="btn btn-info-custom">OUI</button>
             <button *ngIf="_formService.carnet != 'NON'" type="button" (click)="getCarnet($event)" value="NON" class="btn btn-primary btn-primary-custom">NON</button>
             <button *ngIf="_formService.carnet == 'NON'" type="button" (click)="getCarnet($event)" value="NON" class="btn btn-info-custom">NON</button>
        </div>
</div>

    <nav class="form-navArrow">
        <button (click)="choosePrevious()"> Précédent</button>
    </nav>
</div>

<div  class="panel panel-default" *ngIf="showInfoAccident">
<div class="row"  >  
        <div class="col-md-3">
             <div>Etes-vous responsable de l'accident?</div>
             <button *ngIf="_formService.responsableAccident != 'OUI'" type="button" (click)="getResponsableAccident($event)" value="OUI" class="btn btn-primary btn-primary-custom">OUI</button>
             <button *ngIf="_formService.responsableAccident == 'OUI'" type="button" (click)="getResponsableAccident($event)" value="OUI" class="btn btn-info-custom">OUI</button>
             <button *ngIf="_formService.responsableAccident != 'NON'" type="button" (click)="getResponsableAccident($event)" value="NON" class="btn btn-primary btn-primary-custom">NON</button>
             <button *ngIf="_formService.responsableAccident == 'NON'" type="button" (click)="getResponsableAccident($event)" value="NON" class="btn btn-info-custom">NON</button>
        </div>
</div>
<div class="row"  >
        <div class="col-md-3">
             <div>Comment êtes-vous assuré.</div>
             <button *ngIf="_formService.typeAssurance != 'OUI'" type="button" (click)="getTypeAssurance($event)" value="TIERS" class="btn btn-primary btn-primary-custom">AU TIERS</button>
             <button *ngIf="_formService.typeAssurance == 'OUI'" type="button" (click)="getTypeAssurance($event)" value="TIERS" class="btn btn-info-custom">AU TIERS</button>
             <button *ngIf="_formService.typeAssurance != 'NON'" type="button" (click)="getTypeAssurance($event)" value="FULL" class="btn btn-primary btn-primary-custom">TOUS RISQUES</button>
             <button *ngIf="_formService.typeAssurance == 'NON'" type="button" (click)="getTypeAssurance($event)" value="FULL" class="btn btn-info-custom">TOUS RISQUES</button>
        </div>
</div>
    <nav class="form-navArrow">
        <button (click)="this.showRaisonPanne = true; this.showInfoAccident = false;"> Précédent</button>
    </nav>
</div>

<nav>
    <div><a [routerLink]="['/photos']"> SUIVANT </a></div>
</nav>
   `
    }), 
    __metadata('design:paramtypes', [form_service_1.FormService])
], StateComponent);
exports.StateComponent = StateComponent;

//# sourceMappingURL=data:application/json;base64,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Q3hCLEtBQUssQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0FBQ0wsQ0FBQztBQTlPRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUhWO0tBQ0gsQ0FBQzs7a0JBQUE7QUFFVyxzQkFBYyxpQkFvSDFCLENBQUEiLCJmaWxlIjoiYXNzZXRzL2FwcC9zdGF0ZS9zdGF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc3RhdGUtdmVoaWN1bGUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuXHJcblxyXG48ZGl2IGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICAqbmdJZj1cInNob3dSb3VsYW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiBhbGlnbj1cImNlbnRlclwiPlbDqWhpY3VsZSByb3VsYW50PzwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSb3VsYW50KCRldmVudClcIiB2YWx1ZT1cInRydWVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJvdWxhbnQoJGV2ZW50KVwiIHZhbHVlPVwiZmFsc2VcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dSYWlzb25QYW5uZVwiPlxyXG48ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+UmFpc29uOiA8L2Rpdj5cclxuPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmFpc29uKCRldmVudClcIiB2YWx1ZT1cIlBBTk5FXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+UEFOTkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSYWlzb24oJGV2ZW50KVwiIHZhbHVlPVwiQUNDSURFTlRcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5BQ0NJREVOVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJhaXNvbigkZXZlbnQpXCIgdmFsdWU9XCJBVVRSRVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPkFVVFJFPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0aGlzLnNob3dSb3VsYW50ID0gdHJ1ZTsgdGhpcy5zaG93UmFpc29uUGFubmUgPSBmYWxzZTtcIj4gUHLDqWPDqWRlbnQ8L2J1dHRvbj5cclxuICAgIDwvbmF2PlxyXG48L2Rpdj5cclxuXHJcblxyXG48ZGl2ICBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dOYXR1cmVQYW5uZVwiPlxyXG4gICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgYWxpZ249XCJjZW50ZXJcIj5JbmRpcXVleiBsYSByYWlzb24gZGUgbGEgcGFubmU8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgcGFubmUgb2YgbGlzdFBhbm5lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0TmF0dXJlKCRldmVudClcIiB2YWx1ZT1cInt7cGFubmV9fVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3twYW5uZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgKGNsaWNrKT1cInRoaXMuc2hvd1JhaXNvblBhbm5lID0gdHJ1ZTsgdGhpcy5zaG93TmF0dXJlUGFubmUgPSBmYWxzZTtcIj48L2k+XHJcbiAgICA8L25hdj5cclxuXHJcbjwvZGl2PlxyXG5cclxuPGRpdiAgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93RGV0YWlsc1wiPlxyXG48ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+Vm9pdHVyZSBpbXBvcnTDqWU8L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJvd1wiICA+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuaW1wb3J0ZWUgIT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEltcG9ydCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuaW1wb3J0ZWUgPT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEltcG9ydCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuaW1wb3J0ZWUgIT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEltcG9ydCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuaW1wb3J0ZWUgPT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEltcG9ydCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIiAgPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgPGRpdj5QcmVtacOocmUgTWFpbjwvZGl2PlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5maXJzdEhhbmQgIT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEZpcnN0SGFuZCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuZmlyc3RIYW5kID09ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRGaXJzdEhhbmQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmZpcnN0SGFuZCAhPSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Rmlyc3RIYW5kKCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5maXJzdEhhbmQgPT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEZpcnN0SGFuZCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIiAgPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICA8ZGl2PlBvc3PDqWRlei12b3VzIGxlIGRvdWJsZSBkZXMgY2zDqXM8L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2xlcyAhPSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0S2V5cygkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2xlcyA9PSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0S2V5cygkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2xlcyAhPSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0S2V5cygkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2xlcyA9PSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0S2V5cygkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIiAgPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICA8ZGl2PkNhcm5ldCBkJ2VudHJldGllbjwvZGl2PlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jYXJuZXQgIT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldENhcm5ldCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2FybmV0ID09ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRDYXJuZXQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNhcm5ldCAhPSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Q2FybmV0KCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jYXJuZXQgPT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldENhcm5ldCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4gICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJjaG9vc2VQcmV2aW91cygpXCI+IFByw6ljw6lkZW50PC9idXR0b24+XHJcbiAgICA8L25hdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dJbmZvQWNjaWRlbnRcIj5cclxuPGRpdiBjbGFzcz1cInJvd1wiICA+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgIDxkaXY+RXRlcy12b3VzIHJlc3BvbnNhYmxlIGRlIGwnYWNjaWRlbnQ/PC9kaXY+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnJlc3BvbnNhYmxlQWNjaWRlbnQgIT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJlc3BvbnNhYmxlQWNjaWRlbnQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnJlc3BvbnNhYmxlQWNjaWRlbnQgPT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJlc3BvbnNhYmxlQWNjaWRlbnQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnJlc3BvbnNhYmxlQWNjaWRlbnQgIT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJlc3BvbnNhYmxlQWNjaWRlbnQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnJlc3BvbnNhYmxlQWNjaWRlbnQgPT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJlc3BvbnNhYmxlQWNjaWRlbnQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCIgID5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgIDxkaXY+Q29tbWVudCDDqnRlcy12b3VzIGFzc3Vyw6kuPC9kaXY+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnR5cGVBc3N1cmFuY2UgIT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFR5cGVBc3N1cmFuY2UoJGV2ZW50KVwiIHZhbHVlPVwiVElFUlNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5BVSBUSUVSUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS50eXBlQXNzdXJhbmNlID09ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRUeXBlQXNzdXJhbmNlKCRldmVudClcIiB2YWx1ZT1cIlRJRVJTXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+QVUgVElFUlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UudHlwZUFzc3VyYW5jZSAhPSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0VHlwZUFzc3VyYW5jZSgkZXZlbnQpXCIgdmFsdWU9XCJGVUxMXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+VE9VUyBSSVNRVUVTPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnR5cGVBc3N1cmFuY2UgPT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFR5cGVBc3N1cmFuY2UoJGV2ZW50KVwiIHZhbHVlPVwiRlVMTFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPlRPVVMgUklTUVVFUzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidGhpcy5zaG93UmFpc29uUGFubmUgPSB0cnVlOyB0aGlzLnNob3dJbmZvQWNjaWRlbnQgPSBmYWxzZTtcIj4gUHLDqWPDqWRlbnQ8L2J1dHRvbj5cclxuICAgIDwvbmF2PlxyXG48L2Rpdj5cclxuXHJcbjxuYXY+XHJcbiAgICA8ZGl2PjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3Bob3RvcyddXCI+IFNVSVZBTlQgPC9hPjwvZGl2PlxyXG48L25hdj5cclxuICAgYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlQ29tcG9uZW50IHtcclxuXHJcbiAgICBsaXN0UGFubmVzID0gW1wiTW90ZXVyXCIsIFwiVHVyYm9cIiwgXCJBbHRlcm5hdGV1clwiLCBcIkpvaW50IGRlIGN1bGFzc2VcIiwgXCJEw6ltYXJyZXVyXCIsIFwiRGlzdHJpYnV0aW9uXCIsIFwiQm9pdGUgZGUgdml0ZXNzZVwiLCBcIkVtYnJheWFnZVwiLCBcIkluamVjdGV1clwiLCBcIkF1dHJlIG91IGluY29ubnVlXCJdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcm91bGFudCA9ICcnO1xyXG4gICAgLy8gcmFpc29uTm9uUm91bGFudCA9ICcnO1xyXG4gICAgLy8gcmVzcG9uc2FibGVBY2NpZGVudCA9ICcnO1xyXG4gICAgLy8gdHlwZUFzc3VyYW5jZSA9ICcnO1xyXG4gICAgLy8gaW1wb3J0ZWUgPSAnJztcclxuICAgIC8vIGNsZXMgPSAnJztcclxuICAgIC8vIGZpcnN0SGFuZCA9ICcnO1xyXG4gICAgLy8gY2FybmV0ID0gJyc7XHJcbiAgICAvLyBuYXR1cmU9ICcnO1xyXG5cclxuXHJcbiAgICBwcmV2aW91cyA9ICcnICAvL1VUSUxFIFBPVVIgU0FWT0lSIFZFUlMgUVVFTExFIFFVRVNUSU9OIFJFVE9VUk5FUlxyXG5cclxuICAgIHNob3dSb3VsYW50OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHNob3dOYXR1cmVQYW5uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd1JhaXNvblBhbm5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93RGV0YWlsczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0luZm9BY2NpZGVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIGdldFJvdWxhbnQoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2Uucm91bGFudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5yb3VsYW50KTtcclxuICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2Uucm91bGFudCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dSb3VsYW50ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0RldGFpbHMgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnByZXZpb3VzID0gJ2dvVG9Sb3VsYW50JztcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgdGhpcy5zaG93UmFpc29uUGFubmUgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd1JvdWxhbnQgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldFJhaXNvbihldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5yYWlzb25Ob25Sb3VsYW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIHN3aXRjaCAodGhpcy5fZm9ybVNlcnZpY2UucmFpc29uTm9uUm91bGFudClcclxuICAgIC8vICAgICB7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ1BBTk5FJzpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd05hdHVyZVBhbm5lID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlICdBQ0NJREVOVCc6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3dJbmZvQWNjaWRlbnQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ0FVVFJFJzpcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd1JhaXNvblBhbm5lID0gZmFsc2U7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0SW1wb3J0KGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmltcG9ydGVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldEZpcnN0SGFuZChldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5maXJzdEhhbmQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0S2V5cyhldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5jbGVzID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldENhcm5ldChldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5jYXJuZXQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0TmF0dXJlKGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLm5hdHVyZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vICAgICB0aGlzLnNob3dEZXRhaWxzID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnNob3dOYXR1cmVQYW5uZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIHRoaXMucHJldmlvdXMgPSAnc2hvd05hdHVyZVBhbm5lJztcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRSZXNwb25zYWJsZUFjY2lkZW50KGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnJlc3BvbnNhYmxlQWNjaWRlbnQgPSAgZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS50eXBlQXNzdXJhbmNlICE9ICcnKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0RldGFpbHMgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dJbmZvQWNjaWRlbnQgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5wcmV2aW91cyA9ICdzaG93SW5mb0FjY2lkZW50JztcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRUeXBlQXNzdXJhbmNlKGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnR5cGVBc3N1cmFuY2UgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLnJlc3BvbnNhYmxlQWNjaWRlbnQgIT0gJycpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93RGV0YWlscyA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0luZm9BY2NpZGVudCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnByZXZpb3VzID0gJ3Nob3dJbmZvQWNjaWRlbnQnO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNob29zZVByZXZpb3VzKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmV2aW91cyk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnByZXZpb3VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FzZSAnc2hvd05hdHVyZVBhbm5lJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd05hdHVyZVBhbm5lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdzaG93SW5mb0FjY2lkZW50JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0luZm9BY2NpZGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZ29Ub1JvdWxhbnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Um91bGFudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaG93RGV0YWlscyA9IGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
