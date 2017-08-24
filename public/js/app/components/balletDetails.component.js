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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0RGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLG9DQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHlCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyx3Q0FBbUMseUJBQXlCLENBQUMsQ0FBQTtBQXdNN0Q7SUFHSSxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixxQkFBMkMsRUFBUyxLQUFxQixFQUFVLEtBQVc7UUFEOUYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFLbEgsaUJBQVksR0FBRSxFQUFFLENBQUM7UUFFakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBVjZGLENBQUM7SUFZckgsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHbkMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBRTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZUFBZSxDQUFDLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7QUFRTCxDQUFDO0FBdFFEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FrTWI7S0FDQSxDQUFDOzswQkFBQTtBQUVXLDhCQUFzQix5QkErRGxDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWxsZXREZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcmlkRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2dyaWREZXRhaWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2JhbGxldERldGFpbHMuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncmlkLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cbi50ZyB0ZHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojNDQ0O2JhY2tncm91bmQtY29sb3I6I0Y3RkRGQTtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XG4udGcgdGh7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjZBREU0O2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cbi50ZyAudGctYm40b3tmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcH1cbi50ZyAudGctdHhnaXtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50OztiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7dmVydGljYWwtYWxpZ246dG9wfVxuLnRnIC50Zy02azJ0e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQzt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgLnRnLXFqdjd7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO2ZvbnQtc2l6ZToxOHB4O3ZlcnRpY2FsLWFsaWduOnRvcH1cbi50ZyAudGcteXc0bHt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgey50ZyB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnIGNvbCB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnLXdyYXAge292ZXJmbG93LXg6IGF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO319PC9zdHlsZT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICA8IS0tPHByZXZpb3VzLXBhZ2U+PC9wcmV2aW91cy1wYWdlPi0tPlxuICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWVudSddKVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCI+IFJldG91cjwvaT48L2J1dHRvbj5cbiAgPC9uYXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG5cbiAgICAgICBcbiAgPCEtLSBOYXYgdGFicyAtLT5cbiAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNob21lXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5EZXRhaWxzPC9hPjwvbGk+XG4gICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI25vdGVzXCIgYXJpYS1jb250cm9scz1cIm5vdGVzXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+Tm90ZXM8L2E+PC9saT5cbiAgICBcbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3Bob3Rvc1wiIGFyaWEtY29udHJvbHM9XCJwaG90b3NcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiAgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPlBob3RvczwvYT48L2xpPi0tPlxuICAgIDwhLS08bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjYWRtaW5cIiBhcmlhLWNvbnRyb2xzPVwiYWRtaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ew6l0YWlscyBhZG1pbmlzdHJhdGlmczwvYT48L2xpPi0tPlxuICAgIDwhLS08bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjdGVjaFwiIGFyaWEtY29udHJvbHM9XCJ0ZWNoXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+Q2FyYWN0w6lyaXN0aXF1ZXMgdGVjaG5pcXVlczwvYT48L2xpPi0tPlxuICA8L3VsPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPiAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gVEFCIEFMTCBJTkZPUyAtLT5cbiAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRnLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLWJuNG9cIiBjb2xzcGFuPVwiM1wiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fSB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uZmlyc3RuYW1lfX0gPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5CaXJ0aGRheTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5BZ2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuYWdlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkNvdW50cnk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVs0XS5jb3VudHJ5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkNpdHk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVs1XS5jaXR5fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMl0ucGhvbmV9fTwvc3Bhbj48L3RoPjx0ZCBjbGFzcz1cInRnLXR4Z2lcIj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbM10uZW1haWx9fTwvc3Bhbj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiPlBvcnRlczwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMubmJwb3J0ZXNTZWxlY3RlZH19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPiAgICAgIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjb2xzcGFuPVwiNFwiPjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGcteXc0bFwiIGFsaWduPVwiY2VudGVyXCIgIGNvbHNwYW49XCIzXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzBdLm5vbX19PC90aD4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGcteXc0bFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMl0udGVsfX08L3NwYW4+PC90aD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAgY29sc3Bhbj1cIjNcIj5Db2RlIFBvc3RhbCB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uYWRyZXNzZX19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPjx0ZCBjb2xzcGFuPVwiNFwiPjwvdGQ+PC90cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiPlZhbGV1ciBjYXRhbG9ndWU8L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIiAqbmdJZj1cImRldGFpbHNcIiA+e3t0ZWNoX2RldGFpbHMucHJpeH19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLnByZW1pZXJlX21haW4gPT0gJ09VSSdcIj5QcmVtacOocmUgbWFpbjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnTk9OJ1wiPlNlY29uZGUgbWFpbjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiID48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L3NwYW4+PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5pbXBvcnQgPT0gJ09VSSdcIj5JbXBvcnTDqTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgPkNsw6lzPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCIgPnt7cmVjb3JkX2RldGFpbHMuY2xlfX08L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmNhcm5ldCA9PSAnT1VJJ1wiPkNhcm5ldCBkJ2VudHJldGllbjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmUubGVuZ3RoID4gMFwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5PcHRpb25zPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCIgY29sc3Bhbj1cIjNcIj4gPHVsIGNsYXNzPVwiaXRlbXNcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGxpICpuZ0Zvcj1cImxldCBvcHRpb25zX3ZvaXR1cmUgb2YgcmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e29wdGlvbnNfdm9pdHVyZX19ICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9saT4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3VsPjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8IS0tIE5PVEVTIC0tPlxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJub3Rlc1wiID5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjEwMFwiIGNvbHM9XCI1MDBcIj5cbiAgICAgICAgICAgICAgICAgICAge3tyZWNvcmRfZGV0YWlscy5hZ2UgfX1cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyBJTkZPUyBDT05UQUNUJm5kYXNoOyZndDstLT5cbiAgICAgICAgICAgIDwhLS08ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImNvbnRhY3RcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJ0Zy13cmFwXCI+PHRhYmxlIGNsYXNzPVwidGdcIj4tLT5cbiAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGggY2xhc3M9XCJ0Zy0wMzFlXCI+Tm9tPC90aD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMF0ubm9tfX08L3RoPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctMDMxZVwiPkNvZGUgUG9zdGFsPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uYWRyZXNzZX19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTAzMWVcIj5Uw6lsw6lwaG9uZTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy15dzRsXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnRlbH19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTAzMWVcIj5FbWFpbDwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy15dzRsXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvdGFibGU+PC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IFBIT1RPUyBWRUhJQ1VMRSAmbmRhc2g7Jmd0Oy0tPlxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwicGhvdG9zXCIgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08aW1nIGNsYXNzPVwiaW1nLXRodW1ibmFpbFwiICBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzBdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08YnI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMV0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgIDwhLS08aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzJdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzNdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzRdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPi0tPlxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuXG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IElORk8gQURNSU5JU1RSQVRJVkVTJm5kYXNoOyZndDstLT5cbiAgICAgICAgICAgIDwhLS08ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cImFkbWluXCI+ICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicm93XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj46IHt7cmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbn19PC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5JbXBvcnTDqToge3tyZWNvcmRfZGV0YWlscy5pbXBvcnR9fTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3dcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPkNhcm5ldCBkJ2VudHJldGllbjoge3tyZWNvcmRfZGV0YWlscy5jYXJuZXR9fTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2zDqXM6IHt7cmVjb3JkX2RldGFpbHMuY2xlfX08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5yb3VsZSA9PSAnTk9OJ1wiPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmFjY2lkZW50ID09IE9VSVwiPiAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1Ww6loaWN1bGUgYWNjaWRlbnTDqTxicj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1SYWlzb246IHt7cmVjb3JkX2RldGFpbHMuYWNjaWRlbnR9fS0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLSZsdDshJm5kYXNoOyBJTkZPIFRFQ0hOSVFVRVMgJm5kYXNoOyZndDstLT5cbiAgICAgICAgICAgIDwhLS08ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cInRlY2hcIj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInJvd1wiPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+OiB7e3JlY29yZF9kZXRhaWxzLnByZW1pZXJlX21haW59fTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+SW1wb3J0w6k6IHt7cmVjb3JkX2RldGFpbHMuaW1wb3J0fX08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicm93XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5DYXJuZXQgZCdlbnRyZXRpZW46IHt7cmVjb3JkX2RldGFpbHMuY2FybmV0fX08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPkNsw6lzOiB7e3JlY29yZF9kZXRhaWxzLmNsZX19PC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcblxuICAgIDwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIEJhbGxldERldGFpbHNDb21wb25lbnQge1xuXG4gICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2JhbGxldERldGFpbHNTZXJ2aWNlOiBCYWxsZXREZXRhaWxzU2VydmljZSxwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxuICAgIHJlY29yZF9kZXRhaWxzO1xuICAgIHRlY2hfZGV0YWlscztcbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIG9ial9pZDtcbiAgICBsaXN0X29wdGlvbnM9IFtdO1xuXG4gICAgZGlzcGxheSA9IGZhbHNlO1xuICAgIGRldGFpbHMgPSBmYWxzZTtcblxuICAgIGltYWdlc190b19zaG93ID0gZmFsc2U7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG5cbiAgICAgICAgICAgIC8vIEluIGEgcmVhbCBhcHA6IGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIHRoZSBkZXRhaWxzIGhlcmUuXG4gICAgICAgIH0pO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxuXG4gICAgICAgIHRoaXMuX2JhbGxldERldGFpbHNTZXJ2aWNlLmdldERhdGFzKHRoaXMub2JqX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRfZGV0YWlscyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcblxuXG5cbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cblxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XG4gICAgfVxuXG4gICAgaXNPYmplY3QoaXRlbSkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIGl0ZW0gIT09IG51bGwpO1xuICAgIH1cblxuXG5cblxuXG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
