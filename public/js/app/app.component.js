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
const form_service_1 = require("./components/form.service");
//i                   mport {Mar               queService} from "./marqu     e/marque.service";
//i                                                           mpo rt      v {Mar     queService} from "./marque/marque.service";
//i                   ;,                                                  mport {Marque} from "./marque/marque";
let AppComponent = class AppComponent {
    constructor(_formService, _stepService) {
        this._formService = _formService;
        this._stepService = _stepService;
        this.lists = [];
        this.listsData = [];
        this.tmp = [];
    }
    ngOnInit() {
        this._formService.init();
        //         console.log('ap               pCompo                nent');
        //         th      is.        _s                      te                              p      Serv  ice.getSteps()
        //             .subscri                                        be(
        //                 stepReturn              =     > {
        //
        //                     //      t     his.                st   eps = stepReturn;
        //
        //
        //
        //                     console.log("stepReturn");
        //                     conso      le.  log(st epReturn);
        //                     console       .lo g(this._stepService.steps);
        //                     // this.tmp = step Return.json();
        //                     // thi     s._stepService.step = this.tmp;
        //                     //
        //                     // //              for ( let i = 0; i < stepReturn.json(). length; i++) {
        //                     // //     console . log(step   Return.json()[  i]);
        //                     // //
        //                     // //     c    onsole.log(this._st  epService.step);
        //                     // // }
        //                     //
        //                     console.log(this._stepService.step[0]);
        //                     //
        //                     // this._stepService.steps = this.tmp;
        //                     // console.     log(this._stepService.steps);
        //                     // console.log(this.tmp);
        //                     /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
        //                     if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
        //                     }
        //
        //                     /*  IF A LIST EXISTS IN CONFIG FILE */
        //                     if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
        //                         this.lists.push(this._stepService.steps[0].configuration.list);
        //                         this.listsData.push({
        //                             "name": this._stepService.steps[0].name,
        //                             "list": this._stepService.steps[0].configuration.list
        //                         });
        //                     }
        //                     console.log(this.listsData);
        //                     this._stepService.datas = this.listsData.slice();
        //                     // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
        //                     this._formService.init();
        //
        // //console.  log(this._formS      ervice);
        // //Big list contains all list of buttons
        // //var keyName = this._stepService.s        ep[0].configuration.form_value.name;
        // //this._formService.arraySteps[0][keyName] =  this.route.snapshot.params.name;
        // //this.labelPanel = this._stepService.step[this.indexStepObj].configuration.labelPanel;
        //                 } ,
        //                 error => console.log(error)
        //             );
        //     }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCwrQkFBMEIsdUJBQXVCLENBQUMsQ0FBQTtBQUVsRCwrQkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN0RCwrRkFBK0Y7QUFDL0YsZ0lBQWdJO0FBQ2hJLGdIQUFnSDtBQVdoSDtJQUVJLFlBQ1ksWUFBeUIsRUFDekIsWUFBeUI7UUFEekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFckMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixRQUFHLEdBQUcsRUFBRSxDQUFDO0lBSFAsQ0FBQztJQUtILFFBQVE7UUFFSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLHNFQUFzRTtRQUN0RSxpSEFBaUg7UUFDakgsa0VBQWtFO1FBQ2xFLG9EQUFvRDtRQUNwRCxFQUFFO1FBRUYsK0VBQStFO1FBQy9FLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLGlEQUFpRDtRQUNqRCx3REFBd0Q7UUFDeEQsb0VBQW9FO1FBQ3BFLHdEQUF3RDtRQUN4RCxpRUFBaUU7UUFDakUseUJBQXlCO1FBQ3pCLGdHQUFnRztRQUNoRywwRUFBMEU7UUFDMUUsNEJBQTRCO1FBQzVCLDJFQUEyRTtRQUMzRSw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLDhEQUE4RDtRQUM5RCx5QkFBeUI7UUFDekIsNkRBQTZEO1FBQzdELG9FQUFvRTtRQUNwRSxnREFBZ0Q7UUFDaEQsOEVBQThFO1FBQzlFLHVHQUF1RztRQUN2Ryx3QkFBd0I7UUFDeEIsRUFBRTtRQUNGLDZEQUE2RDtRQUM3RCxpR0FBaUc7UUFDakcsMEZBQTBGO1FBQzFGLGdEQUFnRDtRQUNoRCx1RUFBdUU7UUFDdkUsb0ZBQW9GO1FBQ3BGLDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsbURBQW1EO1FBQ25ELHdFQUF3RTtRQUN4RSw0RkFBNEY7UUFDNUYsZ0RBQWdEO1FBQ2hELEVBQUU7UUFDRiw0Q0FBNEM7UUFDNUMsMENBQTBDO1FBQzFDLGtGQUFrRjtRQUNsRixpRkFBaUY7UUFDakYsMEZBQTBGO1FBQzFGLHNCQUFzQjtRQUN0Qiw4Q0FBOEM7UUFDOUMsaUJBQWlCO1FBQ2pCLFFBQVE7SUFDUCxDQUFDO0FBQUEsQ0FBQztBQTNFSDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFOzs7O01BSVIsRUFBQyxDQUFDOztnQkFBQTtBQUVLLG9CQUFZLGVBa0V0QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFyICAgICAgICAgICAgICAgcXVlU2VydmljZX0gZnJvbSBcIi4vbWFycXUgICAgIGUvbWFycXVlLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcG8gcnQgICAgICB2IHtNYXIgICAgIHF1ZVNlcnZpY2V9IGZyb20gXCIuL21hcnF1ZS9tYXJxdWUuc2VydmljZVwiO1xyXG4vL2kgICAgICAgICAgICAgICAgICAgOywgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wb3J0IHtNYXJxdWV9IGZyb20gXCIuL21hcnF1ZS9tYXJxdWVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPiAgICAgICAgICBcclxuICAgICAgICAgICA8cm91dGVyLW91dGxldFxyXG4gICAgICAgICAgICAgPjwvcm91dGVyLW91dGxldD48L2Rpdj5cclxuICAgICBgfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2VcclxuICAgICl7fVxyXG4gICAgbGlzdHMgPSBbXTtcclxuICAgIGxpc3RzRGF0YSA9IFtdO1xyXG4gICAgdG1wID0gW107XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnYXAgICAgICAgICAgICAgICBwQ29tcG8gICAgICAgICAgICAgICAgbmVudCcpO1xyXG4vLyAgICAgICAgIHRoICAgICAgaXMuICAgICAgICBfcyAgICAgICAgICAgICAgICAgICAgICB0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgICAgICBTZXJ2ICBpY2UuZ2V0U3RlcHMoKVxyXG4vLyAgICAgICAgICAgICAuc3Vic2NyaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZShcclxuLy8gICAgICAgICAgICAgICAgIHN0ZXBSZXR1cm4gICAgICAgICAgICAgID0gICAgID4ge1xyXG4vL1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgIHQgICAgIGhpcy4gICAgICAgICAgICAgICAgc3QgICBlcHMgPSBzdGVwUmV0dXJuO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RlcFJldHVyblwiKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zbyAgICAgIGxlLiAgbG9nKHN0IGVwUmV0dXJuKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlICAgICAgIC5sbyBnKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRtcCA9IHN0ZXAgUmV0dXJuLmpzb24oKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGkgICAgIHMuX3N0ZXBTZXJ2aWNlLnN0ZXAgPSB0aGlzLnRtcDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICAgICAgICAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzdGVwUmV0dXJuLmpzb24oKS4gbGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAvLyAgICAgY29uc29sZSAuIGxvZyhzdGVwICAgUmV0dXJuLmpzb24oKVsgIGldKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICBjICAgIG9uc29sZS5sb2codGhpcy5fc3QgIGVwU2VydmljZS5zdGVwKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAvLyB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwWzBdKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzID0gdGhpcy50bXA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS4gICAgIGxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50bXApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuLy8gICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAvKiAgSUYgQSBMSVNUIEVYSVNUUyBJTiBDT05GSUcgRklMRSAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0ICE9ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHMucHVzaCh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzRGF0YS5wdXNoKHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5uYW1lLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaXN0XCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0c0RhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gS0VFUCBBTEwgU0VMRUNUSU9OUyBNQURFIEJZIFVTRVIgSU4gU1RFUFNcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbi8vXHJcbi8vIC8vY29uc29sZS4gIGxvZyh0aGlzLl9mb3JtUyAgICAgIGVydmljZSk7XHJcbi8vIC8vQmlnIGxpc3QgY29udGFpbnMgYWxsIGxpc3Qgb2YgYnV0dG9uc1xyXG4vLyAvL3ZhciBrZXlOYW1lID0gdGhpcy5fc3RlcFNlcnZpY2UucyAgICAgICAgZXBbMF0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbi8vIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1swXVtrZXlOYW1lXSA9ICB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5uYW1lO1xyXG4vLyAvL3RoaXMubGFiZWxQYW5lbCA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pbmRleFN0ZXBPYmpdLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbDtcclxuLy8gICAgICAgICAgICAgICAgIH0gLFxyXG4vLyAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbi8vICAgICAgICAgICAgICk7XHJcbi8vICAgICB9XHJcbiB9fSJdfQ==
