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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFHcEUsb0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQseUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFFekQsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFtQ2xEO0lBRUUsdUJBQXVCO0lBQ3RCLFlBQW9CLFlBQXlCLEVBQVUsWUFBOEIsRUFBVSxNQUFjO1FBQXpGLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM3RyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLDhDQUE4QztRQUM5Qyx1QkFBdUI7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFBLGlDQUFpQztRQUNqRCx3Q0FBd0M7UUFDNUMsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQU5xRyxDQUFDO0lBT2hILFFBQVE7UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBQzdDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUM7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDNUIsNkJBQTZCO1FBQ3JCLCtCQUErQjtRQUMvQix1QkFBdUI7UUFDdkIsd0RBQXdEO1FBQ3hELDZCQUE2QjtRQUM3Qix1Q0FBdUM7UUFDdkMsb0RBQW9EO1FBQ3BELGdEQUFnRDtRQUNoRCw0Q0FBNEM7UUFDNUMsMkRBQTJEO1FBQzNELG1DQUFtQztRQUNuQyxFQUFFO1FBQ0YsdURBQXVEO1FBQ3ZELG9FQUFvRTtRQUNwRSxxQ0FBcUM7UUFDckMsaUVBQWlFO1FBQ2pFLDZDQUE2QztRQUM3Qyw4Q0FBOEM7UUFDOUMsbUZBQW1GO1FBQ25GLDJFQUEyRTtRQUMzRSxtRkFBbUY7UUFDbkYscUVBQXFFO1FBQ3JFLG1DQUFtQztRQUNuQyw0QkFBNEI7UUFDNUIsd0JBQXdCO1FBQ3hCLEVBQUU7UUFDRixvQkFBb0I7UUFDcEIsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQiwyREFBMkQ7UUFDM0QsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixvQkFBb0I7UUFDcEIsa0NBQWtDO1FBQ2xDLDhCQUE4QjtRQUM5QixvQ0FBb0M7UUFDcEMsMkJBQTJCO1FBQzNCLEVBQUU7UUFDRixLQUFLO1FBQ0wsa0NBQWtDO1FBQ2xDLElBQUk7SUFHWixDQUFDO0lBQ0csZUFBZSxDQUFDLElBQUk7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLGdCQUFnQixHQUFxQjtZQUNyQyxXQUFXLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtTQUUvRCxDQUFDO1FBRUYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxRQUFRLENBQUMsSUFBSTtRQUNULE1BQU0sQ0FBQyxDQUFDLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxNQUFNO0lBR04sQ0FBQztBQUNMLENBQUM7QUE5R0Q7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBNEJUO0tBRUosQ0FBQzs7c0JBQUE7QUFFWSwwQkFBa0IscUJBNEUvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIFZhbGlkYXRvcnMsIEZvcm1Hcm91cH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHcmlkUGFuZWxTZXJ2aWNlfSBmcm9tIFwiLi9ncmlkUGFuZWwuc2VydmljZVwiO1xyXG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhc30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHtpc09iamVjdH0gZnJvbSBcInJ4anMvdXRpbC9pc09iamVjdFwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGVyXCIgYWxpZ249XCJsZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3MgZ2x5cGhpY29uIGdseXBoaWNvbi1wbHVzXCIgKGNsaWNrKT1cInRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3N0ZXAnXSlcIiA+QWRkIG5ldyBsaW5lPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWRcIiAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IHRpdGxlIG9mIF9ncmlkU2VydmljZS5jb2xUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9ncmlkU2VydmljZS5kYXRhR3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgX2dyaWRTZXJ2aWNlLmtleXNOYW1lXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ3dvcmtmbG93J1wiPiA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnb1RvQ3VycmVudFN0ZXAoaXRlbSlcIiB2YWx1ZT1cInt7aXRlbS5zdGVwX2lkfX0gXCI+Q3VycmVudCBzdGVwIDwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbn0pXHJcblxyXG4gZXhwb3J0IGNsYXNzIEdyaWRQYW5lbENvbXBvbmVudCB7XHJcblxyXG4gICAvLyByb3V0ZXIgPSBuZXcgUm91dGVyO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgLy8gbXlMaXN0RGF0YTIgPSBbe1wiYWdlXCI6IDE1LFwiZHVyYXRpb25cIjpcIjVcIn1dO1xyXG4gICAgLy8ga2V5c05hbWUyID0gW1wiYWdlXCJdO1xyXG4gICAgbXlMaXN0RGF0YSA9IFtdOy8vID0gIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xyXG4gICAgLy9rZXlzTmFtZSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmtleXNOYW1lO1xyXG5rZXlzTmFtZSA9IFtdO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5teUxpc3REYXRhID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XHJcbiAgICAgICAgdGhpcy5rZXlzTmFtZSA9IHRoaXMuX2dyaWRTZXJ2aWNlLmtleXNOYW1lO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbi8vY29uc29sZS5sb2codGhpcy5rZXlzTmFtZSk7XHJcbiAgICAgICAgLy8gdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXMoKVxyXG4gICAgICAgIC8vIC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEgRnJvbSBncmlkU2VydmljZUdldERhdGFzXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgLy8gICAgIGZvciAodmFyIGkgaW4gZGF0YVswXS5jb2xOYW1lcyl7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZiAoa2V5ICE9ICdfaWQnICYmIGtleSAhPSAnc3RlcF9pZCcpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbMF0uY29sTmFtZXNbaV0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGtleS52YWx1ZU9mKCkpXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgaWYodHlwZW9mIGRhdGFbMF0uY29sTmFtZXNbaV0gPT09IFwib2JqZWN0XCIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGRhdGFbMF0uY29sTmFtZXNbaV0pIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmKCBkYXRhWzBdLmNvbE5hbWVzW2ldLmhhc093blByb3BlcnR5KHApICkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBxIGluIGRhdGFbMF0uY29sTmFtZXNbaV1bcF0pe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHAgKyBcIiAsIFwiICsgZGF0YVswXS5jb2xOYW1lc1tpXVtwXSArIFwiXFxuXCI7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHArXCJfXCIrZGF0YVswXS5jb2xOYW1lc1tpXVtwXVtqXSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzTmFtZS5wdXNoKHArXCJfXCIrZGF0YVswXS5jb2xOYW1lc1tpXVtwXVtqXSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0uY29sTmFtZXNbaV1bcF0pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmtleXNOYW1lLnB1c2goZGF0YVswXS5jb2xOYW1lc1tpXSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGRhdGEuc2hpZnQoKTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5rZXlzTmFtZSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubXlMaXN0RGF0YSA9IGRhdGE7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMubXlMaXN0RGF0YSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAvLyApXHJcblxyXG5cclxufVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGROZXcoKXtcclxuXHJcblxyXG4gICAgfVxyXG59Il19
