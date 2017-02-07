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
const gridPanel_service_1 = require("../components/gridPanel.service");
let MenuComponent = class MenuComponent {
    constructor(_stepService, router, _gridService) {
        this._stepService = _stepService;
        this.router = router;
        this._gridService = _gridService;
    }
    ngOnInit() {
        console.log(window);
        if (this._stepService.steps[0].master_type == 'form') {
            this.router.navigate(['/step']);
        }
        else {
            this._gridService.getDatas()
                .subscribe(data => {
                // this.router.navigate(['/grid']);
            }, error => console.log(error));
        }
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
    __metadata('design:paramtypes', [step_service_1.StepService, router_1.Router, gridPanel_service_1.GridPanelService])
], MenuComponent);
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHlCQUFxQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZDLG9DQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBWWpFO0lBQ0ksWUFDYSxZQUF5QixFQUFVLE1BQWMsRUFBVSxZQUE4QjtRQUF6RixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7SUFFckcsQ0FBQztJQUNGLFFBQVE7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRVAsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2lCQUN2QixTQUFTLENBQUMsSUFBSTtnQkFDUCxtQ0FBbUM7WUFDdkMsQ0FBQyxFQUNELEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBQ1QsQ0FBQztJQUNWLENBQUM7QUFDTCxDQUFDO0FBOUJEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7OztDQU9iLEVBQUUsQ0FBQzs7aUJBQUE7QUFFUyxxQkFBYSxnQkFtQnpCLENBQUEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCI+IERhdGEgZ3JpZCA8L2E+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5vdXZlYXUgZmxvdzwvYT48L2J1dHRvbj48L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuYCB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZVxyXG4gICAgICAgIClcclxuICAgIHt9XHJcbiAgICBuZ09uSW5pdCgpe1xyXG5jb25zb2xlLmxvZyh3aW5kb3cpO1xyXG5cclxuICAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnZm9ybScpe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSk7XHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZ3JpZCddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
