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
var core_1 = require('@angular/core');
var form_service_1 = require("./components/form.service");
var AppComponent = (function () {
    function AppComponent(_formService) {
        this._formService = _formService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._formService.init();
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: " \n        <div class=\"container\">          \n           <router-outlet></router-outlet>\n        </div>          \n     " }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw2QkFBMEIsMkJBQTJCLENBQUMsQ0FBQTtBQVd0RDtJQUVJLHNCQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFDaEQsK0JBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQWRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsNkhBSVIsRUFBQyxDQUFDOztvQkFBQTtJQVNQLG1CQUFDO0FBQUQsQ0FQRCxBQU9FLElBQUE7QUFQVyxvQkFBWSxlQU92QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXHJcbiAgICB0ZW1wbGF0ZTogYCBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+ICAgICAgICAgIFxyXG4gICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cclxuICAgICAgICA8L2Rpdj4gICAgICAgICAgXHJcbiAgICAgYH0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2Upe31cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
