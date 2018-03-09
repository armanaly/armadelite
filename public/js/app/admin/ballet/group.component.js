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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2JhbGxldC9ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsNENBQXlFO0FBRXpFLHdDQUFtQztBQUNuQyxtREFBNkM7QUFFN0Msa0RBQWlEO0FBQ2pELDREQUFzRDtBQWlFdEQsSUFBYSxjQUFjLEdBQTNCO0lBRUksWUFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQzVCLEtBQXFCLEVBQVUsS0FBVyxFQUFTLFlBQXlCO1FBRjVFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFRaEcsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGlCQUFZLEdBQUcsRUFBRSxDQUFBO0lBWGlGLENBQUM7SUFZbkcsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENB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VztHQUx2RixjQUFjLENBMkUxQjtBQTNFWSx3Q0FBYyIsImZpbGUiOiJhZG1pbi9iYWxsZXQvZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JvdXAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBjb3Vyc2VfdHlwZSwgJ21hc3Rlcic6IHN0YWdlfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cclxuICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTEwXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgPGgxICpuZ0lmPVwic3RhZ2UgIT0gJydcIj57e3N0YWdlfX0gLSB7e2NvdXJzZV90eXBlfX08L2gxPlxyXG4gICAgICAgICAgICA8aDQ+TnVtYmVyIG9mIHN0dWRlbnRzIHBlciB3ZWVrIGFuZCBwZXIgZ3JvdXA8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgICpuZ0lmPVwiZGlzcGxheVwiPiBcclxuICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxoMz57e3N0dWRlbnQucHJvZmlsZV9ub219fSB7e3N0dWRlbnQucHJvZmlsZV9maXJzdG5hbWV9fSA8L2gzPlxyXG4gICAgICAgICAgICA8aDQ+TnVtYmVyIG9mIHdlZWtzOiB7e3N0dWRlbnQuZHVyYXRpb259fSAgLSAgQ3VycmVudCBncm91cDoge3t0aGlzLmN1cnJlbnRHcm91cH19PC9oND5cclxuICAgICAgICAgICAgPGg0PlNldCB0byBncm91cDo8L2g0PiBcclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImdyb3Vwc1wiIChjaGFuZ2UpPVwidXBkYXRlR3JvdXAoJGV2ZW50KVwiICA+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uPiAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgdGhpcy5ncm91cHNcIiB2YWx1ZT1cInt7Z3JvdXB9fVwiPnt7Z3JvdXB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJyPiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgKm5nSWY9XCJzdGFnZSAhPSAnQWxpY2FudGUgV2ludGVyIEludGVuc2l2ZSAyMDE3J1wiID5cclxuICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAyPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDM8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy52YWx1ZXNcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW0uZ3JvdXB9fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHBlb3BsZXMgb2YgaXRlbS5sc3RcIj4gXHJcbiAgICAgICAgICAgICAgICAgICB7e3Blb3BsZXMucGVvcGxlfX0gXHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgKm5nSWY9XCJzdGFnZSA9PSAnQWxpY2FudGUgV2ludGVyIEludGVuc2l2ZSAyMDE3J1wiID5cclxuICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkPk5iIG9mIHN0dWRlbnRzPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRoaXMudmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBwZW9wbGVzIG9mIGl0ZW0ubHN0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAge3twZW9wbGVzLnBlb3BsZX19IFxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIFxyXG4gICA8L2Rpdj5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2UgOiBHcmlkUGFuZWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2dyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHAscHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XHJcblxyXG5cclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBjb3Vyc2VfdHlwZTtcclxuICAgIHN0YWdlO1xyXG4gICAgb2JqX2lkO1xyXG4gICAgdmFsdWVzO1xyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgZ3JvdXBzID0gW107XHJcbiAgICBzdHVkZW50ID0ge307XHJcbiAgICBjdXJyZW50R3JvdXAgPSAnJ1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcclxuICAgICAgICAgICAgdGhpcy5jb3Vyc2VfdHlwZSA9IHBhcmFtc1snY291cnNlX3R5cGUnXVxyXG4gICAgICAgICAgICB0aGlzLnN0YWdlID0gcGFyYW1zWydzdGFnZSddXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZCk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YWdlKTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgIHRoaXMuc3R1ZGVudCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkW3RoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkLmZpbmRJbmRleCh4ID0+IHguX2lkID09IHRoaXMub2JqX2lkKV07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdHVkZW50KVxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VfdHlwZSlcclxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aCAtIDFdLmdyb3VwcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gdGhpcy5zdHVkZW50Wydncm91cCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgIENIQU5HRSBHUk9VUCBPRiBVU0VSXHJcbiAgICAgICovXHJcbiAgICB1cGRhdGVHcm91cCgkZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gJGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHRoaXMuX2dyb3VwU2VydmljZS5jaGFuZ2VHcm91cChncm91cCx0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
