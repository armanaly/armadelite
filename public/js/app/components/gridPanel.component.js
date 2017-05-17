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
const http_1 = require("@angular/http");
let GridPanelComponent = class GridPanelComponent {
    // router = new Router;
    constructor(_stepService, _gridService, router, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this.route = route;
        this._http = _http;
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
        // var myArray = [0, 9, 8, 3, 3, 3, 5, 9, 5, 0];
        // var newArray = [];
        // myArray.sort();
        // newArray.push(myArray[0]);
        //
        // var myArray = [0, 9, 8, 3, 3, 3, 5, 9, 5, 0];
        // var newArray = [];
        //
        // newArray.push(myArray[0]);
        //
        // for (let i = 1; i < myArray.length; i++) {
        //     if (newArray.includes(myArray[i]) == false )
        //     {
        //         newArray.push(myArray[i]);
        //     }
        // }
        //
        // newArray.sort();
        // console.log(myArray);
        // console.log(newArray);
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
        console.log(this._gridService.keysName);
        console.log(this._gridService);
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
    checkUndefined(value) {
        console.log(value);
        console.log(typeof value === 'undefined');
        return (typeof value === 'undefined');
    }
    updateCheckBox($event, item) {
        // let value = $event.target.getAttribute('value');
        let value = $event.target.checked;
        console.log(item);
        this._gridService.updateCheckbox(value, item._id)
            .subscribe(data => console.log(data), error => console.log(error));
        // console.log(value);
        //  console.log(val2);
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
                        <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" ></i></button>
              </nav>
                <div class="panel-body">
               <div class="page-header">
                 <h1>{{grid_name}}</h1>
               </div>
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
                                     <br>
                                     
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
                            <td *ngFor="let key of _gridService.keysName;let i = index" align="center">
                                 <!--{{item}}-->
                                                     
                                <span *ngIf="!filterActivated && this._gridService.colTitle[i].type != 'checkbox' "> {{item[key]}}  </span>
                                
                                <span *ngIf="this._gridService.colTitle[i].type == 'checkbox' "> 
                                    <input *ngIf="item[key]" type="checkbox" value="{{item[key]}}" checked (change)=updateCheckBox($event,item) /> 
                                    <input *ngIf="item[key] == false" type="checkbox" value="{{item[key]}}" (change)=updateCheckBox($event,item) /> 
                                </span>
                                <!--<span *ngIf=""-->
                            </td>
                            
                            <td  *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        </tr>
                    </table>
                </div>
               
            </div>
            
    `
    }), 
    __metadata('design:paramtypes', [step_service_1.StepService, gridPanel_service_1.GridPanelService, router_1.Router, router_1.ActivatedRoute, http_1.Http])
], GridPanelComponent);
exports.GridPanelComponent = GridPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsb0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQseUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFDekUsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsdUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBa0ZsQztJQUVFLHVCQUF1QjtJQUN0QixZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixLQUFxQixFQUFVLEtBQVc7UUFEMUMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUM5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLDhDQUE4QztRQUM5Qyx1QkFBdUI7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLGlDQUFpQztRQUVqRCx3Q0FBd0M7UUFDNUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFUNEMsQ0FBQztJQVVqRSxRQUFRO1FBRUosZ0RBQWdEO1FBQ2hELHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLEVBQUU7UUFDRixnREFBZ0Q7UUFDaEQscUJBQXFCO1FBQ3JCLEVBQUU7UUFDRiw2QkFBNkI7UUFDN0IsRUFBRTtRQUNGLDZDQUE2QztRQUM3QyxtREFBbUQ7UUFDbkQsUUFBUTtRQUNSLHFDQUFxQztRQUNyQyxRQUFRO1FBQ1IsSUFBSTtRQUNKLEVBQUU7UUFDRixtQkFBbUI7UUFFbkIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUV6QixJ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SUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBQ1Asc0JBQXNCO1FBQ3RCLHNCQUFzQjtJQUV4QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQiwrQkFBK0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlCLFNBQVM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQUEsQ0FBQztBQUkvRSxDQUFDO0FBbk1EO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTRFVDtLQUNKLENBQUM7O3NCQUFBO0FBRVksMEJBQWtCLHFCQWtIL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dyaWRQYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzLCBBY3RpdmF0ZWRSb3V0ZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8IS0tPGRpdiBhbGlnbj1cImxlZnRcIj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08bmF2Pi0tPlxyXG4gICAgICAgICAgICAgICAgPCEtLS0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzIGdseXBoaWNvbiBnbHlwaGljb24tcGx1c1wiIChjbGljayk9XCJ0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10pXCIgPkFkZCBuZXcgbGluZTwvYnV0dG9uPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS08L25hdj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiIChjbGljayk9XCJ0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy8nXSlcIiA+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgPGgxPnt7Z3JpZF9uYW1lfX08L2gxPlxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoICpuZ0Zvcj1cImxldCBvYmogb2YgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlO2xldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7b2JqLnRpdGxlfX0mbmJzcDsgPGJ1dHRvbiAgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWZpbHRlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2hvd0ZpbHRlcklucHV0KGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPjxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93SW5wdXRbaV0gPT0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e29iai5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3tvYmoua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0YWJsZT48dHI+PHRkPiA8L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0ZD4gICA8YnV0dG9uICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsdGVyXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJidXR0b25cIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tKGNsaWNrKT1cInNob3dGaWx0ZXJJbnB1dChpKVwiPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdGQ+PC90cj4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0cj48dGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08aW5wdXQgICAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0qbmdJZj1cInNob3dJbnB1dFtpXSA9PSB0cnVlXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS10eXBlPVwidGV4dFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLWlkPVwie3tvYmoua2V5fX1cIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLW5hbWU9XCJ7e29iai5rZXl9fVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tKGtleXVwKT1cImZpbHRlcigkZXZlbnQpXCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mZ3Q7PC90ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90YWJsZT4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9ncmlkU2VydmljZS5kYXRhR3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgX2dyaWRTZXJ2aWNlLmtleXNOYW1lO2xldCBpID0gaW5kZXhcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0te3tpdGVtfX0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFmaWx0ZXJBY3RpdmF0ZWQgJiYgdGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGVbaV0udHlwZSAhPSAnY2hlY2tib3gnIFwiPiB7e2l0ZW1ba2V5XX19ICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJ0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlID09ICdjaGVja2JveCcgXCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpdGVtW2tleV1cIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7aXRlbVtrZXldfX1cIiBjaGVja2VkIChjaGFuZ2UpPXVwZGF0ZUNoZWNrQm94KCRldmVudCxpdGVtKSAvPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaXRlbVtrZXldID09IGZhbHNlXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHNwYW4gKm5nSWY9XCJcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICAqbmdJZj1cInRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID09ICd3b3JrZmxvdydcIj4gPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwiZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pXCIgdmFsdWU9XCJ7e2l0ZW0uc3RlcF9pZH19IFwiPkN1cnJlbnQgc3RlcCA8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgIGBcclxufSlcclxuXHJcbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgX2h0dHA6IEh0dHApe31cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuICAgIC8vIG15TGlzdERhdGEyID0gW3tcImFnZVwiOiAxNSxcImR1cmF0aW9uXCI6XCI1XCJ9XTtcclxuICAgIC8vIGtleXNOYW1lMiA9IFtcImFnZVwiXTtcclxuICAgIG15TGlzdERhdGEgPSBbXTsvLyA9ICB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZDtcclxuICAgIGdyaWRfbmFtZTtcclxuICAgIC8va2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcclxua2V5c05hbWUgPSBbXTtcclxuICAgIHNob3dJbnB1dCA9IFtdO1xyXG5maWx0ZXJBY3RpdmF0ZWQgPSBmYWxzZTtcclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICAvLyB2YXIgbXlBcnJheSA9IFswLCA5LCA4LCAzLCAzLCAzLCA1LCA5LCA1LCAwXTtcclxuICAgICAgICAvLyB2YXIgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICAvLyBteUFycmF5LnNvcnQoKTtcclxuICAgICAgICAvLyBuZXdBcnJheS5wdXNoKG15QXJyYXlbMF0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gdmFyIG15QXJyYXkgPSBbMCwgOSwgOCwgMywgMywgMywgNSwgOSwgNSwgMF07XHJcbiAgICAgICAgLy8gdmFyIG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBuZXdBcnJheS5wdXNoKG15QXJyYXlbMF0pO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDE7IGkgPCBteUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChuZXdBcnJheS5pbmNsdWRlcyhteUFycmF5W2ldKSA9PSBmYWxzZSApXHJcbiAgICAgICAgLy8gICAgIHtcclxuICAgICAgICAvLyAgICAgICAgIG5ld0FycmF5LnB1c2gobXlBcnJheVtpXSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBuZXdBcnJheS5zb3J0KCk7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG15QXJyYXkpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5ld0FycmF5KTtcclxuXHJcbiAgICAgICAgdGhpcy5ncmlkX25hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiZ3JpZF9uYW1lXCJdO1xyXG5cclxuICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcyh0aGlzLmdyaWRfbmFtZSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgKVxyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dC5wdXNoKGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubXlMaXN0RGF0YSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgICAgIHRoaXMua2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxufVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmlsdGVySW5wdXQoaWR4KXtcclxuICAgICAgICBpZiAodGhpcy5zaG93SW5wdXRbaWR4XSA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dFtpZHhdID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tVbmRlZmluZWQodmFsdWUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ2hlY2tCb3goJGV2ZW50LCBpdGVtKXtcclxuICAgICAgIC8vIGxldCB2YWx1ZSA9ICRldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9JGV2ZW50LnRhcmdldC5jaGVja2VkO1xyXG5jb25zb2xlLmxvZyhpdGVtKVxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLnVwZGF0ZUNoZWNrYm94KHZhbHVlLGl0ZW0uX2lkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbDIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZXZlbnQ6IGFueSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0KTtcclxuICAgICAgICAvL2lmIChldmVudC50YXJnZXQudmFsdWUgPT0nJyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwYXNzZSBwYXIgZ3JpZCBjbXBcIik7XHJcbiAgICAgICAgICAgIC8vfWVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLiBfZ3JpZFNlcnZpY2UuZGF0YUdyaWQpO1xyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmZpbHRlckRhdGEoZXZlbnQudGFyZ2V0LnZhbHVlLCBldmVudC5zcmNFbGVtZW50LmlkKTt9XHJcbiAgICAgICAgLy8gIHRoaXMuZmlsdGVyQWN0aXZhdGVkID0gdHJ1ZTtcclxuICAgIC8vfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
