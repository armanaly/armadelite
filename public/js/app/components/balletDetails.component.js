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
const gridPanel_service_1 = require("./gridPanel.service");
const router_1 = require('@angular/router');
const step_service_1 = require("../Engine/step.service");
const http_1 = require("@angular/http");
const balletDetails_service_1 = require("./balletDetails.service");
let BalletDetailsComponent = class BalletDetailsComponent {
    constructor(_stepService, _gridService, router, _balletDetailsService, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this._balletDetailsService = _balletDetailsService;
        this.route = route;
        this._http = _http;
        this.list_options = [];
        this.display = false;
        this.details = false;
        this.images_to_show = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record'];
        });
        console.log(this.obj_id);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
            console.log(data);
            this.record_details = data;
            this.display = true;
        }, error => console.log(error));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goToCurrentStep(item) {
        console.log(item);
        let navigationExtras = {
            queryParams: { 'current_id': item.step_id, '_id': item._id }
        };
        this.router.navigate(['/step'], navigationExtras);
    }
    isObject(item) {
        return (typeof item === "object" && !Array.isArray(item) && item !== null);
    }
};
BalletDetailsComponent = __decorate([
    core_1.Component({
        selector: 'grid-details',
        template: `
              <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:16px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;border-top-width:1px;border-bottom-width:1px;}
.tg th{font-family:Arial, sans-serif;font-size:16px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;border-top-width:1px;border-bottom-width:1px;}
.tg .tg-bn4o{font-weight:bold;font-size:18px;text-align:center;vertical-align:top}
.tg .tg-txgi{font-weight:bold;font-family:"Trebuchet MS", Helvetica, sans-serif !important;;background-color:#efefef;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-qjv7{background-color:#D2E4FC;font-size:18px;vertical-align:top}
.tg .tg-yw4l{vertical-align:top}
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}</style>
              
              
  <!--<previous-page></previous-page>-->
  <nav class="form-navArrow">
            <button (click)="this.router.navigate(['/menu'])"><i class="glyphicon glyphicon-triangle-left"> Retour</i></button>
  </nav>
  
    <div class="panel-body" *ngIf="display">

       
  <!-- Nav tabs -->
  <ul class="nav nav-tabs" role="tablist">
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Details</a></li>
    <li role="presentation"><a href="#notes" aria-controls="notes" role="tab" data-toggle="tab">Notes</a></li>
    
    <!--<li role="presentation"><a href="#photos" aria-controls="photos" role="tab" data-toggle="tab"  *ngIf="images_to_show">Photos</a></li>-->
    <!--<li role="presentation"><a href="#admin" aria-controls="admin" role="tab" data-toggle="tab">Détails administratifs</a></li>-->
    <!--<li role="presentation"><a href="#tech" aria-controls="tech" role="tab" data-toggle="tab">Caractéristiques techniques</a></li>-->
  </ul>
                  
        <div class="tab-content">  
            
            <!-- TAB ALL INFOS -->
            <div role="tabpanel" class="tab-pane active" id="home">
                 
                <div class="tg-wrap">
                    <table class="tg">
                      <tr>
                        <th></th>
                        <th class="tg-bn4o" colspan="3">{{record_details.profile[0].nom}} {{record_details.profile[1].firstname}} </th>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Birthday</td>
                        <td class="tg-6k2t"></td>
                        <td class="tg-txgi">Age</td>
                        <td class="tg-6k2t">{{record_details.age}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Country</td>
                        <td class="tg-6k2t">{{record_details.profile[4].country}}</td>
                        <td class="tg-txgi">City</td>
                        <td class="tg-6k2t">{{record_details.profile[5].city}}</td>
                      </tr>
                      <tr>
                        <th class="tg-yw4l"><span class="glyphicon glyphicon-earphone"> {{record_details.profile[2].phone}}</span></th><td class="tg-txgi"></td>
                        <th class="tg-yw4l"><span class="glyphicon glyphicon-envelope"> {{record_details.profile[3].email}}</span></th>
                      </tr>
                     
                     <!--<tr>-->
                        <!--<td class="tg-txgi">Portes</td>-->
                        <!--<td class="tg-6k2t">{{record_details.nbportesSelected}}</td>-->
                      <!--</tr>-->
                     <!---->
                      <!--<tr>      -->
                        <!--<td colspan="4"></td>-->
                      <!--</tr>-->
                      <!---->
                      <!--<tr>-->
                        <!--<th class="tg-yw4l" align="center"  colspan="3">{{record_details.profile[0].nom}}</th> -->
                        <!--<th class="tg-yw4l"><span class="glyphicon glyphicon-earphone"> {{record_details.profile[2].tel}}</span></th>-->
                      <!--</tr>-->
                  <!---->
                      <!--<tr>-->
                        <!--<td class="tg-txgi"  colspan="3">Code Postal {{record_details.profile[1].adresse}}</td>-->
                    <!---->
                        <!---->
                  <!---->
                       <!--</tr>-->
                      <!--<tr><td colspan="4"></td></tr>-->
                      <!---->
                      <!---->
                      <!--<tr>-->
                        <!---->
                        <!--<td class="tg-txgi">Valeur catalogue</td>-->
                        <!--<td class="tg-6k2t" *ngIf="details" >{{tech_details.prix}}</td>-->
                      <!--</tr>-->
                         <!--<tr>-->
                        <!--<td class="tg-txgi" *ngIf="record_details.premiere_main == 'OUI'">Première main</td>-->
                        <!--<td class="tg-txgi" *ngIf="record_details.premiere_main == 'NON'">Seconde main</td>-->
                        <!--<td class="tg-6k2t" ><span class="glyphicon glyphicon-ok"></span></td>-->
                        <!--<td class="tg-txgi" *ngIf="record_details.import == 'OUI'">Importé</td>-->
                        <!--<td class="tg-6k2t" *ngIf="record_details.import == 'OUI'"><span class="glyphicon glyphicon-ok"></span></td>-->
                      <!--</tr>-->
                      <!--<tr>-->
                        <!--<td class="tg-txgi" >Clés</td>-->
                        <!--<td class="tg-6k2t" >{{record_details.cle}}</td>-->
                        <!--<td class="tg-txgi" *ngIf="record_details.carnet == 'OUI'">Carnet d'entretien</td>-->
                        <!--<td class="tg-6k2t" *ngIf="record_details.carnet == 'OUI'"><span class="glyphicon glyphicon-ok"></span></td>-->
                        <!---->
                      <!--</tr>-->
                       <!--<tr *ngIf="record_details.options_voiture.length > 0">-->
                        <!--<td class="tg-txgi">Options</td>-->
                        <!--<td class="tg-6k2t" colspan="3"> <ul class="items">-->
                                                    <!--<li *ngFor="let options_voiture of record_details.options_voiture">-->
                                                        <!--{{options_voiture}}  -->
                                                    <!--</li>-->
                                                <!--</ul></td>-->
                      <!--</tr>-->
                    </table>
                </div>
                </div>
                
            <!-- NOTES -->
            <div role="tabpanel" class="tab-pane" id="notes" >
                <textarea rows="100" cols="500">
                    {{record_details.age }}
                </textarea>
            </div>
            
                              <!---->
            <!--</div>-->
                    <!---->
            <!--&lt;!&ndash; INFOS CONTACT&ndash;&gt;-->
            <!--<div role="tabpanel" class="tab-pane" id="contact">-->
                    <!--<div class="tg-wrap"><table class="tg">-->
                  <!--<tr>-->
                    <!--<th class="tg-031e">Nom</th>-->
                    <!--<th class="tg-yw4l">{{record_details.profile[0].nom}}</th>-->
                  <!--</tr>-->
                  <!--<tr>-->
                    <!--<td class="tg-031e">Code Postal</td>-->
                    <!--<td class="tg-yw4l">{{record_details.profile[1].adresse}}</td>-->
                  <!--</tr>-->
                  <!--<tr>-->
                    <!--<td class="tg-031e">Téléphone</td>-->
                    <!--<td class="tg-yw4l">{{record_details.profile[2].tel}}</td>-->
                  <!--</tr>-->
                  <!--<tr>-->
                    <!--<td class="tg-031e">Email</td>-->
                    <!--<td class="tg-yw4l">{{record_details.profile[3].email}}</td>-->
                  <!--</tr>-->
                <!--</table></div>-->
                    <!---->
            <!--</div>-->
                      <!---->
            <!--&lt;!&ndash; PHOTOS VEHICULE &ndash;&gt;-->
            <!--<div role="tabpanel" class="tab-pane" id="photos" *ngIf="images_to_show">-->
                <!--<img class="img-thumbnail"  src="{{record_details.fileDetails[0].file_url}}" width="480" height="320">-->
                <!--<br>-->
                <!--<img class="img-responsive" src="{{record_details.fileDetails[1].file_url}}" width="480" height="320">-->
                <!---->
                <!--<img class="img-responsive" src="{{record_details.fileDetails[2].file_url}}" width="480" height="320">-->
                <!--<img class="img-responsive" src="{{record_details.fileDetails[3].file_url}}" width="480" height="320">-->
                <!--<img class="img-responsive" src="{{record_details.fileDetails[4].file_url}}" width="480" height="320">-->
            <!--</div>-->

            <!--&lt;!&ndash; INFO ADMINISTRATIVES&ndash;&gt;-->
            <!--<div role="tabpanel" class="tab-pane" id="admin">          -->
                <!--<div class="row">-->
                    <!--<div class="col-md-6">: {{record_details.premiere_main}}</div>-->
                    <!--<div class="col-md-6">Importé: {{record_details.import}}</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="row">-->
                    <!--<div class="col-md-6">Carnet d'entretien: {{record_details.carnet}}</div>-->
                    <!--<div class="col-md-6">Clés: {{record_details.cle}}</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="row" *ngIf="record_details.roule == 'NON'">-->
                    <!--<div *ngIf="record_details.accident == OUI"> -->
                        <!--Véhicule accidenté<br>-->
                        <!--Raison: {{record_details.accident}}-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
            <!---->
            <!--&lt;!&ndash; INFO TECHNIQUES &ndash;&gt;-->
            <!--<div role="tabpanel" class="tab-pane" id="tech">-->
                <!--<div class="row">-->
                    <!--<div class="col-md-6">: {{record_details.premiere_main}}</div>-->
                    <!--<div class="col-md-6">Importé: {{record_details.import}}</div>-->
                <!--</div>-->
                <!---->
                <!--<div class="row">-->
                    <!--<div class="col-md-6">Carnet d'entretien: {{record_details.carnet}}</div>-->
                    <!--<div class="col-md-6">Clés: {{record_details.cle}}</div>-->
                <!--</div>-->
                      <!---->
        </div>
            

    </div>
`
    }), 
    __metadata('design:paramtypes', [step_service_1.StepService, gridPanel_service_1.GridPanelService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, balletDetails_service_1.BalletDetailsService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
], BalletDetailsComponent);
exports.BalletDetailsComponent = BalletDetailsComponent;
var _a, _b, _c;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0RGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLG9DQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHlCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyx3Q0FBbUMseUJBQXlCLENBQUMsQ0FBQTtBQXdNN0Q7SUFHSSxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixxQkFBMkMsRUFBUyxLQUFxQixFQUFVLEtBQVc7UUFEOUYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFLbEgsaUJBQVksR0FBRSxFQUFFLENBQUM7UUFFakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBVjZGLENBQUM7SUFZckgsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHbkMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBRTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZUFBZSxDQUFDLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7QUFRTCxDQUFDO0FBdFFEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrTWI7S0FDQSxDQUFDOzswQkFBQTtBQUVXLDhCQUFzQix5QkErRGxDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWxsZXREZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7R3JpZERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9ncmlkRGV0YWlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2JhbGxldERldGFpbHMuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1kZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XHJcbi50ZyB0ZHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojNDQ0O2JhY2tncm91bmQtY29sb3I6I0Y3RkRGQTtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XHJcbi50ZyB0aHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpub3JtYWw7cGFkZGluZzoxMHB4IDVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjBweDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpub3JtYWw7Ym9yZGVyLWNvbG9yOiM5OTk7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyNkFERTQ7Ym9yZGVyLXRvcC13aWR0aDoxcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7fVxyXG4udGcgLnRnLWJuNG97Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MThweDt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctdHhnaXtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50OztiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLTZrMnR7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy1xanY3e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQztmb250LXNpemU6MThweDt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGcteXc0bHt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsudGcge3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fS50ZyBjb2wge3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fS50Zy13cmFwIHtvdmVyZmxvdy14OiBhdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDt9fTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgPCEtLTxwcmV2aW91cy1wYWdlPjwvcHJldmlvdXMtcGFnZT4tLT5cclxuICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tZW51J10pXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIj4gUmV0b3VyPC9pPjwvYnV0dG9uPlxyXG4gIDwvbmF2PlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuXHJcbiAgICAgICBcclxuICA8IS0tIE5hdiB0YWJzIC0tPlxyXG4gIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNob21lXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5EZXRhaWxzPC9hPjwvbGk+XHJcbiAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjbm90ZXNcIiBhcmlhLWNvbnRyb2xzPVwibm90ZXNcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ob3RlczwvYT48L2xpPlxyXG4gICAgXHJcbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3Bob3Rvc1wiIGFyaWEtY29udHJvbHM9XCJwaG90b3NcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiAgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPlBob3RvczwvYT48L2xpPi0tPlxyXG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNhZG1pblwiIGFyaWEtY29udHJvbHM9XCJhZG1pblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkTDqXRhaWxzIGFkbWluaXN0cmF0aWZzPC9hPjwvbGk+LS0+XHJcbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3RlY2hcIiBhcmlhLWNvbnRyb2xzPVwidGVjaFwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkNhcmFjdMOpcmlzdGlxdWVzIHRlY2huaXF1ZXM8L2E+PC9saT4tLT5cclxuICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj4gIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBUQUIgQUxMIElORk9TIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGctd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0Zy1ibjRvXCIgY29sc3Bhbj1cIjNcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMF0ubm9tfX0ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzFdLmZpcnN0bmFtZX19IDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+QmlydGhkYXk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkFnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmFnZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Db3VudHJ5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVs0XS5jb3VudHJ5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+Q2l0eTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbNV0uY2l0eX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnBob25lfX08L3NwYW4+PC90aD48dGQgY2xhc3M9XCJ0Zy10eGdpXCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbM10uZW1haWx9fTwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCI+UG9ydGVzPC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLm5icG9ydGVzU2VsZWN0ZWR9fTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4gICAgICAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjb2xzcGFuPVwiNFwiPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGggY2xhc3M9XCJ0Zy15dzRsXCIgYWxpZ249XCJjZW50ZXJcIiAgY29sc3Bhbj1cIjNcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMF0ubm9tfX08L3RoPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnRlbH19PC9zcGFuPjwvdGg+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAgY29sc3Bhbj1cIjNcIj5Db2RlIFBvc3RhbCB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uYWRyZXNzZX19PC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj48dGQgY29sc3Bhbj1cIjRcIj48L3RkPjwvdHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCI+VmFsZXVyIGNhdGFsb2d1ZTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCIgKm5nSWY9XCJkZXRhaWxzXCIgPnt7dGVjaF9kZXRhaWxzLnByaXh9fTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWluID09ICdPVUknXCI+UHJlbWnDqHJlIG1haW48L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnTk9OJ1wiPlNlY29uZGUgbWFpbjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCIgPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvc3Bhbj48L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+SW1wb3J0w6k8L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgPkNsw6lzPC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIiA+e3tyZWNvcmRfZGV0YWlscy5jbGV9fTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5jYXJuZXQgPT0gJ09VSSdcIj5DYXJuZXQgZCdlbnRyZXRpZW48L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmUubGVuZ3RoID4gMFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiPk9wdGlvbnM8L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiIGNvbHNwYW49XCIzXCI+IDx1bCBjbGFzcz1cIml0ZW1zXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxpICpuZ0Zvcj1cImxldCBvcHRpb25zX3ZvaXR1cmUgb2YgcmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXt7b3B0aW9uc192b2l0dXJlfX0gIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3VsPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIE5PVEVTIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cIm5vdGVzXCIgPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCIxMDBcIiBjb2xzPVwiNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tyZWNvcmRfZGV0YWlscy5hZ2UgfX1cclxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IElORk9TIENPTlRBQ1QmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJjb250YWN0XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJ0Zy13cmFwXCI+PHRhYmxlIGNsYXNzPVwidGdcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGctMDMxZVwiPk5vbTwvdGg+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMF0ubm9tfX08L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctMDMxZVwiPkNvZGUgUG9zdGFsPC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGcteXc0bFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsxXS5hZHJlc3NlfX08L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctMDMxZVwiPlTDqWzDqXBob25lPC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGcteXc0bFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsyXS50ZWx9fTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy0wMzFlXCI+RW1haWw8L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy15dzRsXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L3RhYmxlPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IFBIT1RPUyBWRUhJQ1VMRSAmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJwaG90b3NcIiAqbmdJZj1cImltYWdlc190b19zaG93XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1swXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08YnI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1sxXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzJdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbM10uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1s0XS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4tLT5cclxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG5cclxuICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyBJTkZPIEFETUlOSVNUUkFUSVZFUyZuZGFzaDsmZ3Q7LS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImFkbWluXCI+ICAgICAgICAgIC0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3dcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+OiB7e3JlY29yZF9kZXRhaWxzLnByZW1pZXJlX21haW59fTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5JbXBvcnTDqToge3tyZWNvcmRfZGV0YWlscy5pbXBvcnR9fTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3dcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2FybmV0IGQnZW50cmV0aWVuOiB7e3JlY29yZF9kZXRhaWxzLmNhcm5ldH19PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPkNsw6lzOiB7e3JlY29yZF9kZXRhaWxzLmNsZX19PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucm91bGUgPT0gJ05PTidcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmFjY2lkZW50ID09IE9VSVwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVbDqWhpY3VsZSBhY2NpZGVudMOpPGJyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tUmFpc29uOiB7e3JlY29yZF9kZXRhaWxzLmFjY2lkZW50fX0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IElORk8gVEVDSE5JUVVFUyAmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJ0ZWNoXCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInJvd1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj46IHt7cmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbn19PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPkltcG9ydMOpOiB7e3JlY29yZF9kZXRhaWxzLmltcG9ydH19PC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInJvd1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5DYXJuZXQgZCdlbnRyZXRpZW46IHt7cmVjb3JkX2RldGFpbHMuY2FybmV0fX08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2zDqXM6IHt7cmVjb3JkX2RldGFpbHMuY2xlfX08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWxsZXREZXRhaWxzQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2JhbGxldERldGFpbHNTZXJ2aWNlOiBCYWxsZXREZXRhaWxzU2VydmljZSxwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG4gICAgcmVjb3JkX2RldGFpbHM7XHJcbiAgICB0ZWNoX2RldGFpbHM7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgb2JqX2lkO1xyXG4gICAgbGlzdF9vcHRpb25zPSBbXTtcclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBkZXRhaWxzID0gZmFsc2U7XHJcblxyXG4gICAgaW1hZ2VzX3RvX3Nob3cgPSBmYWxzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG5cclxuICAgICAgICAgICAgLy8gSW4gYSByZWFsIGFwcDogZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgdGhlIGRldGFpbHMgaGVyZS5cclxuICAgICAgICB9KTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxyXG5cclxuICAgICAgICB0aGlzLl9iYWxsZXREZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkX2RldGFpbHMgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
