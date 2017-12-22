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
        return this._authService.isLoggedIn();
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

//# sourceMappingURL=data:application/json;base64,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cUViO0tBQ0EsQ0FBQztxQ0FHb0MsMEJBQVcsRUFBa0IsZUFBTSxFQUF3QiwrQkFBZ0I7UUFDbEYsdUJBQWMsRUFBd0IsMEJBQVc7R0FGbkUsYUFBYSxDQXdKekI7QUF4Slksc0NBQWEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBhbGlnbj1cInJpZ2h0XCIgPlxyXG4gICAgICAgIDxidXR0b24gKGNsaWNrKT1cImxvZ291dCgpXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWxvZy1vdXRcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCIgKm5nSWY9XCJwcmVNZW51ID09IDJcIiA+XHJcbiAgICAgICAgPGRpdiAgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImxlZnRcIiA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiYmFja0J0blwiIGNsYXNzPVwiY29sLW1kLTJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTBcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPnt7dmFsX2xldmVsMn19PC9oMj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cInJlYWR5ID09IHRydWVcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgICpuZ0lmPVwicHJlTWVudSA9PSAwXCI+IFxyXG4gICAgICAgICAgICAgICAgPCEtLXt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGdyaWQgb2YgZ3JpZHNcIiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJncmlkLmRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLm5hbWUsICdtYXN0ZXInOiAwLCAnYXBwX25hbWUnOiBhcHBOYW1lfVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+e3tncmlkLm5hbWV9fTwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAxXCI+IFxyXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gYWRtaW5fYmFsbGV0LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMSB7IHR5cGUgOiBidXR0b25zIH0gcGFzcyBzdGFnZV9uYW1lIHRvIHN0ZXAgMi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1zdGVwIDIge3R5cGU6IGdyaWRzfSBnZXQgYWxsIGdyaWRzIGZyb20gc3RhZ2VfbmFtZS0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gZ3JpZHMtLT5cclxuICAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGJ0biBvZiBwcmVNZW51THN0XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiICB0eXBlPVwiYnV0dG9uXCIgIHN0eWxlPVwid2lkdGg6IDUwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImdldEdyaWRzQnRuKCRldmVudCwgYnRuKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tidG4uY2hpbGRyZW59fVwiPnt7YnRufX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTm91dmVhdSBmbG93PC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkQnRuc1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLmNoaWxkcmVuLCAnbWFzdGVyJzogdmFsX2xldmVsMiwgJ2FwcF9uYW1lJzogYXBwTmFtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCI+PHNwYW4gIGNsYXNzPVwiYmFkZ2UgcHVsbC1sZWZ0XCI+e3tncmlkLm5iUmVjb3Jkc319PC9zcGFuPjxzcGFuPiB7e2dyaWQuY2hpbGRyZW59fTwvc3Bhbj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBzdHlsZT1cIndpZHRoOiA1MDBweFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiID4ge3tncmlkfX08L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjxicj4gICBcclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSxcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9hdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbiAgICBncmlkcyA9IFtdO1xyXG4gICAgcmVhZHkgPSBmYWxzZTtcclxuICAgIGFwcE5hbWUgPSAnJztcclxuICAgIHByZU1lbnUgPSAwO1xyXG4gICAgYmFja0J0biA9IGZhbHNlO1xyXG4gICAgcHJlTWVudUxzdCA9IFtdO1xyXG4gICAgbGV2ZWwyID0gZmFsc2U7XHJcbiAgICB2YWxfbGV2ZWwyID0gJyc7XHJcbiAgICBmaXJzdExvYWQgPSB0cnVlO1xyXG4gICAgZ3JpZEJ0bnM7XHJcbiAgICBzaWduZWRJbj0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHN1YjogYW55O1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKTtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJmaXJzdExvYWRcIl0gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdExvYWQgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiaGFzTG9hZGVkXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpcnN0TG9hZClcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwcmVtZW51XCJdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJlTWVudSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwcmVtZW51XCJdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZU1lbnUpXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVNZW51KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ25lZEluKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdWIgPSB0aGlzLnJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXNbJ3NpZ25lZCddICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2kgZGFucyBzaWduZWQgZXQgYXBwJylcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwTmFtZSA9IHBhcmFtc1snYXBwJ107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25lZEluID0gcGFyYW1zWydzaWduZWQnXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2lnbmVkSW4pO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maXJzdExvYWQpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnYWRtaW4nKVxyXG4gICAgICAgIC8vIHRoaXMuc2lnbmVkSW4gfHxcclxuICAgICAgICBpZiAodGhpcy5pc0xvZ2dlZEluKCkgJiYgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2FkbWluJyB8fCB0aGlzLnByZU1lbnUgPT0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiREFOUyBQUkVNRU5VIDFcIilcclxuICAgICAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0QWN0aXZhdGVkR3JpZHModGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX25hbWUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgICAgICBncmlkc0xpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhncmlkc0xpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMgPSBncmlkc0xpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuZ3JpZHMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2pdLmxpc3RCdG4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maXJzdExvYWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZU1lbnUgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBtYWluIG9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0bikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlTWVudUxzdC5pbmRleE9mKG1haW4ubmFtZSkgPT0gLTEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVNZW51THN0LnB1c2gobWFpbi5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuZmlyc3RMb2FkID09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZ2V0R3JpZHNCdG4oKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wcmVNZW51ID0gMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCcyJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicHJlbWVudVwiXSA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWNpJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXN0ZXIgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wibWFzdGVyXCJdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0R3JpZHNCdG4oJ2UnLG1hc3Rlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApLCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdmb3JtJyAmJiB0aGlzLmZpcnN0TG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSAgPT0gZmFsc2UgJiYgdGhpcy5maXJzdExvYWQgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ25pbicsIHRoaXMuYXBwTmFtZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2V0R3JpZHNCdG4oJGV2ZW50LCB2YWwpIHtcclxuICAgICAgICAvL3RoaXMuZ3JpZEJ0bnMgPSAkZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsX2xldmVsMiA9IHZhbDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZ3JpZEJ0bnMpO1xyXG4gICAgICAgLy8gY29uc29sZS5sb2coZ3JpZExpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzKVxyXG4gICAgICAgIC8vIFRPVVMgTEVTIEdSSURTIGRlIGxhIGNvbGxlY3Rpb24gZ3JpZHNcclxuICAgICAgICB0aGlzLmdyaWRCdG5zID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgIC8vY2FzIG/DuSB1biBwcsOpbWVudSBleGlzdCBhbG9ycyBvbiBhIGRhbnMgZ3JpZHMgdW4gXCJ0eXBlXCI6IFwibGlzdEJ0blwiXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGopO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG9iaiBvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGxldCBvYmogPSB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG4uZmluZChvID0+IG8udmFsdWUgPT0gdmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cob2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqLm5hbWUgPT0gdmFsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmdyaWRCdG5zLmluZGV4T2Yoe1wiY2hpbGRyZW5cIjpvYmouY2hpbGRyZW4sIFwibmJSZWNvcmRzXCI6IG9iai5uYlJlY29yZHN9KSA9PSAxKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkQnRucy5wdXNoKHtcImNoaWxkcmVuXCI6b2JqLmNoaWxkcmVuLCBcIm5iUmVjb3Jkc1wiOiBvYmoubmJSZWNvcmRzfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcmVNZW51ID0gMjtcclxuICAgICAgICB0aGlzLmJhY2tCdG4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGV2ZWwyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlTWVudUxzdCk7XHJcbiAgICAgICAgdGhpcy5wcmVNZW51ID0gMTtcclxuICAgICAgICB0aGlzLmJhY2tCdG4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXQoKXtcclxuICAgICAgICB0aGlzLl9hdXRoU2VydmljZS5sb2dvdXQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0aFNlcnZpY2UuaXNMb2dnZWRJbigpXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
