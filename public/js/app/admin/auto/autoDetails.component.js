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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2F1dG8vYXV0b0RldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW9FO0FBQ3BFLGtEQUFpRDtBQUNqRCw0Q0FBeUU7QUFDekUsNERBQXNEO0FBQ3RELHdDQUFtQztBQUNuQywrREFBeUQ7QUFDekQsNkNBQXVDO0FBOEx2QyxJQUFhLG9CQUFvQixHQUFqQztJQUdJLFlBQW9CLFlBQXlCLEVBQVUsWUFBOEIsRUFBVSxNQUFjLEVBQ3pGLG1CQUF1QyxFQUFTLEtBQXFCLEVBQVUsS0FBVztRQUQxRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekYsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFvQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUs5RyxpQkFBWSxHQUFFLEVBQUUsQ0FBQztRQUVqQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBVnlGLENBQUM7SUFZakgsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBRXhDLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFN0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMs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QUF3QiwrQkFBZ0IsRUFBa0IsZUFBTTtRQUNwRSx3Q0FBa0IsRUFBZ0IsdUJBQWMsRUFBaUIsV0FBSTtHQUpyRyxvQkFBb0IsQ0FrRmhDO0FBbEZZLG9EQUFvQiIsImZpbGUiOiJhZG1pbi9hdXRvL2F1dG9EZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtBdXRvRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2F1dG9EZXRhaWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNT0RFTE9GRlJFfSBmcm9tIFwiLi9Nb2RlbE9mZnJlXCJcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtZGV0YWlscycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG4udGcgdGR7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7cGFkZGluZzoxMHB4IDVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjBweDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpub3JtYWw7Ym9yZGVyLWNvbG9yOiM5OTk7Y29sb3I6IzQ0NDtiYWNrZ3JvdW5kLWNvbG9yOiNGN0ZERkE7Ym9yZGVyLXRvcC13aWR0aDoxcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7fVxyXG4udGcgdGh7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjZBREU0O2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cclxuLnRnIC50Zy1ibjRve2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE4cHg7dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQtY29sb3I6cmVkO31cclxuLnRnIC50Zy10eGdpe2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6XCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7YmFja2dyb3VuZC1jb2xvcjojZWZlZmVmO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy02azJ0e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQzt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctcWp2N3tiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7Zm9udC1zaXplOjE4cHg7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLXl3NGx7dmVydGljYWwtYWxpZ246dG9wO2JhY2tncm91bmQtY29sb3I6cmVkfVxyXG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7LnRnIHt3aWR0aDogYXV0byAhaW1wb3J0YW50O30udGcgY29sIHt3aWR0aDogYXV0byAhaW1wb3J0YW50O30udGctd3JhcCB7b3ZlcmZsb3cteDogYXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7fX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgIFxyXG4gIFxyXG4gICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPlxyXG4gICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWRfbmFtZSwgJ21hc3Rlcic6ICdhdXRvJywgJ2FwcF9uYW1lJzogJ2F1dG8nfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGgyID48YiBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tyZWNvcmRfZGV0YWlscy5tYXJxdWVTZWxlY3RlZH19IHt7cmVjb3JkX2RldGFpbHMubW9kZWxlU2VsZWN0ZWR9fSAgPC9iPjwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICAgICA8b2ZmcmU+PC9vZmZyZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgIDwvZGl2PlxyXG4gICBcclxuICBcclxuICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgPCEtLSBOYXYgdGFicyAtLT5cclxuICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICA8bGkgIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNob21lXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5EZXRhaWxzIHRlY2huaXF1ZXM8L2E+PC9saT5cclxuICAgICAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjcGhvdG9zXCIgYXJpYS1jb250cm9scz1cInBob3Rvc1wiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiICAqbmdJZj1cImltYWdlc190b19zaG93XCI+UGhvdG9zPC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3NpbWlsYWlyZVwiIGFyaWEtY29udHJvbHM9XCJhZG1pblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlbDqWhpY3VsZXMgc2ltaWxhaXJlczwvYT48L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+ICBcclxuICAgICAgICAgICAgPCEtLSBUQUIgQUxMIElORk9TIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJob21lXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGctd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGctYm40b1wiPjwvdGg+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGggY2xhc3M9XCJ0Zy1ibjRvXCIgY29sc3Bhbj1cIjNcIj57e3JlY29yZF9kZXRhaWxzLm1hcnF1ZVNlbGVjdGVkfX0ge3tyZWNvcmRfZGV0YWlscy5tb2RlbGVTZWxlY3RlZH19IDwvdGg+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkFubsOpZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLm1vbnRoU2VsZWN0ZWR9fSB7e3JlY29yZF9kZXRhaWxzLnllYXJTZWxlY3RlZH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlZlcnNpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy52ZXJzaW9ufX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPk1vdG9yaXNhdGlvbjo8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5mdWVsU2VsZWN0ZWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Cb2l0ZSBkZSB2aXRlc3NlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZ2Vhcl9ib3h9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+S2lsb23DqXRyYWdlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMua2lsb21ldHJhZ2VbMF0ubm9tfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+UHVpc3NhbmNlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucG93ZXJ9fSBDVjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+UG9ydGVzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMubmJwb3J0ZXNTZWxlY3RlZH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjRcIj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0Zy15dzRsXCIgYWxpZ249XCJjZW50ZXJcIiAgY29sc3Bhbj1cIjNcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMF0ubm9tfX08L3RoPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMl0udGVsfX08L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgIGNvbHNwYW49XCIzXCI+Q29kZSBQb3N0YWwge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzFdLmFkcmVzc2V9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj48dGQgY29sc3Bhbj1cIjRcIj48L3RkPjwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlZhbGV1ciBjYXRhbG9ndWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgKm5nSWY9XCJkZXRhaWxzXCIgPnt7dGVjaF9kZXRhaWxzLnByaXh9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWluID09ICdPVUknXCI+UHJlbWnDqHJlIG1haW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWluID09ICdOT04nXCI+U2Vjb25kZSBtYWluPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiID48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+SW1wb3J0w6k8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5pbXBvcnQgPT0gJ09VSSdcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIiA+Q2zDqXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgPnt7cmVjb3JkX2RldGFpbHMuY2xlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5jYXJuZXQgPT0gJ09VSSdcIj5DYXJuZXQgZCdlbnRyZXRpZW48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5jYXJuZXQgPT0gJ09VSSdcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tb2tcIj48L3NwYW4+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdJZj1cInJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZS5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5PcHRpb25zPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiIGNvbHNwYW49XCIzXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG9wdGlvbnNfdm9pdHVyZSBvZiByZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvcHRpb25zX3ZvaXR1cmV9fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICA8ZGl2ICAqbmdJZj1cImltYWdlc190b19zaG93XCIgaWQ9XCJjYXJvdXNlbC1leGFtcGxlLWdlbmVyaWNcIiBjbGFzcz1cImNhcm91c2VsIHNsaWRlXCIgZGF0YS1yaWRlPVwiY2Fyb3VzZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gSW5kaWNhdG9ycyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxvbCBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGRhdGEtdGFyZ2V0PVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIGRhdGEtc2xpZGUtdG89XCIwXCIgY2xhc3M9XCJhY3RpdmVcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgZGF0YS1zbGlkZS10bz1cIjFcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgZGF0YS1zbGlkZS10bz1cIjJcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgZGF0YS1zbGlkZS10bz1cIjNcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgZGF0YS10YXJnZXQ9XCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgZGF0YS1zbGlkZS10bz1cIjRcIj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9vbD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS0gV3JhcHBlciBmb3Igc2xpZGVzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWlubmVyXCIgcm9sZT1cImxpc3Rib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gYWN0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1swXS5maWxlX3VybH19XCIgd2lkdGg9XCI2ODBcIiBoZWlnaHQ9XCI1MjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1sxXS5maWxlX3VybH19XCIgd2lkdGg9XCI2ODBcIiBoZWlnaHQ9XCI1MjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1syXS5maWxlX3VybH19XCIgd2lkdGg9XCI2ODBcIiBoZWlnaHQ9XCI1MjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1szXS5maWxlX3VybH19XCIgd2lkdGg9XCI2ODBcIiBoZWlnaHQ9XCI1MjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1s0XS5maWxlX3VybH19XCIgd2lkdGg9XCI2ODBcIiBoZWlnaHQ9XCI1MjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tIENvbnRyb2xzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJsZWZ0IGNhcm91c2VsLWNvbnRyb2xcIiBocmVmPVwiI2Nhcm91c2VsLWV4YW1wbGUtZ2VuZXJpY1wiIHJvbGU9XCJidXR0b25cIiBkYXRhLXNsaWRlPVwicHJldlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5QcmV2aW91czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicmlnaHQgY2Fyb3VzZWwtY29udHJvbFwiIGhyZWY9XCIjY2Fyb3VzZWwtZXhhbXBsZS1nZW5lcmljXCIgcm9sZT1cImJ1dHRvblwiIGRhdGEtc2xpZGU9XCJuZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1jaGV2cm9uLXJpZ2h0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBQSE9UT1MgVkVISUNVTEUgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwicGhvdG9zXCIgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1swXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMV0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbMl0uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzNdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1s0XS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFZFSElDVUxFUyBTSU1JTEFJUkVTIEFDSEVURS0tPlxyXG4gICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmVcIiBpZD1cInNpbWlsYWlyZVwiPiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICA8L2Rpdj5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXV0b0RldGFpbHNDb21wb25lbnQge1xyXG5cclxuICAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0b0RldGFpbHNTZXJ2aWNlOiBBdXRvRGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuICAgIHJlY29yZF9kZXRhaWxzO1xyXG4gICAgdGVjaF9kZXRhaWxzO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIG9ial9pZDtcclxuICAgIGxpc3Rfb3B0aW9ucz0gW107XHJcblxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgZGV0YWlscyA9IGZhbHNlO1xyXG4gICAgZ3JpZF9uYW1lID0gJyc7XHJcbiAgICBpbWFnZXNfdG9fc2hvdyA9IGZhbHNlO1xyXG4gICAgbW9kZWw7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB0aGlzLmdyaWRfbmFtZSA9IHBhcmFtc1snZ3JpZF9uYW1lJ11cclxuICAgICAgICAgICAgLy8gSW4gYSByZWFsIGFwcDogZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgdGhlIGRldGFpbHMgaGVyZS5cclxuICAgICAgICB9KTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlKVxyXG5cclxuICAgICAgICB0aGlzLl9hdXRvRGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZF9kZXRhaWxzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICB0aGlzLnJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Rfb3B0aW9ucyA9IHRoaXMucmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB0aGlzLnJlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzX3RvX3Nob3cgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0X29wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVjb3JkX2RldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gbmV3IE1PREVMT0ZGUkUoZGF0YS5faWQsZGF0YS5vZmZyZV9yYWNoYXQsZGF0YS5wcml4X3ZlbnRlLCBkYXRhLmFjaGV0ZSwgZGF0YS5ldGF0X3RyYW5zYWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXV0b0RldGFpbHNTZXJ2aWNlLmdldFRlY2hJbmZvcyh0aGlzLnJlY29yZF9kZXRhaWxzLnZlcnNpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlY2hfZGV0YWlscyA9IGRhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
