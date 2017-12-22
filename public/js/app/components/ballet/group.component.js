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
let GroupComponent = class GroupComponent {
    constructor(router, _gridService, _groupService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this.route = route;
        this._http = _http;
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
    

 
    <div class="panel-heading panel-heading-custom" *ngIf="display">
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
        router_1.ActivatedRoute, http_1.Http])
], GroupComponent);
exports.GroupComponent = GroupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUNwRSw0Q0FBeUU7QUFFekUsd0NBQW1DO0FBQ25DLG1EQUE2QztBQUU3QyxrREFBaUQ7QUFvRWpELElBQWEsY0FBYyxHQUEzQjtJQUVJLFlBQ29CLE1BQWMsRUFBVSxZQUErQixFQUN0RCxhQUEyQixFQUM1QixLQUFxQixFQUFVLEtBQVc7UUFGMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFROUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGlCQUFZLEdBQUcsRUFBRSxDQUFBO0lBWCtDLENBQUM7SUFZakUsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7WUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBS0QsV0FBVyxDQUFDLE1BQU07UUFFZCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM1QyxTQUFTLENBQ04sSUFBSSxDQUFDLEVBQUU7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNsRSxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUc3QixDQUFDLEVBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBSVQsQ0FBQyxFQUNPLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FFdEMsQ0FBQTtJQUNULENBQUM7Q0FFSixDQUFBO0FBM0VZLGNBQWM7SUFuRTFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBOERKO0tBQ1QsQ0FBQztxQ0FLOEIsZUFBTSxFQUF5QiwrQkFBZ0I7UUFDdkMsNEJBQVk7UUFDckIsdUJBQWMsRUFBaUIsV0FBSTtHQUxyRCxjQUFjLENBMkUxQjtBQTNFWSx3Q0FBYyIsImZpbGUiOiJjb21wb25lbnRzL2JhbGxldC9ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFxuXG4gXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiAqbmdJZj1cImRpc3BsYXlcIj5cbiAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMlwiPlxuICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBjb3Vyc2VfdHlwZSwgJ21hc3Rlcic6IHN0YWdlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XG4gICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPGgxICpuZ0lmPVwic3RhZ2UgIT0gJydcIj57e3N0YWdlfX0gLSB7e2NvdXJzZV90eXBlfX08L2gxPlxuICAgICAgICAgICAgPGg0Pk51bWJlciBvZiBzdHVkZW50cyBwZXIgd2VlayBhbmQgcGVyIGdyb3VwPC9oND5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgICpuZ0lmPVwiZGlzcGxheVwiPiBcbiAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPGgzPnt7c3R1ZGVudC5wcm9maWxlX25vbX19IHt7c3R1ZGVudC5wcm9maWxlX2ZpcnN0bmFtZX19IDwvaDM+XG4gICAgICAgICAgICA8aDQ+TnVtYmVyIG9mIHdlZWtzOiB7e3N0dWRlbnQuZHVyYXRpb259fSAgLSAgQ3VycmVudCBncm91cDoge3t0aGlzLmN1cnJlbnRHcm91cH19PC9oND5cbiAgICAgICAgICAgIDxoND5TZXQgdG8gZ3JvdXA6PC9oND4gXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJ1cGRhdGVHcm91cCgkZXZlbnQpXCIgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiAtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzXCIgdmFsdWU9XCJ7e2dyb3VwfX1cIj57e2dyb3VwfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICBcbiAgICAgICAgPGJyPiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAqbmdJZj1cInN0YWdlICE9ICdBbGljYW50ZSBXaW50ZXIgSW50ZW5zaXZlIDIwMTcnXCIgPlxuICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAxPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAyPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAzPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgcGVvcGxlcyBvZiBpdGVtLmxzdFwiPiBcbiAgICAgICAgICAgICAgICAgICB7e3Blb3BsZXMucGVvcGxlfX0gXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIFxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAqbmdJZj1cInN0YWdlID09ICdBbGljYW50ZSBXaW50ZXIgSW50ZW5zaXZlIDIwMTcnXCIgPlxuICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+TmIgb2Ygc3R1ZGVudHM8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aGlzLnZhbHVlc1wiPlxuICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW0uZ3JvdXB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBwZW9wbGVzIG9mIGl0ZW0ubHN0XCI+IFxuICAgICAgICAgICAgICAgICAgIHt7cGVvcGxlcy5wZW9wbGV9fSBcbiAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgXG4gICA8L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2UgOiBHcmlkUGFuZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9ncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxuXG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGNvdXJzZV90eXBlO1xuICAgIHN0YWdlO1xuICAgIG9ial9pZDtcbiAgICB2YWx1ZXM7XG4gICAgZGlzcGxheSA9IGZhbHNlO1xuICAgIGdyb3VwcyA9IFtdO1xuICAgIHN0dWRlbnQgPSB7fTtcbiAgICBjdXJyZW50R3JvdXAgPSAnJ1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBwYXJhbXNbJ3N0YWdlJ11cbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhZ2UpO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcbiAgICAgICB0aGlzLnN0dWRlbnQgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZFt0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZC5maW5kSW5kZXgoeCA9PiB4Ll9pZCA9PSB0aGlzLm9ial9pZCldO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VfdHlwZSlcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLnZhbHVlc1t0aGlzLnZhbHVlcy5sZW5ndGggLSAxXS5ncm91cHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IHRoaXMuc3R1ZGVudFsnZ3JvdXAnXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIC8qXG4gICAgIENIQU5HRSBHUk9VUCBPRiBVU0VSXG4gICAgICAqL1xuICAgIHVwZGF0ZUdyb3VwKCRldmVudClcbiAgICB7XG4gICAgICAgIGxldCBncm91cCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmNoYW5nZUdyb3VwKGdyb3VwLHRoaXMub2JqX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICAgICAgKVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
