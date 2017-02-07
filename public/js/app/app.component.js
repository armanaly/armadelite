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
//i                                                           mport      v {Mar     queService} from "./marque/marque.service";
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
        //         console.log('ap      pComponent');
        //         th      is._s   tep   Serv  ice.getSteps()
        //             .subscri                 be(
        //                 stepReturn => {
        //
        //                     //      t     his. st   eps = stepReturn;
        //
        //
        //
        //                     console.log("stepReturn");
        //                     conso     le.log(st epReturn);
        //                     console.log(this._stepService.steps);
        //                     // this.tmp = stepReturn.json();
        //                     // thi     s._stepService.step = this.tmp;
        //                     //
        //                     // //  for ( let i = 0; i < stepReturn.json().length; i++) {
        //                     // //     console . log(step   Return.json()[  i]);
        //                     // //
        //                     // //     console.log(this._st  epService.step);
        //                     // // }
        //                     //
        //                     console.log(this._stepService.step[0]);
        //                     //
        //                     // this._stepService.steps = this.tmp;
        //                     // console.log(this._stepService.steps);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCwrQkFBMEIsdUJBQXVCLENBQUMsQ0FBQTtBQUVsRCwrQkFBMEIseUJBQXlCLENBQUMsQ0FBQTtBQUNwRCxnRkFBZ0Y7QUFDaEYsK0hBQStIO0FBQy9ILGdIQUFnSDtBQVdoSDtJQUVJLFlBQ1csWUFBeUIsRUFDekIsWUFBeUI7UUFEekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFcEMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixRQUFHLEdBQUcsRUFBRSxDQUFDO0lBSFAsQ0FBQztJQUlILFFBQVE7UUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLDZDQUE2QztRQUM3QyxxREFBcUQ7UUFDckQsMkNBQTJDO1FBQzNDLGtDQUFrQztRQUNsQyxFQUFFO1FBQ0YsZ0VBQWdFO1FBQ2hFLEVBQUU7UUFDRixFQUFFO1FBQ0YsRUFBRTtRQUNGLGlEQUFpRDtRQUNqRCxxREFBcUQ7UUFDckQsNERBQTREO1FBQzVELHVEQUF1RDtRQUN2RCxpRUFBaUU7UUFDakUseUJBQXlCO1FBQ3pCLG1GQUFtRjtRQUNuRiwwRUFBMEU7UUFDMUUsNEJBQTRCO1FBQzVCLHVFQUF1RTtRQUN2RSw4QkFBOEI7UUFDOUIseUJBQXlCO1FBQ3pCLDhEQUE4RDtRQUM5RCx5QkFBeUI7UUFDekIsNkRBQTZEO1FBQzdELCtEQUErRDtRQUMvRCxnREFBZ0Q7UUFDaEQsOEVBQThFO1FBQzlFLHVHQUF1RztRQUN2Ryx3QkFBd0I7UUFDeEIsRUFBRTtRQUNGLDZEQUE2RDtRQUM3RCxpR0FBaUc7UUFDakcsMEZBQTBGO1FBQzFGLGdEQUFnRDtRQUNoRCx1RUFBdUU7UUFDdkUsb0ZBQW9GO1FBQ3BGLDhCQUE4QjtRQUM5Qix3QkFBd0I7UUFDeEIsbURBQW1EO1FBQ25ELHdFQUF3RTtRQUN4RSw0RkFBNEY7UUFDNUYsZ0RBQWdEO1FBQ2hELEVBQUU7UUFDRiw0Q0FBNEM7UUFDNUMsMENBQTBDO1FBQzFDLGtGQUFrRjtRQUNsRixpRkFBaUY7UUFDakYsMEZBQTBGO1FBQzFGLHNCQUFzQjtRQUN0Qiw4Q0FBOEM7UUFDOUMsaUJBQWlCO1FBQ2pCLFFBQVE7SUFDUCxDQUFDO0FBQUEsQ0FBQztBQXhFSDtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFOzs7O01BSVIsRUFBQyxDQUFDOztnQkFBQTtBQUVLLG9CQUFZLGVBK0R0QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Q29sbGVjdGlvblNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vdmVoaWN1bGUvZm9ybS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFyICAgICBxdWVTZXJ2aWNlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcG9ydCAgICAgIHYge01hciAgICAgcXVlU2VydmljZX0gZnJvbSBcIi4vbWFycXVlL21hcnF1ZS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICA7LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXBvcnQge01hcnF1ZX0gZnJvbSBcIi4vbWFycXVlL21hcnF1ZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+ICAgICAgICAgIFxyXG4gICAgICAgICAgIDxyb3V0ZXItb3V0bGV0XHJcbiAgICAgICAgICAgICA+PC9yb3V0ZXItb3V0bGV0PjwvZGl2PlxyXG4gICAgIGB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2VcclxuICAgICl7fVxyXG4gICAgbGlzdHMgPSBbXTtcclxuICAgIGxpc3RzRGF0YSA9IFtdO1xyXG4gICAgdG1wID0gW107XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ2FwICAgICAgcENvbXBvbmVudCcpO1xyXG4vLyAgICAgICAgIHRoICAgICAgaXMuX3MgICB0ZXAgICBTZXJ2ICBpY2UuZ2V0U3RlcHMoKVxyXG4vLyAgICAgICAgICAgICAuc3Vic2NyaSAgICAgICAgICAgICAgICAgYmUoXHJcbi8vICAgICAgICAgICAgICAgICBzdGVwUmV0dXJuID0+IHtcclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgIHQgICAgIGhpcy4gc3QgICBlcHMgPSBzdGVwUmV0dXJuO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3RlcFJldHVyblwiKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zbyAgICAgbGUubG9nKHN0IGVwUmV0dXJuKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50bXAgPSBzdGVwUmV0dXJuLmpzb24oKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGkgICAgIHMuX3N0ZXBTZXJ2aWNlLnN0ZXAgPSB0aGlzLnRtcDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICBmb3IgKCBsZXQgaSA9IDA7IGkgPCBzdGVwUmV0dXJuLmpzb24oKS5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICBjb25zb2xlIC4gbG9nKHN0ZXAgICBSZXR1cm4uanNvbigpWyAgaV0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ICBlcFNlcnZpY2Uuc3RlcCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLy8gfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLl9zdGVwU2VydmljZS5zdGVwcyA9IHRoaXMudG1wO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRtcCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLyogSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgQ09MTEVDVElPTiBJTiBDT05GSUcgRklMRSAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8qICBJRiBBIExJU1QgRVhJU1RTIElOIENPTkZJRyBGSUxFICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHNEYXRhLnB1c2goe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm5hbWUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzRGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMgPSB0aGlzLmxpc3RzRGF0YS5zbGljZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIElOSVRJQVRFIEZPUk0gU0VSVklDRSBUTyBLRUVQIEFMTCBTRUxFQ1RJT05TIE1BREUgQlkgVVNFUiBJTiBTVEVQU1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuLy9cclxuLy8gLy9jb25zb2xlLiAgbG9nKHRoaXMuX2Zvcm1TICAgICAgZXJ2aWNlKTtcclxuLy8gLy9CaWcgbGlzdCBjb250YWlucyBhbGwgbGlzdCBvZiBidXR0b25zXHJcbi8vIC8vdmFyIGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zICAgICAgICBlcFswXS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuLy8gLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzWzBdW2tleU5hbWVdID0gIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLm5hbWU7XHJcbi8vIC8vdGhpcy5sYWJlbFBhbmVsID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsO1xyXG4vLyAgICAgICAgICAgICAgICAgfSAsXHJcbi8vICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuLy8gICAgICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuIH19Il19
