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
const platform_browser_1 = require('@angular/platform-browser');
const app_component_1 = require('./app.component');
const http_1 = require("@angular/http");
const forms_1 = require('@angular/forms');
const app_routing_1 = require("./app.routing");
const main_component_1 = require("./components/main.component");
const form_service_1 = require("./components/form.service");
const backButton_1 = require("./components/backButton");
const listButtons_1 = require("./components/listButtons");
const multipleSelection_1 = require("./components/multipleSelection");
const step_service_1 = require("./Engine/step.service");
const collection_service_1 = require("./Engine/collection.service");
const panelBtnImg_1 = require("./components/panelBtnImg");
const fieldPanel_component_1 = require("./components/fieldPanel.component");
const saveButton_1 = require("./components/saveButton");
const saveService_1 = require("./components/saveService");
const gridPanel_component_1 = require("./components/gridPanel.component");
const gridPanel_service_1 = require("./components/gridPanel.service");
const menu_component_1 = require("./menu/menu.component");
const mail_service_1 = require("./Engine/mail.service");
const fileUpload_1 = require("./components/fileUpload");
const fileUpload_service_1 = require("./components/fileUpload.service");
const gridDetails_component_1 = require("./components/gridDetails.component");
const gridDetails_service_1 = require("./components/gridDetails.service");
const auth_service_1 = require("./auth/auth.service");
const signup_component_1 = require("./auth/signup.component");
const signin_component_1 = require("./auth/signin.component");
const authentication_component_1 = require("./auth/authentication.component");
const autofocus_1 = require("./directives/autofocus");
function getStepsFirst(_stepService) {
    let appName = window.location.search.replace(new RegExp("^(?:.*[&\\?]" + 'app'.replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");
    return () => _stepService.getSteps(appName);
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, main_component_1.MainComponent,
            backButton_1.BackButtonComponent, listButtons_1.ListButtonsComponent, multipleSelection_1.MultiSelectionComponent,
            panelBtnImg_1.PanelBtnComponent, fieldPanel_component_1.FieldPanelComponent, saveButton_1.SaveButtonComponent,
            gridPanel_component_1.GridPanelComponent, menu_component_1.MenuComponent, fileUpload_1.FileUploadComponent,
            gridDetails_component_1.GridDetailsComponent, signup_component_1.SignupComponent, signin_component_1.SigninComponent,
            authentication_component_1.AuthenticationComponent, autofocus_1.MyAutoFocusDirective
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
            mail_service_1.MailService, gridPanel_service_1.GridPanelService, gridDetails_service_1.GridDetailsService,
            auth_service_1.AuthService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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QUFrQjtZQUNqRCwwQkFBVyxDQUFDO0tBQzNCLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcclxuXHJcblxyXG5pbXBvcnQge01haW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHtMaXN0QnV0dG9uc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9saXN0QnV0dG9uc1wiO1xyXG5pbXBvcnQge011bHRpU2VsZWN0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL211bHRpcGxlU2VsZWN0aW9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1BhbmVsQnRuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsQnRuSW1nXCI7XHJcbmltcG9ydCB7RmllbGRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZFBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NhdmVCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZUJ1dHRvblwiO1xyXG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWRQYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4vbWVudS9tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvbWFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7YXNzZXRVcmx9IGZyb20gXCJAYW5ndWxhci9jb21waWxlci9zcmMvaWRlbnRpZmllcnNcIjtcclxuaW1wb3J0IHsgTmcyQ2xvdWRpbmFyeU1vZHVsZSB9IGZyb20gJ25nMi1jbG91ZGluYXJ5JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XHJcbmltcG9ydCB7RmlsZVVwbG9hZENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkXCI7XHJcbmltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JpZERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JpZERldGFpbHNTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWREZXRhaWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TXlBdXRvRm9jdXNEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzXCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzRmlyc3QoX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xyXG4gICAgbGV0IGFwcE5hbWUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4oPzouKlsmXFxcXD9dXCIgKyAnYXBwJy5yZXBsYWNlKC9bXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiKD86XFxcXD0oW14mXSopKT8pPy4qJFwiLCBcImlcIiksIFwiJDFcIik7XHJcbiAgICByZXR1cm4gKCkgPT4gX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKGFwcE5hbWUpXHJcblxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsIE1haW5Db21wb25lbnQsXHJcbiAgICAgICAgLy8gU3RhdGVDb21wb25lbnQsIFBob3Rvc0NvbXBvbmVudCwgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LCBMaXN0QnV0dG9uc0NvbXBvbmVudCwgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBGaWxlVXBsb2FkQ29tcG9uZW50LFxyXG4gICAgICAgIEdyaWREZXRhaWxzQ29tcG9uZW50LCBTaWdudXBDb21wb25lbnQsIFNpZ25pbkNvbXBvbmVudCxcclxuICAgICAgICBBdXRoZW50aWNhdGlvbkNvbXBvbmVudCwgTXlBdXRvRm9jdXNEaXJlY3RpdmVcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJPVVRJTkcsXHJcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuXHJcbiAgICBwcm92aWRlcnM6IFsgRm9ybVNlcnZpY2UsIFN0ZXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRTdGVwc0ZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTdGVwU2VydmljZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlQ2xvdWRpbmFyeShyZXF1aXJlKCdjbG91ZGluYXJ5LWNvcmUnKSwgeyBjbG91ZF9uYW1lOiAnaGF2amNxcHB2JyB9IGFzIENsb3VkaW5hcnlDb25maWd1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgIENvbGxlY3Rpb25TZXJ2aWNlLCBTYXZlU2VydmljZSwgRmlsZVVwbG9hZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNYWlsU2VydmljZSwgR3JpZFBhbmVsU2VydmljZSwgR3JpZERldGFpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
