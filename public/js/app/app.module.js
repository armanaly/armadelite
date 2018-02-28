"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const app_component_1 = require("./app.component");
const http_1 = require("@angular/http");
const forms_1 = require("@angular/forms");
const app_routing_1 = require("./app.routing");
const main_component_1 = require("./main.component");
const form_service_1 = require("./Engine/form.service");
const backButton_1 = require("./form/backButton");
const listButtons_1 = require("./form/listButtons");
const multipleSelection_1 = require("./form/multipleSelection");
const step_service_1 = require("./Engine/step.service");
const collection_service_1 = require("./Engine/collection.service");
const panelBtnImg_1 = require("./form/panelBtnImg");
const fieldPanel_component_1 = require("./form/fieldPanel.component");
const saveButton_1 = require("./form/saveButton");
const saveService_1 = require("./form/saveService");
const grid_component_1 = require("./admin/grid.component");
const grid_service_1 = require("./admin/grid.service");
const menu_component_1 = require("./menu/menu.component");
const mail_service_1 = require("./Engine/mail.service");
const fileUpload_1 = require("./form/fileUpload");
const fileUpload_service_1 = require("./form/fileUpload.service");
const auth_service_1 = require("./auth/auth.service");
const signup_component_1 = require("./auth/signup.component");
const signin_component_1 = require("./auth/signin.component");
const authentication_component_1 = require("./auth/authentication.component");
const autofocus_1 = require("./directives/autofocus");
const balletDetails_component_1 = require("./admin/ballet/balletDetails.component");
const balletDetails_service_1 = require("./admin/ballet/balletDetails.service");
const group_component_1 = require("./admin/ballet/group.component");
const group_service_1 = require("./admin/ballet/group.service");
const student_component_1 = require("./admin/ballet/student.component");
const student_service_1 = require("./admin/ballet/student.service");
const export_service_1 = require("./admin/export.service");
const cargoDetails_component_1 = require("./admin/cargo/cargoDetails.component");
const cargoDetails_service_1 = require("./admin/cargo/cargoDetails.service");
const offre_component_1 = require("./admin/auto/offre.component");
const offre_service_1 = require("./admin/auto/offre.service");
const autoDetails_component_1 = require("./admin/auto/autoDetails.component");
const autoDetails_service_1 = require("./admin/auto/autoDetails.service");
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
            grid_component_1.GridPanelComponent, menu_component_1.MenuComponent, fileUpload_1.FileUploadComponent,
            balletDetails_component_1.BalletDetailsComponent, signup_component_1.SignupComponent, signin_component_1.SigninComponent,
            authentication_component_1.AuthenticationComponent, autofocus_1.MyAutoFocusDirective,
            group_component_1.GroupComponent, student_component_1.StudentComponent, cargoDetails_component_1.CargoDetailsComponent,
            autoDetails_component_1.AutoDetailsComponent, offre_component_1.OffreComponent
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
            auth_service_1.AuthService, group_service_1.GroupService, student_service_1.StudentService,
            cargoDetails_service_1.CargoDetailsService, export_service_1.ExportService, autoDetails_service_1.AutoDetailsService,
            offre_service_1.OffreService]
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSx3Q0FBd0Q7QUFDeEQsZ0VBQXdEO0FBRXhELG1EQUE4QztBQUM5Qyx3Q0FBeUM7QUFDekMsMENBQWtFO0FBSWxFLCtDQUFxQztBQUdyQyxxREFBK0M7QUFDL0Msd0RBQWtEO0FBQ2xELGtEQUFzRDtBQUN0RCxvREFBd0Q7QUFDeEQsZ0VBQWlFO0FBQ2pFLHdEQUFrRDtBQUNsRCxvRUFBOEQ7QUFDOUQsb0RBQXFEO0FBQ3JELHNFQUFnRTtBQUNoRSxrREFBc0Q7QUFDdEQsb0RBQStDO0FBQy9DLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFDdEQsMERBQW9EO0FBQ3BELHdEQUFrRDtBQUlsRCxrREFBc0Q7QUFDdEQsa0VBQTREO0FBQzVELHNEQUFnRDtBQUNoRCw4REFBd0Q7QUFDeEQsOERBQXdEO0FBQ3hELDhFQUF3RTtBQUN4RSxzREFBNEQ7QUFDNUQsb0ZBQThFO0FBQzlFLGdGQUEwRTtBQUMxRSxvRUFBOEQ7QUFDOUQsZ0VBQTBEO0FBQzFELHdFQUFrRTtBQUNsRSxvRUFBOEQ7QUFFOUQsMkRBQXFEO0FBQ3JELGlGQUEyRTtBQUMzRSw2RUFBdUU7QUFDdkUsa0VBQTREO0FBQzVELDhEQUF3RDtBQUN4RCw4RUFBd0U7QUFDeEUsMEVBQW9FO0FBR3BFLHVCQUF1QixZQUF5QjtJQUM1QyxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxHQUFHLHNCQUFzQixFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xKLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBRS9DLENBQUM7QUFnQ0QsSUFBYSxTQUFTLEdBQXRCO0NBR0MsQ0FBQTtBQUhZLFNBQVM7SUEvQnJCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRTtZQUNWLDRCQUFZLEVBQUUsOEJBQWE7WUFDM0IsZ0NBQW1CLEVBQUUsa0NBQW9CLEVBQUUsMkNBQXVCO1lBQ2xFLCtCQUFpQixFQUFFLDBDQUFtQixFQUFFLGdDQUFtQjtZQUMzRCxtQ0FBa0IsRUFBRSw4QkFBYSxFQUFFLGdDQUFtQjtZQUN0RCxnREFBc0IsRUFBRSxrQ0FBZSxFQUFFLGtDQUFlO1lBQ3hELGtEQUF1QixFQUFFLGdDQUFvQjtZQUM1QyxnQ0FBYyxFQUFFLG9DQUFnQixFQUFFLDhDQUFxQjtZQUN4RCw0Q0FBb0IsRUFBRSxnQ0FBYztTQUN2QztRQUNELE9BQU8sRUFBRTtZQUNMLGdDQUFhLEVBQUUsbUJBQVcsRUFBRSxxQkFBTztZQUNuQyxpQkFBVSxFQUFFLDJCQUFtQjtTQUNsQztRQUVELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFFekIsU0FBUyxFQUFFLENBQUUsMEJBQVcsRUFBRSwwQkFBVztZQUN6QixFQUFJLE9BQU8sRUFBRSxzQkFBZTtnQkFDeEIsVUFBVSxFQUFFLGFBQWE7Z0JBQ3pCLElBQUksRUFBRSxDQUFDLDBCQUFXLENBQUM7Z0JBQ25CLEtBQUssRUFBRSxJQUFJO2FBQ2Q7WUFFRCxzQ0FBaUIsRUFBRSx5QkFBVyxFQUFFLHNDQUFpQjtZQUNqRCwwQkFBVyxFQUFFLCtCQUFnQixFQUFFLDRDQUFvQjtZQUNuRCwwQkFBVyxFQUFFLDRCQUFZLEVBQUUsZ0NBQWM7WUFDekMsMENBQW1CLEVBQUUsOEJBQWEsRUFBRSx3Q0FBa0I7WUFDdEQsNEJBQVksQ0FBQztLQUM1QixDQUFDO0dBQ1csU0FBUyxDQUdyQjtBQUhZLDhCQUFTIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbi8vIGltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcclxuLy8gaW1wb3J0IHtNZERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuaW1wb3J0IHtST1VUSU5HfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiXHJcblxyXG5cclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFja0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vZm9ybS9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7TGlzdEJ1dHRvbnNDb21wb25lbnR9IGZyb20gXCIuL2Zvcm0vbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vZm9ybS9tdWx0aXBsZVNlbGVjdGlvblwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYW5lbEJ0bkNvbXBvbmVudH0gZnJvbSBcIi4vZm9ybS9wYW5lbEJ0bkltZ1wiO1xyXG5pbXBvcnQge0ZpZWxkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2Zvcm0vZmllbGRQYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTYXZlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9mb3JtL3NhdmVCdXR0b25cIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vZm9ybS9zYXZlU2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vZ3JpZC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9hZG1pbi9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHthc3NldFVybH0gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9pZGVudGlmaWVyc1wiO1xyXG4vLyBpbXBvcnQgeyBOZzJDbG91ZGluYXJ5TW9kdWxlIH0gZnJvbSAnbmcyLWNsb3VkaW5hcnknO1xyXG4vLyBpbXBvcnQgeyBGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnbmcyLWZpbGUtdXBsb2FkJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkQ29tcG9uZW50fSBmcm9tIFwiLi9mb3JtL2ZpbGVVcGxvYWRcIjtcclxuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vZm9ybS9maWxlVXBsb2FkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4vYXV0aC9hdXRoLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTaWdudXBDb21wb25lbnR9IGZyb20gXCIuL2F1dGgvc2lnbnVwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1NpZ25pbkNvbXBvbmVudH0gZnJvbSBcIi4vYXV0aC9zaWduaW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QXV0aGVudGljYXRpb25Db21wb25lbnR9IGZyb20gXCIuL2F1dGgvYXV0aGVudGljYXRpb24uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TXlBdXRvRm9jdXNEaXJlY3RpdmV9IGZyb20gXCIuL2RpcmVjdGl2ZXMvYXV0b2ZvY3VzXCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc0NvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYmFsbGV0L2JhbGxldERldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7QmFsbGV0RGV0YWlsc1NlcnZpY2V9IGZyb20gXCIuL2FkbWluL2JhbGxldC9iYWxsZXREZXRhaWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcm91cENvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYmFsbGV0L2dyb3VwLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyb3VwU2VydmljZX0gZnJvbSBcIi4vYWRtaW4vYmFsbGV0L2dyb3VwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdHVkZW50Q29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9iYWxsZXQvc3R1ZGVudC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdHVkZW50U2VydmljZX0gZnJvbSBcIi4vYWRtaW4vYmFsbGV0L3N0dWRlbnQuc2VydmljZVwiO1xyXG5pbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tIFwiLi4vLi4vcHVibGljL2pzL3ZlbmRvci9AYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMvc3JjL21vZHVsZVwiO1xyXG5pbXBvcnQge0V4cG9ydFNlcnZpY2V9IGZyb20gXCIuL2FkbWluL2V4cG9ydC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q2FyZ29EZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9jYXJnby9jYXJnb0RldGFpbHMuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Q2FyZ29EZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vYWRtaW4vY2FyZ28vY2FyZ29EZXRhaWxzLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtPZmZyZUNvbXBvbmVudH0gZnJvbSBcIi4vYWRtaW4vYXV0by9vZmZyZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtPZmZyZVNlcnZpY2V9IGZyb20gXCIuL2FkbWluL2F1dG8vb2ZmcmUuc2VydmljZVwiO1xyXG5pbXBvcnQge0F1dG9EZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9hZG1pbi9hdXRvL2F1dG9EZXRhaWxzLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0F1dG9EZXRhaWxzU2VydmljZX0gZnJvbSBcIi4vYWRtaW4vYXV0by9hdXRvRGV0YWlscy5zZXJ2aWNlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHNGaXJzdChfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICBsZXQgYXBwTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShuZXcgUmVnRXhwKFwiXig/Oi4qWyZcXFxcP11cIiArICdhcHAnLnJlcGxhY2UoL1tcXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCIoPzpcXFxcPShbXiZdKikpPyk/LiokXCIsIFwiaVwiKSwgXCIkMVwiKTtcclxuICAgIHJldHVybiAoKSA9PiBfc3RlcFNlcnZpY2UuZ2V0U3RlcHMoYXBwTmFtZSlcclxuXHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCwgTWFpbkNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LCBMaXN0QnV0dG9uc0NvbXBvbmVudCwgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBGaWxlVXBsb2FkQ29tcG9uZW50LFxyXG4gICAgICAgIEJhbGxldERldGFpbHNDb21wb25lbnQsIFNpZ251cENvbXBvbmVudCwgU2lnbmluQ29tcG9uZW50LFxyXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LCBNeUF1dG9Gb2N1c0RpcmVjdGl2ZVxyXG4gICAgICAgICxHcm91cENvbXBvbmVudCwgU3R1ZGVudENvbXBvbmVudCwgQ2FyZ29EZXRhaWxzQ29tcG9uZW50LFxyXG4gICAgICAgIEF1dG9EZXRhaWxzQ29tcG9uZW50LCBPZmZyZUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUk9VVElORyxcclxuICAgICAgICBIdHRwTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcbiAgICBdLFxyXG5cclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlLCBTdGVwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHsgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0U3RlcHNGaXJzdCxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbU3RlcFNlcnZpY2VdLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gcHJvdmlkZUNsb3VkaW5hcnkocmVxdWlyZSgnY2xvdWRpbmFyeS1jb3JlJyksIHsgY2xvdWRfbmFtZTogJ2hhdmpjcXBwdicgfSBhcyBDbG91ZGluYXJ5Q29uZmlndXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsIEZpbGVVcGxvYWRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgTWFpbFNlcnZpY2UsIEdyaWRQYW5lbFNlcnZpY2UsIEJhbGxldERldGFpbHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgQXV0aFNlcnZpY2UsIEdyb3VwU2VydmljZSwgU3R1ZGVudFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBDYXJnb0RldGFpbHNTZXJ2aWNlLCBFeHBvcnRTZXJ2aWNlLCBBdXRvRGV0YWlsc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBPZmZyZVNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
