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
    }
    ngOnInit() {
        console.log(this._stepService.menu_level);
        this.grid_name = this.route.snapshot.queryParams["grid_name"];
        this.master = this.route.snapshot.queryParams["master"];
        this.app_name = localStorage.getItem('app');
        console.log(this.app_name);
        console.log(this.master);
        if (this.master != '') {
            this._gridService.getDatas(this.grid_name, this.master)
                .subscribe(data => {
                console.log(data);
                console.log(this._gridService);
            }, error => console.log(error));
        }
        else {
            this._gridService.getDatas(this.grid_name, '')
                .subscribe(data => {
                console.log(data);
                console.log(this._gridService);
            }, error => console.log(error));
        }
        for (let i = 0; i < this._gridService.colTitle.length; i++) {
            this.showInput.push(false);
        }
        this.myListData = this._gridService.dataGrid;
        this.keysName = this._gridService.keysName;
        console.log(this._gridService.keysName);
        console.log(this._gridService);
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
        console.log(item);
        console.log($event.target);
        let fieldName = $event.target.name;
        console.log(this.master);
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
        console.log(event.target);
        console.log("passe par grid cmp");
        console.log(event);
        console.log(this._gridService.dataGrid);
        this._gridService.filterData(event.target.value, event.srcElement.id);
    }
    exportExcel() {
        this.grid_name;
        this.master;
        console.log(this._gridService.dataGrid);
        console.log("XXXXXX");
        this._exportService.toExcel(this.grid_name, this.master)
            .subscribe(data => {
            console.log(data);
            let blob = new Blob([data], { type: 'text/csv' });
            let url = window.URL.createObjectURL(blob);
            if (navigator.msSaveOrOpenBlob) {
                navigator.msSaveBlob(blob, 'Book.csv');
            }
            else {
                let a = document.createElement('a');
                a.href = url;
                a.download = 'Book.csv';
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
       <div  class="{{_stepService.template.panel_heading}}" align="center">
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
       <div *ngIf="export == true">               
            <button (click)="exportExcel()" class="brown_button" ><i class="glyphicon glyphicon-save" ></i></button>
       </div>
       </div>
        <div class="panel-body">
       <div class="table-responsive" *ngIf="display">
            <table class="table table-hover table-condensed"  >
                <tr>
                    <th *ngFor="let obj of _gridService.colTitle;let i = index">
                        <div >{{obj.title}}&nbsp; 
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
                             
                             <span *ngIf="obj.filterable">
                                <select id="groups" (change)="changeCourse($event, item._id)"   >
                                    <option selected value="item[key]">{{item[key]}}</option>
                                    
                                    <option *ngFor="let course of _gridService.dataGrid[0].course_list">
                                        <b selected *ngIf="course == item[key]">{{course}}</b>
                                        <b *ngIf="course != item[key]">{{course}}</b></option>
                                        
                               </select></span>
                             <br>
                        </div>
                    </th>
                </tr>
                <tr *ngFor="let item of _gridService.dataGrid;let j = index">
                    <td *ngFor="let key of _gridService.keysName;let i = index" align="center">
                        <!-- TYPE CHECK BOX -->
                        <span *ngIf="this._gridService.colTitle[i].type == 'checkbox' "> 
                            <input *ngIf="item[key]" name="{{key}}" type="checkbox" value="{{item[key]}}" checked (change)=updateCheckBox($event,item) /> 
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
                        <span *ngIf="!filterActivated && _gridService.colTitle[i].type == 'field_panel'">
                            {{item[key]}}  
                        </span>
                    </td>
                    
                    <!-- EDIT BUTTON -->
                    <td *ngIf="app_name == 'ballet'">
                        <a [routerLink]="['/editStudent', item._id, grid_name, master] "> 
                            <button class="btn btn-primary" type="button" > 
                                <i class="glyphicon glyphicon-edit"> </i>
                            </button>
                        </a> 
                    </td>
    
                    <!--- GROUP MANAGEMENT BUTTON --->
                    <!--*ngIf="item.group_mgt"-->
                    <td *ngIf="item.details.group" >
                        <a [routerLink]="['/groupManagement', item._id, grid_name, master] ">
                            <button class="btn btn-primary" type="button"> Group </button>
                        </a> 
                    </td>
                    <!-- IF DETAILS IS ACTIVATED IN GRID CONFIG COLLECTION -->
                    <td *ngIf="item.details.activated && app_name == 'ballet'">
                        <a [routerLink]="['/details', item._id, grid_name] ">
                            <button class="btn btn-primary" type="button"> Detail </button>
                        </a> 
                    </td>
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsaURBQWdEO0FBQ2hELDRDQUF5RTtBQUN6RSx5REFBbUQ7QUFDbkQsd0NBQW1DO0FBQ25DLHFEQUErQztBQTBJOUMsSUFBYSxrQkFBa0IsR0FBL0I7SUFHRyxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixLQUFxQixFQUFVLEtBQVcsRUFBVSxjQUE2QjtRQURqRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFFckcsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFUeUYsQ0FBQztJQVd4RyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMs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ZW50cy9ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0V4cG9ydFNlcnZpY2V9IGZyb20gXCIuL2V4cG9ydC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICA8ZGl2ICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJtYXN0ZXIgIT0gMVwiIFtyb3V0ZXJMaW5rXT1cIlsnL2hvbWUnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2FwcCc6IGFwcF9uYW1lLCAnbWFzdGVyJzogbWFzdGVyLCAncHJlbWVudSc6IF9zdGVwU2VydmljZS5tZW51X2xldmVsfVwiID5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJtYXN0ZXIgPT0gMVwiIFtyb3V0ZXJMaW5rXT1cIlsnL21lbnUnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2FwcCc6IGFwcF9uYW1lfVwiID5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICA8aDIgKm5nSWY9XCJtYXN0ZXIgIT0gJzAnIFwiPnt7bWFzdGVyfX08L2gyPlxyXG4gICAgICAgICAgICAgPGgzPnt7Z3JpZF9uYW1lfX08L2gzPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiAqbmdJZj1cImV4cG9ydCA9PSB0cnVlXCI+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImV4cG9ydEV4Y2VsKClcIiBjbGFzcz1cImJyb3duX2J1dHRvblwiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tc2F2ZVwiID48L2k+PC9idXR0b24+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgb2JqIG9mIF9ncmlkU2VydmljZS5jb2xUaXRsZTtsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgPnt7b2JqLnRpdGxlfX0mbmJzcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwib2JqLmZpbHRlcmFibGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsdGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzaG93RmlsdGVySW5wdXQoaSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvYmouZmlsdGVyYWJsZSAmJiBzaG93SW5wdXRbaV1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tvYmoua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwib2JqLmZpbHRlcmFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpdGVtLl9pZClcIiAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIml0ZW1ba2V5XVwiPnt7aXRlbVtrZXldfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdXJzZSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIHNlbGVjdGVkICpuZ0lmPVwiY291cnNlID09IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cImNvdXJzZSAhPSBpdGVtW2tleV1cIj57e2NvdXJzZX19PC9iPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7bGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIF9ncmlkU2VydmljZS5rZXlzTmFtZTtsZXQgaSA9IGluZGV4XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUWVBFIENIRUNLIEJPWCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdjaGVja2JveCcgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaXRlbVtrZXldXCIgbmFtZT1cInt7a2V5fX1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7aXRlbVtrZXldfX1cIiBjaGVja2VkIChjaGFuZ2UpPXVwZGF0ZUNoZWNrQm94KCRldmVudCxpdGVtKSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XSA9PSBmYWxzZVwiIG5hbWU9XCJ7e2tleX19XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTU9SRSBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiAgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkWzBdLmNvdXJzZV9saXN0Lmxlbmd0aCA+IDFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpdGVtLl9pZClcIiAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIml0ZW1ba2V5XVwiPnt7aXRlbVtrZXldfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdXJzZSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIHNlbGVjdGVkICpuZ0lmPVwiY291cnNlID09IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cImNvdXJzZSAhPSBpdGVtW2tleV1cIj57e2NvdXJzZX19PC9iPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTEVTUyBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3QubGVuZ3RoIDwgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5PUk1BTCBUWVBFIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklFTEQgUEFORUwgVFlQRSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZmlsdGVyQWN0aXZhdGVkICYmIF9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdmaWVsZF9wYW5lbCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEVESVQgQlVUVE9OIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cImFwcF9uYW1lID09ICdiYWxsZXQnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2VkaXRTdHVkZW50JywgaXRlbS5faWQsIGdyaWRfbmFtZSwgbWFzdGVyXSBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0tIEdST1VQIE1BTkFHRU1FTlQgQlVUVE9OIC0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tKm5nSWY9XCJpdGVtLmdyb3VwX21ndFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiaXRlbS5kZXRhaWxzLmdyb3VwXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncm91cE1hbmFnZW1lbnQnLCBpdGVtLl9pZCwgZ3JpZF9uYW1lLCBtYXN0ZXJdIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj4gR3JvdXAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIElGIERFVEFJTFMgSVMgQUNUSVZBVEVEIElOIEdSSUQgQ09ORklHIENPTExFQ1RJT04gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwiaXRlbS5kZXRhaWxzLmFjdGl2YXRlZCAmJiBhcHBfbmFtZSA9PSAnYmFsbGV0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9kZXRhaWxzJywgaXRlbS5faWQsIGdyaWRfbmFtZV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPiBEZXRhaWwgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEFVVE8gREVUQUlMUyBJRiBERVRBSUxTIElTIEFDVElWQVRFRCBJTiBHUklEIENPTkZJRyBDT0xMRUNUSU9OIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWQgJiYgYXBwX25hbWUgPT0nYXV0bydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvYXV0b19kZXRhaWxzJywgaXRlbS5faWQsIGdyaWRfbmFtZV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPiBEZXRhaWwgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1PREFMIDx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWRcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+REVUQUlMIDwvYnV0dG9uPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLUlGIFdPUktGTE9XIFRZUEUgQlROIFRPIEdPIEJBQ0sgVE8gQ1VSUkVOVCBTVEVQIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICd3b3JrZmxvdydcIj4gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pXCIgdmFsdWU9XCJ7e2l0ZW0uc3RlcF9pZH19IFwiPkN1cnJlbnQgc3RlcCA8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIC0tPlxyXG5cclxuICAgIGBcclxufSlcclxuXHJcbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2V4cG9ydFNlcnZpY2U6IEV4cG9ydFNlcnZpY2Upe31cclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBteUxpc3REYXRhID0gW107Ly8gPSAgdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XHJcbiAgICBncmlkX25hbWU7XHJcbiAgICBrZXlzTmFtZSA9IFtdO1xyXG4gICAgc2hvd0lucHV0ID0gW107XHJcbiAgICBmaWx0ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAgIG1hc3RlciA9IFwiXCI7XHJcbiAgICBhcHBfbmFtZSA9IFwiXCI7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIHRoaXMuX3N0ZXBTZXJ2aWNlLm1lbnVfbGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZ3JpZF9uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImdyaWRfbmFtZVwiXTtcclxuICAgICAgICB0aGlzLm1hc3RlciA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJtYXN0ZXJcIl07XHJcbiAgICAgICAgLy8gdGhpcy5hcHBfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBfbmFtZVwiXTtcclxuICAgICAgICB0aGlzLmFwcF9uYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcCcpXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwX25hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFzdGVyKVxyXG4gICAgICAgIGlmKHRoaXMubWFzdGVyICE9ICcnKXtcclxuICAgICAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXModGhpcy5ncmlkX25hbWUsIHRoaXMubWFzdGVyKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKHRoaXMuZ3JpZF9uYW1lLCAnJylcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0LnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5teUxpc3REYXRhID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XHJcbiAgICAgICAgdGhpcy5rZXlzTmFtZSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmtleXNOYW1lO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcblxyXG59XHJcbiAgICBnb1RvQ3VycmVudFN0ZXAoaXRlbSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdjdXJyZW50X2lkJzogaXRlbS5zdGVwX2lkLCAnX2lkJzogaXRlbS5faWQgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT2JqZWN0KGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIGl0ZW0gIT09IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGaWx0ZXJJbnB1dChpZHgpe1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dJbnB1dFtpZHhdID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dFtpZHhdID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VuZGVmaW5lZCh2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgdXBkYXRlQ2hlY2tCb3goJGV2ZW50LCBpdGVtKXtcclxuICAgICAgIC8vIGxldCB2YWx1ZSA9ICRldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9JGV2ZW50LnRhcmdldC5jaGVja2VkO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJGV2ZW50LnRhcmdldClcclxuICAgICAgICBsZXQgZmllbGROYW1lID0gJGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWFzdGVyKVxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLnVwZGF0ZUNoZWNrYm94KHZhbHVlLGl0ZW0uX2lkLHRoaXMubWFzdGVyLCB0aGlzLmFwcF9uYW1lLCBmaWVsZE5hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAvLyAgY29uc29sZS5sb2codmFsMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUNvdXJzZSgkZXZlbnQsIGlkKXtcclxuICAgICAgICBsZXQgY291cnNlX3R5cGUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuY2hhbmdlQ291cnNlKGNvdXJzZV90eXBlLGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG5cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGV2ZW50OiBhbnkpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgLy9pZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09Jycpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFzc2UgcGFyIGdyaWQgY21wXCIpO1xyXG4gICAgICAgICAgICAvL31lbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4gX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5maWx0ZXJEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQuc3JjRWxlbWVudC5pZCk7fVxyXG4gICAgICAgIC8vICB0aGlzLmZpbHRlckFjdGl2YXRlZCA9IHRydWU7XHJcbiAgICAvL31cclxuXHJcbiAgICBleHBvcnRFeGNlbCgpe1xyXG4gICAgICAgIHRoaXMuZ3JpZF9uYW1lXHJcbiAgICAgICAgdGhpcy5tYXN0ZXJcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZClcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlhYWFhYWFwiKVxyXG4gICAgICAgIHRoaXMuX2V4cG9ydFNlcnZpY2UudG9FeGNlbCh0aGlzLmdyaWRfbmFtZSx0aGlzLm1hc3RlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdmFyIE1JTUVfVFlQRSA9IFwiYXBwbGljYXRpb24veC14bHNcIjtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7dHlwZTogTUlNRV9UWVBFfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93LmxvY2F0aW9uLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogJ3RleHQvY3N2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCAnQm9vay5jc3YnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5ocmVmID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmRvd25sb2FkID0gJ0Jvb2suY3N2JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcblxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
