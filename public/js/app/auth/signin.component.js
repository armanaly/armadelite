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
var forms_1 = require("@angular/forms");
var auth_service_1 = require("./auth.service");
var user_model_1 = require("./user.model");
var router_1 = require("@angular/router");
var SigninComponent = (function () {
    function SigninComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.response = {};
    }
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.myForm);
        var credentials = new user_model_1.User(this.myForm.value.email, this.myForm.value.password);
        this._authService.signin(credentials)
            .subscribe(function (data) {
            console.log(data);
            _this.response = data;
            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.user_id);
            if (data.logged) {
                _this._router.navigateByUrl('/menu');
            }
            console.log(_this.response);
        }, function (error) { return console.error(error); });
        this.myForm.reset();
    };
    SigninComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(null, forms_1.Validators.required),
            lastName: new forms_1.FormControl(null, forms_1.Validators.required),
            email: new forms_1.FormControl(null, [
                forms_1.Validators.required,
                forms_1.Validators.pattern('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')]),
            password: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'app-signin',
            template: "\n        <div class=\"col-md-8 col-md-offset-2\">\n            <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"email\">Mail</label>\n                    <input \n                        type=\"email\" \n                        id=\"email\" \n                        class=\"form-control\"\n                        formControlName=\"email\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Password</label>\n                    <input \n                        type=\"password\" \n                        id=\"password\" \n                        class=\"form-control\"\n                        formControlName=\"password\">\n                </div>\n            </form>\n            <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!this.response.logged\">{{this.response.message}}</div>\n            <button class=\"btn btn-primary\" (click)=\"onSubmit()\">Envoyer</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object])
    ], SigninComponent);
    return SigninComponent;
    var _a;
}());
exports.SigninComponent = SigninComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvc2lnbmluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdDLGVBQ2hDLENBQUMsQ0FEOEM7QUFDL0Msc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsMkJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBQ2xDLHVCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBNkJ2QztJQUdJLHlCQUFvQixZQUF5QixFQUFVLE9BQWU7UUFBbEQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFRO1FBRHRFLGFBQVEsR0FBRyxFQUFFLENBQUE7SUFDNEQsQ0FBQztJQUUxRSxrQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQU0sV0FBVyxHQUFHLElBQUksaUJBQUksQ0FDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQzdCLENBQUM7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7YUFDaEMsU0FBUyxDQUNOLFVBQUEsSUFBSTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLFlBQVksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDYixLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtZQUN2QyxDQUFDO1lBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFBQSxDQUFDLEVBRS9CLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDaEMsQ0FBQztRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksaUJBQVMsQ0FBQztZQUN4QixTQUFTLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNyRCxRQUFRLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRSxrQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxLQUFLLEVBQUUsSUFBSSxtQkFBVyxDQUFDLElBQUksRUFBRTtnQkFDekIsa0JBQVUsQ0FBQyxRQUFRO2dCQUNuQixrQkFBVSxDQUFDLE9BQU8sQ0FBQyx5SkFBeUosQ0FBQyxDQUFDLENBQ2pMO1lBQ0QsUUFBUSxFQUFFLElBQUksbUJBQVcsQ0FBQyxJQUFJLEVBQUUsa0JBQVUsQ0FBQyxRQUFRLENBQUM7U0FFdkQsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBFTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsaWlDQXVCVDtTQUNKLENBQUM7O3VCQUFBO0lBMkNGLHNCQUFDOztBQUFELENBMUNBLEFBMENDLElBQUE7QUExQ1ksdUJBQWUsa0JBMEMzQixDQUFBIiwiZmlsZSI6ImF1dGgvc2lnbmluLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybUNvbnRyb2x9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXNpZ25pbicsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04IGNvbC1tZC1vZmZzZXQtMlwiPlxuICAgICAgICAgICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJteUZvcm1cIiAobmdTdWJtaXQpPVwib25TdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlbWFpbFwiPk1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBhc3N3b3JkXCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCIgcm9sZT1cImFsZXJ0XCIgKm5nSWY9XCIhdGhpcy5yZXNwb25zZS5sb2dnZWRcIj57e3RoaXMucmVzcG9uc2UubWVzc2FnZX19PC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5FbnZveWVyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIGBcbn0pXG5leHBvcnQgY2xhc3MgU2lnbmluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBteUZvcm06IEZvcm1Hcm91cDtcbiAgICByZXNwb25zZSA9IHt9XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIF9yb3V0ZXI6IFJvdXRlcikge31cblxuICAgIG9uU3VibWl0KCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm15Rm9ybSk7XG4gICAgICAgIGNvbnN0IGNyZWRlbnRpYWxzID0gbmV3IFVzZXIoXG4gICAgICAgICAgICB0aGlzLm15Rm9ybS52YWx1ZS5lbWFpbCxcbiAgICAgICAgICAgIHRoaXMubXlGb3JtLnZhbHVlLnBhc3N3b3JkXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLnNpZ25pbihjcmVkZW50aWFscylcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2UgPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIGRhdGEudXNlcl9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGVCeVVybCgnL21lbnUnKVxuICAgICAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3BvbnNlKX0sXG5cbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgdGhpcy5teUZvcm0ucmVzZXQoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5teUZvcm0gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICAgICAgICAgIGZpcnN0TmFtZTogbmV3IEZvcm1Db250cm9sKG51bGwsIFZhbGlkYXRvcnMucmVxdWlyZWQpLFxuICAgICAgICAgICAgbGFzdE5hbWU6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKSxcbiAgICAgICAgICAgIGVtYWlsOiBuZXcgRm9ybUNvbnRyb2wobnVsbCwgW1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCdeKChbXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvJyldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IG5ldyBGb3JtQ29udHJvbChudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
