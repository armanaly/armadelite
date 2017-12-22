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
             <h2 *ngIf="master != ''">{{master}}</h2>
             <h3>{{grid_name}}</h3>
         </div>
       </div>
       <div>               
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
                    <td *ngIf="_stepService.steps[0].master_name == 'ballet'">
                        <a [routerLink]="['/editStudent', item._id, grid_name, master] "> 
                            <button class="btn btn-primary" type="button" > 
                                <i class="glyphicon glyphicon-edit"> </i>
                            </button>
                        </a> 
                    </td>
    
                    <!--- GROUP MANAGEMENT BUTTON --->
                    <!--*ngIf="item.group_mgt"-->
                    <td *ngIf="_stepService.steps[0].master_name == 'ballet' && grid_name != 'New demands'" >
                        <a [routerLink]="['/groupManagement', item._id, grid_name, master] ">
                            <button class="btn btn-primary" type="button"> Group </button>
                        </a> 
                    </td>
                    <!-- IF DETAILS IS ACTIVATED IN GRID CONFIG COLLECTION -->
                    <td *ngIf="item.details.activated && master_name == 'ballet'">
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsaURBQWdEO0FBQ2hELDRDQUF5RTtBQUN6RSx5REFBbUQ7QUFDbkQsd0NBQW1DO0FBQ25DLHFEQUErQztBQWdJOUMsSUFBYSxrQkFBa0IsR0FBL0I7SUFHRyxZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixLQUFxQixFQUFVLEtBQVcsRUFBVSxjQUE2QjtRQURqRixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDekYsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFFckcsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2Ysb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLGFBQVEsR0FBRyxFQUFFLENBQUM7SUFUeUYsQ0FBQztJQVd4RyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXhELElBQUksQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMs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Y29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7RXhwb3J0U2VydmljZX0gZnJvbSBcIi4vZXhwb3J0LnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgIDxkaXYgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICAgICA8YSAqbmdJZj1cIm1hc3RlciAhPSAxXCIgW3JvdXRlckxpbmtdPVwiWycvaG9tZSddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnYXBwJzogYXBwX25hbWUsICdtYXN0ZXInOiBtYXN0ZXIsICdwcmVtZW51JzogX3N0ZXBTZXJ2aWNlLm1lbnVfbGV2ZWx9XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICA8YSAqbmdJZj1cIm1hc3RlciA9PSAxXCIgW3JvdXRlckxpbmtdPVwiWycvbWVudSddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnYXBwJzogYXBwX25hbWV9XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgIDxoMiAqbmdJZj1cIm1hc3RlciAhPSAnJ1wiPnt7bWFzdGVyfX08L2gyPlxyXG4gICAgICAgICAgICAgPGgzPnt7Z3JpZF9uYW1lfX08L2gzPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZXhwb3J0RXhjZWwoKVwiIGNsYXNzPVwiYnJvd25fYnV0dG9uXCIgPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zYXZlXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICA+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBvYmogb2YgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlO2xldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiA+e3tvYmoudGl0bGV9fSZuYnNwOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJvYmouZmlsdGVyYWJsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWx0ZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNob3dGaWx0ZXJJbnB1dChpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9iai5maWx0ZXJhYmxlICYmIHNob3dJbnB1dFtpXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXM9XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tvYmoua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e29iai5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7bGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIF9ncmlkU2VydmljZS5rZXlzTmFtZTtsZXQgaSA9IGluZGV4XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUWVBFIENIRUNLIEJPWCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdjaGVja2JveCcgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaXRlbVtrZXldXCIgbmFtZT1cInt7a2V5fX1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7aXRlbVtrZXldfX1cIiBjaGVja2VkIChjaGFuZ2UpPXVwZGF0ZUNoZWNrQm94KCRldmVudCxpdGVtKSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XSA9PSBmYWxzZVwiIG5hbWU9XCJ7e2tleX19XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTU9SRSBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiAgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkWzBdLmNvdXJzZV9saXN0Lmxlbmd0aCA+IDFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpdGVtLl9pZClcIiAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIml0ZW1ba2V5XVwiPnt7aXRlbVtrZXldfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdXJzZSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIHNlbGVjdGVkICpuZ0lmPVwiY291cnNlID09IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cImNvdXJzZSAhPSBpdGVtW2tleV1cIj57e2NvdXJzZX19PC9iPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTEVTUyBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3QubGVuZ3RoIDwgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5PUk1BTCBUWVBFIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklFTEQgUEFORUwgVFlQRSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZmlsdGVyQWN0aXZhdGVkICYmIF9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdmaWVsZF9wYW5lbCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEVESVQgQlVUVE9OIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSA9PSAnYmFsbGV0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9lZGl0U3R1ZGVudCcsIGl0ZW0uX2lkLCBncmlkX25hbWUsIG1hc3Rlcl0gXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XCI+IDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tLSBHUk9VUCBNQU5BR0VNRU5UIEJVVFRPTiAtLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSpuZ0lmPVwiaXRlbS5ncm91cF9tZ3RcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSA9PSAnYmFsbGV0JyAmJiBncmlkX25hbWUgIT0gJ05ldyBkZW1hbmRzJ1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JvdXBNYW5hZ2VtZW50JywgaXRlbS5faWQsIGdyaWRfbmFtZSwgbWFzdGVyXSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+IEdyb3VwIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBJRiBERVRBSUxTIElTIEFDVElWQVRFRCBJTiBHUklEIENPTkZJRyBDT0xMRUNUSU9OIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWQgJiYgbWFzdGVyX25hbWUgPT0gJ2JhbGxldCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZGV0YWlscycsIGl0ZW0uX2lkLCBncmlkX25hbWVdIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj4gRGV0YWlsIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBBVVRPIERFVEFJTFMgSUYgREVUQUlMUyBJUyBBQ1RJVkFURUQgSU4gR1JJRCBDT05GSUcgQ09MTEVDVElPTiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJpdGVtLmRldGFpbHMuYWN0aXZhdGVkICYmIGFwcF9uYW1lID09J2F1dG8nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2F1dG9fZGV0YWlscycsIGl0ZW0uX2lkLCBncmlkX25hbWVdIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj4gRGV0YWlsIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBNT0RBTCA8dGQgKm5nSWY9XCJpdGVtLmRldGFpbHMuYWN0aXZhdGVkXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cIm1vZGFsXCIgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiPkRFVEFJTCA8L2J1dHRvbj48L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1JRiBXT1JLRkxPVyBUWVBFIEJUTiBUTyBHTyBCQUNLIFRPIENVUlJFTlQgU1RFUCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnd29ya2Zsb3cnXCI+IDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9DdXJyZW50U3RlcChpdGVtKVwiIHZhbHVlPVwie3tpdGVtLnN0ZXBfaWR9fSBcIj5DdXJyZW50IHN0ZXAgPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSBNb2RhbCAtLT5cclxuXHJcbiAgICBgXHJcbn0pXHJcblxyXG4gZXhwb3J0IGNsYXNzIEdyaWRQYW5lbENvbXBvbmVudCB7XHJcblxyXG4gICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9leHBvcnRTZXJ2aWNlOiBFeHBvcnRTZXJ2aWNlKXt9XHJcblxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgbXlMaXN0RGF0YSA9IFtdOy8vID0gIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgZ3JpZF9uYW1lO1xyXG4gICAga2V5c05hbWUgPSBbXTtcclxuICAgIHNob3dJbnB1dCA9IFtdO1xyXG4gICAgZmlsdGVyQWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgICBtYXN0ZXIgPSBcIlwiO1xyXG4gICAgYXBwX25hbWUgPSBcIlwiO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLl9zdGVwU2VydmljZS5tZW51X2xldmVsKTtcclxuICAgICAgICB0aGlzLmdyaWRfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJncmlkX25hbWVcIl07XHJcbiAgICAgICAgdGhpcy5tYXN0ZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wibWFzdGVyXCJdO1xyXG4gICAgICAgIC8vIHRoaXMuYXBwX25hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwX25hbWVcIl07XHJcbiAgICAgICAgdGhpcy5hcHBfbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHAnKVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcF9uYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hc3RlcilcclxuICAgICAgICBpZih0aGlzLm1hc3RlciAhPSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKHRoaXMuZ3JpZF9uYW1lLCB0aGlzLm1hc3RlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcyh0aGlzLmdyaWRfbmFtZSwgJycpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dC5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXlMaXN0RGF0YSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgICAgIHRoaXMua2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxufVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmlsdGVySW5wdXQoaWR4KXtcclxuICAgICAgICBpZiAodGhpcy5zaG93SW5wdXRbaWR4XSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dFtpZHhdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVbmRlZmluZWQodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUNoZWNrQm94KCRldmVudCwgaXRlbSl7XHJcbiAgICAgICAvLyBsZXQgdmFsdWUgPSAkZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSRldmVudC50YXJnZXQuY2hlY2tlZDtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC50YXJnZXQpXHJcbiAgICAgICAgbGV0IGZpZWxkTmFtZSA9ICRldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm1hc3RlcilcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS51cGRhdGVDaGVja2JveCh2YWx1ZSxpdGVtLl9pZCx0aGlzLm1hc3RlciwgdGhpcy5hcHBfbmFtZSwgZmllbGROYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbDIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpZCl7XHJcbiAgICAgICAgbGV0IGNvdXJzZV90eXBlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmNoYW5nZUNvdXJzZShjb3Vyc2VfdHlwZSxpZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuICAgIGZpbHRlcihldmVudDogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgIC8vaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhc3NlIHBhciBncmlkIGNtcFwiKTtcclxuICAgICAgICAgICAgLy99ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuIF9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZmlsdGVyRGF0YShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnNyY0VsZW1lbnQuaWQpO31cclxuICAgICAgICAvLyAgdGhpcy5maWx0ZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgLy99XHJcblxyXG4gICAgZXhwb3J0RXhjZWwoKXtcclxuICAgICAgICB0aGlzLmdyaWRfbmFtZVxyXG4gICAgICAgIHRoaXMubWFzdGVyXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJYWFhYWFhcIilcclxuICAgICAgICB0aGlzLl9leHBvcnRTZXJ2aWNlLnRvRXhjZWwodGhpcy5ncmlkX25hbWUsdGhpcy5tYXN0ZXIpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhciBNSU1FX1RZUEUgPSBcImFwcGxpY2F0aW9uL3gteGxzXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyB2YXIgYmxvYiA9IG5ldyBCbG9iKFtkYXRhXSwge3R5cGU6IE1JTUVfVFlQRX0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBibG9iID0gbmV3IEJsb2IoW2RhdGFdLCB7IHR5cGU6ICd0ZXh0L2NzdicgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHVybD0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYobmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgJ0Jvb2suY3N2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5kb3dubG9hZCA9ICdCb29rLmNzdic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LlVSTC5yZXZva2VPYmplY3RVUkwodXJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93Lm9wZW4odXJsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG5cclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
