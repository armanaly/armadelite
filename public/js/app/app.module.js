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
var grid_component_1 = require("./components/grid.component");
var grid_service_1 = require("./components/grid.service");
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
                grid_component_1.GridPanelComponent, menu_component_1.MenuComponent, fileUpload_1.FileUploadComponent,
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
                mail_service_1.MailService, grid_service_1.GridPanelService, balletDetails_service_1.BalletDetailsService,
                auth_service_1.AuthService, group_service_1.GroupService, student_service_1.StudentService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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Z0JBQ3pCLEVBQUksT0FBTyxFQUFFLHNCQUFlO29CQUN4QixVQUFVLEVBQUUsYUFBYTtvQkFDekIsSUFBSSxFQUFFLENBQUMsMEJBQVcsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBRUQsc0NBQWlCLEVBQUUseUJBQVcsRUFBRSxzQ0FBaUI7Z0JBQ2pELDBCQUFXLEVBQUUsK0JBQWdCLEVBQUUsNENBQW9CO2dCQUNuRCwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsZ0NBQWMsQ0FBQztTQUN6RCxDQUFDOztpQkFBQTtJQUlGLGdCQUFDO0FBQUQsQ0FIQSxBQUdDLElBQUE7QUFIWSxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7Uk9VVElOR30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIlxuXG5cbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7QmFja0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWNrQnV0dG9uXCI7XG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3RCdXR0b25zXCI7XG5pbXBvcnQge011bHRpU2VsZWN0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpcGxlU2VsZWN0aW9uXCI7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XG5pbXBvcnQge1BhbmVsQnRuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsQnRuSW1nXCI7XG5pbXBvcnQge0ZpZWxkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRQYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVTZXJ2aWNlXCI7XG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWQuc2VydmljZVwiO1xuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvbWFpbC5zZXJ2aWNlXCI7XG5pbXBvcnQge2Fzc2V0VXJsfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2lkZW50aWZpZXJzXCI7XG5pbXBvcnQgeyBOZzJDbG91ZGluYXJ5TW9kdWxlIH0gZnJvbSAnbmcyLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZFwiO1xuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7R3JpZERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZERldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0dyaWREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TXlBdXRvRm9jdXNEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzXCI7XG5pbXBvcnQge0JhbGxldERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0JhbGxldERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcbmltcG9ydCB7R3JvdXBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2dyb3VwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7U3R1ZGVudENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWxsZXQvc3R1ZGVudC5jb21wb25lbnRcIjtcbmltcG9ydCB7U3R1ZGVudFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuc2VydmljZVwiO1xuXG5cblxuZnVuY3Rpb24gZ2V0U3RlcHNGaXJzdChfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XG4gICAgbGV0IGFwcE5hbWUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4oPzouKlsmXFxcXD9dXCIgKyAnYXBwJy5yZXBsYWNlKC9bXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiKD86XFxcXD0oW14mXSopKT8pPy4qJFwiLCBcImlcIiksIFwiJDFcIik7XG4gICAgcmV0dXJuICgpID0+IF9zdGVwU2VydmljZS5nZXRTdGVwcyhhcHBOYW1lKVxuXG59XG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsIE1haW5Db21wb25lbnQsXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsIExpc3RCdXR0b25zQ29tcG9uZW50LCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEdyaWRQYW5lbENvbXBvbmVudCwgTWVudUNvbXBvbmVudCwgRmlsZVVwbG9hZENvbXBvbmVudCxcbiAgICAgICAgQmFsbGV0RGV0YWlsc0NvbXBvbmVudCwgU2lnbnVwQ29tcG9uZW50LCBTaWduaW5Db21wb25lbnQsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LCBNeUF1dG9Gb2N1c0RpcmVjdGl2ZVxuICAgICAgICAsIEdyb3VwQ29tcG9uZW50LCBTdHVkZW50Q29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBST1VUSU5HLFxuICAgICAgICBIdHRwTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gICAgXSxcblxuXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcblxuICAgIHByb3ZpZGVyczogWyBGb3JtU2VydmljZSwgU3RlcFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgeyAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0U3RlcHNGaXJzdCxcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW1N0ZXBTZXJ2aWNlXSxcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIHByb3ZpZGVDbG91ZGluYXJ5KHJlcXVpcmUoJ2Nsb3VkaW5hcnktY29yZScpLCB7IGNsb3VkX25hbWU6ICdoYXZqY3FwcHYnIH0gYXMgQ2xvdWRpbmFyeUNvbmZpZ3VyYXRpb24pLFxuICAgICAgICAgICAgICAgIENvbGxlY3Rpb25TZXJ2aWNlLCBTYXZlU2VydmljZSwgRmlsZVVwbG9hZFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgTWFpbFNlcnZpY2UsIEdyaWRQYW5lbFNlcnZpY2UsIEJhbGxldERldGFpbHNTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIEF1dGhTZXJ2aWNlLCBHcm91cFNlcnZpY2UsIFN0dWRlbnRTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIFxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
