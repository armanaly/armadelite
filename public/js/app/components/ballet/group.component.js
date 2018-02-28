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
const router_1 = require("@angular/router");
const http_1 = require("@angular/http");
const group_service_1 = require("./group.service");
const grid_service_1 = require("../grid.service");
const step_service_1 = require("../../Engine/step.service");
let GroupComponent = class GroupComponent {
    constructor(router, _gridService, _groupService, route, _http, _stepService) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this.route = route;
        this._http = _http;
        this._stepService = _stepService;
        this.display = false;
        this.groups = [];
        this.student = {};
        this.currentGroup = '';
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.obj_id = params['record'];
            this.course_type = params['course_type'];
            this.stage = params['stage'];
        });
        console.log(this.obj_id);
        console.log(this.stage);
        console.log(this._gridService.dataGrid);
        this.student = this._gridService.dataGrid[this._gridService.dataGrid.findIndex(x => x._id == this.obj_id)];
        console.log(this.student);
        console.log(this.course_type);
        this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
            .subscribe(data => {
            this.values = data;
            this.groups = this.values[this.values.length - 1].groups;
            this.values.pop();
            console.log(this.values);
            this.currentGroup = this.student['group'];
            console.log(this.groups);
            this.display = true;
        }, error => console.log(error));
    }
    updateGroup($event) {
        let group = $event.target.value;
        this._groupService.changeGroup(group, this.obj_id)
            .subscribe(data => {
            console.log(data);
            this.currentGroup = group;
            this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
                .subscribe(data => {
                this.values = data;
                this.currentGroup = group;
                console.log(this.groups);
            }, error => console.log(error));
        }, error => console.log(error));
    }
};
GroupComponent = __decorate([
    core_1.Component({
        selector: 'group',
        template: `
    <div  class="{{_stepService.template.panel_heading}}" *ngIf="display">
        <div  class="row" align="left">
            <div class="col-md-2">
                 <nav class="form-navArrow">
                    <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master': stage}">
                    <button class="btn btn-warning"><i class="glyphicon glyphicon-triangle-left" ></i>BACK</button></a>
                 </nav>
            </div>
        
          <div class="col-md-10" align="center">
            <h1 *ngIf="stage != ''">{{stage}} - {{course_type}}</h1>
            <h4>Number of students per week and per group</h4>
          </div>
          </div>
    </div>

    <div class="panel-body"  *ngIf="display"> 
        <div align="center">
            <h3>{{student.profile_nom}} {{student.profile_firstname}} </h3>
            <h4>Number of weeks: {{student.duration}}  -  Current group: {{this.currentGroup}}</h4>
            <h4>Set to group:</h4> 
            <select id="groups" (change)="updateGroup($event)"  >
                <option> --</option>
                <option *ngFor="let group of this.groups" value="{{group}}">{{group}}</option>
            </select>
        </div>

        
        <br>        
        
        <table class="table table-hover table-condensed" *ngIf="stage != 'Alicante Winter Intensive 2017'" >
            <tr >
                <td></td>
                <td>WEEK 1</td>
                <td>WEEK 2</td>
                <td>WEEK 3</td>
            </tr>
            <tr *ngFor="let item of this.values">
                <td>{{item.group}}</td>
                <td *ngFor="let peoples of item.lst"> 
                   {{peoples.people}} 
                </td>
            </tr>
        </table>
        
        <table class="table table-hover table-condensed" *ngIf="stage == 'Alicante Winter Intensive 2017'" >
            <tr >
                <td></td>
                <td>Nb of students</td>
            </tr>
            <tr *ngFor="let item of this.values">
                <td>{{item.group}}</td>
                <td *ngFor="let peoples of item.lst"> 
                   {{peoples.people}} 
                </td>
            </tr>
        </table>
        
   </div>`
    }),
    __metadata("design:paramtypes", [router_1.Router, grid_service_1.GridPanelService,
        group_service_1.GroupService,
        router_1.ActivatedRoute, http_1.Http, step_service_1.StepService])
], GroupComponent);
exports.GroupComponent = GroupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUNwRSw0Q0FBeUU7QUFFekUsd0NBQW1DO0FBQ25DLG1EQUE2QztBQUU3QyxrREFBaUQ7QUFDakQsNERBQXNEO0FBaUV0RCxJQUFhLGNBQWMsR0FBM0I7SUFFSSxZQUNvQixNQUFjLEVBQVUsWUFBK0IsRUFDdEQsYUFBMkIsRUFDNUIsS0FBcUIsRUFBVSxLQUFXLEVBQVMsWUFBeUI7UUFGNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVFoRyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUE7SUFYaUYsQ0FBQztJQVluRyxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENB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LDBCQUFXO0dBTHZGLGNBQWMsQ0EyRTFCO0FBM0VZLHdDQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuLy8gaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0dyb3VwU2VydmljZX0gZnJvbSBcIi4vZ3JvdXAuc2VydmljZVwiO1xyXG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uLy4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyb3VwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2ICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogY291cnNlX3R5cGUsICdtYXN0ZXInOiBzdGFnZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XHJcbiAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMSAqbmdJZj1cInN0YWdlICE9ICcnXCI+e3tzdGFnZX19IC0ge3tjb3Vyc2VfdHlwZX19PC9oMT5cclxuICAgICAgICAgICAgPGg0Pk51bWJlciBvZiBzdHVkZW50cyBwZXIgd2VlayBhbmQgcGVyIGdyb3VwPC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICAqbmdJZj1cImRpc3BsYXlcIj4gXHJcbiAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICA8aDM+e3tzdHVkZW50LnByb2ZpbGVfbm9tfX0ge3tzdHVkZW50LnByb2ZpbGVfZmlyc3RuYW1lfX0gPC9oMz5cclxuICAgICAgICAgICAgPGg0Pk51bWJlciBvZiB3ZWVrczoge3tzdHVkZW50LmR1cmF0aW9ufX0gIC0gIEN1cnJlbnQgZ3JvdXA6IHt7dGhpcy5jdXJyZW50R3JvdXB9fTwvaDQ+XHJcbiAgICAgICAgICAgIDxoND5TZXQgdG8gZ3JvdXA6PC9oND4gXHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJncm91cHNcIiAoY2hhbmdlKT1cInVwZGF0ZUdyb3VwKCRldmVudClcIiAgPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbj4gLS08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzXCIgdmFsdWU9XCJ7e2dyb3VwfX1cIj57e2dyb3VwfX08L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxicj4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICpuZ0lmPVwic3RhZ2UgIT0gJ0FsaWNhbnRlIFdpbnRlciBJbnRlbnNpdmUgMjAxNydcIiA+XHJcbiAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAzPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRoaXMudmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBwZW9wbGVzIG9mIGl0ZW0ubHN0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAge3twZW9wbGVzLnBlb3BsZX19IFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICpuZ0lmPVwic3RhZ2UgPT0gJ0FsaWNhbnRlIFdpbnRlciBJbnRlbnNpdmUgMjAxNydcIiA+XHJcbiAgICAgICAgICAgIDx0ciA+XHJcbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5OYiBvZiBzdHVkZW50czwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aGlzLnZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5ncm91cH19PC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgcGVvcGxlcyBvZiBpdGVtLmxzdFwiPiBcclxuICAgICAgICAgICAgICAgICAgIHt7cGVvcGxlcy5wZW9wbGV9fSBcclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICBcclxuICAgPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VwQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9ncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwLHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSl7fVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgY291cnNlX3R5cGU7XHJcbiAgICBzdGFnZTtcclxuICAgIG9ial9pZDtcclxuICAgIHZhbHVlcztcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIGdyb3VwcyA9IFtdO1xyXG4gICAgc3R1ZGVudCA9IHt9O1xyXG4gICAgY3VycmVudEdyb3VwID0gJydcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cclxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHBhcmFtc1snc3RhZ2UnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5zdGFnZSk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICB0aGlzLnN0dWRlbnQgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZFt0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZC5maW5kSW5kZXgoeCA9PiB4Ll9pZCA9PSB0aGlzLm9ial9pZCldO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudClcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291cnNlX3R5cGUpXHJcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLnZhbHVlc1t0aGlzLnZhbHVlcy5sZW5ndGggLSAxXS5ncm91cHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IHRoaXMuc3R1ZGVudFsnZ3JvdXAnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICBDSEFOR0UgR1JPVVAgT0YgVVNFUlxyXG4gICAgICAqL1xyXG4gICAgdXBkYXRlR3JvdXAoJGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBncm91cCA9ICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuY2hhbmdlR3JvdXAoZ3JvdXAsdGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
