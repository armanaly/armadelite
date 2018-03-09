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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const form_service_1 = require("./Engine/form.service");
let AppComponent = class AppComponent {
    constructor(_formService) {
        this._formService = _formService;
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
               
           <router-outlet></router-outlet>
     `
    }),
    __metadata("design:paramtypes", [form_service_1.FormService])
], AppComponent);
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBd0M7QUFDeEMsd0RBQWtEO0FBVWxELElBQWEsWUFBWSxHQUF6QjtJQUVJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUNoRCxRQUFRO1FBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM3QixDQUFDO0NBRUgsQ0FBQTtBQVBXLFlBQVk7SUFSeEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUU7OztNQUdSO0tBQUMsQ0FBQztxQ0FJOEIsMEJBQVc7R0FGcEMsWUFBWSxDQU92QjtBQVBXLG9DQUFZIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL0VuZ2luZS9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcclxuICAgIHRlbXBsYXRlOiBgIFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XHJcbiAgICAgYH0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2Upe31cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
