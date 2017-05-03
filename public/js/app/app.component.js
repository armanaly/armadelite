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
const form_service_1 = require("./components/form.service");
//i                   mport {Mar               queService} from "./marqu     e/marque.service";
//i                                                           mpo rt      v {Mar     queService} from "./marque/marque.service";
//i                                             ;,                                                  mport {Marque} from "./marque/marque";
let AppComponent = class AppComponent {
    constructor(_formService /*,
        private _stepService: StepService*/) {
        this._formService = _formService;
        this.lists = [];
        this.listsData = [];
        this.tmp = [];
    }
    ngOnInit() {
        this._formService.init();
        //         console   .log('ap                          pCompo                nent');
        //         th      is.                            np           m                        For Adults_s                         te                              p      Serv  ice.getSteps()
        //             .subscri                                            be(
        //                 stepReturn              =     > {
        //
        //                     //      t     his.                st   eps = stepReturn;
        //
        //
        //
        //                     console .log("stepRetu    rn");
        //                     conso      le.  log(st epReturn);
        //                     console       .lo g(this._stepService.steps);
        //                     // this.tmp = step Return.json();
        //                     // thi     s._stepService.step = this.tmp;
        //                     //
        //                     // //                for ( let i = 0; i < stepReturn.json(). length; i++) {
        //                     // //     console .  log(step   Return.json()[  i]);
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
    __metadata('design:paramtypes', [form_service_1.FormService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUd4RCwrQkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN0RCwrRkFBK0Y7QUFDL0YsZ0lBQWdJO0FBQ2hJLDBJQUEwSTtBQVcxSTtJQUVJLFlBQ1ksWUFBeUIsQ0FBQTsyQ0FDRTtRQUQzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUdyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFIUCxDQUFDO0lBS0gsUUFBUTtRQUVKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsb0ZBQW9GO1FBQ3BGLHdMQUF3TDtRQUN4TCxzRUFBc0U7UUFDdEUsb0RBQW9EO1FBQ3BELEVBQUU7UUFFRiwrRUFBK0U7UUFDL0UsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0Ysc0RBQXNEO1FBQ3RELHdEQUF3RDtRQUN4RCxvRUFBb0U7UUFDcEUsd0RBQXdEO1FBQ3hELGlFQUFpRTtRQUNqRSx5QkFBeUI7UUFDekIsa0dBQWtHO1FBQ2xHLDJFQUEyRTtRQUMzRSw0QkFBNEI7UUFDNUIsMkVBQTJFO1FBQzNFLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIsOERBQThEO1FBQzlELHlCQUF5QjtRQUN6Qiw2REFBNkQ7UUFDN0Qsb0VBQW9FO1FBQ3BFLGdEQUFnRDtRQUNoRCw4RUFBOEU7UUFDOUUsdUdBQXVHO1FBQ3ZHLHdCQUF3QjtRQUN4QixFQUFFO1FBQ0YsNkRBQTZEO1FBQzdELGlHQUFpRztRQUNqRywwRkFBMEY7UUFDMUYsZ0RBQWdEO1FBQ2hELHVFQUF1RTtRQUN2RSxvRkFBb0Y7UUFDcEYsOEJBQThCO1FBQzlCLHdCQUF3QjtRQUN4QixtREFBbUQ7UUFDbkQsd0VBQXdFO1FBQ3hFLDRGQUE0RjtRQUM1RixnREFBZ0Q7UUFDaEQsRUFBRTtRQUNGLDRDQUE0QztRQUM1QywwQ0FBMEM7UUFDMUMsa0ZBQWtGO1FBQ2xGLGlGQUFpRjtRQUNqRiwwRkFBMEY7UUFDMUYsc0JBQXNCO1FBQ3RCLDhDQUE4QztRQUM5QyxpQkFBaUI7UUFDakIsUUFBUTtJQUNQLENBQUM7QUFBQSxDQUFDO0FBM0VIO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7Ozs7TUFJUixFQUFDLENBQUM7O2dCQUFBO0FBRUssb0JBQVksZUFrRXRCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgIG1wb3J0IHtNYXIgICAgICAgICAgICAgICBxdWVTZXJ2aWNlfSBmcm9tIFwiLi9tYXJxdSAgICAgZS9tYXJxdWUuc2VydmljZVwiO1xyXG4vL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wbyBydCAgICAgIHYge01hciAgICAgcXVlU2VydmljZX0gZnJvbSBcIi4vbWFycXVlL21hcnF1ZS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDssICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFycXVlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYCBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+ICAgICAgICAgIFxyXG4gICAgICAgICAgIDxyb3V0ZXItb3V0bGV0XHJcbiAgICAgICAgICAgICA+PC9yb3V0ZXItb3V0bGV0PjwvZGl2PiAgICAgICAgICBcclxuICAgICBgfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZS8qLFxyXG4gICAgICAgIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSovXHJcbiAgICApe31cclxuICAgIGxpc3RzID0gW107XHJcbiAgICBsaXN0c0RhdGEgPSBbXTtcclxuICAgIHRtcCA9IFtdO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbi8vICAgICAgICAgY29uc29sZSAgIC5sb2coJ2FwICAgICAgICAgICAgICAgICAgICAgICAgICBwQ29tcG8gICAgICAgICAgICAgICAgbmVudCcpO1xyXG4vLyAgICAgICAgIHRoICAgICAgaXMuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wICAgICAgICAgICBtICAgICAgICAgICAgICAgICAgICAgICAgRm9yIEFkdWx0c19zICAgICAgICAgICAgICAgICAgICAgICAgIHRlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcCAgICAgIFNlcnYgIGljZS5nZXRTdGVwcygpXHJcbi8vICAgICAgICAgICAgIC5zdWJzY3JpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZShcclxuLy8gICAgICAgICAgICAgICAgIHN0ZXBSZXR1cm4gICAgICAgICAgICAgID0gICAgID4ge1xyXG4vL1xyXG5cclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAgICAgIHQgICAgIGhpcy4gICAgICAgICAgICAgICAgc3QgICBlcHMgPSBzdGVwUmV0dXJuO1xyXG4vL1xyXG4vL1xyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUgLmxvZyhcInN0ZXBSZXR1ICAgIHJuXCIpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvICAgICAgbGUuICBsb2coc3QgZXBSZXR1cm4pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUgICAgICAgLmxvIGcodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudG1wID0gc3RlcCBSZXR1cm4uanNvbigpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIHRoaSAgICAgcy5fc3RlcFNlcnZpY2Uuc3RlcCA9IHRoaXMudG1wO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgICAgICAgICAgICAgZm9yICggbGV0IGkgPSAwOyBpIDwgc3RlcFJldHVybi5qc29uKCkuIGxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUgLiAgbG9nKHN0ZXAgICBSZXR1cm4uanNvbigpWyAgaV0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgIGMgICAgb25zb2xlLmxvZyh0aGlzLl9zdCAgZXBTZXJ2aWNlLnN0ZXApO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbMF0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMgPSB0aGlzLnRtcDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLiAgICAgbG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRtcCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLyogSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgQ09MTEVDVElPTiBJTiBDT05GSUcgRklMRSAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5jb2xsZWN0aW9uICE9ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8qICBJRiBBIExJU1QgRVhJU1RTIElOIENPTkZJRyBGSUxFICovXHJcbi8vICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3QgIT0gJ3VuZGVmaW5lZCcpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdHNEYXRhLnB1c2goe1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm5hbWUsXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpc3RcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RzRGF0YSk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RlcFNlcnZpY2UuZGF0YXMgPSB0aGlzLmxpc3RzRGF0YS5zbGljZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIElOSVRJQVRFIEZPUk0gU0VSVklDRSBUTyBLRUVQIEFMTCBTRUxFQ1RJT05TIE1BREUgQlkgVVNFUiBJTiBTVEVQU1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuLy9cclxuLy8gLy9jb25zb2xlLiAgbG9nKHRoaXMuX2Zvcm1TICAgICAgZXJ2aWNlKTtcclxuLy8gLy9CaWcgbGlzdCBjb250YWlucyBhbGwgbGlzdCBvZiBidXR0b25zXHJcbi8vIC8vdmFyIGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zICAgICAgICBlcFswXS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuLy8gLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzWzBdW2tleU5hbWVdID0gIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLm5hbWU7XHJcbi8vIC8vdGhpcy5sYWJlbFBhbmVsID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsO1xyXG4vLyAgICAgICAgICAgICAgICAgfSAsXHJcbi8vICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuLy8gICAgICAgICAgICAgKTtcclxuLy8gICAgIH1cclxuIH19Il19
