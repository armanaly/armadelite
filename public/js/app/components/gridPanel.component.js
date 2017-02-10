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
    constructor(_stepService, _gridService, router) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this.display = false;
        // myListData2 = [{"age": 15,"duration":"5"}];
        // keysName2 = ["age"];
        this.myListData = []; // =  this._gridService.dataGrid;
        //keysName = this._gridService.keysName;
        this.keysName = [];
    }
    ngOnInit() {
        this.myListData = this._gridService.dataGrid;
        this.keysName = this._gridService.keysName;
        this.display = true;
        //console.log(this.keysName);
        // this._gridService.getDatas()
        // .subscribe(data => {
        //         console.log("data From gridServiceGetDatas");
        //         console.log(data);
        //     for (var i in data[0].colNames){
        //         // if (key != '_id' && key != 'step_id'){
        //             console.log(data[0].colNames[i]);
        //             // console.log(key.valueOf())
        //             if(typeof data[0].colNames[i] === "object"){
        //                 var result = "";
        //
        //                 for (var p in data[0].colNames[i]) {
        //                     if( data[0].colNames[i].hasOwnProperty(p) ) {
        //                         var j = 0;
        //                         for (var q in data[0].colNames[i][p]){
        //                             console.log(p)
        //                             console.log(q);
        //                             result += p + " , " + data[0].colNames[i][p] + "\n";
        //                             console.log(p+"_"+data[0].colNames[i][p][j])
        //                             this.keysName.push(p+"_"+data[0].colNames[i][p][j]);
        //                             // console.log(data[0].colNames[i][p])
        //                             j++;
        //                         }
        //                     }
        //
        //                 }
        //             }
        //             else{
        //                 this.keysName.push(data[0].colNames[i]);
        //             }
        //     }
        //     data.shift();
        //     console.log(this.keysName);
        //     this.myListData = data;
        //     console.log(this.myListData);
        //     this.display = true;
        //
        // },
        //     error => console.log(error)
        // )
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
    addNew() {
    }
};
GridPanelComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
            <div class="panel-header" align="left">
                <nav>
                
                
                </nav>
                <div class="col-md-3">
                    <button type="button" class="btn btn-success glyphicon glyphicon-plus" (click)="this.router.navigate(['/step'])" >Add new line</button>
                </div>
            </div>
            
            <div class="panel-body">
                <div class="table-responsive" *ngIf="display">
                    <table class="table table-hover table-condensed"  >
                        <tr>
                            <th *ngFor="let title of _gridService.colTitle">
                                {{title}}
                            </th>
                        </tr>
                        <tr *ngFor="let item of _gridService.dataGrid">
                            <td *ngFor="let key of _gridService.keysName">                                 
                                 {{item[key]}}
                            </td>
                            <td  *ngIf="this._stepService.steps[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        </tr>
                    </table>
                </div>
            </div>
    `
    }), 
    __metadata('design:paramtypes', [step_service_1.StepService, gridPanel_service_1.GridPanelService, router_1.Router])
], GridPanelComponent);
exports.GridPanelComponent = GridPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFHcEUsb0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQseUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFFekQsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFtQ2xEO0lBRUUsdUJBQXVCO0lBQ3RCLFlBQW9CLFlBQXlCLEVBQVUsWUFBOEIsRUFBVSxNQUFjO1FBQXpGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM3RyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLDhDQUE4QztRQUM5Qyx1QkFBdUI7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLGlDQUFpQztRQUNqRCx3Q0FBd0M7UUFDNUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQU5xRyxDQUFDO0lBT2hILFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsNkJBQTZCO1FBQ3JCLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsd0RBQXdEO1FBQ3hELDZCQUE2QjtRQUM3Qix1Q0FBdUM7UUFDdkMsb0RBQW9EO1FBQ3BELGdEQUFnRDtRQUNoRCw0Q0FBNEM7UUFDNUMsMkRBQTJEO1FBQzNELG1DQUFtQztRQUNuQyxFQUFFO1FBQ0YsdURBQXVEO1FBQ3ZELG9FQUFvRTtRQUNwRSxxQ0FBcUM7UUFDckMsaUVBQWlFO1FBQ2pFLDZDQUE2QztRQUM3Qyw4Q0FBOEM7UUFDOUMsbUZBQW1GO1FBQ25GLDJFQUEyRTtRQUMzRSxtRkFBbUY7UUFDbkYscUVBQXFFO1FBQ3JFLG1DQUFtQztRQUNuQyw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLEVBQUU7UUFDRixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQiwyREFBMkQ7UUFDM0QsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixvQkFBb0I7UUFDcEIsa0NBQWtDO1FBQ2xDLDhCQUE4QjtRQUM5QixvQ0FBb0M7UUFDcEMsMkJBQTJCO1FBQzNCLEVBQUU7UUFDRixLQUFLO1FBQ0wsa0NBQWtDO1FBQ2xDLElBQUk7SUFHWixDQUFDO0lBQ0csZUFBZSxDQUFDLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxNQUFNO0lBR04sQ0FBQztBQUNMLENBQUM7QUE5R0Q7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJUO0tBRUosQ0FBQzs7c0JBQUE7QUFFWSwwQkFBa0IscUJBNEUvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Um91dGVyLCBOYXZpZ2F0aW9uRXh0cmFzfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQge2lzT2JqZWN0fSBmcm9tIFwicnhqcy91dGlsL2lzT2JqZWN0XCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkZXJcIiBhbGlnbj1cImxlZnRcIj5cclxuICAgICAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2VzcyBnbHlwaGljb24gZ2x5cGhpY29uLXBsdXNcIiAoY2xpY2spPVwidGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddKVwiID5BZGQgbmV3IGxpbmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLWNvbmRlbnNlZFwiICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCAqbmdGb3I9XCJsZXQgdGl0bGUgb2YgX2dyaWRTZXJ2aWNlLmNvbFRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3t0aXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwibGV0IGl0ZW0gb2YgX2dyaWRTZXJ2aWNlLmRhdGFHcmlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGtleSBvZiBfZ3JpZFNlcnZpY2Uua2V5c05hbWVcIj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtW2tleV19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAgKm5nSWY9XCJ0aGlzLl9zdGVwU2VydmljZS5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9PSAnd29ya2Zsb3cnXCI+IDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9DdXJyZW50U3RlcChpdGVtKVwiIHZhbHVlPVwie3tpdGVtLnN0ZXBfaWR9fSBcIj5DdXJyZW50IHN0ZXAgPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxufSlcclxuXHJcbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcbiAgICAvLyBteUxpc3REYXRhMiA9IFt7XCJhZ2VcIjogMTUsXCJkdXJhdGlvblwiOlwiNVwifV07XHJcbiAgICAvLyBrZXlzTmFtZTIgPSBbXCJhZ2VcIl07XHJcbiAgICBteUxpc3REYXRhID0gW107Ly8gPSAgdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XHJcbiAgICAvL2tleXNOYW1lID0gdGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWU7XHJcbmtleXNOYW1lID0gW107XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLm15TGlzdERhdGEgPSB0aGlzLl9ncmlkU2VydmljZS5kYXRhR3JpZDtcclxuICAgICAgICB0aGlzLmtleXNOYW1lID0gdGhpcy5fZ3JpZFNlcnZpY2Uua2V5c05hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuLy9jb25zb2xlLmxvZyh0aGlzLmtleXNOYW1lKTtcclxuICAgICAgICAvLyB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcygpXHJcbiAgICAgICAgLy8gLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YSBGcm9tIGdyaWRTZXJ2aWNlR2V0RGF0YXNcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAvLyAgICAgZm9yICh2YXIgaSBpbiBkYXRhWzBdLmNvbE5hbWVzKXtcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmIChrZXkgIT0gJ19pZCcgJiYga2V5ICE9ICdzdGVwX2lkJyl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVswXS5jb2xOYW1lc1tpXSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5LnZhbHVlT2YoKSlcclxuICAgICAgICAvLyAgICAgICAgICAgICBpZih0eXBlb2YgZGF0YVswXS5jb2xOYW1lc1tpXSA9PT0gXCJvYmplY3RcIil7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gZGF0YVswXS5jb2xOYW1lc1tpXSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYoIGRhdGFbMF0uY29sTmFtZXNbaV0uaGFzT3duUHJvcGVydHkocCkgKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGogPSAwO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHEgaW4gZGF0YVswXS5jb2xOYW1lc1tpXVtwXSl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHEpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gcCArIFwiICwgXCIgKyBkYXRhWzBdLmNvbE5hbWVzW2ldW3BdICsgXCJcXG5cIjtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocCtcIl9cIitkYXRhWzBdLmNvbE5hbWVzW2ldW3BdW2pdKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXNOYW1lLnB1c2gocCtcIl9cIitkYXRhWzBdLmNvbE5hbWVzW2ldW3BdW2pdKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVswXS5jb2xOYW1lc1tpXVtwXSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMua2V5c05hbWUucHVzaChkYXRhWzBdLmNvbE5hbWVzW2ldKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgZGF0YS5zaGlmdCgpO1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmtleXNOYW1lKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5teUxpc3REYXRhID0gZGF0YTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5teUxpc3REYXRhKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgIC8vIClcclxuXHJcblxyXG59XHJcbiAgICBnb1RvQ3VycmVudFN0ZXAoaXRlbSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgbGV0IG5hdmlnYXRpb25FeHRyYXM6IE5hdmlnYXRpb25FeHRyYXMgPSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiB7ICdjdXJyZW50X2lkJzogaXRlbS5zdGVwX2lkLCAnX2lkJzogaXRlbS5faWQgfVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT2JqZWN0KGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGl0ZW0pICYmIGl0ZW0gIT09IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ldygpe1xyXG5cclxuXHJcbiAgICB9XHJcbn0iXX0=
