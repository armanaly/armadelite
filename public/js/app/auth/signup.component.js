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
const core_1 = require('@angular/core');
const forms_1 = require("@angular/forms");
const auth_service_1 = require("./auth.service");
const user_model_1 = require("./user.model");
let SignupComponent = class SignupComponent {
    constructor(_authService) {
        this._authService = _authService;
    }
    onSubmit() {
        console.log(this.myForm);
        const user = new user_model_1.User(this.myForm.value.email, this.myForm.value.password, this.myForm.value.firstName, this.myForm.value.lastName);
        this._authService.signup(user)
            .subscribe(data => console.log(data), error => console.error(error));
        this.myForm.reset();
    }
    ngOnInit() {
        this.myForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(null, forms_1.Validators.required),
            lastName: new forms_1.FormControl(null, forms_1.Validators.required),
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]),
            password: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    }
};
SignupComponent = __decorate([
    core_1.Component({
        selector: 'app-signup',
        template: `
        <div class="col-md-8 col-md-offset-2">
            <form [formGroup]="myForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                    <label for="firstName">Prénom</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        class="form-control"
                        formControlName="firstName">
                </div>
                <div class="form-group">
                    <label for="lastName">Nom</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        class="form-control"
                        formControlName="lastName">
                </div>
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
            <button class="btn btn-primary" (click)="onSubmit()">Envoyer</button>
        </div>
    `
    }), 
    __metadata('design:paramtypes', [auth_service_1.AuthService])
], SignupComponent);
exports.SignupComponent = SignupComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbnVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFDL0Msd0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsNkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBNENsQztJQUdJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUVqRCxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsTUFBTSxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7YUFDekIsU0FBUyxDQUNOLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FDaEMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUN4QixTQUFTLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRTtnQkFDekIsa0JBQVUsQ0FBQyxRQUFRO2dCQUNuQixrQkFBVSxDQUFDLE9BQU8sQ0FBQyx5SkFBeUosQ0FBQyxDQUFDLENBQ2pMO1lBQ0QsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FFdkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUEzRUQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXNDVDtLQUNKLENBQUM7O21CQUFBO0FBQ1csdUJBQWUsa0JBaUMzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybUdyb3VwLCBWYWxpZGF0b3JzLCBGb3JtQ29udHJvbH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtc2lnbnVwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxyXG4gICAgICAgICAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJmaXJzdE5hbWVcIj5QcsOpbm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImxhc3ROYW1lXCI+Tm9tPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJsYXN0TmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPk1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwib25TdWJtaXQoKVwiPkVudm95ZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XHJcblxyXG4gICAgb25TdWJtaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5teUZvcm0pO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBuZXcgVXNlcihcclxuICAgICAgICAgICAgdGhpcy5teUZvcm0udmFsdWUuZW1haWwsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLmxhc3ROYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5zaWdudXAodXNlcilcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIHRoaXMubXlGb3JtLnJlc2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZCksXHJcbiAgICAgICAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1xyXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucGF0dGVybignXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLycpXVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpXHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
