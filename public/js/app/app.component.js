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
const step_service_1 = require("./Engine/step.service");
const form_service_1 = require("./vehicule/form.service");
//i                   mport {Mar     queService} from "./marque/marque.service";
//i                                           mport      v {Mar     queService} from "./marque/marque.service";
//i                   ;,                                                 mport {Marque} from "./marque/marque";
let AppComponent = class AppComponent {
    constructor(_formService, _stepService) {
        this._formService = _formService;
        this._stepService = _stepService;
        this.lists = [];
        this.listsData = [];
        this.tmp = [];
    }
    ngOnInit() {
        console.log('appComponent');
        this._stepService.getSteps()
            .subscribe(stepReturn => {
            //      t     his. st   eps = stepReturn;
            console.log("stepReturn");
            console.log(stepReturn);
            console.log(this._stepService.steps);
            // this.tmp = stepReturn.json();
            // this._stepService.step = this.tmp;
            //
            // // for ( let i = 0; i < stepReturn.json().length; i++) {
            // //     console . log(step   Return.json()[  i]);
            // //
            // //     console.log(this._st  epService.step);
            // // }
            //
            console.log(this._stepService.step[0]);
            //
            // this._stepService.steps = this.tmp;
            // console.log(this._stepService.steps);
            // console.log(this.tmp);
            /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
            if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
            }
            /*  IF A LIST EXISTS IN CONFIG FILE */
            if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
                this.lists.push(this._stepService.steps[0].configuration.list);
                this.listsData.push({
                    "name": this._stepService.steps[0].name,
                    "list": this._stepService.steps[0].configuration.list
                });
            }
            console.log(this.listsData);
            this._stepService.datas = this.listsData.slice();
            // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
            this._formService.init();
            //console.  log(this._formService);
            //Big list contains all list of buttons
            //var keyName = this._stepService.s        ep[0].configuration.form_value.name;
            //this._formService.arraySteps[0][keyName] =  this.route.snapshot.params.name;
            //this.labelPanel = this._stepService.step[this.indexStepObj].configuration.labelPanel;
        }, error => console.log(error));
    }
};
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        template: `
        <div class="container">          
           <router-outlet
             ></router-outlet></div>
     ` }), 
    __metadata('design:paramtypes', [form_service_1.FormService, step_service_1.StepService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFOzs7O01BSVIsRUFBQyxDQUFDOztnQkFBQTtBQUVLLG9CQUFZLGVBOER2QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vdmVoaWN1bGUvZm9ybS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFyICAgICBxdWVTZXJ2aWNlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wb3J0ICAgICAgdiB7TWFyICAgICBxdWVTZXJ2aWNlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgIDssICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wb3J0IHtNYXJxdWV9IGZyb20gXCIuL21hcnF1ZS9tYXJxdWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPiAgICAgICAgICBcclxuICAgICAgICAgICA8cm91dGVyLW91dGxldFxyXG4gICAgICAgICAgICAgPjwvcm91dGVyLW91dGxldD48L2Rpdj5cclxuICAgICBgfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlXHJcbiAgICApe31cclxuICAgIGxpc3RzID0gW107XHJcbiAgICBsaXN0c0RhdGEgPSBbXTtcclxuICAgIHRtcCA9IFtdO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FwcENvbXBvbmVudCcpO1xyXG4gICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHN0ZXBSZXR1cm4gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIHQgICAgIGhpcy4gc3QgICBlcHMgPSBzdGVwUmV0dXJuO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RlcFJldHVyblwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzdGVwUmV0dXJuKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50bXAgPSBzdGVwUmV0dXJuLmpzb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9zdGVwU2VydmljZS5zdGVwID0gdGhpcy50bXA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyAvLyBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzdGVwUmV0dXJuLmpzb24oKS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICBjb25zb2xlIC4gbG9nKHN0ZXAgICBSZXR1cm4uanNvbigpWyAgaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ICBlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9zdGVwU2VydmljZS5zdGVwcyA9IHRoaXMudG1wO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRtcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgQ09MTEVDVElPTiBJTiBDT05GSUcgRklMRSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvKiAgSUYgQSBMSVNUIEVYSVNUUyBJTiBDT05GSUcgRklMRSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzRGF0YS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0c0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gS0VFUCBBTEwgU0VMRUNUSU9OUyBNQURFIEJZIFVTRVIgSU4gU1RFUFNcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcblxyXG4vL2NvbnNvbGUuICBsb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4vL0JpZyBsaXN0IGNvbnRhaW5zIGFsbCBsaXN0IG9mIGJ1dHRvbnNcclxuLy92YXIga2V5TmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnMgICAgICAgIGVwWzBdLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG4vL3RoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbMF1ba2V5TmFtZV0gPSAgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMubmFtZTtcclxuLy90aGlzLmxhYmVsUGFuZWwgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWw7XHJcbiAgICAgICAgICAgICAgICB9ICxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gfSJdfQ==
