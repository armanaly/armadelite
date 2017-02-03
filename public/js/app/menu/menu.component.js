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
const step_service_1 = require("../Engine/step.service");
const router_1 = require('@angular/router');
let MenuComponent = class MenuComponent {
    constructor(_stepService, router) {
        this._stepService = _stepService;
        this.router = router;
    }
    //  router = new Router;
    ngOnInit() {
        ///setTimeout(() => {
        if (this._stepService.steps[0].master_type == 'form') {
            this.router.navigate(['/step']);
        }
        // }, 10000)
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
    <div class="row" align="center">
        
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>

    </div>
` }), 
    __metadata('design:paramtypes', [step_service_1.StepService, router_1.Router])
], MenuComponent);
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHlCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBWXZDO0lBQ0ksWUFDWSxZQUF5QixFQUFVLE1BQWM7UUFBakQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBRTVELENBQUM7SUFFSix3QkFBd0I7SUFFdEIsUUFBUTtRQUVILHFCQUFxQjtRQUNqQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUNOLFlBQVk7SUFFaEIsQ0FBQztBQUNMLENBQUM7QUE1QkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7O0NBT2IsRUFBRSxDQUFDOztpQkFBQTtBQUVTLHFCQUFhLGdCQWlCekIsQ0FBQSIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCI+IERhdGEgZ3JpZCA8L2E+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5vdXZlYXUgZmxvdzwvYT48L2J1dHRvbj48L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuYCB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgcHVibGljIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXJcclxuICAgICAgICApXHJcbiAgICB7fVxyXG5cclxuICAvLyAgcm91dGVyID0gbmV3IFJvdXRlcjtcclxuXHJcbiAgICBuZ09uSW5pdCgpe1xyXG5cclxuICAgICAgICAgLy8vc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2Zvcm0nKXtcclxuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10pO1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIH0sIDEwMDAwKVxyXG5cclxuICAgIH1cclxufSJdfQ==
