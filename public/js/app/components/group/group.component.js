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
<<<<<<< HEAD
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
=======
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
>>>>>>> d1fa1eedbea399ac5399c1fa03a123a371822cea
        this._groupService.changeGroup(group, this.obj_id)
            .subscribe(function (data) {
            console.log(data);
<<<<<<< HEAD
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
            template: "\n    \n     <nav class=\"form-navArrow\" *ngIf=\"display\">\n            <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': course_type, 'master_val': stage}\">\n            <button><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n      </nav>\n \n    \n    <div  *ngIf=\"display\"> \n       <div align=\"center\">\n          <h1 *ngIf=\"stage != ''\">{{stage}} - {{course_type}}</h1>\n        </div>  \n    \n     <table class=\"table table-hover table-condensed\"  >\n                        \n                        <tr >\n                            <td></td>\n                            <td>WEEK 1</td>\n                            <td>WEEK 2</td>\n                            <td>WEEK 3</td>\n                        </tr>\n                        <tr *ngFor=\"let item of this.values\">\n                            <!--<div ngIf=\"typeOf (item.group) != 'undefined'\">-->\n                                <td>{{item.group}}</td>\n                                <td *ngFor=\"let peoples of item.lst\"> \n                                   {{peoples.people}} \n                                </td>\n                            <!--</div>-->\n                        </tr>\n        </table>\n        <span>\n            {{student.profile_nom}} {{student.profile_firstname}} - Number of weeks: {{student.duration}} \n        </span>\n        <span *ngIf=\"currentGroup != ''\"> Current group: {{this.currentGroup}}</span>\n        <span>\n            Set to group: \n            <select id=\"groups\" (change)=\"updateGroup($event)\"  >\n                <option> --</option>\n                <option *ngFor=\"let group of this.groups\" value=\"{{group}}\">{{group}}</option>\n            </select>\n        </span>\n   </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], GroupComponent);
    return GroupComponent;
    var _a, _b, _c;
}());
=======
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
            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': course_type, 'master_val': stage}">
            <button><i class="glyphicon glyphicon-triangle-left" >BACK</i></button></a>
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
>>>>>>> d1fa1eedbea399ac5399c1fa03a123a371822cea
exports.GroupComponent = GroupComponent;

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx1QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSxxQkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msa0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUErQ3REO0lBR0ksd0JBQ29CLE1BQWMsRUFBVSxZQUErQixFQUN0RCxhQUEyQixFQUM1QixLQUFxQixFQUFVLEtBQVc7UUFGMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFtQjtRQUN0RCxrQkFBYSxHQUFiLGFBQWEsQ0FBYztRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFROUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUNiLGlCQUFZLEdBQUcsRUFBRSxDQUFBO0lBWCtDLENBQUM7SUFZakUsaUNBQVEsR0FBUjtRQUFBLGlCQXlCQztRQXhCRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDL0IsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUE7WUFDeEMsS0FBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLENB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bnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9ncm91cC5zZXJ2aWNlXCI7XG5pbXBvcnQge2ZvckVhY2h9IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JvdXAnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgXG4gICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBjb3Vyc2VfdHlwZSwgJ21hc3Rlcl92YWwnOiBzdGFnZX1cIj5cbiAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XG4gICAgICA8L25hdj5cbiBcbiAgICBcbiAgICA8ZGl2ICAqbmdJZj1cImRpc3BsYXlcIj4gXG4gICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxoMSAqbmdJZj1cInN0YWdlICE9ICcnXCI+e3tzdGFnZX19IC0ge3tjb3Vyc2VfdHlwZX19PC9oMT5cbiAgICAgICAgPC9kaXY+ICBcbiAgICBcbiAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+V0VFSyAxPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+V0VFSyAyPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+V0VFSyAzPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgdGhpcy52YWx1ZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBuZ0lmPVwidHlwZU9mIChpdGVtLmdyb3VwKSAhPSAndW5kZWZpbmVkJ1wiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3tpdGVtLmdyb3VwfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IHBlb3BsZXMgb2YgaXRlbS5sc3RcIj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cGVvcGxlcy5wZW9wbGV9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHt7c3R1ZGVudC5wcm9maWxlX25vbX19IHt7c3R1ZGVudC5wcm9maWxlX2ZpcnN0bmFtZX19IC0gTnVtYmVyIG9mIHdlZWtzOiB7e3N0dWRlbnQuZHVyYXRpb259fSBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiAqbmdJZj1cImN1cnJlbnRHcm91cCAhPSAnJ1wiPiBDdXJyZW50IGdyb3VwOiB7e3RoaXMuY3VycmVudEdyb3VwfX08L3NwYW4+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgU2V0IHRvIGdyb3VwOiBcbiAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJncm91cHNcIiAoY2hhbmdlKT1cInVwZGF0ZUdyb3VwKCRldmVudClcIiAgPlxuICAgICAgICAgICAgICAgIDxvcHRpb24+IC0tPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgZ3JvdXAgb2YgdGhpcy5ncm91cHNcIiB2YWx1ZT1cInt7Z3JvdXB9fVwiPnt7Z3JvdXB9fTwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvc3Bhbj5cbiAgIDwvZGl2PmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBHcm91cENvbXBvbmVudCB7XG5cbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBjb3Vyc2VfdHlwZTtcbiAgICBzdGFnZTtcbiAgICBvYmpfaWQ7XG4gICAgdmFsdWVzO1xuICAgIGRpc3BsYXkgPSBmYWxzZTtcbiAgICBncm91cHMgPSBbXTtcbiAgICBzdHVkZW50ID0ge307XG4gICAgY3VycmVudEdyb3VwID0gJydcbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG4gICAgICAgICAgICB0aGlzLmNvdXJzZV90eXBlID0gcGFyYW1zWydjb3Vyc2VfdHlwZSddXG4gICAgICAgICAgICB0aGlzLnN0YWdlID0gcGFyYW1zWydzdGFnZSddXG4gICAgICAgIH0pO1xuICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqX2lkKVxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcbiAgICAgICB0aGlzLnN0dWRlbnQgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZFt0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZC5maW5kSW5kZXgoeCA9PiB4Ll9pZCA9PSB0aGlzLm9ial9pZCldO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0dWRlbnQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5jb3Vyc2VfdHlwZSlcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ncm91cHMgPSB0aGlzLnZhbHVlc1t0aGlzLnZhbHVlcy5sZW5ndGggLSAxXS5ncm91cHM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzLnBvcCgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsdWVzKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IHRoaXMuc3R1ZGVudFsnZ3JvdXAnXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuICAgIC8qXG4gICAgIENIQU5HRSBHUk9VUCBPRiBVU0VSXG4gICAgICAqL1xuICAgIHVwZGF0ZUdyb3VwKCRldmVudClcbiAgICB7XG4gICAgICAgIGxldCBncm91cCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmNoYW5nZUdyb3VwKGdyb3VwLHRoaXMub2JqX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZ3JvdXBTZXJ2aWNlLmdldEdyb3Vwcyh0aGlzLm9ial9pZCwgdGhpcy5jb3Vyc2VfdHlwZSwgdGhpcy5zdGFnZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50R3JvdXAgPSBncm91cDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncm91cHMpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICAgICAgKVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
=======
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUNwRSx5QkFBdUQsaUJBQWlCLENBQUMsQ0FBQTtBQUV6RSx1QkFBbUIsZUFBZSxDQUFDLENBQUE7QUFDbkMsZ0NBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0Msb0NBQStCLHNCQUFzQixDQUFDLENBQUE7QUErQ3REO0lBR0ksWUFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQzVCLEtBQXFCLEVBQVUsS0FBVztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzVCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQVE5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFDWixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2IsaUJBQVksR0FBRyxFQUFFLENBQUE7SUFYK0MsQ0FBQztJQVlqRSxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN4QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUMxRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNsRSxTQUFTLENBQUMsSUFBSTtZQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDekQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFHeEIsQ0FBQyxFQUNELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztJQUtELFdBQVcsQ0FBQyxNQUFNO1FBRWQsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUE7UUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDNUMsU0FBUyxDQUNOLElBQUk7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNsRSxTQUFTLENBQUMsSUFBSTtnQkFDUCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7Z0JBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRzdCLENBQUMsRUFDRCxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtRQUlULENBQUMsRUFDTyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FFdEMsQ0FBQTtJQUNULENBQUM7QUFFTCxDQUFDO0FBekhEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUF5Q0o7S0FDVCxDQUFDOztrQkFBQTtBQUVXLHNCQUFjLGlCQTJFMUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG4vLyBpbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9ncmlkUGFuZWwuc2VydmljZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcbiAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCIgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBjb3Vyc2VfdHlwZSwgJ21hc3Rlcl92YWwnOiBzdGFnZX1cIj5cbiAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+QkFDSzwvaT48L2J1dHRvbj48L2E+XG4gICAgICA8L25hdj5cblxuICAgIFxuICAgIDxkaXYgICpuZ0lmPVwiZGlzcGxheVwiPiBcbiAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGgxICpuZ0lmPVwic3RhZ2UgIT0gJydcIj57e3N0YWdlfX0gLSB7e2NvdXJzZV90eXBlfX08L2gxPlxuICAgICAgICA8L2Rpdj4gIFxuICAgIFxuICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDI8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5XRUVLIDM8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0aGlzLnZhbHVlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IG5nSWY9XCJ0eXBlT2YgKGl0ZW0uZ3JvdXApICE9ICd1bmRlZmluZWQnXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57e2l0ZW0uZ3JvdXB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgcGVvcGxlcyBvZiBpdGVtLmxzdFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3twZW9wbGVzLnBlb3BsZX19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgICAge3tzdHVkZW50LnByb2ZpbGVfbm9tfX0ge3tzdHVkZW50LnByb2ZpbGVfZmlyc3RuYW1lfX0gLSBOdW1iZXIgb2Ygd2Vla3M6IHt7c3R1ZGVudC5kdXJhdGlvbn19IFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiY3VycmVudEdyb3VwICE9ICcnXCI+IEN1cnJlbnQgZ3JvdXA6IHt7dGhpcy5jdXJyZW50R3JvdXB9fTwvc3Bhbj5cbiAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICBTZXQgdG8gZ3JvdXA6IFxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cImdyb3Vwc1wiIChjaGFuZ2UpPVwidXBkYXRlR3JvdXAoJGV2ZW50KVwiICA+XG4gICAgICAgICAgICAgICAgPG9wdGlvbj4gLS08L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBncm91cCBvZiB0aGlzLmdyb3Vwc1wiIHZhbHVlPVwie3tncm91cH19XCI+e3tncm91cH19PC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9zcGFuPlxuICAgPC9kaXY+YFxufSlcblxuZXhwb3J0IGNsYXNzIEdyb3VwQ29tcG9uZW50IHtcblxuICAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2UgOiBHcmlkUGFuZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgICBwcml2YXRlIF9ncm91cFNlcnZpY2U6IEdyb3VwU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxuXG5cbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIGNvdXJzZV90eXBlO1xuICAgIHN0YWdlO1xuICAgIG9ial9pZDtcbiAgICB2YWx1ZXM7XG4gICAgZGlzcGxheSA9IGZhbHNlO1xuICAgIGdyb3VwcyA9IFtdO1xuICAgIHN0dWRlbnQgPSB7fTtcbiAgICBjdXJyZW50R3JvdXAgPSAnJ1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgICAgIHRoaXMuY291cnNlX3R5cGUgPSBwYXJhbXNbJ2NvdXJzZV90eXBlJ11cbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBwYXJhbXNbJ3N0YWdlJ11cbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xuICAgICAgIHRoaXMuc3R1ZGVudCA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkW3RoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkLmZpbmRJbmRleCh4ID0+IHguX2lkID09IHRoaXMub2JqX2lkKV07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3R1ZGVudClcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLmNvdXJzZV90eXBlKVxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdyb3VwcyA9IHRoaXMudmFsdWVzW3RoaXMudmFsdWVzLmxlbmd0aCAtIDFdLmdyb3VwcztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMucG9wKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy52YWx1ZXMpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEdyb3VwID0gdGhpcy5zdHVkZW50Wydncm91cCddO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XG5cblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgfVxuXG4gICAgLypcbiAgICAgQ0hBTkdFIEdST1VQIE9GIFVTRVJcbiAgICAgICovXG4gICAgdXBkYXRlR3JvdXAoJGV2ZW50KVxuICAgIHtcbiAgICAgICAgbGV0IGdyb3VwID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuY2hhbmdlR3JvdXAoZ3JvdXAsdGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ncm91cFNlcnZpY2UuZ2V0R3JvdXBzKHRoaXMub2JqX2lkLCB0aGlzLmNvdXJzZV90eXBlLCB0aGlzLnN0YWdlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRHcm91cCA9IGdyb3VwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyb3Vwcyk7XG5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICApXG5cblxuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuXG4gICAgICAgICAgICApXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
>>>>>>> d1fa1eedbea399ac5399c1fa03a123a371822cea
