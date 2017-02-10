import {Component} from '@angular/core'
import {FormService} from "../components/form.service";

@Component({
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
})

export class StateComponent {

    listPannes = ["Moteur", "Turbo", "Alternateur", "Joint de culasse", "Démarreur", "Distribution", "Boite de vitesse", "Embrayage", "Injecteur", "Autre ou inconnue"];

    constructor(public _formService: FormService) {
    }

    // roulant = '';
    // raisonNonRoulant = '';
    // responsableAccident = '';
    // typeAssurance = '';
    // importee = '';
    // cles = '';
    // firstHand = '';
    // carnet = '';
    // nature= '';


    previous = ''  //UTILE POUR SAVOIR VERS QUELLE QUESTION RETOURNER

    showRoulant: boolean = true;
    showNaturePanne: boolean = false;
    showRaisonPanne: boolean = false;
    showDetails: boolean = false;
    showInfoAccident: boolean = false;

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

    choosePrevious(){
        console.log(this.previous);
        switch (this.previous)
        {
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
}