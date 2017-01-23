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
const form_service_1 = require("../vehicule/form.service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q3hCLEtBQUssQ0FBQztRQUNkLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0FBQ0wsQ0FBQztBQTlPRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBcUhWO0tBQ0gsQ0FBQzs7a0JBQUE7QUFFVyxzQkFBYyxpQkFvSDFCLENBQUEiLCJmaWxlIjoic3RhdGUvc3RhdGUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzdGF0ZS12ZWhpY3VsZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG5cclxuXHJcbjxkaXYgY2xhc3M9XCJwYW5lbCBwYW5lbC1kZWZhdWx0XCIgICpuZ0lmPVwic2hvd1JvdWxhbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+VsOpaGljdWxlIHJvdWxhbnQ/PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJvdWxhbnQoJGV2ZW50KVwiIHZhbHVlPVwidHJ1ZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Um91bGFudCgkZXZlbnQpXCIgdmFsdWU9XCJmYWxzZVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd1JhaXNvblBhbm5lXCI+XHJcbjxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgYWxpZ249XCJjZW50ZXJcIj5SYWlzb246IDwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRSYWlzb24oJGV2ZW50KVwiIHZhbHVlPVwiUEFOTkVcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5QQU5ORTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFJhaXNvbigkZXZlbnQpXCIgdmFsdWU9XCJBQ0NJREVOVFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPkFDQ0lERU5UPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmFpc29uKCRldmVudClcIiB2YWx1ZT1cIkFVVFJFXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+QVVUUkU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cInRoaXMuc2hvd1JvdWxhbnQgPSB0cnVlOyB0aGlzLnNob3dSYWlzb25QYW5uZSA9IGZhbHNlO1wiPiBQcsOpY8OpZGVudDwvYnV0dG9uPlxyXG4gICAgPC9uYXY+XHJcbjwvZGl2PlxyXG5cclxuXHJcbjxkaXYgIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd05hdHVyZVBhbm5lXCI+XHJcbiAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiBhbGlnbj1cImNlbnRlclwiPkluZGlxdWV6IGxhIHJhaXNvbiBkZSBsYSBwYW5uZTwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiICpuZ0Zvcj1cImxldCBwYW5uZSBvZiBsaXN0UGFubmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXROYXR1cmUoJGV2ZW50KVwiIHZhbHVlPVwie3twYW5uZX19XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Bhbm5lfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIiAoY2xpY2spPVwidGhpcy5zaG93UmFpc29uUGFubmUgPSB0cnVlOyB0aGlzLnNob3dOYXR1cmVQYW5uZSA9IGZhbHNlO1wiPjwvaT5cclxuICAgIDwvbmF2PlxyXG5cclxuPC9kaXY+XHJcblxyXG48ZGl2ICBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIiAqbmdJZj1cInNob3dEZXRhaWxzXCI+XHJcbjxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgYWxpZ249XCJjZW50ZXJcIj5Wb2l0dXJlIGltcG9ydMOpZTwvZGl2PlxyXG48ZGl2IGNsYXNzPVwicm93XCIgID4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5pbXBvcnRlZSAhPSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0SW1wb3J0KCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5pbXBvcnRlZSA9PSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0SW1wb3J0KCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5pbXBvcnRlZSAhPSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0SW1wb3J0KCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5pbXBvcnRlZSA9PSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0SW1wb3J0KCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJvd1wiICA+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICA8ZGl2PlByZW1pw6hyZSBNYWluPC9kaXY+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmZpcnN0SGFuZCAhPSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Rmlyc3RIYW5kKCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5maXJzdEhhbmQgPT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldEZpcnN0SGFuZCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuZmlyc3RIYW5kICE9ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRGaXJzdEhhbmQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmZpcnN0SGFuZCA9PSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Rmlyc3RIYW5kKCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJvd1wiICA+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgIDxkaXY+UG9zc8OpZGV6LXZvdXMgbGUgZG91YmxlIGRlcyBjbMOpczwvZGl2PlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jbGVzICE9ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRLZXlzKCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jbGVzID09ICdPVUknXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRLZXlzKCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jbGVzICE9ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRLZXlzKCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jbGVzID09ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRLZXlzKCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPGRpdiBjbGFzcz1cInJvd1wiICA+ICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgIDxkaXY+Q2FybmV0IGQnZW50cmV0aWVuPC9kaXY+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNhcm5ldCAhPSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Q2FybmV0KCRldmVudClcIiB2YWx1ZT1cIk9VSVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPk9VSTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS5jYXJuZXQgPT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldENhcm5ldCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UuY2FybmV0ICE9ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRDYXJuZXQoJGV2ZW50KVwiIHZhbHVlPVwiTk9OXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+Tk9OPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLmNhcm5ldCA9PSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0Q2FybmV0KCRldmVudClcIiB2YWx1ZT1cIk5PTlwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPk5PTjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImNob29zZVByZXZpb3VzKClcIj4gUHLDqWPDqWRlbnQ8L2J1dHRvbj5cclxuICAgIDwvbmF2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgIGNsYXNzPVwicGFuZWwgcGFuZWwtZGVmYXVsdFwiICpuZ0lmPVwic2hvd0luZm9BY2NpZGVudFwiPlxyXG48ZGl2IGNsYXNzPVwicm93XCIgID4gIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgPGRpdj5FdGVzLXZvdXMgcmVzcG9uc2FibGUgZGUgbCdhY2NpZGVudD88L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UucmVzcG9uc2FibGVBY2NpZGVudCAhPSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmVzcG9uc2FibGVBY2NpZGVudCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UucmVzcG9uc2FibGVBY2NpZGVudCA9PSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmVzcG9uc2FibGVBY2NpZGVudCgkZXZlbnQpXCIgdmFsdWU9XCJPVUlcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5PVUk8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UucmVzcG9uc2FibGVBY2NpZGVudCAhPSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmVzcG9uc2FibGVBY2NpZGVudCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UucmVzcG9uc2FibGVBY2NpZGVudCA9PSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0UmVzcG9uc2FibGVBY2NpZGVudCgkZXZlbnQpXCIgdmFsdWU9XCJOT05cIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5OT048L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjxkaXYgY2xhc3M9XCJyb3dcIiAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgPGRpdj5Db21tZW50IMOqdGVzLXZvdXMgYXNzdXLDqS48L2Rpdj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UudHlwZUFzc3VyYW5jZSAhPSAnT1VJJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0VHlwZUFzc3VyYW5jZSgkZXZlbnQpXCIgdmFsdWU9XCJUSUVSU1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPkFVIFRJRVJTPC9idXR0b24+XHJcbiAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiX2Zvcm1TZXJ2aWNlLnR5cGVBc3N1cmFuY2UgPT0gJ09VSSdcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdldFR5cGVBc3N1cmFuY2UoJGV2ZW50KVwiIHZhbHVlPVwiVElFUlNcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5BVSBUSUVSUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIl9mb3JtU2VydmljZS50eXBlQXNzdXJhbmNlICE9ICdOT04nXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnZXRUeXBlQXNzdXJhbmNlKCRldmVudClcIiB2YWx1ZT1cIkZVTExcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5UT1VTIFJJU1FVRVM8L2J1dHRvbj5cclxuICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJfZm9ybVNlcnZpY2UudHlwZUFzc3VyYW5jZSA9PSAnTk9OJ1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ2V0VHlwZUFzc3VyYW5jZSgkZXZlbnQpXCIgdmFsdWU9XCJGVUxMXCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+VE9VUyBSSVNRVUVTPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0aGlzLnNob3dSYWlzb25QYW5uZSA9IHRydWU7IHRoaXMuc2hvd0luZm9BY2NpZGVudCA9IGZhbHNlO1wiPiBQcsOpY8OpZGVudDwvYnV0dG9uPlxyXG4gICAgPC9uYXY+XHJcbjwvZGl2PlxyXG5cclxuPG5hdj5cclxuICAgIDxkaXY+PGEgW3JvdXRlckxpbmtdPVwiWycvcGhvdG9zJ11cIj4gU1VJVkFOVCA8L2E+PC9kaXY+XHJcbjwvbmF2PlxyXG4gICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVDb21wb25lbnQge1xyXG5cclxuICAgIGxpc3RQYW5uZXMgPSBbXCJNb3RldXJcIiwgXCJUdXJib1wiLCBcIkFsdGVybmF0ZXVyXCIsIFwiSm9pbnQgZGUgY3VsYXNzZVwiLCBcIkTDqW1hcnJldXJcIiwgXCJEaXN0cmlidXRpb25cIiwgXCJCb2l0ZSBkZSB2aXRlc3NlXCIsIFwiRW1icmF5YWdlXCIsIFwiSW5qZWN0ZXVyXCIsIFwiQXV0cmUgb3UgaW5jb25udWVcIl07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICAvLyByb3VsYW50ID0gJyc7XHJcbiAgICAvLyByYWlzb25Ob25Sb3VsYW50ID0gJyc7XHJcbiAgICAvLyByZXNwb25zYWJsZUFjY2lkZW50ID0gJyc7XHJcbiAgICAvLyB0eXBlQXNzdXJhbmNlID0gJyc7XHJcbiAgICAvLyBpbXBvcnRlZSA9ICcnO1xyXG4gICAgLy8gY2xlcyA9ICcnO1xyXG4gICAgLy8gZmlyc3RIYW5kID0gJyc7XHJcbiAgICAvLyBjYXJuZXQgPSAnJztcclxuICAgIC8vIG5hdHVyZT0gJyc7XHJcblxyXG5cclxuICAgIHByZXZpb3VzID0gJycgIC8vVVRJTEUgUE9VUiBTQVZPSVIgVkVSUyBRVUVMTEUgUVVFU1RJT04gUkVUT1VSTkVSXHJcblxyXG4gICAgc2hvd1JvdWxhbnQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc2hvd05hdHVyZVBhbm5lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93UmFpc29uUGFubmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dEZXRhaWxzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SW5mb0FjY2lkZW50OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgLy8gZ2V0Um91bGFudChldmVudDphbnkpIHtcclxuICAgIC8vICAgICB0aGlzLl9mb3JtU2VydmljZS5yb3VsYW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLnJvdWxhbnQpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLl9mb3JtU2VydmljZS5yb3VsYW50KSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd1JvdWxhbnQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93RGV0YWlscyA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucHJldmlvdXMgPSAnZ29Ub1JvdWxhbnQnO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBlbHNlIHtcclxuICAgIC8vICAgICB0aGlzLnNob3dSYWlzb25QYW5uZSA9IHRydWU7XHJcbiAgICAvLyAgICAgdGhpcy5zaG93Um91bGFudCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0UmFpc29uKGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLnJhaXNvbk5vblJvdWxhbnQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyAgICAgc3dpdGNoICh0aGlzLl9mb3JtU2VydmljZS5yYWlzb25Ob25Sb3VsYW50KVxyXG4gICAgLy8gICAgIHtcclxuICAgIC8vICAgICAgICAgY2FzZSAnUEFOTkUnOlxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93TmF0dXJlUGFubmUgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIGNhc2UgJ0FDQ0lERU5UJzpcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd0luZm9BY2NpZGVudCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgY2FzZSAnQVVUUkUnOlxyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgdGhpcy5zaG93UmFpc29uUGFubmUgPSBmYWxzZTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRJbXBvcnQoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UuaW1wb3J0ZWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0Rmlyc3RIYW5kKGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmZpcnN0SGFuZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXRLZXlzKGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmNsZXMgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0Q2FybmV0KGV2ZW50OmFueSkge1xyXG4gICAgLy8gICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmNhcm5ldCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyBnZXROYXR1cmUoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UubmF0dXJlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd0RldGFpbHMgPSB0cnVlO1xyXG4gICAgLy8gICAgIHRoaXMuc2hvd05hdHVyZVBhbm5lID0gZmFsc2U7XHJcbiAgICAvLyAgICAgdGhpcy5wcmV2aW91cyA9ICdzaG93TmF0dXJlUGFubmUnO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldFJlc3BvbnNhYmxlQWNjaWRlbnQoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UucmVzcG9uc2FibGVBY2NpZGVudCA9ICBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLnR5cGVBc3N1cmFuY2UgIT0gJycpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93RGV0YWlscyA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd0luZm9BY2NpZGVudCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnByZXZpb3VzID0gJ3Nob3dJbmZvQWNjaWRlbnQnO1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIGdldFR5cGVBc3N1cmFuY2UoZXZlbnQ6YW55KSB7XHJcbiAgICAvLyAgICAgdGhpcy5fZm9ybVNlcnZpY2UudHlwZUFzc3VyYW5jZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIC8vICAgICBpZiAodGhpcy5fZm9ybVNlcnZpY2UucmVzcG9uc2FibGVBY2NpZGVudCAhPSAnJykge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNob3dEZXRhaWxzID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93SW5mb0FjY2lkZW50ID0gZmFsc2U7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMucHJldmlvdXMgPSAnc2hvd0luZm9BY2NpZGVudCc7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgY2hvb3NlUHJldmlvdXMoKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZXZpb3VzKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJldmlvdXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXNlICdzaG93TmF0dXJlUGFubmUnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TmF0dXJlUGFubmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ3Nob3dJbmZvQWNjaWRlbnQnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SW5mb0FjY2lkZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdnb1RvUm91bGFudCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dSb3VsYW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dEZXRhaWxzID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXX0=
