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
const gridDetails_service_1 = require("./gridDetails.service");
let GridDetailsComponent = class GridDetailsComponent {
    constructor(_stepService, _gridService, router, _gridDetailsService, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this._gridDetailsService = _gridDetailsService;
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
        this._gridDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
            console.log(data);
            this.record_details = data;
            if (typeof this.record_details.options_voiture != 'undefined') {
                this.list_options = this.record_details.options_voiture;
            }
            if (typeof this.record_details.fileDetails[0] != 'undefined') {
                this.images_to_show = true;
            }
            console.log(this.list_options);
            console.log(this.record_details);
            this.display = true;
            this._gridDetailsService.getTechInfos(this.record_details.version)
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
GridDetailsComponent = __decorate([
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
    <li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Details techniques</a></li>
    <li role="presentation"><a href="#contact" aria-controls="contact" role="tab" data-toggle="tab">Contact</a></li>
    <li role="presentation"><a href="#photos" aria-controls="photos" role="tab" data-toggle="tab"  *ngIf="images_to_show">Photos</a></li>
    <li role="presentation"><a href="#admin" aria-controls="admin" role="tab" data-toggle="tab">Détails administratifs</a></li>
    <li role="presentation"><a href="#tech" aria-controls="tech" role="tab" data-toggle="tab">Caractéristiques techniques</a></li>
  </ul>
                  
        <div class="tab-content">  
            
            <!-- TAB ALL INFOS -->
            <div role="tabpanel" class="tab-pane active" id="home">
                  
     
                <div class="tg-wrap">
                    <table class="tg">
                      <tr>
                        <th></th>
                        <th class="tg-bn4o" colspan="3">{{record_details.marqueSelected}} {{record_details.modeleSelected}} </th>
                      </tr>
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
                        <td class="tg-6k2t" colspan="3"> <ul class="items">
                                                    <li *ngFor="let options_voiture of record_details.options_voiture">
                                                        {{options_voiture}}  
                                                    </li>
                                                </ul></td>
                      </tr>
                    </table>
                </div>
                              
            </div>
                    
            <!-- INFOS CONTACT-->
            <div role="tabpanel" class="tab-pane" id="contact">
                    <div class="tg-wrap"><table class="tg">
                  <tr>
                    <th class="tg-031e">Nom</th>
                    <th class="tg-yw4l">{{record_details.profile[0].nom}}</th>
                  </tr>
                  <tr>
                    <td class="tg-031e">Code Postal</td>
                    <td class="tg-yw4l">{{record_details.profile[1].adresse}}</td>
                  </tr>
                  <tr>
                    <td class="tg-031e">Téléphone</td>
                    <td class="tg-yw4l">{{record_details.profile[2].tel}}</td>
                  </tr>
                  <tr>
                    <td class="tg-031e">Email</td>
                    <td class="tg-yw4l">{{record_details.profile[3].email}}</td>
                  </tr>
                </table></div>
                    
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

            <!-- INFO ADMINISTRATIVES-->
            <div role="tabpanel" class="tab-pane" id="admin">          
                <div class="row">
                    <div class="col-md-6">: {{record_details.premiere_main}}</div>
                    <div class="col-md-6">Importé: {{record_details.import}}</div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">Carnet d'entretien: {{record_details.carnet}}</div>
                    <div class="col-md-6">Clés: {{record_details.cle}}</div>
                </div>
                
                <div class="row" *ngIf="record_details.roule == 'NON'">
                    <div *ngIf="record_details.accident == OUI"> 
                        Véhicule accidenté<br>
                        Raison: {{record_details.accident}}
                    </div>
                </div>
            </div>
            
            <!-- INFO TECHNIQUES -->
            <div role="tabpanel" class="tab-pane" id="tech">
                <div class="row">
                    <div class="col-md-6">: {{record_details.premiere_main}}</div>
                    <div class="col-md-6">Importé: {{record_details.import}}</div>
                </div>
                
                <div class="row">
                    <div class="col-md-6">Carnet d'entretien: {{record_details.carnet}}</div>
                    <div class="col-md-6">Clés: {{record_details.cle}}</div>
                </div>
                      
            </div>
        </div>
            

    </div>`
    }), 
    __metadata('design:paramtypes', [step_service_1.StepService, gridPanel_service_1.GridPanelService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridDetails_service_1.GridDetailsService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
], GridDetailsComponent);
exports.GridDetailsComponent = GridDetailsComponent;
var _a, _b, _c;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZERldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSxvQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCx5QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUN6RSwrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCx1QkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsc0NBQWlDLHVCQUF1QixDQUFDLENBQUE7QUFpTXpEO0lBR0ksWUFBb0IsWUFBeUIsRUFBVSxZQUE4QixFQUFVLE1BQWMsRUFDekYsbUJBQXVDLEVBQVMsS0FBcUIsRUFBVSxLQUFXO1FBRDFGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6Rix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW9CO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBSzlHLGlCQUFZLEdBQUUsRUFBRSxDQUFDO1FBRWpCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUVoQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQVZ5RixDQUFDO0lBWWpILFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBR25DLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3pDLFNBQVMsQ0FBQyxJQUFJO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxPQUFRLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUM7WUFDNUQsQ0FBQztZQUVELEVBQUUsQ0FBQSxDQUFFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFFL0IsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBR3BCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7aUJBQzdELFNBQVMsQ0FBQyxJQUFJO2dCQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7UUFFVCxDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFJVCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGVBQWUsQ0FBQyxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FFL0QsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDVCxNQUFNLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0FBUUwsQ0FBQztBQWpSRDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0EyTEg7S0FDVixDQUFDOzt3QkFBQTtBQUVXLDRCQUFvQix1QkFpRmhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncmlkRGV0YWlscy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0dyaWREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vZ3JpZERldGFpbHMuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1kZXRhaWxzJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgICAgPHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPlxyXG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XHJcbi50ZyB0ZHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojNDQ0O2JhY2tncm91bmQtY29sb3I6I0Y3RkRGQTtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XHJcbi50ZyB0aHtmb250LWZhbWlseTpBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6MTZweDtmb250LXdlaWdodDpub3JtYWw7cGFkZGluZzoxMHB4IDVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjBweDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpub3JtYWw7Ym9yZGVyLWNvbG9yOiM5OTk7Y29sb3I6I2ZmZjtiYWNrZ3JvdW5kLWNvbG9yOiMyNkFERTQ7Ym9yZGVyLXRvcC13aWR0aDoxcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7fVxyXG4udGcgLnRnLWJuNG97Zm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MThweDt0ZXh0LWFsaWduOmNlbnRlcjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctdHhnaXtmb250LXdlaWdodDpib2xkO2ZvbnQtZmFtaWx5OlwiVHJlYnVjaGV0IE1TXCIsIEhlbHZldGljYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50OztiYWNrZ3JvdW5kLWNvbG9yOiNlZmVmZWY7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLTZrMnR7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy1xanY3e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQztmb250LXNpemU6MThweDt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGcteXc0bHt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHsudGcge3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fS50ZyBjb2wge3dpZHRoOiBhdXRvICFpbXBvcnRhbnQ7fS50Zy13cmFwIHtvdmVyZmxvdy14OiBhdXRvOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDt9fTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgPCEtLTxwcmV2aW91cy1wYWdlPjwvcHJldmlvdXMtcGFnZT4tLT5cclxuICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJ0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tZW51J10pXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIj4gUmV0b3VyPC9pPjwvYnV0dG9uPlxyXG4gIDwvbmF2PlxyXG4gIFxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuXHJcbiAgXHJcbiAgPCEtLSBOYXYgdGFicyAtLT5cclxuICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjaG9tZVwiIGFyaWEtY29udHJvbHM9XCJob21lXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+RGV0YWlscyB0ZWNobmlxdWVzPC9hPjwvbGk+XHJcbiAgICA8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjY29udGFjdFwiIGFyaWEtY29udHJvbHM9XCJjb250YWN0XCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+Q29udGFjdDwvYT48L2xpPlxyXG4gICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3Bob3Rvc1wiIGFyaWEtY29udHJvbHM9XCJwaG90b3NcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiAgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPlBob3RvczwvYT48L2xpPlxyXG4gICAgPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI2FkbWluXCIgYXJpYS1jb250cm9scz1cImFkbWluXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+RMOpdGFpbHMgYWRtaW5pc3RyYXRpZnM8L2E+PC9saT5cclxuICAgIDxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiN0ZWNoXCIgYXJpYS1jb250cm9scz1cInRlY2hcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5DYXJhY3TDqXJpc3RpcXVlcyB0ZWNobmlxdWVzPC9hPjwvbGk+XHJcbiAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+ICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gVEFCIEFMTCBJTkZPUyAtLT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwiaG9tZVwiPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0Zy13cmFwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLWJuNG9cIiBjb2xzcGFuPVwiM1wiPnt7cmVjb3JkX2RldGFpbHMubWFycXVlU2VsZWN0ZWR9fSB7e3JlY29yZF9kZXRhaWxzLm1vZGVsZVNlbGVjdGVkfX0gPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Bbm7DqWU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5tb250aFNlbGVjdGVkfX0ge3tyZWNvcmRfZGV0YWlscy55ZWFyU2VsZWN0ZWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5WZXJzaW9uPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMudmVyc2lvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Nb3RvcmlzYXRpb246PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZnVlbFNlbGVjdGVkfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+Qm9pdGUgZGUgdml0ZXNzZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmdlYXJfYm94fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPktpbG9tw6l0cmFnZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmtpbG9tZXRyYWdlWzBdLm5vbX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlB1aXNzYW5jZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnBvd2VyfX0gQ1Y8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlBvcnRlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLm5icG9ydGVzU2VsZWN0ZWR9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiIGFsaWduPVwiY2VudGVyXCIgIGNvbHNwYW49XCIzXCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzBdLm5vbX19PC90aD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzcz1cInRnLXl3NGxcIj48c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnRlbH19PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICBjb2xzcGFuPVwiM1wiPkNvZGUgUG9zdGFsIHt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsxXS5hZHJlc3NlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3M9XCJ0Zy15dzRsXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVudmVsb3BlXCI+IHt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVszXS5lbWFpbH19PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+PHRkIGNvbHNwYW49XCI0XCI+PC90ZD48L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5WYWxldXIgY2F0YWxvZ3VlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwiZGV0YWlsc1wiID57e3RlY2hfZGV0YWlscy5wcml4fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnT1VJJ1wiPlByZW1pw6hyZSBtYWluPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbiA9PSAnTk9OJ1wiPlNlY29uZGUgbWFpbjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIiA+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIiAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmltcG9ydCA9PSAnT1VJJ1wiPkltcG9ydMOpPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuaW1wb3J0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCIgPkNsw6lzPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiID57e3JlY29yZF9kZXRhaWxzLmNsZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+Q2FybmV0IGQnZW50cmV0aWVuPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiICpuZ0lmPVwicmVjb3JkX2RldGFpbHMuY2FybmV0ID09ICdPVUknXCI+PHNwYW4gY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLW9rXCI+PC9zcGFuPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5vcHRpb25zX3ZvaXR1cmUubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+T3B0aW9uczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIiBjb2xzcGFuPVwiM1wiPiA8dWwgY2xhc3M9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCBvcHRpb25zX3ZvaXR1cmUgb2YgcmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tvcHRpb25zX3ZvaXR1cmV9fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIElORk9TIENPTlRBQ1QtLT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRnLXdyYXBcIj48dGFibGUgY2xhc3M9XCJ0Z1wiPlxyXG4gICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGctMDMxZVwiPk5vbTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzPVwidGcteXc0bFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVswXS5ub219fTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy0wMzFlXCI+Q29kZSBQb3N0YWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMV0uYWRyZXNzZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTAzMWVcIj5Uw6lsw6lwaG9uZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGcteXc0bFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsyXS50ZWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy0wMzFlXCI+RW1haWw8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXl3NGxcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbM10uZW1haWx9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8L3RhYmxlPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIFBIT1RPUyBWRUhJQ1VMRSAtLT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJwaG90b3NcIiAqbmdJZj1cImltYWdlc190b19zaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXRodW1ibmFpbFwiICBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzBdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxyXG4gICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1sxXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy1yZXNwb25zaXZlXCIgc3JjPVwie3tyZWNvcmRfZGV0YWlscy5maWxlRGV0YWlsc1syXS5maWxlX3VybH19XCIgd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCIzMjBcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctcmVzcG9uc2l2ZVwiIHNyYz1cInt7cmVjb3JkX2RldGFpbHMuZmlsZURldGFpbHNbM10uZmlsZV91cmx9fVwiIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiMzIwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiaW1nLXJlc3BvbnNpdmVcIiBzcmM9XCJ7e3JlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzRdLmZpbGVfdXJsfX1cIiB3aWR0aD1cIjQ4MFwiIGhlaWdodD1cIjMyMFwiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gSU5GTyBBRE1JTklTVFJBVElWRVMtLT5cclxuICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJhZG1pblwiPiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj46IHt7cmVjb3JkX2RldGFpbHMucHJlbWllcmVfbWFpbn19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+SW1wb3J0w6k6IHt7cmVjb3JkX2RldGFpbHMuaW1wb3J0fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2FybmV0IGQnZW50cmV0aWVuOiB7e3JlY29yZF9kZXRhaWxzLmNhcm5ldH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+Q2zDqXM6IHt7cmVjb3JkX2RldGFpbHMuY2xlfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5yb3VsZSA9PSAnTk9OJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJyZWNvcmRfZGV0YWlscy5hY2NpZGVudCA9PSBPVUlcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFbDqWhpY3VsZSBhY2NpZGVudMOpPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBSYWlzb246IHt7cmVjb3JkX2RldGFpbHMuYWNjaWRlbnR9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBJTkZPIFRFQ0hOSVFVRVMgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwidGVjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPjoge3tyZWNvcmRfZGV0YWlscy5wcmVtaWVyZV9tYWlufX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5JbXBvcnTDqToge3tyZWNvcmRfZGV0YWlscy5pbXBvcnR9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5DYXJuZXQgZCdlbnRyZXRpZW46IHt7cmVjb3JkX2RldGFpbHMuY2FybmV0fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5DbMOpczoge3tyZWNvcmRfZGV0YWlscy5jbGV9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkRGV0YWlsc0NvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9ncmlkRGV0YWlsc1NlcnZpY2U6IEdyaWREZXRhaWxzU2VydmljZSxwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG4gICAgcmVjb3JkX2RldGFpbHM7XHJcbiAgICB0ZWNoX2RldGFpbHM7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgb2JqX2lkO1xyXG4gICAgbGlzdF9vcHRpb25zPSBbXTtcclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBkZXRhaWxzID0gZmFsc2U7XHJcblxyXG4gICAgaW1hZ2VzX3RvX3Nob3cgPSBmYWxzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG5cclxuICAgICAgICAgICAgLy8gSW4gYSByZWFsIGFwcDogZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgdGhlIGRldGFpbHMgaGVyZS5cclxuICAgICAgICB9KTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxyXG5cclxuICAgICAgICB0aGlzLl9ncmlkRGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZF9kZXRhaWxzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICB0aGlzLnJlY29yZF9kZXRhaWxzLm9wdGlvbnNfdm9pdHVyZSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3Rfb3B0aW9ucyA9IHRoaXMucmVjb3JkX2RldGFpbHMub3B0aW9uc192b2l0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB0aGlzLnJlY29yZF9kZXRhaWxzLmZpbGVEZXRhaWxzWzBdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzX3RvX3Nob3cgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0X29wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmVjb3JkX2RldGFpbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dyaWREZXRhaWxzU2VydmljZS5nZXRUZWNoSW5mb3ModGhpcy5yZWNvcmRfZGV0YWlscy52ZXJzaW9uKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZWNoX2RldGFpbHMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWlscyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
