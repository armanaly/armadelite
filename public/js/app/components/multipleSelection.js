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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBaUNwRTtJQUFBO1FBU2MsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBcUQxQyxDQUFDO0lBakRHLDBDQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFjLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsQ0FBQztZQUFqQyxJQUFJLEtBQUssU0FBQTtZQUlWLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbEMsQ0FBQztTQUNKO0lBQ0wsQ0FBQztJQUVELDZDQUFXLEdBQVgsVUFBWSxNQUFNO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFJTCxDQUFDOztJQUVELHdDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbEMsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw0Q0FBVSxHQUFWLFVBQVcsTUFBTTtRQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7O0lBekREO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOztrRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzs0REFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttRUFBQTtJQUNSO1FBQUMsWUFBSyxFQUFFOzttRUFBQTtJQUdSO1FBQUMsYUFBTSxFQUFFOzsyREFBQTtJQXhDYjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSwwbkNBMEJiO1NBQ0EsQ0FBQzs7K0JBQUE7SUFnRUYsOEJBQUM7QUFBRCxDQTlEQSxBQThEQyxJQUFBO0FBOURZLCtCQUF1QiwwQkE4RG5DLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9tdWx0aXBsZVNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbi8vIENBTiBTRUxFQ1QgTU9SRSBUSEFOIE9ORSBWQUxVRVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXVsdGktc2VsZWN0aW9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX0gPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+XHJcbiAgICAgIFxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPi0tPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSBmYWxzZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiICBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XHJcbiAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSB0cnVlXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5cclxuICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8ZGl2PjxidXR0b24gYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJzdWJtaXQoKVwiPlNVSVZBTlQ8L2J1dHRvbj48L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIiAgKm5nSWY9XCJmb290Tm90ZSAhPSAnJ1wiPnt7Zm9vdE5vdGV9fSA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHZhbHVlc1NlbGVjdGVkO1xyXG4gICAgLy8gQElucHV0KCkgc3RlcElkOyAgICAgICAgLy8gU2VuZCB0aGUgY3VycmVudCBzdGVwIGluIG9yZGVyIHRvIGluY3JlbWVudCBpdFxyXG4gICAgLy8gQElucHV0KCkgZm9vdE5vdGUgPSAnJzsgLy9PcHRpb25hbCBpbnNlcnQgYSBmb290bm90ZSBpbiBjb21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG5cclxuICAgIGN1cnJlbnRMaXN0O1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaG9vc2VWYWwoJGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXNTZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzU2VsZWN0ZWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzU2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQ6IHRoaXMudmFsdWVzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlzU2VsZWN0ZWQob3B0aW9uKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlc1NlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1NlbGVjdGVkW2ldID09IG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcblxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
