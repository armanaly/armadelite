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
        this._cargoDetailsService.getDatas(this.obj_id)
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
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid_name, 'master': record_details.stage, 'app_name': 'cargo'}">
                        <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                   </nav>
                </div>
            <div class="col-md-10" align="center">
                <h2><b class="text-uppercase">FROM </b> {{record_details.origin}} TO {{record_details.destination}} </h2>
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
                        <td class="tg-txgi">-45</td>
                        <td class="tg-6k2t">{{record_details._-45}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">45</td>
                        <td class="tg-6k2t">{{record_details._45}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">+100</td>
                        <td class="tg-6k2t">{{record_details._+100}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">+300</td>
                        <td class="tg-6k2t">{{record_details._+300}}</td>
                      </tr>
                      <tr>
                        <td class="tg-txgi">+500</td>
                        <td class="tg-6k2t">{{record_details._+500}}</td>
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
                </div>
`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, grid_service_1.GridPanelService, router_1.Router,
        cargoDetails_service_1.CargoDetailsService, router_1.ActivatedRoute, http_1.Http])
], CargoDetailsComponent);
exports.CargoDetailsComponent = CargoDetailsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZ28vY2FyZ29EZXRhaWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUNwRSxrREFBaUQ7QUFDakQsNENBQXlFO0FBQ3pFLDREQUFzRDtBQUN0RCx3Q0FBbUM7QUFDbkMsaUVBQTJEO0FBdUYzRCxJQUFhLHFCQUFxQixHQUFsQztJQUdJLFlBQW9CLFlBQXlCLEVBQVUsWUFBOEIsRUFBVSxNQUFjLEVBQ3pGLG9CQUF5QyxFQUFTLEtBQXFCLEVBQVUsS0FBVztRQUQ1RixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekYseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUtoSCxpQkFBWSxHQUFFLEVBQUUsQ0FBQztRQUNqQixjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO0lBVjJGLENBQUM7SUFZbkgsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBR0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFdkIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFFM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFHeEIsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QsZUFBZSxDQUFDLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7Q0FRSixDQUFBO0FBakVZLHFCQUFxQjtJQXRGakMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBaUZiO0tBQ0EsQ0FBQztxQ0FLb0MsMEJBQVcsRUFBd0IsK0JBQWdCLEVBQWtCLGVBQU07UUFDbkUsMENBQW1CLEVBQWdCLHVCQUFjLEVBQWlCLFdBQUk7R0FKdkcscUJBQXFCLENBaUVqQztBQWpFWSxzREFBcUIiLCJmaWxlIjoiY29tcG9uZW50cy9jYXJnby9jYXJnb0RldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uLy4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0NhcmdvRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2NhcmdvRGV0YWlscy5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLWRldGFpbHMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgICA8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+XHJcbi50ZyAge2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xvcjojOTk5O31cclxuLnRnIHRke2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O3BhZGRpbmc6MTBweCA1cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowcHg7b3ZlcmZsb3c6aGlkZGVuO3dvcmQtYnJlYWs6bm9ybWFsO2JvcmRlci1jb2xvcjojOTk5O2NvbG9yOiM0NDQ7YmFja2dyb3VuZC1jb2xvcjojRjdGREZBO2JvcmRlci10b3Atd2lkdGg6MXB4O2JvcmRlci1ib3R0b20td2lkdGg6MXB4O31cclxuLnRnIHRoe2ZvbnQtZmFtaWx5OkFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtwYWRkaW5nOjEwcHggNXB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MHB4O292ZXJmbG93OmhpZGRlbjt3b3JkLWJyZWFrOm5vcm1hbDtib3JkZXItY29sb3I6Izk5OTtjb2xvcjojZmZmO2JhY2tncm91bmQtY29sb3I6IzI2QURFNDtib3JkZXItdG9wLXdpZHRoOjFweDtib3JkZXItYm90dG9tLXdpZHRoOjFweDt9XHJcbi50ZyAudGctYm40b3tmb250LXdlaWdodDpib2xkO2ZvbnQtc2l6ZToxOHB4O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy10eGdpe2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6XCJUcmVidWNoZXQgTVNcIiwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7O2JhY2tncm91bmQtY29sb3I6I2VmZWZlZjt2ZXJ0aWNhbC1hbGlnbjp0b3B9XHJcbi50ZyAudGctNmsydHtiYWNrZ3JvdW5kLWNvbG9yOiNEMkU0RkM7dmVydGljYWwtYWxpZ246dG9wfVxyXG4udGcgLnRnLXFqdjd7YmFja2dyb3VuZC1jb2xvcjojRDJFNEZDO2ZvbnQtc2l6ZToxOHB4O3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnIC50Zy15dzRse3ZlcnRpY2FsLWFsaWduOnRvcH1cclxuLnRnICB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlO2JvcmRlci1zcGFjaW5nOjA7Ym9yZGVyLWNvbG9yOiM5OTk7fVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkgey50ZyB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnIGNvbCB7d2lkdGg6IGF1dG8gIWltcG9ydGFudDt9LnRnLXdyYXAge292ZXJmbG93LXg6IGF1dG87LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO319PC9zdHlsZT5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkX25hbWUsICdtYXN0ZXInOiByZWNvcmRfZGV0YWlscy5zdGFnZSwgJ2FwcF9uYW1lJzogJ2NhcmdvJ31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+PGIgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPkZST00gPC9iPiB7e3JlY29yZF9kZXRhaWxzLm9yaWdpbn19IFRPIHt7cmVjb3JkX2RldGFpbHMuZGVzdGluYXRpb259fSA8L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gIFxyXG4gIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcblxyXG4gICAgICAgXHJcbiAgPCEtLSBOYXYgdGFicyAtLT5cclxuICA8IS0tPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj4tLT5cclxuICAgIDwhLS08bGkgcm9sZT1cInByZXNlbnRhdGlvblwiIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNob21lXCIgYXJpYS1jb250cm9scz1cImhvbWVcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5EZXRhaWxzPC9hPjwvbGk+LS0+XHJcbiAgICA8IS0tPGxpIHJvbGU9XCJwcmVzZW50YXRpb25cIj48YSBocmVmPVwiI3JlZ2lzdHJhdGlvblwiIGFyaWEtY29udHJvbHM9XCJyZWdpc3RyYXRpb25cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5SZWdpc3RyYXRpb248L2E+PC9saT4tLT5cclxuICAgIDwhLS08bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjbm90ZXNcIiBhcmlhLWNvbnRyb2xzPVwibm90ZXNcIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Ob3RlczwvYT48L2xpPi0tPlxyXG4gICAgPCEtLS0tPlxyXG4gICAgPCEtLSZsdDshJm5kYXNoOzxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNwaG90b3NcIiBhcmlhLWNvbnRyb2xzPVwicGhvdG9zXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCIgICpuZ0lmPVwiaW1hZ2VzX3RvX3Nob3dcIj5QaG90b3M8L2E+PC9saT4mbmRhc2g7Jmd0Oy0tPlxyXG4gICAgPCEtLSZsdDshJm5kYXNoOzxsaSByb2xlPVwicHJlc2VudGF0aW9uXCI+PGEgaHJlZj1cIiNhZG1pblwiIGFyaWEtY29udHJvbHM9XCJhZG1pblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkTDqXRhaWxzIGFkbWluaXN0cmF0aWZzPC9hPjwvbGk+Jm5kYXNoOyZndDstLT5cclxuICAgIDwhLS0mbHQ7ISZuZGFzaDs8bGkgcm9sZT1cInByZXNlbnRhdGlvblwiPjxhIGhyZWY9XCIjdGVjaFwiIGFyaWEtY29udHJvbHM9XCJ0ZWNoXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+Q2FyYWN0w6lyaXN0aXF1ZXMgdGVjaG5pcXVlczwvYT48L2xpPiZuZGFzaDsmZ3Q7LS0+XHJcbiAgPCEtLTwvdWw+LS0+XHJcbiAgICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCIgPiAgLS0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tIFRBQiBBTEwgSU5GT1MgLS0+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJob21lXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+LTQ1PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuXy00NX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj40NTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLl80NX19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLXR4Z2lcIj4rMTAwPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctNmsydFwiPnt7cmVjb3JkX2RldGFpbHMuXysxMDB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy10eGdpXCI+KzMwMDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRnLTZrMnRcIj57e3JlY29yZF9kZXRhaWxzLl8rMzAwfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGctdHhnaVwiPis1MDA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Zy02azJ0XCI+e3tyZWNvcmRfZGV0YWlscy5fKzUwMH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgY29sc3Bhbj1cIjFcIiBjbGFzcz1cInRnLXR4Z2lcIj5Ob3RlczwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjb2xzcGFuPVwiM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGRpc2FibGVkIHJvd3M9XCIxNVwiIGNvbHM9XCIxMDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JlY29yZF9kZXRhaWxzLm5vdGVzIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZ29EZXRhaWxzQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgX2NhcmdvRGV0YWlsc1NlcnZpY2U6IENhcmdvRGV0YWlsc1NlcnZpY2UscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuICAgIHJlY29yZF9kZXRhaWxzO1xyXG4gICAgdGVjaF9kZXRhaWxzO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIG9ial9pZDtcclxuICAgIGxpc3Rfb3B0aW9ucz0gW107XHJcbiAgICBncmlkX25hbWUgPSAnJztcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIGRldGFpbHMgPSBmYWxzZTtcclxuXHJcbiAgICBpbWFnZXNfdG9fc2hvdyA9IGZhbHNlO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgICAgICAgdGhpcy5ncmlkX25hbWUgPSBwYXJhbXNbJ2dyaWRfbmFtZSddXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgLy8gdGhpcy5ncmlkX25hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiZ3JpZF9uYW1lXCJdO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkX25hbWUpO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXHJcblxyXG4gICAgICAgIHRoaXMuX2NhcmdvRGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY29yZF9kZXRhaWxzID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPYmplY3QoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
