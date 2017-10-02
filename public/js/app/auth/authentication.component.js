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
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUQsZUFDckQsQ0FBQyxDQURtRTtBQUVwRSx1QkFBcUMsaUJBQWlCLENBQUMsQ0FBQTtBQXlCdkQ7SUFFSSxpQ0FBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFHekMsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUZiLENBQUM7SUFJRCwwQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBbENMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxxekJBZ0JiO1NBRUEsQ0FBQzs7K0JBQUE7SUFlRiw4QkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksK0JBQXVCLDBCQWFuQyxDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2dyaWQuc2VydmljZVwiO1xuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhdXRoJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIE5hdiB0YWJzIC0tPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cbiAgICAgICAgICAgICAgICA8bGkgcm9sZT1cImF1dGhcIiBjbGFzcz1cImFjdGl2ZVwiPjxhIGhyZWY9XCIjc2lnbmluXCIgYXJpYS1jb250cm9scz1cInNpZ25pblwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPkxvZ2luPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJhdXRoXCI+PGEgaHJlZj1cIiNzaWdudXBcIiBhcmlhLWNvbnRyb2xzPVwic2lnbnVwXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+UydpbnNjcmlyZTwvYT48L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWItY29udGVudFwiPiAgXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwic2lnbmluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhcHAtc2lnbmluPjwvYXBwLXNpZ25pbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJzaWdudXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtc2lnbnVwPjwvYXBwLXNpZ251cD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbmBcblxufSlcblxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgYXBwTmFtZSA9ICcnO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XG5cbiAgICAgICAgdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImFwcFwiXTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
