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
        this.response = {};
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
            <button class="btn btn-primary" (click)="onSubmit()">Envoyer</button>
        </div>
    `
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router, router_1.ActivatedRoute])
], SigninComponent);
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUErQztBQUMvQywwQ0FBa0U7QUFDbEUsaURBQTJDO0FBQzNDLDZDQUFrQztBQUNsQyw0Q0FBaUU7QUE0QmpFLElBQWEsZUFBZSxHQUE1QjtJQUdJLFlBQW9CLFlBQXlCLEVBQVUsTUFBYyxFQUFTLEtBQXFCO1FBQS9FLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRG5HLGFBQVEsR0FBRyxFQUFFLENBQUE7SUFDeUYsQ0FBQztJQUd2RyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsTUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBSSxDQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2FBQ2hDLFNBQVMsQ0FDTixJQUFJLENBQUMsRUFBRTtZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRCxZQUFZLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xELFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEQsQ0FBQztRQUdELENBQUMsRUFFTCxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQ2hDLENBQUM7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFHakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUN4QixTQUFTLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRTtnQkFDekIsa0JBQVUsQ0FBQyxRQUFRO2dCQUNuQixrQkFBVSxDQUFDLE9BQU8sQ0FBQyx5SkFBeUosQ0FBQzthQUFDLENBQ2pMO1lBQ0QsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FFdkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUE7QUFyRFksZUFBZTtJQTNCM0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F1QlQ7S0FDSixDQUFDO3FDQUlvQywwQkFBVyxFQUFrQixlQUFNLEVBQWdCLHVCQUFjO0dBSDFGLGVBQWUsQ0FxRDNCO0FBckRZLDBDQUFlIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2FwcC1zaWduaW4nLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtOCBjb2wtbWQtb2Zmc2V0LTJcIj5cbiAgICAgICAgICAgIDxmb3JtIFtmb3JtR3JvdXBdPVwibXlGb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZW1haWxcIj5NYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiIHJvbGU9XCJhbGVydFwiICpuZ0lmPVwiIXRoaXMucmVzcG9uc2UubG9nZ2VkXCI+e3t0aGlzLnJlc3BvbnNlLm1lc3NhZ2V9fTwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiIChjbGljayk9XCJvblN1Ym1pdCgpXCI+RW52b3llcjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25pbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgbXlGb3JtOiBGb3JtR3JvdXA7XG4gICAgcmVzcG9uc2UgPSB7fVxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge31cbiAgICBhcHBOYW1lO1xuICAgIHByaXZhdGUgc3ViOiBhbnk7XG4gICAgb25TdWJtaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubXlGb3JtKTtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBuZXcgVXNlcihcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmVtYWlsLFxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUucGFzc3dvcmQsXG4gICAgICAgICAgICB0aGlzLmFwcE5hbWVcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2Uuc2lnbmluKGNyZWRlbnRpYWxzKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEudG9rZW4uJGJpbmFyeSk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySWQnLCBkYXRhLnVzZXJfaWQuJG9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhcHAnLCB0aGlzLmFwcE5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5sb2dnZWQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL21lbnUnLCB0aGlzLmFwcE5hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuICAgICAgICB0aGlzLm15Rm9ybS5yZXNldCgpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHBOYW1lID0gcGFyYW1zWydhcHAnXTsgLy8gKCspIGNvbnZlcnRzIHN0cmluZyAnaWQnIHRvIGEgbnVtYmVyXG5cbiAgICAgICAgICAgIC8vIEluIGEgcmVhbCBhcHA6IGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIHRoZSBkZXRhaWxzIGhlcmUuXG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpXG4gICAgICAgIHRoaXMubXlGb3JtID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgICAgICBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXG4gICAgICAgICAgICBlbWFpbDogbmV3IEZvcm1Db250cm9sKG51bGwsIFtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybignXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLycpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZClcblxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
