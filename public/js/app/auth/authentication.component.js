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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQW9FO0FBRXBFLDRDQUF1RDtBQUd2RCxpREFBMkM7QUF1QjNDLElBQWEsdUJBQXVCLEdBQXBDO0lBRUksWUFBb0IsS0FBcUIsRUFBRSxXQUF3QjtRQUEvQyxVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUd6QyxZQUFPLEdBQUcsRUFBRSxDQUFDO0lBRmIsQ0FBQztJQUlELFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXBCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FHSixDQUFBO0FBZlksdUJBQXVCO0lBdEJuQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0NBZ0JiO0tBRUEsQ0FBQztxQ0FJNkIsdUJBQWMsRUFBZSwwQkFBVztHQUYxRCx1QkFBdUIsQ0FlbkM7QUFmWSwwREFBdUIiLCJmaWxlIjoiYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2FkbWluL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXV0aCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBOYXYgdGFicyAtLT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwibmF2IG5hdi10YWJzXCIgcm9sZT1cInRhYmxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxsaSByb2xlPVwiYXV0aFwiIGNsYXNzPVwiYWN0aXZlXCI+PGEgaHJlZj1cIiNzaWduaW5cIiBhcmlhLWNvbnRyb2xzPVwic2lnbmluXCIgcm9sZT1cInRhYlwiIGRhdGEtdG9nZ2xlPVwidGFiXCI+TG9naW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSByb2xlPVwiYXV0aFwiPjxhIGhyZWY9XCIjc2lnbnVwXCIgYXJpYS1jb250cm9scz1cInNpZ251cFwiIHJvbGU9XCJ0YWJcIiBkYXRhLXRvZ2dsZT1cInRhYlwiPlMnaW5zY3JpcmU8L2E+PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+ICBcclxuICAgICAgICAgICAgICAgIDxkaXYgcm9sZT1cInRhYnBhbmVsXCIgY2xhc3M9XCJ0YWItcGFuZSBhY3RpdmVcIiBpZD1cInNpZ25pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtc2lnbmluPjwvYXBwLXNpZ25pbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiByb2xlPVwidGFicGFuZWxcIiBjbGFzcz1cInRhYi1wYW5lIGFjdGl2ZVwiIGlkPVwic2lnbnVwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtc2lnbnVwPjwvYXBwLXNpZ251cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuYFxyXG5cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGFwcE5hbWUgPSAnJztcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xyXG5cclxuICAgICAgICB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
