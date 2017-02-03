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
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
const app_component_1 = require('./app.component');
const http_1 = require("@angular/http");
const forms_1 = require('@angular/forms');
const app_routing_1 = require("./app.routing");
const main_component_1 = require("./vehicule/main.component");
const state_component_1 = require("./state/state.component");
const profile_component_1 = require("./profile/profile.component");
const photos_component_1 = require("./photos/photos.component");
const form_service_1 = require("./vehicule/form.service");
const profile_service_1 = require("./profile/profile.service");
const photos_service_1 = require("./photos/photos.service");
const backButton_1 = require("./vehicule/backButton");
const listButtons_1 = require("./vehicule/listButtons");
const multipleSelection_1 = require("./vehicule/multipleSelection");
const step_service_1 = require("./Engine/step.service");
const collection_service_1 = require("./Engine/collection.service");
const panelBtnImg_1 = require("./components/panelBtnImg");
const fieldPanel_1 = require("./components/fieldPanel");
const saveButton_1 = require("./components/saveButton");
const saveService_1 = require("./components/saveService");
const gridPanel_component_1 = require("./components/gridPanel.component");
const gridPanel_service_1 = require("./components/gridPanel.service");
const menu_component_1 = require("./menu/menu.component");
const mail_service_1 = require("./Engine/mail.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent, main_component_1.MainComponent,
            state_component_1.StateComponent, photos_component_1.PhotosComponent, profile_component_1.ProfileComponent,
            backButton_1.BackButtonComponent, listButtons_1.ListButtonsComponent, multipleSelection_1.MultiSelectionComponent,
            panelBtnImg_1.PanelBtnComponent, fieldPanel_1.FieldPanelComponent, saveButton_1.SaveButtonComponent, gridPanel_component_1.GridPanelComponent, menu_component_1.MenuComponent
        ],
        imports: [
            platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_1.ROUTING,
            http_1.HttpModule, forms_1.ReactiveFormsModule
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [form_service_1.FormService, profile_service_1.ProfileService, photos_service_1.PhotosService,
            step_service_1.StepService, collection_service_1.CollectionService, saveService_1.SaveService,
            mail_service_1.MailService, gridPanel_service_1.GridPanelService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxtQ0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCx1REFBdUQ7QUFFdkQsZ0NBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMsdUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWxFLDhCQUFzQixlQUd0QixDQUFDLENBSG9DO0FBR3JDLGlDQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELGtDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELG9DQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELG1DQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELCtCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELGtDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELGlDQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELDZCQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDhCQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELG9DQUFzQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3JFLCtCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELHFDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDhCQUFnQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzNELDZCQUFrQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzVELDZCQUFrQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzVELDhCQUEwQiwwQkFBMEIsQ0FBQyxDQUFBO0FBQ3JELHNDQUFpQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3BFLG9DQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLGlDQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELCtCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBa0JsRDtBQUdBLENBQUM7QUFwQkQ7SUFBQyxlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViw0QkFBWSxFQUFFLDhCQUFhO1lBQzNCLGdDQUFjLEVBQUUsa0NBQWUsRUFBRSxvQ0FBZ0I7WUFDakQsZ0NBQW1CLEVBQUUsa0NBQW9CLEVBQUUsMkNBQXVCO1lBQ2xFLCtCQUFpQixFQUFFLGdDQUFtQixFQUFFLGdDQUFtQixFQUFFLHdDQUFrQixFQUFFLDhCQUFhO1NBQ2pHO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLHFCQUFPO1lBQ25DLGlCQUFVLEVBQUUsMkJBQW1CO1NBRWxDO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixTQUFTLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLGdDQUFjLEVBQUUsOEJBQWE7WUFDMUMsMEJBQVcsRUFBRSxzQ0FBaUIsRUFBRSx5QkFBVztZQUM1QywwQkFBVyxFQUFFLG9DQUFnQixDQUFDO0tBQzdDLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcclxuXHJcblxyXG5pbXBvcnQge01haW5Db21wb25lbnR9IGZyb20gXCIuL3ZlaGljdWxlL21haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGVDb21wb25lbnR9IGZyb20gXCIuL3N0YXRlL3N0YXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQaG90b3NDb21wb25lbnR9IGZyb20gXCIuL3Bob3Rvcy9waG90b3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL3ZlaGljdWxlL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1Bob3Rvc1NlcnZpY2V9IGZyb20gXCIuL3Bob3Rvcy9waG90b3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL3ZlaGljdWxlL2JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHtMaXN0QnV0dG9uc0NvbXBvbmVudH0gZnJvbSBcIi4vdmVoaWN1bGUvbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vdmVoaWN1bGUvbXVsdGlwbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFuZWxCdG5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWxCdG5JbWdcIjtcclxuaW1wb3J0IHtGaWVsZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkUGFuZWxcIjtcclxuaW1wb3J0IHtTYXZlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVCdXR0b25cIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlU2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LCBNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIFN0YXRlQ29tcG9uZW50LCBQaG90b3NDb21wb25lbnQsIFByb2ZpbGVDb21wb25lbnQsXHJcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCwgTGlzdEJ1dHRvbnNDb21wb25lbnQsIE11bHRpU2VsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFBhbmVsQnRuQ29tcG9uZW50LCBGaWVsZFBhbmVsQ29tcG9uZW50LCBTYXZlQnV0dG9uQ29tcG9uZW50LCBHcmlkUGFuZWxDb21wb25lbnQsIE1lbnVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJPVVRJTkcsXHJcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG5cclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlLCBQcm9maWxlU2VydmljZSwgUGhvdG9zU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBTdGVwU2VydmljZSwgQ29sbGVjdGlvblNlcnZpY2UsIFNhdmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgTWFpbFNlcnZpY2UsIEdyaWRQYW5lbFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4iXX0=
