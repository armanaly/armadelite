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
    constructor(_stepService, router, _gridService, route) {
        this._stepService = _stepService;
        this.router = router;
        this._gridService = _gridService;
        this.route = route;
        this.grids = [];
        this.ready = false;
        this.appName = '';
        this.preMenu = 0;
        this.preMenuLst = [];
        this.level2 = false;
        this.val_level2 = '';
    }
    ngOnInit() {
        this.appName = this.route.snapshot.queryParams["app"];
        if (this._stepService.steps[0].master_type == 'form') {
            this.router.navigate(['/step']);
        }
        else {
            this._gridService.getActivatedGrids()
                .then(gridsList => {
                console.log(gridsList);
                this.grids = gridsList;
                for (let j = 0; j < this.grids.length; j++) {
                    console.log(this.grids[j].name);
                    console.log(this.grids[j].listBtn);
                    if (typeof this.grids[j].listBtn != 'undefined') {
                        this.preMenu = 1;
                        this.preMenuLst = this.grids[j].listBtn;
                        console.log(this.grids[j].listBtn);
                    }
                }
                this.ready = true;
            }), error => console.log(error);
        }
    }
    getGridsBtn($event, val) {
        var gridList = $event.target.value;
        this.val_level2 = val;
        console.log(gridList);
        console.log(val);
        for (let idxGrid in this.grids) {
            if (typeof this.grids[idxGrid].listBtn != 'undefined') {
                {
                    for (let i in this.grids[idxGrid].listBtn) {
                        if (this.grids[idxGrid].listBtn[i].value == val) {
                            console.log(this.grids[idxGrid].listBtn[i]);
                            console.log(this.grids[idxGrid].listBtn[i].value);
                            console.log(this.grids[idxGrid].listBtn[i].children);
                            for (let j in this.grids) {
                                console.log(this.grids[j].name);
                                console.log(this.grids[idxGrid].listBtn[i].children);
                                console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
                                if (this.grids[idxGrid].listBtn[i].children.indexOf(this.grids[j].name) > -1) {
                                    this.grids[j].display = true;
                                }
                                else {
                                    this.grids[j].display = false;
                                }
                            }
                            console.log(this.grids);
                        }
                    }
                }
            }
        }
        this.preMenu = 2;
        this.level2 = true;
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `

    
    <div class="row" align="center" *ngIf="ready == true">

            <div *ngIf="preMenu == 1"> 
                <!--steps from admin_ballet-->
                    <!--step 1 { type : buttons } pass stage_name to step 2-->
                    <!--step 2 {type: grids} get all grids from stage_name-->
                <!--steps from grids-->
                
                 <div *ngFor="let btn of preMenuLst" class="col-md-3">
                    <button class="btn btn-success" type="button" 
                        (click)="getGridsBtn($event, btn.value)"
                        value="{{btn.children}}">{{btn.value}}
                    </button>
                </div>
            
            
            </div>
            
            <div *ngIf="preMenu == 2"> 
                <div *ngFor="let grid of grids" class="col-md-3">
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <div *ngIf="grid.display">
                        <button type="button" class="btn btn-success" >
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name, 'master_val': val_level2}">{{grid.name}} </a>
                        </button>
                    </div>
                </div>
            </div>
            
            
           <div  *ngIf="preMenu == 0"> 
                <div *ngFor="let grid of grids" class="col-md-3">
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <span *ngIf="grid.display">
                        <button type="button" class="btn btn-success" >
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name}">{{grid.name}} </a>
                        </button>
                    </span>
                </div>
            </div>
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>-->

    </div>
` }), 
    __metadata('design:paramtypes', [step_service_1.StepService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, gridPanel_service_1.GridPanelService, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object])
], MenuComponent);
exports.MenuComponent = MenuComponent;
var _a, _b;

