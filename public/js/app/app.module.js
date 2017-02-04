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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QVUsRUFBRSxhQUFhO2dCQUNqQyxJQUFJLEVBQUUsQ0FBQywwQkFBVyxDQUFDO2dCQUN2QixLQUFLLEVBQUUsSUFBSSxFQUFDO1lBRUosc0NBQWlCLEVBQUUseUJBQVc7WUFDOUIsMEJBQVcsRUFBRSxvQ0FBZ0IsQ0FBQztLQUM3QyxDQUFDOzthQUFBO0FBQ1csaUJBQVMsWUFHckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcclxuXHJcblxyXG5pbXBvcnQge01haW5Db21wb25lbnR9IGZyb20gXCIuL3ZlaGljdWxlL21haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGVDb21wb25lbnR9IGZyb20gXCIuL3N0YXRlL3N0YXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQaG90b3NDb21wb25lbnR9IGZyb20gXCIuL3Bob3Rvcy9waG90b3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL3ZlaGljdWxlL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuc2VydmljZVwiO1xyXG5pbXBvcnQge1Bob3Rvc1NlcnZpY2V9IGZyb20gXCIuL3Bob3Rvcy9waG90b3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL3ZlaGljdWxlL2JhY2tCdXR0b25cIjtcclxuaW1wb3J0IHtMaXN0QnV0dG9uc0NvbXBvbmVudH0gZnJvbSBcIi4vdmVoaWN1bGUvbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vdmVoaWN1bGUvbXVsdGlwbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFuZWxCdG5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWxCdG5JbWdcIjtcclxuaW1wb3J0IHtGaWVsZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkUGFuZWxcIjtcclxuaW1wb3J0IHtTYXZlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVCdXR0b25cIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlU2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHNGaXJzdChfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICByZXR1cm4gKCkgPT4gX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKClcclxuICAgIC8vIC5zdWJzY3JpYmUoXHJcbiAgICAvLyAgIHN0ZXBSZXR1cm4gPT4ge1xyXG5cclxuICAgIC8vICAgICAgdCAgICAgaGlzLiBzdCAgIGVwcyA9IHN0ZXBSZXR1cm47XHJcblxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0ZXBSZXR1cm5cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGVwUmV0dXJuKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgIC8vIC8vIHRoaXMudG1wID0gc3RlcFJldHVybi5qc29uKCk7XHJcbiAgICAvLyAvLyB0aGkgICAgIHMuX3N0ZXBTZXJ2aWNlLnN0ZXAgPSB0aGlzLnRtcDtcclxuICAgIC8vIC8vXHJcbiAgICAvLyAvLyAvLyAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3RlcFJldHVybi5qc29uKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIC8vIC8vICAgICBjb25zb2xlIC4gbG9nKHN0ZXAgICBSZXR1cm4uanNvbigpWyAgaV0pO1xyXG4gICAgLy8gLy8gLy9cclxuICAgIC8vIC8vIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdCAgZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgLy8gLy8gLy8gfVxyXG4gICAgLy8gLy9cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbMF0pO1xyXG4gICAgLy8gLy9cclxuICAgIC8vIC8vIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzID0gdGhpcy50bXA7XHJcbiAgICAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbiAgICAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLnRtcCk7XHJcbiAgICAvLyAvKiBJRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBDT0xMRUNUSU9OIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAvLyBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIC8qICBJRiBBIExJU1QgRVhJU1RTIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAvLyBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgLy8gICAgIHRoaXMubGlzdHNEYXRhLnB1c2goe1xyXG4gICAgLy8gICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubmFtZSxcclxuICAgIC8vICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5saXN0c0RhdGEpO1xyXG4gICAgLy8gdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMgPSB0aGlzLmxpc3RzRGF0YS5zbGljZSgpO1xyXG4gICAgLy8gSU5JVElBVEUgRk9STSBTRVJWSUNFIFRPIHRoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuLy99KX1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50LCBNYWluQ29tcG9uZW50LFxyXG4gICAgICAgIFN0YXRlQ29tcG9uZW50LCBQaG90b3NDb21wb25lbnQsIFByb2ZpbGVDb21wb25lbnQsXHJcbiAgICAgICAgQmFja0J1dHRvbkNvbXBvbmVudCwgTGlzdEJ1dHRvbnNDb21wb25lbnQsIE11bHRpU2VsZWN0aW9uQ29tcG9uZW50LFxyXG4gICAgICAgIFBhbmVsQnRuQ29tcG9uZW50LCBGaWVsZFBhbmVsQ29tcG9uZW50LCBTYXZlQnV0dG9uQ29tcG9uZW50LCBHcmlkUGFuZWxDb21wb25lbnQsIE1lbnVDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJPVVRJTkcsXHJcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG5cclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxyXG4gICAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlLCBQcm9maWxlU2VydmljZSwgUGhvdG9zU2VydmljZSxcclxuICAgICAgICAgICAgICAgICBTdGVwU2VydmljZSxcclxuICAgICAgICB7IHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRTdGVwc0ZpcnN0LFxyXG4gICAgICAgICAgICBkZXBzOiBbU3RlcFNlcnZpY2VdLFxyXG4gICAgICAgIG11bHRpOiB0cnVlfSxcclxuXHJcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNYWlsU2VydmljZSwgR3JpZFBhbmVsU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbiJdfQ==
