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
const cargoDetails_service_1 = require("./cargoDetails.service");
let CargoDetailsComponent = class CargoDetailsComponent {
    constructor(_stepService, _gridService, router, _cargoDetailsService, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this._cargoDetailsService = _cargoDetailsService;
        this.route = route;
        this._http = _http;
        this.list_options = [];
        this.destination = '';
        this.display = false;
        this.details = false;
        this.images_to_show = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.origin = params['origin'];
            this.destination = params['destination'];
        });
        console.log(this.destination);
        console.log(this.origin);
        this._cargoDetailsService.getDatas(this.origin, this.destination)
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
CargoDetailsComponent = __decorate([
    core_1.Component({
        selector: 'fly-details',
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
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid_name, 'master': record_details.stage, 'app_name': 'cargo'}">
                        <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                   </nav>
                </div>
            <div class="col-md-10" align="center">
                <h2><b class="text-uppercase">FROM </b> {{this.origin}} TO {{this.destination}} </h2>
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
                        <th>COMPANY</th>
                        <th>MIN</th>
                        <th>-45</th>
                        <th>45</th>
                        <th>+100</th>
                        <th>+300</th>
                        <th>+500</th>
                      </tr>
                      <tr *ngFor="let detail of record_details">
                        <td>{{detail.company_code}}</td>
                        <td>{{detail.origin}}</td>
                        <td>{{detail['_-45']}}</td>
                        <td>{{detail['_45']}}</td>
                        <td>{{detail['_+100']}}</td>
                        <td>{{detail['_+300']}}</td>
                        <td>{{detail['_+500']}}</td>
                      </tr>
                      <!--<tr> -->
                        <!--<td colspan="1" class="tg-txgi">Notes</td>-->
                        <!--<td colspan="3">-->
                            <!--<textarea disabled rows="15" cols="100">-->
                                <!--{{record_details.notes }}-->
                            <!--</textarea>        -->
                        <!---->
                        <!--</td>-->
                      <!--</tr>-->
                       
                      </table>
                      </div>
                </div>
`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, grid_service_1.GridPanelService, router_1.Router,
        cargoDetails_service_1.CargoDetailsService, router_1.ActivatedRoute, http_1.Http])
], CargoDetailsComponent);
exports.CargoDetailsComponent = CargoDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2NhcmdvL2NhcmdvRGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsa0RBQWlEO0FBQ2pELDRDQUF5RTtBQUN6RSw0REFBc0Q7QUFDdEQsd0NBQW1DO0FBQ25DLGlFQUEyRDtBQXFGM0QsSUFBYSxxQkFBcUIsR0FBbEM7SUFHSSxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixvQkFBeUMsRUFBUyxLQUFxQixFQUFVLEtBQVc7UUFENUYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFLaEgsaUJBQVksR0FBRSxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBVjJGLENBQUM7SUFZbkgsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzVDLENBQUMsQ0FBQyxDQUFDO1FBR0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDNUQsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztZQUUzQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUd4QixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBSVQsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxlQUFlLENBQUMsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBRS9ELENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1QsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztDQVFKLENBQUE7QUFqRVkscUJBQXFCO0lBcEZqQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBK0ViO0tBQ0EsQ0FBQztxQ0FLb0MsMEJBQVcsRUFBd0IsK0JBQWdCLEVBQWtCLGVBQU07UUFDbkUsMENBQW1CLEVBQWdCLHVCQUFjLEVBQWlCLFdBQUk7R0FKdkcscUJBQXFCLENBaUVqQztBQWpFWSxzREFBcUIiLCJmaWxlIjoiYWRtaW4vY2FyZ28vY2FyZ29EZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtDYXJnb0RldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9jYXJnb0RldGFpbHMuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZmx5LWRldGFpbHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cclxuLnRnIHRke2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiM0NDQ7YmFja2dyb3VuZC1jb2xvcjojRjdGREZBO2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cclxuLnRnIHRoe2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI2QURFNDtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XHJcbi50ZyAudGctYm40b3tmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy10eGdpe2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6XCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctNmsydHtiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLXFqdjd7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO2ZvbnQtc2l6ZToxOHB4O3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy15dzRse3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgey50ZyB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnIGNvbCB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnLXdyYXAge292ZXJmbG93LXg6IGF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO319PC9zdHlsZT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkX25hbWUsICdtYXN0ZXInOiByZWNvcmRfZGV0YWlscy5zdGFnZSwgJ2FwcF9uYW1lJzogJ2NhcmdvJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPkZST00gPC9iPiB7e3RoaXMub3JpZ2lufX0gVE8ge3t0aGlzLmRlc3RpbmF0aW9ufX0gPC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICBcclxuICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG5cclxuICAgICAgIFxyXG4gIDwhLS0gTmF2IHRhYnMgLS0+XHJcbiAgPCEtLTx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+LS0+XHJcbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIiBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjaG9tZVwiIGFyaWEtY29udHJvbHM9XCJob21lXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+RGV0YWlsczwvYT48L2xpPi0tPlxyXG4gICAgPCEtLTxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNyZWdpc3RyYXRpb25cIiBhcmlhLWNvbnRyb2xzPVwicmVnaXN0cmF0aW9uXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+UmVnaXN0cmF0aW9uPC9hPjwvbGk+LS0+XHJcbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI25vdGVzXCIgYXJpYS1jb250cm9scz1cIm5vdGVzXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+Tm90ZXM8L2E+PC9saT4tLT5cclxuICAgIDwhLS0tLT5cclxuICAgIDwhLS0mbHQ7ISZuZGFzaDs8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjcGhvdG9zXCIgYXJpYS1jb250cm9scz1cInBob3Rvc1wiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiICAqbmdJZj1cImltYWdlc190b19zaG93XCI+UGhvdG9zPC9hPjwvbGk+Jm5kYXNoOyZndDstLT5cclxuICAgIDwhLS0mbHQ7ISZuZGFzaDs8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjYWRtaW5cIiBhcmlhLWNvbnRyb2xzPVwiYWRtaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ew6l0YWlscyBhZG1pbmlzdHJhdGlmczwvYT48L2xpPiZuZGFzaDsmZ3Q7LS0+XHJcbiAgICA8IS0tJmx0OyEmbmRhc2g7PGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3RlY2hcIiBhcmlhLWNvbnRyb2xzPVwidGVjaFwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkNhcmFjdMOpcmlzdGlxdWVzIHRlY2huaXF1ZXM8L2E+PC9saT4mbmRhc2g7Jmd0Oy0tPlxyXG4gIDwhLS08L3VsPi0tPlxyXG4gICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiID4gIC0tPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPCEtLSBUQUIgQUxMIElORk9TIC0tPlxyXG4gICAgICAgICAgICA8IS0tPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwiaG9tZVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkNPTVBBTlk8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+TUlOPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPi00NTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD40NTwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4rMTAwPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiszMDA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+KzUwMDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBkZXRhaWwgb2YgcmVjb3JkX2RldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZGV0YWlsLmNvbXBhbnlfY29kZX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZGV0YWlsLm9yaWdpbn19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZGV0YWlsWydfLTQ1J119fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2RldGFpbFsnXzQ1J119fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2RldGFpbFsnXysxMDAnXX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7ZGV0YWlsWydfKzMwMCddfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tkZXRhaWxbJ18rNTAwJ119fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY29sc3Bhbj1cIjFcIiBjbGFzcz1cInRnLXR4Z2lcIj5Ob3RlczwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGQgY29sc3Bhbj1cIjNcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dGV4dGFyZWEgZGlzYWJsZWQgcm93cz1cIjE1XCIgY29scz1cIjEwMFwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e3JlY29yZF9kZXRhaWxzLm5vdGVzIH19LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90ZXh0YXJlYT4gICAgICAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmdvRGV0YWlsc0NvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9jYXJnb0RldGFpbHNTZXJ2aWNlOiBDYXJnb0RldGFpbHNTZXJ2aWNlLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcbiAgICByZWNvcmRfZGV0YWlscztcclxuICAgIHRlY2hfZGV0YWlscztcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBvcmlnaW47XHJcbiAgICBsaXN0X29wdGlvbnM9IFtdO1xyXG4gICAgZGVzdGluYXRpb24gPSAnJztcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIGRldGFpbHMgPSBmYWxzZTtcclxuXHJcbiAgICBpbWFnZXNfdG9fc2hvdyA9IGZhbHNlO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gcGFyYW1zWydvcmlnaW4nXTsvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IHBhcmFtc1snZGVzdGluYXRpb24nXVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIC8vIHRoaXMuZ3JpZF9uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImdyaWRfbmFtZVwiXTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGVzdGluYXRpb24pO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5vcmlnaW4pXHJcblxyXG4gICAgICAgIHRoaXMuX2NhcmdvRGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vcmlnaW4sIHRoaXMuZGVzdGluYXRpb24pXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZF9kZXRhaWxzID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPYmplY3QoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
