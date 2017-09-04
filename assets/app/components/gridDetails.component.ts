import {Component, Input, Output, EventEmitter} from '@angular/core'
import {GridPanelService} from "./grid.service";
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import {StepService} from "../Engine/step.service";
import {Http} from "@angular/http";
import {GridDetailsService} from "./gridDetails.service";
@Component({
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
})

export class GridDetailsComponent {

    // router = new Router;
    constructor(private _stepService: StepService, private _gridService: GridPanelService, private router: Router,
                private _gridDetailsService: GridDetailsService,private route: ActivatedRoute, private _http: Http){}
    record_details;
    tech_details;
    private sub: any;
    obj_id;
    list_options= [];

    display = false;
    details = false;

    images_to_show = false;

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record']; // (+) converts string 'id' to a number

            // In a real app: dispatch action to load the details here.
        });
       console.log(this.obj_id)

        this._gridDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
                    console.log(data)
                    this.record_details = data;
                    if (typeof  this.record_details.options_voiture != 'undefined') {
                        this.list_options = this.record_details.options_voiture;
                    }

                    if( typeof this.record_details.fileDetails[0] != 'undefined') {
                        this.images_to_show = true;

                    }
                    console.log(this.list_options);
                    console.log(this.record_details)
                    this.display = true;


                    this._gridDetailsService.getTechInfos(this.record_details.version)
                        .subscribe(data => {
                            this.tech_details = data;
                            console.log(data)
                            this.details = true;
                            },
                            error => console.log(error)
                        )

                },
                error => console.log(error)
            )



    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    goToCurrentStep(item){
        console.log(item);
        let navigationExtras: NavigationExtras = {
            queryParams: { 'current_id': item.step_id, '_id': item._id }

        };

        this.router.navigate(['/step'], navigationExtras);
    }

    isObject(item) {
        return (typeof item === "object" && !Array.isArray(item) && item !== null);
    }







}