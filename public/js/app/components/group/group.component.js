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
        console.log(this.course_type);
        this._groupService.getGroups(this.obj_id, this.course_type, this.stage)
            .subscribe(function (data) {
            _this.values = data;
            _this.groups = _this.values[_this.values.length - 1].groups;
            _this.values.pop();
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
            template: "\n    \n      <nav class=\"form-navArrow\">\n            <button><i class=\"glyphicon glyphicon-triangle-left\" (click)=\"this.router.navigate(['/'])\" >BACK</i></button>\n      </nav>\n    <div class=\"panel-body\" *ngIf=\"display\">\n     <table class=\"table table-hover table-condensed\"  >\n                        \n                        <tr >\n                            <td></td>\n                            <td>WEEK 1</td>\n                            <td>WEEK 2</td>\n                            <td>WEEK 3</td>\n                        </tr>\n                        <tr *ngFor=\"let item of this.values\">\n                            <!--<div ngIf=\"typeOf (item.group) != 'undefined'\">-->\n                                <td>{{item.group}}</td>\n                                <td *ngFor=\"let peoples of item.lst\"> \n                                   {{peoples.people}} \n                                </td>\n                            <!--</div>-->\n                        </tr>\n        </table>\n        <span>\n            {{student.profile_nom}} {{student.profile_firstname}} - Number of weeks: {{student.duration}} \n        </span>\n        <span *ngIf=\"currentGroup != ''\"> Current group: {{this.currentGroup}}</span>\n        <span>\n            Set to group: \n            <select id=\"groups\" (change)=\"updateGroup($event)\">\n                <option *ngIf=\"currentGroup == '' \" > --</option>\n                <option *ngFor=\"let group of this.groups\" value=\"{{group}}\">{{group}}</option>\n            </select>\n        </span>\n   </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], GroupComponent);
    return GroupComponent;
    var _a, _b, _c;
}());
exports.GroupComponent = GroupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msa0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUF3Q3REO0lBR0ksd0JBQ29CLE1BQWMsRUFBVSxZQUErQixFQUN0RCxhQUEyQixFQUM1QixLQUFxQixFQUFVLEtBQVc7UUFGMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFROUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGlCQUFZLEdBQUcsRUFBRSxDQUFBO0lBWCtDLENBQUM7SUFZakUsaUNBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDeEMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFBO1FBQzFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ2xFLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDUCxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQ3pELEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDbEIsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBS0Qsb0NBQVcsR0FBWCxVQUFZLE1BQU07UUFBbEIsaUJBeUJDO1FBdkJHLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1FBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzVDLFNBQVMsQ0FDTixVQUFBLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSSxDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNsRSxTQUFTLENBQUMsVUFBQSxJQUFJO2dCQUNQLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFHN0IsQ0FBQyxFQUNELFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtRQUlULENBQUMsRUFDTyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBRXRDLENBQUE7SUFDVCxDQUFDO0lBOUdMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxzakRBa0NKO1NBQ1QsQ0FBQzs7c0JBQUE7SUEyRUYscUJBQUM7O0FBQUQsQ0F6RUEsQUF5RUMsSUFBQTtBQXpFWSxzQkFBYyxpQkF5RTFCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncm91cC9ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyb3VwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICBcclxuICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiIChjbGljayk9XCJ0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSlcIiA+QkFDSzwvaT48L2J1dHRvbj5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+V0VFSyAxPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDI8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPldFRUsgMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aGlzLnZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgbmdJZj1cInR5cGVPZiAoaXRlbS5ncm91cCkgIT0gJ3VuZGVmaW5lZCdcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgcGVvcGxlcyBvZiBpdGVtLmxzdFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3Blb3BsZXMucGVvcGxlfX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7e3N0dWRlbnQucHJvZmlsZV9ub219fSB7e3N0dWRlbnQucHJvZmlsZV9maXJzdG5hbWV9fSAtIE51bWJlciBvZiB3ZWVrczoge3tzdHVkZW50LmR1cmF0aW9ufX0gXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuICpuZ0lmPVwiY3VycmVudEdyb3VwICE9ICcnXCI+IEN1cnJlbnQgZ3JvdXA6IHt7dGhpcy5jdXJyZW50R3JvdXB9fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgU2V0IHRvIGdyb3VwOiBcclxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImdyb3Vwc1wiIChjaGFuZ2UpPVwidXBkYXRlR3JvdXAoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdJZj1cImN1cnJlbnRHcm91cCA9PSAnJyBcIiA+IC0tPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBncm91cCBvZiB0aGlzLmdyb3Vwc1wiIHZhbHVlPVwie3tncm91cH19XCI+e3tncm91cH19PC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgPC9kaXY+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyb3VwQ29tcG9uZW50IHtcclxuXHJcbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgY291cnNlX3R5cGU7XHJcbiAgICBzdGFnZTtcclxuICAgIG9ial9pZDtcclxuICAgIHZhbHVlcztcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIGdyb3VwcyA9IFtdO1xyXG4gICAgc3R1ZGVudCA9IHt9O1xyXG4gICAgY3VycmVudEdyb3VwID0gJydcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cclxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9IHBhcmFtc1snc3RhZ2UnXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICB0aGlzLnN0dWRlbnQgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZFt0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZC5maW5kSW5kZXgoeCA9PiB4Ll9pZCA9PSB0aGlzLm9ial9pZCldXHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdXJzZV90eXBlKVxyXG4gICAgICAgIHRoaXMuX2dyb3VwU2VydmljZS5nZXRHcm91cHModGhpcy5vYmpfaWQsIHRoaXMuY291cnNlX3R5cGUsIHRoaXMuc3RhZ2UpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy52YWx1ZXNbdGhpcy52YWx1ZXMubGVuZ3RoIC0gMV0uZ3JvdXBzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gdGhpcy5zdHVkZW50Wydncm91cCddO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICAvKlxyXG4gICAgIENIQU5HRSBHUk9VUCBPRiBVU0VSXHJcbiAgICAgICovXHJcbiAgICB1cGRhdGVHcm91cCgkZXZlbnQpXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGdyb3VwID0gJGV2ZW50LnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHRoaXMuX2dyb3VwU2VydmljZS5jaGFuZ2VHcm91cChncm91cCx0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JvdXBzKTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
