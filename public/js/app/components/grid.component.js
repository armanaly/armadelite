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
const grid_service_1 = require("./grid.service");
const router_1 = require("@angular/router");
const step_service_1 = require("../Engine/step.service");
const http_1 = require("@angular/http");
const export_service_1 = require("./export.service");
let GridPanelComponent = class GridPanelComponent {
    constructor(_stepService, _gridService, router, route, _http, _exportService) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this.route = route;
        this._http = _http;
        this._exportService = _exportService;
        this.display = false;
        this.myListData = [];
        this.keysName = [];
        this.showInput = [];
        this.filterActivated = false;
        this.master = "";
        this.app_name = "";
        this.export = false;
    }
    ngOnInit() {
        this.grid_name = this.route.snapshot.queryParams["grid_name"];
        this.master = this.route.snapshot.queryParams["master"];
        this.app_name = localStorage.getItem('app');
        if (this.master != '') {
            this._gridService.getDatas(this.grid_name, this.master)
                .subscribe(data => {
                if (typeof this._gridService.config.export !== 'undefined') {
                    this.export = this._gridService.config.export;
                }
            }, error => console.log(error));
        }
        else {
            this._gridService.getDatas(this.grid_name, '')
                .subscribe(data => {
            }, error => console.log(error));
        }
        for (let i = 0; i < this._gridService.colTitle.length; i++) {
            this.showInput.push(false);
        }
        this.myListData = this._gridService.dataGrid;
        this.keysName = this._gridService.keysName;
        this.display = true;
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
    showFilterInput(idx) {
        if (this.showInput[idx] == true) {
            this.showInput[idx] = false;
        }
        else {
            this.showInput[idx] = true;
        }
    }
    checkUndefined(value) {
        console.log(value);
        console.log(typeof value === 'undefined');
        return (typeof value === 'undefined');
    }
    updateCheckBox($event, item) {
        let value = $event.target.checked;
        let fieldName = $event.target.name;
        this._gridService.updateCheckbox(value, item._id, this.master, this.app_name, fieldName)
            .subscribe(data => console.log(data), error => console.log(error));
    }
    changeCourse($event, id) {
        let course_type = $event.target.value;
        this._gridService.changeCourse(course_type, id)
            .subscribe(data => {
        }, error => console.log(error));
    }
    filter(event) {
        this._gridService.filterData(event.target.value, event.srcElement.id);
    }
    exportExcel() {
        let export_id = 0;
        if (typeof this._gridService.config.export_id !== 'undefined') {
            export_id = this._gridService.config.export_id;
        }
        this._exportService.toExcel(this.grid_name, this.master, this._gridService.config.export_id)
            .subscribe(data => {
            let fileName = this.grid_name + ".csv";
            let blob = new Blob([data], { type: 'text/csv' });
            let url = window.URL.createObjectURL(blob);
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, fileName);
            }
            else {
                let a = document.createElement('a');
                a.href = url;
                a.download = fileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            window.URL.revokeObjectURL(url);
        }, error => console.log(error));
    }
};
GridPanelComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
       <div  class="{{_stepService.template.panel_heading}}" >
         <div  class="row" align="left">
          <div class="col-md-2">
            <nav class="form-navArrow">
               <a *ngIf="master != 1" [routerLink]="['/home']" [queryParams]="{'app': app_name, 'master': master, 'premenu': _stepService.menu_level}" >
                   <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button>
              </a>
               <a *ngIf="master == 1" [routerLink]="['/menu']" [queryParams]="{'app': app_name}" >
                   <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button>
              </a>
            </nav>
          </div>
         <div class="col-md-10" align="center">
             <h2 *ngIf="master != '0' ">{{master}}</h2>
             <h3>{{grid_name}}</h3>
         </div>
       </div>
       <div *ngIf="export" align="left">               
            <button (click)="exportExcel()" class="brown_button" ><i class="glyphicon glyphicon-save" ></i></button>
       </div>
       </div>
        <div class="panel-body">
       <div class="table-responsive" *ngIf="display">
            <table class="table table-hover table-condensed"  >
                <tr>
                    <th *ngFor="let obj of _gridService.colTitle;let i = index">
                        <div >{{obj.title}}&nbsp; 
                              
                                <!--class="glyphicon glyphicon-filter"-->
                              <!--<input type="button" *ngIf="obj.filterable" -->
                                <!--style="background-image:url('/images/icones/if_filter.png')"-->
                                <!--(click)="showFilterInput(i)">-->
                            <!---->
                            <!--<br>-->
                            <!--<input   -->
                                <!--*ngIf="obj.filterable && showInput[i]"-->
                                <!--myAutofocus="true"-->
                                <!--type="text" -->
                                <!--id="{{obj.key}}"-->
                                <!--name="{{obj.key}}"-->
                                <!--(keyup)="filter($event)"-->
                             <!--&gt;-->
                            
                            <button *ngIf="obj.filterable" 
                                class="glyphicon glyphicon-filter" 
                                type="button" 
                                (click)="showFilterInput(i)">
                            </button>
                            <br>
                            <input   
                                *ngIf="obj.filterable && showInput[i]"
                                myAutofocus="true"
                                type="text" 
                                id="{{obj.key}}"
                                name="{{obj.key}}"
                                (keyup)="filter($event)"
                             >
                             <br>
                        </div>
                    </th>
                </tr>
                <tr *ngFor="let item of _gridService.dataGrid;let j = index">
                    <td *ngFor="let key of _gridService.keysName;let i = index" align="center">
                        <!-- TYPE CHECK BOX -->
                        <span *ngIf="this._gridService.colTitle[i].type == 'checkbox' "> 
                            <!--<input *ngIf="item[key]" name="{{key}}" type="checkbox" value="{{item[key]}}" checked (change)=updateCheckBox($event,item) />-->
                             <input *ngIf="item[key]" name="{{key}}" type="button" style="background-image:url('/images/icones/if_accept.png')"  value="{{item[key]}}" (click)=updateCheckBox($event,item) />
                            <input *ngIf="item[key] == false" name="{{key}}" type="checkbox" value="{{item[key]}}" (change)=updateCheckBox($event,item) /> 
                        </span>
                        
                        <!-- TYPE COMBO MORE THAN 1 VALUE IN LIST COMBO-->
                        <span *ngIf="this._gridService.colTitle[i].type == 'combo' &&  _gridService.dataGrid[0].course_list.length > 1" >
                               <select id="groups" (change)="changeCourse($event, item._id)"   >
                                    <option selected value="item[key]">{{item[key]}}</option>
                                    
                                    <option *ngFor="let course of _gridService.dataGrid[0].course_list">
                                        <b selected *ngIf="course == item[key]">{{course}}</b>
                                        <b *ngIf="course != item[key]">{{course}}</b></option>
                                        
                               </select>
                        </span>
                        <!-- TYPE COMBO LESS THAN 1 VALUE IN LIST COMBO-->
                        <span *ngIf="this._gridService.colTitle[i].type == 'combo' && _gridService.dataGrid[0].course_list.length < 2">
                                {{item[key]}}  
                        </span>
                        
                        <!-- NORMAL TYPE -->
                        <span *ngIf="!filterActivated && _gridService.colTitle[i].type == 'standard'">
                            {{item[key]}}  
                        </span>
                        
                        <!-- FIELD PANEL TYPE -->
                        <p class="span-table" *ngIf="!filterActivated && _gridService.colTitle[i].type == 'field_panel'">
                            {{item[key]}}
                        
                        </p>
                        
                        <!--<span class="span-table" *ngIf="!filterActivated && _gridService.colTitle[i].type == 'field_panel'">-->
                            <!--{{item[key]}}  -->
                        <!--</span>-->
                    </td>
                    
                    <!-- EDIT BUTTON -->
                    <td  *ngIf="item.details.activated && app_name == 'ballet'">
                        <a [routerLink]="['/editStudent', item._id, grid_name, master] "> 
                            <button class="{{_stepService.template.grid_btn}}"  type="button" > 
                                <i class="glyphicon glyphicon-edit"> </i>
                            </button>
                        </a> 
                    </td>
    
                    <!--- GROUP MANAGEMENT BUTTON --->
                    <!--*ngIf="item.group_mgt"-->
                    <td *ngIf="_stepService.steps[0].master_name == 'ballet' && item.details.group" >
                        <a [routerLink]="['/groupManagement', item._id, grid_name, master] ">
                            <button class="{{_stepService.template.grid_btn}}"  type="button"> Group </button>
                        </a> 
                    </td>
                    <!-- IF DETAILS IS ACTIVATED IN GRID CONFIG COLLECTION -->
                    <!--<td *ngIf="item.details.activated && app_name == 'ballet'">-->
                        <!--<a [routerLink]="['/details', item._id, grid_name] ">-->
                            <!--<button class="{{_stepService.template.grid_btn}}"  type="button"> Detail </button>-->
                        <!--</a> -->
                    <!--</td>-->
                    <!-- AUTO DETAILS IF DETAILS IS ACTIVATED IN GRID CONFIG COLLECTION -->
                    <td *ngIf="item.details.activated && app_name =='auto'">
                        <a [routerLink]="['/auto_details', item._id, grid_name] ">
                            <button class="btn btn-primary" type="button"> Detail </button>
                        </a> 
                    </td>
                    <!-- MODAL <td *ngIf="item.details.activated"><button class="btn btn-success" type="button" data-toggle="modal" data-target="#myModal">DETAIL </button></td>-->
                    
                    <!--IF WORKFLOW TYPE BTN TO GO BACK TO CURRENT STEP -->
                    <td *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                
                </tr>
                
            </table>
        </div>
       
    </div>
            <!-- Modal -->

    `
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, grid_service_1.GridPanelService, router_1.Router,
        router_1.ActivatedRoute, http_1.Http, export_service_1.ExportService])
], GridPanelComponent);
exports.GridPanelComponent = GridPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsaURBQWdEO0FBQ2hELDRDQUF5RTtBQUN6RSx5REFBbUQ7QUFDbkQsd0NBQW1DO0FBQ25DLHFEQUErQztBQXNKOUMsSUFBYSxrQkFBa0IsR0FBL0I7SUFHRyxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixLQUFxQixFQUFVLEtBQVcsRUFBVSxjQUE2QjtRQURqRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFFckcsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxXQUFNLEdBQUcsS0FBSyxDQUFDO0lBVndGLENBQUM7SUFXeEcsUUFBUTtRQUVKLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUkzQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMs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QUFDLENBQzlCLENBQUE7SUFFVCxDQUFDO0NBRUosQ0FBQTtBQWxLYSxrQkFBa0I7SUFySi9CLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWdKVDtLQUNKLENBQUM7cUNBS29DLDBCQUFXLEVBQXdCLCtCQUFnQixFQUFrQixlQUFNO1FBQ2xGLHVCQUFjLEVBQWlCLFdBQUksRUFBMEIsOEJBQWE7R0FKM0Ysa0JBQWtCLENBa0svQjtBQWxLYSxnREFBa0IiLCJmaWxlIjoiY29tcG9uZW50cy9ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0V4cG9ydFNlcnZpY2V9IGZyb20gXCIuL2V4cG9ydC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8ZGl2ICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiID5cclxuICAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICAgICA8YSAqbmdJZj1cIm1hc3RlciAhPSAxXCIgW3JvdXRlckxpbmtdPVwiWycvaG9tZSddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnYXBwJzogYXBwX25hbWUsICdtYXN0ZXInOiBtYXN0ZXIsICdwcmVtZW51JzogX3N0ZXBTZXJ2aWNlLm1lbnVfbGV2ZWx9XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICA8YSAqbmdJZj1cIm1hc3RlciA9PSAxXCIgW3JvdXRlckxpbmtdPVwiWycvbWVudSddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnYXBwJzogYXBwX25hbWV9XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgIDxoMiAqbmdJZj1cIm1hc3RlciAhPSAnMCcgXCI+e3ttYXN0ZXJ9fTwvaDI+XHJcbiAgICAgICAgICAgICA8aDM+e3tncmlkX25hbWV9fTwvaDM+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8ZGl2ICpuZ0lmPVwiZXhwb3J0XCIgYWxpZ249XCJsZWZ0XCI+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImV4cG9ydEV4Y2VsKClcIiBjbGFzcz1cImJyb3duX2J1dHRvblwiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2F2ZVwiID48L2k+PC9idXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgb2JqIG9mIF9ncmlkU2VydmljZS5jb2xUaXRsZTtsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPnt7b2JqLnRpdGxlfX0mbmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1jbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsdGVyXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgKm5nSWY9XCJvYmouZmlsdGVyYWJsZVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1zdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKCcvaW1hZ2VzL2ljb25lcy9pZl9maWx0ZXIucG5nJylcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0oY2xpY2spPVwic2hvd0ZpbHRlcklucHV0KGkpXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0qbmdJZj1cIm9iai5maWx0ZXJhYmxlICYmIHNob3dJbnB1dFtpXVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW15QXV0b2ZvY3VzPVwidHJ1ZVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJ0ZXh0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwie3tvYmoua2V5fX1cIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1uYW1lPVwie3tvYmoua2V5fX1cIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0oa2V5dXApPVwiZmlsdGVyKCRldmVudClcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mZ3Q7LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJvYmouZmlsdGVyYWJsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWx0ZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNob3dGaWx0ZXJJbnB1dChpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9iai5maWx0ZXJhYmxlICYmIHNob3dJbnB1dFtpXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXM9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tvYmoua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e29iai5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7bGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIF9ncmlkU2VydmljZS5rZXlzTmFtZTtsZXQgaSA9IGluZGV4XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUWVBFIENIRUNLIEJPWCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdjaGVja2JveCcgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XVwiIG5hbWU9XCJ7e2tleX19XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgY2hlY2tlZCAoY2hhbmdlKT11cGRhdGVDaGVja0JveCgkZXZlbnQsaXRlbSkgLz4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpdGVtW2tleV1cIiBuYW1lPVwie3trZXl9fVwiIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKCcvaW1hZ2VzL2ljb25lcy9pZl9hY2NlcHQucG5nJylcIiAgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNsaWNrKT11cGRhdGVDaGVja0JveCgkZXZlbnQsaXRlbSkgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XSA9PSBmYWxzZVwiIG5hbWU9XCJ7e2tleX19XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTU9SRSBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiAgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkWzBdLmNvdXJzZV9saXN0Lmxlbmd0aCA+IDFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpdGVtLl9pZClcIiAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIml0ZW1ba2V5XVwiPnt7aXRlbVtrZXldfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdXJzZSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIHNlbGVjdGVkICpuZ0lmPVwiY291cnNlID09IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cImNvdXJzZSAhPSBpdGVtW2tleV1cIj57e2NvdXJzZX19PC9iPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTEVTUyBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3QubGVuZ3RoIDwgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5PUk1BTCBUWVBFIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklFTEQgUEFORUwgVFlQRSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcGFuLXRhYmxlXCIgKm5nSWY9XCIhZmlsdGVyQWN0aXZhdGVkICYmIF9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdmaWVsZF9wYW5lbCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cInNwYW4tdGFibGVcIiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2ZpZWxkX3BhbmVsJ1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXt7aXRlbVtrZXldfX0gIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFRElUIEJVVFRPTiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgICpuZ0lmPVwiaXRlbS5kZXRhaWxzLmFjdGl2YXRlZCAmJiBhcHBfbmFtZSA9PSAnYmFsbGV0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9lZGl0U3R1ZGVudCcsIGl0ZW0uX2lkLCBncmlkX25hbWUsIG1hc3Rlcl0gXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmdyaWRfYnRufX1cIiAgdHlwZT1cImJ1dHRvblwiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0tIEdST1VQIE1BTkFHRU1FTlQgQlVUVE9OIC0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tKm5nSWY9XCJpdGVtLmdyb3VwX21ndFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl9uYW1lID09ICdiYWxsZXQnICYmIGl0ZW0uZGV0YWlscy5ncm91cFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JvdXBNYW5hZ2VtZW50JywgaXRlbS5faWQsIGdyaWRfbmFtZSwgbWFzdGVyXSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5ncmlkX2J0bn19XCIgIHR5cGU9XCJidXR0b25cIj4gR3JvdXAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIElGIERFVEFJTFMgSVMgQUNUSVZBVEVEIElOIEdSSUQgQ09ORklHIENPTExFQ1RJT04gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWQgJiYgYXBwX25hbWUgPT0gJ2JhbGxldCdcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIFtyb3V0ZXJMaW5rXT1cIlsnL2RldGFpbHMnLCBpdGVtLl9pZCwgZ3JpZF9uYW1lXSBcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUuZ3JpZF9idG59fVwiICB0eXBlPVwiYnV0dG9uXCI+IERldGFpbCA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvYT4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBVVRPIERFVEFJTFMgSUYgREVUQUlMUyBJUyBBQ1RJVkFURUQgSU4gR1JJRCBDT05GSUcgQ09MTEVDVElPTiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJpdGVtLmRldGFpbHMuYWN0aXZhdGVkICYmIGFwcF9uYW1lID09J2F1dG8nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2F1dG9fZGV0YWlscycsIGl0ZW0uX2lkLCBncmlkX25hbWVdIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj4gRGV0YWlsIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNT0RBTCA8dGQgKm5nSWY9XCJpdGVtLmRldGFpbHMuYWN0aXZhdGVkXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiPkRFVEFJTCA8L2J1dHRvbj48L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1JRiBXT1JLRkxPVyBUWVBFIEJUTiBUTyBHTyBCQUNLIFRPIENVUlJFTlQgU1RFUCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnd29ya2Zsb3cnXCI+IDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9DdXJyZW50U3RlcChpdGVtKVwiIHZhbHVlPVwie3tpdGVtLnN0ZXBfaWR9fSBcIj5DdXJyZW50IHN0ZXAgPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSBNb2RhbCAtLT5cclxuXHJcbiAgICBgXHJcbn0pXHJcblxyXG4gZXhwb3J0IGNsYXNzIEdyaWRQYW5lbENvbXBvbmVudCB7XHJcblxyXG4gICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9leHBvcnRTZXJ2aWNlOiBFeHBvcnRTZXJ2aWNlKXt9XHJcblxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgbXlMaXN0RGF0YSA9IFtdOy8vID0gIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgZ3JpZF9uYW1lO1xyXG4gICAga2V5c05hbWUgPSBbXTtcclxuICAgIHNob3dJbnB1dCA9IFtdO1xyXG4gICAgZmlsdGVyQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgICBtYXN0ZXIgPSBcIlwiO1xyXG4gICAgYXBwX25hbWUgPSBcIlwiO1xyXG4gICAgZXhwb3J0ID0gZmFsc2U7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyggdGhpcy5fc3RlcFNlcnZpY2UubWVudV9sZXZlbCk7XHJcbiAgICAgICAgdGhpcy5ncmlkX25hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiZ3JpZF9uYW1lXCJdO1xyXG4gICAgICAgIHRoaXMubWFzdGVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcIm1hc3RlclwiXTtcclxuICAgICAgICB0aGlzLmFwcF9uYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcCcpXHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwX25hbWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWFzdGVyKVxyXG4gICAgICAgIGlmKHRoaXMubWFzdGVyICE9ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXModGhpcy5ncmlkX25hbWUsIHRoaXMubWFzdGVyKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZXhwb3J0ICE9PSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cG9ydCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXModGhpcy5ncmlkX25hbWUsICcnKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXQucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm15TGlzdERhdGEgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZDtcclxuICAgICAgICB0aGlzLmtleXNOYW1lID0gdGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWU7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmtleXNOYW1lKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcbn1cclxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPYmplY3QoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ZpbHRlcklucHV0KGlkeCl7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0lucHV0W2lkeF0gPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5kZWZpbmVkKHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVDaGVja0JveCgkZXZlbnQsIGl0ZW0pe1xyXG4gICAgICAgLy8gbGV0IHZhbHVlID0gJGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0kZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAkZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXN0ZXIpXHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UudXBkYXRlQ2hlY2tib3godmFsdWUsaXRlbS5faWQsdGhpcy5tYXN0ZXIsIHRoaXMuYXBwX25hbWUsIGZpZWxkTmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ291cnNlKCRldmVudCwgaWQpe1xyXG4gICAgICAgIGxldCBjb3Vyc2VfdHlwZSA9ICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5jaGFuZ2VDb3Vyc2UoY291cnNlX3R5cGUsaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcbiAgICBmaWx0ZXIoZXZlbnQ6IGFueSl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAvL2lmIChldmVudC50YXJnZXQudmFsdWUgPT0nJyl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXNzZSBwYXIgZ3JpZCBjbXBcIik7XHJcbiAgICAgICAgICAgIC8vfWVsc2Uge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmZpbHRlckRhdGEoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudC5zcmNFbGVtZW50LmlkKTt9XHJcbiAgICAgICAgLy8gIHRoaXMuZmlsdGVyQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIC8vfVxyXG5cclxuICAgIGV4cG9ydEV4Y2VsKCl7XHJcbiAgICAgICAgLy8gdGhpcy5ncmlkX25hbWVcclxuICAgICAgICAvLyB0aGlzLm1hc3RlclxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiWFhYWFhYXCIpXHJcbiAgICAgICAgbGV0IGV4cG9ydF9pZCA9IDBcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnRfaWQgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZXhwb3J0X2lkID0gdGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnLmV4cG9ydF9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZXhwb3J0U2VydmljZS50b0V4Y2VsKHRoaXMuZ3JpZF9uYW1lLHRoaXMubWFzdGVyLHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnRfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWxlTmFtZSA9IHRoaXMuZ3JpZF9uYW1lICsgXCIuY3N2XCJcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwgeyB0eXBlOiAndGV4dC9jc3YnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB1cmw9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
