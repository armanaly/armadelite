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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUNwRSw0Q0FBeUU7QUFFekUsd0NBQW1DO0FBQ25DLG1EQUE2QztBQUU3QyxrREFBaUQ7QUFDakQsNERBQXNEO0FBaUV0RCxJQUFhLGNBQWMsR0FBM0I7SUFFSSxZQUNvQixNQUFjLEVBQVUsWUFBK0IsRUFDdEQsYUFBMkIsRUFDNUIsS0FBcUIsRUFBVSxLQUFXLEVBQVMsWUFBeUI7UUFGNUUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVFoRyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUE7SUFYaUYsQ0FBQztJQVluRyxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDeEMsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENB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LDBCQUFXO0dBTHZGLGNBQWMsQ0EyRTFCO0FBM0VZLHdDQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkLnNlcnZpY2VcIjtcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi8uLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogY291cnNlX3R5cGUsICdtYXN0ZXInOiBzdGFnZX1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5CQUNLPC9idXR0b24+PC9hPlxuICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMSAqbmdJZj1cInN0YWdlICE9ICcnXCI+e3tzdGFnZX19IC0ge3tjb3Vyc2VfdHlwZX19PC9oMT5cbiAgICAgICAgICAgIDxoND5OdW1iZXIgb2Ygc3R1ZGVudHMgcGVyIHdlZWsgYW5kIHBlciBncm91cDwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICAqbmdJZj1cImRpc3BsYXlcIj4gXG4gICAgICAgIDxkaXYgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxoMz57e3N0dWRlbnQucHJvZmlsZV9ub219fSB7e3N0dWRlbnQucHJvZmlsZV9maXJzdG5hbWV9fSA8L2gzPlxuICAgICAgICAgICAgPGg0Pk51bWJlciBvZiB3ZWVrczoge3tzdHVkZW50LmR1cmF0aW9ufX0gIC0gIEN1cnJlbnQgZ3JvdXA6IHt7dGhpcy5jdXJyZW50R3JvdXB9fTwvaDQ+XG4gICAgICAgICAgICA8aDQ+U2V0IHRvIGdyb3VwOjwvaDQ+IFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImdyb3Vwc1wiIChjaGFuZ2UpPVwidXBkYXRlR3JvdXAoJGV2ZW50KVwiICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4gLS08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBncm91cCBvZiB0aGlzLmdyb3Vwc1wiIHZhbHVlPVwie3tncm91cH19XCI+e3tncm91cH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgXG4gICAgICAgIDxicj4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgKm5nSWY9XCJzdGFnZSAhPSAnQWxpY2FudGUgV2ludGVyIEludGVuc2l2ZSAyMDE3J1wiID5cbiAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMzwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRoaXMudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5ncm91cH19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHBlb3BsZXMgb2YgaXRlbS5sc3RcIj4gXG4gICAgICAgICAgICAgICAgICAge3twZW9wbGVzLnBlb3BsZX19IFxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICBcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgKm5nSWY9XCJzdGFnZSA9PSAnQWxpY2FudGUgV2ludGVyIEludGVuc2l2ZSAyMDE3J1wiID5cbiAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPk5iIG9mIHN0dWRlbnRzPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgcGVvcGxlcyBvZiBpdGVtLmxzdFwiPiBcbiAgICAgICAgICAgICAgICAgICB7e3Blb3BsZXMucGVvcGxlfX0gXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgPC9kaXY+YFxufSlcblxuZXhwb3J0IGNsYXNzIEdyb3VwQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHAscHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XG5cblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgY291cnNlX3R5cGU7XG4gICAgc3RhZ2U7XG4gICAgb2JqX2lkO1xuICAgIHZhbHVlcztcbiAgICBkaXNwbGF5ID0gZmFsc2U7XG4gICAgZ3JvdXBzID0gW107XG4gICAgc3R1ZGVudCA9IHt9O1xuICAgIGN1cnJlbnRHcm91cCA9ICcnXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxuICAgICAgICAgICAgdGhpcy5jb3Vyc2VfdHlwZSA9IHBhcmFtc1snY291cnNlX3R5cGUnXVxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHBhcmFtc1snc3RhZ2UnXVxuICAgICAgICB9KTtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZCk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5zdGFnZSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xuICAgICAgIHRoaXMuc3R1ZGVudCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkW3RoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkLmZpbmRJbmRleCh4ID0+IHguX2lkID09IHRoaXMub2JqX2lkKV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudClcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdXJzZV90eXBlKVxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aCAtIDFdLmdyb3VwcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gdGhpcy5zdHVkZW50Wydncm91cCddO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgLypcbiAgICAgQ0hBTkdFIEdST1VQIE9GIFVTRVJcbiAgICAgICovXG4gICAgdXBkYXRlR3JvdXAoJGV2ZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGdyb3VwID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuY2hhbmdlR3JvdXAoZ3JvdXAsdGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgICAgICApXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
