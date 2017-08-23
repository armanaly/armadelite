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
            selector: 'grid-panel',
            template: "\n        <div class=\"panel-body\">\n                    <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n                <li role=\"auth\" class=\"active\"><a href=\"#signin\" aria-controls=\"signin\" role=\"tab\" data-toggle=\"tab\">Login</a></li>\n                <li role=\"auth\"><a href=\"#signup\" aria-controls=\"signup\" role=\"tab\" data-toggle=\"tab\">S'inscrire</a></li>\n            </ul>\n            <div class=\"tab-content\">  \n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"signin\">\n                    <app-signin></app-signin>\n                </div>\n                <div role=\"tabpanel\" class=\"tab-pane active\" id=\"signup\">\n                        <app-signup></app-signup>\n                </div>\n            </div>\n        </div>\n"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], AuthenticationComponent);
    return AuthenticationComponent;
    var _a;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUVwRSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQXlCdkQ7SUFFSSxpQ0FBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFHekMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUZiLENBQUM7SUFJRCwwQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxxekJBZ0JiO1NBRUEsQ0FBQzs7K0JBQUE7SUFlRiw4QkFBQzs7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLCtCQUF1QiwwQkFhbkMsQ0FBQSIsImZpbGUiOiJhdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE5hdiB0YWJzIC0tPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJhdXRoXCIgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI3NpZ25pblwiIGFyaWEtY29udHJvbHM9XCJzaWduaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Mb2dpbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJhdXRoXCI+PGEgaHJlZj1cIiNzaWdudXBcIiBhcmlhLWNvbnRyb2xzPVwic2lnbnVwXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+UydpbnNjcmlyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1zaWduaW4+PC9hcHAtc2lnbmluPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJzaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1zaWdudXA+PC9hcHAtc2lnbnVwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5gXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFwcE5hbWUgPSAnJztcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xyXG5cclxuICAgICAgICB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
