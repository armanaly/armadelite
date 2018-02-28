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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUErQztBQUMvQywwQ0FBa0U7QUFDbEUsaURBQTJDO0FBQzNDLDZDQUFrQztBQUNsQyw0Q0FBaUU7QUFpQ2pFLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLFlBQXlCLEVBQVUsTUFBYyxFQUFTLEtBQXFCO1FBQS9FLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRG5HLGFBQVEsR0FBRyxFQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBQTtJQUMyRSxDQUFDO0lBR3ZHLFFBQVE7UUFFSixNQUFNLFdBQVcsR0FBRyxJQUFJLGlCQUFJLENBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUMxQixJQUFJLENBQUMsT0FBTyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDaEMsU0FBUyxDQUNOLElBQUksQ0FBQyxFQUFFO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUViLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xELENBQUM7UUFHRCxDQUFDLEVBRUwsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUNoQyxDQUFDO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzVDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBR2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGlCQUFTLENBQUM7WUFDeEIsU0FBUyxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDckQsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7WUFDcEQsS0FBSyxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUU7Z0JBQ3pCLGtCQUFVLENBQUMsUUFBUTtnQkFDbkIsa0JBQVUsQ0FBQyxPQUFPLENBQUMseUpBQXlKLENBQUM7YUFBQyxDQUNqTDtZQUNELFFBQVEsRUFBRSxJQUFJLG1CQUFXLENBQUMsSUFBSSxFQUFFLGtCQUFVLENBQUMsUUFBUSxDQUFDO1NBRXZELENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBcERZLGVBQWU7SUFoQzNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E0QlQ7S0FDSixDQUFDO3FDQUlvQywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLHVCQUFjO0dBSDFGLGVBQWUsQ0FvRDNCO0FBcERZLDBDQUFlIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWduaW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiICpuZ0lmPVwidGhpcy5hcHBOYW1lID09ICdiYWxsZXQnXCIgPiAgICBcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImltZy10aHVtYm5haWxcIiAgc3JjPVwiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9odGFtbWwzZnYvaW1hZ2UvdXBsb2FkL3YxNTA1Mzk0NTQzL2JhbGxldExvZ29fcGRvODB1LmpwZ1wiIHdpZHRoPVwiMjQwXCIgaGVpZ2h0PVwiMTYwXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiIXRoaXMucmVzcG9uc2UubG9nZ2VkXCI+e3t0aGlzLnJlc3BvbnNlLm1lc3NhZ2V9fTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+U0VORDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG4gICAgcmVzcG9uc2UgPSB7XCJsb2dnZWRcIjogdHJ1ZX1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIscHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpIHt9XG4gICAgYXBwTmFtZTtcbiAgICBwcml2YXRlIHN1YjogYW55O1xuICAgIG9uU3VibWl0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybSk7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gbmV3IFVzZXIoXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkLFxuICAgICAgICAgICAgdGhpcy5hcHBOYW1lXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25pbihjcmVkZW50aWFscylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuLiRiaW5hcnkpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcklkJywgZGF0YS51c2VyX2lkLiRvaWQpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYXBwJywgdGhpcy5hcHBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEubG9nZ2VkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9tZW51JywgdGhpcy5hcHBOYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5teUZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwTmFtZSA9IHBhcmFtc1snYXBwJ107IC8vICgrKSBjb252ZXJ0cyBzdHJpbmcgJ2lkJyB0byBhIG51bWJlclxuXG4gICAgICAgICAgICAvLyBJbiBhIHJlYWwgYXBwOiBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCB0aGUgZGV0YWlscyBoZXJlLlxuICAgICAgICB9KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hcHBOYW1lKVxuICAgICAgICB0aGlzLm15Rm9ybSA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICAgICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAgICAgICBsYXN0TmFtZTogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAgICAgZW1haWw6IG5ldyBGb3JtQ29udHJvbChudWxsLCBbXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnBhdHRlcm4oJ14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC8nKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpXG5cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
