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
var core_1 = require('@angular/core');
var gridPanel_service_1 = require("./gridPanel.service");
var router_1 = require('@angular/router');
var step_service_1 = require("../Engine/step.service");
var http_1 = require("@angular/http");
var GridPanelComponent = (function () {
    function GridPanelComponent(_stepService, _gridService, router, route, _http) {
        this._stepService = _stepService;
        this._gridService = _gridService;
        this.router = router;
        this.route = route;
        this._http = _http;
        this.display = false;
        this.myListData = [];
        this.keysName = [];
        this.showInput = [];
        this.filterActivated = false;
        this.valeur = "";
    }
    GridPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.grid_name = this.route.snapshot.queryParams["grid_name"];
        this.valeur = this.route.snapshot.queryParams["master_val"];
        console.log(this.valeur);
        if (this.valeur != '') {
            this._gridService.getDatas(this.grid_name, this.valeur)
                .subscribe(function (data) {
                console.log(data);
                console.log(_this._gridService);
            }, function (error) { return console.log(error); });
        }
        else {
            this._gridService.getDatas(this.grid_name, '')
                .subscribe(function (data) {
                console.log(data);
                console.log(_this._gridService);
            }, function (error) { return console.log(error); });
        }
        for (var i = 0; i < this._gridService.colTitle.length; i++) {
            this.showInput.push(false);
        }
        this.myListData = this._gridService.dataGrid;
        this.keysName = this._gridService.keysName;
        console.log(this._gridService.keysName);
        console.log(this._gridService);
        this.display = true;
    };
    GridPanelComponent.prototype.goToCurrentStep = function (item) {
        console.log(item);
        var navigationExtras = {
            queryParams: { 'current_id': item.step_id, '_id': item._id }
        };
        this.router.navigate(['/step'], navigationExtras);
    };
    GridPanelComponent.prototype.isObject = function (item) {
        return (typeof item === "object" && !Array.isArray(item) && item !== null);
    };
    GridPanelComponent.prototype.showFilterInput = function (idx) {
        if (this.showInput[idx] == true) {
            this.showInput[idx] = false;
        }
        else {
            this.showInput[idx] = true;
        }
    };
    GridPanelComponent.prototype.checkUndefined = function (value) {
        console.log(value);
        console.log(typeof value === 'undefined');
        return (typeof value === 'undefined');
    };
    GridPanelComponent.prototype.updateCheckBox = function ($event, item) {
        var value = $event.target.checked;
        console.log(item);
        this._gridService.updateCheckbox(value, item._id)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    GridPanelComponent.prototype.filter = function (event) {
        console.log(event.target);
        console.log("passe par grid cmp");
        console.log(event);
        console.log(this._gridService.dataGrid);
        this._gridService.filterData(event.target.value, event.srcElement.id);
    };
    GridPanelComponent = __decorate([
        core_1.Component({
            selector: 'grid-panel',
            template: "\n              <div>\n                <nav class=\"form-navArrow\">\n                   <a [routerLink]=\"['/']\">\n                   <!--<a [routerLink]=\"['/menu']\" [queryParams]=\"{'firstLoad': false}\">-->\n                       <button class=\"btn btn-warning\"><i class=\"glyphicon glyphicon-triangle-left\" ></i>BACK</button></a>\n                </nav>\n              </div>\n               \n               \n               <div class=\"panel-heading panel-heading-custom\" align=\"center\">\n                 <h2 *ngIf=\"valeur != ''\">{{valeur}}</h2>\n                 <h3>{{grid_name}}</h3>\n               </div>\n               \n                <div class=\"panel-body\">\n               <div class=\"table-responsive\" *ngIf=\"display\">\n                    <table class=\"table table-hover table-condensed\"  >\n                        <tr>\n                            <th *ngFor=\"let obj of _gridService.colTitle;let i = index\">\n                                <div>{{obj.title}}&nbsp; \n                                    <button  \n                                        class=\"glyphicon glyphicon-filter\" \n                                        type=\"button\" \n                                        (click)=\"showFilterInput(i)\">\n                                    </button>\n                                    <br>\n                                    <input   \n                                        *ngIf=\"showInput[i] == true\"\n                                        myAutofocus=\"true\"\n                                        type=\"text\" \n                                        id=\"{{obj.key}}\"\n                                        name=\"{{obj.key}}\"\n                                        (keyup)=\"filter($event)\"\n                                     >\n                                     <br>\n                                     \n                                </div>\n\n                            </th>\n                            \n                        </tr>\n                        <tr *ngFor=\"let item of _gridService.dataGrid;let j = index\">\n                            <td *ngFor=\"let key of _gridService.keysName;let i = index\" align=\"center\">\n                                                     \n                                <span *ngIf=\"!filterActivated && _gridService.colTitle[i].type != 'checkbox' \"> {{item[key]}}  </span>\n                                \n                                <span *ngIf=\"this._gridService.colTitle[i].type == 'checkbox' \"> \n                                    <input *ngIf=\"item[key]\" type=\"checkbox\" value=\"{{item[key]}}\" checked (change)=updateCheckBox($event,item) /> \n                                    <input *ngIf=\"item[key] == false\" type=\"checkbox\" value=\"{{item[key]}}\" (change)=updateCheckBox($event,item) /> \n                                </span>\n                            </td>\n                            \n                            <td>\n                                <a [routerLink]=\"['/editStudent', item._id] \"> \n                                    <button class=\"btn btn-primary\" type=\"button\" > \n                                        <i class=\"glyphicon glyphicon-edit\"> </i>\n                                    </button>\n                                </a> \n                            </td>\n\n                            \n                            <!--*ngIf=\"item.group_mgt\"-->\n                            <td >\n                                <a [routerLink]=\"['/groupManagement', item._id, grid_name, valeur] \">\n                                    <button class=\"btn btn-primary\" type=\"button\">{{item.stage}} Group </button>\n                                </a> \n                            </td>\n                            <!-- IF DETAILS IS ACTIVATED IN GRID CONFIG COLLECTION -->\n                            <td *ngIf=\"item.details.activated\">\n                                <a [routerLink]=\"['/details', item._id] \">\n                                    <button class=\"btn btn-primary\" type=\"button\"> Detail </button>\n                                </a> \n                            </td>\n                            <!-- MODAL <td *ngIf=\"item.details.activated\"><button class=\"btn btn-success\" type=\"button\" data-toggle=\"modal\" data-target=\"#myModal\">DETAIL </button></td>-->\n                            \n                            <!--IF WORKFLOW TYPE BTN TO GO BACK TO CURRENT STEP -->\n                            <td *ngIf=\"this._stepService.steps[0].master_type == 'workflow'\"> <button class=\"btn btn-success\" type=\"button\" (click)=\"goToCurrentStep(item)\" value=\"{{item.step_id}} \">Current step </button></td>\n                        \n                            <!--<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">-->\n  <!---->\n                          <!--<div *ngIf=\"item.details.activated\" class=\"modal-dialog\" role=\"document\">-->\n                            <!--<div class=\"modal-content\">-->\n                              <!--<div class=\"modal-header\">-->\n                                <!--<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>-->\n                                <!--<h4 class=\"modal-title\" id=\"myModalLabel\"></h4>-->\n                              <!--</div>-->\n                              <!--<div class=\"modal-body\">-->\n                                <!--BODY ICI {{item.detail[0].power}}-->\n                                <!--<br> {{key}} <br>{{_gridService.keysName_details[0]}}-->\n                                <!--<div *ngFor=\"let fields of _gridService.keysName_details\">-->\n                                    <!--{{fields}}-->\n                                    <!--&lt;!&ndash;l&ndash;&gt;-->\n                                    <!--&lt;!&ndash;{{fields[0].power}}&ndash;&gt;-->\n                                <!--&lt;!&ndash;&ndash;&gt;-->\n                                <!--</div>-->\n                                <!---->\n                              <!--</div>-->\n                              <!--<div class=\"modal-footer\">-->\n                                <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\n                                <!--<button type=\"button\" class=\"btn btn-primary\">Save changes</button>-->\n                              <!--</div>-->\n                            <!--</div>-->\n                          <!--</div>-->\n                        <!--</div>-->\n                        </tr>\n                        \n                    </table>\n                </div>\n               \n            </div>\n            <!-- Modal -->\n\n    "
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService, gridPanel_service_1.GridPanelService, (typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, (typeof (_b = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _b) || Object, (typeof (_c = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _c) || Object])
    ], GridPanelComponent);
    return GridPanelComponent;
    var _a, _b, _c;
}());
exports.GridPanelComponent = GridPanelComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsa0NBQStCLHFCQUFxQixDQUFDLENBQUE7QUFDckQsdUJBQXVELGlCQUFpQixDQUFDLENBQUE7QUFDekUsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBdUhsQztJQUdHLDRCQUFvQixZQUF5QixFQUFVLFlBQThCLEVBQVUsTUFBYyxFQUN6RixLQUFxQixFQUFVLEtBQVc7UUFEMUMsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3pGLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUU5RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixXQUFNLEdBQUcsRUFBRSxDQUFDO0lBUm9ELENBQUM7SUFVakUscUNBQVEsR0FBUjtRQUFBLGlCQW1DSDtRQWpDTyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQyxD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QUQsQ0F6R0MsQUF5R0EsSUFBQTtBQXpHYSwwQkFBa0IscUJBeUcvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZ3JpZFBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0dyaWRQYW5lbFNlcnZpY2V9IGZyb20gXCIuL2dyaWRQYW5lbC5zZXJ2aWNlXCI7XG5pbXBvcnQge1JvdXRlciwgTmF2aWdhdGlvbkV4dHJhcywgQWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdncmlkLXBhbmVsJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5cbiAgICAgICAgICAgICAgICAgICA8IS0tPGEgW3JvdXRlckxpbmtdPVwiWycvbWVudSddXCIgW3F1ZXJ5UGFyYW1zXT1cInsnZmlyc3RMb2FkJzogZmFsc2V9XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXdhcm5pbmdcIj48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID48L2k+QkFDSzwvYnV0dG9uPjwvYT5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICA8aDIgKm5nSWY9XCJ2YWxldXIgIT0gJydcIj57e3ZhbGV1cn19PC9oMj5cbiAgICAgICAgICAgICAgICAgPGgzPnt7Z3JpZF9uYW1lfX08L2gzPlxuICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiPlxuICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIiAqbmdJZj1cImRpc3BsYXlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtY29uZGVuc2VkXCIgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IG9iaiBvZiBfZ3JpZFNlcnZpY2UuY29sVGl0bGU7bGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt7b2JqLnRpdGxlfX0mbmJzcDsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZmlsdGVyXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzaG93RmlsdGVySW5wdXQoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93SW5wdXRbaV0gPT0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlBdXRvZm9jdXM9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tvYmoua2V5fX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ7e29iai5rZXl9fVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cImZpbHRlcigkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyICpuZ0Zvcj1cImxldCBpdGVtIG9mIF9ncmlkU2VydmljZS5kYXRhR3JpZDtsZXQgaiA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBrZXkgb2YgX2dyaWRTZXJ2aWNlLmtleXNOYW1lO2xldCBpID0gaW5kZXhcIiBhbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhZmlsdGVyQWN0aXZhdGVkICYmIF9ncmlkU2VydmljZS5jb2xUaXRsZVtpXS50eXBlICE9ICdjaGVja2JveCcgXCI+IHt7aXRlbVtrZXldfX0gIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwidGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGVbaV0udHlwZSA9PSAnY2hlY2tib3gnIFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cIml0ZW1ba2V5XVwiIHR5cGU9XCJjaGVja2JveFwiIHZhbHVlPVwie3tpdGVtW2tleV19fVwiIGNoZWNrZWQgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0ICpuZ0lmPVwiaXRlbVtrZXldID09IGZhbHNlXCIgdHlwZT1cImNoZWNrYm94XCIgdmFsdWU9XCJ7e2l0ZW1ba2V5XX19XCIgKGNoYW5nZSk9dXBkYXRlQ2hlY2tCb3goJGV2ZW50LGl0ZW0pIC8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2VkaXRTdHVkZW50JywgaXRlbS5faWRdIFwiPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tZWRpdFwiPiA8L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSpuZ0lmPVwiaXRlbS5ncm91cF9tZ3RcIi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyb3VwTWFuYWdlbWVudCcsIGl0ZW0uX2lkLCBncmlkX25hbWUsIHZhbGV1cl0gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiPnt7aXRlbS5zdGFnZX19IEdyb3VwIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBJRiBERVRBSUxTIElTIEFDVElWQVRFRCBJTiBHUklEIENPTkZJRyBDT0xMRUNUSU9OIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdJZj1cIml0ZW0uZGV0YWlscy5hY3RpdmF0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgW3JvdXRlckxpbmtdPVwiWycvZGV0YWlscycsIGl0ZW0uX2lkXSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCI+IERldGFpbCA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTU9EQUwgPHRkICpuZ0lmPVwiaXRlbS5kZXRhaWxzLmFjdGl2YXRlZFwiPjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJtb2RhbFwiIGRhdGEtdGFyZ2V0PVwiI215TW9kYWxcIj5ERVRBSUwgPC9idXR0b24+PC90ZD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tSUYgV09SS0ZMT1cgVFlQRSBCVE4gVE8gR08gQkFDSyBUTyBDVVJSRU5UIFNURVAgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkICpuZ0lmPVwidGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPT0gJ3dvcmtmbG93J1wiPiA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJnb1RvQ3VycmVudFN0ZXAoaXRlbSlcIiB2YWx1ZT1cInt7aXRlbS5zdGVwX2lkfX0gXCI+Q3VycmVudCBzdGVwIDwvYnV0dG9uPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsIGZhZGVcIiBpZD1cIm15TW9kYWxcIiB0YWJpbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtbGFiZWxsZWRieT1cIm15TW9kYWxMYWJlbFwiPi0tPlxuICA8IS0tLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0lmPVwiaXRlbS5kZXRhaWxzLmFjdGl2YXRlZFwiIGNsYXNzPVwibW9kYWwtZGlhbG9nXCIgcm9sZT1cImRvY3VtZW50XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cIm1vZGFsLWhlYWRlclwiPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj48L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCIgaWQ9XCJteU1vZGFsTGFiZWxcIj48L2g0Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJtb2RhbC1ib2R5XCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS1CT0RZIElDSSB7e2l0ZW0uZGV0YWlsWzBdLnBvd2VyfX0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxicj4ge3trZXl9fSA8YnI+e3tfZ3JpZFNlcnZpY2Uua2V5c05hbWVfZGV0YWlsc1swXX19LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2ICpuZ0Zvcj1cImxldCBmaWVsZHMgb2YgX2dyaWRTZXJ2aWNlLmtleXNOYW1lX2RldGFpbHNcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS17e2ZpZWxkc319LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7bCZuZGFzaDsmZ3Q7LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tJmx0OyEmbmRhc2g7e3tmaWVsZHNbMF0ucG93ZXJ9fSZuZGFzaDsmZ3Q7LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0mbHQ7ISZuZGFzaDsmbmRhc2g7Jmd0Oy0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08L2Rpdj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwibW9kYWwtZm9vdGVyXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCI+Q2xvc2U8L2J1dHRvbj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+U2F2ZSBjaGFuZ2VzPC9idXR0b24+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTwvZGl2Pi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tPC9kaXY+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLSBNb2RhbCAtLT5cblxuICAgIGBcbn0pXG5cbiBleHBvcnQgY2xhc3MgR3JpZFBhbmVsQ29tcG9uZW50IHtcblxuICAgLy8gcm91dGVyID0gbmV3IFJvdXRlcjtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2dyaWRTZXJ2aWNlOiBHcmlkUGFuZWxTZXJ2aWNlLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBwcml2YXRlIF9odHRwOiBIdHRwKXt9XG5cbiAgICBkaXNwbGF5ID0gZmFsc2U7XG4gICAgbXlMaXN0RGF0YSA9IFtdOy8vID0gIHRoaXMuX2dyaWRTZXJ2aWNlLmRhdGFHcmlkO1xuICAgIGdyaWRfbmFtZTtcbiAgICBrZXlzTmFtZSA9IFtdO1xuICAgIHNob3dJbnB1dCA9IFtdO1xuICAgIGZpbHRlckFjdGl2YXRlZCA9IGZhbHNlO1xuICAgIHZhbGV1ciA9IFwiXCI7XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICB0aGlzLmdyaWRfbmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJncmlkX25hbWVcIl07XG4gICAgICAgIHRoaXMudmFsZXVyID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcIm1hc3Rlcl92YWxcIl07XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudmFsZXVyKVxuICAgICAgICBpZih0aGlzLnZhbGV1ciAhPSAnJyl7XG4gICAgICAgICAgICB0aGlzLl9ncmlkU2VydmljZS5nZXREYXRhcyh0aGlzLmdyaWRfbmFtZSwgdGhpcy52YWxldXIpXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZ2V0RGF0YXModGhpcy5ncmlkX25hbWUsICcnKVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZ3JpZFNlcnZpY2UuY29sVGl0bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0LnB1c2goZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5teUxpc3REYXRhID0gdGhpcy5fZ3JpZFNlcnZpY2UuZGF0YUdyaWQ7XG4gICAgICAgIHRoaXMua2V5c05hbWUgPSB0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ncmlkU2VydmljZS5rZXlzTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2dyaWRTZXJ2aWNlKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcblxufVxuICAgIGdvVG9DdXJyZW50U3RlcChpdGVtKXtcbiAgICAgICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgICAgIGxldCBuYXZpZ2F0aW9uRXh0cmFzOiBOYXZpZ2F0aW9uRXh0cmFzID0ge1xuICAgICAgICAgICAgcXVlcnlQYXJhbXM6IHsgJ2N1cnJlbnRfaWQnOiBpdGVtLnN0ZXBfaWQsICdfaWQnOiBpdGVtLl9pZCB9XG5cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9zdGVwJ10sIG5hdmlnYXRpb25FeHRyYXMpO1xuICAgIH1cblxuICAgIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShpdGVtKSAmJiBpdGVtICE9PSBudWxsKTtcbiAgICB9XG5cbiAgICBzaG93RmlsdGVySW5wdXQoaWR4KXtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0lucHV0W2lkeF0gPT0gdHJ1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zaG93SW5wdXRbaWR4XSA9IGZhbHNlO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvd0lucHV0W2lkeF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hlY2tVbmRlZmluZWQodmFsdWUpe1xuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHJldHVybiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJyk7XG4gICAgfVxuXG5cbiAgICB1cGRhdGVDaGVja0JveCgkZXZlbnQsIGl0ZW0pe1xuICAgICAgIC8vIGxldCB2YWx1ZSA9ICRldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpO1xuICAgICAgICBsZXQgdmFsdWUgPSRldmVudC50YXJnZXQuY2hlY2tlZDtcbmNvbnNvbGUubG9nKGl0ZW0pXG4gICAgICAgIHRoaXMuX2dyaWRTZXJ2aWNlLnVwZGF0ZUNoZWNrYm94KHZhbHVlLGl0ZW0uX2lkKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgLy8gY29uc29sZS5sb2codmFsdWUpO1xuICAgICAgLy8gIGNvbnNvbGUubG9nKHZhbDIpO1xuXG4gICAgfVxuXG4gICAgZmlsdGVyKGV2ZW50OiBhbnkpe1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAvL2lmIChldmVudC50YXJnZXQudmFsdWUgPT0nJyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFzc2UgcGFyIGdyaWQgY21wXCIpO1xuICAgICAgICAgICAgLy99ZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy4gX2dyaWRTZXJ2aWNlLmRhdGFHcmlkKTtcbiAgICAgICAgdGhpcy5fZ3JpZFNlcnZpY2UuZmlsdGVyRGF0YShldmVudC50YXJnZXQudmFsdWUsIGV2ZW50LnNyY0VsZW1lbnQuaWQpO31cbiAgICAgICAgLy8gIHRoaXMuZmlsdGVyQWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAvL31cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
