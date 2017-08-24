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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require("@angular/http");
var forms_1 = require('@angular/forms');
var app_routing_1 = require("./app.routing");
var main_component_1 = require("./components/main.component");
var form_service_1 = require("./components/form.service");
var backButton_1 = require("./components/backButton");
var listButtons_1 = require("./components/listButtons");
var multipleSelection_1 = require("./components/multipleSelection");
var step_service_1 = require("./Engine/step.service");
var collection_service_1 = require("./Engine/collection.service");
var panelBtnImg_1 = require("./components/panelBtnImg");
var fieldPanel_component_1 = require("./components/fieldPanel.component");
var saveButton_1 = require("./components/saveButton");
var saveService_1 = require("./components/saveService");
var gridPanel_component_1 = require("./components/gridPanel.component");
var gridPanel_service_1 = require("./components/gridPanel.service");
var menu_component_1 = require("./menu/menu.component");
var mail_service_1 = require("./Engine/mail.service");
var fileUpload_1 = require("./components/fileUpload");
var fileUpload_service_1 = require("./components/fileUpload.service");
var auth_service_1 = require("./auth/auth.service");
var signup_component_1 = require("./auth/signup.component");
var signin_component_1 = require("./auth/signin.component");
var authentication_component_1 = require("./auth/authentication.component");
var autofocus_1 = require("./directives/autofocus");
var balletDetails_component_1 = require("./components/balletDetails.component");
var balletDetails_service_1 = require("./components/balletDetails.service");
var group_component_1 = require("./components/group/group.component");
var group_service_1 = require("./components/group/group.service");
function getStepsFirst(_stepService) {
    var appName = window.location.search.replace(new RegExp("^(?:.*[&\\?]" + 'app'.replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");
    return function () { return _stepService.getSteps(appName); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, main_component_1.MainComponent,
                backButton_1.BackButtonComponent, listButtons_1.ListButtonsComponent, multipleSelection_1.MultiSelectionComponent,
                panelBtnImg_1.PanelBtnComponent, fieldPanel_component_1.FieldPanelComponent, saveButton_1.SaveButtonComponent,
                gridPanel_component_1.GridPanelComponent, menu_component_1.MenuComponent, fileUpload_1.FileUploadComponent,
                balletDetails_component_1.BalletDetailsComponent, signup_component_1.SignupComponent, signin_component_1.SigninComponent,
                authentication_component_1.AuthenticationComponent, autofocus_1.MyAutoFocusDirective,
                group_component_1.GroupComponent
            ],
            imports: [
                platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.ROUTING,
                http_1.HttpModule, forms_1.ReactiveFormsModule
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [form_service_1.FormService, step_service_1.StepService,
                { provide: core_1.APP_INITIALIZER,
                    useFactory: getStepsFirst,
                    deps: [step_service_1.StepService],
                    multi: true
                },
                collection_service_1.CollectionService, saveService_1.SaveService, fileUpload_service_1.FileUploadService,
                mail_service_1.MailService, gridPanel_service_1.GridPanelService, balletDetails_service_1.BalletDetailsService,
                auth_service_1.AuthService, group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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MEJBQVcsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBRUQsc0NBQWlCLEVBQUUseUJBQVcsRUFBRSxzQ0FBaUI7Z0JBQ2pELDBCQUFXLEVBQUUsb0NBQWdCLEVBQUUsNENBQW9CO2dCQUNuRCwwQkFBVyxFQUFFLDRCQUFZLENBQUM7U0FDekMsQ0FBQzs7aUJBQUE7SUFJRixnQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksaUJBQVMsWUFHckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5cbmltcG9ydCB7QXBwQ29tcG9uZW50fSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcblxuXG5pbXBvcnQge01haW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFja0J1dHRvblwiO1xuaW1wb3J0IHtMaXN0QnV0dG9uc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXN0QnV0dG9uc1wiO1xuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tdWx0aXBsZVNlbGVjdGlvblwiO1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZVwiO1xuaW1wb3J0IHtQYW5lbEJ0bkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYW5lbEJ0bkltZ1wiO1xuaW1wb3J0IHtGaWVsZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkUGFuZWwuY29tcG9uZW50XCI7XG5pbXBvcnQge1NhdmVCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZUJ1dHRvblwiO1xuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlU2VydmljZVwiO1xuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcbmltcG9ydCB7YXNzZXRVcmx9IGZyb20gXCJAYW5ndWxhci9jb21waWxlci9zcmMvaWRlbnRpZmllcnNcIjtcbmltcG9ydCB7IE5nMkNsb3VkaW5hcnlNb2R1bGUgfSBmcm9tICduZzItY2xvdWRpbmFyeSc7XG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcbmltcG9ydCB7RmlsZVVwbG9hZENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkXCI7XG5pbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xuaW1wb3J0IHtHcmlkRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7R3JpZERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWREZXRhaWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWdudXAuY29tcG9uZW50XCI7XG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNeUF1dG9Gb2N1c0RpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9hdXRvZm9jdXNcIjtcbmltcG9ydCB7QmFsbGV0RGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWxsZXREZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCYWxsZXREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7R3JvdXBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50XCI7XG5pbXBvcnQge0dyb3VwU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncm91cC9ncm91cC5zZXJ2aWNlXCI7XG5cblxuXG5mdW5jdGlvbiBnZXRTdGVwc0ZpcnN0KF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHtcbiAgICBsZXQgYXBwTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShuZXcgUmVnRXhwKFwiXig/Oi4qWyZcXFxcP11cIiArICdhcHAnLnJlcGxhY2UoL1tcXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCIoPzpcXFxcPShbXiZdKikpPyk/LiokXCIsIFwiaVwiKSwgXCIkMVwiKTtcbiAgICByZXR1cm4gKCkgPT4gX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKGFwcE5hbWUpXG5cbn1cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCwgTWFpbkNvbXBvbmVudCxcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCwgTGlzdEJ1dHRvbnNDb21wb25lbnQsIE11bHRpU2VsZWN0aW9uQ29tcG9uZW50LFxuICAgICAgICBQYW5lbEJ0bkNvbXBvbmVudCwgRmllbGRQYW5lbENvbXBvbmVudCwgU2F2ZUJ1dHRvbkNvbXBvbmVudCxcbiAgICAgICAgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBGaWxlVXBsb2FkQ29tcG9uZW50LFxuICAgICAgICBCYWxsZXREZXRhaWxzQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCxcbiAgICAgICAgQXV0aGVudGljYXRpb25Db21wb25lbnQsIE15QXV0b0ZvY3VzRGlyZWN0aXZlXG4gICAgICAgICwgR3JvdXBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJPVVRJTkcsXG4gICAgICAgIEh0dHBNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcbiAgICBdLFxuXG5cbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuXG4gICAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlLCBTdGVwU2VydmljZSxcbiAgICAgICAgICAgICAgICB7ICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRTdGVwc0ZpcnN0LFxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbU3RlcFNlcnZpY2VdLFxuICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gcHJvdmlkZUNsb3VkaW5hcnkocmVxdWlyZSgnY2xvdWRpbmFyeS1jb3JlJyksIHsgY2xvdWRfbmFtZTogJ2hhdmpjcXBwdicgfSBhcyBDbG91ZGluYXJ5Q29uZmlndXJhdGlvbiksXG4gICAgICAgICAgICAgICAgQ29sbGVjdGlvblNlcnZpY2UsIFNhdmVTZXJ2aWNlLCBGaWxlVXBsb2FkU2VydmljZSxcbiAgICAgICAgICAgICAgICBNYWlsU2VydmljZSwgR3JpZFBhbmVsU2VydmljZSwgQmFsbGV0RGV0YWlsc1NlcnZpY2UsXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UsIEdyb3VwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
