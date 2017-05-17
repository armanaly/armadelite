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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUN4RCwrQkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQVd0RDtJQUVJLFlBQ1ksWUFBeUIsQ0FBQTsyQ0FDRTtRQUQzQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUdyQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFFBQUcsR0FBRyxFQUFFLENBQUM7SUFIUCxDQUFDO0lBS0gsUUFBUTtRQUVKLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFaEMsQ0FBQztBQUFBLENBQUM7QUF2Qkg7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFFBQVEsRUFBRTs7OztNQUlSLEVBQUMsQ0FBQzs7Z0JBQUE7QUFFSyxvQkFBWSxlQWN0QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT3V0cHV0LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxyXG4gICAgdGVtcGxhdGU6IGAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPiAgICAgICAgICBcclxuICAgICAgICAgICA8cm91dGVyLW91dGxldFxyXG4gICAgICAgICAgICAgPjwvcm91dGVyLW91dGxldD48L2Rpdj4gICAgICAgICAgXHJcbiAgICAgYH0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UvKixcclxuICAgICAgICBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UqL1xyXG4gICAgKXt9XHJcbiAgICBsaXN0cyA9IFtdO1xyXG4gICAgbGlzdHNEYXRhID0gW107XHJcbiAgICB0bXAgPSBbXTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuaW5pdCgpO1xyXG5cclxuIH19Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
