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
var MultiSelectionComponent = (function () {
    function MultiSelectionComponent() {
        this.change = new core_1.EventEmitter();
    }
    MultiSelectionComponent.prototype.ngOnInit = function () {
        console.log('ok');
        console.log(this.listOfElements);
        for (var _i = 0, _a = this.listOfElements; _i < _a.length; _i++) {
            var datas = _a[_i];
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
    };
    MultiSelectionComponent.prototype.onChooseVal = function ($event) {
        var addOption = true;
        for (var i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == event.target.value) {
                this.valuesSelected.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.valuesSelected.push(event.target.value);
        }
    };
    ;
    MultiSelectionComponent.prototype.submit = function () {
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: this.valuesSelected,
            stepIdx: this.stepIdx
        });
    };
    MultiSelectionComponent.prototype.isSelected = function (option) {
        for (var i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == option) {
                return true;
            }
        }
        return false;
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "objStep", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "valueSelected", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "stepIdx", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "listOfElements", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "valuesSelected", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], MultiSelectionComponent.prototype, "change", void 0);
    MultiSelectionComponent = __decorate([
        core_1.Component({
            selector: 'multi-selection',
            template: "\n        <div class=\"panel-heading panel-heading-custom\">{{objStep.configuration.labelPanel}} </div>\n        <div class=\"panel-body\" >\n      \n        <!--<div class=\"col-md-3\" *ngFor=\"let valeurList of listOfElements\">-->\n        <ul class=\"items\">\n            <li *ngFor=\"let valeurList of currentList\">\n            <button *ngIf=\"isSelected(valeurList) == false\" type=\"button\" \n                    (click)=\"onChooseVal($event)\"  \n                    value=\"{{valeurList}}\" \n                    class=\"btn btn-primary btn-primary-custom\">\n            {{valeurList}}\n            </button>\n            <button *ngIf=\"isSelected(valeurList) == true\" type=\"button\" \n                    (click)=\"onChooseVal($event)\"  \n                    value=\"{{valeurList}}\" \n                    class=\"btn btn-info-custom\">\n            {{valeurList}}\n            </button>\n            </li>\n        </ul>\n        <div><button btn-default btn-lg (click)=\"submit()\">SUIVANT</button></div>\n        <span class=\"label label-info\"  *ngIf=\"footNote != ''\">{{footNote}} </span>\n        </div>\n        \n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MultiSelectionComponent);
    return MultiSelectionComponent;
}());
exports.MultiSelectionComponent = MultiSelectionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBaUNwRTtJQUFBO1FBU2MsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBcUQxQyxDQUFDO0lBakRHLDBDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFjLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsQ0FBQztZQUFqQyxJQUFJLEtBQUssU0FBQTtZQUlWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbEMsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFJTCxDQUFDOztJQUVELHdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbEMsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw0Q0FBVSxHQUFWLFVBQVcsTUFBTTtRQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7O0lBekREO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttRUFBQTtJQUdSO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQXhDYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwwbkNBMEJiO1NBQ0EsQ0FBQzs7K0JBQUE7SUFnRUYsOEJBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLCtCQUF1QiwwQkE4RG5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tdWx0aXBsZVNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG4vLyBDQU4gU0VMRUNUIE1PUkUgVEhBTiBPTkUgVkFMVUVcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXVsdGktc2VsZWN0aW9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+XG4gICAgICBcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGxpc3RPZkVsZW1lbnRzXCI+LS0+XG4gICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCI+XG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IGZhbHNlXCIgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiICBcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5cbiAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IHRydWVcIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPlxuICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGRpdj48YnV0dG9uIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwic3VibWl0KClcIj5TVUlWQU5UPC9idXR0b24+PC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW5mb1wiICAqbmdJZj1cImZvb3ROb3RlICE9ICcnXCI+e3tmb290Tm90ZX19IDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuXG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQge1xuXG4gICAgQElucHV0KCkgb2JqU3RlcDtcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cbiAgICBASW5wdXQoKSBzdGVwSWR4O1xuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xuICAgIEBJbnB1dCgpIHZhbHVlc1NlbGVjdGVkO1xuICAgIC8vIEBJbnB1dCgpIHN0ZXBJZDsgICAgICAgIC8vIFNlbmQgdGhlIGN1cnJlbnQgc3RlcCBpbiBvcmRlciB0byBpbmNyZW1lbnQgaXRcbiAgICAvLyBASW5wdXQoKSBmb290Tm90ZSA9ICcnOyAvL09wdGlvbmFsIGluc2VydCBhIGZvb3Rub3RlIGluIGNvbXBvbmVudFxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxuXG4gICAgY3VycmVudExpc3Q7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xuICAgICAgICBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKXtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNob29zZVZhbCgkZXZlbnQpIHtcbiAgICAgICAgdmFyIGFkZE9wdGlvbiA9IHRydWU7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlc1NlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1NlbGVjdGVkLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkT3B0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlc1NlbGVjdGVkLnB1c2goZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgfVxuXG5cblxuICAgIH07XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgdmFsdWVOYW1lIDogdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lLFxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZDogdGhpcy52YWx1ZXNTZWxlY3RlZCxcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBpc1NlbGVjdGVkKG9wdGlvbikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1NlbGVjdGVkW2ldID09IG9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
