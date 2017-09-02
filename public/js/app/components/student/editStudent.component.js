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
var group_service_1 = require("../group/group.service");
var gridPanel_service_1 = require("../gridPanel.service");
var balletDetails_service_1 = require("../balletDetails.service");
var EditStudentComponent = (function () {
    function EditStudentComponent(router, _gridService, _groupService, _balletDetailsService, route, _http) {
        this.router = router;
        this._gridService = _gridService;
        this._groupService = _groupService;
        this._balletDetailsService = _balletDetailsService;
        this.route = route;
        this._http = _http;
        this.display = false;
        this.groups = [];
        this.student = {};
        this.currentGroup = '';
    }
    EditStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.obj_id = params['record'];
        });
        console.log(this.obj_id);
        console.log(this._gridService.dataGrid);
        this._balletDetailsService.getDatas(this.obj_id)
            .subscribe(function (data) {
            console.log(data);
            _this.student_info = data;
            _this.display = true;
        }, function (error) { return console.log(error); });
    };
    EditStudentComponent = __decorate([
        core_1.Component({
            selector: 'group',
            template: "\n     <div class=\"panel-body\">\n            <form name=\"student\"  >\n                <div [formGroup]=\"myGroup\">   \n                    <label >{{field.label}} </label>\n                                 <input *ngIf=\"i == 0\"     \n                                        myAutofocus\n                                        class=\"form-control\" \n                                        type=\"{{field.type}}\" \n                                        id=\"{{field.name}}\"\n                                        name=\"{{field.name}}\"\n                                        required=\"{{field.required}}\"\n                                        minlength=\"{{field.minlength}}\"\n                                        maxlength=\"{{field.maxlength}}\"\n                                        formControlName=\"{{field.name}}\"\n                                        [formControl]=\"myGroup.controls[field.name]\"\n                                       \n                                        >\n                <button type=\"button\"  data-target=\"#myModal\" (click)=\"onClick()\" class=\"btn btn-primary\">Valider</button>\n                </div>\n            \n         </form>\n      </div>\n      <!--<nav class=\"form-navArrow\" *ngIf=\"display\">\n            <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': course_type, 'master_val': stage}\">\n                <button><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button>\n            </a>\n      </nav>\n\n    \n    <div  *ngIf=\"display\"> \nOK\n   </div>!-->"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, (typeof (_b = typeof group_service_1.GroupService !== 'undefined' && group_service_1.GroupService) === 'function' && _b) || Object, (typeof (_c = typeof balletDetails_service_1.BalletDetailsService !== 'undefined' && balletDetails_service_1.BalletDetailsService) === 'function' && _c) || Object, (typeof (_d = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _d) || Object, (typeof (_e = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _e) || Object])
    ], EditStudentComponent);
    return EditStudentComponent;
    var _a, _b, _c, _d, _e;
}());
exports.EditStudentComponent = EditStudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3R1ZGVudC9lZGl0U3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUNuQyw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUVwRCxrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxzQ0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQXNDOUQ7SUFHSSw4QkFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQVcscUJBQTJDLEVBQ2xGLEtBQXFCLEVBQVUsS0FBVztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUNsRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFPOUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBWDhDLENBQUM7SUFhakUsdUNBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWpCRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXpCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBR3hCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBM0VMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSx3aURBZ0NBO1NBQ2IsQ0FBQzs7NEJBQUE7SUEyQ0YsMkJBQUM7O0FBQUQsQ0F6Q0EsQUF5Q0MsSUFBQTtBQXpDWSw0QkFBb0IsdUJBeUNoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3R1ZGVudC9lZGl0U3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbi8vIGltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuLi9ncm91cC9ncm91cC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Zm9yRWFjaH0gZnJvbSBcIi4uLy4uLy4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuLi9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyb3VwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInN0dWRlbnRcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj4gICBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgPnt7ZmllbGQubGFiZWx9fSA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpID09IDBcIiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUF1dG9mb2N1c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2ZpZWxkLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkLm5hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tmaWVsZC5uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJ7e2ZpZWxkLnJlcXVpcmVkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlubGVuZ3RoPVwie3tmaWVsZC5taW5sZW5ndGh9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkLm1heGxlbmd0aH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInt7ZmllbGQubmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJteUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAgZGF0YS10YXJnZXQ9XCIjbXlNb2RhbFwiIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlZhbGlkZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLTxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGNvdXJzZV90eXBlLCAnbWFzdGVyX3ZhbCc6IHN0YWdlfVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgIDwvbmF2PlxyXG5cclxuICAgIFxyXG4gICAgPGRpdiAgKm5nSWY9XCJkaXNwbGF5XCI+IFxyXG5PS1xyXG4gICA8L2Rpdj4hLS0+YFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50Q29tcG9uZW50IHtcclxuXHJcbiAgICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZSA6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG5cclxuICAgIG9ial9pZDtcclxuICAgIHZhbHVlcztcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIGdyb3VwcyA9IFtdO1xyXG4gICAgc3R1ZGVudCA9IHt9O1xyXG4gICAgc3R1ZGVudF9pbmZvO1xyXG4gICAgY3VycmVudEdyb3VwID0gJyc7XHJcblxyXG4gICAgbmdPbkluaXQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub2JqX2lkID0gcGFyYW1zWydyZWNvcmQnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ial9pZClcclxuICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcclxuICAgICAgIC8vdGhpcy5zdHVkZW50ID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWRbdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQuZmluZEluZGV4KHggPT4geC5faWQgPT0gdGhpcy5vYmpfaWQpXTtcclxuICAgICAgICB0aGlzLl9iYWxsZXREZXRhaWxzU2VydmljZS5nZXREYXRhcyh0aGlzLm9ial9pZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3R1ZGVudF9pbmZvID0gZGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
