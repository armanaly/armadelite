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
let GridPanelComponent = class GridPanelComponent {
    // router = new Router;
    constructor(_gridService, router) {
        this._gridService = _gridService;
        this.router = router;
        this.display = false;
        this.myListData = [];
        this.keysName = [];
    }
    ngOnInit() {
        this._gridService.getDatas()
            .subscribe(data => {
            console.log("data From gridServiceGetDatas");
            console.log(data);
            for (var i in data[0].colNames) {
                // if (key != '_id' && key != 'step_id'){
                console.log(data[0].colNames[i]);
                // console.log(key.valueOf())
                if (typeof data[0].colNames[i] === "object") {
                    var result = "";
                    for (var p in data[0].colNames[i]) {
                        if (data[0].colNames[i].hasOwnProperty(p)) {
                            var j = 0;
                            for (var q in data[0].colNames[i][p]) {
                                console.log(p);
                                console.log(q);
                                result += p + " , " + data[0].colNames[i][p] + "\n";
                                console.log(p + "_" + data[0].colNames[i][p][j]);
                                this.keysName.push(p + "_" + data[0].colNames[i][p][j]);
                                // console.log(data[0].colNames[i][p])
                                j++;
                            }
                        }
                    }
                }
                else {
                    this.keysName.push(data[0].colNames[i]);
                }
            }
            console.log(this.keysName);
            this.myListData = data;
            this.display = true;
        }, error => console.log(error));
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
};
GridPanelComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
            <div class="row" align="center">
                
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Contacts </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Documents </a></button></div>
            </div>
            
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-hover table-condensed " *ngIf="display">
                        <tr *ngFor="let item of myListData">
                            <td *ngFor="let key of keysName">
                                <!--{{item["profile"]["nom"]}}-->
                               <!--{{item[eval(key)]}}-->
                                 {{item[key]}}
                            </td>
                            <td  *ngIf="this._stepService.step[0].master_type == 'workflow'"> <button class="btn btn-success" type="button" (click)="goToCurrentStep(item)" value="{{item.step_id}} ">Current step </button></td>
                        </tr>
                    </table>
                </div>
            </div>
    `
    }), 
    __metadata('design:paramtypes', [gridPanel_service_1.GridPanelService, router_1.Router])
], GridPanelComponent);
exports.GridPanelComponent = GridPanelComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFHcEUsb0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQseUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUErQnhEO0lBRUUsdUJBQXVCO0lBQ3RCLFlBQW9CLFlBQThCLEVBQVUsTUFBYztRQUF0RCxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzFFLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBSDhELENBQUM7SUFNN0UsUUFBUTtRQUVKLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2FBQzNCLFNBQVMsQ0FBQyxJQUFJO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFBLENBQUM7Z0JBQzVCLHlDQUF5QztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pDLDZCQUE2QjtnQkFDN0IsRUFBRSxDQUFBLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFBLENBQUM7b0JBQ3hDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztvQkFFaEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hDLEVBQUUsQ0FBQSxDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBRSxDQUFDLENBQUMsQ0FBQzs0QkFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNWLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dDQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dDQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsTUFBTSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7Z0NBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0NBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUNwRCxzQ0FBc0M7Z0NBQ3RDLENBQUMsRUFBRSxDQUFDOzRCQUNSLENBQUM7d0JBQ0wsQ0FBQztvQkFFTCxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsSUFBSSxDQUFBLENBQUM7b0JBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO1lBQ1QsQ0FBQztZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXhCLENBQUMsRUFDRyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUdULENBQUM7SUFDRyxlQUFlLENBQUMsSUFBSTtRQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksZ0JBQWdCLEdBQXFCO1lBQ3JDLFdBQVcsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1NBRS9ELENBQUM7UUFFRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJO1FBQ1QsTUFBTSxDQUFDLENBQUMsT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDL0UsQ0FBQztBQUdMLENBQUM7QUFqR0Q7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXVCVDtLQUVKLENBQUM7O3NCQUFBO0FBRVksMEJBQWtCLHFCQW9FL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2dyaWRQYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3JtR3JvdXB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vdmVoaWN1bGUvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R3JpZFBhbmVsU2VydmljZX0gZnJvbSBcIi4vZ3JpZFBhbmVsLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtSb3V0ZXIsIE5hdmlnYXRpb25FeHRyYXN9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7aXNPYmplY3R9IGZyb20gXCJyeGpzL3V0aWwvaXNPYmplY3RcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2dyaWQtcGFuZWwnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvZ3JpZCddXCI+IERhdGEgZ3JpZCA8L2E+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvc3RlcCddXCI+IE5vdXZlYXUgZmxvdzwvYT48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC0zXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj48YSBbcm91dGVyTGlua109XCJbJy8nXVwiPiBDb250YWN0cyA8L2E+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gRG9jdW1lbnRzIDwvYT48L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1jb25kZW5zZWQgXCIgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBteUxpc3REYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGtleSBvZiBrZXlzTmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e2l0ZW1bXCJwcm9maWxlXCJdW1wibm9tXCJdfX0tLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e2l0ZW1bZXZhbChrZXkpXX19LS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbVtrZXldfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcFswXS5tYXN0ZXJfdHlwZSA9PSAnd29ya2Zsb3cnXCI+IDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImdvVG9DdXJyZW50U3RlcChpdGVtKVwiIHZhbHVlPVwie3tpdGVtLnN0ZXBfaWR9fSBcIj5DdXJyZW50IHN0ZXAgPC9idXR0b24+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgYFxyXG5cclxufSlcclxuXHJcbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcclxuXHJcbiAgIC8vIHJvdXRlciA9IG5ldyBSb3V0ZXI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9ncmlkU2VydmljZTogR3JpZFBhbmVsU2VydmljZSwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcil7fVxyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG4gICAgbXlMaXN0RGF0YSA9IFtdO1xyXG4gICAga2V5c05hbWUgPSBbXTtcclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLmdldERhdGFzKClcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhIEZyb20gZ3JpZFNlcnZpY2VHZXREYXRhc1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIGRhdGFbMF0uY29sTmFtZXMpe1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGtleSAhPSAnX2lkJyAmJiBrZXkgIT0gJ3N0ZXBfaWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmNvbE5hbWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXkudmFsdWVPZigpKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkYXRhWzBdLmNvbE5hbWVzW2ldID09PSBcIm9iamVjdFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGRhdGFbMF0uY29sTmFtZXNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBkYXRhWzBdLmNvbE5hbWVzW2ldLmhhc093blByb3BlcnR5KHApICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBqID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBxIGluIGRhdGFbMF0uY29sTmFtZXNbaV1bcF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHAgKyBcIiAsIFwiICsgZGF0YVswXS5jb2xOYW1lc1tpXVtwXSArIFwiXFxuXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHArXCJfXCIrZGF0YVswXS5jb2xOYW1lc1tpXVtwXVtqXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlzTmFtZS5wdXNoKHArXCJfXCIrZGF0YVswXS5jb2xOYW1lc1tpXVtwXVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0uY29sTmFtZXNbaV1bcF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5c05hbWUucHVzaChkYXRhWzBdLmNvbE5hbWVzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5c05hbWUpO1xyXG4gICAgICAgICAgICB0aGlzLm15TGlzdERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICApXHJcblxyXG5cclxufVxyXG4gICAgZ29Ub0N1cnJlbnRTdGVwKGl0ZW0pe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogeyAnY3VycmVudF9pZCc6IGl0ZW0uc3RlcF9pZCwgJ19pZCc6IGl0ZW0uX2lkIH1cclxuXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc3RlcCddLCBuYXZpZ2F0aW9uRXh0cmFzKTtcclxuICAgIH1cclxuXHJcbiAgICBpc09iamVjdChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcclxuICAgIH1cclxuXHJcblxyXG59Il19
