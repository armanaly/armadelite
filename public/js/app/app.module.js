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
const form_service_1 = require("./components/form.service");
// import {ProfileService} from "./profile/profile.service";
// import {PhotosService} from "./photos/photos.service";
const backButton_1 = require("./components/backButton");
const listButtons_1 = require("./components/listButtons");
const multipleSelection_1 = require("./components/multipleSelection");
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
// import { Cloudinary } from 'cloudinary-core';
// import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular';
const fileUpload_1 = require("./components/fileUpload");
const fileUpload_service_1 = require("./components/fileUpload.service");
function getStepsFirst(_stepService) {
    let appName = window.location.search.replace(new RegExp("^(?:.*[&\\?]" + 'app'.replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");
    return () => _stepService.getSteps(appName);
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
    // , Ng2CloudinaryModule, FileUploadModule  ,  , FileUploadService
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
            // StateComponent, PhotosComponent, ProfileComponent,
            backButton_1.BackButtonComponent, listButtons_1.ListButtonsComponent, multipleSelection_1.MultiSelectionComponent,
            panelBtnImg_1.PanelBtnComponent, fieldPanel_1.FieldPanelComponent, saveButton_1.SaveButtonComponent,
            gridPanel_component_1.GridPanelComponent, menu_component_1.MenuComponent, fileUpload_1.FileUploadComponent
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
            // provideCloudinary(require('cloudinary-core'), { cloud_name: 'havjcqppv' } as CloudinaryConfiguration),
            collection_service_1.CollectionService, saveService_1.SaveService, fileUpload_service_1.FileUploadService,
            mail_service_1.MailService, gridPanel_service_1.GridPanelService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;base64,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QUFVLEVBQUUsMkJBQW1CO1NBQ2xDO1FBR0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUV6QixTQUFTLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLDBCQUFXO1lBQ3pCLEVBQUksT0FBTyxFQUFFLHNCQUFlO2dCQUN4QixVQUFVLEVBQUUsYUFBYTtnQkFDekIsSUFBSSxFQUFFLENBQUMsMEJBQVcsQ0FBQztnQkFDbkIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELHlHQUF5RztZQUN6RyxzQ0FBaUIsRUFBRSx5QkFBVyxFQUFFLHNDQUFpQjtZQUNqRCwwQkFBVyxFQUFFLG9DQUFnQixDQUFDO0tBQzdDLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBBUFBfSU5JVElBTElaRVJ9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbi8vaW1wb3J0IHtOZ2JNb2R1bGV9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbmltcG9ydCB7QXBwQ29tcG9uZW50fSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHtIdHRwTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0Zvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSAgIGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7Uk9VVElOR30gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIlxyXG5cclxuXHJcbmltcG9ydCB7TWFpbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tYWluLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1N0YXRlQ29tcG9uZW50fSBmcm9tIFwiLi9zdGF0ZS9zdGF0ZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQcm9maWxlQ29tcG9uZW50fSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UGhvdG9zQ29tcG9uZW50fSBmcm9tIFwiLi9waG90b3MvcGhvdG9zLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG4vLyBpbXBvcnQge1Byb2ZpbGVTZXJ2aWNlfSBmcm9tIFwiLi9wcm9maWxlL3Byb2ZpbGUuc2VydmljZVwiO1xyXG4vLyBpbXBvcnQge1Bob3Rvc1NlcnZpY2V9IGZyb20gXCIuL3Bob3Rvcy9waG90b3Muc2VydmljZVwiO1xyXG5pbXBvcnQge0JhY2tCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvYmFja0J1dHRvblwiO1xyXG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2xpc3RCdXR0b25zXCI7XHJcbmltcG9ydCB7TXVsdGlTZWxlY3Rpb25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb25cIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7UGFuZWxCdG5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvcGFuZWxCdG5JbWdcIjtcclxuaW1wb3J0IHtGaWVsZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpZWxkUGFuZWxcIjtcclxuaW1wb3J0IHtTYXZlQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVCdXR0b25cIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlU2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge01lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnUvbWVudS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtNYWlsU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL21haWwuc2VydmljZVwiO1xyXG5pbXBvcnQge2Fzc2V0VXJsfSBmcm9tIFwiQGFuZ3VsYXIvY29tcGlsZXIvc3JjL2lkZW50aWZpZXJzXCI7XHJcbi8vIGltcG9ydCB7RmlsZVVwbG9hZFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZC5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7TmcyQ2xvdWRpbmFyeU1vZHVsZX0gZnJvbSBcIm5nMi1jbG91ZGluYXJ5XCI7XHJcbmltcG9ydCB7IE5nMkNsb3VkaW5hcnlNb2R1bGUgfSBmcm9tICduZzItY2xvdWRpbmFyeSc7XHJcbmltcG9ydCB7IEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICduZzItZmlsZS11cGxvYWQnO1xyXG4vLyBpbXBvcnQgeyBDbG91ZGluYXJ5IH0gZnJvbSAnY2xvdWRpbmFyeS1jb3JlJztcclxuLy8gaW1wb3J0IHsgQ2xvdWRpbmFyeU1vZHVsZSwgQ2xvdWRpbmFyeUNvbmZpZ3VyYXRpb24gfSBmcm9tICdAY2xvdWRpbmFyeS9hbmd1bGFyJztcclxuaW1wb3J0IHtGaWxlVXBsb2FkQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWRcIjtcclxuaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2VcIjtcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHNGaXJzdChfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICBsZXQgYXBwTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZShuZXcgUmVnRXhwKFwiXig/Oi4qWyZcXFxcP11cIiArICdhcHAnLnJlcGxhY2UoL1tcXC5cXCtcXCpdL2csIFwiXFxcXCQmXCIpICsgXCIoPzpcXFxcPShbXiZdKikpPyk/LiokXCIsIFwiaVwiKSwgXCIkMVwiKTtcclxuICAgIHJldHVybiAoKSA9PiBfc3RlcFNlcnZpY2UuZ2V0U3RlcHMoYXBwTmFtZSlcclxuICAgIC8vIC5zdWJzY3JpYmUoXHJcbiAgICAvLyAgIHN0ZXBSZXR1cm4gPT4ge1xyXG5cclxuICAgIC8vICAgICAgdCAgICAgaGlzLiBzdCAgIGVwcyA9IHN0ZXBSZXR1cm47XHJcblxyXG5cclxuICAgIC8vXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0ZXBSZXR1cm5cIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdGVwUmV0dXJuKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgIC8vIC8vIHRoaXMudG1wID0gc3RlcFJldHVybi5qc29uKCk7XHJcbiAgICAvLyAvLyB0aGkgICAgIHMuX3N0ZXBTZXJ2aWNlLnN0ZXAgPSB0aGlzLnRtcDtcclxuICAgIC8vIC8vXHJcbiAgICAvLyAvLyAvLyAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3RlcFJldHVybi5qc29uKCkubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vIC8vIC8vICAgICBjb25zb2xlIC4gbG9nKHN0ZXAgICBSZXR1cm4uanNvbigpWyAgaV0pO1xyXG4gICAgLy8gLy8gLy9cclxuICAgIC8vIC8vIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdCAgZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgLy8gLy8gLy8gfVxyXG4gICAgLy8gLy9cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbMF0pO1xyXG4gICAgLy8gLy9cclxuICAgIC8vIC8vIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzID0gdGhpcy50bXA7XHJcbiAgICAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbiAgICAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLnRtcCk7XHJcbiAgICAvLyAvKiBJRiBEQVRBIEFSRSBTVE9SRUQgSU4gQSBDT0xMRUNUSU9OIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAvLyBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gfVxyXG4gICAgLy9cclxuICAgIC8vIC8qICBJRiBBIExJU1QgRVhJU1RTIElOIENPTkZJRyBGSUxFICovXHJcbiAgICAvLyBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgLy8gICAgIHRoaXMubGlzdHNEYXRhLnB1c2goe1xyXG4gICAgLy8gICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubmFtZSxcclxuICAgIC8vICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAvLyAsIE5nMkNsb3VkaW5hcnlNb2R1bGUsIEZpbGVVcGxvYWRNb2R1bGUgICwgICwgRmlsZVVwbG9hZFNlcnZpY2VcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3RzRGF0YSk7XHJcbiAgICAvLyB0aGlzLl9zdGVwU2VydmljZS5kYXRhcyA9IHRoaXMubGlzdHNEYXRhLnNsaWNlKCk7XHJcbiAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gdGhpcy5fZm9ybVNlcnZpY2UuaW5pdCgpO1xyXG4vL30pfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsIE1haW5Db21wb25lbnQsXHJcbiAgICAgICAgLy8gU3RhdGVDb21wb25lbnQsIFBob3Rvc0NvbXBvbmVudCwgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LCBMaXN0QnV0dG9uc0NvbXBvbmVudCwgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsXHJcbiAgICAgICAgR3JpZFBhbmVsQ29tcG9uZW50LCBNZW51Q29tcG9uZW50LCBGaWxlVXBsb2FkQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIEJyb3dzZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBST1VUSU5HLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVcclxuICAgIF0sXHJcblxyXG5cclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcblxyXG4gICAgcHJvdmlkZXJzOiBbIEZvcm1TZXJ2aWNlLCBTdGVwU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHsgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0U3RlcHNGaXJzdCxcclxuICAgICAgICAgICAgICAgICAgICBkZXBzOiBbU3RlcFNlcnZpY2VdLFxyXG4gICAgICAgICAgICAgICAgICAgIG11bHRpOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLy8gcHJvdmlkZUNsb3VkaW5hcnkocmVxdWlyZSgnY2xvdWRpbmFyeS1jb3JlJyksIHsgY2xvdWRfbmFtZTogJ2hhdmpjcXBwdicgfSBhcyBDbG91ZGluYXJ5Q29uZmlndXJhdGlvbiksXHJcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsIEZpbGVVcGxvYWRTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgTWFpbFNlcnZpY2UsIEdyaWRQYW5lbFNlcnZpY2VdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xyXG4gICAgXHJcblxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
