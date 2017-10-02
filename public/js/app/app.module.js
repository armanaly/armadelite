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
var export_service_1 = require("./components/export.service");
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
                auth_service_1.AuthService, group_service_1.GroupService, student_service_1.StudentService, export_service_1.ExportService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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QVMsRUFBRSxDQUFFLDBCQUFXLEVBQUUsMEJBQVc7Z0JBQ3pCLEVBQUksT0FBTyxFQUFFLHNCQUFlO29CQUN4QixVQUFVLEVBQUUsYUFBYTtvQkFDekIsSUFBSSxFQUFFLENBQUMsMEJBQVcsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBRUQsc0NBQWlCLEVBQUUseUJBQVcsRUFBRSxzQ0FBaUI7Z0JBQ2pELDBCQUFXLEVBQUUsK0JBQWdCLEVBQUUsNENBQW9CO2dCQUNuRCwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxDQUFDO1NBQ3hFLENBQUM7O2lCQUFBO0lBSUYsZ0JBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLGlCQUFTLFlBR3JCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vLyBpbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbi8vIGltcG9ydCB7TWREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XHJcbmltcG9ydCB7Uk9VVElOR30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIlxyXG5cclxuXHJcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFja0J1dHRvblwiO1xyXG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3RCdXR0b25zXCI7XHJcbmltcG9ydCB7TXVsdGlTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFuZWxCdG5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWxCdG5JbWdcIjtcclxuaW1wb3J0IHtGaWVsZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkUGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWQuc2VydmljZVwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5pbXBvcnQge2Fzc2V0VXJsfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2lkZW50aWZpZXJzXCI7XHJcbmltcG9ydCB7IE5nMkNsb3VkaW5hcnlNb2R1bGUgfSBmcm9tICduZzItY2xvdWRpbmFyeSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZFwiO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWREZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge015QXV0b0ZvY3VzRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2F1dG9mb2N1c1wiO1xyXG5pbXBvcnQge0JhbGxldERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2JhbGxldERldGFpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0dyb3VwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9ncm91cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0L2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdHVkZW50Q29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9zdHVkZW50LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0dWRlbnRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldC9zdHVkZW50LnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSBcIi4uLy4uL3B1YmxpYy9qcy92ZW5kb3IvQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9tb2R1bGVcIjtcclxuaW1wb3J0IHtFeHBvcnRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2V4cG9ydC5zZXJ2aWNlXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzRmlyc3QoX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xyXG4gICAgbGV0IGFwcE5hbWUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4oPzouKlsmXFxcXD9dXCIgKyAnYXBwJy5yZXBsYWNlKC9bXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiKD86XFxcXD0oW14mXSopKT8pPy4qJFwiLCBcImlcIiksIFwiJDFcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKGFwcE5hbWUpXHJcblxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsIE1haW5Db21wb25lbnQsXHJcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCwgTGlzdEJ1dHRvbnNDb21wb25lbnQsIE11bHRpU2VsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFBhbmVsQnRuQ29tcG9uZW50LCBGaWVsZFBhbmVsQ29tcG9uZW50LCBTYXZlQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgICAgIEdyaWRQYW5lbENvbXBvbmVudCwgTWVudUNvbXBvbmVudCwgRmlsZVVwbG9hZENvbXBvbmVudCxcclxuICAgICAgICBCYWxsZXREZXRhaWxzQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCxcclxuICAgICAgICBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCwgTXlBdXRvRm9jdXNEaXJlY3RpdmVcclxuICAgICAgICAsIEdyb3VwQ29tcG9uZW50LCBTdHVkZW50Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBST1VUSU5HLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICAvLyAsIE1kRGF0ZXBpY2tlck1vZHVsZVxyXG5cclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlLCBTdGVwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHsgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0U3RlcHNGaXJzdCxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbU3RlcFNlcnZpY2VdLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gcHJvdmlkZUNsb3VkaW5hcnkocmVxdWlyZSgnY2xvdWRpbmFyeS1jb3JlJyksIHsgY2xvdWRfbmFtZTogJ2hhdmpjcXBwdicgfSBhcyBDbG91ZGluYXJ5Q29uZmlndXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsIEZpbGVVcGxvYWRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgTWFpbFNlcnZpY2UsIEdyaWRQYW5lbFNlcnZpY2UsIEJhbGxldERldGFpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UsIEdyb3VwU2VydmljZSwgU3R1ZGVudFNlcnZpY2UsIEV4cG9ydFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
