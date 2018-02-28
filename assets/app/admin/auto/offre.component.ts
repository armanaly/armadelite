declare const $ : any;
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core'
import {GridPanelService} from "../grid.service";
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import {AutoDetailsComponent} from "./autoDetails.component";
import {StepService} from "../../Engine/step.service";
import {Http} from "@angular/http";

import {MODELOFFRE} from "./ModelOffre"
import {OffreService} from "./offre.service";
@Component({
    selector: 'offre',
    template: `
        <div>
        <form class="form-horizontal" #offre="ngForm" (ngSubmit)="onSubmit()"  >
            <!-- FAIRE UNE OFFRE D'ACHAT-->
            <div class="form-group"  *ngIf="_details.model.etat_transaction == 1">
                <!--<label for="offre_rachat" class="col-sm-2 control-label" >FAIRE OFFRE</label>-->
                <div class="col-sm-10">
                <input
                myAutofocus
                class="form-control"
                type="text"
                id="offre_rachat"
                name="offre_rachat"
                #offre_rachat>
                    <!--[(ngModel)]="_details.model.offre_rachat" name="offre_rachat"-->
                <!--#offre_rachat="ngModel">-->
            
                <button type="button" (click)="makeOffer(offre_rachat.value)" class="btn btn-default btn-lg">FAIRE OFFRE</button>
                </div>
            </div>
            
            <!-- INDIQUER VEHICULE ACHETE OU NON -->
            <div class="form-group" *ngIf="_details.model.etat_transaction ==  2" >
                <div>OFFRE: {{_details.model.offre_rachat}}</div>
                
               <span>
                    <button type="button" (click)="showFormAchat()" class="btn btn-default btn-lg">ACHETE</button>
                </span>
                <span>
                    <button type="button" (click)="showFormAchat()" class="btn btn-default btn-lg">NON ACHETE</button>
                </span>
            </div>
            
            <!-- INDIQUER PRIX DE VENTE -->
            <div class="form-group" *ngIf="_details.model.etat_transaction == 3" >
                <label for="prix_vente" class="col-sm-2 control-label" >PRIX VENTE</label>
                <div class="col-sm-10">
                    <input 
                    myAutofocus
                    class="form-control"
                    type="text"
                    id="prix_vente"
                    name="prix_vente"
                    value="{{_details.model.prix_vente}}"
                        [(ngModel)]="_details.model.prix_vente" name="prix_vente"
                    #prix_vente="ngModel">
                </div>
                 <div class="modal-footer" align="center">
                <button type="button" class="btn btn-default" data-dismiss="modal" (click)="saveSellingPrice(prix_rachat.value)">Enregistrer</button>
              </div>
                
            </div>

            </form>
              <div class="form-group" *ngIf="_details.model.etat_transaction == 4" >
                <label for="prix_vente" class="col-sm-2 control-label" >PRIX VENTE : {{_details.model.prix_vente}}</label>
               
              <!--</div>-->
                
            </div>          
            
            
        <!-- MODAL INDIQUE PRIX ACHAT-->
        <div  id="achat" class="modal fade" role="dialog">
          <div class="modal-dialog">
        
            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
              </div>
              <div class="modal-body">
                <div class="input-group">
                    <label for="prix_achat">PRIX ACHAT:</label>
                    <span class="input-group-addon">€</span>
                    <input
                    myAutofocus
                    class="form-control"
                    type="text"
                    id="prix_rachat"
                    name="prix_rachat"
                    value="{{_details.model.offre_rachat}}"
                    #prix_rachat>
                </div>
              </div>
              <div class="modal-footer" align="center">
                <button type="button" class="btn btn-default" data-dismiss="modal" (click)="saveBuyingPrice(prix_rachat.value)">Enregistrer</button>
              </div>
            </div>
        
          </div>
        </div>

        <!-- MODAL INDIQUE PRIX DE VENTE-->
        <!--<div  id="vendu" class="modal fade" role="dialog">-->
          <!--<div class="modal-dialog">-->
        <!---->
            <!--&lt;!&ndash; Modal content&ndash;&gt;-->
            <!--<div class="modal-content">-->
              <!--<div class="modal-header">-->
                <!--<button type="button" class="close" data-dismiss="modal">&times;</button>-->
              <!--</div>-->
              <!--<div class="modal-body">-->
                <!--<div class="input-group">-->
                    <!--<label for="prix_vente">PRIX VENTE:</label>-->
                    <!--<span class="input-group-addon">€</span>-->
                    <!--<input-->
                    <!--myAutofocus-->
                    <!--class="form-control"-->
                    <!--type="text"-->
                    <!--id="prix_vente"-->
                    <!--name="prix_vente"-->
                    <!--#prix_vente>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="modal-footer" align="center">-->
                <!--<button type="button" class="btn btn-default" data-dismiss="modal" (click)="saveSellingPrice(prix_vente.value)">Enregistrer</button>-->
              <!--</div>-->
            <!--</div>-->
        <!---->
          <!--</div>-->
        <!--</div>-->

    </div>`
        })

export class OffreComponent{
    constructor(private router: Router, private _details: AutoDetailsComponent, private _offreService: OffreService) {

    }
    ngOnInit() {

        console.log(this._details);
    }

    makeOffer(offre: number){
        console.log('CLICK OFFER')
        console.log(offre)
        this._offreService.makeOffer(offre, this._details.record_details._id)
             .subscribe(data => {
                     console.log(data);
                     let response = data._body;
                     console.log(response)
                     console.log(response.etat)
                     this._details.model.etat_transaction = 2;
                     this._details.model.offre_rachat = offre;
                 },
                 error => console.log(error)
             )
    }

    saveBuyingPrice(price: number){
        console.log(price)
        this._offreService.saveBuyingPrice(price, this._details.record_details._id)
            .subscribe(data => {
                    console.log(data);
                    let response = data._body;
                    console.log(response)
                    console.log(response.etat)
                    this._details.model.etat_transaction = 3;
                },
                error => console.log(error)
            )
    }

    saveSellingPrice(price: number){
        this._offreService.saveSellingPrice(price, this._details.record_details._id)
            .subscribe(data => {
                    this._details.model.etat_transaction = 4;
                    this._details.model.prix_vente = price;
                },
                error => console.log(error)
            )
    }
    showFormAchat(){
        $("#achat").modal('show')
    }
    //
    // showFormSold(){
    //     $("#vendu").modal('show')
    // }
}