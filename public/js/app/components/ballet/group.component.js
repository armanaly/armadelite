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
var grid_service_1 = require("../grid.service");
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
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, grid_service_1.GridPanelService, group_service_1.GroupService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], GroupComponent);
    return GroupComponent;
    var _a, _b, _c;
}());
exports.GroupComponent = GroupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLDhCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLDZCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBcURqRDtJQUVJLHdCQUNvQixNQUFjLEVBQVUsWUFBK0IsRUFDdEQsYUFBMkIsRUFDNUIsS0FBcUIsRUFBVSxLQUFXO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBbUI7UUFDdEQsa0JBQWEsR0FBYixhQUFhLENBQWM7UUFDNUIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBUTlELFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsV0FBTSxHQUFHLEVBQUUsQ0FBQztRQUNaLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBWSxHQUFHLEVBQUUsQ0FBQTtJQVgrQyxDQUFDO0lBWWpFLGlDQUFRLEdBQVI7UUFBQSxpQkF5QkM7UUF4QkcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pDLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQ3hDLEtBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxD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bmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JvdXAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXG5cbiBcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiICpuZ0lmPVwiZGlzcGxheVwiPlxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGNvdXJzZV90eXBlLCAnbWFzdGVyX3ZhbCc6IHN0YWdlfVwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCI+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XG4gICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgPGgxICpuZ0lmPVwic3RhZ2UgIT0gJydcIj57e3N0YWdlfX0gLSB7e2NvdXJzZV90eXBlfX08L2gxPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAgKm5nSWY9XCJkaXNwbGF5XCI+IFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3tzdHVkZW50LnByb2ZpbGVfbm9tfX0ge3tzdHVkZW50LnByb2ZpbGVfZmlyc3RuYW1lfX0gLSBOdW1iZXIgb2Ygd2Vla3M6IHt7c3R1ZGVudC5kdXJhdGlvbn19IFxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBTZXQgdG8gZ3JvdXA6IFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImdyb3Vwc1wiIChjaGFuZ2UpPVwidXBkYXRlR3JvdXAoJGV2ZW50KVwiICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4gLS08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBncm91cCBvZiB0aGlzLmdyb3Vwc1wiIHZhbHVlPVwie3tncm91cH19XCI+e3tncm91cH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgIDxkaXY+Q3VycmVudCBncm91cDoge3t0aGlzLmN1cnJlbnRHcm91cH19PC9kaXY+XG4gICAgICAgIDxkaXY+PC9kaXY+ICAgICAgICBcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgID5cbiAgICAgICAgICAgIDx0ciA+XG4gICAgICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMjwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPldFRUsgMzwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHRoaXMudmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgPHRkPnt7aXRlbS5ncm91cH19PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHBlb3BsZXMgb2YgaXRlbS5sc3RcIj4gXG4gICAgICAgICAgICAgICAgICAge3twZW9wbGVzLnBlb3BsZX19IFxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgPC9kaXY+YFxufSlcblxuZXhwb3J0IGNsYXNzIEdyb3VwQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBjb3Vyc2VfdHlwZTtcbiAgICBzdGFnZTtcbiAgICBvYmpfaWQ7XG4gICAgdmFsdWVzO1xuICAgIGRpc3BsYXkgPSBmYWxzZTtcbiAgICBncm91cHMgPSBbXTtcbiAgICBzdHVkZW50ID0ge307XG4gICAgY3VycmVudEdyb3VwID0gJydcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZV90eXBlID0gcGFyYW1zWydjb3Vyc2VfdHlwZSddXG4gICAgICAgICAgICB0aGlzLnN0YWdlID0gcGFyYW1zWydzdGFnZSddXG4gICAgICAgIH0pO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcbiAgICAgICB0aGlzLnN0dWRlbnQgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZFt0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZC5maW5kSW5kZXgoeCA9PiB4Ll9pZCA9PSB0aGlzLm9ial9pZCldO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VfdHlwZSlcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLnZhbHVlc1t0aGlzLnZhbHVlcy5sZW5ndGggLSAxXS5ncm91cHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IHRoaXMuc3R1ZGVudFsnZ3JvdXAnXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIC8qXG4gICAgIENIQU5HRSBHUk9VUCBPRiBVU0VSXG4gICAgICAqL1xuICAgIHVwZGF0ZUdyb3VwKCRldmVudClcbiAgICB7XG4gICAgICAgIGxldCBncm91cCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmNoYW5nZUdyb3VwKGdyb3VwLHRoaXMub2JqX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICAgICAgKVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
