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
                    <br>
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

//# sourceMappingURL=data:application/json;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQStEYixFQUFFLENBQUM7O2lCQUFBO0FBRVMscUJBQWEsZ0JBeUZ6QixDQUFBIiwiZmlsZSI6Im1lbnUvbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7Um91dGVyLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXG4gICAgdGVtcGxhdGU6IGBcblxuICAgIFxuICAgICAgICA8ZGl2ICpuZ0lmPVwiYmFja0J0blwiIGFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cInRnLWJuNG9cIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+IEJBQ0sgPC9pPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiAqbmdJZj1cInJlYWR5ID09IHRydWVcIj5cblxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJwcmVNZW51ID09IDFcIj4gXG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gYWRtaW5fYmFsbGV0LS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS1zdGVwIDEgeyB0eXBlIDogYnV0dG9ucyB9IHBhc3Mgc3RhZ2VfbmFtZSB0byBzdGVwIDItLT5cbiAgICAgICAgICAgICAgICAgICAgPCEtLXN0ZXAgMiB7dHlwZTogZ3JpZHN9IGdldCBhbGwgZ3JpZHMgZnJvbSBzdGFnZV9uYW1lLS0+XG4gICAgICAgICAgICAgICAgPCEtLXN0ZXBzIGZyb20gZ3JpZHMtLT5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgYnRuIG9mIHByZU1lbnVMc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZ2V0R3JpZHNCdG4oJGV2ZW50LCBidG4udmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tidG4uY2hpbGRyZW59fVwiPnt7YnRuLnZhbHVlfX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cInByZU1lbnUgPT0gMlwiPiBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgPGRpdj48aDE+e3t2YWxfbGV2ZWwyfX08L2gxPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGdyaWQgb2YgZ3JpZHNcIiA+XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzaG93R3JpZChncmlkLm5hbWUpXCIgdmFsdWU9XCJ7e2dyaWQubmFtZX19IFwiPnt7Z3JpZC5uYW1lfX0gLS0+XG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImdyaWQuZGlzcGxheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgcmVwbGFjZVVybD1cIlRydWVcIiBbcXVlcnlQYXJhbXNdPVwieydncmlkX25hbWUnOiBncmlkLm5hbWUsICdtYXN0ZXJfdmFsJzogdmFsX2xldmVsMn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLWxnXCIgPiB7e2dyaWQubmFtZX19PC9idXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICA8ZGl2ICAqbmdJZj1cInByZU1lbnUgPT0gMFwiPiBcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRzXCIgY2xhc3M9XCJjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2hvd0dyaWQoZ3JpZC5uYW1lKVwiIHZhbHVlPVwie3tncmlkLm5hbWV9fSBcIj57e2dyaWQubmFtZX19IC0tPlxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiZ3JpZC5kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tbGdcIiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogZ3JpZC5uYW1lfVwiPnt7Z3JpZC5uYW1lfX0gPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5vdXZlYXUgZmxvdzwvYT48L2J1dHRvbj48L2Rpdj4tLT5cblxuICAgIDwvZGl2PlxuYCB9KVxuXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsXG4gICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICAgICAgICApXG4gICAge31cbiAgICBncmlkcyA9IFtdO1xuICAgIHJlYWR5ID0gZmFsc2U7XG4gICAgYXBwTmFtZSA9ICcnO1xuICAgIHByZU1lbnUgPSAwO1xuICAgIGJhY2tCdG4gPSBmYWxzZTtcbiAgICBwcmVNZW51THN0ID0gW107XG4gICAgbGV2ZWwyID0gZmFsc2U7XG4gICAgdmFsX2xldmVsMiA9ICcnO1xuICAgIG5nT25Jbml0KCl7XG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XG4gICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnZm9ybScgKXtcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKTtcbiAgICAgICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldEFjdGl2YXRlZEdyaWRzKClcbiAgICAgICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICBncmlkc0xpc3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWRzTGlzdClcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzID0gZ3JpZHNMaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5ncmlkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2pdLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2pdLmxpc3RCdG4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyaWRzW2pdLmxpc3RCdG4gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlTWVudSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmVNZW51THN0ID0gdGhpcy5ncmlkc1tqXS5saXN0QnRuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5saXN0QnRuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICAgICAgIH0pLCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgIH1cbiAgICB9XG5cblxuICAgIGdldEdyaWRzQnRuKCRldmVudCwgdmFsKXtcbiAgICAgICAgdmFyIGdyaWRMaXN0ID0gJGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy52YWxfbGV2ZWwyID0gdmFsO1xuICAgICAgICBjb25zb2xlLmxvZyhncmlkTGlzdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICAgICAgLy8gVE9VUyBMRVMgR1JJRFMgZGUgbGEgY29sbGVjdGlvbiBncmlkc1xuICAgICAgICBmb3IgKGxldCBpZHhHcmlkIGluIHRoaXMuZ3JpZHMpe1xuICAgICAgICAgICAgLy9jYXMgb8O5IHVuIHByw6ltZW51IGV4aXN0IGFsb3JzIG9uIGEgZGFucyBncmlkcyB1biBcInR5cGVcIjogXCJsaXN0QnRuXCJcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG4gIT0gJ3VuZGVmaW5lZCcpe1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS52YWx1ZSA9PSB2YWwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tpZHhHcmlkXS5saXN0QnRuW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiB0aGlzLmdyaWRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkc1tqXS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmdyaWRzW2lkeEdyaWRdLmxpc3RCdG5baV0uY2hpbGRyZW4uaW5kZXhPZih0aGlzLmdyaWRzW2pdLm5hbWUpID4gLTEgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkc1tqXS5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkc1tqXS5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ncmlkcylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5ncmlkcyA9IHRoaXMuZ3JpZHNbaWR4R3JpZF0ubGlzdEJ0bltpXS5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGplIGRvaXMgdW5pcXVlbWVudCBnYXJkZXIgbGVzIGJ0biBkZSB0aGlzLmdyaWRzIHF1aSBzb250IGRhbnMgbGEgbGlzdGUgY2hpbGRyZW5cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZU1lbnUgPSAyO1xuICAgICAgICB0aGlzLmJhY2tCdG4gPSB0cnVlO1xuICAgICAgICB0aGlzLmxldmVsMiA9IHRydWU7XG4gICAgfVxuXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5wcmVNZW51ID0gMTtcbiAgICAgICAgdGhpcy5iYWNrQnRuID0gZmFsc2U7XG4gICAgfVxuXG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
