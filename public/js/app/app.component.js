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
//i                  mport {Mar     queService} from "./marque/marque.service";
//i                                      mport      v {Mar     queService} from "./marque/marque.service";
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
        this._stepService.getSteps()
            .subscribe(stepReturn => {
            //      t     his.st   eps = stepReturn;
            console.log("stepReturn");
            console.log(stepReturn);
            console.log(this._stepService.steps);
            // this.tmp = stepReturn.json();
            // this._stepService.step = this.tmp;
            //
            // // for ( let i = 0; i < stepReturn.json().length; i++) {
            // //     console.log(step   Return.json()[  i]);
            // //
            // //     console.log(this._stepService.step);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O1FBQ2xCLFFBQVEsRUFBRTs7OztNQUlSLEVBQUMsQ0FBQzs7Z0JBQUE7QUFFSyxvQkFBWSxlQTZEdkIsQ0FBQSIsImZpbGUiOiJhcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE91dHB1dCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0NvbGxlY3Rpb25TZXJ2aWNlfSBmcm9tIFwiLi9FbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL3ZlaGljdWxlL2Zvcm0uc2VydmljZVwiO1xyXG4vL2kgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFyICAgICBxdWVTZXJ2aWNlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlLnNlcnZpY2VcIjtcclxuLy9pICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcG9ydCAgICAgIHYge01hciAgICAgcXVlU2VydmljZX0gZnJvbSBcIi4vbWFycXVlL21hcnF1ZS5zZXJ2aWNlXCI7XHJcbi8vaSAgICAgICAgICAgICAgICAgICA7LCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcG9ydCB7TWFycXVlfSBmcm9tIFwiLi9tYXJxdWUvbWFycXVlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj4gICAgICAgICAgXHJcbiAgICAgICAgICAgPHJvdXRlci1vdXRsZXRcclxuICAgICAgICAgICAgID48L3JvdXRlci1vdXRsZXQ+PC9kaXY+XHJcbiAgICAgYH0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZVxyXG4gICAgKXt9XHJcbiAgICBsaXN0cyA9IFtdO1xyXG4gICAgbGlzdHNEYXRhID0gW107XHJcbiAgICB0bXAgPSBbXTtcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLmdldFN0ZXBzKClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIHN0ZXBSZXR1cm4gPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgIHQgICAgIGhpcy5zdCAgIGVwcyA9IHN0ZXBSZXR1cm47XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdGVwUmV0dXJuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0ZXBSZXR1cm4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnRtcCA9IHN0ZXBSZXR1cm4uanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXAgPSB0aGlzLnRtcDtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIGZvciAoIGxldCBpID0gMDsgaSA8IHN0ZXBSZXR1cm4uanNvbigpLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUubG9nKHN0ZXAgICBSZXR1cm4uanNvbigpWyAgaV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMgPSB0aGlzLnRtcDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy50bXApO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIElGIERBVEEgQVJFIFNUT1JFRCBJTiBBIENPTExFQ1RJT04gSU4gQ09ORklHIEZJTEUgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24uY29sbGVjdGlvbiAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLyogIElGIEEgTElTVCBFWElTVFMgSU4gQ09ORklHIEZJTEUgKi9cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLmNvbmZpZ3VyYXRpb24ubGlzdCAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RzLnB1c2godGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0uY29uZmlndXJhdGlvbi5saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0c0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlzdFwiOiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5jb25maWd1cmF0aW9uLmxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdHNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zdGVwU2VydmljZS5kYXRhcyA9IHRoaXMubGlzdHNEYXRhLnNsaWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSU5JVElBVEUgRk9STSBTRVJWSUNFIFRPIEtFRVAgQUxMIFNFTEVDVElPTlMgTUFERSBCWSBVU0VSIElOIFNURVBTXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuaW5pdCgpO1xyXG5cclxuLy9jb25zb2xlLiAgbG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuLy9CaWcgbGlzdCBjb250YWlucyBhbGwgbGlzdCBvZiBidXR0b25zXHJcbi8vdmFyIGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zICAgICAgICBlcFswXS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzWzBdW2tleU5hbWVdID0gIHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zLm5hbWU7XHJcbi8vdGhpcy5sYWJlbFBhbmVsID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFt0aGlzLmluZGV4U3RlcE9ial0uY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG4gfSJdfQ==
