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
        console.log(this.app_name);
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
                    <!-- DETAILS CARGO RATE -->
                    <td  *ngIf="this._gridService.config.details_activated && app_name == 'cargo'">
                        <a [routerLink]="['/flyDetails', item.origin, item.destination] "> 
                            <button class="{{_stepService.template.grid_btn}}"  type="button" > 
                                Rates<!--<i class="glyphicon glyphicon-edit"> </i>-->
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2dyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0Esd0NBQW9FO0FBQ3BFLGlEQUFnRDtBQUNoRCw0Q0FBeUU7QUFDekUseURBQW1EO0FBQ25ELHdDQUFtQztBQUNuQyxxREFBK0M7QUF3SjlDLElBQWEsa0JBQWtCLEdBQS9CO0lBR0csWUFBb0IsWUFBeUIsRUFBVSxZQUE4QixFQUFVLE1BQWMsRUFDekYsS0FBcUIsRUFBVSxLQUFXLEVBQVUsY0FBNkI7UUFEakYsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBRXJHLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVoQixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsV0FBTSxHQUFHLEtBQUssQ0FBQztJQVZ3RixDQUFDO0lBV3hHLFFBQVE7UUFFSixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRy9CLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUNyQyxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQSxDQUFDO29CQUN4RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztnQkFDbEQsQ0FBQztZQUNMLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7UUFDVCxDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztpQkFDekMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBR2QsQ0FBQyxFQUNULEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtRQUNELENBQUM7UUFFRCxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3pELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFJM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFFNUIsQ0FBQztJQUNHLGVBQWUsQ0FBQyxJQUFJO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsSUFBSSxnQkFBZ0IsR0FBcUI7WUFDckMsV0FBVyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7U0FFL0QsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsUUFBUSxDQUFDLElBQUk7UUFDVCxNQUFNLENBQUMsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsZUFBZSxDQUFDLEdBQUc7UUFFZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUNoQyxDQUFDO1lBQ0csSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUE7WUFDM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBSztRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUE7UUFDekMsTUFBTSxDQUFDLENBQUMsT0FBTyxLQUFLLEtBQUssV0FBVyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUdELGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSTtRQUV2QixJQUFJLEtBQUssR0FBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUdqQyxJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUVuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDO2FBQ2pGLFNBQVMsQ0FDTixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ3pCLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUlULENBQUM7SUFFRCxZQUFZLENBQUMsTUFBTSxFQUFFLEVBQUU7UUFDbkIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFDLEVBQUUsQ0FBQzthQUN6QyxTQUFTLENBQ04sSUFBSSxDQUFDLEVBQUU7UUFDUCxDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUNELE1BQU0sQ0FBQyxLQUFVO1FBT2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQVM7UUFHbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRUQsV0FBVztRQUtQLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQTtRQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxXQUFXLENBQUMsQ0FDOUQsQ0FBQztZQUNHLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDckYsU0FBUyxDQUNOLElBQUksQ0FBQyxFQUFFO1lBRUgsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUE7WUFDdEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO1lBQ2xELElBQUksR0FBRyxHQUFFLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3pDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztnQkFDYixDQUFDLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztnQkFDdEIsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDVixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFHcEMsQ0FBQyxFQUNELEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUVULENBQUM7Q0FFSixDQUFBO0FBekthLGtCQUFrQjtJQXZKL0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FrSlQ7S0FDSixDQUFDO3FDQUtvQywwQkFBVyxFQUF3QiwrQkFBZ0IsRUFBa0IsZUFBTTtRQUNsRix1QkFBYyxFQUFpQixXQUFJLEVBQTBCLDhCQUFhO0dBSjNGLGtCQUFrQixDQXlLL0I7QUF6S2EsZ0RBQWtCIiwiZmlsZSI6ImFkbWluL2dyaWQuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSBjb25zdCAkIDogYW55O1xyXG5pbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtFeHBvcnRTZXJ2aWNlfSBmcm9tIFwiLi9leHBvcnQuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgPGRpdiAgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIiA+XHJcbiAgICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJtYXN0ZXIgIT0gMVwiIFtyb3V0ZXJMaW5rXT1cIlsnL2hvbWUnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2FwcCc6IGFwcF9uYW1lLCAnbWFzdGVyJzogbWFzdGVyLCAncHJlbWVudSc6IF9zdGVwU2VydmljZS5tZW51X2xldmVsfVwiID5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgPGEgKm5nSWY9XCJtYXN0ZXIgPT0gMVwiIFtyb3V0ZXJMaW5rXT1cIlsnL21lbnUnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2FwcCc6IGFwcF9uYW1lfVwiID5cclxuICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICA8aDIgKm5nSWY9XCJtYXN0ZXIgIT0gJzAnIFwiPnt7bWFzdGVyfX08L2gyPlxyXG4gICAgICAgICAgICAgPGgzPnt7Z3JpZF9uYW1lfX08L2gzPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPGRpdiAqbmdJZj1cImV4cG9ydFwiIGFsaWduPVwibGVmdFwiPiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJleHBvcnRFeGNlbCgpXCIgY2xhc3M9XCJicm93bl9idXR0b25cIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXNhdmVcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgPCEtLWNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiLS0+XHJcbiAgICAgICA8ZGl2ICAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgID5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IG9iaiBvZiBfZ3JpZFNlcnZpY2UuY29sVGl0bGU7bGV0IGkgPSBpbmRleFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICB7e29iai50aXRsZX19Jm5ic3A7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwib2JqLmZpbHRlcmFibGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsdGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzaG93RmlsdGVySW5wdXQoaSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJvYmouZmlsdGVyYWJsZSAmJiBzaG93SW5wdXRbaV0gJiYgb2JqLmZpbHRlcl90eXBlID09ICd0ZXh0JyBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG15QXV0b2ZvY3VzPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tvYmoua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIm9iai5maWx0ZXJhYmxlICYmIHNob3dJbnB1dFtpXSAmJiBvYmouZmlsdGVyX3R5cGUgPT0gJ2NvbWJvJyBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tvYmoua2V5fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwie3tvYmouZGF0YV9jb21iby5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7b2JqLmtleX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImZpbHRlckJ5Q29tYm8oJGV2ZW50KVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgdmFsIG9mIG9iai5kYXRhX2NvbWJvXCIgdmFsdWU9XCJ7e3ZhbH19XCI+e3t2YWx9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoICAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5kZXRhaWxzX2FjdGl2YXRlZFwiPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0lmPVwidGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnLmdyb3VwXCIgID48L3RoPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7bGV0IGogPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQga2V5IG9mIF9ncmlkU2VydmljZS5rZXlzTmFtZTtsZXQgaSA9IGluZGV4XCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRZUEUgQ0hFQ0sgQk9YIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NoZWNrYm94JyBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpdGVtW2tleV1cIiBuYW1lPVwie3trZXl9fVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwie3tpdGVtW2tleV19fVwiIGNoZWNrZWQgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaXRlbVtrZXldID09IGZhbHNlXCIgbmFtZT1cInt7a2V5fX1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7aXRlbVtrZXldfX1cIiAoY2hhbmdlKT11cGRhdGVDaGVja0JveCgkZXZlbnQsaXRlbSkgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVFlQRSBDT01CTyBNT1JFIFRIQU4gMSBWQUxVRSBJTiBMSVNUIENPTUJPLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGVbaV0udHlwZSA9PSAnY29tYm8nICYmICBfZ3JpZFNlcnZpY2UuZGF0YUdyaWRbMF0uY291cnNlX2xpc3QubGVuZ3RoID4gMVwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJncm91cHNcIiAoY2hhbmdlKT1cImNoYW5nZUNvdXJzZSgkZXZlbnQsIGl0ZW0uX2lkKVwiICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHNlbGVjdGVkIHZhbHVlPVwiaXRlbVtrZXldXCI+e3tpdGVtW2tleV19fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgY291cnNlIG9mIF9ncmlkU2VydmljZS5kYXRhR3JpZFswXS5jb3Vyc2VfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGIgc2VsZWN0ZWQgKm5nSWY9XCJjb3Vyc2UgPT0gaXRlbVtrZXldXCI+e3tjb3Vyc2V9fTwvYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiICpuZ0lmPVwiY291cnNlICE9IGl0ZW1ba2V5XVwiPnt7Y291cnNlfX08L2I+PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVFlQRSBDT01CTyBMRVNTIFRIQU4gMSBWQUxVRSBJTiBMSVNUIENPTUJPLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGVbaV0udHlwZSA9PSAnY29tYm8nICYmIF9ncmlkU2VydmljZS5kYXRhR3JpZFswXS5jb3Vyc2VfbGlzdC5sZW5ndGggPCAyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fSAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTk9STUFMIFRZUEUgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWZpbHRlckFjdGl2YXRlZCAmJiBfZ3JpZFNlcnZpY2UuY29sVGl0bGVbaV0udHlwZSA9PSAnc3RhbmRhcmQnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW1ba2V5XX19ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBGSUVMRCBQQU5FTCBUWVBFIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNwYW4tdGFibGVcIiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2ZpZWxkX3BhbmVsJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxzcGFuIGNsYXNzPVwic3Bhbi10YWJsZVwiICpuZ0lmPVwiIWZpbHRlckFjdGl2YXRlZCAmJiBfZ3JpZFNlcnZpY2UuY29sVGl0bGVbaV0udHlwZSA9PSAnZmllbGRfcGFuZWwnXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0te3tpdGVtW2tleV19fSAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3NwYW4+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tIEVESVQgQlVUVE9OIEJBTExFVCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgICpuZ0lmPVwidGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnLmRldGFpbHNfYWN0aXZhdGVkICYmIGFwcF9uYW1lID09ICdiYWxsZXQnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2VkaXRTdHVkZW50JywgaXRlbS5faWQsIGdyaWRfbmFtZSwgbWFzdGVyXSBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUuZ3JpZF9idG59fVwiICB0eXBlPVwiYnV0dG9uXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFwiPiA8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gREVUQUlMUyBDQVJHTyBSQVRFIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAgKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZGV0YWlsc19hY3RpdmF0ZWQgJiYgYXBwX25hbWUgPT0gJ2NhcmdvJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9mbHlEZXRhaWxzJywgaXRlbS5vcmlnaW4sIGl0ZW0uZGVzdGluYXRpb25dIFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5ncmlkX2J0bn19XCIgIHR5cGU9XCJidXR0b25cIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJhdGVzPCEtLTxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1lZGl0XCI+IDwvaT4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRURJVCBCVVRUT04gQVVUTyAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwidGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnLmRldGFpbHNfYWN0aXZhdGVkICYmIGFwcF9uYW1lID09J2F1dG8nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2F1dG9fZGV0YWlscycsIGl0ZW0uX2lkLCBncmlkX25hbWVdIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIj4gRGV0YWlsIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLS0gR1JPVVAgTUFOQUdFTUVOVCBCVVRUT04gLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0qbmdJZj1cIml0ZW0uZ3JvdXBfbWd0XCItLT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQgKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZ3JvdXBcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyb3VwTWFuYWdlbWVudCcsIGl0ZW0uX2lkLCBncmlkX25hbWUsIG1hc3Rlcl0gXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUuZ3JpZF9idG59fVwiICB0eXBlPVwiYnV0dG9uXCI+IEdyb3VwIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBJRiBERVRBSUxTIElTIEFDVElWQVRFRCBJTiBHUklEIENPTkZJRyBDT0xMRUNUSU9OIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08dGQgKm5nSWY9XCJpdGVtLmRldGFpbHMuYWN0aXZhdGVkICYmIGFwcF9uYW1lID09ICdiYWxsZXQnXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YSBbcm91dGVyTGlua109XCJbJy9kZXRhaWxzJywgaXRlbS5faWQsIGdyaWRfbmFtZV0gXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmdyaWRfYnRufX1cIiAgdHlwZT1cImJ1dHRvblwiPiBEZXRhaWwgPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2E+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L3RkPi0tPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE1PREFMIDx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWRcIj48YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwibW9kYWxcIiBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCI+REVUQUlMIDwvYnV0dG9uPjwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLUlGIFdPUktGTE9XIFRZUEUgQlROIFRPIEdPIEJBQ0sgVE8gQ1VSUkVOVCBTVEVQIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cInRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICd3b3JrZmxvdydcIj4gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pXCIgdmFsdWU9XCJ7e2l0ZW0uc3RlcF9pZH19IFwiPkN1cnJlbnQgc3RlcCA8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIE1vZGFsIC0tPlxyXG5cclxuICAgIGBcclxufSlcclxuXHJcbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2V4cG9ydFNlcnZpY2U6IEV4cG9ydFNlcnZpY2Upe31cclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBteUxpc3REYXRhID0gW107Ly8gPSAgdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XHJcbiAgICBncmlkX25hbWU7XHJcbiAgICBrZXlzTmFtZSA9IFtdO1xyXG4gICAgc2hvd0lucHV0ID0gW107XHJcbiAgICBmaWx0ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAgIG1hc3RlciA9IFwiXCI7XHJcbiAgICBhcHBfbmFtZSA9IFwiXCI7XHJcbiAgICBleHBvcnQgPSBmYWxzZTtcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLl9zdGVwU2VydmljZS5tZW51X2xldmVsKTtcclxuICAgICAgICB0aGlzLmdyaWRfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJncmlkX25hbWVcIl07XHJcbiAgICAgICAgdGhpcy5tYXN0ZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wibWFzdGVyXCJdO1xyXG4gICAgICAgIHRoaXMuYXBwX25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwJylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcF9uYW1lKVxyXG5jb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmFwcF9uYW1lKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1hc3RlcilcclxuICAgICAgICBpZih0aGlzLm1hc3RlciAhPSAnJyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKHRoaXMuZ3JpZF9uYW1lLCB0aGlzLm1hc3RlcilcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnQgIT09ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwb3J0ID0gdGhpcy5fZ3JpZFNlcnZpY2UuY29uZmlnLmV4cG9ydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcyh0aGlzLmdyaWRfbmFtZSwgJycpXHJcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dC5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXlMaXN0RGF0YSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgICAgIHRoaXMua2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxufVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmlsdGVySW5wdXQoaWR4KXtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0lucHV0W2lkeF0gPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkID0gdGhpcy5fZ3JpZFNlcnZpY2Uub3JpZ2luYWxEYXRhXHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrVW5kZWZpbmVkKHZhbHVlKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJylcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGVDaGVja0JveCgkZXZlbnQsIGl0ZW0pe1xyXG4gICAgICAgLy8gbGV0IHZhbHVlID0gJGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0kZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQudGFyZ2V0KVxyXG4gICAgICAgIGxldCBmaWVsZE5hbWUgPSAkZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tYXN0ZXIpXHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UudXBkYXRlQ2hlY2tib3godmFsdWUsaXRlbS5faWQsdGhpcy5tYXN0ZXIsIHRoaXMuYXBwX25hbWUsIGZpZWxkTmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyh2YWwyKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlQ291cnNlKCRldmVudCwgaWQpe1xyXG4gICAgICAgIGxldCBjb3Vyc2VfdHlwZSA9ICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5jaGFuZ2VDb3Vyc2UoY291cnNlX3R5cGUsaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG4gICAgZmlsdGVyKGV2ZW50OiBhbnkpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgICAgLy9pZiAoZXZlbnQudGFyZ2V0LnZhbHVlID09Jycpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFzc2UgcGFyIGdyaWQgY21wXCIpO1xyXG4gICAgICAgICAgICAvL31lbHNlIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy4gX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5maWx0ZXJEYXRhKGV2ZW50LnRhcmdldC52YWx1ZSwgZXZlbnQudGFyZ2V0LmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJCeUNvbWJvKGV2ZW50OmFueSl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlkKVxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmZpbHRlckRhdGEoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudC5zcmNFbGVtZW50LmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnRFeGNlbCgpe1xyXG4gICAgICAgIC8vIHRoaXMuZ3JpZF9uYW1lXHJcbiAgICAgICAgLy8gdGhpcy5tYXN0ZXJcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlhYWFhYWFwiKVxyXG4gICAgICAgIGxldCBleHBvcnRfaWQgPSAwXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZXhwb3J0X2lkICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGV4cG9ydF9pZCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmNvbmZpZy5leHBvcnRfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2V4cG9ydFNlcnZpY2UudG9FeGNlbCh0aGlzLmdyaWRfbmFtZSx0aGlzLm1hc3Rlcix0aGlzLl9ncmlkU2VydmljZS5jb25maWcuZXhwb3J0X2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmlsZU5hbWUgPSB0aGlzLmdyaWRfbmFtZSArIFwiLmNzdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBuZXcgQmxvYihbZGF0YV0sIHsgdHlwZTogJ3RleHQvY3N2JyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdXJsPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYS5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5VUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5vcGVuKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
