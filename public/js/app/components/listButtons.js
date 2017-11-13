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
var form_service_1 = require("./form.service");
var step_service_1 = require("../Engine/step.service");
var ListButtonsComponent = (function () {
    function ListButtonsComponent(_formService, _stepService) {
        this._formService = _formService;
        this._stepService = _stepService;
        this.change = new core_1.EventEmitter();
        this.display = false;
    }
    ListButtonsComponent.prototype.ngOnInit = function () {
        if (this.objStep.conditions.length > 0) {
            var valueCondition_1 = this.objStep.conditions[0].value;
            var keyCondition_1 = this.objStep.conditions[0].key;
            var tmpStepIdx = this.stepIdx - 1;
            if (typeof this._formService.arraySteps.find(function (x) { return x[keyCondition_1] === valueCondition_1; }) != 'undefined') {
                if (typeof this.objStep.conditions[1] != 'undefined') {
                    var valueCondition2_1 = this.objStep.conditions[1].value;
                    var keyCondition2_1 = this.objStep.conditions[1].key;
                    if (typeof this._formService.arraySteps.find(function (x) { return x[keyCondition2_1] === valueCondition2_1; }) != 'undefined') {
                        this.display = true;
                    }
                }
                else {
                    this.display = true;
                }
            }
        }
        else {
            this.display = true;
        }
        for (var _i = 0, _a = this.listOfElements; _i < _a.length; _i++) {
            var datas = _a[_i];
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
    };
    ListButtonsComponent.prototype.onChooseVal = function ($event) {
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: $event.target.value,
            stepIdx: this.stepIdx
        });
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListButtonsComponent.prototype, "objStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListButtonsComponent.prototype, "listOfElements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListButtonsComponent.prototype, "stepIdx", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ListButtonsComponent.prototype, "valueSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], ListButtonsComponent.prototype, "change", void 0);
    ListButtonsComponent = __decorate([
        core_1.Component({
            selector: 'list-buttons',
            template: "\n     <div *ngIf=\"display\">\n         <div *ngIf=\"_stepService.language == 'en'\" class=\"{{_stepService.template.panel_heading}}\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel}}</p> </div>\n         <div *ngIf=\"_stepService.language == 'es'\" class=\"{{_stepService.template.panel_heading}}\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel_es}}</p> </div>\n         <div *ngIf=\"_stepService.language == 'fr'\" class=\"{{_stepService.template.panel_heading}}\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel_fr}}</p> </div>\n         <div class=\"panel-body\" >\n            <div class=\"jumbotron\" *ngIf=\"objStep.configuration.header_note && objStep.configuration.header_note != ''\">\n                <p [innerHTML] = \"objStep.configuration.header_note\"></p>\n            </div>\n            <ul class=\"items\"  >\n                <li *ngFor=\"let valeurList of currentList\">\n                     <!--data-toggle=\"tooltip\" title=\" \"-->\n                    <button *ngIf=\"valueSelected != valeurList\" \n                        class=\"{{ _stepService.template.list_btn}}\"\n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                    <button *ngIf=\"valueSelected == valeurList\" \n                        data-toggle=\"tooltip\" title=\" text\"\n                        class=\"{{_stepService.template.list_btn}}\" \n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                </li>\n            </ul>\n         </div>\n         <div *ngIf=\"_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''\" [innerHTML] = \"objStep.configuration.foot_note\"></div> \n         <div *ngIf=\"_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''\" [innerHTML] = \"objStep.configuration.foot_note_es\"></div>\n         <div *ngIf=\"_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''\" [innerHTML] = \"objStep.configuration.foot_note_fr\"></div>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService, step_service_1.StepService])
    ], ListButtonsComponent);
    return ListButtonsComponent;
}());
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdEJ1dHRvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBdUNuRDtJQVVJLDhCQUNZLFlBQXlCLEVBQVUsWUFBeUI7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUw5RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFFdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUtmLENBQUM7SUFFRix1Q0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDcEMsSUFBSSxnQkFBYyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUN0RCxJQUFJLGNBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFFbEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFNbEMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsY0FBWSxDQUFDLEtBQUssZ0JBQWMsRUFBbEMsQ0FBa0MsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFBLENBQUM7Z0JBRWxHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUEsQ0FBQztvQkFDbEQsSUFBSSxpQkFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdkQsSUFBSSxlQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUVuRCxFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxlQUFhLENBQUMsS0FBSyxpQkFBZSxFQUFwQyxDQUFvQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUEsQ0FBQzt3QkFDcEcsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3hCLENBQUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLENBQUEsQ0FBQztvQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztnQkFDeEIsQ0FBQztZQUVMLENBQUM7UUFFTCxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUN4QixDQUFDO1FBQ0QsR0FBRyxDQUFDLENBQWMsVUFBbUIsRUFBbkIsS0FBQSxJQUFJLENBQUMsY0FBYyxFQUFuQixjQUFtQixFQUFuQixJQUFtQixDQUFDO1lBQWpDLElBQUksS0FBSyxTQUFBO1lBQ1YsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxDQUFDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsMENBQVcsR0FBWCxVQUFZLE1BQU07UUFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ25DLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDOztJQXpERDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7Z0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7K0RBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUEzQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLDQxRUFnQ2I7U0FDQSxDQUFDOzs0QkFBQTtJQTZERiwyQkFBQztBQUFELENBM0RBLEFBMkRDLElBQUE7QUEzRFksNEJBQW9CLHVCQTJEaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xpc3RCdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlzdC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9lc319PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9mcn19PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiAqbmdJZj1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGUgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGVcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICA+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLWRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlXCI+PC9kaXY+IFxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcycgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXNcIj48L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnIgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyXCI+PC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0QnV0dG9uc0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4O1xyXG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXHJcblxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICBjdXJyZW50TGlzdDtcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZVxyXG4gICAgKVxyXG4gICAge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG5cclxuICAgICAgICAgICAgbGV0IHRtcFN0ZXBJZHggPSB0aGlzLnN0ZXBJZHggLSAxOyAvLyBzdGVwSWR4IHRlbXBvcmFpcmVcclxuICAgICAgICAgICAgLyogTE9PSyBGT1IgVkFMVUUgU0VMRUNURUQgSU5UTyBGT1JNIFNFUlZJQ0UgKCoqYXJyYXlTdGVwcyoqKVxyXG4gICAgICAgICAgICAgICAgTEEgQ09ORElUSU9OIEEgVEVTVEVSIEVUIEpFIExBIENPTVBBUkUgQVZFQyBMQSBWQUxFVVIgREUgTEEgU1RFUCBDT1VSQU5URVxyXG4gICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgIC8vIFNJIElMIFkgQSBVTkUgMmVtZSBDT05ESVRJT05cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMV0gIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbjIgPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1sxXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uMiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzFdLmtleTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbjJdID09PSB2YWx1ZUNvbmRpdGlvbjIpICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiAkZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
