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
        //         th      is.                                                  np           m                        For Adults_s                         te                              p      Serv  ice.getSteps()
        //             .subscri                                                  be(
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
        //                     // //                for ( let i =    0; i < stepReturn.json(). length; i++) {
        //                     // //     console .  log(step   Return.json()[  i]);
        //                     // //
        //                     // //     c     onsole.lo  g(this._st  ep   v   Service.step);
        //                     // // }
        //                     //
        //                     console.log(this.    _stepService.step[0]);
        //                     //
        //                     // this._stepService.steps = this.tmp;
        //                     // console.     log(this._stepService.steps);
        //                     // console.log(this.tmp);
        //                     /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
        //                     if (typeof this._stepService.steps[0].configu       ration.collection != 'undefined') {
        //                     }
        //
        //                     /*  IF A LIST EXISTS IN CONFIG FILE */
        //                     if (typeof        this._stepService.steps[0].configuration.list != 'undefined') {
        //                         this.lists.push(this._stepService.steps[0].configuration.list);
        //                                    this.listsDa   ta.push({
        //                             "name": this._stepService.steps[0].name,
        //                             "list": this._stepSer        vice.steps[0].configuration.list
        //                         });
        //                     }
        //                     console.log(this.listsData);
        //                     this._stepService.datas = this.listsData.slice();
        //                     // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
        //                     this._formServi          ce.init();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUd4RCwrQkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQUN0RCwrRkFBK0Y7QUFDL0YsZ0lBQWdJO0FBQ2hJLDBJQUEwSTtBQVcxSTtJQUVJLFlBQ1ksWUFBeUIsQ0FBQTsyQ0FDRTtRQUQzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUdyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFIUCxDQUFDO0lBS0gsUUFBUTtRQUVKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakMsb0ZBQW9GO1FBQ3BGLDhNQUE4TTtRQUM5TSw0RUFBNEU7UUFDNUUsb0RBQW9EO1FBQ3BELEVBQUU7UUFFRiwrRUFBK0U7UUFDL0UsRUFBRTtRQUNGLEVBQUU7UUFDRixFQUFFO1FBQ0Ysc0RBQXNEO1FBQ3RELHdEQUF3RDtRQUN4RCxvRUFBb0U7UUFDcEUsd0RBQXdEO1FBQ3hELGlFQUFpRTtRQUNqRSx5QkFBeUI7UUFDekIscUdBQXFHO1FBQ3JHLDJFQUEyRTtRQUMzRSw0QkFBNEI7UUFDNUIscUZBQXFGO1FBQ3JGLDhCQUE4QjtRQUM5Qix5QkFBeUI7UUFDekIsa0VBQWtFO1FBQ2xFLHlCQUF5QjtRQUN6Qiw2REFBNkQ7UUFDN0Qsb0VBQW9FO1FBQ3BFLGdEQUFnRDtRQUNoRCw4RUFBOEU7UUFDOUUsOEdBQThHO1FBQzlHLHdCQUF3QjtRQUN4QixFQUFFO1FBQ0YsNkRBQTZEO1FBQzdELHdHQUF3RztRQUNwRywwRkFBMEY7UUFDOUYsOERBQThEO1FBQzlELHVFQUF1RTtRQUN2RSw0RkFBNEY7UUFDNUYsOEJBQThCO1FBQzlCLHdCQUF3QjtRQUN4QixtREFBbUQ7UUFDbkQsd0VBQXdFO1FBQ3hFLDRGQUE0RjtRQUM1RiwwREFBMEQ7UUFDMUQsRUFBRTtRQUNGLDRDQUE0QztRQUM1QywwQ0FBMEM7UUFDMUMsa0ZBQWtGO1FBQ2xGLGlGQUFpRjtRQUNqRiwwRkFBMEY7UUFDMUYsc0JBQXNCO1FBQ3RCLDhDQUE4QztRQUM5QyxpQkFBaUI7UUFDakIsUUFBUTtJQUNQLENBQUM7QUFBQSxDQUFDO0FBM0VIO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7Ozs7TUFJUixFQUFDLENBQUM7O2dCQUFBO0FBRUssb0JBQVksZUFrRXRCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPdXRwdXQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgIG1wb3J0IHtNYXIgICAgICAgICAgICAgICBxdWVTZXJ2aWNlfSBmcm9tIFwiLi9tYXJxdSAgICAgZS9tYXJxdWUuc2VydmljZVwiO1xyXG4vL2kgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1wbyBydCAgICAgIHYge01hciAgICAgcXVlU2VydmljZX0gZnJvbSBcIi4vbWFycXVlL21hcnF1ZS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDssICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFycXVlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYCBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+ICAgICAgICAgIFxyXG4gICAgICAgICAgIDxyb3V0ZXItb3V0bGV0XHJcbiAgICAgICAgICAgICA+PC9yb3V0ZXItb3V0bGV0PjwvZGl2PiAgICAgICAgICBcclxuICAgICBgfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZS8qLFxyXG4gICAgICAgIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSovXHJcbiAgICApe31cclxuICAgIGxpc3RzID0gW107XHJcbiAgICBsaXN0c0RhdGEgPSBbXTtcclxuICAgIHRtcCA9IFtdO1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5pbml0KCk7XHJcbi8vICAgICAgICAgY29uc29sZSAgIC5sb2coJ2FwICAgICAgICAgICAgICAgICAgICAgICAgICBwQ29tcG8gICAgICAgICAgICAgICAgbmVudCcpO1xyXG4vLyAgICAgICAgIHRoICAgICAgaXMuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBucCAgICAgICAgICAgbSAgICAgICAgICAgICAgICAgICAgICAgIEZvciBBZHVsdHNfcyAgICAgICAgICAgICAgICAgICAgICAgICB0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHAgICAgICBTZXJ2ICBpY2UuZ2V0U3RlcHMoKVxyXG4vLyAgICAgICAgICAgICAuc3Vic2NyaSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmUoXHJcbi8vICAgICAgICAgICAgICAgICBzdGVwUmV0dXJuICAgICAgICAgICAgICA9ICAgICA+IHtcclxuLy9cclxuXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gICAgICB0ICAgICBoaXMuICAgICAgICAgICAgICAgIHN0ICAgZXBzID0gc3RlcFJldHVybjtcclxuLy9cclxuLy9cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlIC5sb2coXCJzdGVwUmV0dSAgICByblwiKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zbyAgICAgIGxlLiAgbG9nKHN0IGVwUmV0dXJuKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlICAgICAgIC5sbyBnKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRtcCA9IHN0ZXAgUmV0dXJuLmpzb24oKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyB0aGkgICAgIHMuX3N0ZXBTZXJ2aWNlLnN0ZXAgPSB0aGlzLnRtcDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICAgICAgICAgICAgIGZvciAoIGxldCBpID0gICAgMDsgaSA8IHN0ZXBSZXR1cm4uanNvbigpLiBsZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICBjb25zb2xlIC4gIGxvZyhzdGVwICAgUmV0dXJuLmpzb24oKVsgIGldKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIC8vICAgICBjICAgICBvbnNvbGUubG8gIGcodGhpcy5fc3QgIGVwICAgdiAgIFNlcnZpY2Uuc3RlcCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gLy8gfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy4gICAgX3N0ZXBTZXJ2aWNlLnN0ZXBbMF0pO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMgPSB0aGlzLnRtcDtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLiAgICAgbG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRtcCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLyogSUYgREFUQSBBUkUgU1RPUkVEIElOIEEgQ09MTEVDVElPTiBJTiBDT05GSUcgRklMRSAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndSAgICAgICByYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIH1cclxuLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAvKiAgSUYgQSBMSVNUIEVYSVNUUyBJTiBDT05GSUcgRklMRSAqL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0cy5wdXNoKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCk7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0c0RhICAgdGEucHVzaCh7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubmFtZSxcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VyICAgICAgICB2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0c0RhdGEpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmRhdGFzID0gdGhpcy5saXN0c0RhdGEuc2xpY2UoKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICAvLyBJTklUSUFURSBGT1JNIFNFUlZJQ0UgVE8gS0VFUCBBTEwgU0VMRUNUSU9OUyBNQURFIEJZIFVTRVIgSU4gU1RFUFNcclxuLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb3JtU2VydmkgICAgICAgICAgY2UuaW5pdCgpO1xyXG4vL1xyXG4vLyAvL2NvbnNvbGUuICBsb2codGhpcy5fZm9ybVMgICAgICBlcnZpY2UpO1xyXG4vLyAvL0JpZyBsaXN0IGNvbnRhaW5zIGFsbCBsaXN0IG9mIGJ1dHRvbnNcclxuLy8gLy92YXIga2V5TmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnMgICAgICAgIGVwWzBdLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG4vLyAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbMF1ba2V5TmFtZV0gPSAgdGhpcy5yb3V0ZS5zbmFwc2hvdC5wYXJhbXMubmFtZTtcclxuLy8gLy90aGlzLmxhYmVsUGFuZWwgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaW5kZXhTdGVwT2JqXS5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWw7XHJcbi8vICAgICAgICAgICAgICAgICB9ICxcclxuLy8gICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4vLyAgICAgICAgICAgICApO1xyXG4vLyAgICAgfVxyXG4gfX0iXX0=
