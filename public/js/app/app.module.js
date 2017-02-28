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
                multi: true
            },
            collection_service_1.CollectionService, saveService_1.SaveService,
            mail_service_1.MailService, gridPanel_service_1.GridPanelService]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFhLEVBQUUsbUJBQVcsRUFBRSxxQkFBTztZQUNuQyxpQkFBVSxFQUFFLDJCQUFtQjtTQUVsQztRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7UUFDekIsU0FBUyxFQUFFLENBQUUsMEJBQVcsRUFBRSxnQ0FBYyxFQUFFLDhCQUFhO1lBQzFDLDBCQUFXO1lBQ1osRUFBSSxPQUFPLEVBQUUsc0JBQWU7Z0JBQ3hCLFVBQVUsRUFBRSxhQUFhO2dCQUN6QixJQUFJLEVBQUUsQ0FBQywwQkFBVyxDQUFDO2dCQUNuQixLQUFLLEVBQUUsSUFBSTthQUNkO1lBQ0Qsc0NBQWlCLEVBQUUseUJBQVc7WUFDOUIsMEJBQVcsRUFBRSxvQ0FBZ0IsQ0FBQztLQUM3QyxDQUFDOzthQUFBO0FBQ1csaUJBQVMsWUFHckIsQ0FBQSIsImZpbGUiOiJhcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQVBQX0lOSVRJQUxJWkVSfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG4vL2ltcG9ydCB7TmdiTW9kdWxlfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XHJcblxyXG5pbXBvcnQge0FwcENvbXBvbmVudH0gIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7SHR0cE1vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQge1JPVVRJTkd9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCJcclxuXHJcblxyXG5pbXBvcnQge01haW5Db21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvbWFpbi5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTdGF0ZUNvbXBvbmVudH0gZnJvbSBcIi4vc3RhdGUvc3RhdGUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7UHJvZmlsZUNvbXBvbmVudH0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge1Bob3Rvc0NvbXBvbmVudH0gZnJvbSBcIi4vcGhvdG9zL3Bob3Rvcy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQcm9maWxlU2VydmljZX0gZnJvbSBcIi4vcHJvZmlsZS9wcm9maWxlLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtQaG90b3NTZXJ2aWNlfSBmcm9tIFwiLi9waG90b3MvcGhvdG9zLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtCYWNrQnV0dG9uQ29tcG9uZW50fSBmcm9tIFwiLi9jb21vbmVudHMvYmFja0J1dHRvblwiO1xyXG5pbXBvcnQge0xpc3RCdXR0b25zQ29tcG9uZW50fSBmcm9tIFwiLi9jb21vbmVudHMvbGlzdEJ1dHRvbnNcIjtcclxuaW1wb3J0IHtNdWx0aVNlbGVjdGlvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tb25lbnRzL211bHRpcGxlU2VsZWN0aW9uXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtDb2xsZWN0aW9uU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZVwiO1xyXG5pbXBvcnQge1BhbmVsQnRuQ29tcG9uZW50fSBmcm9tIFwiLi9jb21wb25lbnRzL3BhbmVsQnRuSW1nXCI7XHJcbmltcG9ydCB7RmllbGRQYW5lbENvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9maWVsZFBhbmVsXCI7XHJcbmltcG9ydCB7U2F2ZUJ1dHRvbkNvbXBvbmVudH0gZnJvbSBcIi4vY29tcG9uZW50cy9zYXZlQnV0dG9uXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvc2F2ZVNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxDb21wb25lbnR9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtNZW51Q29tcG9uZW50fSBmcm9tIFwiLi9tZW51L21lbnUuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TWFpbFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9tYWlsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHthc3NldFVybH0gZnJvbSBcIkBhbmd1bGFyL2NvbXBpbGVyL3NyYy9pZGVudGlmaWVyc1wiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwc0ZpcnN0KF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHtcclxuICAgIGxldCBhcHBOYW1lID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeKD86LipbJlxcXFw/XVwiICsgJ2FwcCcucmVwbGFjZSgvW1xcLlxcK1xcKl0vZywgXCJcXFxcJCZcIikgKyBcIig/OlxcXFw9KFteJl0qKSk/KT8uKiRcIiwgXCJpXCIpLCBcIiQxXCIpO1xyXG4gICAgcmV0dXJuICgpID0+IF9zdGVwU2VydmljZS5nZXRTdGVwcyhhcHBOYW1lKVxyXG4gICAgLy8gLnN1YnNjcmliZShcclxuICAgIC8vICAgc3RlcFJldHVybiA9PiB7XHJcblxyXG4gICAgLy8gICAgICB0ICAgICBoaXMuIHN0ICAgZXBzID0gc3RlcFJldHVybjtcclxuXHJcblxyXG4gICAgLy9cclxuICAgIC8vIGNvbnNvbGUubG9nKFwic3RlcFJldHVyblwiKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0ZXBSZXR1cm4pO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4gICAgLy8gLy8gdGhpcy50bXAgPSBzdGVwUmV0dXJuLmpzb24oKTtcclxuICAgIC8vIC8vIHRoaSAgICAgcy5fc3RlcFNlcnZpY2Uuc3RlcCA9IHRoaXMudG1wO1xyXG4gICAgLy8gLy9cclxuICAgIC8vIC8vIC8vICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzdGVwUmV0dXJuLmpzb24oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gLy8gLy8gICAgIGNvbnNvbGUgLiBsb2coc3RlcCAgIFJldHVybi5qc29uKClbICBpXSk7XHJcbiAgICAvLyAvLyAvL1xyXG4gICAgLy8gLy8gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ICBlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAvLyAvLyAvLyB9XHJcbiAgICAvLyAvL1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXSk7XHJcbiAgICAvLyAvL1xyXG4gICAgLy8gLy8gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMgPSB0aGlzLnRtcDtcclxuICAgIC8vIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgIC8vIC8vIGNvbnNvbGUubG9nKHRoaXMudG1wKTtcclxuICAgIC8vIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gLyogIElGIEEgTElTVCBFWElTVFMgSU4gQ09ORklHIEZJTEUgKi9cclxuICAgIC8vIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbiAgICAvLyAgICAgdGhpcy5saXN0c0RhdGEucHVzaCh7XHJcbiAgICAvLyAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5uYW1lLFxyXG4gICAgLy8gICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3RzRGF0YSk7XHJcbiAgICAvLyB0aGlzLl9zdGVwU2VydmljZS5kYXRhcyA9IHRoaXMubGlzdHNEYXRhLnNsaWNlKCk7XHJcbiAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gdGhpcy5fZm9ybVNlcnZpY2UuaW5pdCgpO1xyXG4vL30pfVxyXG59XHJcbkBOZ01vZHVsZSh7XHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsIE1haW5Db21wb25lbnQsXHJcbiAgICAgICAgU3RhdGVDb21wb25lbnQsIFBob3Rvc0NvbXBvbmVudCwgUHJvZmlsZUNvbXBvbmVudCxcclxuICAgICAgICBCYWNrQnV0dG9uQ29tcG9uZW50LCBMaXN0QnV0dG9uc0NvbXBvbmVudCwgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQsXHJcbiAgICAgICAgUGFuZWxCdG5Db21wb25lbnQsIEZpZWxkUGFuZWxDb21wb25lbnQsIFNhdmVCdXR0b25Db21wb25lbnQsIEdyaWRQYW5lbENvbXBvbmVudCwgTWVudUNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLCBGb3Jtc01vZHVsZSwgUk9VVElORyxcclxuICAgICAgICBIdHRwTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXHJcblxyXG4gICAgXSxcclxuICAgIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFsgRm9ybVNlcnZpY2UsIFByb2ZpbGVTZXJ2aWNlLCBQaG90b3NTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgIFN0ZXBTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgeyAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcclxuICAgICAgICAgICAgICAgICAgICB1c2VGYWN0b3J5OiBnZXRTdGVwc0ZpcnN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHM6IFtTdGVwU2VydmljZV0sXHJcbiAgICAgICAgICAgICAgICAgICAgbXVsdGk6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBDb2xsZWN0aW9uU2VydmljZSwgU2F2ZVNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBNYWlsU2VydmljZSwgR3JpZFBhbmVsU2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcbiJdfQ==
