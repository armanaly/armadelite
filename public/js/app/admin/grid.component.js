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
        console.log(this._gridService.colTitle);
        if (this.master != '') {
            this._gridService.getDatas(this.grid_name, this.master)
                .subscribe(data => {
                console.log(this._gridService);
                console.log(this._gridService.config);
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
            this._gridService.dataGrid = this._gridService.originalData;
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
        this._gridService.filterData(event.target.value, event.target.id);
    }
    filterByCombo(event) {
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
       <!--class="table-responsive"-->
       <div  *ngIf="display">
            <table class="table table-hover table-condensed"  >
                <tr>
                    <th *ngFor="let obj of _gridService.colTitle;let i = index" >
                       {{obj.title}}&nbsp; 
                            
                            <button *ngIf="obj.filterable" 
                                class="glyphicon glyphicon-filter" 
                                type="button" 
                                (click)="showFilterInput(i)">
                            </button>
                            <br>
                            <input   
                                *ngIf="obj.filterable && showInput[i] && obj.filter_type == 'text' "
                                myAutofocus="true"
                                type="text" 
                                id="{{obj.key}}"
                                name="{{obj.key}}"
                                (keyup)="filter($event)"
                             >
                            <select 
                                *ngIf="obj.filterable && showInput[i] && obj.filter_type == 'combo' "
                                id="{{obj.key}}" 
                                size="{{obj.data_combo.length}}"
                                name="{{obj.key}}"
                                (change)="filterByCombo($event)" >
                                    <option *ngFor="let val of obj.data_combo" value="{{val}}">{{val}}</option>
                            </select>
                        
                    </th>
                    <th  *ngIf="this._gridService.config.details_activated"></th>
                    <th *ngIf="this._gridService.config.group"  ></th>
                </tr>
                <tr *ngFor="let item of _gridService.dataGrid;let j = index">
                    <td *ngFor="let key of _gridService.keysName;let i = index" >
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
                        <p class="span-table" *ngIf="!filterActivated && _gridService.colTitle[i].type == 'field_panel'">
                            {{item[key]}}
                        
                        </p>
                        
                        <!--<span class="span-table" *ngIf="!filterActivated && _gridService.colTitle[i].type == 'field_panel'">-->
                            <!--{{item[key]}}  -->
                        <!--</span>-->
                    </td>
                    
                    <!-- EDIT BUTTON BALLET -->
                    <td  *ngIf="this._gridService.config.details_activated && app_name == 'ballet'">
                        <a [routerLink]="['/editStudent', item._id, grid_name, master] "> 
                            <button class="{{_stepService.template.grid_btn}}"  type="button" > 
                                <i class="glyphicon glyphicon-edit"> </i>
                            </button>
                        </a> 
                    </td>
                        <!-- EDIT BUTTON AUTO  -->
                    <td *ngIf="this._gridService.config.details_activated && app_name =='auto'">
                        <a [routerLink]="['/auto_details', item._id, grid_name] ">
                            <button class="btn btn-primary" type="button"> Detail </button>
                        </a> 
                    </td>
                    <!--- GROUP MANAGEMENT BUTTON --->
                    <!--*ngIf="item.group_mgt"-->
                    <td *ngIf="this._gridService.config.group" >
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

//# sourceMappingURL=data:application/json;base64,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RyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDYixDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHcEMsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUVULENBQUM7Q0FFSixDQUFBO0FBeEthLGtCQUFrQjtJQS9JL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBMElUO0tBQ0osQ0FBQztxQ0FLb0MsMEJBQVcsRUFBd0IsK0JBQWdCLEVBQWtCLGVBQU07UUFDbEYsdUJBQWMsRUFBaUIsV0FBSSxFQUEwQiw4QkFBYTtHQUozRixrQkFBa0IsQ0F3Sy9CO0FBeEthLGdEQUFrQiIsImZpbGUiOiJhZG1pbi9ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgY29uc3QgJCA6IGFueTtcclxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7RXhwb3J0U2VydmljZX0gZnJvbSBcIi4vZXhwb3J0LnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgIDxkaXYgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCIgPlxyXG4gICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgICAgIDxhICpuZ0lmPVwibWFzdGVyICE9IDFcIiBbcm91dGVyTGlua109XCJbJy9ob21lJ11cIiBbcXVlcnlQYXJhbXNdPVwieydhcHAnOiBhcHBfbmFtZSwgJ21hc3Rlcic6IG1hc3RlciwgJ3ByZW1lbnUnOiBfc3RlcFNlcnZpY2UubWVudV9sZXZlbH1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgIDxhICpuZ0lmPVwibWFzdGVyID09IDFcIiBbcm91dGVyTGlua109XCJbJy9tZW51J11cIiBbcXVlcnlQYXJhbXNdPVwieydhcHAnOiBhcHBfbmFtZX1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgPGgyICpuZ0lmPVwibWFzdGVyICE9ICcwJyBcIj57e21hc3Rlcn19PC9oMj5cclxuICAgICAgICAgICAgIDxoMz57e2dyaWRfbmFtZX19PC9oMz5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgIDxkaXYgKm5nSWY9XCJleHBvcnRcIiBhbGlnbj1cImxlZnRcIj4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwiZXhwb3J0RXhjZWwoKVwiIGNsYXNzPVwiYnJvd25fYnV0dG9uXCIgPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zYXZlXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgIDwhLS1jbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIi0tPlxyXG4gICAgICAgPGRpdiAgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICA+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBvYmogb2YgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlO2xldCBpID0gaW5kZXhcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge3tvYmoudGl0bGV9fSZuYnNwOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIm9iai5maWx0ZXJhYmxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZpbHRlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2hvd0ZpbHRlcklucHV0KGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwib2JqLmZpbHRlcmFibGUgJiYgc2hvd0lucHV0W2ldICYmIG9iai5maWx0ZXJfdHlwZSA9PSAndGV4dCcgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1cz1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e29iai5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7b2JqLmtleX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvYmouZmlsdGVyYWJsZSAmJiBzaG93SW5wdXRbaV0gJiYgb2JqLmZpbHRlcl90eXBlID09ICdjb21ibycgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleX19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInt7b2JqLmRhdGFfY29tYm8ubGVuZ3RofX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e29iai5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJmaWx0ZXJCeUNvbWJvKCRldmVudClcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IHZhbCBvZiBvYmouZGF0YV9jb21ib1wiIHZhbHVlPVwie3t2YWx9fVwiPnt7dmFsfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCAgKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZGV0YWlsc19hY3RpdmF0ZWRcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5ncm91cFwiICA+PC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO2xldCBqID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGtleSBvZiBfZ3JpZFNlcnZpY2Uua2V5c05hbWU7bGV0IGkgPSBpbmRleFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBUWVBFIENIRUNLIEJPWCAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdjaGVja2JveCcgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaXRlbVtrZXldXCIgbmFtZT1cInt7a2V5fX1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7aXRlbVtrZXldfX1cIiBjaGVja2VkIChjaGFuZ2UpPXVwZGF0ZUNoZWNrQm94KCRldmVudCxpdGVtKSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XSA9PSBmYWxzZVwiIG5hbWU9XCJ7e2tleX19XCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTU9SRSBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiAgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkWzBdLmNvdXJzZV9saXN0Lmxlbmd0aCA+IDFcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJjaGFuZ2VDb3Vyc2UoJGV2ZW50LCBpdGVtLl9pZClcIiAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBzZWxlY3RlZCB2YWx1ZT1cIml0ZW1ba2V5XVwiPnt7aXRlbVtrZXldfX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGNvdXJzZSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiIHNlbGVjdGVkICpuZ0lmPVwiY291cnNlID09IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiAqbmdJZj1cImNvdXJzZSAhPSBpdGVtW2tleV1cIj57e2NvdXJzZX19PC9iPjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ09NQk8gTEVTUyBUSEFOIDEgVkFMVUUgSU4gTElTVCBDT01CTy0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NvbWJvJyAmJiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3QubGVuZ3RoIDwgMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE5PUk1BTCBUWVBFIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ3N0YW5kYXJkJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRklFTEQgUEFORUwgVFlQRSAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzcGFuLXRhYmxlXCIgKm5nSWY9XCIhZmlsdGVyQWN0aXZhdGVkICYmIF9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdmaWVsZF9wYW5lbCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiBjbGFzcz1cInNwYW4tdGFibGVcIiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2ZpZWxkX3BhbmVsJ1wiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXt7aXRlbVtrZXldfX0gIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9zcGFuPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBFRElUIEJVVFRPTiBCQUxMRVQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5kZXRhaWxzX2FjdGl2YXRlZCAmJiBhcHBfbmFtZSA9PSAnYmFsbGV0J1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9lZGl0U3R1ZGVudCcsIGl0ZW0uX2lkLCBncmlkX25hbWUsIG1hc3Rlcl0gXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmdyaWRfYnRufX1cIiAgdHlwZT1cImJ1dHRvblwiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWVkaXRcIj4gPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBFRElUIEJVVFRPTiBBVVRPICAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZGV0YWlsc19hY3RpdmF0ZWQgJiYgYXBwX25hbWUgPT0nYXV0bydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvYXV0b19kZXRhaWxzJywgaXRlbS5faWQsIGdyaWRfbmFtZV0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPiBEZXRhaWwgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tLSBHUk9VUCBNQU5BR0VNRU5UIEJVVFRPTiAtLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSpuZ0lmPVwiaXRlbS5ncm91cF9tZ3RcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5ncm91cFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JvdXBNYW5hZ2VtZW50JywgaXRlbS5faWQsIGdyaWRfbmFtZSwgbWFzdGVyXSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5ncmlkX2J0bn19XCIgIHR5cGU9XCJidXR0b25cIj4gR3JvdXAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIElGIERFVEFJTFMgSVMgQUNUSVZBVEVEIElOIEdSSUQgQ09ORklHIENPTExFQ1RJT04gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWQgJiYgYXBwX25hbWUgPT0gJ2JhbGxldCdcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxhIFtyb3V0ZXJMaW5rXT1cIlsnL2RldGFpbHMnLCBpdGVtLl9pZCwgZ3JpZF9uYW1lXSBcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUuZ3JpZF9idG59fVwiICB0eXBlPVwiYnV0dG9uXCI+IERldGFpbCA8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvYT4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvdGQ+LS0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gTU9EQUwgPHRkICpuZ0lmPVwiaXRlbS5kZXRhaWxzLmFjdGl2YXRlZFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj5ERVRBSUwgPC9idXR0b24+PC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tSUYgV09SS0ZMT1cgVFlQRSBCVE4gVE8gR08gQkFDSyBUTyBDVVJSRU5UIFNURVAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ3dvcmtmbG93J1wiPiA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnb1RvQ3VycmVudFN0ZXAoaXRlbSlcIiB2YWx1ZT1cInt7aXRlbS5zdGVwX2lkfX0gXCI+Q3VycmVudCBzdGVwIDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gTW9kYWwgLS0+XHJcblxyXG4gICAgYFxyXG59KVxyXG5cclxuIGV4cG9ydCBjbGFzcyBHcmlkUGFuZWxDb21wb25lbnQge1xyXG5cclxuICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZXhwb3J0U2VydmljZTogRXhwb3J0U2VydmljZSl7fVxyXG5cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIG15TGlzdERhdGEgPSBbXTsvLyA9ICB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZDtcclxuICAgIGdyaWRfbmFtZTtcclxuICAgIGtleXNOYW1lID0gW107XHJcbiAgICBzaG93SW5wdXQgPSBbXTtcclxuICAgIGZpbHRlckFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gICAgbWFzdGVyID0gXCJcIjtcclxuICAgIGFwcF9uYW1lID0gXCJcIjtcclxuICAgIGV4cG9ydCA9IGZhbHNlO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuX3N0ZXBTZXJ2aWNlLm1lbnVfbGV2ZWwpO1xyXG4gICAgICAgIHRoaXMuZ3JpZF9uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImdyaWRfbmFtZVwiXTtcclxuICAgICAgICB0aGlzLm1hc3RlciA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJtYXN0ZXJcIl07XHJcbiAgICAgICAgdGhpcy5hcHBfbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHAnKVxyXG5jb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFwcF9uYW1lKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hc3RlcilcclxuICAgICAgICBpZih0aGlzLm1hc3RlciAhPSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKHRoaXMuZ3JpZF9uYW1lLCB0aGlzLm1hc3RlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnQgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0ID0gdGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnLmV4cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcyh0aGlzLmdyaWRfbmFtZSwgJycpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dC5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXlMaXN0RGF0YSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgICAgIHRoaXMua2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxufVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmlsdGVySW5wdXQoaWR4KXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0lucHV0W2lkeF0gPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkID0gdGhpcy5fZ3JpZFNlcnZpY2Uub3JpZ2luYWxEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5kZWZpbmVkKHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVDaGVja0JveCgkZXZlbnQsIGl0ZW0pe1xyXG4gICAgICAgLy8gbGV0IHZhbHVlID0gJGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0kZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAkZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXN0ZXIpXHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UudXBkYXRlQ2hlY2tib3godmFsdWUsaXRlbS5faWQsdGhpcy5tYXN0ZXIsIHRoaXMuYXBwX25hbWUsIGZpZWxkTmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ291cnNlKCRldmVudCwgaWQpe1xyXG4gICAgICAgIGxldCBjb3Vyc2VfdHlwZSA9ICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5jaGFuZ2VDb3Vyc2UoY291cnNlX3R5cGUsaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGV2ZW50OiBhbnkpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgLy9pZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09Jycpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFzc2UgcGFyIGdyaWQgY21wXCIpO1xyXG4gICAgICAgICAgICAvL31lbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4gX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5maWx0ZXJEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJCeUNvbWJvKGV2ZW50OmFueSl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmZpbHRlckRhdGEoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudC5zcmNFbGVtZW50LmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnRFeGNlbCgpe1xyXG4gICAgICAgIC8vIHRoaXMuZ3JpZF9uYW1lXHJcbiAgICAgICAgLy8gdGhpcy5tYXN0ZXJcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhYWFhYWFwiKVxyXG4gICAgICAgIGxldCBleHBvcnRfaWQgPSAwXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZXhwb3J0X2lkICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGV4cG9ydF9pZCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnRfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V4cG9ydFNlcnZpY2UudG9FeGNlbCh0aGlzLmdyaWRfbmFtZSx0aGlzLm1hc3Rlcix0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZXhwb3J0X2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSB0aGlzLmdyaWRfbmFtZSArIFwiLmNzdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogJ3RleHQvY3N2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
