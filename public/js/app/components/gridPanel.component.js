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
               <div class="page-header"><table><tr><td>
                             <nav class="form-navArrow">
                        <button><i class="glyphicon glyphicon-triangle-left" (click)="this.router.navigate(['/'])" ></i></button>
              </nav>
                </td>
                 <h1>{{grid_name}}</h1>
                </tr></table></div>
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFHcEUsb0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQseUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFFekUsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsdUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBc0ZsQztJQUVFLHVCQUF1QjtJQUN0QixZQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixLQUFxQixFQUFVLEtBQVc7UUFEMUMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUM5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLDhDQUE4QztRQUM5Qyx1QkFBdUI7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLGlDQUFpQztRQUVqRCx3Q0FBd0M7UUFDNUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNWLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFUNEMsQ0FBQztJQVVqRSxRQUFRO1FBRUosZ0RBQWdEO1FBQ2hELHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLEVBQUU7UUFDRixnREFBZ0Q7UUFDaEQscUJBQXFCO1FBQ3JCLEVBQUU7UUFDRiw2QkFBNkI7UUFDN0IsRUFBRTtRQUNGLDZDQUE2QztRQUM3QyxtREFBbUQ7UUFDbkQsUUFBUTtRQUNSLHFDQUFxQztRQUNyQyxRQUFRO1FBQ1IsSUFBSTtRQUNKLEVBQUU7UUFDRixtQkFBbUI7UUFFbkIsd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUV6QixJ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SUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO1FBQ1Asc0JBQXNCO1FBQ3RCLHNCQUFzQjtJQUV4QixDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQiwrQkFBK0I7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlCLFNBQVM7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFFLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQUEsQ0FBQztBQUkvRSxDQUFDO0FBdk1EO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FnRlQ7S0FDSixDQUFDOztzQkFBQTtBQUVZLDBCQUFrQixxQkFrSC9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncmlkUGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtQnVpbGRlciwgVmFsaWRhdG9ycywgRm9ybUdyb3VwfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXMsIEFjdGl2YXRlZFJvdXRlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge2lzT2JqZWN0fSBmcm9tIFwicnhqcy91dGlsL2lzT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPCEtLTxkaXYgYWxpZ249XCJsZWZ0XCI+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPG5hdj4tLT5cclxuICAgICAgICAgICAgICAgIDwhLS0tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKVwiID5BZGQgbmV3IGxpbmU8L2J1dHRvbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tPC9uYXY+LS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tLS0+XHJcbiAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYWdlLWhlYWRlclwiPjx0YWJsZT48dHI+PHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvJ10pXCIgPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgPGgxPnt7Z3JpZF9uYW1lfX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC90cj48L3RhYmxlPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IG9iaiBvZiBfZ3JpZFNlcnZpY2UuY29sVGl0bGU7bGV0IGkgPSBpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3tvYmoudGl0bGV9fSZuYnNwOyA8YnV0dG9uICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsdGVyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzaG93RmlsdGVySW5wdXQoaSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dJbnB1dFtpXSA9PSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7b2JqLmtleX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e29iai5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiZmlsdGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRhYmxlPjx0cj48dGQ+IDwvdGQ+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRkPiAgIDxidXR0b24gIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1maWx0ZXJcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tdHlwZT1cImJ1dHRvblwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0oY2xpY2spPVwic2hvd0ZpbHRlcklucHV0KGkpXCI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2J1dHRvbj4gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC90ZD48L3RyPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHRyPjx0ZD4tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxpbnB1dCAgIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSpuZ0lmPVwic2hvd0lucHV0W2ldID09IHRydWVcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLXR5cGU9XCJ0ZXh0XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0taWQ9XCJ7e29iai5rZXl9fVwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tbmFtZT1cInt7b2JqLmtleX19XCItLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0oa2V5dXApPVwiZmlsdGVyKCRldmVudClcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSZndDs8L3RkPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvdHI+LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L3RhYmxlPi0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGtleSBvZiBfZ3JpZFNlcnZpY2Uua2V5c05hbWU7bGV0IGkgPSBpbmRleFwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e2l0ZW19fS0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWZpbHRlckFjdGl2YXRlZCAmJiB0aGlzLl9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlICE9ICdjaGVja2JveCcgXCI+IHt7aXRlbVtrZXldfX0gIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cInRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlW2ldLnR5cGUgPT0gJ2NoZWNrYm94JyBcIj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwie3tpdGVtW2tleV19fVwiIGNoZWNrZWQgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJpdGVtW2tleV0gPT0gZmFsc2VcIiB0eXBlPVwiY2hlY2tib3hcIiB2YWx1ZT1cInt7aXRlbVtrZXldfX1cIiAoY2hhbmdlKT11cGRhdGVDaGVja0JveCgkZXZlbnQsaXRlbSkgLz4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08c3BhbiAqbmdJZj1cIlwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ3dvcmtmbG93J1wiPiA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnb1RvQ3VycmVudFN0ZXAoaXRlbSlcIiB2YWx1ZT1cInt7aXRlbS5zdGVwX2lkfX0gXCI+Q3VycmVudCBzdGVwIDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgYFxyXG59KVxyXG5cclxuIGV4cG9ydCBjbGFzcyBHcmlkUGFuZWxDb21wb25lbnQge1xyXG5cclxuICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZ3JpZFNlcnZpY2U6IEdyaWRQYW5lbFNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcHJpdmF0ZSBfaHR0cDogSHR0cCl7fVxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgLy8gbXlMaXN0RGF0YTIgPSBbe1wiYWdlXCI6IDE1LFwiZHVyYXRpb25cIjpcIjVcIn1dO1xyXG4gICAgLy8ga2V5c05hbWUyID0gW1wiYWdlXCJdO1xyXG4gICAgbXlMaXN0RGF0YSA9IFtdOy8vID0gIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgZ3JpZF9uYW1lO1xyXG4gICAgLy9rZXlzTmFtZSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmtleXNOYW1lO1xyXG5rZXlzTmFtZSA9IFtdO1xyXG4gICAgc2hvd0lucHV0ID0gW107XHJcbmZpbHRlckFjdGl2YXRlZCA9IGZhbHNlO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIC8vIHZhciBteUFycmF5ID0gWzAsIDksIDgsIDMsIDMsIDMsIDUsIDksIDUsIDBdO1xyXG4gICAgICAgIC8vIHZhciBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgIC8vIG15QXJyYXkuc29ydCgpO1xyXG4gICAgICAgIC8vIG5ld0FycmF5LnB1c2gobXlBcnJheVswXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB2YXIgbXlBcnJheSA9IFswLCA5LCA4LCAzLCAzLCAzLCA1LCA5LCA1LCAwXTtcclxuICAgICAgICAvLyB2YXIgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIG5ld0FycmF5LnB1c2gobXlBcnJheVswXSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMTsgaSA8IG15QXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgaWYgKG5ld0FycmF5LmluY2x1ZGVzKG15QXJyYXlbaV0pID09IGZhbHNlIClcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgbmV3QXJyYXkucHVzaChteUFycmF5W2ldKTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIG5ld0FycmF5LnNvcnQoKTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobXlBcnJheSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobmV3QXJyYXkpO1xyXG5cclxuICAgICAgICB0aGlzLmdyaWRfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJncmlkX25hbWVcIl07XHJcblxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKHRoaXMuZ3JpZF9uYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICApXHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2dyaWRTZXJ2aWNlLmNvbFRpdGxlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0LnB1c2goZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5teUxpc3REYXRhID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XHJcbiAgICAgICAgdGhpcy5rZXlzTmFtZSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmtleXNOYW1lO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZ3JpZFNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcblxyXG59XHJcbiAgICBnb1RvQ3VycmVudFN0ZXAoaXRlbSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdjdXJyZW50X2lkJzogaXRlbS5zdGVwX2lkLCAnX2lkJzogaXRlbS5faWQgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT2JqZWN0KGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIGl0ZW0gIT09IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dGaWx0ZXJJbnB1dChpZHgpe1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dJbnB1dFtpZHhdID09IHRydWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dJbnB1dFtpZHhdID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja1VuZGVmaW5lZCh2YWx1ZSl7XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVDaGVja0JveCgkZXZlbnQsIGl0ZW0pe1xyXG4gICAgICAgLy8gbGV0IHZhbHVlID0gJGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0kZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XHJcbmNvbnNvbGUubG9nKGl0ZW0pXHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UudXBkYXRlQ2hlY2tib3godmFsdWUsaXRlbS5faWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xyXG4gICAgICAvLyAgY29uc29sZS5sb2codmFsMik7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihldmVudDogYW55KXtcclxuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xyXG4gICAgICAgIC8vaWYgKGV2ZW50LnRhcmdldC52YWx1ZSA9PScnKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBhc3NlIHBhciBncmlkIGNtcFwiKTtcclxuICAgICAgICAgICAgLy99ZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuIF9ncmlkU2VydmljZS5kYXRhR3JpZCk7XHJcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZmlsdGVyRGF0YShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnNyY0VsZW1lbnQuaWQpO31cclxuICAgICAgICAvLyAgdGhpcy5maWx0ZXJBY3RpdmF0ZWQgPSB0cnVlO1xyXG4gICAgLy99XHJcblxyXG59Il19
