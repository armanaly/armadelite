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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q3hCLEtBQUssQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0FBQ0wsQ0FBQztBQTlPRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUhWO0tBQ0gsQ0FBQzs7a0JBQUE7QUFFVyxzQkFBYyxpQkFvSDFCLENBQUEiLCJmaWxlIjoic3RhdGUvc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3N0YXRlLXZlaGljdWxlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcblxyXG5cclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAgKm5nSWY9XCJzaG93Um91bGFudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgYWxpZ249XCJjZW50ZXJcIj5Ww6loaWN1bGUgcm91bGFudD88L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Um91bGFudCgkZXZlbnQpXCIgdmFsdWU9XCJ0cnVlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSb3VsYW50KCRldmVudClcIiB2YWx1ZT1cImZhbHNlXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiAgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93UmFpc29uUGFubmVcIj5cclxuPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiBhbGlnbj1cImNlbnRlclwiPlJhaXNvbjogPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJhaXNvbigkZXZlbnQpXCIgdmFsdWU9XCJQQU5ORVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlBBTk5FPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmFpc29uKCRldmVudClcIiB2YWx1ZT1cIkFDQ0lERU5UXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+QUNDSURFTlQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSYWlzb24oJGV2ZW50KVwiIHZhbHVlPVwiQVVUUkVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5BVVRSRTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidGhpcy5zaG93Um91bGFudCA9IHRydWU7IHRoaXMuc2hvd1JhaXNvblBhbm5lID0gZmFsc2U7XCI+IFByw6ljw6lkZW50PC9idXR0b24+XHJcbiAgICA8L25hdj5cclxuPC9kaXY+XHJcblxyXG5cclxuPGRpdiAgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93TmF0dXJlUGFubmVcIj5cclxuICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+SW5kaXF1ZXogbGEgcmFpc29uIGRlIGxhIHBhbm5lPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgKm5nRm9yPVwibGV0IHBhbm5lIG9mIGxpc3RQYW5uZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldE5hdHVyZSgkZXZlbnQpXCIgdmFsdWU9XCJ7e3Bhbm5lfX1cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGFubmV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiIChjbGljayk9XCJ0aGlzLnNob3dSYWlzb25QYW5uZSA9IHRydWU7IHRoaXMuc2hvd05hdHVyZVBhbm5lID0gZmFsc2U7XCI+PC9pPlxyXG4gICAgPC9uYXY+XHJcblxyXG48L2Rpdj5cclxuXHJcbjxkaXYgIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd0RldGFpbHNcIj5cclxuPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiBhbGlnbj1cImNlbnRlclwiPlZvaXR1cmUgaW1wb3J0w6llPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIiAgPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmltcG9ydGVlICE9ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRJbXBvcnQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmltcG9ydGVlID09ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRJbXBvcnQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmltcG9ydGVlICE9ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRJbXBvcnQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmltcG9ydGVlID09ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRJbXBvcnQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCIgID5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgIDxkaXY+UHJlbWnDqHJlIE1haW48L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuZmlyc3RIYW5kICE9ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRGaXJzdEhhbmQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmZpcnN0SGFuZCA9PSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Rmlyc3RIYW5kKCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5maXJzdEhhbmQgIT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEZpcnN0SGFuZCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuZmlyc3RIYW5kID09ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRGaXJzdEhhbmQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCIgID4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgPGRpdj5Qb3Nzw6lkZXotdm91cyBsZSBkb3VibGUgZGVzIGNsw6lzPC9kaXY+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNsZXMgIT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEtleXMoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNsZXMgPT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEtleXMoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNsZXMgIT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEtleXMoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNsZXMgPT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEtleXMoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCIgID4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgPGRpdj5DYXJuZXQgZCdlbnRyZXRpZW48L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2FybmV0ICE9ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRDYXJuZXQoJGV2ZW50KVwiIHZhbHVlPVwiT1VJXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+T1VJPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNhcm5ldCA9PSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Q2FybmV0KCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jYXJuZXQgIT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldENhcm5ldCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2FybmV0ID09ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRDYXJuZXQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiY2hvb3NlUHJldmlvdXMoKVwiPiBQcsOpY8OpZGVudDwvYnV0dG9uPlxyXG4gICAgPC9uYXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiAgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgKm5nSWY9XCJzaG93SW5mb0FjY2lkZW50XCI+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIiAgPiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICA8ZGl2PkV0ZXMtdm91cyByZXNwb25zYWJsZSBkZSBsJ2FjY2lkZW50PzwvZGl2PlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5yZXNwb25zYWJsZUFjY2lkZW50ICE9ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSZXNwb25zYWJsZUFjY2lkZW50KCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5yZXNwb25zYWJsZUFjY2lkZW50ID09ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSZXNwb25zYWJsZUFjY2lkZW50KCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5yZXNwb25zYWJsZUFjY2lkZW50ICE9ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSZXNwb25zYWJsZUFjY2lkZW50KCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5yZXNwb25zYWJsZUFjY2lkZW50ID09ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSZXNwb25zYWJsZUFjY2lkZW50KCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJvd1wiICA+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICA8ZGl2PkNvbW1lbnQgw6p0ZXMtdm91cyBhc3N1csOpLjwvZGl2PlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS50eXBlQXNzdXJhbmNlICE9ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRUeXBlQXNzdXJhbmNlKCRldmVudClcIiB2YWx1ZT1cIlRJRVJTXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+QVUgVElFUlM8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UudHlwZUFzc3VyYW5jZSA9PSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0VHlwZUFzc3VyYW5jZSgkZXZlbnQpXCIgdmFsdWU9XCJUSUVSU1wiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPkFVIFRJRVJTPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnR5cGVBc3N1cmFuY2UgIT0gJ05PTidcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFR5cGVBc3N1cmFuY2UoJGV2ZW50KVwiIHZhbHVlPVwiRlVMTFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlRPVVMgUklTUVVFUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS50eXBlQXNzdXJhbmNlID09ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRUeXBlQXNzdXJhbmNlKCRldmVudClcIiB2YWx1ZT1cIkZVTExcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5UT1VTIFJJU1FVRVM8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRoaXMuc2hvd1JhaXNvblBhbm5lID0gdHJ1ZTsgdGhpcy5zaG93SW5mb0FjY2lkZW50ID0gZmFsc2U7XCI+IFByw6ljw6lkZW50PC9idXR0b24+XHJcbiAgICA8L25hdj5cclxuPC9kaXY+XHJcblxyXG48bmF2PlxyXG4gICAgPGRpdj48YSBbcm91dGVyTGlua109XCJbJy9waG90b3MnXVwiPiBTVUlWQU5UIDwvYT48L2Rpdj5cclxuPC9uYXY+XHJcbiAgIGBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZUNvbXBvbmVudCB7XHJcblxyXG4gICAgbGlzdFBhbm5lcyA9IFtcIk1vdGV1clwiLCBcIlR1cmJvXCIsIFwiQWx0ZXJuYXRldXJcIiwgXCJKb2ludCBkZSBjdWxhc3NlXCIsIFwiRMOpbWFycmV1clwiLCBcIkRpc3RyaWJ1dGlvblwiLCBcIkJvaXRlIGRlIHZpdGVzc2VcIiwgXCJFbWJyYXlhZ2VcIiwgXCJJbmplY3RldXJcIiwgXCJBdXRyZSBvdSBpbmNvbm51ZVwiXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJvdWxhbnQgPSAnJztcclxuICAgIC8vIHJhaXNvbk5vblJvdWxhbnQgPSAnJztcclxuICAgIC8vIHJlc3BvbnNhYmxlQWNjaWRlbnQgPSAnJztcclxuICAgIC8vIHR5cGVBc3N1cmFuY2UgPSAnJztcclxuICAgIC8vIGltcG9ydGVlID0gJyc7XHJcbiAgICAvLyBjbGVzID0gJyc7XHJcbiAgICAvLyBmaXJzdEhhbmQgPSAnJztcclxuICAgIC8vIGNhcm5ldCA9ICcnO1xyXG4gICAgLy8gbmF0dXJlPSAnJztcclxuXHJcblxyXG4gICAgcHJldmlvdXMgPSAnJyAgLy9VVElMRSBQT1VSIFNBVk9JUiBWRVJTIFFVRUxMRSBRVUVTVElPTiBSRVRPVVJORVJcclxuXHJcbiAgICBzaG93Um91bGFudDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBzaG93TmF0dXJlUGFubmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dSYWlzb25QYW5uZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0RldGFpbHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJbmZvQWNjaWRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyBnZXRSb3VsYW50KGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnJvdWxhbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2Uucm91bGFudCk7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLnJvdWxhbnQpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93Um91bGFudCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dEZXRhaWxzID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5wcmV2aW91cyA9ICdnb1RvUm91bGFudCc7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGVsc2Uge1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd1JhaXNvblBhbm5lID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLnNob3dSb3VsYW50ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRSYWlzb24oZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UucmFpc29uTm9uUm91bGFudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vICAgICBzd2l0Y2ggKHRoaXMuX2Zvcm1TZXJ2aWNlLnJhaXNvbk5vblJvdWxhbnQpXHJcbiAgICAvLyAgICAge1xyXG4gICAgLy8gICAgICAgICBjYXNlICdQQU5ORSc6XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3dOYXR1cmVQYW5uZSA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSAnQUNDSURFTlQnOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93SW5mb0FjY2lkZW50ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICBjYXNlICdBVVRSRSc6XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICB0aGlzLnNob3dSYWlzb25QYW5uZSA9IGZhbHNlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldEltcG9ydChldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5pbXBvcnRlZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRGaXJzdEhhbmQoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UuZmlyc3RIYW5kID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldEtleXMoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UuY2xlcyA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRDYXJuZXQoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UuY2FybmV0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldE5hdHVyZShldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5uYXR1cmUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyAgICAgdGhpcy5zaG93RGV0YWlscyA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy5zaG93TmF0dXJlUGFubmUgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnByZXZpb3VzID0gJ3Nob3dOYXR1cmVQYW5uZSc7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0UmVzcG9uc2FibGVBY2NpZGVudChldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5yZXNwb25zYWJsZUFjY2lkZW50ID0gIGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UudHlwZUFzc3VyYW5jZSAhPSAnJykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dEZXRhaWxzID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93SW5mb0FjY2lkZW50ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMucHJldmlvdXMgPSAnc2hvd0luZm9BY2NpZGVudCc7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0VHlwZUFzc3VyYW5jZShldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS50eXBlQXNzdXJhbmNlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5yZXNwb25zYWJsZUFjY2lkZW50ICE9ICcnKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0RldGFpbHMgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dJbmZvQWNjaWRlbnQgPSBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5wcmV2aW91cyA9ICdzaG93SW5mb0FjY2lkZW50JztcclxuICAgIC8vIH1cclxuXHJcbiAgICBjaG9vc2VQcmV2aW91cygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJldmlvdXMpO1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5wcmV2aW91cylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Nob3dOYXR1cmVQYW5uZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOYXR1cmVQYW5uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc2hvd0luZm9BY2NpZGVudCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dJbmZvQWNjaWRlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2dvVG9Sb3VsYW50JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JvdWxhbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hvd0RldGFpbHMgPSBmYWxzZTtcclxuICAgIH1cclxufSJdfQ==
