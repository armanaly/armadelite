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

//# sourceMappingURL=data:application/json;base64,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QUFVLEVBQUUsMkJBQW1CO1NBQ2xDO1FBR0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztRQUV6QixTQUFTLEVBQUUsQ0FBRSwwQkFBVyxFQUFFLDBCQUFXO1lBQ3pCLEVBQUksT0FBTyxFQUFFLHNCQUFlO2dCQUN4QixVQUFVLEVBQUUsYUFBYTtnQkFDekIsSUFBSSxFQUFFLENBQUMsMEJBQVcsQ0FBQztnQkFDbkIsS0FBSyxFQUFFLElBQUk7YUFDZDtZQUNELHlHQUF5RztZQUN6RyxzQ0FBaUIsRUFBRSx5QkFBVyxFQUFFLHNDQUFpQjtZQUNqRCwwQkFBVyxFQUFFLG9DQUFnQixDQUFDO0tBQzdDLENBQUM7O2FBQUE7QUFDVyxpQkFBUyxZQUdyQixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIEFQUF9JTklUSUFMSVpFUn0gICAgICBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuLy9pbXBvcnQge05nYk1vZHVsZX0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5cclxuaW1wb3J0IHtBcHBDb21wb25lbnR9ICBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQge0h0dHBNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9ICAgZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHtST1VUSU5HfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiXHJcblxyXG5cclxuaW1wb3J0IHtNYWluQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL21haW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7U3RhdGVDb21wb25lbnR9IGZyb20gXCIuL3N0YXRlL3N0YXRlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Byb2ZpbGVDb21wb25lbnR9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtQaG90b3NDb21wb25lbnR9IGZyb20gXCIuL3Bob3Rvcy9waG90b3MuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7UHJvZmlsZVNlcnZpY2V9IGZyb20gXCIuL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlXCI7XHJcbi8vIGltcG9ydCB7UGhvdG9zU2VydmljZX0gZnJvbSBcIi4vcGhvdG9zL3Bob3Rvcy5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QmFja0J1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9iYWNrQnV0dG9uXCI7XHJcbmltcG9ydCB7TGlzdEJ1dHRvbnNDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9tdWx0aXBsZVNlbGVjdGlvblwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQYW5lbEJ0bkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9wYW5lbEJ0bkltZ1wiO1xyXG5pbXBvcnQge0ZpZWxkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmllbGRQYW5lbFwiO1xyXG5pbXBvcnQge1NhdmVCdXR0b25Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZUJ1dHRvblwiO1xyXG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL3NhdmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWRQYW5lbC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4vbWVudS9tZW51LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge01haWxTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvbWFpbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7YXNzZXRVcmx9IGZyb20gXCJAYW5ndWxhci9jb21waWxlci9zcmMvaWRlbnRpZmllcnNcIjtcclxuLy8gaW1wb3J0IHtGaWxlVXBsb2FkU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2VcIjtcclxuLy8gaW1wb3J0IHtOZzJDbG91ZGluYXJ5TW9kdWxlfSBmcm9tIFwibmcyLWNsb3VkaW5hcnlcIjtcclxuaW1wb3J0IHsgTmcyQ2xvdWRpbmFyeU1vZHVsZSB9IGZyb20gJ25nMi1jbG91ZGluYXJ5JztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ25nMi1maWxlLXVwbG9hZCc7XHJcbi8vIGltcG9ydCB7IENsb3VkaW5hcnkgfSBmcm9tICdjbG91ZGluYXJ5LWNvcmUnO1xyXG4vLyBpbXBvcnQgeyBDbG91ZGluYXJ5TW9kdWxlLCBDbG91ZGluYXJ5Q29uZmlndXJhdGlvbiB9IGZyb20gJ0BjbG91ZGluYXJ5L2FuZ3VsYXInO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZmlsZVVwbG9hZFwiO1xyXG5pbXBvcnQge0ZpbGVVcGxvYWRTZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2ZpbGVVcGxvYWQuc2VydmljZVwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwc0ZpcnN0KF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHtcclxuICAgIGxldCBhcHBOYW1lID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeKD86LipbJlxcXFw/XVwiICsgJ2FwcCcucmVwbGFjZSgvW1xcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIig/OlxcXFw9KFteJl0qKSk/KT8uKiRcIiwgXCJpXCIpLCBcIiQxXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IF9zdGVwU2VydmljZS5nZXRTdGVwcyhhcHBOYW1lKVxyXG4gICAgLy8gLnN1YnNjcmliZShcclxuICAgIC8vICAgc3RlcFJldHVybiA9PiB7XHJcblxyXG4gICAgLy8gICAgICB0ICAgICBoaXMuIHN0ICAgZXBzID0gc3RlcFJldHVybjtcclxuXHJcblxyXG4gICAgLy9cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RlcFJldHVyblwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0ZXBSZXR1cm4pO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgLy8gLy8gdGhpcy50bXAgPSBzdGVwUmV0dXJuLmpzb24oKTtcclxuICAgIC8vIC8vIHRoaSAgICAgcy5fc3RlcFNlcnZpY2Uuc3RlcCA9IHRoaXMudG1wO1xyXG4gICAgLy8gLy9cclxuICAgIC8vIC8vIC8vICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzdGVwUmV0dXJuLmpzb24oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gLy8gLy8gICAgIGNvbnNvbGUgLiBsb2coc3RlcCAgIFJldHVybi5qc29uKClbICBpXSk7XHJcbiAgICAvLyAvLyAvL1xyXG4gICAgLy8gLy8gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ICBlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAvLyAvLyAvLyB9XHJcbiAgICAvLyAvL1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXSk7XHJcbiAgICAvLyAvL1xyXG4gICAgLy8gLy8gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMgPSB0aGlzLnRtcDtcclxuICAgIC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgIC8vIC8vIGNvbnNvbGUubG9nKHRoaXMudG1wKTtcclxuICAgIC8vIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gLyogIElGIEEgTElTVCBFWElTVFMgSU4gQ09ORklHIEZJTEUgKi9cclxuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAvLyAgICAgdGhpcy5saXN0c0RhdGEucHVzaCh7XHJcbiAgICAvLyAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5uYW1lLFxyXG4gICAgLy8gICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vICwgTmcyQ2xvdWRpbmFyeU1vZHVsZSwgRmlsZVVwbG9hZE1vZHVsZSAgLCAgLCBGaWxlVXBsb2FkU2VydmljZVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdHNEYXRhKTtcclxuICAgIC8vIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuICAgIC8vIElOSVRJQVRFIEZPUk0gU0VSVklDRSBUTyB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbi8vfSl9XHJcbn1cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCwgTWFpbkNvbXBvbmVudCxcclxuICAgICAgICAvLyBTdGF0ZUNvbXBvbmVudCwgUGhvdG9zQ29tcG9uZW50LCBQcm9maWxlQ29tcG9uZW50LFxyXG4gICAgICAgIEJhY2tCdXR0b25Db21wb25lbnQsIExpc3RCdXR0b25zQ29tcG9uZW50LCBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCxcclxuICAgICAgICBQYW5lbEJ0bkNvbXBvbmVudCwgRmllbGRQYW5lbENvbXBvbmVudCwgU2F2ZUJ1dHRvbkNvbXBvbmVudCxcclxuICAgICAgICBHcmlkUGFuZWxDb21wb25lbnQsIE1lbnVDb21wb25lbnQsIEZpbGVVcGxvYWRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJPVVRJTkcsXHJcbiAgICAgICAgSHR0cE1vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcclxuXHJcbiAgICBwcm92aWRlcnM6IFsgRm9ybVNlcnZpY2UsIFN0ZXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRTdGVwc0ZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTdGVwU2VydmljZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBwcm92aWRlQ2xvdWRpbmFyeShyZXF1aXJlKCdjbG91ZGluYXJ5LWNvcmUnKSwgeyBjbG91ZF9uYW1lOiAnaGF2amNxcHB2JyB9IGFzIENsb3VkaW5hcnlDb25maWd1cmF0aW9uKSxcclxuICAgICAgICAgICAgICAgIENvbGxlY3Rpb25TZXJ2aWNlLCBTYXZlU2VydmljZSwgRmlsZVVwbG9hZFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNYWlsU2VydmljZSwgR3JpZFBhbmVsU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
