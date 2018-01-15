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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0by9vZmZyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBNEU7QUFFNUUsNENBQXlFO0FBQ3pFLG1FQUE2RDtBQUs3RCxtREFBNkM7QUFpSTdDLElBQWEsY0FBYyxHQUEzQjtJQUNJLFlBQW9CLE1BQWMsRUFBVSxRQUE4QixFQUFVLGFBQTJCO1FBQTNGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBRS9HLENBQUM7SUFDRCxRQUFRO1FBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2FBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzdDLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVixDQUFDO0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2FBQ3RFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWE7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2FBQ3ZFLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzNDLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBQ0QsYUFBYTtRQUNULENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDN0IsQ0FBQztDQUtKLENBQUE7QUF2RFksY0FBYztJQWhJMUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBMkhIO0tBQ0YsQ0FBQztxQ0FHc0IsZUFBTSxFQUFvQiw0Q0FBb0IsRUFBeUIsNEJBQVk7R0FEdEcsY0FBYyxDQXVEMUI7QUF2RFksd0NBQWMiLCJmaWxlIjoiY29tcG9uZW50cy9hdXRvL29mZnJlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgJCA6IGFueTtcclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0F1dG9EZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRvRGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uLy4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5cclxuaW1wb3J0IHtNT0RFTE9GRlJFfSBmcm9tIFwiLi9Nb2RlbE9mZnJlXCJcclxuaW1wb3J0IHtPZmZyZVNlcnZpY2V9IGZyb20gXCIuL29mZnJlLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ29mZnJlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0taG9yaXpvbnRhbFwiICNvZmZyZT1cIm5nRm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCIgID5cclxuICAgICAgICAgICAgPCEtLSBGQUlSRSBVTkUgT0ZGUkUgRCdBQ0hBVC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICAqbmdJZj1cIl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxsYWJlbCBmb3I9XCJvZmZyZV9yYWNoYXRcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+RkFJUkUgT0ZGUkU8L2xhYmVsPi0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICBteUF1dG9mb2N1c1xyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJvZmZyZV9yYWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cIm9mZnJlX3JhY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAjb2ZmcmVfcmFjaGF0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1bKG5nTW9kZWwpXT1cIl9kZXRhaWxzLm1vZGVsLm9mZnJlX3JhY2hhdFwiIG5hbWU9XCJvZmZyZV9yYWNoYXRcIi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLSNvZmZyZV9yYWNoYXQ9XCJuZ01vZGVsXCI+LS0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cIm1ha2VPZmZlcihvZmZyZV9yYWNoYXQudmFsdWUpXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWxnXCI+RkFJUkUgT0ZGUkU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gSU5ESVFVRVIgVkVISUNVTEUgQUNIRVRFIE9VIE5PTiAtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAqbmdJZj1cIl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPT0gIDJcIiA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2Pk9GRlJFOiB7e19kZXRhaWxzLm1vZGVsLm9mZnJlX3JhY2hhdH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dGb3JtQWNoYXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPkFDSEVURTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dGb3JtQWNoYXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPk5PTiBBQ0hFVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIElORElRVUVSIFBSSVggREUgVkVOVEUgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJfZGV0YWlscy5tb2RlbC5ldGF0X3RyYW5zYWN0aW9uID09IDNcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpeF92ZW50ZVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5QUklYIFZFTlRFPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicHJpeF92ZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInByaXhfdmVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tfZGV0YWlscy5tb2RlbC5wcml4X3ZlbnRlfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cIl9kZXRhaWxzLm1vZGVsLnByaXhfdmVudGVcIiBuYW1lPVwicHJpeF92ZW50ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgI3ByaXhfdmVudGU9XCJuZ01vZGVsXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiAoY2xpY2spPVwic2F2ZVNlbGxpbmdQcmljZShwcml4X3JhY2hhdC52YWx1ZSlcIj5FbnJlZ2lzdHJlcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJfZGV0YWlscy5tb2RlbC5ldGF0X3RyYW5zYWN0aW9uID09IDRcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpeF92ZW50ZVwiIGNsYXNzPVwiY29sLXNtLTIgY29udHJvbC1sYWJlbFwiID5QUklYIFZFTlRFIDoge3tfZGV0YWlscy5tb2RlbC5wcml4X3ZlbnRlfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPCEtLSBNT0RBTCBJTkRJUVVFIFBSSVggQUNIQVQtLT5cclxuICAgICAgICA8ZGl2ICBpZD1cImFjaGF0XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcml4X2FjaGF0XCI+UFJJWCBBQ0hBVDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj7igqw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicHJpeF9yYWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml4X3JhY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19kZXRhaWxzLm1vZGVsLm9mZnJlX3JhY2hhdH19XCJcclxuICAgICAgICAgICAgICAgICAgICAjcHJpeF9yYWNoYXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiAoY2xpY2spPVwic2F2ZUJ1eWluZ1ByaWNlKHByaXhfcmFjaGF0LnZhbHVlKVwiPkVucmVnaXN0cmVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gTU9EQUwgSU5ESVFVRSBQUklYIERFIFZFTlRFLS0+XHJcbiAgICAgICAgPCEtLTxkaXYgIGlkPVwidmVuZHVcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+LS0+XHJcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPi0tPlxyXG4gICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyBNb2RhbCBjb250ZW50Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+LS0+XHJcbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgZm9yPVwicHJpeF92ZW50ZVwiPlBSSVggVkVOVEU6PC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPuKCrDwvc3Bhbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLW15QXV0b2ZvY3VzLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cInByaXhfdmVudGVcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwicHJpeF92ZW50ZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNwcml4X3ZlbnRlPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJzYXZlU2VsbGluZ1ByaWNlKHByaXhfdmVudGUudmFsdWUpXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG5cclxuICAgIDwvZGl2PmBcclxuICAgICAgICB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9mZnJlQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZGV0YWlsczogQXV0b0RldGFpbHNDb21wb25lbnQsIHByaXZhdGUgX29mZnJlU2VydmljZTogT2ZmcmVTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VPZmZlcihvZmZyZTogbnVtYmVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ0xJQ0sgT0ZGRVInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9mZnJlKVxyXG4gICAgICAgIHRoaXMuX29mZnJlU2VydmljZS5tYWtlT2ZmZXIob2ZmcmUsIHRoaXMuX2RldGFpbHMucmVjb3JkX2RldGFpbHMuX2lkKVxyXG4gICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGRhdGEuX2JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5ldGF0KVxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXRhaWxzLm1vZGVsLm9mZnJlX3JhY2hhdCA9IG9mZnJlO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUJ1eWluZ1ByaWNlKHByaWNlOiBudW1iZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByaWNlKVxyXG4gICAgICAgIHRoaXMuX29mZnJlU2VydmljZS5zYXZlQnV5aW5nUHJpY2UocHJpY2UsIHRoaXMuX2RldGFpbHMucmVjb3JkX2RldGFpbHMuX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGRhdGEuX2JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZXRhdClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPSAzO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZVNlbGxpbmdQcmljZShwcmljZTogbnVtYmVyKXtcclxuICAgICAgICB0aGlzLl9vZmZyZVNlcnZpY2Uuc2F2ZVNlbGxpbmdQcmljZShwcmljZSwgdGhpcy5fZGV0YWlscy5yZWNvcmRfZGV0YWlscy5faWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGV0YWlscy5tb2RlbC5ldGF0X3RyYW5zYWN0aW9uID0gNDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXRhaWxzLm1vZGVsLnByaXhfdmVudGUgPSBwcmljZTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgc2hvd0Zvcm1BY2hhdCgpe1xyXG4gICAgICAgICQoXCIjYWNoYXRcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIC8vIHNob3dGb3JtU29sZCgpe1xyXG4gICAgLy8gICAgICQoXCIjdmVuZHVcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgLy8gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
