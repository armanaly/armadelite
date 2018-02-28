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
const grid_service_1 = require("../grid.service");
const router_1 = require("@angular/router");
const step_service_1 = require("../../Engine/step.service");
const http_1 = require("@angular/http");
const autoDetails_service_1 = require("./autoDetails.service");
const ModelOffre_1 = require("./ModelOffre");
let AutoDetailsComponent = class AutoDetailsComponent {
    constructor(_stepService, _gridService, router, _autoDetailsService, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this._autoDetailsService = _autoDetailsService;
        this.route = route;
        this._http = _http;
        this.list_options = [];
        this.display = false;
        this.details = false;
        this.grid_name = '';
        this.images_to_show = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record'];
            this.grid_name = params['grid_name'];
        });
        console.log(this._stepService);
        this._autoDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
            console.log(data);
            this.record_details = data;
            if (typeof this.record_details.options_voiture != 'undefined') {
                this.list_options = this.record_details.options_voiture;
            }
            if (typeof this.record_details.fileDetails != 'undefined') {
                this.images_to_show = true;
            }
            console.log(this.list_options);
            console.log(this.record_details);
            this.display = true;
            this.model = new ModelOffre_1.MODELOFFRE(data._id, data.offre_rachat, data.prix_vente, data.achete, data.etat_transaction);
            this._autoDetailsService.getTechInfos(this.record_details.version)
                .subscribe(data => {
                this.tech_details = data;
                console.log(data);
                this.details = true;
            }, error => console.log(error));
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
AutoDetailsComponent = __decorate([
    core_1.Component({
        selector: 'grid-details',
        template: `
              <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
.tg td{font-family:Arial, sans-serif;font-size:16px;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#444;background-color:#F7FDFA;border-top-width:1px;border-bottom-width:1px;}
.tg th{font-family:Arial, sans-serif;font-size:16px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:0px;overflow:hidden;word-break:normal;border-color:#999;color:#fff;background-color:#26ADE4;border-top-width:1px;border-bottom-width:1px;}
.tg .tg-bn4o{font-weight:bold;font-size:18px;text-align:center;vertical-align:top;background-color:red;}
.tg .tg-txgi{font-weight:bold;font-family:"Trebuchet MS", Helvetica, sans-serif !important;background-color:#efefef;vertical-align:top}
.tg .tg-6k2t{background-color:#D2E4FC;vertical-align:top}
.tg .tg-qjv7{background-color:#D2E4FC;font-size:18px;vertical-align:top}
.tg .tg-yw4l{vertical-align:top;background-color:red}
.tg  {border-collapse:collapse;border-spacing:0;border-color:#999;}
@media screen and (max-width: 767px) {.tg {width: auto !important;}.tg col {width: auto !important;}.tg-wrap {overflow-x: auto;-webkit-overflow-scrolling: touch;}}</style>
              
  
    <div *ngIf="display" class="{{_stepService.template.panel_heading}}">
        <div  class="row" align="left">
            <div class="col-md-2">
                    <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid_name, 'master': 'auto', 'app_name': 'auto'}">
                    <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
            </div>
            <div class="col-md-6">
                <h2 ><b class="text-uppercase">{{record_details.marqueSelected}} {{record_details.modeleSelected}}  </b></h2>
            </div>
            <div class="col-md-4">
                 <offre></offre>
            </div>
        </div>
   </div>
   
  
   <div class="panel-body" *ngIf="display">
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
        <li  class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Details techniques</a></li>
        <li role="presentation"><a href="#photos" aria-controls="photos" role="tab" data-toggle="tab"  *ngIf="images_to_show">Photos</a></li>
        <li role="presentation"><a href="#similaire" aria-controls="admin" role="tab" data-toggle="tab">Véhicules similaires</a></li>
      </ul>
                  
      <div class="tab-content">  
            <!-- TAB ALL INFOS -->
            <div role="tabpanel" class="tab-pane active" id="home">
                <div class="tg-wrap">
                    <table class="tg">
                      <!--<tr>-->
                        <!--<th class="tg-bn4o"></th>-->
                        <!--<th class="tg-bn4o" colspan="3">{{record_details.marqueSelected}} {{record_details.modeleSelected}} </th>-->
                      <!--</tr>-->
                      <tr>
                        <td class="tg-txgi">Année</td>
                        <td class="tg-6k2t">{{record_details.monthSelected}} {{record_details.yearSelected}}</td>
                        <td class="tg-txgi">Version</td>
                        <td class="tg-6k2t">{{record_details.version}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Motorisation:</td>
                        <td class="tg-6k2t">{{record_details.fuelSelected}}</td>
                        <td class="tg-txgi">Boite de vitesse</td>
                        <td class="tg-6k2t">{{record_details.gear_box}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Kilométrage</td>
                        <td class="tg-6k2t">{{record_details.kilometrage[0].nom}}</td>
                        <td class="tg-txgi">Puissance</td>
                        <td class="tg-6k2t">{{record_details.power}} CV</td>
                      </tr>
                     
                     <tr>
                        <td class="tg-txgi">Portes</td>
                        <td class="tg-6k2t">{{record_details.nbportesSelected}}</td>
                      </tr>
                     
                      <tr>      
                        <td colspan="4"></td>
                      </tr>
                      
                      <tr>
                        <th class="tg-yw4l" align="center"  colspan="3">{{record_details.profile[0].nom}}</th> 
                        <th class="tg-yw4l"><span class="glyphicon glyphicon-earphone"> {{record_details.profile[2].tel}}</span></th>
                      </tr>
                  
                      <tr>
                        <td class="tg-txgi"  colspan="3">Code Postal {{record_details.profile[1].adresse}}</td>
                    
                        <th class="tg-yw4l"><span class="glyphicon glyphicon-envelope"> {{record_details.profile[3].email}}</span></th>
                  
                       </tr>
                      <tr><td colspan="4"></td></tr>
                      
                      
                      <tr>
                        
                        <td class="tg-txgi">Valeur catalogue</td>
                        <td class="tg-6k2t" *ngIf="details" >{{tech_details.prix}}</td>
                      </tr>
                         <tr>
                        <td class="tg-txgi" *ngIf="record_details.premiere_main == 'OUI'">Première main</td>
                        <td class="tg-txgi" *ngIf="record_details.premiere_main == 'NON'">Seconde main</td>
                        <td class="tg-6k2t" ><span class="glyphicon glyphicon-ok"></span></td>
                        <td class="tg-txgi" *ngIf="record_details.import == 'OUI'">Importé</td>
                        <td class="tg-6k2t" *ngIf="record_details.import == 'OUI'"><span class="glyphicon glyphicon-ok"></span></td>
                      </tr>
                      <tr>
                        <td class="tg-txgi" >Clés</td>
                        <td class="tg-6k2t" >{{record_details.cle}}</td>
                        <td class="tg-txgi" *ngIf="record_details.carnet == 'OUI'">Carnet d'entretien</td>
                        <td class="tg-6k2t" *ngIf="record_details.carnet == 'OUI'"><span class="glyphicon glyphicon-ok"></span></td>
                        
                      </tr>
                       <tr *ngIf="record_details.options_voiture.length > 0">
                        <td class="tg-txgi">Options</td>
                        <td class="tg-6k2t" colspan="3"> 
                            <ul class="items">
                                <li *ngFor="let options_voiture of record_details.options_voiture">
                                    {{options_voiture}}  
                                </li>
                            </ul>
                        </td>
                      </tr>
                    </table>
                   <div  *ngIf="images_to_show" id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                      <!-- Indicators -->
                      <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                      </ol>
                    
                      <!-- Wrapper for slides -->
                      <div class="carousel-inner" role="listbox">
                        <div class="item active">
                          <img class="img-thumbnail"  src="{{record_details.fileDetails[0].file_url}}" width="680" height="520">
                        </div>
                        <div class="item">
                          <img class="img-thumbnail"  src="{{record_details.fileDetails[1].file_url}}" width="680" height="520">
                        </div>
                        <div class="item">
                          <img class="img-thumbnail"  src="{{record_details.fileDetails[2].file_url}}" width="680" height="520">
                        </div>
                        <div class="item">
                          <img class="img-thumbnail"  src="{{record_details.fileDetails[3].file_url}}" width="680" height="520">
                        </div>
                        <div class="item">
                          <img class="img-thumbnail"  src="{{record_details.fileDetails[4].file_url}}" width="680" height="520">
                        </div>
                    
                      </div>

                      <!-- Controls -->
                      <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                      </a>
                      <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </div>
                </div>
                              
            </div>
                    

                      
            <!-- PHOTOS VEHICULE -->
            <div role="tabpanel" class="tab-pane" id="photos" *ngIf="images_to_show">
                <img class="img-thumbnail"  src="{{record_details.fileDetails[0].file_url}}" width="480" height="320">
                <br>
                <img class="img-responsive" src="{{record_details.fileDetails[1].file_url}}" width="480" height="320">
                
                <img class="img-responsive" src="{{record_details.fileDetails[2].file_url}}" width="480" height="320">
                <img class="img-responsive" src="{{record_details.fileDetails[3].file_url}}" width="480" height="320">
                <img class="img-responsive" src="{{record_details.fileDetails[4].file_url}}" width="480" height="320">
            </div>

            <!-- VEHICULES SIMILAIRES ACHETE-->
            <div role="tabpanel" class="tab-pane" id="similaire">          
               
            </div>
        
        </div>
                  

    </div>`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, grid_service_1.GridPanelService, router_1.Router,
        autoDetails_service_1.AutoDetailsService, router_1.ActivatedRoute, http_1.Http])
], AutoDetailsComponent);
exports.AutoDetailsComponent = AutoDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0by9hdXRvRGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsa0RBQWlEO0FBQ2pELDRDQUF5RTtBQUN6RSw0REFBc0Q7QUFDdEQsd0NBQW1DO0FBQ25DLCtEQUF5RDtBQUN6RCw2Q0FBdUM7QUE4THZDLElBQWEsb0JBQW9CLEdBQWpDO0lBR0ksWUFBb0IsWUFBeUIsRUFBVSxZQUE4QixFQUFVLE1BQWMsRUFDekYsbUJBQXVDLEVBQVMsS0FBcUIsRUFBVSxLQUFXO1FBRDFGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSzlHLGlCQUFZLEdBQUUsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFWeUYsQ0FBQztJQVlqSCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFeEMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUU3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUks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QUFXLEVBQXdCLCtCQUFnQixFQUFrQixlQUFNO1FBQ3BFLHdDQUFrQixFQUFnQix1QkFBYyxFQUFpQixXQUFJO0dBSnJHLG9CQUFvQixDQWtGaEM7QUFsRlksb0RBQW9CIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0by9hdXRvRGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7QXV0b0RldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9hdXRvRGV0YWlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TU9ERUxPRkZSRX0gZnJvbSBcIi4vTW9kZWxPZmZyZVwiXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLWRldGFpbHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cclxuLnRnIHRke2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiM0NDQ7YmFja2dyb3VuZC1jb2xvcjojRjdGREZBO2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cclxuLnRnIHRoe2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI2QURFNDtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XHJcbi50ZyAudGctYm40b3tmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcDtiYWNrZ3JvdW5kLWNvbG9yOnJlZDt9XHJcbi50ZyAudGctdHhnaXtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctNmsydHtiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLXFqdjd7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO2ZvbnQtc2l6ZToxOHB4O3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy15dzRse3ZlcnRpY2FsLWFsaWduOnRvcDtiYWNrZ3JvdW5kLWNvbG9yOnJlZH1cclxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgey50ZyB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnIGNvbCB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnLXdyYXAge292ZXJmbG93LXg6IGF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO319PC9zdHlsZT5cclxuICAgICAgICAgICAgICBcclxuICBcclxuICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj5cclxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkX25hbWUsICdtYXN0ZXInOiAnYXV0bycsICdhcHBfbmFtZSc6ICdhdXRvJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgIDxoMiA+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7cmVjb3JkX2RldGFpbHMubWFycXVlU2VsZWN0ZWR9fSB7e3JlY29yZF9kZXRhaWxzLm1vZGVsZVNlbGVjdGVkfX0gIDwvYj48L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XHJcbiAgICAgICAgICAgICAgICAgPG9mZnJlPjwvb2ZmcmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICA8L2Rpdj5cclxuICAgXHJcbiAgXHJcbiAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgIDwhLS0gTmF2IHRhYnMgLS0+XHJcbiAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XHJcbiAgICAgICAgPGxpICBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjaG9tZVwiIGFyaWEtY29udHJvbHM9XCJob21lXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+RGV0YWlscyB0ZWNobmlxdWVzPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3Bob3Rvc1wiIGFyaWEtY29udHJvbHM9XCJwaG90b3NcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiAgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPlBob3RvczwvYT48L2xpPlxyXG4gICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNzaW1pbGFpcmVcIiBhcmlhLWNvbnRyb2xzPVwiYWRtaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ww6loaWN1bGVzIHNpbWlsYWlyZXM8L2E+PC9saT5cclxuICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPiAgXHJcbiAgICAgICAgICAgIDwhLS0gVEFCIEFMTCBJTkZPUyAtLT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRnLXdyYXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLWJuNG9cIj48L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGctYm40b1wiIGNvbHNwYW49XCIzXCI+e3tyZWNvcmRfZGV0YWlscy5tYXJxdWVTZWxlY3RlZH19IHt7cmVjb3JkX2RldGFpbHMubW9kZWxlU2VsZWN0ZWR9fSA8L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Bbm7DqWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5tb250aFNlbGVjdGVkfX0ge3tyZWNvcmRfZGV0YWlscy55ZWFyU2VsZWN0ZWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5WZXJzaW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMudmVyc2lvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Nb3RvcmlzYXRpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZnVlbFNlbGVjdGVkfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+Qm9pdGUgZGUgdml0ZXNzZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmdlYXJfYm94fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPktpbG9tw6l0cmFnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmtpbG9tZXRyYWdlWzBdLm5vbX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlB1aXNzYW5jZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnBvd2VyfX0gQ1Y8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlBvcnRlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLm5icG9ydGVzU2VsZWN0ZWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiIGFsaWduPVwiY2VudGVyXCIgIGNvbHNwYW49XCIzXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzBdLm5vbX19PC90aD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnRlbH19PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICBjb2xzcGFuPVwiM1wiPkNvZGUgUG9zdGFsIHt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsxXS5hZHJlc3NlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0Zy15dzRsXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+IHt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVszXS5lbWFpbH19PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkIGNvbHNwYW49XCI0XCI+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5WYWxldXIgY2F0YWxvZ3VlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwiZGV0YWlsc1wiID57e3RlY2hfZGV0YWlscy5wcml4fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnT1VJJ1wiPlByZW1pw6hyZSBtYWluPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnTk9OJ1wiPlNlY29uZGUgbWFpbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIiA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmltcG9ydCA9PSAnT1VJJ1wiPkltcG9ydMOpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgPkNsw6lzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiID57e3JlY29yZF9kZXRhaWxzLmNsZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+Q2FybmV0IGQnZW50cmV0aWVuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmUubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+T3B0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIiBjb2xzcGFuPVwiM1wiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb25zX3ZvaXR1cmUgb2YgcmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7b3B0aW9uc192b2l0dXJlfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiAgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiIGlkPVwiY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIGRhdGEtcmlkZT1cImNhcm91c2VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIEluZGljYXRvcnMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiBkYXRhLXNsaWRlLXRvPVwiMFwiIGNsYXNzPVwiYWN0aXZlXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCIyXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCIzXCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCI0XCI+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIFdyYXBwZXIgZm9yIHNsaWRlcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiIHJvbGU9XCJsaXN0Ym94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGFjdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMV0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMl0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbM10uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbNF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLSBDb250cm9scyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVmdCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj1cIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInJpZ2h0IGNhcm91c2VsLWNvbnRyb2xcIiBocmVmPVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwibmV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1yaWdodFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gUEhPVE9TIFZFSElDVUxFIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cInBob3Rvc1wiICpuZ0lmPVwiaW1hZ2VzX3RvX3Nob3dcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzFdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzJdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1szXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbNF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSBWRUhJQ1VMRVMgU0lNSUxBSVJFUyBBQ0hFVEUtLT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJzaW1pbGFpcmVcIj4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dG9EZXRhaWxzQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dG9EZXRhaWxzU2VydmljZTogQXV0b0RldGFpbHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcbiAgICByZWNvcmRfZGV0YWlscztcclxuICAgIHRlY2hfZGV0YWlscztcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBvYmpfaWQ7XHJcbiAgICBsaXN0X29wdGlvbnM9IFtdO1xyXG5cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIGRldGFpbHMgPSBmYWxzZTtcclxuICAgIGdyaWRfbmFtZSA9ICcnO1xyXG4gICAgaW1hZ2VzX3RvX3Nob3cgPSBmYWxzZTtcclxuICAgIG1vZGVsO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgICAgICAgdGhpcy5ncmlkX25hbWUgPSBwYXJhbXNbJ2dyaWRfbmFtZSddXHJcbiAgICAgICAgICAgIC8vIEluIGEgcmVhbCBhcHA6IGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIHRoZSBkZXRhaWxzIGhlcmUuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSlcclxuXHJcbiAgICAgICAgdGhpcy5fYXV0b0RldGFpbHNTZXJ2aWNlLmdldERhdGFzKHRoaXMub2JqX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNvcmRfZGV0YWlscyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAgdGhpcy5yZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmUgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0X29wdGlvbnMgPSB0aGlzLnJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgdGhpcy5yZWNvcmRfZGV0YWlscy5maWxlRGV0YWlscyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlc190b19zaG93ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdF9vcHRpb25zKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlY29yZF9kZXRhaWxzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNT0RFTE9GRlJFKGRhdGEuX2lkLGRhdGEub2ZmcmVfcmFjaGF0LGRhdGEucHJpeF92ZW50ZSwgZGF0YS5hY2hldGUsIGRhdGEuZXRhdF90cmFuc2FjdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1dG9EZXRhaWxzU2VydmljZS5nZXRUZWNoSW5mb3ModGhpcy5yZWNvcmRfZGV0YWlscy52ZXJzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWNoX2RldGFpbHMgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFpbHMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPYmplY3QoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
