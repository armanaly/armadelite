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
var grid_service_1 = require("../components/grid.service");
var MenuComponent = (function () {
    function MenuComponent(_stepService, router, _gridService, route) {
        this._stepService = _stepService;
        this.router = router;
        this._gridService = _gridService;
        this.route = route;
        this.grids = [];
        this.ready = false;
        this.appName = '';
        this.preMenu = 0;
        this.backBtn = false;
        this.preMenuLst = [];
        this.level2 = false;
        this.val_level2 = '';
        this.firstLoad = true;
    }
    MenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appName = this.route.snapshot.queryParams["app"];
        if (typeof this.route.snapshot.queryParams["firstLoad"] != 'undefined') {
            this.firstLoad = this.route.snapshot.queryParams["hasLoaded"];
        }
        console.log(this.appName);
        console.log(this.firstLoad);
        console.log(this.grids);
        console.log(this._stepService.steps[0].master_name);
        if (this._stepService.steps[0].master_type == 'form' && this.firstLoad) {
            this.router.navigate(['/step']);
        }
        else {
            this._gridService.getActivatedGrids(this._stepService.steps[0].master_name)
                .then(function (gridsList) {
                console.log(gridsList);
                _this.grids = gridsList;
                for (var j = 0; j < _this.grids.length; j++) {
                    console.log(_this.grids[j].name);
                    console.log(_this.grids[j].listBtn);
                    if (typeof _this.grids[j].listBtn != 'undefined') {
                        if (_this.firstLoad == true) {
                            _this.preMenu = 1;
                            _this.preMenuLst = _this.grids[j].listBtn;
                            console.log(_this.grids[j].listBtn);
                        }
                    }
                }
                _this.ready = true;
            }), function (error) { return console.log(error); };
        }
    };
    MenuComponent.prototype.getGridsBtn = function ($event, val) {
        this.val_level2 = val;
        console.log(val);
        for (var idxGrid in this.grids) {
            if (typeof this.grids[idxGrid].listBtn != 'undefined') {
                {
                    var obj = this.grids[idxGrid].listBtn.find(function (o) { return o.value == val; });
                    this.gridBtns = obj.children;
                }
            }
        }
        this.preMenu = 2;
        this.backBtn = true;
        this.level2 = true;
    };
    MenuComponent.prototype.onClick = function () {
        this.preMenu = 1;
        this.backBtn = false;
    };
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'grid-panel',
            template: "\n\n\n          \n    <div class=\"panel-heading panel-heading-custom\" *ngIf=\"preMenu == 2\">\n        <div  class=\"row\" align=\"left\">\n            \n            <div *ngIf=\"backBtn\" class=\"col-md-2\">\n                \n                <nav class=\"form-navArrow\">\n                    <button (click)=\"onClick()\" class=\"btn btn-warning\" ><i class=\"glyphicon glyphicon-triangle-left\" > STAGES</i></button>\n                </nav>\n            </div>\n        \n           <div class=\"col-md-10\" align=\"center\">\n                <h2>{{val_level2}}</h2>\n           </div>\n        </div>\n    </div>\n\n    <div class=\"panel-body\" *ngIf=\"ready == true\">\n           <div>{{preMenu}}</div>\n           <div  *ngIf=\"preMenu == 0\"> \n                <div *ngFor=\"let grid of grids\" class=\"col-md-3\">\n                    <!--<button class=\"btn btn-success\" type=\"button\" (click)=\"showGrid(grid.name)\" value=\"{{grid.name}} \">{{grid.name}} -->\n                    <!--</button>-->\n                    <span *ngIf=\"grid.display\">\n                        <button type=\"button\" class=\"btn btn-primary btn-lg\" >\n                            <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': grid.name, 'master':_stepService.steps[0].master_name, 'app_name': appName}\">{{grid.name}} </a>\n                        </button>\n                    </span>\n                </div>\n            </div>\n            \n            <div *ngIf=\"preMenu == 1\"> \n                <!--steps from admin_ballet-->\n                    <!--step 1 { type : buttons } pass stage_name to step 2-->\n                    <!--step 2 {type: grids} get all grids from stage_name-->\n                <!--steps from grids-->\n                 <div *ngFor=\"let btn of preMenuLst\" align=\"center\">\n                    <button class=\"btn btn-primary btn-lg\"  type=\"button\"  style=\"width: 500px\"\n                        (click)=\"getGridsBtn($event, btn.value)\"\n                        value=\"{{btn.children}}\">{{btn.value}}\n                    </button>\n                    <br><br>\n                </div>\n            \n            \n            </div>          \n          \n          \n            <!--<div class=\"col-md-3\"><button type=\"button\" class=\"btn btn-success\"><a [routerLink]=\"['/step']\"> Nouveau flow</a></button></div>-->\n            <div *ngIf=\"preMenu == 2\"> \n                <div *ngFor=\"let grid of gridBtns\" align=\"center\">\n                    <!--<div *ngIf=\"grid.display\">-->\n                        <a [routerLink]=\"['/grid']\" [queryParams]=\"{'grid_name': grid, 'master': val_level2, 'app_name': appName}\">\n                            <button type=\"button\" style=\"width: 500px\" class=\"btn btn-primary btn-lg\" > {{grid}}</button> \n                        </a>\n                        <br><br>   \n                    <!--</div>-->\n                    \n                </div>\n            </div>\n    </div>\n"
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, grid_service_1.GridPanelService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
    ], MenuComponent);
    return MenuComponent;
    var _a, _b;
}());
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;base64,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QUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQWQsQ0FBYyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQztnQkFnQ2pDLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDekIsQ0FBQztJQXhMTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsODdGQWdFYjtTQUNBLENBQUM7O3FCQUFBO0lBdUhGLG9CQUFDOztBQUFELENBckhBLEFBcUhDLElBQUE7QUFySFkscUJBQWEsZ0JBcUh6QixDQUFBIiwiZmlsZSI6Im1lbnUvbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZC5zZXJ2aWNlXCI7XG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgXG5cblxuICAgICAgICAgIFxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgKm5nSWY9XCJwcmVNZW51ID09IDJcIj5cbiAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJhY2tCdG5cIiBjbGFzcz1cImNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+IFNUQUdFUzwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPnt7dmFsX2xldmVsMn19PC9oMj5cbiAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cInJlYWR5ID09IHRydWVcIj5cbiAgICAgICAgICAgPGRpdj57e3ByZU1lbnV9fTwvZGl2PlxuICAgICAgICAgICA8ZGl2ICAqbmdJZj1cInByZU1lbnUgPT0gMFwiPiBcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRzXCIgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2hvd0dyaWQoZ3JpZC5uYW1lKVwiIHZhbHVlPVwie3tncmlkLm5hbWV9fSBcIj57e2dyaWQubmFtZX19IC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZ3JpZC5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogZ3JpZC5uYW1lLCAnbWFzdGVyJzpfc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX25hbWUsICdhcHBfbmFtZSc6IGFwcE5hbWV9XCI+e3tncmlkLm5hbWV9fSA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDFcIj4gXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gYWRtaW5fYmFsbGV0LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1zdGVwIDEgeyB0eXBlIDogYnV0dG9ucyB9IHBhc3Mgc3RhZ2VfbmFtZSB0byBzdGVwIDItLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMiB7dHlwZTogZ3JpZHN9IGdldCBhbGwgZ3JpZHMgZnJvbSBzdGFnZV9uYW1lLS0+XG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gZ3JpZHMtLT5cbiAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYnRuIG9mIHByZU1lbnVMc3RcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiICB0eXBlPVwiYnV0dG9uXCIgIHN0eWxlPVwid2lkdGg6IDUwMHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJnZXRHcmlkc0J0bigkZXZlbnQsIGJ0bi52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2J0bi5jaGlsZHJlbn19XCI+e3tidG4udmFsdWV9fVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTm91dmVhdSBmbG93PC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInByZU1lbnUgPT0gMlwiPiBcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRCdG5zXCIgYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgKm5nSWY9XCJncmlkLmRpc3BsYXlcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQsICdtYXN0ZXInOiB2YWxfbGV2ZWwyLCAnYXBwX25hbWUnOiBhcHBOYW1lfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgPiB7e2dyaWR9fTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48YnI+ICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgZ3JpZHMgPSBbXTtcbiAgICByZWFkeSA9IGZhbHNlO1xuICAgIGFwcE5hbWUgPSAnJztcbiAgICBwcmVNZW51ID0gMDtcbiAgICBiYWNrQnRuID0gZmFsc2U7XG4gICAgcHJlTWVudUxzdCA9IFtdO1xuICAgIGxldmVsMiA9IGZhbHNlO1xuICAgIHZhbF9sZXZlbDIgPSAnJztcbiAgICBmaXJzdExvYWQgPSB0cnVlO1xuICAgIGdyaWRCdG5zO1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJmaXJzdExvYWRcIl0gIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RMb2FkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImhhc0xvYWRlZFwiXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RMb2FkKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkcylcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSlcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdmb3JtJyAmJiB0aGlzLmZpcnN0TG9hZCkge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldEFjdGl2YXRlZEdyaWRzKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl9uYW1lKVxuICAgICAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgICAgICBncmlkc0xpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ3JpZHNMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5saXN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdExvYWQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVNZW51ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudUxzdCA9IHRoaXMuZ3JpZHNbal0ubGlzdEJ0bjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubGlzdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmZpcnN0TG9hZCA9PSBmYWxzZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRHcmlkc0J0bigpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcmVNZW51ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGdldEdyaWRzQnRuKCRldmVudCwgdmFsKSB7XG4gICAgICAgIC8vdGhpcy5ncmlkQnRucyA9ICRldmVudC50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMudmFsX2xldmVsMiA9IHZhbDtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdyaWRCdG5zKTtcbiAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkTGlzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICAgICAgLy8gVE9VUyBMRVMgR1JJRFMgZGUgbGEgY29sbGVjdGlvbiBncmlkc1xuICAgICAgICBmb3IgKGxldCBpZHhHcmlkIGluIHRoaXMuZ3JpZHMpIHtcbiAgICAgICAgICAgIC8vY2FzIG/DuSB1biBwcsOpbWVudSBleGlzdCBhbG9ycyBvbiBhIGRhbnMgZ3JpZHMgdW4gXCJ0eXBlXCI6IFwibGlzdEJ0blwiXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAvL2ZvciAobGV0IGkgaW4gdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuKSB7XG4gICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0gdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuLmZpbmQobyA9PiBvLnZhbHVlID09IHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZEJ0bnMgPSBvYmouY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmouY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyaWRzKSxcbiAgICAgICAgIC8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ3JpZExpc3QpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG4uaW5kZXhPZi52YWx1ZSA9PSB2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMuZ3JpZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmdyaWRCdG5zID0gdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW4uaW5kZXhPZih0aGlzLmdyaWRzW2pdLm5hbWUpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHNbal0uZGlzcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW2pdLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gdGhpcy5ncmlkc1tqXS5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkQnRucylcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAvL3RoaXMuZ3JpZHMgPSB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW47XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8gamUgZG9pcyB1bmlxdWVtZW50IGdhcmRlciBsZXMgYnRuIGRlIHRoaXMuZ3JpZHMgcXVpIHNvbnQgZGFucyBsYSBsaXN0ZSBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVNZW51ID0gMjtcbiAgICAgICAgdGhpcy5iYWNrQnRuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5sZXZlbDIgPSB0cnVlO1xuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMucHJlTWVudSA9IDE7XG4gICAgICAgIHRoaXMuYmFja0J0biA9IGZhbHNlO1xuICAgIH1cblxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
