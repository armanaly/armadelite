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
            template: "\n    \n\n\n    \n    <div  *ngIf=\"display\"> \n        <div class=\"panel-header\" align=\"center\">\n       <nav class=\"form-navArrow\" *ngIf=\"display\">\n            <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': studentGroup.course_type, 'master_val': studentGroup.stage}\">\n            <button><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n       </nav>\n    \n      \n          <h1>{{student_info.profile[1].firstname}}  {{student_info.profile[0].nom}}</h1>\n          <!--<h2>{{student_info.age}} years old</h2>-->\n       </div>  \n     </div>\n        <div class=\"panel-body\">\n            <form name=\"studentGroup\"  >\n                <div [formGroup]=\"myGroup\">   \n                    <div>\n                        <label >ssDNI</label>\n                         <input \n                            class=\"form-control\"\n                            type=\"text\"\n                            id=\"DNI\"\n                            name=\"DNI\"\n                            value=\"{{student_info.DNI}}\"\n                            formControlName=\"DNI\"\n                            [formControl]=\"studentGroup.controls[DNI]\"\n                         >\n                    </div>\n                        <button type=\"button\"  data-target=\"#myModal\" (click)=\"onClick()\" class=\"btn btn-primary\">Valider</button>\n                </div>\n            \n         </form>    \n                    \n                    <!---->\n                    <!--<div>-->\n                        <!--<label>BECA</label>-->\n                         <!--<input -->\n                            <!--class=\"form-control\"-->\n                            <!--type=\"text\"-->\n                            <!--id=\"BECA\"-->\n                            <!--name=\"BECA\"-->\n                            <!--formControlName=\"BECA\"-->\n                            <!--value=\"{{student_info.BECA}}\"-->\n                            <!--[formControl]=\"studentGroup.controls['BECA']\"-->\n                            <!---->\n                         <!--&gt;-->\n                    <!--</div>-->\n                    <!--<div>-->\n                        <!--<label >Father</label>-->\n                         <!--<input -->\n                            <!--class=\"form-control\"-->\n                            <!--type=\"text\"-->\n                            <!--id=\"father\"-->\n                            <!--name=\"father\"-->\n                            <!--formControlName=\"father\"-->\n                            <!--value=\"{{student_info.father}}\"-->\n                            <!--[formControl]=\"studentGroup.controls['father']\"-->\n                         <!--&gt;-->\n                    <!--</div>-->\n                    <!--<div>-->\n                        <!--<label>Intolerence</label>-->\n                         <!--<input -->\n                            <!--class=\"form-control\"-->\n                            <!--type=\"text\"-->\n                            <!--id=\"intolerencia\"-->\n                            <!--name=\"intolerencia\"-->\n                            <!--formControlName=\"intolerencia\"-->\n                            <!--value=\"{{student_info.intolerencia}}\"-->\n                            <!--[formControl]=\"studentGroup.controls['intolerencia']\"-->\n                         <!--&gt;-->\n                    <!--</div>-->\n                                        <!---->\n        \n      </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, group_service_1.GroupService, balletDetails_service_1.BalletDetailsService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], EditStudentComponent);
    return EditStudentComponent;
    var _a, _b, _c;
}());
exports.EditStudentComponent = EditStudentComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc3R1ZGVudC9lZGl0U3R1ZGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLHVCQUF1RCxpQkFBaUIsQ0FBQyxDQUFBO0FBRXpFLHFCQUFtQixlQUFlLENBQUMsQ0FBQTtBQUNuQyw4QkFBMkIsd0JBQXdCLENBQUMsQ0FBQTtBQUVwRCxrQ0FBK0Isc0JBQXNCLENBQUMsQ0FBQTtBQUN0RCxzQ0FBbUMsMEJBQTBCLENBQUMsQ0FBQTtBQW9GOUQ7SUFFSSw4QkFDb0IsTUFBYyxFQUFVLFlBQStCLEVBQ3RELGFBQTJCLEVBQVcscUJBQTJDLEVBQ2xGLEtBQXFCLEVBQVUsS0FBVztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQW1CO1FBQ3RELGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQVcsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUFzQjtRQUNsRixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUFVLFVBQUssR0FBTCxLQUFLLENBQU07UUFNOUQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osWUFBTyxHQUFHLEVBQUUsQ0FBQztRQUViLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBVjhDLENBQUM7SUFZakUsdUNBQVEsR0FBUjtRQUFBLGlCQTBCQztRQXhCRyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQzNDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ2pCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBRXpCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBVXhCLENBQUMsRUFDRCxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBN0hMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSw4OEdBNkVEO1NBQ1osQ0FBQzs7NEJBQUE7SUFnREYsMkJBQUM7O0FBQUQsQ0E5Q0EsQUE4Q0MsSUFBQTtBQTlDWSw0QkFBb0IsdUJBOENoQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc3R1ZGVudC9lZGl0U3R1ZGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuLy8gaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi4vZ3JvdXAvZ3JvdXAuc2VydmljZVwiO1xuaW1wb3J0IHtmb3JFYWNofSBmcm9tIFwiLi4vLi4vLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi4vYmFsbGV0RGV0YWlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXB9IGZyb20gXCIuLi8uLi8uLi8uLi9wdWJsaWMvanMvdmVuZG9yL0Bhbmd1bGFyL2Zvcm1zL3NyYy9tb2RlbFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncm91cCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICBcblxuXG4gICAgXG4gICAgPGRpdiAgKm5nSWY9XCJkaXNwbGF5XCI+IFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiICpuZ0lmPVwiZGlzcGxheVwiPlxuICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogc3R1ZGVudEdyb3VwLmNvdXJzZV90eXBlLCAnbWFzdGVyX3ZhbCc6IHN0dWRlbnRHcm91cC5zdGFnZX1cIj5cbiAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPkJBQ0s8L2J1dHRvbj48L2E+XG4gICAgICAgPC9uYXY+XG4gICAgXG4gICAgICBcbiAgICAgICAgICA8aDE+e3tzdHVkZW50X2luZm8ucHJvZmlsZVsxXS5maXJzdG5hbWV9fSAge3tzdHVkZW50X2luZm8ucHJvZmlsZVswXS5ub219fTwvaDE+XG4gICAgICAgICAgPCEtLTxoMj57e3N0dWRlbnRfaW5mby5hZ2V9fSB5ZWFycyBvbGQ8L2gyPi0tPlxuICAgICAgIDwvZGl2PiAgXG4gICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgPGZvcm0gbmFtZT1cInN0dWRlbnRHcm91cFwiICA+XG4gICAgICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cIm15R3JvdXBcIj4gICBcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCA+c3NETkk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiRE5JXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiRE5JXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7c3R1ZGVudF9pbmZvLkROSX19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJETklcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtQ29udHJvbF09XCJzdHVkZW50R3JvdXAuY29udHJvbHNbRE5JXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiICBkYXRhLXRhcmdldD1cIiNteU1vZGFsXCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+VmFsaWRlcjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICA8L2Zvcm0+ICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPCEtLS0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWw+QkVDQTwvbGFiZWw+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwidGV4dFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwiQkVDQVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJCRUNBXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tZm9ybUNvbnRyb2xOYW1lPVwiQkVDQVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXZhbHVlPVwie3tzdHVkZW50X2luZm8uQkVDQX19XCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tW2Zvcm1Db250cm9sXT1cInN0dWRlbnRHcm91cC5jb250cm9sc1snQkVDQSddXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZndDstLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWwgPkZhdGhlcjwvbGFiZWw+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwidGV4dFwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwiZmF0aGVyXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cImZhdGhlclwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWZvcm1Db250cm9sTmFtZT1cImZhdGhlclwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXZhbHVlPVwie3tzdHVkZW50X2luZm8uZmF0aGVyfX1cIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1bZm9ybUNvbnRyb2xdPVwic3R1ZGVudEdyb3VwLmNvbnRyb2xzWydmYXRoZXInXVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZndDstLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08bGFiZWw+SW50b2xlcmVuY2U8L2xhYmVsPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWNsYXNzPVwiZm9ybS1jb250cm9sXCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cInRleHRcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1pZD1cImludG9sZXJlbmNpYVwiLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJpbnRvbGVyZW5jaWFcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1mb3JtQ29udHJvbE5hbWU9XCJpbnRvbGVyZW5jaWFcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS12YWx1ZT1cInt7c3R1ZGVudF9pbmZvLmludG9sZXJlbmNpYX19XCItLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tW2Zvcm1Db250cm9sXT1cInN0dWRlbnRHcm91cC5jb250cm9sc1snaW50b2xlcmVuY2lhJ11cIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mZ3Q7LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tLS0+XG4gICAgICAgIFxuICAgICAgPC9kaXY+YFxufSlcblxuZXhwb3J0IGNsYXNzIEVkaXRTdHVkZW50Q29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlIDogR3JpZFBhbmVsU2VydmljZSxcbiAgICAgICAgICAgICAgICAgcHJpdmF0ZSBfZ3JvdXBTZXJ2aWNlOiBHcm91cFNlcnZpY2UsICBwcml2YXRlIF9iYWxsZXREZXRhaWxzU2VydmljZTogQmFsbGV0RGV0YWlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cblxuICAgIHByaXZhdGUgc3ViOiBhbnk7XG5cbiAgICBvYmpfaWQ7XG4gICAgdmFsdWVzO1xuICAgIGRpc3BsYXkgPSBmYWxzZTtcbiAgICBncm91cHMgPSBbXTtcbiAgICBzdHVkZW50ID0ge307XG4gICAgc3R1ZGVudF9pbmZvO1xuICAgIGN1cnJlbnRHcm91cCA9ICcnO1xuICAgIHN0dWRlbnRHcm91cDtcbiAgICBuZ09uSW5pdCgpXG4gICAge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5vYmpfaWQgPSBwYXJhbXNbJ3JlY29yZCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcbiAgICAgICAgfSk7XG4gICAgICAgY29uc29sZS5sb2codGhpcy5vYmpfaWQpXG4gICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xuICAgICAgIC8vdGhpcy5zdHVkZW50ID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWRbdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQuZmluZEluZGV4KHggPT4geC5faWQgPT0gdGhpcy5vYmpfaWQpXTtcbiAgICAgICAgdGhpcy5fYmFsbGV0RGV0YWlsc1NlcnZpY2UuZ2V0RGF0YXModGhpcy5vYmpfaWQpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0dWRlbnRfaW5mbyA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zdHVkZW50R3JvdXAgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIEROSTogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBCRUNBOiBuZXcgRm9ybUNvbnRyb2woKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGZhdGhlcjogbmV3IEZvcm1Db250cm9sKCksXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpbnRvbGVyZW5jaWE6IG5ldyBGb3JtQ29udHJvbCgpXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
