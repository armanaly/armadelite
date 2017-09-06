import {Component, Input, Output, EventEmitter} from '@angular/core'
import {GridPanelService} from "../grid.service";
import {Router, NavigationExtras, ActivatedRoute} from '@angular/router';
import {StepService} from "../../Engine/step.service";
import {Http} from "@angular/http";
import {GridDetailsService} from "../gridDetails.service";
import {BalletDetailsService} from "./balletDetails.service";
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
              
        <div class="panel-heading panel-heading-custom" *ngIf="display">
            <div  class="row" align="left">
                <div class="col-md-2">
                   <nav class="form-navArrow" *ngIf="display">
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': record_details.course_type, 'master': record_details.stage}">
                        <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                   </nav>
                </div>
            <div class="col-md-10" align="center">
                <h2><b class="text-uppercase">{{record_details.profile[0].nom}}</b> {{record_details.profile[1].firstname}} </h2>
            </div>
        </div>
       </div>
  
  <div class="panel-body" *ngIf="display">

       
  <!-- Nav tabs -->
  <!--<ul class="nav nav-tabs" role="tablist">-->
    <!--<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Details</a></li>-->
    <!--<li role="presentation"><a href="#registration" aria-controls="registration" role="tab" data-toggle="tab">Registration</a></li>-->
    <!--<li role="presentation"><a href="#notes" aria-controls="notes" role="tab" data-toggle="tab">Notes</a></li>-->
    <!---->
    <!--&lt;!&ndash;<li role="presentation"><a href="#photos" aria-controls="photos" role="tab" data-toggle="tab"  *ngIf="images_to_show">Photos</a></li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li role="presentation"><a href="#admin" aria-controls="admin" role="tab" data-toggle="tab">Détails administratifs</a></li>&ndash;&gt;-->
    <!--&lt;!&ndash;<li role="presentation"><a href="#tech" aria-controls="tech" role="tab" data-toggle="tab">Caractéristiques techniques</a></li>&ndash;&gt;-->
  <!--</ul>-->
                  <!---->
        <!--<div class="tab-content" >  -->
            
            <!-- TAB ALL INFOS -->
            <!--<div role="tabpanel" class="tab-pane active" id="home">-->
                 
                <div >
                    <table class="tg">
                      <tr>
                        <td class="tg-txgi">Birthday</td>
                        <td class="tg-6k2t">{{record_details.dob}}</td>
                        <td class="tg-txgi">Age</td>
                        <td class="tg-6k2t">{{record_details.age}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Country</td>
                        <td class="tg-6k2t">{{record_details.profile[4].country}}</td>
                        <td class="tg-txgi">City</td>
                        <td class="tg-6k2t">{{record_details.profile[5].city}}</td>
                      </tr>
                      <!--<tr>-->
                        <!--<td class="tg-txgi">BECA</td>-->
                        <!--<td class="tg-6k2t">{{record_details.BECA}}</td>-->
                        <!--<td class="tg-txgi">DNI</td>-->
                        <!--<td class="tg-6k2t">{{record_details.DNI}}</td>-->
                      <!--</tr>-->
                      <tr>
                        <td class="tg-txgi">Phone 1</td>
                        <td class="tg-6k2t">{{record_details.profile[2].phone}}</td>
                        <td class="tg-txgi">Phone 2</td>
                        <td class="tg-6k2t">{{record_details.phone2}}</td>
                        <!--<th class="tg-yw4l" colspan="2"><span class="glyphicon glyphicon-earphone"> {{record_details.profile[2].phone}}</span></th>-->
                        <!--<th class="tg-yw4l"  colspan="2"><span class="glyphicon glyphicon-envelope"> {{record_details.profile[3].email}}</span></th>-->
                      </tr>
                      <tr>
                        <td class="tg-txgi">Email 1</td>
                        <td class="tg-6k2t">{{record_details.profile[3].email}}</td>
                        <td class="tg-txgi">Email 2</td>
                        <td class="tg-6k2t">{{record_details.email2}}</td>
                        <!--<th class="tg-yw4l" colspan="2">(2) <span class="glyphicon glyphicon-earphone"></span> <span>{{record_details.phone2}}</span></th>-->
                        <!--<th class="tg-yw4l" colspan="2">(2) <span class="glyphicon glyphicon-envelope"></span><span>{{record_details.email2}}</span></th>-->
                      </tr>
                     
                  
                    <!--</table>-->
                <!--</div>-->
                <!--</div>-->
            <!---->
             <!--&lt;!&ndash; REGISTRATION &ndash;&gt;-->
            <!--<div role="tabpanel" class="tab-pane" id="registration" >-->
                 <!--<div class="tg-wrap">-->
                    <!--<table class="tg">-->
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
                      <tr> 
                        <td colspan="1" class="tg-txgi">Notes</td>
                        <td colspan="3">
                            <textarea disabled rows="15" cols="100">
                                {{record_details.notes }}
                            </textarea>        
                        
                        </td>
                      </tr>
                       
                        
                      </table>
                      </div>
            <!--</div>   -->
                <!---->
                </div>
            <!-- NOTES -->
            <!--<div role="tabpanel" class="tab-pane" id="notes" >-->
                <!--<textarea rows="100" cols="500">-->
                    <!--{{record_details.age }}-->
                <!--</textarea>-->
            <!--</div>-->
            <!---->

        <!--</div>-->
            <!---->

    <!--</div>-->
`
})

export class BalletDetailsComponent {

    // router = new Router;
    constructor(private _stepService: StepService, private _gridService: GridPanelService, private router: Router,
                private _balletDetailsService: BalletDetailsService,private route: ActivatedRoute, private _http: Http){}
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

        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(data => {
                    console.log(data)
                    this.record_details = data;

                    this.display = true;


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