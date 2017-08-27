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
    <li role="presentation"><a href="#registration" aria-controls="registration" role="tab" data-toggle="tab">Registration</a></li>
    <li role="presentation"><a href="#notes" aria-controls="notes" role="tab" data-toggle="tab">Notes</a></li>
    
    <!--<li role="presentation"><a href="#photos" aria-controls="photos" role="tab" data-toggle="tab"  *ngIf="images_to_show">Photos</a></li>-->
    <!--<li role="presentation"><a href="#admin" aria-controls="admin" role="tab" data-toggle="tab">Détails administratifs</a></li>-->
    <!--<li role="presentation"><a href="#tech" aria-controls="tech" role="tab" data-toggle="tab">Caractéristiques techniques</a></li>-->
  </ul>
                  
        <div class="tab-content" >  
            
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
                        <td class="tg-6k2t">{{record_details.dob}}</td>
                        <td class="tg-txgi">Age</td>
                        <td class="tg-6k2t">{{record_details.age}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Country</td>
                        <td class="tg-6k2t">{{record_details.profile[6].country}}</td>
                        <td class="tg-txgi">City</td>
                        <td class="tg-6k2t">{{record_details.profile[7].city}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">BECA</td>
                        <td class="tg-6k2t">{{record_details.BECA}}</td>
                        <td class="tg-txgi">DNI</td>
                        <td class="tg-6k2t">{{record_details.DNI}}</td>
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
            
             <!-- REGISTRATION -->
            <div role="tabpanel" class="tab-pane" id="registration" >
                 <div class="tg-wrap">
                    <table class="tg">
                      <tr>
                        <th></th>
                        <th class="tg-bn4o" colspan="3">{{record_details.profile[0].nom}} {{record_details.profile[1].firstname}} </th>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Course</td>
                        <td class="tg-6k2t">{{record_details.course_type}}</td>
                        <td class="tg-txgi">Group</td>
                        <td class="tg-6k2t">{{record_details.group}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Duration</td>
                        <td class="tg-6k2t">{{record_details.duration}}</td>
                        <td class="tg-txgi">Residence</td>
                        <td class="tg-6k2t">{{record_details.residence}}</td>
                      
                      </tr>
                      <tr>
                        <td class="tg-txgi">BECA</td>
                        <td class="tg-6k2t">{{record_details.BECA}}</td>
                        <td class="tg-txgi">DNI</td>
                        <td class="tg-6k2t">{{record_details.DNI}}</td>
                      </tr>
                      <tr *ngIf="record_details.course_type == 'Professional'">
                        <td class="tg-txgi" >Audition place</td>
                        <td class="tg-6k2t" >{{record_details.audition}}</td>
                      </tr>
                      </table></div>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0RGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLG9DQUErQixxQkFBcUIsQ0FBQyxDQUFBO0FBQ3JELHlCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHVCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUVuQyx3Q0FBbUMseUJBQXlCLENBQUMsQ0FBQTtBQWtQN0Q7SUFHSSxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixxQkFBMkMsRUFBUyxLQUFxQixFQUFVLEtBQVc7UUFEOUYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBc0I7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFLbEgsaUJBQVksR0FBRSxFQUFFLENBQUM7UUFFakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBVjZGLENBQUM7SUFZckgsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFHbkMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1lBRTNCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZUFBZSxDQUFDLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7QUFRTCxDQUFDO0FBaFREO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E0T2I7S0FDQSxDQUFDOzswQkFBQTtBQUVXLDhCQUFzQix5QkErRGxDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWxsZXREZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcmlkRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2dyaWREZXRhaWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2JhbGxldERldGFpbHMuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncmlkLWRldGFpbHMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cbi50ZyB0ZHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojNDQ0O2JhY2tncm91bmQtY29sb3I6I0Y3RkRGQTtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XG4udGcgdGh7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjZBREU0O2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cbi50ZyAudGctYm40b3tmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcH1cbi50ZyAudGctdHhnaXtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50OztiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7dmVydGljYWwtYWxpZ246dG9wfVxuLnRnIC50Zy02azJ0e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQzt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgLnRnLXFqdjd7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO2ZvbnQtc2l6ZToxOHB4O3ZlcnRpY2FsLWFsaWduOnRvcH1cbi50ZyAudGcteXc0bHt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgey50ZyB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnIGNvbCB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnLXdyYXAge292ZXJmbG93LXg6IGF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO319PC9zdHlsZT5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIFxuICA8IS0tPHByZXZpb3VzLXBhZ2U+PC9wcmV2aW91cy1wYWdlPi0tPlxuICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWVudSddKVwiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCI+IFJldG91cjwvaT48L2J1dHRvbj5cbiAgPC9uYXY+XG4gIFxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG5cbiAgICAgICBcbiAgPCEtLSBOYXYgdGFicyAtLT5cbiAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNob21lXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5EZXRhaWxzPC9hPjwvbGk+XG4gICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3JlZ2lzdHJhdGlvblwiIGFyaWEtY29udHJvbHM9XCJyZWdpc3RyYXRpb25cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5SZWdpc3RyYXRpb248L2E+PC9saT5cbiAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjbm90ZXNcIiBhcmlhLWNvbnRyb2xzPVwibm90ZXNcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ob3RlczwvYT48L2xpPlxuICAgIFxuICAgIDwhLS08bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjcGhvdG9zXCIgYXJpYS1jb250cm9scz1cInBob3Rvc1wiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiICAqbmdJZj1cImltYWdlc190b19zaG93XCI+UGhvdG9zPC9hPjwvbGk+LS0+XG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNhZG1pblwiIGFyaWEtY29udHJvbHM9XCJhZG1pblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkTDqXRhaWxzIGFkbWluaXN0cmF0aWZzPC9hPjwvbGk+LS0+XG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiN0ZWNoXCIgYXJpYS1jb250cm9scz1cInRlY2hcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5DYXJhY3TDqXJpc3RpcXVlcyB0ZWNobmlxdWVzPC9hPjwvbGk+LS0+XG4gIDwvdWw+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgPiAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gVEFCIEFMTCBJTkZPUyAtLT5cbiAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRnLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLWJuNG9cIiBjb2xzcGFuPVwiM1wiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fSB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uZmlyc3RuYW1lfX0gPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5CaXJ0aGRheTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5kb2J9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+QWdlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmFnZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Db3VudHJ5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbNl0uY291bnRyeX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5DaXR5PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbN10uY2l0eX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5CRUNBPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLkJFQ0F9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RE5JPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLkROSX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnBob25lfX08L3NwYW4+PC90aD48dGQgY2xhc3M9XCJ0Zy10eGdpXCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Qb3J0ZXM8L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLm5icG9ydGVzU2VsZWN0ZWR9fTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4gICAgICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY29sc3Bhbj1cIjRcIj48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIiBhbGlnbj1cImNlbnRlclwiICBjb2xzcGFuPVwiM1wiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fTwvdGg+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnRlbH19PC9zcGFuPjwvdGg+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgIGNvbHNwYW49XCIzXCI+Q29kZSBQb3N0YWwge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzFdLmFkcmVzc2V9fTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj48dGQgY29sc3Bhbj1cIjRcIj48L3RkPjwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5WYWxldXIgY2F0YWxvZ3VlPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCIgKm5nSWY9XCJkZXRhaWxzXCIgPnt7dGVjaF9kZXRhaWxzLnByaXh9fTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWluID09ICdPVUknXCI+UHJlbWnDqHJlIG1haW48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLnByZW1pZXJlX21haW4gPT0gJ05PTidcIj5TZWNvbmRlIG1haW48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIiA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+SW1wb3J0w6k8L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmltcG9ydCA9PSAnT1VJJ1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvc3Bhbj48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiID5DbMOpczwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiID57e3JlY29yZF9kZXRhaWxzLmNsZX19PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5jYXJuZXQgPT0gJ09VSSdcIj5DYXJuZXQgZCdlbnRyZXRpZW48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLTZrMnRcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmNhcm5ldCA9PSAnT1VJJ1wiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvc3Bhbj48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyICpuZ0lmPVwicmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlLmxlbmd0aCA+IDBcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCI+T3B0aW9uczwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctNmsydFwiIGNvbHNwYW49XCIzXCI+IDx1bCBjbGFzcz1cIml0ZW1zXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uc192b2l0dXJlIG9mIHJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZVwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0te3tvcHRpb25zX3ZvaXR1cmV9fSAgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvbGk+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC91bD48L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgPCEtLSBSRUdJU1RSQVRJT04gLS0+XG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cInJlZ2lzdHJhdGlvblwiID5cbiAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRnLXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLWJuNG9cIiBjb2xzcGFuPVwiM1wiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fSB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uZmlyc3RuYW1lfX0gPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Db3Vyc2U8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuY291cnNlX3R5cGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+R3JvdXA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZ3JvdXB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RHVyYXRpb248L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZHVyYXRpb259fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+UmVzaWRlbmNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnJlc2lkZW5jZX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5CRUNBPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLkJFQ0F9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RE5JPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLkROSX19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmNvdXJzZV90eXBlID09ICdQcm9mZXNzaW9uYWwnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgPkF1ZGl0aW9uIHBsYWNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIiA+e3tyZWNvcmRfZGV0YWlscy5hdWRpdGlvbn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gTk9URVMgLS0+XG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cIm5vdGVzXCIgPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiMTAwXCIgY29scz1cIjUwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7e3JlY29yZF9kZXRhaWxzLmFnZSB9fVxuICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IElORk9TIENPTlRBQ1QmbmRhc2g7Jmd0Oy0tPlxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwiY29udGFjdFwiPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInRnLXdyYXBcIj48dGFibGUgY2xhc3M9XCJ0Z1wiPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLTAzMWVcIj5Ob208L3RoPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGcteXc0bFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fTwvdGg+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cbiAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy0wMzFlXCI+Q29kZSBQb3N0YWw8L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGcteXc0bFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsxXS5hZHJlc3NlfX08L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctMDMxZVwiPlTDqWzDqXBob25lPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMl0udGVsfX08L3RkPi0tPlxuICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctMDMxZVwiPkVtYWlsPC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbM10uZW1haWx9fTwvdGQ+LS0+XG4gICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC90YWJsZT48L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDsgUEhPVE9TIFZFSElDVUxFICZuZGFzaDsmZ3Q7LS0+XG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJwaG90b3NcIiAqbmdJZj1cImltYWdlc190b19zaG93XCI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTxicj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1sxXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMl0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbM10uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbNF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+LS0+XG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG5cbiAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDsgSU5GTyBBRE1JTklTVFJBVElWRVMmbmRhc2g7Jmd0Oy0tPlxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwiYWRtaW5cIj4gICAgICAgICAgLS0+XG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3dcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjoge3tyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWlufX08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPkltcG9ydMOpOiB7e3JlY29yZF9kZXRhaWxzLmltcG9ydH19PC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInJvd1wiPi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2FybmV0IGQnZW50cmV0aWVuOiB7e3JlY29yZF9kZXRhaWxzLmNhcm5ldH19PC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5DbMOpczoge3tyZWNvcmRfZGV0YWlscy5jbGV9fTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLnJvdWxlID09ICdOT04nXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuYWNjaWRlbnQgPT0gT1VJXCI+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVbDqWhpY3VsZSBhY2NpZGVudMOpPGJyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLVJhaXNvbjoge3tyZWNvcmRfZGV0YWlscy5hY2NpZGVudH19LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IElORk8gVEVDSE5JUVVFUyAmbmRhc2g7Jmd0Oy0tPlxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwidGVjaFwiPi0tPlxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwicm93XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj46IHt7cmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbn19PC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5JbXBvcnTDqToge3tyZWNvcmRfZGV0YWlscy5pbXBvcnR9fTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJyb3dcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPkNhcm5ldCBkJ2VudHJldGllbjoge3tyZWNvcmRfZGV0YWlscy5jYXJuZXR9fTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2zDqXM6IHt7cmVjb3JkX2RldGFpbHMuY2xlfX08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuXG4gICAgPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgQmFsbGV0RGV0YWlsc0NvbXBvbmVudCB7XG5cbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYmFsbGV0RGV0YWlsc1NlcnZpY2U6IEJhbGxldERldGFpbHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XG4gICAgcmVjb3JkX2RldGFpbHM7XG4gICAgdGVjaF9kZXRhaWxzO1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgb2JqX2lkO1xuICAgIGxpc3Rfb3B0aW9ucz0gW107XG5cbiAgICBkaXNwbGF5ID0gZmFsc2U7XG4gICAgZGV0YWlscyA9IGZhbHNlO1xuXG4gICAgaW1hZ2VzX3RvX3Nob3cgPSBmYWxzZTtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcblxuICAgICAgICAgICAgLy8gSW4gYSByZWFsIGFwcDogZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgdGhlIGRldGFpbHMgaGVyZS5cbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXG5cbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZF9kZXRhaWxzID0gZGF0YTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuXG5cblxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICBnb1RvQ3VycmVudFN0ZXAoaXRlbSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdjdXJyZW50X2lkJzogaXRlbS5zdGVwX2lkLCAnX2lkJzogaXRlbS5faWQgfVxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcbiAgICB9XG5cbiAgICBpc09iamVjdChpdGVtKSB7XG4gICAgICAgIHJldHVybiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbCk7XG4gICAgfVxuXG5cblxuXG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
