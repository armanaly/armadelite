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
        this.backBtn = false;
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
        this.backBtn = true;
        this.level2 = true;
    }
    onClick() {
        this.preMenu = 1;
        this.backBtn = false;
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `

    
        <div *ngIf="backBtn" align="left">
            <nav class="form-navArrow">
                
                
                <button (click)="onClick()" class="tg-bn4o" ><i class="glyphicon glyphicon-triangle-left" > BACK </i></button>
            </nav>
        </div>

    <div class="panel-body" *ngIf="ready == true">

        
            <div *ngIf="preMenu == 1"> 
                <!--steps from admin_ballet-->
                    <!--step 1 { type : buttons } pass stage_name to step 2-->
                    <!--step 2 {type: grids} get all grids from stage_name-->
                <!--steps from grids-->
                
                 <div *ngFor="let btn of preMenuLst">
                    <button class="btn btn-primary btn-lg" type="button" 
                        (click)="getGridsBtn($event, btn.value)"
                        value="{{btn.children}}">{{btn.value}}
                    </button>
                    <br><br>
                </div>
            
            
            </div>
            
            <div *ngIf="preMenu == 2"> 
                
                 <div><h1>{{val_level2}}</h1></div>
                <div *ngFor="let grid of grids" >
                   
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <div *ngIf="grid.display">
                        
                            <a [routerLink]="['/grid']" replaceUrl="True" [queryParams]="{'grid_name': grid.name, 'master_val': val_level2}">
                                <button type="button" class="btn btn-primary btn-lg" > {{grid.name}}</button> 
                            </a>
                                
                    </div>
                    <br><br>
                </div>
            </div>
            
            
           <div  *ngIf="preMenu == 0"> 
                <div *ngFor="let grid of grids" class="col-md-3">
                    <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                    <!--</button>-->
                    <span *ngIf="grid.display">
                        <button type="button" class="btn btn-primary btn-lg" >
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

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FnRWIsRUFBRSxDQUFDOztpQkFBQTtBQUVTLHFCQUFhLGdCQXlGekIsQ0FBQSIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxuICAgIHRlbXBsYXRlOiBgXG5cbiAgICBcbiAgICAgICAgPGRpdiAqbmdJZj1cImJhY2tCdG5cIiBhbGlnbj1cImxlZnRcIj5cbiAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJ0Zy1ibjRvXCIgPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPiBCQUNLIDwvaT48L2J1dHRvbj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgKm5nSWY9XCJyZWFkeSA9PSB0cnVlXCI+XG5cbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAxXCI+IFxuICAgICAgICAgICAgICAgIDwhLS1zdGVwcyBmcm9tIGFkbWluX2JhbGxldC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tc3RlcCAxIHsgdHlwZSA6IGJ1dHRvbnMgfSBwYXNzIHN0YWdlX25hbWUgdG8gc3RlcCAyLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1zdGVwIDIge3R5cGU6IGdyaWRzfSBnZXQgYWxsIGdyaWRzIGZyb20gc3RhZ2VfbmFtZS0tPlxuICAgICAgICAgICAgICAgIDwhLS1zdGVwcyBmcm9tIGdyaWRzLS0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGJ0biBvZiBwcmVNZW51THN0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImdldEdyaWRzQnRuKCRldmVudCwgYnRuLnZhbHVlKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7YnRuLmNoaWxkcmVufX1cIj57e2J0bi52YWx1ZX19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwicHJlTWVudSA9PSAyXCI+IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8ZGl2PjxoMT57e3ZhbF9sZXZlbDJ9fTwvaDE+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkc1wiID5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dHcmlkKGdyaWQubmFtZSlcIiB2YWx1ZT1cInt7Z3JpZC5uYW1lfX0gXCI+e3tncmlkLm5hbWV9fSAtLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLTwvYnV0dG9uPi0tPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZ3JpZC5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiByZXBsYWNlVXJsPVwiVHJ1ZVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQubmFtZSwgJ21hc3Rlcl92YWwnOiB2YWxfbGV2ZWwyfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+IHt7Z3JpZC5uYW1lfX08L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgIDxkaXYgICpuZ0lmPVwicHJlTWVudSA9PSAwXCI+IFxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGdyaWQgb2YgZ3JpZHNcIiBjbGFzcz1cImNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzaG93R3JpZChncmlkLm5hbWUpXCIgdmFsdWU9XCJ7e2dyaWQubmFtZX19IFwiPnt7Z3JpZC5uYW1lfX0gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJncmlkLmRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1sZ1wiID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBbcm91dGVyTGlua109XCJbJy9ncmlkJ11cIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLm5hbWV9XCI+e3tncmlkLm5hbWV9fSA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy9zdGVwJ11cIj4gTm91dmVhdSBmbG93PC9hPjwvYnV0dG9uPjwvZGl2Pi0tPlxuXG4gICAgPC9kaXY+XG5gIH0pXG5cbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50e1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICAgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSxcbiAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgICAgIClcbiAgICB7fVxuICAgIGdyaWRzID0gW107XG4gICAgcmVhZHkgPSBmYWxzZTtcbiAgICBhcHBOYW1lID0gJyc7XG4gICAgcHJlTWVudSA9IDA7XG4gICAgYmFja0J0biA9IGZhbHNlO1xuICAgIHByZU1lbnVMc3QgPSBbXTtcbiAgICBsZXZlbDIgPSBmYWxzZTtcbiAgICB2YWxfbGV2ZWwyID0gJyc7XG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImFwcFwiXTtcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdmb3JtJyApe1xuICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0QWN0aXZhdGVkR3JpZHMoKVxuICAgICAgICAgICAgICAgICAudGhlbihcbiAgICAgICAgICAgICAgICAgICAgIGdyaWRzTGlzdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZ3JpZHNMaXN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JpZHMgPSBncmlkc0xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbal0ubGlzdEJ0bik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbal0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVNZW51ID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZU1lbnVMc3QgPSB0aGlzLmdyaWRzW2pdLmxpc3RCdG47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2pdLmxpc3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgfSksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgfVxuICAgIH1cblxuXG4gICAgZ2V0R3JpZHNCdG4oJGV2ZW50LCB2YWwpe1xuICAgICAgICB2YXIgZ3JpZExpc3QgPSAkZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgICAgICB0aGlzLnZhbF9sZXZlbDIgPSB2YWw7XG4gICAgICAgIGNvbnNvbGUubG9nKGdyaWRMaXN0KTtcbiAgICAgICAgY29uc29sZS5sb2codmFsKVxuICAgICAgICAvLyBUT1VTIExFUyBHUklEUyBkZSBsYSBjb2xsZWN0aW9uIGdyaWRzXG4gICAgICAgIGZvciAobGV0IGlkeEdyaWQgaW4gdGhpcy5ncmlkcyl7XG4gICAgICAgICAgICAvL2NhcyBvw7kgdW4gcHLDqW1lbnUgZXhpc3QgYWxvcnMgb24gYSBkYW5zIGdyaWRzIHVuIFwidHlwZVwiOiBcImxpc3RCdG5cIlxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0biAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG4pe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLnZhbHVlID09IHZhbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHRoaXMuZ3JpZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2pdLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS5jaGlsZHJlbi5pbmRleE9mKHRoaXMuZ3JpZHNbal0ubmFtZSkgPiAtMSApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW2pdLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW2pdLmRpc3BsYXkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLmdyaWRzID0gdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gamUgZG9pcyB1bmlxdWVtZW50IGdhcmRlciBsZXMgYnRuIGRlIHRoaXMuZ3JpZHMgcXVpIHNvbnQgZGFucyBsYSBsaXN0ZSBjaGlsZHJlblxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlTWVudSA9IDI7XG4gICAgICAgIHRoaXMuYmFja0J0biA9IHRydWU7XG4gICAgICAgIHRoaXMubGV2ZWwyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnByZU1lbnUgPSAxO1xuICAgICAgICB0aGlzLmJhY2tCdG4gPSBmYWxzZTtcbiAgICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
