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
const auth_service_1 = require("./auth/auth.service");
const signup_component_1 = require("./auth/signup.component");
const signin_component_1 = require("./auth/signin.component");
const authentication_component_1 = require("./auth/authentication.component");
const autofocus_1 = require("./directives/autofocus");
const balletDetails_component_1 = require("./components/balletDetails.component");
const balletDetails_service_1 = require("./components/balletDetails.service");
const group_component_1 = require("./components/group/group.component");
const group_service_1 = require("./components/group/group.service");
const editStudent_component_1 = require("./components/student/editStudent.component");
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
            balletDetails_component_1.BalletDetailsComponent, signup_component_1.SignupComponent, signin_component_1.SigninComponent,
            authentication_component_1.AuthenticationComponent, autofocus_1.MyAutoFocusDirective,
            group_component_1.GroupComponent, editStudent_component_1.EditStudentComponent
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
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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RUFBRSxDQUFDLDBCQUFXLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFFRCxzQ0FBaUIsRUFBRSx5QkFBVyxFQUFFLHNDQUFpQjtZQUNqRCwwQkFBVyxFQUFFLG9DQUFnQixFQUFFLDRDQUFvQjtZQUNuRCwwQkFBVyxFQUFFLDRCQUFZLENBQUM7S0FDekMsQ0FBQzs7YUFBQTtBQUNXLGlCQUFTLFlBR3JCLENBQUEiLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtST1VUSU5HfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiXG5cblxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4uY29tcG9uZW50XCI7XG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhY2tCdXR0b25cIjtcbmltcG9ydCB7TGlzdEJ1dHRvbnNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdEJ1dHRvbnNcIjtcbmltcG9ydCB7TXVsdGlTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb25cIjtcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcbmltcG9ydCB7UGFuZWxCdG5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWxCdG5JbWdcIjtcbmltcG9ydCB7RmllbGRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZFBhbmVsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTYXZlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVCdXR0b25cIjtcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZVNlcnZpY2VcIjtcbmltcG9ydCB7R3JpZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWRQYW5lbC5jb21wb25lbnRcIjtcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvbWFpbC5zZXJ2aWNlXCI7XG5pbXBvcnQge2Fzc2V0VXJsfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2lkZW50aWZpZXJzXCI7XG5pbXBvcnQgeyBOZzJDbG91ZGluYXJ5TW9kdWxlIH0gZnJvbSAnbmcyLWNsb3VkaW5hcnknO1xuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZFwiO1xuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2VcIjtcbmltcG9ydCB7R3JpZERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZERldGFpbHMuY29tcG9uZW50XCI7XG5pbXBvcnQge0dyaWREZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7TXlBdXRvRm9jdXNEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzXCI7XG5pbXBvcnQge0JhbGxldERldGFpbHNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0RGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0RGV0YWlscy5zZXJ2aWNlXCI7XG5pbXBvcnQge0dyb3VwQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyb3VwL2dyb3VwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuc2VydmljZVwiO1xuaW1wb3J0IHtFZGl0U3R1ZGVudENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zdHVkZW50L2VkaXRTdHVkZW50LmNvbXBvbmVudFwiO1xuXG5cblxuZnVuY3Rpb24gZ2V0U3RlcHNGaXJzdChfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XG4gICAgbGV0IGFwcE5hbWUgPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4oPzouKlsmXFxcXD9dXCIgKyAnYXBwJy5yZXBsYWNlKC9bXFwuXFwrXFwqXS9nLCBcIlxcXFwkJlwiKSArIFwiKD86XFxcXD0oW14mXSopKT8pPy4qJFwiLCBcImlcIiksIFwiJDFcIik7XG4gICAgcmV0dXJuICgpID0+IF9zdGVwU2VydmljZS5nZXRTdGVwcyhhcHBOYW1lKVxuXG59XG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsIE1haW5Db21wb25lbnQsXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsIExpc3RCdXR0b25zQ29tcG9uZW50LCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCxcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsXG4gICAgICAgIEdyaWRQYW5lbENvbXBvbmVudCwgTWVudUNvbXBvbmVudCwgRmlsZVVwbG9hZENvbXBvbmVudCxcbiAgICAgICAgQmFsbGV0RGV0YWlsc0NvbXBvbmVudCwgU2lnbnVwQ29tcG9uZW50LCBTaWduaW5Db21wb25lbnQsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LCBNeUF1dG9Gb2N1c0RpcmVjdGl2ZVxuICAgICAgICAsIEdyb3VwQ29tcG9uZW50LCBFZGl0U3R1ZGVudENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUk9VVElORyxcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxuICAgIF0sXG5cblxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXG5cbiAgICBwcm92aWRlcnM6IFsgRm9ybVNlcnZpY2UsIFN0ZXBTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHsgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldFN0ZXBzRmlyc3QsXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTdGVwU2VydmljZV0sXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlQ2xvdWRpbmFyeShyZXF1aXJlKCdjbG91ZGluYXJ5LWNvcmUnKSwgeyBjbG91ZF9uYW1lOiAnaGF2amNxcHB2JyB9IGFzIENsb3VkaW5hcnlDb25maWd1cmF0aW9uKSxcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsIEZpbGVVcGxvYWRTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIE1haWxTZXJ2aWNlLCBHcmlkUGFuZWxTZXJ2aWNlLCBCYWxsZXREZXRhaWxzU2VydmljZSxcbiAgICAgICAgICAgICAgICBBdXRoU2VydmljZSwgR3JvdXBTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuICAgIFxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
