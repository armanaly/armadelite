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
var step_service_1 = require("../Engine/step.service");
var router_1 = require('@angular/router');
var gridPanel_service_1 = require("../components/gridPanel.service");
var MenuComponent = (function () {
    function MenuComponent(_stepService, router, _gridService, route) {
        this._stepService = _stepService;
        this.router = router;
        this._gridService = _gridService;
        this.route = route;
        this.grids = [];
        this.ready = false;
        this.appName = '';
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(window);
        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
        if (this._stepService.steps[0].master_type == 'form') {
            this.router.navigate(['/step']);
        }
        else {
            this._gridService.getActivatedGrids()
                .then(function (gridsList) {
                console.log(gridsList);
                _this.grids = gridsList;
                _this.ready = true;
            }), function (error) { return console.log(error); };
        }
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'grid-panel',
            template: "\n\n    \n    <div class=\"row\" align=\"center\" *ngIf=\"ready == true\">\n\n            <div  *ngFor=\"let grid of grids\" class=\"col-md-3\">\n                <!--<button class=\"btn btn-success\" type=\"button\" (click)=\"showGrid(grid.name)\" value=\"{{grid.name}} \">{{grid.name}} -->\n                <!--</button>-->\n                <button type=\"button\" class=\"btn btn-success\">\n                    \n                    <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': grid.name}\"> {{grid.name}} </a>\n                </button>\n            </div>\n            <!--<div class=\"col-md-3\"><button type=\"button\" class=\"btn btn-success\"><a [routerLink]=\"['/step']\"> Nouveau flow</a></button></div>-->\n\n    </div>\n" }), 
        __metadata('design:paramtypes', [step_service_1.StepService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b;
}());
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHVCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELGtDQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBc0JqRTtJQUNJLHVCQUNhLFlBQXlCLEVBQVUsTUFBYyxFQUFVLFlBQThCLEVBQ3pGLEtBQXFCO1FBRHJCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUN6RixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUdsQyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7SUFIWixDQUFDO0lBS0YsZ0NBQVEsR0FBUjtRQUFBLGlCQWdCQztRQWZMLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUEsQ0FBQztZQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRTtpQkFDaEMsSUFBSSxDQUNELFVBQUEsU0FBUztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN0QixLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFBO1FBQ3ZDLENBQUM7SUFDVixDQUFDO0lBOUNMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSw4dUJBZ0JiLEVBQUUsQ0FBQzs7cUJBQUE7SUE2Qkosb0JBQUM7O0FBQUQsQ0EzQkEsQUEyQkMsSUFBQTtBQTNCWSxxQkFBYSxnQkEyQnpCLENBQUEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIiAqbmdJZj1cInJlYWR5ID09IHRydWVcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRzXCIgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dHcmlkKGdyaWQubmFtZSlcIiB2YWx1ZT1cInt7Z3JpZC5uYW1lfX0gXCI+e3tncmlkLm5hbWV9fSAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogZ3JpZC5uYW1lfVwiPiB7e2dyaWQubmFtZX19IDwvYT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5vdXZlYXUgZmxvdzwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuXHJcbiAgICA8L2Rpdj5cclxuYCB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSxcclxuICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICAgICApXHJcbiAgICB7fVxyXG4gICAgZ3JpZHMgPSBbXTtcclxuICAgIHJlYWR5ID0gZmFsc2U7XHJcbiAgICBhcHBOYW1lID0gJyc7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuY29uc29sZS5sb2cod2luZG93KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImFwcFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpO1xyXG4gICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdmb3JtJyl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKTtcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldEFjdGl2YXRlZEdyaWRzKClcclxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBncmlkc0xpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWRzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzID0gZ3JpZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICB9KSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvLyBzaG93R3JpZCgpe1xyXG4gICAgLy8gbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAvLyAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcbiAgICAvL1xyXG4gICAgLy8gfTtcclxuXHJcbi8vIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4vLyAgICAgcHJlc2VydmVRdWVyeVBhcmFtczogdHJ1ZSxcclxuLy8gICAgIHByZXNlcnZlRnJhZ21lbnQ6IHRydWUsXHJcbi8vICAgICBxdWVyeVBhcmFtczogeydncmlkX25hbWUnOiBncmlkTmFtZX0sXHJcbi8vICAgICBmcmFnbWVudDogJ2FuY2hvcidcclxuLy8gfTtcclxuLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydncmlkJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG5cclxuLy8gdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXMoZ3JpZHNMaXN0KVxyXG4vLyAgICAgLnN1YnNjcmliZShkYXRhID0+IHt9LFxyXG4vLyAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4vLyAgICAgKVxyXG4vLyB9LCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
