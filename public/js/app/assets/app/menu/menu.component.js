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
    }
    ngOnInit() {
        console.log(window);
        this.appName = this.route.snapshot.queryParams["app"];
        console.log(this.appName);
        if (this._stepService.steps[0].master_type == 'form') {
            this.router.navigate(['/step']);
        }
        else {
            this._gridService.getActivatedGrids()
                .then(gridsList => {
                console.log(gridsList);
                this.grids = gridsList;
                this.ready = true;
            }), error => console.log(error);
        }
    }
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
    <div class="row" align="center" *ngIf="ready == true">
        
            <div  *ngFor="let grid of grids" class="col-md-3">
                <!--<button class="btn btn-success" type="button" (click)="showGrid(grid.name)" value="{{grid.name}} ">{{grid.name}} -->
                <!--</button>-->
                <button type="button" class="btn btn-success">
                    
                    <a [routerLink]="['/grid']" [queryParams]="{'grid_name': grid.name}"> {{grid.name}} </a>
                </button>
            </div>
            <!--<div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>-->

    </div>
` }), 
    __metadata('design:paramtypes', [step_service_1.StepService, router_1.Router, gridPanel_service_1.GridPanelService, router_1.ActivatedRoute])
], MenuComponent);
exports.MenuComponent = MenuComponent;
// showGrid(){
// let navigationExtras: NavigationExtras = {
//     queryParams: { 'current_id': item.step_id, '_id': item._id }
//
// };
// let navigationExtras: NavigationExtras = {
//     preserveQueryParams: true,
//     preserveFragment: true,
//     queryParams: {'grid_name': gridName},
//     fragment: 'anchor'
// };
// this.router.navigate(['grid'], navigationExtras);
// this._gridService.getDatas(gridsList)
//     .subscribe(data => {},
//         error => console.log(error)
//     )
// }, error => console.log(error) 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHlCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELG9DQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBb0JqRTtJQUNJLFlBQ2EsWUFBeUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFDekYsS0FBcUI7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQ3pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBR2xDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUhaLENBQUM7SUFLRixRQUFRO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFO2lCQUNoQyxJQUFJLENBQ0QsU0FBUztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsQ0FBQztJQUNWLENBQUM7QUFDTCxDQUFDO0FBN0NEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Q0FjYixFQUFFLENBQUM7O2lCQUFBO0FBRVMscUJBQWEsZ0JBMkJ6QixDQUFBO0FBRUcsY0FBYztBQUNkLDZDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsRUFBRTtBQUNGLEtBQUs7QUFFVCw2Q0FBNkM7QUFDN0MsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMseUJBQXlCO0FBQ3pCLEtBQUs7QUFDTCxvREFBb0Q7QUFFcEQsd0NBQXdDO0FBQ3hDLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsUUFBUTtBQUNSLGlDQUFpQyIsImZpbGUiOiJhc3NldHMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIGFsaWduPVwiY2VudGVyXCIgKm5nSWY9XCJyZWFkeSA9PSB0cnVlXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgICpuZ0Zvcj1cImxldCBncmlkIG9mIGdyaWRzXCIgY2xhc3M9XCJjb2wtbWQtM1wiPlxyXG4gICAgICAgICAgICAgICAgPCEtLTxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNob3dHcmlkKGdyaWQubmFtZSlcIiB2YWx1ZT1cInt7Z3JpZC5uYW1lfX0gXCI+e3tncmlkLm5hbWV9fSAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZ3JpZF9uYW1lJzogZ3JpZC5uYW1lfVwiPiB7e2dyaWQubmFtZX19IDwvYT5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5vdXZlYXUgZmxvdzwvYT48L2J1dHRvbj48L2Rpdj4tLT5cclxuXHJcbiAgICA8L2Rpdj5cclxuYCB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICAgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSxcclxuICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICAgICAgICApXHJcbiAgICB7fVxyXG4gICAgZ3JpZHMgPSBbXTtcclxuICAgIHJlYWR5ID0gZmFsc2U7XHJcbiAgICBhcHBOYW1lID0gJyc7XHJcblxyXG4gICAgbmdPbkluaXQoKXtcclxuY29uc29sZS5sb2cod2luZG93KTtcclxuXHJcbiAgICAgICAgdGhpcy5hcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImFwcFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcE5hbWUpO1xyXG4gICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICdmb3JtJyl7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKTtcclxuICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldEFjdGl2YXRlZEdyaWRzKClcclxuICAgICAgICAgICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBncmlkc0xpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGdyaWRzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdyaWRzID0gZ3JpZHNMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICB9KSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiAgICAvLyBzaG93R3JpZCgpe1xyXG4gICAgLy8gbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAvLyAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcbiAgICAvL1xyXG4gICAgLy8gfTtcclxuXHJcbi8vIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4vLyAgICAgcHJlc2VydmVRdWVyeVBhcmFtczogdHJ1ZSxcclxuLy8gICAgIHByZXNlcnZlRnJhZ21lbnQ6IHRydWUsXHJcbi8vICAgICBxdWVyeVBhcmFtczogeydncmlkX25hbWUnOiBncmlkTmFtZX0sXHJcbi8vICAgICBmcmFnbWVudDogJ2FuY2hvcidcclxuLy8gfTtcclxuLy8gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWydncmlkJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG5cclxuLy8gdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXMoZ3JpZHNMaXN0KVxyXG4vLyAgICAgLnN1YnNjcmliZShkYXRhID0+IHt9LFxyXG4vLyAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4vLyAgICAgKVxyXG4vLyB9LCBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
