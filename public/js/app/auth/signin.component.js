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
        const credentials = new user_model_1.User(this.myForm.value.email, this.myForm.value.password, this.appName);
        this._authService.signin(credentials)
            .subscribe(data => {
            console.log(data);
            this.response = data;
            localStorage.setItem('token', data.token.$binary);
            localStorage.setItem('userId', data.user_id.$oid);
            localStorage.setItem('app', this.appName);
            if (data.logged) {
                this.router.navigate(['/menu', this.appName]);
            }
        }, error => console.error(error));
        this.myForm.reset();
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.appName = params['app'];
        });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUErQztBQUMvQywwQ0FBa0U7QUFDbEUsaURBQTJDO0FBQzNDLDZDQUFrQztBQUNsQyw0Q0FBaUU7QUFpQ2pFLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLFlBQXlCLEVBQVUsTUFBYyxFQUFTLEtBQXFCO1FBQS9FLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRG5HLGFBQVEsR0FBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQTtJQUMyRSxDQUFDO0lBR3ZHLFFBQVE7UUFFSixNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFJLENBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQixJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDaEMsU0FBUyxDQUNOLElBQUksQ0FBQyxFQUFFO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUViLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFHRCxDQUFDLEVBRUwsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUNoQyxDQUFDO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDeEIsU0FBUyxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckQsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEQsS0FBSyxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLGtCQUFVLENBQUMsUUFBUTtnQkFDbkIsa0JBQVUsQ0FBQyxPQUFPLENBQUMseUpBQXlKLENBQUM7YUFBQyxDQUNqTDtZQUNELFFBQVEsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBRXZELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBcERZLGVBQWU7SUFoQzNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0QlQ7S0FDSixDQUFDO3FDQUlvQywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLHVCQUFjO0dBSDFGLGVBQWUsQ0FvRDNCO0FBcERZLDBDQUFlIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWduaW4nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTggY29sLW1kLW9mZnNldC0yXCI+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCIgKm5nSWY9XCJ0aGlzLmFwcE5hbWUgPT0gJ2JhbGxldCdcIiA+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJpbWctdGh1bWJuYWlsXCIgIHNyYz1cImh0dHA6Ly9yZXMuY2xvdWRpbmFyeS5jb20vaHRhbW1sM2Z2L2ltYWdlL3VwbG9hZC92MTUwNTM5NDU0My9iYWxsZXRMb2dvX3BkbzgwdS5qcGdcIiB3aWR0aD1cIjI0MFwiIGhlaWdodD1cIjE2MFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPk1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIiByb2xlPVwiYWxlcnRcIiAqbmdJZj1cIiF0aGlzLnJlc3BvbnNlLmxvZ2dlZFwiPnt7dGhpcy5yZXNwb25zZS5tZXNzYWdlfX08L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U0VORDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIG15Rm9ybTogRm9ybUdyb3VwO1xyXG4gICAgcmVzcG9uc2UgPSB7XCJsb2dnZWRcIjogdHJ1ZX1cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cclxuICAgIGFwcE5hbWU7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gbmV3IFVzZXIoXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5wYXNzd29yZCxcclxuICAgICAgICAgICAgdGhpcy5hcHBOYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWduaW4oY3JlZGVudGlhbHMpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4uJGJpbmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcl9pZC4kb2lkKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBwJywgdGhpcy5hcHBOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tZW51JywgdGhpcy5hcHBOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hcHBOYW1lID0gcGFyYW1zWydhcHAnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXHJcblxyXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgYXBwOiBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCB0aGUgZGV0YWlscyBoZXJlLlxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSlcclxuICAgICAgICB0aGlzLm15Rm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICAgICAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgbGFzdE5hbWU6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcclxuICAgICAgICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXHJcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCdeKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvJyldXHJcbiAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZClcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
