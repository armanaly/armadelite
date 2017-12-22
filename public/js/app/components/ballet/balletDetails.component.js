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
        this.grid_name = '';
        this.display = false;
        this.details = false;
        this.images_to_show = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record'];
            this.grid_name = params['grid_name'];
        });
        console.log(this.grid_name);
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
              
        <div class="panel-heading panel-heading-custom" *ngIf="display">
            <div  class="row" align="left">
                <div class="col-md-2">
                   <nav class="form-navArrow" *ngIf="display">
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid_name, 'master': record_details.stage, 'app_name': 'ballet'}">
                        <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                   </nav>
                </div>
            <div class="col-md-10" align="center">
                <h2><b class="text-uppercase">{{record_details.profile[1].nom}}</b> {{record_details.profile[0].firstname}} </h2>
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
                        <td class="tg-6k2t">{{record_details.profile[4].birthdate}}</td>
                        <td class="tg-txgi">Age</td>
                        <td class="tg-6k2t">{{record_details.age}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">Country</td>
                        <td class="tg-6k2t">{{record_details.profile[5].country}}</td>
                        <td class="tg-txgi">City</td>
                        <td class="tg-6k2t">{{record_details.profile[6].city}}</td>
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
                      <tr *ngIf="record_details.audition != ''">
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
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, grid_service_1.GridPanelService, router_1.Router,
        balletDetails_service_1.BalletDetailsService, router_1.ActivatedRoute, http_1.Http])
], BalletDetailsComponent);
exports.BalletDetailsComponent = BalletDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW9FO0FBQ3BFLGtEQUFpRDtBQUNqRCw0Q0FBeUU7QUFDekUsNERBQXNEO0FBQ3RELHdDQUFtQztBQUNuQyxtRUFBNkQ7QUFxSjdELElBQWEsc0JBQXNCLEdBQW5DO0lBR0ksWUFBb0IsWUFBeUIsRUFBVSxZQUE4QixFQUFVLE1BQWMsRUFDekYscUJBQTJDLEVBQVMsS0FBcUIsRUFBVSxLQUFXO1FBRDlGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6RiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXNCO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBS2xILGlCQUFZLEdBQUUsRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7SUFWNkYsQ0FBQztJQVlySCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUE7UUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFHSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUd4QixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBSVQsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxlQUFlLENBQUMsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBRS9ELENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1QsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztDQVFKLENBQUE7QUFqRVksc0JBQXNCO0lBcEpsQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStJYjtLQUNBLENBQUM7cUNBS29DLDBCQUFXLEVBQXdCLCtCQUFnQixFQUFrQixlQUFNO1FBQ2xFLDRDQUFvQixFQUFnQix1QkFBYyxFQUFpQixXQUFJO0dBSnpHLHNCQUFzQixDQWlFbEM7QUFqRVksd0RBQXNCIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uLy4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtZGV0YWlscycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICAgIDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj5cclxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG4udGcgdGR7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7cGFkZGluZzoxMHB4IDVweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjBweDtvdmVyZmxvdzpoaWRkZW47d29yZC1icmVhazpub3JtYWw7Ym9yZGVyLWNvbG9yOiM5OTk7Y29sb3I6IzQ0NDtiYWNrZ3JvdW5kLWNvbG9yOiNGN0ZERkE7Ym9yZGVyLXRvcC13aWR0aDoxcHg7Ym9yZGVyLWJvdHRvbS13aWR0aDoxcHg7fVxyXG4udGcgdGh7Zm9udC1mYW1pbHk6QXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6bm9ybWFsO3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiNmZmY7YmFja2dyb3VuZC1jb2xvcjojMjZBREU0O2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cclxuLnRnIC50Zy1ibjRve2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zaXplOjE4cHg7dGV4dC1hbGlnbjpjZW50ZXI7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLXR4Z2l7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpcIlRyZWJ1Y2hldCBNU1wiLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYgIWltcG9ydGFudDs7YmFja2dyb3VuZC1jb2xvcjojZWZlZmVmO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy02azJ0e2JhY2tncm91bmQtY29sb3I6I0QyRTRGQzt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctcWp2N3tiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7Zm9udC1zaXplOjE4cHg7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLXl3NGx7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgIHtib3JkZXItY29sbGFwc2U6Y29sbGFwc2U7Ym9yZGVyLXNwYWNpbmc6MDtib3JkZXItY29sb3I6Izk5OTt9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7LnRnIHt3aWR0aDogYXV0byAhaW1wb3J0YW50O30udGcgY29sIHt3aWR0aDogYXV0byAhaW1wb3J0YW50O30udGctd3JhcCB7b3ZlcmZsb3cteDogYXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7fX08L3N0eWxlPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWRfbmFtZSwgJ21hc3Rlcic6IHJlY29yZF9kZXRhaWxzLnN0YWdlLCAnYXBwX25hbWUnOiAnYmFsbGV0J31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVsxXS5ub219fTwvYj4ge3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzBdLmZpcnN0bmFtZX19IDwvaDI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuXHJcbiAgICAgICBcclxuICA8IS0tIE5hdiB0YWJzIC0tPlxyXG4gIDwhLS08dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPi0tPlxyXG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCIgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI2hvbWVcIiBhcmlhLWNvbnRyb2xzPVwiaG9tZVwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkRldGFpbHM8L2E+PC9saT4tLT5cclxuICAgIDwhLS08bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjcmVnaXN0cmF0aW9uXCIgYXJpYS1jb250cm9scz1cInJlZ2lzdHJhdGlvblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlJlZ2lzdHJhdGlvbjwvYT48L2xpPi0tPlxyXG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNub3Rlc1wiIGFyaWEtY29udHJvbHM9XCJub3Rlc1wiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPk5vdGVzPC9hPjwvbGk+LS0+XHJcbiAgICA8IS0tLS0+XHJcbiAgICA8IS0tJmx0OyEmbmRhc2g7PGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3Bob3Rvc1wiIGFyaWEtY29udHJvbHM9XCJwaG90b3NcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIiAgKm5nSWY9XCJpbWFnZXNfdG9fc2hvd1wiPlBob3RvczwvYT48L2xpPiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICA8IS0tJmx0OyEmbmRhc2g7PGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI2FkbWluXCIgYXJpYS1jb250cm9scz1cImFkbWluXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+RMOpdGFpbHMgYWRtaW5pc3RyYXRpZnM8L2E+PC9saT4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgPCEtLSZsdDshJm5kYXNoOzxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiN0ZWNoXCIgYXJpYS1jb250cm9scz1cInRlY2hcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5DYXJhY3TDqXJpc3RpcXVlcyB0ZWNobmlxdWVzPC9hPjwvbGk+Jm5kYXNoOyZndDstLT5cclxuICA8IS0tPC91bD4tLT5cclxuICAgICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIiA+ICAtLT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS0gVEFCIEFMTCBJTkZPUyAtLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cImhvbWVcIj4tLT5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5CaXJ0aGRheTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbNF0uYmlydGhkYXRlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+QWdlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuYWdlfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkNvdW50cnk8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzVdLmNvdW50cnl9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5DaXR5PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMucHJvZmlsZVs2XS5jaXR5fX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwhLS08dHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy10eGdpXCI+QkVDQTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5CRUNBfX08L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkIGNsYXNzPVwidGctdHhnaVwiPkROSTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5ETkl9fTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlBob25lIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzJdLnBob25lfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+UGhvbmUgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnBob25lMn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIiBjb2xzcGFuPVwiMlwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lYXJwaG9uZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbMl0ucGhvbmV9fTwvc3Bhbj48L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRoIGNsYXNzPVwidGcteXc0bFwiICBjb2xzcGFuPVwiMlwiPjxzcGFuIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lbnZlbG9wZVwiPiB7e3JlY29yZF9kZXRhaWxzLnByb2ZpbGVbM10uZW1haWx9fTwvc3Bhbj48L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkVtYWlsIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5wcm9maWxlWzNdLmVtYWlsfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RW1haWwgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLmVtYWlsMn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIiBjb2xzcGFuPVwiMlwiPigyKSA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWFycGhvbmVcIj48L3NwYW4+IDxzcGFuPnt7cmVjb3JkX2RldGFpbHMucGhvbmUyfX08L3NwYW4+PC90aD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0aCBjbGFzcz1cInRnLXl3NGxcIiBjb2xzcGFuPVwiMlwiPigyKSA8c3BhbiBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZW52ZWxvcGVcIj48L3NwYW4+PHNwYW4+e3tyZWNvcmRfZGV0YWlscy5lbWFpbDJ9fTwvc3Bhbj48L3RoPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L3RhYmxlPi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7IFJFR0lTVFJBVElPTiAmbmRhc2g7Jmd0Oy0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lXCIgaWQ9XCJyZWdpc3RyYXRpb25cIiA+LS0+XHJcbiAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJ0Zy13cmFwXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0YWJsZSBjbGFzcz1cInRnXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj5Db3Vyc2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5jb3Vyc2VfdHlwZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkdyb3VwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuZ3JvdXB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RHVyYXRpb248L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5kdXJhdGlvbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPlJlc2lkZW5jZTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLnJlc2lkZW5jZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPkJFQ0E8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5CRUNBfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+RE5JPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuRE5JfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdJZj1cInJlY29yZF9kZXRhaWxzLmF1ZGl0aW9uICE9ICcnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIiA+QXVkaXRpb24gcGxhY2U8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCIgPnt7cmVjb3JkX2RldGFpbHMuYXVkaXRpb259fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIxXCIgY2xhc3M9XCJ0Zy10eGdpXCI+Tm90ZXM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBkaXNhYmxlZCByb3dzPVwiMTVcIiBjb2xzPVwiMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZWNvcmRfZGV0YWlscy5ub3RlcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tPC9kaXY+ICAgLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSBOT1RFUyAtLT5cclxuICAgICAgICAgICAgPCEtLTxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZVwiIGlkPVwibm90ZXNcIiA+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPHRleHRhcmVhIHJvd3M9XCIxMDBcIiBjb2xzPVwiNTAwXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXt7cmVjb3JkX2RldGFpbHMuYWdlIH19LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC90ZXh0YXJlYT4tLT5cclxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8IS0tLS0+XHJcblxyXG4gICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgPCEtLS0tPlxyXG5cclxuICAgIDwhLS08L2Rpdj4tLT5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEJhbGxldERldGFpbHNDb21wb25lbnQge1xyXG5cclxuICAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYmFsbGV0RGV0YWlsc1NlcnZpY2U6IEJhbGxldERldGFpbHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcbiAgICByZWNvcmRfZGV0YWlscztcclxuICAgIHRlY2hfZGV0YWlscztcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBvYmpfaWQ7XHJcbiAgICBsaXN0X29wdGlvbnM9IFtdO1xyXG4gICAgZ3JpZF9uYW1lID0gJyc7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBkZXRhaWxzID0gZmFsc2U7XHJcblxyXG4gICAgaW1hZ2VzX3RvX3Nob3cgPSBmYWxzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107Ly8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZF9uYW1lID0gcGFyYW1zWydncmlkX25hbWUnXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIC8vIHRoaXMuZ3JpZF9uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImdyaWRfbmFtZVwiXTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZF9uYW1lKTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxyXG5cclxuICAgICAgICB0aGlzLl9iYWxsZXREZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjb3JkX2RldGFpbHMgPSBkYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
