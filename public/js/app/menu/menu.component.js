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
        console.log(this.isLoggedIn());
        console.log(this.preMenu);
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
        console.log(this.appName);
        return this._authService.isLoggedIn();
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
     <div class="{{_stepService.template.panel_heading}}" *ngIf="preMenu == 1"  >
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
        
           <div class="col-md-9" align="center">
                <h2>{{val_level2}}</h2>
           </div>
           <div class="col-md-1" align="center">
                <button (click)="logout()" class="btn btn-warning" ><i class="glyphicon glyphicon-log-out" ></i></button>
           </div>
          
        </div>
    </div>

    <div class="panel-body" *ngIf="ready == true">
          
           <div  *ngIf="preMenu == 0"> 
                <!--{{this.preMenu}}-->
                <div *ngFor="let grid of grids" class="col-md-3">
                 
                    <span *ngIf="grid.display">
                        
                            <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name, 'master': 0, 'app_name': appName}"> 
                                <button type="button" class="{{_stepService.template.list_btn}}" >{{grid.name}}</button>    
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
                    <button class="{{_stepService.template.list_btn}}"  type="button"  style="width: 500px"
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
                            <button type="button" style="width: 500px" class="{{_stepService.template.list_btn}}" ><span  class="badge pull-left">{{grid.nbRecords}}</span><span> {{grid.children}}</span></button>
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

