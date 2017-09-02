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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require("@angular/http");
var group_service_1 = require("./group.service");
var gridPanel_service_1 = require("../gridPanel.service");
var GroupComponent = (function () {
    function GroupComponent(router, _gridService, _groupService, route, _http) {
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
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.obj_id = params['record'];
            _this.course_type = params['course_type'];
            _this.stage = params['stage'];
        });
        console.log(this.obj_id);
        console.log(this._gridService.dataGrid);
        this.student = this._gridService.dataGrid[this._gridService.dataGrid.findIndex(function (x) { return x._id == _this.obj_id; })];
        console.log(this.student);
        console.log(this.course_type);
        this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
            .subscribe(function (data) {
            _this.values = data;
            _this.groups = _this.values[_this.values.length - 1].groups;
            _this.values.pop();
            console.log(_this.values);
            _this.currentGroup = _this.student['group'];
            console.log(_this.groups);
            _this.display = true;
        }, function (error) { return console.log(error); });
    };
    GroupComponent.prototype.updateGroup = function ($event) {
        var _this = this;
        var group = $event.target.value;
        this._groupService.changeGroup(group, this.obj_id)
            .subscribe(function (data) {
            console.log(data);
            _this.currentGroup = group;
            _this._groupService.getGroups(_this.obj_id, _this.course_type, _this.stage)
                .subscribe(function (data) {
                _this.values = data;
                _this.currentGroup = group;
                console.log(_this.groups);
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    GroupComponent = __decorate([
        core_1.Component({
            selector: 'group',
            template: "\n    \n\n \n    <div class=\"panel-heading panel-heading-custom\" *ngIf=\"display\">\n        <div  class=\"row\" align=\"left\">\n            <div class=\"col-md-2\">\n                 <nav class=\"form-navArrow\">\n                    <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': course_type, 'master_val': stage}\">\n                    <button class=\"btn btn-warning\"><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n                 </nav>\n            </div>\n        \n          <div class=\"col-md-10\" align=\"center\">\n            <h1 *ngIf=\"stage != ''\">{{stage}} - {{course_type}}</h1>\n          </div>\n          </div>\n    </div>\n\n    <div class=\"panel-body\"  *ngIf=\"display\"> \n        <div>\n            {{student.profile_nom}} {{student.profile_firstname}} - Number of weeks: {{student.duration}} \n        </div>\n        <span>\n            Set to group: \n            <select id=\"groups\" (change)=\"updateGroup($event)\"  >\n                <option> --</option>\n                <option *ngFor=\"let group of this.groups\" value=\"{{group}}\">{{group}}</option>\n            </select>\n        </span>\n\n        <div>Current group: {{this.currentGroup}}</div>\n        <div></div>        \n        <table class=\"table table-hover table-condensed\"  >\n            <tr >\n                <td></td>\n                <td>WEEK 1</td>\n                <td>WEEK 2</td>\n                <td>WEEK 3</td>\n            </tr>\n            <tr *ngFor=\"let item of this.values\">\n                <td>{{item.group}}</td>\n                <td *ngFor=\"let peoples of item.lst\"> \n                   {{peoples.people}} \n                </td>\n            </tr>\n        </table>\n   </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], GroupComponent);
    return GroupComponent;
    var _a, _b, _c;
}());
exports.GroupComponent = GroupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLGtDQUErQixzQkFBc0IsQ0FBQyxDQUFBO0FBcUR0RDtJQUVJLHdCQUNvQixNQUFjLEVBQVUsWUFBK0IsRUFDdEQsYUFBMkIsRUFDNUIsS0FBcUIsRUFBVSxLQUFXO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBUTlELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtJQVgrQyxDQUFDO0lBWWpFLGlDQUFRLEdBQVI7UUFBQSxpQkF5QkM7UUF4QkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxD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bmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkUGFuZWwuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcblxuIFxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogY291cnNlX3R5cGUsICdtYXN0ZXJfdmFsJzogc3RhZ2V9XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8aDEgKm5nSWY9XCJzdGFnZSAhPSAnJ1wiPnt7c3RhZ2V9fSAtIHt7Y291cnNlX3R5cGV9fTwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICAqbmdJZj1cImRpc3BsYXlcIj4gXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7e3N0dWRlbnQucHJvZmlsZV9ub219fSB7e3N0dWRlbnQucHJvZmlsZV9maXJzdG5hbWV9fSAtIE51bWJlciBvZiB3ZWVrczoge3tzdHVkZW50LmR1cmF0aW9ufX0gXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIFNldCB0byBncm91cDogXG4gICAgICAgICAgICA8c2VsZWN0IGlkPVwiZ3JvdXBzXCIgKGNoYW5nZSk9XCJ1cGRhdGVHcm91cCgkZXZlbnQpXCIgID5cbiAgICAgICAgICAgICAgICA8b3B0aW9uPiAtLTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gKm5nRm9yPVwibGV0IGdyb3VwIG9mIHRoaXMuZ3JvdXBzXCIgdmFsdWU9XCJ7e2dyb3VwfX1cIj57e2dyb3VwfX08L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgPGRpdj5DdXJyZW50IGdyb3VwOiB7e3RoaXMuY3VycmVudEdyb3VwfX08L2Rpdj5cbiAgICAgICAgPGRpdj48L2Rpdj4gICAgICAgIFxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxuICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAxPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAyPC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+V0VFSyAzPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgcGVvcGxlcyBvZiBpdGVtLmxzdFwiPiBcbiAgICAgICAgICAgICAgICAgICB7e3Blb3BsZXMucGVvcGxlfX0gXG4gICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICA8L2Rpdj5gXG59KVxuXG5leHBvcnQgY2xhc3MgR3JvdXBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2UgOiBHcmlkUGFuZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9ncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxuXG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGNvdXJzZV90eXBlO1xuICAgIHN0YWdlO1xuICAgIG9ial9pZDtcbiAgICB2YWx1ZXM7XG4gICAgZGlzcGxheSA9IGZhbHNlO1xuICAgIGdyb3VwcyA9IFtdO1xuICAgIHN0dWRlbnQgPSB7fTtcbiAgICBjdXJyZW50R3JvdXAgPSAnJ1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBwYXJhbXNbJ3N0YWdlJ11cbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xuICAgICAgIHRoaXMuc3R1ZGVudCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkW3RoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkLmZpbmRJbmRleCh4ID0+IHguX2lkID09IHRoaXMub2JqX2lkKV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudClcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdXJzZV90eXBlKVxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aCAtIDFdLmdyb3VwcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gdGhpcy5zdHVkZW50Wydncm91cCddO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgLypcbiAgICAgQ0hBTkdFIEdST1VQIE9GIFVTRVJcbiAgICAgICovXG4gICAgdXBkYXRlR3JvdXAoJGV2ZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGdyb3VwID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuY2hhbmdlR3JvdXAoZ3JvdXAsdGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgICAgICApXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
