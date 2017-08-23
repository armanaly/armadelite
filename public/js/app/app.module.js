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

//# sourceMappingURL=data:application/json;base64,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MEJBQVcsQ0FBQztvQkFDbkIsS0FBSyxFQUFFLElBQUk7aUJBQ2Q7Z0JBRUQsc0NBQWlCLEVBQUUseUJBQVcsRUFBRSxzQ0FBaUI7Z0JBQ2pELDBCQUFXLEVBQUUsb0NBQWdCLEVBQUUsNENBQW9CO2dCQUNuRCwwQkFBVyxFQUFFLDRCQUFZLENBQUM7U0FDekMsQ0FBQzs7aUJBQUE7SUFJRixnQkFBQztBQUFELENBSEEsQUFHQyxJQUFBO0FBSFksaUJBQVMsWUFHckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7Uk9VVElOR30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIlxyXG5cclxuXHJcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFja0J1dHRvblwiO1xyXG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3RCdXR0b25zXCI7XHJcbmltcG9ydCB7TXVsdGlTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFuZWxCdG5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWxCdG5JbWdcIjtcclxuaW1wb3J0IHtGaWVsZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkUGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHthc3NldFVybH0gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9pZGVudGlmaWVyc1wiO1xyXG5pbXBvcnQgeyBOZzJDbG91ZGluYXJ5TW9kdWxlIH0gZnJvbSAnbmcyLWNsb3VkaW5hcnknO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRcIjtcclxuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkRGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkRGV0YWlscy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkRGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZERldGFpbHMuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dGhTZXJ2aWNlfSBmcm9tIFwiLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5pbXBvcnQge1NpZ251cENvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWdudXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U2lnbmluQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoL3NpZ25pbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtBdXRoZW50aWNhdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9hdXRoZW50aWNhdGlvbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNeUF1dG9Gb2N1c0RpcmVjdGl2ZX0gZnJvbSBcIi4vZGlyZWN0aXZlcy9hdXRvZm9jdXNcIjtcclxuaW1wb3J0IHtCYWxsZXREZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2JhbGxldERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFsbGV0RGV0YWlscy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JvdXBDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JvdXAvZ3JvdXAuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyb3VwL2dyb3VwLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHNGaXJzdChfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICBsZXQgYXBwTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShuZXcgUmVnRXhwKFwiXig/Oi4qWyZcXFxcP11cIiArICdhcHAnLnJlcGxhY2UoL1tcXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCIoPzpcXFxcPShbXiZdKikpPyk/LiokXCIsIFwiaVwiKSwgXCIkMVwiKTtcclxuICAgIHJldHVybiAoKSA9PiBfc3RlcFNlcnZpY2UuZ2V0U3RlcHMoYXBwTmFtZSlcclxuXHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCwgTWFpbkNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LCBMaXN0QnV0dG9uc0NvbXBvbmVudCwgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBGaWxlVXBsb2FkQ29tcG9uZW50LFxyXG4gICAgICAgIEJhbGxldERldGFpbHNDb21wb25lbnQsIFNpZ251cENvbXBvbmVudCwgU2lnbmluQ29tcG9uZW50LFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LCBNeUF1dG9Gb2N1c0RpcmVjdGl2ZVxyXG4gICAgICAgICwgR3JvdXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJPVVRJTkcsXHJcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuXHJcbiAgICBwcm92aWRlcnM6IFsgRm9ybVNlcnZpY2UsIFN0ZXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRTdGVwc0ZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTdGVwU2VydmljZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlQ2xvdWRpbmFyeShyZXF1aXJlKCdjbG91ZGluYXJ5LWNvcmUnKSwgeyBjbG91ZF9uYW1lOiAnaGF2amNxcHB2JyB9IGFzIENsb3VkaW5hcnlDb25maWd1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgIENvbGxlY3Rpb25TZXJ2aWNlLCBTYXZlU2VydmljZSwgRmlsZVVwbG9hZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNYWlsU2VydmljZSwgR3JpZFBhbmVsU2VydmljZSwgQmFsbGV0RGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBBdXRoU2VydmljZSwgR3JvdXBTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuICAgIFxyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
