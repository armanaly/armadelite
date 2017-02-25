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
const gridPanel_service_1 = require("./gridPanel.service");
const router_1 = require('@angular/router');
const step_service_1 = require("../Engine/step.service");
let GridPanelComponent = class GridPanelComponent {
    // router = new Router;
    constructor(_stepService, _gridService, router, route) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this.route = route;
        this.display = false;
        // myListData2 = [{"age": 15,"duration":"5"}];
        // keysName2 = ["age"];
        this.myListData = []; // =  this._gridService.dataGrid;
        //keysName = this._gridService.keysName;
        this.keysName = [];
        this.showInput = [];
        this.filterActivated = false;
    }
    ngOnInit() {
        this.grid_name = this.route.snapshot.queryParams["grid_name"];
        this._gridService.getDatas(this.grid_name)
            .subscribe(data => {
            console.log(data);
        }, error => console.log(error));
        for (let i = 0; i < this._gridService.colTitle.length; i++) {
            this.showInput.push(false);
        }
        this.myListData = this._gridService.dataGrid;
        this.keysName = this._gridService.keysName;
        this.display = true;
    }
    goToCurrentStep(item) {
        console.log(item);
        let navigationExtras = {
            queryParams: { 'current_id': item.step_id, '_id': item._id }
        };
        this.router.navigate(['/step'], navigationExtras);
    }
    isObject(item) {
        return (typeof item === "object" && !Array.isArray(item) && item !== null);
    }
    showFilterInput(idx) {
        if (this.showInput[idx] == true) {
            this.showInput[idx] = false;
        }
        else {
            this.showInput[idx] = true;
        }
    }
    filter(event) {
        console.log(event.target);
        //if (event.target.value ==''){
        console.log("passe par grid cmp");
        //}else {
        console.log(event);
        console.log(this._gridService.dataGrid);
        this._gridService.filterData(event.target.value, event.srcElement.id);
    }
};
GridPanelComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
            <!--<div align="left">-->
                <!--<nav>-->
                <!---->
                    <!--<div class="col-md-3">-->
                        <!--<button type="button" class="btn btn-success glyphicon glyphicon-plus" (click)="this.router.navigate(['/step'])" >Add new line</button>-->
                    <!--</div>-->
                <!--</nav>-->
                <!---->
            <!--</div>-->
              <nav class="form-navArrow">
                        <i class="glyphicon glyphicon-chevron-left" (click)="this.router.navigate(['/'])" >PRECEDENT</i>
                    </nav>
                <div class="panel-body">
               <div align="center" class="page-header"> <h1>{{grid_name}}</h1></div>
                <div class="table-responsive" *ngIf="display">
                    <table class="table table-hover table-condensed"  >
                        <tr>
                            <th *ngFor="let obj of _gridService.colTitle;let i = index">
                                <div>{{obj.title}}&nbsp; <button  class="glyphicon glyphicon-filter" 
                                                        type="button" 
                                                        (click)="showFilterInput(i)">
                                                </button><br>
                                                 <input   
                                        *ngIf="showInput[i] == true"
                                        type="text" 
                                        id="{{obj.key}}"
                                        name="{{obj.key}}"
                                        (keyup)="filter($event)"
                                     >
                                                 </div>
                                <!--<table><tr><td> </td>-->
                                        <!--<td>   <button  class="glyphicon glyphicon-filter" -->
                                                        <!--type="button" -->
                                                        <!--(click)="showFilterInput(i)">-->
                                                <!--</button> -->
                                        <!--</td></tr>-->
                                    <!--<tr><td>-->
                                    <!--<input   -->
                                        <!--*ngIf="showInput[i] == true"-->
                                        <!--type="text" -->
                                        <!--id="{{obj.key}}"-->
                                        <!--name="{{obj.key}}"-->
                                        <!--(keyup)="filter($event)"-->
                                     <!--&gt;</td>-->
                                     <!--</tr>-->
                                 <!--</table>-->
                            </th>
                            
                        </tr>
                        <tr *ngFor="let item of _gridService.dataGrid">
                            <td *ngFor="let key of _gridService.keysName">                                 
                                <span *ngIf="!filterActivated"> {{item[key]}} </span>
                            </td>
                            <td  *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        </tr>
                    </table>
                </div>
               
            </div>
            
    `
    }), 
    __metadata('design:paramtypes', [step_service_1.StepService, gridPanel_service_1.GridPanelService, router_1.Router, router_1.ActivatedRoute])
], GridPanelComponent);
exports.GridPanelComponent = GridPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFHcEUsb0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQseUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFtRWxEO0lBRUUsdUJBQXVCO0lBQ3RCLFlBQW9CLFlBQXlCLEVBQVUsWUFBOEIsRUFBVSxNQUFjLEVBQ3pGLEtBQXFCO1FBRHJCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUN6RixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUN6QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLDhDQUE4QztRQUM5Qyx1QkFBdUI7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLGlDQUFpQztRQUVqRCx3Q0FBd0M7UUFDNUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFUdUIsQ0FBQztJQVU1QyxRQUFRO1FBQ0osSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUNyQyxTQUFTLENBQUMsSUFBSTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakIsQ0FBQyxFQUNULEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBR0csR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQzNDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBRTVCLENBQUM7SUFDRyxlQUFlLENBQUMsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBRS9ELENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1QsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztJQUVELGVBQWUsQ0FBQyxHQUFHO1FBQ2YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FDaEMsQ0FBQztZQUNHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQiwrQkFBK0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlCLFNBQVM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQUEsQ0FBQztBQUkvRSxDQUFDO0FBdElEO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTZEVDtLQUNKLENBQUM7O3NCQUFBO0FBRVksMEJBQWtCLHFCQW9FL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dyaWRQYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7aXNPYmplY3R9IGZyb20gXCJyeGpzL3V0aWwvaXNPYmplY3RcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPCEtLTxkaXYgYWxpZ249XCJsZWZ0XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPG5hdj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKVwiID5BZGQgbmV3IGxpbmU8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9uYXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgKGNsaWNrKT1cInRoaXMucm91dGVyLm5hdmlnYXRlKFsnLyddKVwiID5QUkVDRURFTlQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICA8ZGl2IGFsaWduPVwiY2VudGVyXCIgY2xhc3M9XCJwYWdlLWhlYWRlclwiPiA8aDE+e3tncmlkX25hbWV9fTwvaDE+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgb2JqIG9mIF9ncmlkU2VydmljZS5jb2xUaXRsZTtsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj57e29iai50aXRsZX19Jm5ic3A7IDxidXR0b24gIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWx0ZXJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNob3dGaWx0ZXJJbnB1dChpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwic2hvd0lucHV0W2ldID09IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tvYmoua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInt7b2JqLmtleX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJmaWx0ZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRhYmxlPjx0cj48dGQ+IDwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkPiAgIDxidXR0b24gIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWx0ZXJcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cImJ1dHRvblwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0oY2xpY2spPVwic2hvd0ZpbHRlcklucHV0KGkpXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90ZD48L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPjx0ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSpuZ0lmPVwic2hvd0lucHV0W2ldID09IHRydWVcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJ0ZXh0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0taWQ9XCJ7e29iai5rZXl9fVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cInt7b2JqLmtleX19XCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0oa2V5dXApPVwiZmlsdGVyKCRldmVudClcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZndDs8L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RhYmxlPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGtleSBvZiBfZ3JpZFNlcnZpY2Uua2V5c05hbWVcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWRcIj4ge3tpdGVtW2tleV19fSA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICAqbmdJZj1cInRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICd3b3JrZmxvdydcIj4gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pXCIgdmFsdWU9XCJ7e2l0ZW0uc3RlcF9pZH19IFwiPkN1cnJlbnQgc3RlcCA8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgIGBcclxufSlcclxuXHJcbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUpe31cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIC8vIG15TGlzdERhdGEyID0gW3tcImFnZVwiOiAxNSxcImR1cmF0aW9uXCI6XCI1XCJ9XTtcclxuICAgIC8vIGtleXNOYW1lMiA9IFtcImFnZVwiXTtcclxuICAgIG15TGlzdERhdGEgPSBbXTsvLyA9ICB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZDtcclxuICAgIGdyaWRfbmFtZTtcclxuICAgIC8va2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcclxua2V5c05hbWUgPSBbXTtcclxuICAgIHNob3dJbnB1dCA9IFtdO1xyXG5maWx0ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZF9uYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImdyaWRfbmFtZVwiXTtcclxuXHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXModGhpcy5ncmlkX25hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgIClcclxuXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXQucHVzaChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm15TGlzdERhdGEgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZDtcclxuICAgICAgICB0aGlzLmtleXNOYW1lID0gdGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuXHJcbn1cclxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICBsZXQgbmF2aWdhdGlvbkV4dHJhczogTmF2aWdhdGlvbkV4dHJhcyA9IHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSwgbmF2aWdhdGlvbkV4dHJhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPYmplY3QoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgaXRlbSAhPT0gbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd0ZpbHRlcklucHV0KGlkeCl7XHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd0lucHV0W2lkeF0gPT0gdHJ1ZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihldmVudDogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgIC8vaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhc3NlIHBhciBncmlkIGNtcFwiKTtcclxuICAgICAgICAgICAgLy99ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuIF9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZmlsdGVyRGF0YShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnNyY0VsZW1lbnQuaWQpO31cclxuICAgICAgICAvLyAgdGhpcy5maWx0ZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgLy99XHJcblxyXG59Il19
