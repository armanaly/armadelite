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
var balletDetails_component_1 = require("./components/ballet/balletDetails.component");
var balletDetails_service_1 = require("./components/ballet/balletDetails.service");
var group_component_1 = require("./components/ballet/group.component");
var group_service_1 = require("./components/ballet/group.service");
var student_component_1 = require("./components/ballet/student.component");
var student_service_1 = require("./components/ballet/student.service");
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
                group_component_1.GroupComponent, student_component_1.StudentComponent
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
                auth_service_1.AuthService, group_service_1.GroupService, student_service_1.StudentService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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Z0JBQ3pCLEVBQUksT0FBTyxFQUFFLHNCQUFlO29CQUN4QixVQUFVLEVBQUUsYUFBYTtvQkFDekIsSUFBSSxFQUFFLENBQUMsMEJBQVcsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBRUQsc0NBQWlCLEVBQUUseUJBQVcsRUFBRSxzQ0FBaUI7Z0JBQ2pELDBCQUFXLEVBQUUsb0NBQWdCLEVBQUUsNENBQW9CO2dCQUNuRCwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsZ0NBQWMsQ0FBQztTQUN6RCxDQUFDOztpQkFBQTtJQUlGLGdCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7Uk9VVElOR30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIlxuXG5cbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFja0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWNrQnV0dG9uXCI7XG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3RCdXR0b25zXCI7XG5pbXBvcnQge011bHRpU2VsZWN0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpcGxlU2VsZWN0aW9uXCI7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhbmVsQnRuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsQnRuSW1nXCI7XG5pbXBvcnQge0ZpZWxkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRQYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVTZXJ2aWNlXCI7XG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuY29tcG9uZW50XCI7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4vbWVudS9tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL21haWwuc2VydmljZVwiO1xuaW1wb3J0IHthc3NldFVybH0gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9pZGVudGlmaWVyc1wiO1xuaW1wb3J0IHsgTmcyQ2xvdWRpbmFyeU1vZHVsZSB9IGZyb20gJ25nMi1jbG91ZGluYXJ5JztcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xuaW1wb3J0IHtGaWxlVXBsb2FkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRcIjtcbmltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0dyaWREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWREZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHcmlkRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZERldGFpbHMuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XG5pbXBvcnQge015QXV0b0ZvY3VzRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2F1dG9mb2N1c1wiO1xuaW1wb3J0IHtCYWxsZXREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9iYWxsZXREZXRhaWxzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtCYWxsZXREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWxsZXQvYmFsbGV0RGV0YWlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0dyb3VwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9ncm91cC5jb21wb25lbnRcIjtcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9ncm91cC5zZXJ2aWNlXCI7XG5pbXBvcnQge1N0dWRlbnRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuY29tcG9uZW50XCI7XG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9zdHVkZW50LnNlcnZpY2VcIjtcblxuXG5cbmZ1bmN0aW9uIGdldFN0ZXBzRmlyc3QoX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xuICAgIGxldCBhcHBOYW1lID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeKD86LipbJlxcXFw/XVwiICsgJ2FwcCcucmVwbGFjZSgvW1xcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIig/OlxcXFw9KFteJl0qKSk/KT8uKiRcIiwgXCJpXCIpLCBcIiQxXCIpO1xuICAgIHJldHVybiAoKSA9PiBfc3RlcFNlcnZpY2UuZ2V0U3RlcHMoYXBwTmFtZSlcblxufVxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LCBNYWluQ29tcG9uZW50LFxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LCBMaXN0QnV0dG9uc0NvbXBvbmVudCwgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQsXG4gICAgICAgIFBhbmVsQnRuQ29tcG9uZW50LCBGaWVsZFBhbmVsQ29tcG9uZW50LCBTYXZlQnV0dG9uQ29tcG9uZW50LFxuICAgICAgICBHcmlkUGFuZWxDb21wb25lbnQsIE1lbnVDb21wb25lbnQsIEZpbGVVcGxvYWRDb21wb25lbnQsXG4gICAgICAgIEJhbGxldERldGFpbHNDb21wb25lbnQsIFNpZ251cENvbXBvbmVudCwgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCwgTXlBdXRvRm9jdXNEaXJlY3RpdmVcbiAgICAgICAgLCBHcm91cENvbXBvbmVudCwgU3R1ZGVudENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUk9VVElORyxcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG5cblxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG5cbiAgICBwcm92aWRlcnM6IFsgRm9ybVNlcnZpY2UsIFN0ZXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHsgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldFN0ZXBzRmlyc3QsXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTdGVwU2VydmljZV0sXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlQ2xvdWRpbmFyeShyZXF1aXJlKCdjbG91ZGluYXJ5LWNvcmUnKSwgeyBjbG91ZF9uYW1lOiAnaGF2amNxcHB2JyB9IGFzIENsb3VkaW5hcnlDb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsIEZpbGVVcGxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIE1haWxTZXJ2aWNlLCBHcmlkUGFuZWxTZXJ2aWNlLCBCYWxsZXREZXRhaWxzU2VydmljZSxcbiAgICAgICAgICAgICAgICBBdXRoU2VydmljZSwgR3JvdXBTZXJ2aWNlLCBTdHVkZW50U2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbiAgICBcblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
