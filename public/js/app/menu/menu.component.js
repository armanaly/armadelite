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
     <div class="{{_stepService.template.panel_heading}}" *ngIf="preMenu == 1"   >
         <!--<button (click)="logout()" class="btn btn-warning" ><i class="glyphicon glyphicon-log-out" ></i></button>-->
         <div align="right">
            <button (click)="logout()" class="btn btn-warning" ><img src="/images/icones/if_door_open.png"> </button>
        </div>
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
           <div class="col-md-1" align="right">
                <!--<button (click)="logout()" class="btn btn-warning" ><i class="glyphicon glyphicon-log-out" ></i></button>-->
                <button (click)="logout()" class="btn btn-warning" ><img src="/images/icones/if_door_open.png"> </button>
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

//# sourceMappingURL=data:application/json;base64,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QTtJQUN6QyxDQUFDO0NBQ0osQ0FBQTtBQTNKWSxhQUFhO0lBakZ6QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNEViO0tBQ0EsQ0FBQztxQ0FHb0MsMEJBQVcsRUFBa0IsZUFBTSxFQUF3QiwrQkFBZ0I7UUFDbEYsdUJBQWMsRUFBd0IsMEJBQVc7R0FGbkUsYUFBYSxDQTJKekI7QUEzSlksc0NBQWEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1NYXB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuLi9hdXRoL2F1dGguc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIiAqbmdJZj1cInByZU1lbnUgPT0gMVwiICAgPlxyXG4gICAgICAgICA8IS0tPGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiID48L2k+PC9idXR0b24+LS0+XHJcbiAgICAgICAgIDxkaXYgYWxpZ249XCJyaWdodFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJsb2dvdXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgPjxpbWcgc3JjPVwiL2ltYWdlcy9pY29uZXMvaWZfZG9vcl9vcGVuLnBuZ1wiPiA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiICpuZ0lmPVwicHJlTWVudSA9PSAyXCIgPlxyXG4gICAgICAgIDxkaXYgIGNsYXNzPVwicm93XCIgYWxpZ249XCJsZWZ0XCIgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImJhY2tCdG5cIiBjbGFzcz1cImNvbC1tZC0yXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTlcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPnt7dmFsX2xldmVsMn19PC9oMj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTFcIiBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiAoY2xpY2spPVwibG9nb3V0KClcIiBjbGFzcz1cImJ0biBidG4td2FybmluZ1wiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tbG9nLW91dFwiID48L2k+PC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJsb2dvdXQoKVwiIGNsYXNzPVwiYnRuIGJ0bi13YXJuaW5nXCIgPjxpbWcgc3JjPVwiL2ltYWdlcy9pY29uZXMvaWZfZG9vcl9vcGVuLnBuZ1wiPiA8L2J1dHRvbj5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cInJlYWR5ID09IHRydWVcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIDxkaXYgICpuZ0lmPVwicHJlTWVudSA9PSAwXCI+IFxyXG4gICAgICAgICAgICAgICAgPCEtLXt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGdyaWQgb2YgZ3JpZHNcIiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJncmlkLmRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLm5hbWUsICdtYXN0ZXInOiAwLCAnYXBwX25hbWUnOiBhcHBOYW1lfVwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiA+e3tncmlkLm5hbWV9fTwvYnV0dG9uPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAxXCI+IFxyXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gYWRtaW5fYmFsbGV0LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMSB7IHR5cGUgOiBidXR0b25zIH0gcGFzcyBzdGFnZV9uYW1lIHRvIHN0ZXAgMi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS1zdGVwIDIge3R5cGU6IGdyaWRzfSBnZXQgYWxsIGdyaWRzIGZyb20gc3RhZ2VfbmFtZS0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gZ3JpZHMtLT5cclxuICAgICAgICAgICAgICAgICA8IS0te3t0aGlzLnByZU1lbnV9fS0tPlxyXG4gICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGJ0biBvZiBwcmVNZW51THN0XCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiICB0eXBlPVwiYnV0dG9uXCIgIHN0eWxlPVwid2lkdGg6IDUwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImdldEdyaWRzQnRuKCRldmVudCwgYnRuKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tidG4uY2hpbGRyZW59fVwiPnt7YnRufX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTm91dmVhdSBmbG93PC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAyXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkQnRuc1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLXt7dGhpcy5wcmVNZW51fX0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLmNoaWxkcmVuLCAnbWFzdGVyJzogdmFsX2xldmVsMiwgJ2FwcF9uYW1lJzogYXBwTmFtZX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIHN0eWxlPVwid2lkdGg6IDUwMHB4XCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgPjxzcGFuICBjbGFzcz1cImJhZGdlIHB1bGwtbGVmdFwiPnt7Z3JpZC5uYlJlY29yZHN9fTwvc3Bhbj48c3Bhbj4ge3tncmlkLmNoaWxkcmVufX08L3NwYW4+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgc3R5bGU9XCJ3aWR0aDogNTAwcHhcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+IHt7Z3JpZH19PC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48YnI+ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ3JpZHMgPSBbXTtcclxuICAgIHJlYWR5ID0gZmFsc2U7XHJcbiAgICBhcHBOYW1lID0gJyc7XHJcbiAgICBwcmVNZW51ID0gMDtcclxuICAgIGJhY2tCdG4gPSBmYWxzZTtcclxuICAgIHByZU1lbnVMc3QgPSBbXTtcclxuICAgIGxldmVsMiA9IGZhbHNlO1xyXG4gICAgdmFsX2xldmVsMiA9ICcnO1xyXG4gICAgZmlyc3RMb2FkID0gdHJ1ZTtcclxuICAgIGdyaWRCdG5zO1xyXG4gICAgc2lnbmVkSW49IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzdWI6IGFueTtcclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICB0aGlzLmFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwTmFtZSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiZmlyc3RMb2FkXCJdICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RMb2FkID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImhhc0xvYWRlZFwiXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maXJzdExvYWQpXHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicHJlbWVudVwiXSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICB0aGlzLnByZU1lbnUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wicHJlbWVudVwiXTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVNZW51KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlTWVudSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaWduZWRJbik7XHJcblxyXG4gICAgICAgIHRoaXMuc3ViID0gdGhpcy5yb3V0ZS5wYXJhbXMuc3Vic2NyaWJlKHBhcmFtcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyYW1zWydzaWduZWQnXSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaWNpIGRhbnMgc2lnbmVkIGV0IGFwcCcpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcE5hbWUgPSBwYXJhbXNbJ2FwcCddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaWduZWRJbiA9IHBhcmFtc1snc2lnbmVkJ107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpZ25lZEluKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RMb2FkKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX25hbWUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2FkbWluJylcclxuICAgICAgICAvLyB0aGlzLnNpZ25lZEluIHx8XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0xvZ2dlZEluKCkpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVNZW51KVxyXG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2VkSW4oKSAmJiB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnYWRtaW4nIHx8IHRoaXMucHJlTWVudSA9PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEQU5TIFBSRU1FTlUgMVwiKVxyXG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXRBY3RpdmF0ZWRHcmlkcyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfbmFtZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgIGdyaWRzTGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWRzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzTGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubGlzdEJ0bik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0TG9hZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IG1haW4gb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVNZW51THN0LmluZGV4T2YobWFpbi5uYW1lKSA9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZU1lbnVMc3QucHVzaChtYWluLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5maXJzdExvYWQgPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5nZXRHcmlkc0J0bigpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByZU1lbnUgPSAyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJzInKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJwcmVtZW51XCJdID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpY2knKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hc3RlciA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJtYXN0ZXJcIl07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRHcmlkc0J0bignZScsbWFzdGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ2Zvcm0nICYmIHRoaXMuZmlyc3RMb2FkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2dnZWRJbigpID09IGZhbHNlICYmIHRoaXMuZmlyc3RMb2FkID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zaWduaW4nLCB0aGlzLmFwcE5hbWVdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldEdyaWRzQnRuKCRldmVudCwgdmFsKSB7XHJcbiAgICAgICAgLy90aGlzLmdyaWRCdG5zID0gJGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbF9sZXZlbDIgPSB2YWw7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmdyaWRCdG5zKTtcclxuICAgICAgIC8vIGNvbnNvbGUubG9nKGdyaWRMaXN0KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWwpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkcylcclxuICAgICAgICAvLyBUT1VTIExFUyBHUklEUyBkZSBsYSBjb2xsZWN0aW9uIGdyaWRzXHJcbiAgICAgICAgdGhpcy5ncmlkQnRucyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvL2NhcyBvw7kgdW4gcHLDqW1lbnUgZXhpc3QgYWxvcnMgb24gYSBkYW5zIGdyaWRzIHVuIFwidHlwZVwiOiBcImxpc3RCdG5cIlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhqKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4gIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBvYmogb2YgdGhpcy5ncmlkc1tqXS5saXN0QnRuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICBsZXQgb2JqID0gdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuLmZpbmQobyA9PiBvLnZhbHVlID09IHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9iai5uYW1lID09IHZhbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5ncmlkQnRucy5pbmRleE9mKHtcImNoaWxkcmVuXCI6b2JqLmNoaWxkcmVuLCBcIm5iUmVjb3Jkc1wiOiBvYmoubmJSZWNvcmRzfSkgPT0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZEJ0bnMucHVzaCh7XCJjaGlsZHJlblwiOm9iai5jaGlsZHJlbiwgXCJuYlJlY29yZHNcIjogb2JqLm5iUmVjb3Jkc30pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJlTWVudSA9IDI7XHJcbiAgICAgICAgdGhpcy5iYWNrQnRuID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxldmVsMiA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljaygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZU1lbnVMc3QpO1xyXG4gICAgICAgIHRoaXMucHJlTWVudSA9IDE7XHJcbiAgICAgICAgdGhpcy5iYWNrQnRuID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgdGhpcy5fYXV0aFNlcnZpY2UubG9nb3V0KCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKVxyXG4gICAgICAgIHJldHVybiB0aGlzLl9hdXRoU2VydmljZS5pc0xvZ2dlZEluKClcclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