//# sourceMappingURL=data:application/json;base64,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QUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dDQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUE7Z0NBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUUsQ0FBQyxDQUM5RSxDQUFDO29DQUNHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQ0FDakMsQ0FBQztnQ0FDRCxJQUFJLENBQUEsQ0FBQztvQ0FDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0NBQ2xDLENBQUM7NEJBQ0wsQ0FBQzs0QkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTt3QkFJM0IsQ0FBQztvQkFFTCxDQUFDO2dCQUVMLENBQUM7WUFDRCxDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7QUFFTCxDQUFDO0FBcklEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBZ0RiLEVBQUUsQ0FBQzs7aUJBQUE7QUFFUyxxQkFBYSxnQkFpRnpCLENBQUEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwicm93XCIgYWxpZ249XCJjZW50ZXJcIiAqbmdJZj1cInJlYWR5ID09IHRydWVcIj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDFcIj4gXHJcbiAgICAgICAgICAgICAgICA8IS0tc3RlcHMgZnJvbSBhZG1pbl9iYWxsZXQtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tc3RlcCAxIHsgdHlwZSA6IGJ1dHRvbnMgfSBwYXNzIHN0YWdlX25hbWUgdG8gc3RlcCAyLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMiB7dHlwZTogZ3JpZHN9IGdldCBhbGwgZ3JpZHMgZnJvbSBzdGFnZV9uYW1lLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tc3RlcHMgZnJvbSBncmlkcy0tPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYnRuIG9mIHByZU1lbnVMc3RcIiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImdldEdyaWRzQnRuKCRldmVudCwgYnRuLnZhbHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tidG4uY2hpbGRyZW59fVwiPnt7YnRuLnZhbHVlfX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInByZU1lbnUgPT0gMlwiPiBcclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGdyaWQgb2YgZ3JpZHNcIiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dHcmlkKGdyaWQubmFtZSlcIiB2YWx1ZT1cInt7Z3JpZC5uYW1lfX0gXCI+e3tncmlkLm5hbWV9fSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQubmFtZSwgJ21hc3Rlcl92YWwnOiB2YWxfbGV2ZWwyfVwiPnt7Z3JpZC5uYW1lfX0gPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgICpuZ0lmPVwicHJlTWVudSA9PSAwXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkc1wiIGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2hvd0dyaWQoZ3JpZC5uYW1lKVwiIHZhbHVlPVwie3tncmlkLm5hbWV9fSBcIj57e2dyaWQubmFtZX19IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQubmFtZX1cIj57e2dyaWQubmFtZX19IDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTm91dmVhdSBmbG93PC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG5cclxuICAgIDwvZGl2PlxyXG5gIH0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgICBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLFxyXG4gICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgIClcclxuICAgIHt9XHJcbiAgICBncmlkcyA9IFtdO1xyXG4gICAgcmVhZHkgPSBmYWxzZTtcclxuICAgIGFwcE5hbWUgPSAnJztcclxuICAgIHByZU1lbnUgPSAwO1xyXG4gICAgcHJlTWVudUxzdCA9IFtdO1xyXG4gICAgbGV2ZWwyID0gZmFsc2U7XHJcbiAgICB2YWxfbGV2ZWwyID0gJyc7XHJcbiAgICBuZ09uSW5pdCgpe1xyXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdmb3JtJyApe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSk7XHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXRBY3RpdmF0ZWRHcmlkcygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZHNMaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhncmlkc0xpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5saXN0QnRuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZU1lbnUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudUxzdCA9IHRoaXMuZ3JpZHNbal0ubGlzdEJ0bjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubGlzdEJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICB9KSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEdyaWRzQnRuKCRldmVudCwgdmFsKXtcclxuICAgICAgICB2YXIgZ3JpZExpc3QgPSAkZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsX2xldmVsMiA9IHZhbDtcclxuICAgICAgICBjb25zb2xlLmxvZyhncmlkTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgIC8vIFRPVVMgTEVTIEdSSURTIGRlIGxhIGNvbGxlY3Rpb24gZ3JpZHNcclxuICAgICAgICBmb3IgKGxldCBpZHhHcmlkIGluIHRoaXMuZ3JpZHMpe1xyXG4gICAgICAgICAgICAvL2NhcyBvw7kgdW4gcHLDqW1lbnUgZXhpc3QgYWxvcnMgb24gYSBkYW5zIGdyaWRzIHVuIFwidHlwZVwiOiBcImxpc3RCdG5cIlxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG4gIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bil7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS52YWx1ZSA9PSB2YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMuZ3JpZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubmFtZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLmNoaWxkcmVuLmluZGV4T2YodGhpcy5ncmlkc1tqXS5uYW1lKSA+IC0xIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW2pdLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW2pdLmRpc3BsYXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMuZ3JpZHMgPSB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGplIGRvaXMgdW5pcXVlbWVudCBnYXJkZXIgbGVzIGJ0biBkZSB0aGlzLmdyaWRzIHF1aSBzb250IGRhbnMgbGEgbGlzdGUgY2hpbGRyZW5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZU1lbnUgPSAyO1xyXG4gICAgICAgIHRoaXMubGV2ZWwyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
