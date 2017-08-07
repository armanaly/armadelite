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

//# sourceMappingURL=data:application/json;base64,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QUFrQjtZQUNqRCwwQkFBVyxDQUFDO0tBQzNCLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtST1VUSU5HfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiXHJcblxyXG5cclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFja0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7TGlzdEJ1dHRvbnNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tdWx0aXBsZVNlbGVjdGlvblwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYW5lbEJ0bkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYW5lbEJ0bkltZ1wiO1xyXG5pbXBvcnQge0ZpZWxkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRQYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTYXZlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVCdXR0b25cIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlU2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5pbXBvcnQge2Fzc2V0VXJsfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2lkZW50aWZpZXJzXCI7XHJcbmltcG9ydCB7IE5nMkNsb3VkaW5hcnlNb2R1bGUgfSBmcm9tICduZzItY2xvdWRpbmFyeSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZFwiO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWREZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dGhlbnRpY2F0aW9uQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge015QXV0b0ZvY3VzRGlyZWN0aXZlfSBmcm9tIFwiLi9kaXJlY3RpdmVzL2F1dG9mb2N1c1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwc0ZpcnN0KF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHtcclxuICAgIGxldCBhcHBOYW1lID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeKD86LipbJlxcXFw/XVwiICsgJ2FwcCcucmVwbGFjZSgvW1xcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIig/OlxcXFw9KFteJl0qKSk/KT8uKiRcIiwgXCJpXCIpLCBcIiQxXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IF9zdGVwU2VydmljZS5nZXRTdGVwcyhhcHBOYW1lKVxyXG5cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LCBNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsIExpc3RCdXR0b25zQ29tcG9uZW50LCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBQYW5lbEJ0bkNvbXBvbmVudCwgRmllbGRQYW5lbENvbXBvbmVudCwgU2F2ZUJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBHcmlkUGFuZWxDb21wb25lbnQsIE1lbnVDb21wb25lbnQsIEZpbGVVcGxvYWRDb21wb25lbnQsXHJcbiAgICAgICAgR3JpZERldGFpbHNDb21wb25lbnQsIFNpZ251cENvbXBvbmVudCwgU2lnbmluQ29tcG9uZW50LFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LCBNeUF1dG9Gb2N1c0RpcmVjdGl2ZVxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUk9VVElORyxcclxuICAgICAgICBIdHRwTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG5cclxuXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG5cclxuICAgIHByb3ZpZGVyczogWyBGb3JtU2VydmljZSwgU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICB7ICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldFN0ZXBzRmlyc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwczogW1N0ZXBTZXJ2aWNlXSxcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIHByb3ZpZGVDbG91ZGluYXJ5KHJlcXVpcmUoJ2Nsb3VkaW5hcnktY29yZScpLCB7IGNsb3VkX25hbWU6ICdoYXZqY3FwcHYnIH0gYXMgQ2xvdWRpbmFyeUNvbmZpZ3VyYXRpb24pLFxyXG4gICAgICAgICAgICAgICAgQ29sbGVjdGlvblNlcnZpY2UsIFNhdmVTZXJ2aWNlLCBGaWxlVXBsb2FkU2VydmljZSxcclxuICAgICAgICAgICAgICAgIE1haWxTZXJ2aWNlLCBHcmlkUGFuZWxTZXJ2aWNlLCBHcmlkRGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBBdXRoU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
