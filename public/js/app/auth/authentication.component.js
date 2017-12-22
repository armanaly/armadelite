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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_service_1 = require("./auth.service");
let AuthenticationComponent = class AuthenticationComponent {
    constructor(route, authService) {
        this.route = route;
        this.appName = '';
    }
    ngOnInit() {
        console.log(window);
        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
    }
};
AuthenticationComponent = __decorate([
    core_1.Component({
        selector: 'auth',
        template: `
        <div class="panel-body">
                    <!-- Nav tabs -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="auth" class="active"><a href="#signin" aria-controls="signin" role="tab" data-toggle="tab">Login</a></li>
                <li role="auth"><a href="#signup" aria-controls="signup" role="tab" data-toggle="tab">S'inscrire</a></li>
            </ul>
            <div class="tab-content">  
                <div role="tabpanel" class="tab-pane active" id="signin">
                    <app-signin></app-signin>
                </div>
                <div role="tabpanel" class="tab-pane active" id="signup">
                        <app-signup></app-signup>
                </div>
            </div>
        </div>
`
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, auth_service_1.AuthService])
], AuthenticationComponent);
exports.AuthenticationComponent = AuthenticationComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW9FO0FBRXBFLDRDQUF1RDtBQUd2RCxpREFBMkM7QUF1QjNDLElBQWEsdUJBQXVCLEdBQXBDO0lBRUksWUFBb0IsS0FBcUIsRUFBRSxXQUF3QjtRQUEvQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUd6QyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBRmIsQ0FBQztJQUlELFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FHSixDQUFBO0FBZlksdUJBQXVCO0lBdEJuQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JiO0tBRUEsQ0FBQztxQ0FJNkIsdUJBQWMsRUFBZSwwQkFBVztHQUYxRCx1QkFBdUIsQ0FlbkM7QUFmWSwwREFBdUIiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhdXRoJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIE5hdiB0YWJzIC0tPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJuYXYgbmF2LXRhYnNcIiByb2xlPVwidGFibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJhdXRoXCIgY2xhc3M9XCJhY3RpdmVcIj48YSBocmVmPVwiI3NpZ25pblwiIGFyaWEtY29udHJvbHM9XCJzaWduaW5cIiByb2xlPVwidGFiXCIgZGF0YS10b2dnbGU9XCJ0YWJcIj5Mb2dpbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIHJvbGU9XCJhdXRoXCI+PGEgaHJlZj1cIiNzaWdudXBcIiBhcmlhLWNvbnRyb2xzPVwic2lnbnVwXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+UydpbnNjcmlyZTwvYT48L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLWNvbnRlbnRcIj4gIFxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwic2lnbmluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1zaWduaW4+PC9hcHAtc2lnbmluPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJvbGU9XCJ0YWJwYW5lbFwiIGNsYXNzPVwidGFiLXBhbmUgYWN0aXZlXCIgaWQ9XCJzaWdudXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1zaWdudXA+PC9hcHAtc2lnbnVwPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5gXHJcblxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwTmFtZSA9ICcnO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
