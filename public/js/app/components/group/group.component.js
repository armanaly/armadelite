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
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const http_1 = require("@angular/http");
const group_service_1 = require("./group.service");
const gridPanel_service_1 = require("../gridPanel.service");
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
        console.log(this._gridService.dataGrid);
        this.student = this._gridService.dataGrid[this._gridService.dataGrid.findIndex(x => x._id == this.obj_id)];
        console.log(this.course_type);
        this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
            .subscribe(data => {
            this.values = data;
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
    
      <nav class="form-navArrow" *ngIf="display">
            <a [routerLink]="['/grid']" replaceUrl="True" [queryParams]="{'grid_name': grid.name, 'master_val': val_level2}">
            <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" >BACK</i></button></a>
      </nav>

    
    <div  *ngIf="display"> 
       <div align="center">
          <h1 *ngIf="stage != ''">{{stage}} - {{course_type}}</h1>
        </div>  
    
     <table class="table table-hover table-condensed"  >
                        
                        <tr >
                            <td></td>
                            <td>WEEK 1</td>
                            <td>WEEK 2</td>
                            <td>WEEK 3</td>
                        </tr>
                        <tr *ngFor="let item of this.values">
                            <!--<div ngIf="typeOf (item.group) != 'undefined'">-->
                                <td>{{item.group}}</td>
                                <td *ngFor="let peoples of item.lst"> 
                                   {{peoples.people}} 
                                </td>
                            <!--</div>-->
                        </tr>
        </table>
        <span>
            {{student.profile_nom}} {{student.profile_firstname}} - Number of weeks: {{student.duration}} 
        </span>
        <span *ngIf="currentGroup != ''"> Current group: {{this.currentGroup}}</span>
        <span>
            Set to group: 
            <select id="groups" (change)="updateGroup($event)"  >
                <option> --</option>
                <option *ngFor="let group of this.groups" value="{{group}}">{{group}}</option>
            </select>
        </span>
   </div>`
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
], GroupComponent);
exports.GroupComponent = GroupComponent;
var _a, _b, _c;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx5QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSx1QkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsZ0NBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msb0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUErQ3REO0lBR0ksWUFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQzVCLEtBQXFCLEVBQVUsS0FBVztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQVE5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUE7SUFYK0MsQ0FBQztJQVlqRSxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMxRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNsRSxTQUFTLENBQUMsSUFBSTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBR3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3BCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUd4QixDQUFDLEVBQ0QsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBS0QsV0FBVyxDQUFDLE1BQU07UUFFZCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQTtRQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUM1QyxTQUFTLENBQ04sSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ2xFLFNBQVMsQ0FBQyxJQUFJO2dCQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHN0IsQ0FBQyxFQUNELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBSVQsQ0FBQyxFQUNPLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUV0QyxDQUFBO0lBQ1QsQ0FBQztBQUVMLENBQUM7QUF4SEQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQXlDSjtLQUNULENBQUM7O2tCQUFBO0FBRVcsc0JBQWMsaUJBMEUxQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbi8vIGltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge0dyb3VwU2VydmljZX0gZnJvbSBcIi4vZ3JvdXAuc2VydmljZVwiO1xuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyb3VwJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgIFxuICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIiAqbmdJZj1cImRpc3BsYXlcIj5cbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIHJlcGxhY2VVcmw9XCJUcnVlXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogZ3JpZC5uYW1lLCAnbWFzdGVyX3ZhbCc6IHZhbF9sZXZlbDJ9XCI+XG4gICAgICAgICAgICA8YnV0dG9uPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgKGNsaWNrKT1cInRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVwiID5CQUNLPC9pPjwvYnV0dG9uPjwvYT5cbiAgICAgIDwvbmF2PlxuXG4gICAgXG4gICAgPGRpdiAgKm5nSWY9XCJkaXNwbGF5XCI+IFxuICAgICAgIDxkaXYgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICA8aDEgKm5nSWY9XCJzdGFnZSAhPSAnJ1wiPnt7c3RhZ2V9fSAtIHt7Y291cnNlX3R5cGV9fTwvaDE+XG4gICAgICAgIDwvZGl2PiAgXG4gICAgXG4gICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPldFRUsgMTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPldFRUsgMjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPldFRUsgMzwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRoaXMudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgbmdJZj1cInR5cGVPZiAoaXRlbS5ncm91cCkgIT0gJ3VuZGVmaW5lZCdcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5ncm91cH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBwZW9wbGVzIG9mIGl0ZW0ubHN0XCI+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Blb3BsZXMucGVvcGxlfX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7e3N0dWRlbnQucHJvZmlsZV9ub219fSB7e3N0dWRlbnQucHJvZmlsZV9maXJzdG5hbWV9fSAtIE51bWJlciBvZiB3ZWVrczoge3tzdHVkZW50LmR1cmF0aW9ufX0gXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHNwYW4gKm5nSWY9XCJjdXJyZW50R3JvdXAgIT0gJydcIj4gQ3VycmVudCBncm91cDoge3t0aGlzLmN1cnJlbnRHcm91cH19PC9zcGFuPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFNldCB0byBncm91cDogXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJ1cGRhdGVHcm91cCgkZXZlbnQpXCIgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiAtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzXCIgdmFsdWU9XCJ7e2dyb3VwfX1cIj57e2dyb3VwfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L3NwYW4+XG4gICA8L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQge1xuXG4gICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2dyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XG5cblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgY291cnNlX3R5cGU7XG4gICAgc3RhZ2U7XG4gICAgb2JqX2lkO1xuICAgIHZhbHVlcztcbiAgICBkaXNwbGF5ID0gZmFsc2U7XG4gICAgZ3JvdXBzID0gW107XG4gICAgc3R1ZGVudCA9IHt9O1xuICAgIGN1cnJlbnRHcm91cCA9ICcnXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxuICAgICAgICAgICAgdGhpcy5jb3Vyc2VfdHlwZSA9IHBhcmFtc1snY291cnNlX3R5cGUnXVxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHBhcmFtc1snc3RhZ2UnXVxuICAgICAgICB9KTtcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZClcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZCk7XG4gICAgICAgdGhpcy5zdHVkZW50ID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWRbdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQuZmluZEluZGV4KHggPT4geC5faWQgPT0gdGhpcy5vYmpfaWQpXVxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY291cnNlX3R5cGUpXG4gICAgICAgIHRoaXMuX2dyb3VwU2VydmljZS5nZXRHcm91cHModGhpcy5vYmpfaWQsIHRoaXMuY291cnNlX3R5cGUsIHRoaXMuc3RhZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZ3JvdXBzID0gdGhpcy52YWx1ZXNbdGhpcy52YWx1ZXMubGVuZ3RoIC0gMV0uZ3JvdXBzO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnZhbHVlcy5wb3AoKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSB0aGlzLnN0dWRlbnRbJ2dyb3VwJ107XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbiAgICAvKlxuICAgICBDSEFOR0UgR1JPVVAgT0YgVVNFUlxuICAgICAgKi9cbiAgICB1cGRhdGVHcm91cCgkZXZlbnQpXG4gICAge1xuICAgICAgICBsZXQgZ3JvdXAgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHRoaXMuX2dyb3VwU2VydmljZS5jaGFuZ2VHcm91cChncm91cCx0aGlzLm9ial9pZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2dyb3VwU2VydmljZS5nZXRHcm91cHModGhpcy5vYmpfaWQsIHRoaXMuY291cnNlX3R5cGUsIHRoaXMuc3RhZ2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIClcblxuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG5cbiAgICAgICAgICAgIClcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
