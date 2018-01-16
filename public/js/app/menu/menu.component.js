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
const step_service_1 = require("../Engine/step.service");
const router_1 = require("@angular/router");
const grid_service_1 = require("../components/grid.service");
const auth_service_1 = require("../auth/auth.service");
let MenuComponent = class MenuComponent {
    constructor(_stepService, router, _gridService, route, _authService) {
        this._stepService = _stepService;
        this.router = router;
        this._gridService = _gridService;
        this.route = route;
        this._authService = _authService;
        this.grids = [];
        this.ready = false;
        this.appName = '';
        this.preMenu = 0;
        this.backBtn = false;
        this.preMenuLst = [];
        this.level2 = false;
        this.val_level2 = '';
        this.firstLoad = true;
        this.signedIn = false;
    }
    ngOnInit() {
        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
        if (typeof this.route.snapshot.queryParams["firstLoad"] != 'undefined') {
            this.firstLoad = this.route.snapshot.queryParams["hasLoaded"];
        }
        console.log(this.firstLoad);
        if (typeof this.route.snapshot.queryParams["premenu"] != 'undefined') {
            this.preMenu = this.route.snapshot.queryParams["premenu"];
            console.log(this.preMenu);
        }
        console.log(this.preMenu);
        console.log(this.signedIn);
        this.sub = this.route.params.subscribe(params => {
            if (typeof params['signed'] != 'undefined') {
                console.log('ici dans signed et app');
                this.appName = params['app'];
                this.signedIn = params['signed'];
            }
        });
        console.log(this.signedIn);
        console.log(this.appName);
        console.log(this.firstLoad);
        console.log(this._stepService.steps[0].master_name);
        console.log(this._stepService.steps[0].master_type);
        console.log(this._stepService.steps[0].master_type == 'admin');
        if (this.isLoggedIn() && this._stepService.steps[0].master_type == 'admin' || this.preMenu == 1) {
            console.log("DANS PREMENU 1");
            this._gridService.getActivatedGrids(this._stepService.steps[0].master_name)
                .then(gridsList => {
                console.log(gridsList);
                this.grids = gridsList;
                for (let j = 0; j < this.grids.length; j++) {
                    console.log(this.grids[j].name);
                    console.log(this.grids[j].listBtn);
                    if (typeof this.grids[j].listBtn != 'undefined') {
                        if (this.firstLoad == true) {
                            this.preMenu = 1;
                            for (let main of this.grids[j].listBtn) {
                                if (this.preMenuLst.indexOf(main.name) == -1)
                                    this.preMenuLst.push(main.name);
                            }
                        }
                    }
                }
                if (this.route.snapshot.queryParams["premenu"] == 1) {
                    console.log('ici');
                    let master = this.route.snapshot.queryParams["master"];
                    this.getGridsBtn('e', master);
                }
                this.ready = true;
            }), error => console.log(error);
        }
        else {
            if (this._stepService.steps[0].master_type == 'form' && this.firstLoad) {
                this.router.navigate(['/step']);
            }
            else {
                if (this.isLoggedIn() == false && this.firstLoad == true) {
                    this.router.navigate(['/signin', this.appName]);
                }
            }
        }
    }
    getGridsBtn($event, val) {
        this.val_level2 = val;
        console.log(val);
        console.log(this.grids);
        this.gridBtns = [];
        for (let j = 0; j < this.grids.length; j++) {
            console.log(j);
            if (typeof this.grids[j].listBtn != 'undefined') {
                {
                    for (let obj of this.grids[j].listBtn) {
                        if (obj.name == val) {
                            this.gridBtns.push({ "children": obj.children, "nbRecords": obj.nbRecords });
                        }
                    }
                }
            }
        }
        this.preMenu = 2;
        this.backBtn = true;
        this.level2 = true;
    }
    onClick() {
        console.log(this.preMenuLst);
        this.preMenu = 1;
        this.backBtn = false;
    }
    logout() {
        this._authService.logout();
    }
    isLoggedIn() {
        return this._authService.isLoggedIn(this.appName);
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
    <div align="right" >
        <button (click)="logout()" class="btn btn-warning" ><i class="glyphicon glyphicon-log-out" ></i></button>
    </div>
    <div class="{{_stepService.template.panel_heading}}" *ngIf="preMenu == 2" >
        <div  class="row" align="left" >
            
            <div *ngIf="backBtn" class="col-md-2">
                
                <nav class="form-navArrow">
                    <button (click)="onClick()" class="btn btn-warning" >
                        <i class="glyphicon glyphicon-triangle-left" ></i>
                    </button>
                </nav>
            </div>
        
           <div class="col-md-10" align="center">
                <h2>{{val_level2}}</h2>
           </div>
          
        </div>
    </div>

    <div class="panel-body" *ngIf="ready == true">
          
           <div  *ngIf="preMenu == 0"> 
                <!--{{this.preMenu}}-->
                <div *ngFor="let grid of grids" class="col-md-3">
                 
                    <span *ngIf="grid.display">
                        
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name, 'master': 0, 'app_name': appName}"> 
                                <button type="button" class="btn btn-primary btn-lg" >{{grid.name}}</button>    
                            </a>
                    </span>
                </div>
            </div>
            
            <div *ngIf="preMenu == 1"> 
                <!--steps from admin_ballet-->
                    <!--step 1 { type : buttons } pass stage_name to step 2-->
                    <!--step 2 {type: grids} get all grids from stage_name-->
                <!--steps from grids-->
                 <!--{{this.preMenu}}-->
                 <div *ngFor="let btn of preMenuLst" align="center">
                    <button class="btn btn-primary btn-lg"  type="button"  style="width: 500px"
                        (click)="getGridsBtn($event, btn)"
                        value="{{btn.children}}">{{btn}}
                    </button>
                    <br><br>
                </div>
            </div>          
          
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>-->
            <div *ngIf="preMenu == 2"> 
                <div *ngFor="let grid of gridBtns" align="center">
                    <!--{{this.preMenu}}-->
                    <!--<div *ngIf="grid.display">-->
                       
                        <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.children, 'master': val_level2, 'app_name': appName}">
                            <button type="button" style="width: 500px" class="btn btn-primary btn-lg"><span  class="badge pull-left">{{grid.nbRecords}}</span><span> {{grid.children}}</span></button>
                            <!--<button type="button" style="width: 500px" class="btn btn-primary btn-lg" > {{grid}}</button> -->
                        </a>
                        <br><br>   
                    <!--</div>-->
                    
                </div>
            </div>
    </div>
