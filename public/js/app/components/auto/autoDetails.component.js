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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0by9hdXRvRGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsa0RBQWlEO0FBQ2pELDRDQUF5RTtBQUN6RSw0REFBc0Q7QUFDdEQsd0NBQW1DO0FBQ25DLCtEQUF5RDtBQUN6RCw2Q0FBdUM7QUE4THZDLElBQWEsb0JBQW9CLEdBQWpDO0lBR0ksWUFBb0IsWUFBeUIsRUFBVSxZQUE4QixFQUFVLE1BQWMsRUFDekYsbUJBQXVDLEVBQVMsS0FBcUIsRUFBVSxLQUFXO1FBRDFGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSzlHLGlCQUFZLEdBQUUsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFWeUYsQ0FBQztJQVlqSCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFFeEMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUU3QixJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLElBQUks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QUFXLEVBQXdCLCtCQUFnQixFQUFrQixlQUFNO1FBQ3BFLHdDQUFrQixFQUFnQix1QkFBYyxFQUFpQixXQUFJO0dBSnJHLG9CQUFvQixDQWtGaEM7QUFsRlksb0RBQW9CIiwiZmlsZSI6ImNvbXBvbmVudHMvYXV0by9hdXRvRGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtBdXRvRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2F1dG9EZXRhaWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7TU9ERUxPRkZSRX0gZnJvbSBcIi4vTW9kZWxPZmZyZVwiXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyaWQtZGV0YWlscycsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxuLnRnIHRke2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiM0NDQ7YmFja2dyb3VuZC1jb2xvcjojRjdGREZBO2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cbi50ZyB0aHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpub3JtYWw7cGFkZGluZzoxMHB4IDVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjBweDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpub3JtYWw7Ym9yZGVyLWNvbG9yOiM5OTk7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyNkFERTQ7Ym9yZGVyLXRvcC13aWR0aDoxcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7fVxuLnRnIC50Zy1ibjRve2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE4cHg7dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQtY29sb3I6cmVkO31cbi50ZyAudGctdHhnaXtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XG4udGcgLnRnLTZrMnR7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO3ZlcnRpY2FsLWFsaWduOnRvcH1cbi50ZyAudGctcWp2N3tiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7Zm9udC1zaXplOjE4cHg7dmVydGljYWwtYWxpZ246dG9wfVxuLnRnIC50Zy15dzRse3ZlcnRpY2FsLWFsaWduOnRvcDtiYWNrZ3JvdW5kLWNvbG9yOnJlZH1cbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7LnRnIHt3aWR0aDogYXV0byAhaW1wb3J0YW50O30udGcgY29sIHt3aWR0aDogYXV0byAhaW1wb3J0YW50O30udGctd3JhcCB7b3ZlcmZsb3cteDogYXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7fX08L3N0eWxlPlxuICAgICAgICAgICAgICBcbiAgXG4gICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPlxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWRfbmFtZSwgJ21hc3Rlcic6ICdhdXRvJywgJ2FwcF9uYW1lJzogJ2F1dG8nfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICAgIDxoMiA+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7cmVjb3JkX2RldGFpbHMubWFycXVlU2VsZWN0ZWR9fSB7e3JlY29yZF9kZXRhaWxzLm1vZGVsZVNlbGVjdGVkfX0gIDwvYj48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cbiAgICAgICAgICAgICAgICAgPG9mZnJlPjwvb2ZmcmU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICA8L2Rpdj5cbiAgIFxuICBcbiAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICA8IS0tIE5hdiB0YWJzIC0tPlxuICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgPGxpICBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjaG9tZVwiIGFyaWEtY29udHJvbHM9XCJob21lXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+RGV0YWlscyB0ZWNobmlxdWVzPC9hPjwvbGk+XG4gICAgICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNwaG90b3NcIiBhcmlhLWNvbnRyb2xzPVwicGhvdG9zXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgICpuZ0lmPVwiaW1hZ2VzX3RvX3Nob3dcIj5QaG90b3M8L2E+PC9saT5cbiAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3NpbWlsYWlyZVwiIGFyaWEtY29udHJvbHM9XCJhZG1pblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlbDqWhpY3VsZXMgc2ltaWxhaXJlczwvYT48L2xpPlxuICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+ICBcbiAgICAgICAgICAgIDwhLS0gVEFCIEFMTCBJTkZPUyAtLT5cbiAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cImhvbWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGctd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGctYm40b1wiPjwvdGg+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGctYm40b1wiIGNvbHNwYW49XCIzXCI+e3tyZWNvcmRfZGV0YWlscy5tYXJxdWVTZWxlY3RlZH19IHt7cmVjb3JkX2RldGFpbHMubW9kZWxlU2VsZWN0ZWR9fSA8L3RoPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Bbm7DqWU8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMubW9udGhTZWxlY3RlZH19IHt7cmVjb3JkX2RldGFpbHMueWVhclNlbGVjdGVkfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlZlcnNpb248L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMudmVyc2lvbn19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Nb3RvcmlzYXRpb246PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmZ1ZWxTZWxlY3RlZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Cb2l0ZSBkZSB2aXRlc3NlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmdlYXJfYm94fX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPktpbG9tw6l0cmFnZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5raWxvbWV0cmFnZVswXS5ub219fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+UHVpc3NhbmNlPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnBvd2VyfX0gQ1Y8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Qb3J0ZXM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMubmJwb3J0ZXNTZWxlY3RlZH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIiBhbGlnbj1cImNlbnRlclwiICBjb2xzcGFuPVwiM1wiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fTwvdGg+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMl0udGVsfX08L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICBjb2xzcGFuPVwiM1wiPkNvZGUgUG9zdGFsIHt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsxXS5hZHJlc3NlfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3NwYW4+PC90aD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQgY29sc3Bhbj1cIjRcIj48L3RkPjwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+VmFsZXVyIGNhdGFsb2d1ZTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgKm5nSWY9XCJkZXRhaWxzXCIgPnt7dGVjaF9kZXRhaWxzLnByaXh9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWluID09ICdPVUknXCI+UHJlbWnDqHJlIG1haW48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnTk9OJ1wiPlNlY29uZGUgbWFpbjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1va1wiPjwvc3Bhbj48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+SW1wb3J0w6k8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgPkNsw6lzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIiA+e3tyZWNvcmRfZGV0YWlscy5jbGV9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5jYXJuZXQgPT0gJ09VSSdcIj5DYXJuZXQgZCdlbnRyZXRpZW48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmUubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPk9wdGlvbnM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiIGNvbHNwYW49XCIzXCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uc192b2l0dXJlIG9mIHJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvcHRpb25zX3ZvaXR1cmV9fSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cImltYWdlc190b19zaG93XCIgaWQ9XCJjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIEluZGljYXRvcnMgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgPG9sIGNsYXNzPVwiY2Fyb3VzZWwtaW5kaWNhdG9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCIxXCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBkYXRhLXRhcmdldD1cIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiBkYXRhLXNsaWRlLXRvPVwiMlwiPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgZGF0YS1zbGlkZS10bz1cIjNcIj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCI0XCI+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICA8L29sPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIFdyYXBwZXIgZm9yIHNsaWRlcyAtLT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2Fyb3VzZWwtaW5uZXJcIiByb2xlPVwibGlzdGJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gYWN0aXZlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMV0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMl0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbM10uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbNF0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNjgwXCIgaGVpZ2h0PVwiNTIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIENvbnRyb2xzIC0tPlxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibGVmdCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj1cIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cInByZXZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLWxlZnRcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJyaWdodCBjYXJvdXNlbC1jb250cm9sXCIgaHJlZj1cIiNjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiByb2xlPVwiYnV0dG9uXCIgZGF0YS1zbGlkZT1cIm5leHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TmV4dDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwhLS0gUEhPVE9TIFZFSElDVUxFIC0tPlxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJwaG90b3NcIiAqbmdJZj1cImltYWdlc190b19zaG93XCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1swXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1sxXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzJdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbM10uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1s0XS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8IS0tIFZFSElDVUxFUyBTSU1JTEFJUkVTIEFDSEVURS0tPlxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJzaW1pbGFpcmVcIj4gICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICBcblxuICAgIDwvZGl2PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRvRGV0YWlsc0NvbXBvbmVudCB7XG5cbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0b0RldGFpbHNTZXJ2aWNlOiBBdXRvRGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cbiAgICByZWNvcmRfZGV0YWlscztcbiAgICB0ZWNoX2RldGFpbHM7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBvYmpfaWQ7XG4gICAgbGlzdF9vcHRpb25zPSBbXTtcblxuICAgIGRpc3BsYXkgPSBmYWxzZTtcbiAgICBkZXRhaWxzID0gZmFsc2U7XG4gICAgZ3JpZF9uYW1lID0gJyc7XG4gICAgaW1hZ2VzX3RvX3Nob3cgPSBmYWxzZTtcbiAgICBtb2RlbDtcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgICAgICAgICB0aGlzLmdyaWRfbmFtZSA9IHBhcmFtc1snZ3JpZF9uYW1lJ11cbiAgICAgICAgICAgIC8vIEluIGEgcmVhbCBhcHA6IGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIHRoZSBkZXRhaWxzIGhlcmUuXG4gICAgICAgIH0pO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlKVxuXG4gICAgICAgIHRoaXMuX2F1dG9EZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkX2RldGFpbHMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICB0aGlzLnJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0X29wdGlvbnMgPSB0aGlzLnJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgdGhpcy5yZWNvcmRfZGV0YWlscy5maWxlRGV0YWlscyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbWFnZXNfdG9fc2hvdyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3Rfb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVjb3JkX2RldGFpbHMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kZWwgPSBuZXcgTU9ERUxPRkZSRShkYXRhLl9pZCxkYXRhLm9mZnJlX3JhY2hhdCxkYXRhLnByaXhfdmVudGUsIGRhdGEuYWNoZXRlLCBkYXRhLmV0YXRfdHJhbnNhY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2F1dG9EZXRhaWxzU2VydmljZS5nZXRUZWNoSW5mb3ModGhpcy5yZWNvcmRfZGV0YWlscy52ZXJzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlY2hfZGV0YWlscyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApXG5cblxuXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cblxuICAgIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG5cblxuXG5cblxuXG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
