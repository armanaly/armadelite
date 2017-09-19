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
            template: "\n        <div class=\"panel-heading panel-heading-custom\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel}}</p> </div>\n        <div class=\"panel-body\" >\n      \n        <!--<div class=\"col-md-3\" *ngFor=\"let valeurList of listOfElements\">-->\n        <ul class=\"items\">\n            <li *ngFor=\"let valeurList of currentList\">\n            <button *ngIf=\"isSelected(valeurList) == false\" type=\"button\" \n                    (click)=\"onChooseVal($event)\"  \n                    value=\"{{valeurList}}\" \n                    class=\"btn btn-primary btn-primary-custom\">\n            {{valeurList}}\n            </button>\n            <button *ngIf=\"isSelected(valeurList) == true\" type=\"button\" \n                    (click)=\"onChooseVal($event)\"  \n                    value=\"{{valeurList}}\" \n                    class=\"btn btn-info-custom\">\n            {{valeurList}}\n            </button>\n            </li>\n        </ul>\n        <div><button btn-default btn-lg (click)=\"submit()\">SUIVANT</button></div>\n        <span class=\"label label-info\"  *ngIf=\"footNote != ''\">{{footNote}} </span>\n        </div>\n        \n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MultiSelectionComponent);
    return MultiSelectionComponent;
}());
exports.MultiSelectionComponent = MultiSelectionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBaUNwRTtJQUFBO1FBU2MsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBcUQxQyxDQUFDO0lBakRHLDBDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFjLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsQ0FBQztZQUFqQyxJQUFJLEtBQUssU0FBQTtZQUlWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbEMsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFJTCxDQUFDOztJQUVELHdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbEMsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw0Q0FBVSxHQUFWLFVBQVcsTUFBTTtRQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7O0lBekREO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttRUFBQTtJQUdSO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQXhDYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwwcENBMEJiO1NBQ0EsQ0FBQzs7K0JBQUE7SUFnRUYsOEJBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLCtCQUF1QiwwQkE4RG5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tdWx0aXBsZVNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG4vLyBDQU4gU0VMRUNUIE1PUkUgVEhBTiBPTkUgVkFMVUVcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXVsdGktc2VsZWN0aW9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX08L3A+IDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID5cbiAgICAgIFxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgbGlzdE9mRWxlbWVudHNcIj4tLT5cbiAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIj5cbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gZmFsc2VcIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxuICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gdHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+XG4gICAgICAgICAgICB7e3ZhbGV1ckxpc3R9fVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8ZGl2PjxidXR0b24gYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJzdWJtaXQoKVwiPlNVSVZBTlQ8L2J1dHRvbj48L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1pbmZvXCIgICpuZ0lmPVwiZm9vdE5vdGUgIT0gJydcIj57e2Zvb3ROb3RlfX0gPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG5cbmBcbn0pXG5cbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKSBvYmpTdGVwO1xuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XG4gICAgQElucHV0KCkgdmFsdWVzU2VsZWN0ZWQ7XG4gICAgLy8gQElucHV0KCkgc3RlcElkOyAgICAgICAgLy8gU2VuZCB0aGUgY3VycmVudCBzdGVwIGluIG9yZGVyIHRvIGluY3JlbWVudCBpdFxuICAgIC8vIEBJbnB1dCgpIGZvb3ROb3RlID0gJyc7IC8vT3B0aW9uYWwgaW5zZXJ0IGEgZm9vdG5vdGUgaW4gY29tcG9uZW50XG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XG5cbiAgICBjdXJyZW50TGlzdDtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb2snKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cyk7XG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMubmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hvb3NlVmFsKCRldmVudCkge1xuICAgICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzU2VsZWN0ZWQuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRPcHRpb24pIHtcbiAgICAgICAgICAgIHRoaXMudmFsdWVzU2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICB9XG5cblxuXG4gICAgfTtcblxuICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkOiB0aGlzLnZhbHVlc1NlbGVjdGVkLFxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGlzU2VsZWN0ZWQob3B0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXNTZWxlY3RlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzU2VsZWN0ZWRbaV0gPT0gb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG5cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