`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, router_1.Router, grid_service_1.GridPanelService,
        router_1.ActivatedRoute, auth_service_1.AuthService])
], MenuComponent);
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FxRWI7S0FDQSxDQUFDO3FDQUdvQywwQkFBVyxFQUFrQixlQUFNLEVBQXdCLCtCQUFnQjtRQUNsRix1QkFBYyxFQUF3QiwwQkFBVztHQUZuRSxhQUFhLENBd0p6QjtBQXhKWSxzQ0FBYSIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGFsaWduPVwicmlnaHRcIiA+XHJcbiAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiID48L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIiAqbmdJZj1cInByZU1lbnUgPT0gMlwiID5cclxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJiYWNrQnRuXCIgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xMFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3t2YWxfbGV2ZWwyfX08L2gyPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICpuZ0lmPVwicmVhZHkgPT0gdHJ1ZVwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiAgKm5nSWY9XCJwcmVNZW51ID09IDBcIj4gXHJcbiAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkc1wiIGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQubmFtZSwgJ21hc3Rlcic6IDAsICdhcHBfbmFtZSc6IGFwcE5hbWV9XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiID57e2dyaWQubmFtZX19PC9idXR0b24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDFcIj4gXHJcbiAgICAgICAgICAgICAgICA8IS0tc3RlcHMgZnJvbSBhZG1pbl9iYWxsZXQtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tc3RlcCAxIHsgdHlwZSA6IGJ1dHRvbnMgfSBwYXNzIHN0YWdlX25hbWUgdG8gc3RlcCAyLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMiB7dHlwZTogZ3JpZHN9IGdldCBhbGwgZ3JpZHMgZnJvbSBzdGFnZV9uYW1lLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tc3RlcHMgZnJvbSBncmlkcy0tPlxyXG4gICAgICAgICAgICAgICAgIDwhLS17e3RoaXMucHJlTWVudX19LS0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYnRuIG9mIHByZU1lbnVMc3RcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgIHR5cGU9XCJidXR0b25cIiAgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0R3JpZHNCdG4oJGV2ZW50LCBidG4pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2J0bi5jaGlsZHJlbn19XCI+e3tidG59fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3N0ZXAnXVwiPiBOb3V2ZWF1IGZsb3c8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDJcIj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRCdG5zXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiZ3JpZC5kaXNwbGF5XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQuY2hpbGRyZW4sICdtYXN0ZXInOiB2YWxfbGV2ZWwyLCAnYXBwX25hbWUnOiBhcHBOYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIj48c3BhbiAgY2xhc3M9XCJiYWRnZSBwdWxsLWxlZnRcIj57e2dyaWQubmJSZWNvcmRzfX08L3NwYW4+PHNwYW4+IHt7Z3JpZC5jaGlsZHJlbn19PC9zcGFuPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgPiB7e2dyaWR9fTwvYnV0dG9uPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPiAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2F1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIGdyaWRzID0gW107XHJcbiAgICByZWFkeSA9IGZhbHNlO1xyXG4gICAgYXBwTmFtZSA9ICcnO1xyXG4gICAgcHJlTWVudSA9IDA7XHJcbiAgICBiYWNrQnRuID0gZmFsc2U7XHJcbiAgICBwcmVNZW51THN0ID0gW107XHJcbiAgICBsZXZlbDIgPSBmYWxzZTtcclxuICAgIHZhbF9sZXZlbDIgPSAnJztcclxuICAgIGZpcnN0TG9hZCA9IHRydWU7XHJcbiAgICBncmlkQnRucztcclxuICAgIHNpZ25lZEluPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3ViOiBhbnk7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImFwcFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpO1xyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImZpcnN0TG9hZFwiXSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0TG9hZCA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJoYXNMb2FkZWRcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RMb2FkKVxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInByZW1lbnVcIl0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmVNZW51ID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInByZW1lbnVcIl07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlTWVudSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZU1lbnUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbmVkSW4pO1xyXG5cclxuICAgICAgICB0aGlzLnN1YiA9IHRoaXMucm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcmFtc1snc2lnbmVkJ10gIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaSBkYW5zIHNpZ25lZCBldCBhcHAnKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBOYW1lID0gcGFyYW1zWydhcHAnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2lnbmVkSW4gPSBwYXJhbXNbJ3NpZ25lZCddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaWduZWRJbik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TG9hZCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl9uYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdhZG1pbicpXHJcbiAgICAgICAgLy8gdGhpcy5zaWduZWRJbiB8fFxyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSAmJiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnYWRtaW4nIHx8IHRoaXMucHJlTWVudSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQU5TIFBSRU1FTlUgMVwiKVxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXRBY3RpdmF0ZWRHcmlkcyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRzTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWRzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzTGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubGlzdEJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0TG9hZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1haW4gb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVNZW51THN0LmluZGV4T2YobWFpbi5uYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZU1lbnVMc3QucHVzaChtYWluLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5maXJzdExvYWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRHcmlkc0J0bigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByZU1lbnUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJzInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwcmVtZW51XCJdID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2knKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hc3RlciA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJtYXN0ZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRHcmlkc0J0bignZScsbWFzdGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2Zvcm0nICYmIHRoaXMuZmlyc3RMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpICA9PSBmYWxzZSAmJiB0aGlzLmZpcnN0TG9hZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJywgdGhpcy5hcHBOYW1lXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBnZXRHcmlkc0J0bigkZXZlbnQsIHZhbCkge1xyXG4gICAgICAgIC8vdGhpcy5ncmlkQnRucyA9ICRldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWxfbGV2ZWwyID0gdmFsO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5ncmlkQnRucyk7XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhncmlkTGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHMpXHJcbiAgICAgICAgLy8gVE9VUyBMRVMgR1JJRFMgZGUgbGEgY29sbGVjdGlvbiBncmlkc1xyXG4gICAgICAgIHRoaXMuZ3JpZEJ0bnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgLy9jYXMgb8O5IHVuIHByw6ltZW51IGV4aXN0IGFsb3JzIG9uIGEgZGFucyBncmlkcyB1biBcInR5cGVcIjogXCJsaXN0QnRuXCJcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaik7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgb2JqIG9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgbGV0IG9iaiA9IHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bi5maW5kKG8gPT4gby52YWx1ZSA9PSB2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmoubmFtZSA9PSB2YWwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuZ3JpZEJ0bnMuaW5kZXhPZih7XCJjaGlsZHJlblwiOm9iai5jaGlsZHJlbiwgXCJuYlJlY29yZHNcIjogb2JqLm5iUmVjb3Jkc30pID09IDEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRCdG5zLnB1c2goe1wiY2hpbGRyZW5cIjpvYmouY2hpbGRyZW4sIFwibmJSZWNvcmRzXCI6IG9iai5uYlJlY29yZHN9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByZU1lbnUgPSAyO1xyXG4gICAgICAgIHRoaXMuYmFja0J0biA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5sZXZlbDIgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVNZW51THN0KTtcclxuICAgICAgICB0aGlzLnByZU1lbnUgPSAxO1xyXG4gICAgICAgIHRoaXMuYmFja0J0biA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIHRoaXMuX2F1dGhTZXJ2aWNlLmxvZ291dCgpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKHRoaXMuYXBwTmFtZSlcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
