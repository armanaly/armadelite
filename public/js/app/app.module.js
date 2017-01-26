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
const saveButtonService_1 = require("./components/saveButtonService");
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
            step_service_1.StepService, collection_service_1.CollectionService, saveButtonService_1.SaveButtonService,
            mail_service_1.MailService, gridPanel_service_1.GridPanelService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE0QixlQUFlLENBQUMsQ0FBQTtBQUM1QyxtQ0FBNEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN4RCx1REFBdUQ7QUFFdkQsZ0NBQTRCLGlCQUFpQixDQUFDLENBQUE7QUFDOUMsdUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLHdCQUFpRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBRWxFLDhCQUFzQixlQUd0QixDQUFDLENBSG9DO0FBR3JDLGlDQUE0QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3hELGtDQUE2Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3ZELG9DQUErQiw2QkFBNkIsQ0FBQyxDQUFBO0FBQzdELG1DQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELCtCQUEwQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3BELGtDQUE2QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3pELGlDQUE0Qix5QkFBeUIsQ0FBQyxDQUFBO0FBQ3RELDZCQUFrQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzFELDhCQUFtQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQzVELG9DQUFzQyw4QkFBOEIsQ0FBQyxDQUFBO0FBQ3JFLCtCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2xELHFDQUFnQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQzlELDhCQUFnQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzNELDZCQUFrQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzVELDZCQUFrQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzVELG9DQUFnQyxnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2pFLHNDQUFpQyxrQ0FBa0MsQ0FBQyxDQUFBO0FBQ3BFLG9DQUErQixnQ0FBZ0MsQ0FBQyxDQUFBO0FBQ2hFLGlDQUE0Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ3BELCtCQUEwQix1QkFBdUIsQ0FBQyxDQUFBO0FBa0JsRDtBQUdBLENBQUM7QUFwQkQ7SUFBQyxlQUFRLENBQUM7UUFDTixZQUFZLEVBQUU7WUFDViw0QkFBWSxFQUFFLDhCQUFhO1lBQzNCLGdDQUFjLEVBQUUsa0NBQWUsRUFBRSxvQ0FBZ0I7WUFDakQsZ0NBQW1CLEVBQUUsa0NBQW9CLEVBQUUsMkNBQXVCO1lBQ2xFLCtCQUFpQixFQUFFLGdDQUFtQixFQUFFLGdDQUFtQixFQUFFLHdDQUFrQixFQUFFLDhCQUFhO1NBQ2pHO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsZ0NBQWEsRUFBRSxtQkFBVyxFQUFFLHFCQUFPO1lBQ25DLGlCQUFVLEVBQUUsMkJBQW1CO1NBRWxDO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUN6QixTQUFTLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLGdDQUFjLEVBQUUsOEJBQWE7WUFDMUMsMEJBQVcsRUFBRSxzQ0FBaUIsRUFBRSxxQ0FBaUI7WUFDbEQsMEJBQVcsRUFBRSxvQ0FBZ0IsQ0FBQztLQUM3QyxDQUFDOzthQUFBO0FBQ1csaUJBQVMsWUFHckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuLy9pbXBvcnQge05nYk1vZHVsZX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtST1VUSU5HfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiXHJcblxyXG5cclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tIFwiLi92ZWhpY3VsZS9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0YXRlQ29tcG9uZW50fSBmcm9tIFwiLi9zdGF0ZS9zdGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGhvdG9zQ29tcG9uZW50fSBmcm9tIFwiLi9waG90b3MvcGhvdG9zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQaG90b3NTZXJ2aWNlfSBmcm9tIFwiLi9waG90b3MvcGhvdG9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi92ZWhpY3VsZS9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7TGlzdEJ1dHRvbnNDb21wb25lbnR9IGZyb20gXCIuL3ZlaGljdWxlL2xpc3RCdXR0b25zXCI7XHJcbmltcG9ydCB7TXVsdGlTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL3ZlaGljdWxlL211bHRpcGxlU2VsZWN0aW9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1BhbmVsQnRuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsQnRuSW1nXCI7XHJcbmltcG9ydCB7RmllbGRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZFBhbmVsXCI7XHJcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XHJcbmltcG9ydCB7U2F2ZUJ1dHRvblNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZUJ1dHRvblNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCwgTWFpbkNvbXBvbmVudCxcclxuICAgICAgICBTdGF0ZUNvbXBvbmVudCwgUGhvdG9zQ29tcG9uZW50LCBQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsIExpc3RCdXR0b25zQ29tcG9uZW50LCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBQYW5lbEJ0bkNvbXBvbmVudCwgRmllbGRQYW5lbENvbXBvbmVudCwgU2F2ZUJ1dHRvbkNvbXBvbmVudCwgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBST1VUSU5HLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogWyBGb3JtU2VydmljZSwgUHJvZmlsZVNlcnZpY2UsIFBob3Rvc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgU3RlcFNlcnZpY2UsIENvbGxlY3Rpb25TZXJ2aWNlLCBTYXZlQnV0dG9uU2VydmljZSxcclxuICAgICAgICAgICAgICAgIE1haWxTZXJ2aWNlLCBHcmlkUGFuZWxTZXJ2aWNlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcclxuICAgIFxyXG5cclxufVxyXG5cclxuIl19
