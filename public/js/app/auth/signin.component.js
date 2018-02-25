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
const forms_1 = require("@angular/forms");
const auth_service_1 = require("./auth.service");
const user_model_1 = require("./user.model");
const router_1 = require("@angular/router");
let SigninComponent = class SigninComponent {
    constructor(_authService, router, route) {
        this._authService = _authService;
        this.router = router;
        this.route = route;
        this.response = { "logged": true };
    }
    onSubmit() {
        console.log(this.myForm);
        const credentials = new user_model_1.User(this.myForm.value.email, this.myForm.value.password, this.appName);
        this._authService.signin(credentials)
            .subscribe(data => {
            console.log(data);
            this.response = data;
            localStorage.setItem('token', data.token.$binary);
            localStorage.setItem('userId', data.user_id.$oid);
            localStorage.setItem('app', this.appName);
            if (data.logged) {
                console.log(this.response);
                this.router.navigate(['/menu', this.appName]);
            }
        }, error => console.error(error));
        this.myForm.reset();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.appName = params['app'];
        });
        console.log(this.appName);
        this.myForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(null, forms_1.Validators.required),
            lastName: new forms_1.FormControl(null, forms_1.Validators.required),
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
            ]),
            password: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
};
SigninComponent = __decorate([
    core_1.Component({
        selector: 'app-signin',
        template: `
        <div class="col-md-8 col-md-offset-2">
             <div class="row">
                <div align="center" *ngIf="this.appName == 'ballet'" >    
                    <img class="img-thumbnail"  src="http://res.cloudinary.com/htamml3fv/image/upload/v1505394543/balletLogo_pdo80u.jpg" width="240" height="160">
                </div>
            </div>
            <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="email">Mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="form-control"
                        formControlName="email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        class="form-control"
                        formControlName="password">
                </div>
            </form>
            <div class="alert alert-danger" role="alert" *ngIf="!this.response.logged">{{this.response.message}}</div>
            <button class="btn btn-primary" (click)="onSubmit()">SEND</button>
        </div>
    `
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, router_1.ActivatedRoute])
], SigninComponent);
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUErQztBQUMvQywwQ0FBa0U7QUFDbEUsaURBQTJDO0FBQzNDLDZDQUFrQztBQUNsQyw0Q0FBaUU7QUFpQ2pFLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLFlBQXlCLEVBQVUsTUFBYyxFQUFTLEtBQXFCO1FBQS9FLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRG5HLGFBQVEsR0FBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQTtJQUMyRSxDQUFDO0lBR3ZHLFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFJLENBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQixJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDaEMsU0FBUyxDQUNOLElBQUksQ0FBQyxFQUFFO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBR0QsQ0FBQyxFQUVMLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FDaEMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUdqQyxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxpQkFBUyxDQUFDO1lBQ3hCLFNBQVMsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3JELFFBQVEsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1lBQ3BELEtBQUssRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFO2dCQUN6QixrQkFBVSxDQUFDLFFBQVE7Z0JBQ25CLGtCQUFVLENBQUMsT0FBTyxDQUFDLHlKQUF5SixDQUFDO2FBQUMsQ0FDakw7WUFDRCxRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztTQUV2RCxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQXJEWSxlQUFlO0lBaEMzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJUO0tBQ0osQ0FBQztxQ0FJb0MsMEJBQVcsRUFBa0IsZUFBTSxFQUFnQix1QkFBYztHQUgxRixlQUFlLENBcUQzQjtBQXJEWSwwQ0FBZSIsImZpbGUiOiJhdXRoL3NpZ25pbi5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtGb3JtR3JvdXAsIFZhbGlkYXRvcnMsIEZvcm1Db250cm9sfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtTWFwfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdhcHAtc2lnbmluJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgYWxpZ249XCJjZW50ZXJcIiAqbmdJZj1cInRoaXMuYXBwTmFtZSA9PSAnYmFsbGV0J1wiID4gICAgXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaHRhbW1sM2Z2L2ltYWdlL3VwbG9hZC92MTUwNTM5NDU0My9iYWxsZXRMb2dvX3BkbzgwdS5qcGdcIiB3aWR0aD1cIjI0MFwiIGhlaWdodD1cIjE2MFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVtYWlsXCI+TWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZW1haWxcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cIiF0aGlzLnJlc3BvbnNlLmxvZ2dlZFwiPnt7dGhpcy5yZXNwb25zZS5tZXNzYWdlfX08L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPlNFTkQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBTaWduaW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIG15Rm9ybTogRm9ybUdyb3VwO1xuICAgIHJlc3BvbnNlID0ge1wibG9nZ2VkXCI6IHRydWV9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7fVxuICAgIGFwcE5hbWU7XG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcbiAgICBvblN1Ym1pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xuICAgICAgICBjb25zdCBjcmVkZW50aWFscyA9IG5ldyBVc2VyKFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZW1haWwsXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCxcbiAgICAgICAgICAgIHRoaXMuYXBwTmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4oY3JlZGVudGlhbHMpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS50b2tlbi4kYmluYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcl9pZC4kb2lkKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcCcsIHRoaXMuYXBwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbWVudScsIHRoaXMuYXBwTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICk7XG4gICAgICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XG4gICAgICAgICAgICB0aGlzLmFwcE5hbWUgPSBwYXJhbXNbJ2FwcCddOyAvLyAoKykgY29udmVydHMgc3RyaW5nICdpZCcgdG8gYSBudW1iZXJcblxuICAgICAgICAgICAgLy8gSW4gYSByZWFsIGFwcDogZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgdGhlIGRldGFpbHMgaGVyZS5cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSlcbiAgICAgICAgdGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAgICAgbGFzdE5hbWU6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCdeKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvJyldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
