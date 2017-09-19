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
var AuthenticationComponent = (function () {
    function AuthenticationComponent(route) {
        this.route = route;
        this.appName = '';
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
        console.log(window);
        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'auth',
            template: "\n        <div class=\"panel-body\">\n                    <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"auth\" class=\"active\"><a href=\"#signin\" aria-controls=\"signin\" role=\"tab\" data-toggle=\"tab\">Login</a></li>\n                <li role=\"auth\"><a href=\"#signup\" aria-controls=\"signup\" role=\"tab\" data-toggle=\"tab\">S'inscrire</a></li>\n            </ul>\n            <div class=\"tab-content\">  \n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"signin\">\n                    <app-signin></app-signin>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"signup\">\n                        <app-signup></app-signup>\n                </div>\n            </div>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], AuthenticationComponent);
    return AuthenticationComponent;
    var _a;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUVwRSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQXlCdkQ7SUFFSSxpQ0FBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFHekMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUZiLENBQUM7SUFJRCwwQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxxekJBZ0JiO1NBRUEsQ0FBQzs7K0JBQUE7SUFlRiw4QkFBQzs7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLCtCQUF1QiwwQkFhbkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkLnNlcnZpY2VcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXV0aCcsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSBOYXYgdGFicyAtLT5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdiBuYXYtdGFic1wiIHJvbGU9XCJ0YWJsaXN0XCI+XG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJhdXRoXCIgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI3NpZ25pblwiIGFyaWEtY29udHJvbHM9XCJzaWduaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Mb2dpbjwvYT48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSByb2xlPVwiYXV0aFwiPjxhIGhyZWY9XCIjc2lnbnVwXCIgYXJpYS1jb250cm9scz1cInNpZ251cFwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlMnaW5zY3JpcmU8L2E+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj4gIFxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cInNpZ25pblwiPlxuICAgICAgICAgICAgICAgICAgICA8YXBwLXNpZ25pbj48L2FwcC1zaWduaW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwic2lnbnVwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXNpZ251cD48L2FwcC1zaWdudXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5gXG5cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIGFwcE5hbWUgPSAnJztcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xuXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
