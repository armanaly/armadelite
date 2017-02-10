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
const main_component_1 = require("./components/main.component");
const state_component_1 = require("./state/state.component");
const profile_component_1 = require("./profile/profile.component");
const photos_component_1 = require("./photos/photos.component");
const form_service_1 = require("./components/form.service");
const profile_service_1 = require("./profile/profile.service");
const photos_service_1 = require("./photos/photos.service");
const backButton_1 = require("./comonents/backButton");
const listButtons_1 = require("./comonents/listButtons");
const multipleSelection_1 = require("./comonents/multipleSelection");
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
function getStepsFirst(_stepService) {
    return () => _stepService.getSteps();
    // .subscribe(
    //   stepReturn => {
    //      t     his. st   eps = stepReturn;
    //
    // console.log("stepReturn");
    // console.log(stepReturn);
    // console.log(this._stepService.steps);
    // // this.tmp = stepReturn.json();
    // // thi     s._stepService.step = this.tmp;
    // //
    // // //  for ( let i = 0; i < stepReturn.json().length; i++) {
    // // //     console . log(step   Return.json()[  i]);
    // // //
    // // //     console.log(this._st  epService.step);
    // // // }
    // //
    // console.log(this._stepService.step[0]);
    // //
    // // this._stepService.steps = this.tmp;
    // // console.log(this._stepService.steps);
    // // console.log(this.tmp);
    // /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
    // if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
    // }
    //
    // /*  IF A LIST EXISTS IN CONFIG FILE */
    // if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
    //     this.lists.push(this._stepService.steps[0].configuration.list);
    //     this.listsData.push({
    //         "name": this._stepService.steps[0].name,
    //         "list": this._stepService.steps[0].configuration.list
    //     });
    // }
    // console.log(this.listsData);
    // this._stepService.datas = this.listsData.slice();
    // INITIATE FORM SERVICE TO this._formService.init();
    //})}
}
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
            step_service_1.StepService,
            { provide: core_1.APP_INITIALIZER,
                useFactory: getStepsFirst,
                deps: [step_service_1.StepService],
                multi: true },
            collection_service_1.CollectionService, saveService_1.SaveService,
            mail_service_1.MailService, gridPanel_service_1.GridPanelService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QVUsRUFBRSxhQUFhO2dCQUNqQyxJQUFJLEVBQUUsQ0FBQywwQkFBVyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsSUFBSSxFQUFDO1lBRUosc0NBQWlCLEVBQUUseUJBQVc7WUFDOUIsMEJBQVcsRUFBRSxvQ0FBZ0IsQ0FBQztLQUM3QyxDQUFDOzthQUFBO0FBQ1csaUJBQVMsWUFHckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcclxuXHJcblxyXG5pbXBvcnQge01haW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdGF0ZUNvbXBvbmVudH0gZnJvbSBcIi4vc3RhdGUvc3RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Bob3Rvc0NvbXBvbmVudH0gZnJvbSBcIi4vcGhvdG9zL3Bob3Rvcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQaG90b3NTZXJ2aWNlfSBmcm9tIFwiLi9waG90b3MvcGhvdG9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21vbmVudHMvYmFja0J1dHRvblwiO1xyXG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21vbmVudHMvbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tb25lbnRzL211bHRpcGxlU2VsZWN0aW9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1BhbmVsQnRuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsQnRuSW1nXCI7XHJcbmltcG9ydCB7RmllbGRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZFBhbmVsXCI7XHJcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzRmlyc3QoX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xyXG4gICAgcmV0dXJuICgpID0+IF9zdGVwU2VydmljZS5nZXRTdGVwcygpXHJcbiAgICAvLyAuc3Vic2NyaWJlKFxyXG4gICAgLy8gICBzdGVwUmV0dXJuID0+IHtcclxuXHJcbiAgICAvLyAgICAgIHQgICAgIGhpcy4gc3QgICBlcHMgPSBzdGVwUmV0dXJuO1xyXG5cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzdGVwUmV0dXJuXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3RlcFJldHVybik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbiAgICAvLyAvLyB0aGlzLnRtcCA9IHN0ZXBSZXR1cm4uanNvbigpO1xyXG4gICAgLy8gLy8gdGhpICAgICBzLl9zdGVwU2VydmljZS5zdGVwID0gdGhpcy50bXA7XHJcbiAgICAvLyAvL1xyXG4gICAgLy8gLy8gLy8gIGZvciAoIGxldCBpID0gMDsgaSA8IHN0ZXBSZXR1cm4uanNvbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAvLyAvLyAgICAgY29uc29sZSAuIGxvZyhzdGVwICAgUmV0dXJuLmpzb24oKVsgIGldKTtcclxuICAgIC8vIC8vIC8vXHJcbiAgICAvLyAvLyAvLyAgICAgY29uc29sZS5sb2codGhpcy5fc3QgIGVwU2VydmljZS5zdGVwKTtcclxuICAgIC8vIC8vIC8vIH1cclxuICAgIC8vIC8vXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwWzBdKTtcclxuICAgIC8vIC8vXHJcbiAgICAvLyAvLyB0aGlzLl9zdGVwU2VydmljZS5zdGVwcyA9IHRoaXMudG1wO1xyXG4gICAgLy8gLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgLy8gLy8gY29uc29sZS5sb2codGhpcy50bXApO1xyXG4gICAgLy8gLyogSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgQ09MTEVDVElPTiBJTiBDT05GSUcgRklMRSAqL1xyXG4gICAgLy8gaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmNvbGxlY3Rpb24gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIH1cclxuICAgIC8vXHJcbiAgICAvLyAvKiAgSUYgQSBMSVNUIEVYSVNUUyBJTiBDT05GSUcgRklMRSAqL1xyXG4gICAgLy8gaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgIC8vICAgICB0aGlzLmxpc3RzRGF0YS5wdXNoKHtcclxuICAgIC8vICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm5hbWUsXHJcbiAgICAvLyAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdHNEYXRhKTtcclxuICAgIC8vIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuICAgIC8vIElOSVRJQVRFIEZPUk0gU0VSVklDRSBUTyB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbi8vfSl9XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCwgTWFpbkNvbXBvbmVudCxcclxuICAgICAgICBTdGF0ZUNvbXBvbmVudCwgUGhvdG9zQ29tcG9uZW50LCBQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsIExpc3RCdXR0b25zQ29tcG9uZW50LCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBQYW5lbEJ0bkNvbXBvbmVudCwgRmllbGRQYW5lbENvbXBvbmVudCwgU2F2ZUJ1dHRvbkNvbXBvbmVudCwgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBST1VUSU5HLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuXHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogWyBGb3JtU2VydmljZSwgUHJvZmlsZVNlcnZpY2UsIFBob3Rvc1NlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICAgU3RlcFNlcnZpY2UsXHJcbiAgICAgICAgeyBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0U3RlcHNGaXJzdCxcclxuICAgICAgICAgICAgZGVwczogW1N0ZXBTZXJ2aWNlXSxcclxuICAgICAgICBtdWx0aTogdHJ1ZX0sXHJcblxyXG4gICAgICAgICAgICAgICAgQ29sbGVjdGlvblNlcnZpY2UsIFNhdmVTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgTWFpbFNlcnZpY2UsIEdyaWRQYW5lbFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4iXX0=
