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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const autoDetails_component_1 = require("./autoDetails.component");
const offre_service_1 = require("./offre.service");
let OffreComponent = class OffreComponent {
    constructor(router, _details, _offreService) {
        this.router = router;
        this._details = _details;
        this._offreService = _offreService;
    }
    ngOnInit() {
        console.log(this._details);
    }
    makeOffer(offre) {
        console.log('CLICK OFFER');
        console.log(offre);
        this._offreService.makeOffer(offre, this._details.record_details._id)
            .subscribe(data => {
            console.log(data);
            let response = data._body;
            console.log(response);
            console.log(response.etat);
            this._details.model.etat_transaction = 2;
            this._details.model.offre_rachat = offre;
        }, error => console.log(error));
    }
    saveBuyingPrice(price) {
        console.log(price);
        this._offreService.saveBuyingPrice(price, this._details.record_details._id)
            .subscribe(data => {
            console.log(data);
            let response = data._body;
            console.log(response);
            console.log(response.etat);
            this._details.model.etat_transaction = 3;
        }, error => console.log(error));
    }
    saveSellingPrice(price) {
        this._offreService.saveSellingPrice(price, this._details.record_details._id)
            .subscribe(data => {
            this._details.model.etat_transaction = 4;
            this._details.model.prix_vente = price;
        }, error => console.log(error));
    }
    showFormAchat() {
        $("#achat").modal('show');
    }
};
OffreComponent = __decorate([
    core_1.Component({
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
    }),
    __metadata("design:paramtypes", [router_1.Router, autoDetails_component_1.AutoDetailsComponent, offre_service_1.OffreService])
], OffreComponent);
exports.OffreComponent = OffreComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2F1dG8vb2ZmcmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esd0NBQTRFO0FBRTVFLDRDQUF5RTtBQUN6RSxtRUFBNkQ7QUFLN0QsbURBQTZDO0FBaUk3QyxJQUFhLGNBQWMsR0FBM0I7SUFDSSxZQUFvQixNQUFjLEVBQVUsUUFBOEIsRUFBVSxhQUEyQjtRQUEzRixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBYztJQUUvRyxDQUFDO0lBQ0QsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUMvRCxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM3QyxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1YsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUN0RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMzQyxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUNELGFBQWE7UUFDVCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzdCLENBQUM7Q0FLSixDQUFBO0FBdkRZLGNBQWM7SUFoSTFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQTJISDtLQUNGLENBQUM7cUNBR3NCLGVBQU0sRUFBb0IsNENBQW9CLEVBQXlCLDRCQUFZO0dBRHRHLGNBQWMsQ0F1RDFCO0FBdkRZLHdDQUFjIiwiZmlsZSI6ImFkbWluL2F1dG8vb2ZmcmUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCAkIDogYW55O1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7QXV0b0RldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2F1dG9EZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcblxyXG5pbXBvcnQge01PREVMT0ZGUkV9IGZyb20gXCIuL01vZGVsT2ZmcmVcIlxyXG5pbXBvcnQge09mZnJlU2VydmljZX0gZnJvbSBcIi4vb2ZmcmUuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnb2ZmcmUnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybS1ob3Jpem9udGFsXCIgI29mZnJlPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIiAgPlxyXG4gICAgICAgICAgICA8IS0tIEZBSVJFIFVORSBPRkZSRSBEJ0FDSEFULS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgICpuZ0lmPVwiX2RldGFpbHMubW9kZWwuZXRhdF90cmFuc2FjdGlvbiA9PSAxXCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGxhYmVsIGZvcj1cIm9mZnJlX3JhY2hhdFwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5GQUlSRSBPRkZSRTwvbGFiZWw+LS0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cIm9mZnJlX3JhY2hhdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwib2ZmcmVfcmFjaGF0XCJcclxuICAgICAgICAgICAgICAgICNvZmZyZV9yYWNoYXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLVsobmdNb2RlbCldPVwiX2RldGFpbHMubW9kZWwub2ZmcmVfcmFjaGF0XCIgbmFtZT1cIm9mZnJlX3JhY2hhdFwiLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tI29mZnJlX3JhY2hhdD1cIm5nTW9kZWxcIj4tLT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwibWFrZU9mZmVyKG9mZnJlX3JhY2hhdC52YWx1ZSlcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj5GQUlSRSBPRkZSRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBJTkRJUVVFUiBWRUhJQ1VMRSBBQ0hFVEUgT1UgTk9OIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICpuZ0lmPVwiX2RldGFpbHMubW9kZWwuZXRhdF90cmFuc2FjdGlvbiA9PSAgMlwiID5cclxuICAgICAgICAgICAgICAgIDxkaXY+T0ZGUkU6IHt7X2RldGFpbHMubW9kZWwub2ZmcmVfcmFjaGF0fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2hvd0Zvcm1BY2hhdCgpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXCI+QUNIRVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2hvd0Zvcm1BY2hhdCgpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXCI+Tk9OIEFDSEVURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gSU5ESVFVRVIgUFJJWCBERSBWRU5URSAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cIl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPT0gM1wiID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcml4X3ZlbnRlXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPlBSSVggVkVOVEU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcml4X3ZlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJpeF92ZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19kZXRhaWxzLm1vZGVsLnByaXhfdmVudGV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiX2RldGFpbHMubW9kZWwucHJpeF92ZW50ZVwiIG5hbWU9XCJwcml4X3ZlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICAjcHJpeF92ZW50ZT1cIm5nTW9kZWxcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJzYXZlU2VsbGluZ1ByaWNlKHByaXhfcmFjaGF0LnZhbHVlKVwiPkVucmVnaXN0cmVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cIl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPT0gNFwiID5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcml4X3ZlbnRlXCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPlBSSVggVkVOVEUgOiB7e19kZXRhaWxzLm1vZGVsLnByaXhfdmVudGV9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8IS0tIE1PREFMIElORElRVUUgUFJJWCBBQ0hBVC0tPlxyXG4gICAgICAgIDxkaXYgIGlkPVwiYWNoYXRcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gTW9kYWwgY29udGVudC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaXhfYWNoYXRcIj5QUklYIEFDSEFUOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPuKCrDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcml4X3JhY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaXhfcmFjaGF0XCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X2RldGFpbHMubW9kZWwub2ZmcmVfcmFjaGF0fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICNwcml4X3JhY2hhdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJzYXZlQnV5aW5nUHJpY2UocHJpeF9yYWNoYXQudmFsdWUpXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLSBNT0RBTCBJTkRJUVVFIFBSSVggREUgVkVOVEUtLT5cclxuICAgICAgICA8IS0tPGRpdiAgaWQ9XCJ2ZW5kdVwiIGNsYXNzPVwibW9kYWwgZmFkZVwiIHJvbGU9XCJkaWFsb2dcIj4tLT5cclxuICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwibW9kYWwtZGlhbG9nXCI+LS0+XHJcbiAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IE1vZGFsIGNvbnRlbnQmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj4tLT5cclxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiZ0aW1lczs8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBmb3I9XCJwcml4X3ZlbnRlXCI+UFJJWCBWRU5URTo8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLWFkZG9uXCI+4oKsPC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tbXlBdXRvZm9jdXMtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwidGV4dFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwicHJpeF92ZW50ZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJwcml4X3ZlbnRlXCItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tI3ByaXhfdmVudGU+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCIgYWxpZ249XCJjZW50ZXJcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgKGNsaWNrKT1cInNhdmVTZWxsaW5nUHJpY2UocHJpeF92ZW50ZS52YWx1ZSlcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICA8IS0tPC9kaXY+LS0+XHJcblxyXG4gICAgPC9kaXY+YFxyXG4gICAgICAgIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgT2ZmcmVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9kZXRhaWxzOiBBdXRvRGV0YWlsc0NvbXBvbmVudCwgcHJpdmF0ZSBfb2ZmcmVTZXJ2aWNlOiBPZmZyZVNlcnZpY2UpIHtcclxuXHJcbiAgICB9XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZGV0YWlscyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZU9mZmVyKG9mZnJlOiBudW1iZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDTElDSyBPRkZFUicpXHJcbiAgICAgICAgY29uc29sZS5sb2cob2ZmcmUpXHJcbiAgICAgICAgdGhpcy5fb2ZmcmVTZXJ2aWNlLm1ha2VPZmZlcihvZmZyZSwgdGhpcy5fZGV0YWlscy5yZWNvcmRfZGV0YWlscy5faWQpXHJcbiAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZGF0YS5fYm9keTtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmV0YXQpXHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RldGFpbHMubW9kZWwuZXRhdF90cmFuc2FjdGlvbiA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2RldGFpbHMubW9kZWwub2ZmcmVfcmFjaGF0ID0gb2ZmcmU7XHJcbiAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlQnV5aW5nUHJpY2UocHJpY2U6IG51bWJlcil7XHJcbiAgICAgICAgY29uc29sZS5sb2cocHJpY2UpXHJcbiAgICAgICAgdGhpcy5fb2ZmcmVTZXJ2aWNlLnNhdmVCdXlpbmdQcmljZShwcmljZSwgdGhpcy5fZGV0YWlscy5yZWNvcmRfZGV0YWlscy5faWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZGF0YS5fYm9keTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5ldGF0KVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RldGFpbHMubW9kZWwuZXRhdF90cmFuc2FjdGlvbiA9IDM7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBzYXZlU2VsbGluZ1ByaWNlKHByaWNlOiBudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuX29mZnJlU2VydmljZS5zYXZlU2VsbGluZ1ByaWNlKHByaWNlLCB0aGlzLl9kZXRhaWxzLnJlY29yZF9kZXRhaWxzLl9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RldGFpbHMubW9kZWwucHJpeF92ZW50ZSA9IHByaWNlO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICBzaG93Rm9ybUFjaGF0KCl7XHJcbiAgICAgICAgJChcIiNhY2hhdFwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gc2hvd0Zvcm1Tb2xkKCl7XHJcbiAgICAvLyAgICAgJChcIiN2ZW5kdVwiKS5tb2RhbCgnc2hvdycpXHJcbiAgICAvLyB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
