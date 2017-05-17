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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHlCQUFxQyxpQkFBaUIsQ0FBQyxDQUFBO0FBQ3ZELG9DQUErQixpQ0FBaUMsQ0FBQyxDQUFBO0FBb0JqRTtJQUNJLFlBQ2EsWUFBeUIsRUFBVSxNQUFjLEVBQVUsWUFBOEIsRUFDekYsS0FBcUI7UUFEckIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQ3pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBR2xDLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQUhaLENBQUM7SUFLRixRQUFRO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVaLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFO2lCQUNoQyxJQUFJLENBQ0QsU0FBUztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDdkMsQ0FBQztJQUNWLENBQUM7QUFDTCxDQUFDO0FBN0NEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Q0FjYixFQUFFLENBQUM7O2lCQUFBO0FBRVMscUJBQWEsZ0JBMkJ6QixDQUFBO0FBRUcsY0FBYztBQUNkLDZDQUE2QztBQUM3QyxtRUFBbUU7QUFDbkUsRUFBRTtBQUNGLEtBQUs7QUFFVCw2Q0FBNkM7QUFDN0MsaUNBQWlDO0FBQ2pDLDhCQUE4QjtBQUM5Qiw0Q0FBNEM7QUFDNUMseUJBQXlCO0FBQ3pCLEtBQUs7QUFDTCxvREFBb0Q7QUFFcEQsd0NBQXdDO0FBQ3hDLDZCQUE2QjtBQUM3QixzQ0FBc0M7QUFDdEMsUUFBUTtBQUNSLGlDQUFpQyIsImZpbGUiOiJtZW51L21lbnUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIiBhbGlnbj1cImNlbnRlclwiICpuZ0lmPVwicmVhZHkgPT0gdHJ1ZVwiPlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2ICAqbmdGb3I9XCJsZXQgZ3JpZCBvZiBncmlkc1wiIGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzaG93R3JpZChncmlkLm5hbWUpXCIgdmFsdWU9XCJ7e2dyaWQubmFtZX19IFwiPnt7Z3JpZC5uYW1lfX0gLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9idXR0b24+LS0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiIFtxdWVyeVBhcmFtc109XCJ7J2dyaWRfbmFtZSc6IGdyaWQubmFtZX1cIj4ge3tncmlkLm5hbWV9fSA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3N0ZXAnXVwiPiBOb3V2ZWF1IGZsb3c8L2E+PC9idXR0b24+PC9kaXY+LS0+XHJcblxyXG4gICAgPC9kaXY+XHJcbmAgfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsXHJcbiAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICAgICAgKVxyXG4gICAge31cclxuICAgIGdyaWRzID0gW107XHJcbiAgICByZWFkeSA9IGZhbHNlO1xyXG4gICAgYXBwTmFtZSA9ICcnO1xyXG5cclxuICAgIG5nT25Jbml0KCl7XHJcbmNvbnNvbGUubG9nKHdpbmRvdyk7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcHBOYW1lKTtcclxuICAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnZm9ybScpe1xyXG4gICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSk7XHJcbiAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXRBY3RpdmF0ZWRHcmlkcygpXHJcbiAgICAgICAgICAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZHNMaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhncmlkc0xpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ncmlkcyA9IGdyaWRzTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgfSksIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4gICAgLy8gc2hvd0dyaWQoKXtcclxuICAgIC8vIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgLy8gICAgIHF1ZXJ5UGFyYW1zOiB7ICdjdXJyZW50X2lkJzogaXRlbS5zdGVwX2lkLCAnX2lkJzogaXRlbS5faWQgfVxyXG4gICAgLy9cclxuICAgIC8vIH07XHJcblxyXG4vLyBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuLy8gICAgIHByZXNlcnZlUXVlcnlQYXJhbXM6IHRydWUsXHJcbi8vICAgICBwcmVzZXJ2ZUZyYWdtZW50OiB0cnVlLFxyXG4vLyAgICAgcXVlcnlQYXJhbXM6IHsnZ3JpZF9uYW1lJzogZ3JpZE5hbWV9LFxyXG4vLyAgICAgZnJhZ21lbnQ6ICdhbmNob3InXHJcbi8vIH07XHJcbi8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnZ3JpZCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuXHJcbi8vIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKGdyaWRzTGlzdClcclxuLy8gICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7fSxcclxuLy8gICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuLy8gICAgIClcclxuLy8gfSwgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