//# sourceMappingURL=data:application/json;base64,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QTtJQUN6QyxDQUFDO0NBQ0osQ0FBQTtBQTNKWSxhQUFhO0lBN0V6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F3RWI7S0FDQSxDQUFDO3FDQUdvQywwQkFBVyxFQUFrQixlQUFNLEVBQXdCLCtCQUFnQjtRQUNsRix1QkFBYyxFQUF3QiwwQkFBVztHQUZuRSxhQUFhLENBMkp6QjtBQTNKWSxzQ0FBYSIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbU1hcH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9ncmlkLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtBdXRoU2VydmljZX0gZnJvbSBcIi4uL2F1dGgvYXV0aC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiICpuZ0lmPVwicHJlTWVudSA9PSAxXCIgID5cclxuICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiID48L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIiAqbmdJZj1cInByZU1lbnUgPT0gMlwiID5cclxuICAgICAgICA8ZGl2ICBjbGFzcz1cInJvd1wiIGFsaWduPVwibGVmdFwiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJiYWNrQnRuXCIgY2xhc3M9XCJjb2wtbWQtMlwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC05XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMj57e3ZhbF9sZXZlbDJ9fTwvaDI+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0xXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cImxvZ291dCgpXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiICpuZ0lmPVwicmVhZHkgPT0gdHJ1ZVwiPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgPGRpdiAgKm5nSWY9XCJwcmVNZW51ID09IDBcIj4gXHJcbiAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkc1wiIGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQubmFtZSwgJ21hc3Rlcic6IDAsICdhcHBfbmFtZSc6IGFwcE5hbWV9XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiID57e2dyaWQubmFtZX19PC9idXR0b24+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDFcIj4gXHJcbiAgICAgICAgICAgICAgICA8IS0tc3RlcHMgZnJvbSBhZG1pbl9iYWxsZXQtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tc3RlcCAxIHsgdHlwZSA6IGJ1dHRvbnMgfSBwYXNzIHN0YWdlX25hbWUgdG8gc3RlcCAyLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMiB7dHlwZTogZ3JpZHN9IGdldCBhbGwgZ3JpZHMgZnJvbSBzdGFnZV9uYW1lLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tc3RlcHMgZnJvbSBncmlkcy0tPlxyXG4gICAgICAgICAgICAgICAgIDwhLS17e3RoaXMucHJlTWVudX19LS0+XHJcbiAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYnRuIG9mIHByZU1lbnVMc3RcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgIHR5cGU9XCJidXR0b25cIiAgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0R3JpZHNCdG4oJGV2ZW50LCBidG4pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e2J0bi5jaGlsZHJlbn19XCI+e3tidG59fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3N0ZXAnXVwiPiBOb3V2ZWF1IGZsb3c8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDJcIj4gXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRCdG5zXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiZ3JpZC5kaXNwbGF5XCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQuY2hpbGRyZW4sICdtYXN0ZXInOiB2YWxfbGV2ZWwyLCAnYXBwX25hbWUnOiBhcHBOYW1lfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiA+PHNwYW4gIGNsYXNzPVwiYmFkZ2UgcHVsbC1sZWZ0XCI+e3tncmlkLm5iUmVjb3Jkc319PC9zcGFuPjxzcGFuPiB7e2dyaWQuY2hpbGRyZW59fTwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIndpZHRoOiA1MDBweFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiID4ge3tncmlkfX08L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjxicj4gICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBncmlkcyA9IFtdO1xyXG4gICAgcmVhZHkgPSBmYWxzZTtcclxuICAgIGFwcE5hbWUgPSAnJztcclxuICAgIHByZU1lbnUgPSAwO1xyXG4gICAgYmFja0J0biA9IGZhbHNlO1xyXG4gICAgcHJlTWVudUxzdCA9IFtdO1xyXG4gICAgbGV2ZWwyID0gZmFsc2U7XHJcbiAgICB2YWxfbGV2ZWwyID0gJyc7XHJcbiAgICBmaXJzdExvYWQgPSB0cnVlO1xyXG4gICAgZ3JpZEJ0bnM7XHJcbiAgICBzaWduZWRJbj0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJmaXJzdExvYWRcIl0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdExvYWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiaGFzTG9hZGVkXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TG9hZClcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwcmVtZW51XCJdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlTWVudSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwcmVtZW51XCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZU1lbnUpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVNZW51KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ25lZEluKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3NpZ25lZCddICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2kgZGFucyBzaWduZWQgZXQgYXBwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwTmFtZSA9IHBhcmFtc1snYXBwJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25lZEluID0gcGFyYW1zWydzaWduZWQnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbmVkSW4pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maXJzdExvYWQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnYWRtaW4nKVxyXG4gICAgICAgIC8vIHRoaXMuc2lnbmVkSW4gfHxcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzTG9nZ2VkSW4oKSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZU1lbnUpXHJcbiAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpICYmIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdhZG1pbicgfHwgdGhpcy5wcmVNZW51ID09IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRBTlMgUFJFTUVOVSAxXCIpXHJcbiAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldEFjdGl2YXRlZEdyaWRzKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl9uYW1lKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZHNMaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ3JpZHNMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzID0gZ3JpZHNMaXN0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2pdLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5saXN0QnRuKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlyc3RMb2FkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVNZW51ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgbWFpbiBvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZU1lbnVMc3QuaW5kZXhPZihtYWluLm5hbWUpID09IC0xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudUxzdC5wdXNoKG1haW4ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmZpcnN0TG9hZCA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmdldEdyaWRzQnRuKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMucHJlTWVudSA9IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnMicpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcInByZW1lbnVcIl0gPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ljaScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWFzdGVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcIm1hc3RlclwiXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdldEdyaWRzQnRuKCdlJyxtYXN0ZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnZm9ybScgJiYgdGhpcy5maXJzdExvYWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKCkgPT0gZmFsc2UgJiYgdGhpcy5maXJzdExvYWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ25pbicsIHRoaXMuYXBwTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0R3JpZHNCdG4oJGV2ZW50LCB2YWwpIHtcclxuICAgICAgICAvL3RoaXMuZ3JpZEJ0bnMgPSAkZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsX2xldmVsMiA9IHZhbDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ3JpZEJ0bnMpO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coZ3JpZExpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzKVxyXG4gICAgICAgIC8vIFRPVVMgTEVTIEdSSURTIGRlIGxhIGNvbGxlY3Rpb24gZ3JpZHNcclxuICAgICAgICB0aGlzLmdyaWRCdG5zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vY2FzIG/DuSB1biBwcsOpbWVudSBleGlzdCBhbG9ycyBvbiBhIGRhbnMgZ3JpZHMgdW4gXCJ0eXBlXCI6IFwibGlzdEJ0blwiXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGopO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGxldCBvYmogPSB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG4uZmluZChvID0+IG8udmFsdWUgPT0gdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm5hbWUgPT0gdmFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmdyaWRCdG5zLmluZGV4T2Yoe1wiY2hpbGRyZW5cIjpvYmouY2hpbGRyZW4sIFwibmJSZWNvcmRzXCI6IG9iai5uYlJlY29yZHN9KSA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkQnRucy5wdXNoKHtcImNoaWxkcmVuXCI6b2JqLmNoaWxkcmVuLCBcIm5iUmVjb3Jkc1wiOiBvYmoubmJSZWNvcmRzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVNZW51ID0gMjtcclxuICAgICAgICB0aGlzLmJhY2tCdG4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGV2ZWwyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlTWVudUxzdCk7XHJcbiAgICAgICAgdGhpcy5wcmVNZW51ID0gMTtcclxuICAgICAgICB0aGlzLmJhY2tCdG4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2F1dGhTZXJ2aWNlLmlzTG9nZ2VkSW4oKVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
