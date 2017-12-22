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
            console.log(data);
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
                
                
            </div>

            </form>
            
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0by9vZmZyZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBNEU7QUFFNUUsNENBQXlFO0FBQ3pFLG1FQUE2RDtBQUs3RCxtREFBNkM7QUF3SDdDLElBQWEsY0FBYyxHQUEzQjtJQUNJLFlBQW9CLE1BQWMsRUFBVSxRQUE4QixFQUFVLGFBQTJCO1FBQTNGLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFzQjtRQUFVLGtCQUFhLEdBQWIsYUFBYSxDQUFjO0lBRS9HLENBQUM7SUFDRCxRQUFRO1FBRUosT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFhO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNsQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2FBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1YsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFhO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUN0RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQzthQUN2RSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUNELGFBQWE7UUFDVCxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzdCLENBQUM7Q0FLSixDQUFBO0FBdERZLGNBQWM7SUF2SDFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQWtISDtLQUNGLENBQUM7cUNBR3NCLGVBQU0sRUFBb0IsNENBQW9CLEVBQXlCLDRCQUFZO0dBRHRHLGNBQWMsQ0FzRDFCO0FBdERZLHdDQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0by9vZmZyZS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIGNvbnN0ICQgOiBhbnk7XHJcbmltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtBdXRvRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vYXV0b0RldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7TU9ERUxPRkZSRX0gZnJvbSBcIi4vTW9kZWxPZmZyZVwiXHJcbmltcG9ydCB7T2ZmcmVTZXJ2aWNlfSBmcm9tIFwiLi9vZmZyZS5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdvZmZyZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGZvcm0gY2xhc3M9XCJmb3JtLWhvcml6b250YWxcIiAjb2ZmcmU9XCJuZ0Zvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiICA+XHJcbiAgICAgICAgICAgIDwhLS0gRkFJUkUgVU5FIE9GRlJFIEQnQUNIQVQtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIiAgKm5nSWY9XCJfZGV0YWlscy5tb2RlbC5ldGF0X3RyYW5zYWN0aW9uID09IDFcIj5cclxuICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgZm9yPVwib2ZmcmVfcmFjaGF0XCIgY2xhc3M9XCJjb2wtc20tMiBjb250cm9sLWxhYmVsXCIgPkZBSVJFIE9GRlJFPC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tMTBcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGlkPVwib2ZmcmVfcmFjaGF0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJvZmZyZV9yYWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgI29mZnJlX3JhY2hhdD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tWyhuZ01vZGVsKV09XCJfZGV0YWlscy5tb2RlbC5vZmZyZV9yYWNoYXRcIiBuYW1lPVwib2ZmcmVfcmFjaGF0XCItLT5cclxuICAgICAgICAgICAgICAgIDwhLS0jb2ZmcmVfcmFjaGF0PVwibmdNb2RlbFwiPi0tPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJtYWtlT2ZmZXIob2ZmcmVfcmFjaGF0LnZhbHVlKVwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1sZ1wiPkZBSVJFIE9GRlJFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIElORElRVUVSIFZFSElDVUxFIEFDSEVURSBPVSBOT04gLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCIgKm5nSWY9XCJfZGV0YWlscy5tb2RlbC5ldGF0X3RyYW5zYWN0aW9uID09ICAyXCIgPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5PRkZSRToge3tfZGV0YWlscy5tb2RlbC5vZmZyZV9yYWNoYXR9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzaG93Rm9ybUFjaGF0KClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj5BQ0hFVEU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzaG93Rm9ybUFjaGF0KClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIj5OT04gQUNIRVRFPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBJTkRJUVVFUiBQUklYIERFIFZFTlRFIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiICpuZ0lmPVwiX2RldGFpbHMubW9kZWwuZXRhdF90cmFuc2FjdGlvbiA9PSAzXCIgPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaXhfdmVudGVcIiBjbGFzcz1cImNvbC1zbS0yIGNvbnRyb2wtbGFiZWxcIiA+UFJJWCBWRU5URTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cInByaXhfdmVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml4X3ZlbnRlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7X2RldGFpbHMubW9kZWwucHJpeF92ZW50ZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJfZGV0YWlscy5tb2RlbC5wcml4X3ZlbnRlXCIgbmFtZT1cInByaXhfdmVudGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICNwcml4X3ZlbnRlPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPCEtLSBNT0RBTCBJTkRJUVVFIFBSSVggQUNIQVQtLT5cclxuICAgICAgICA8ZGl2ICBpZD1cImFjaGF0XCIgY2xhc3M9XCJtb2RhbCBmYWRlXCIgcm9sZT1cImRpYWxvZ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIGNvbnRlbnQtLT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcml4X2FjaGF0XCI+UFJJWCBBQ0hBVDo8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYWRkb25cIj7igqw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicHJpeF9yYWNoYXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwcml4X3JhY2hhdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e19kZXRhaWxzLm1vZGVsLm9mZnJlX3JhY2hhdH19XCJcclxuICAgICAgICAgICAgICAgICAgICAjcHJpeF9yYWNoYXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiAoY2xpY2spPVwic2F2ZUJ1eWluZ1ByaWNlKHByaXhfcmFjaGF0LnZhbHVlKVwiPkVucmVnaXN0cmVyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwhLS0gTU9EQUwgSU5ESVFVRSBQUklYIERFIFZFTlRFLS0+XHJcbiAgICAgICAgPCEtLTxkaXYgIGlkPVwidmVuZHVcIiBjbGFzcz1cIm1vZGFsIGZhZGVcIiByb2xlPVwiZGlhbG9nXCI+LS0+XHJcbiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPi0tPlxyXG4gICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyBNb2RhbCBjb250ZW50Jm5kYXNoOyZndDstLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+LS0+XHJcbiAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4mdGltZXM7PC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwibW9kYWwtYm9keVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgZm9yPVwicHJpeF92ZW50ZVwiPlBSSVggVkVOVEU6PC9sYWJlbD4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC1hZGRvblwiPuKCrDwvc3Bhbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGlucHV0LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLW15QXV0b2ZvY3VzLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cInByaXhfdmVudGVcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwicHJpeF92ZW50ZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSNwcml4X3ZlbnRlPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWZvb3RlclwiIGFsaWduPVwiY2VudGVyXCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIChjbGljayk9XCJzYXZlU2VsbGluZ1ByaWNlKHByaXhfdmVudGUudmFsdWUpXCI+RW5yZWdpc3RyZXI8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG5cclxuICAgIDwvZGl2PmBcclxuICAgICAgICB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE9mZnJlQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZGV0YWlsczogQXV0b0RldGFpbHNDb21wb25lbnQsIHByaXZhdGUgX29mZnJlU2VydmljZTogT2ZmcmVTZXJ2aWNlKSB7XHJcblxyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2RldGFpbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VPZmZlcihvZmZyZTogbnVtYmVyKXtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ0xJQ0sgT0ZGRVInKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG9mZnJlKVxyXG4gICAgICAgIHRoaXMuX29mZnJlU2VydmljZS5tYWtlT2ZmZXIob2ZmcmUsIHRoaXMuX2RldGFpbHMucmVjb3JkX2RldGFpbHMuX2lkKVxyXG4gICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZSA9IGRhdGEuX2JvZHk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5ldGF0KVxyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLl9kZXRhaWxzLm1vZGVsLmV0YXRfdHJhbnNhY3Rpb24gPSAyO1xyXG4gICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgc2F2ZUJ1eWluZ1ByaWNlKHByaWNlOiBudW1iZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHByaWNlKVxyXG4gICAgICAgIHRoaXMuX29mZnJlU2VydmljZS5zYXZlQnV5aW5nUHJpY2UocHJpY2UsIHRoaXMuX2RldGFpbHMucmVjb3JkX2RldGFpbHMuX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0gZGF0YS5fYm9keTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmV0YXQpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZGV0YWlscy5tb2RlbC5ldGF0X3RyYW5zYWN0aW9uID0gMztcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHNhdmVTZWxsaW5nUHJpY2UocHJpY2U6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5fb2ZmcmVTZXJ2aWNlLnNhdmVTZWxsaW5nUHJpY2UocHJpY2UsIHRoaXMuX2RldGFpbHMucmVjb3JkX2RldGFpbHMuX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RldGFpbHMubW9kZWwuZXRhdF90cmFuc2FjdGlvbiA9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgc2hvd0Zvcm1BY2hhdCgpe1xyXG4gICAgICAgICQoXCIjYWNoYXRcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIC8vIHNob3dGb3JtU29sZCgpe1xyXG4gICAgLy8gICAgICQoXCIjdmVuZHVcIikubW9kYWwoJ3Nob3cnKVxyXG4gICAgLy8gfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
