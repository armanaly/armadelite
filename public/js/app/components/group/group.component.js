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
            this.groups = this.values[this.values.length - 1].groups;
            this.values.pop();
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
    
      <nav class="form-navArrow">
            <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" >BACK</i></button>
      </nav>
    <div class="panel-body" *ngIf="display">
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
            <select id="groups" (change)="updateGroup($event)">
                <option *ngIf="currentGroup == '' " > --</option>
                <option *ngFor="let group of this.groups" value="{{group}}">{{group}}</option>
            </select>
        </span>
   </div>`
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
], GroupComponent);
exports.GroupComponent = GroupComponent;
var _a, _b, _c;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx5QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSx1QkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsZ0NBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msb0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUF3Q3REO0lBR0ksWUFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQzVCLEtBQXFCLEVBQVUsS0FBVztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQVE5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUE7SUFYK0MsQ0FBQztJQVlqRSxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUMxRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNsRSxTQUFTLENBQUMsSUFBSTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFHeEIsQ0FBQyxFQUNELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUtELFdBQVcsQ0FBQyxNQUFNO1FBRWQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDNUMsU0FBUyxDQUNOLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNsRSxTQUFTLENBQUMsSUFBSTtnQkFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRzdCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtRQUlULENBQUMsRUFDTyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FFdEMsQ0FBQTtJQUNULENBQUM7QUFFTCxDQUFDO0FBaEhEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWtDSjtLQUNULENBQUM7O2tCQUFBO0FBRVcsc0JBQWMsaUJBeUUxQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncm91cCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgXHJcbiAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXCIgPkJBQ0s8L2k+PC9idXR0b24+XHJcbiAgICAgIDwvbmF2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPldFRUsgMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+V0VFSyAyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy52YWx1ZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IG5nSWY9XCJ0eXBlT2YgKGl0ZW0uZ3JvdXApICE9ICd1bmRlZmluZWQnXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5ncm91cH19PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHBlb3BsZXMgb2YgaXRlbS5sc3RcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZW9wbGVzLnBlb3BsZX19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge3tzdHVkZW50LnByb2ZpbGVfbm9tfX0ge3tzdHVkZW50LnByb2ZpbGVfZmlyc3RuYW1lfX0gLSBOdW1iZXIgb2Ygd2Vla3M6IHt7c3R1ZGVudC5kdXJhdGlvbn19IFxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8c3BhbiAqbmdJZj1cImN1cnJlbnRHcm91cCAhPSAnJ1wiPiBDdXJyZW50IGdyb3VwOiB7e3RoaXMuY3VycmVudEdyb3VwfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIFNldCB0byBncm91cDogXHJcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJncm91cHNcIiAoY2hhbmdlKT1cInVwZGF0ZUdyb3VwKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nSWY9XCJjdXJyZW50R3JvdXAgPT0gJycgXCIgPiAtLTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgdGhpcy5ncm91cHNcIiB2YWx1ZT1cInt7Z3JvdXB9fVwiPnt7Z3JvdXB9fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBHcm91cENvbXBvbmVudCB7XHJcblxyXG4gICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2UgOiBHcmlkUGFuZWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIHByaXZhdGUgX2dyb3VwU2VydmljZTogR3JvdXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIGNvdXJzZV90eXBlO1xyXG4gICAgc3RhZ2U7XHJcbiAgICBvYmpfaWQ7XHJcbiAgICB2YWx1ZXM7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBncm91cHMgPSBbXTtcclxuICAgIHN0dWRlbnQgPSB7fTtcclxuICAgIGN1cnJlbnRHcm91cCA9ICcnXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ial9pZCA9IHBhcmFtc1sncmVjb3JkJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZV90eXBlID0gcGFyYW1zWydjb3Vyc2VfdHlwZSddXHJcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBwYXJhbXNbJ3N0YWdlJ11cclxuICAgICAgICB9KTtcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xyXG4gICAgICAgdGhpcy5zdHVkZW50ID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWRbdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQuZmluZEluZGV4KHggPT4geC5faWQgPT0gdGhpcy5vYmpfaWQpXVxyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VfdHlwZSlcclxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aCAtIDFdLmdyb3VwcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IHRoaXMuc3R1ZGVudFsnZ3JvdXAnXTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLypcclxuICAgICBDSEFOR0UgR1JPVVAgT0YgVVNFUlxyXG4gICAgICAqL1xyXG4gICAgdXBkYXRlR3JvdXAoJGV2ZW50KVxyXG4gICAge1xyXG4gICAgICAgIGxldCBncm91cCA9ICRldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuY2hhbmdlR3JvdXAoZ3JvdXAsdGhpcy5vYmpfaWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlcyA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcblxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
