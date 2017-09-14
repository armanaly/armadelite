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
var ListButtonsComponent = (function () {
    function ListButtonsComponent(_formService) {
        this._formService = _formService;
        this.change = new core_1.EventEmitter();
        this.display = false;
    }
    ListButtonsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInitStart");
        console.log("this.stepIdx " + this.stepIdx);
        console.log(this.objStep.conditions.length);
        console.log(this.objStep);
        if (this.objStep.conditions.length > 0) {
            var valueCondition_1 = this.objStep.conditions[0].value;
            var keyCondition_1 = this.objStep.conditions[0].key;
            console.log("valueCondition: " + valueCondition_1);
            console.log("keyCondition: " + keyCondition_1);
            console.log(this._formService);
            var tmpStepIdx = this.stepIdx - 1;
            if (typeof (this._formService.arraySteps.find(function (x) { return x[keyCondition_1] === valueCondition_1; })) != 'undefined') {
                this.display = true;
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
            template: "\n     <div *ngIf=\"display\">\n         <div class=\"panel-heading panel-heading-custom\">{{objStep.configuration.labelPanel}} </div>\n         <div class=\"panel-body\" >\n            <div class=\"jumbotron\" *ngIf=\"objStep.configuration.header_note && objStep.configuration.header_note != ''\">\n                <p [innerHTML] = \"objStep.configuration.header_note\"></p>\n            </div>\n            <!--<div class=\"col-md-3\" *ngFor=\"let valeurList of listOfElements\">-->\n\n            <ul class=\"items\" >\n                <li *ngFor=\"let valeurList of currentList\">\n                    <button *ngIf=\"valueSelected != valeurList\" \n                        class=\"brown_button\"\n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                    <button *ngIf=\"valueSelected == valeurList\" \n                        class=\"brown_button\" \n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                </li>\n            </ul>\n         </div>\n         <span class=\"label label-info\" *ngIf=\"objStep.configuration.foot_note && objStep.configuration.foot_note != ''\">{{objStep.configuration.foot_note}} </span>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], ListButtonsComponent);
    return ListButtonsComponent;
}());
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,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O0lBQ1I7UUFBQyxZQUFLLEVBQUU7OytEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBdkNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSw2NkNBNEJiO1NBQ0EsQ0FBQzs7NEJBQUE7SUFtRUYsMkJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLDRCQUFvQix1QkFpRWhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9saXN0QnV0dG9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaXN0LWJ1dHRvbnMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiICpuZ0lmPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAhPSAnJ1wiPlxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGVcIj48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPi0tPlxuXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiID5cbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJicm93bl9idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJyb3duX2J1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIiAqbmdJZj1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAhPSAnJ1wiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZX19IDwvc3Bhbj5cbiAgICAgPC9kaXY+XG5gXG59KVxuXG5leHBvcnQgY2xhc3MgTGlzdEJ1dHRvbnNDb21wb25lbnQge1xuICAgIEBJbnB1dCgpIG9ialN0ZXA7XG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XG4gICAgQElucHV0KCkgc3RlcElkeDtcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cblxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxuICAgIGN1cnJlbnRMaXN0O1xuICAgIGRpc3BsYXkgPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2VcbiAgICApXG4gICAge31cblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRTdGFydFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0ZXBJZHggXCIgKyB0aGlzLnN0ZXBJZHgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAuY29uZGl0aW9ucy5sZW5ndGgpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xuICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS52YWx1ZTtcbiAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS5rZXk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5Q29uZGl0aW9uOiBcIiArIGtleUNvbmRpdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoa2V5Q29uZGl0aW9uKSk7XG5cbiAgICAgICAgICAgIGxldCB0bXBTdGVwSWR4ID0gdGhpcy5zdGVwSWR4IC0gMTsgLy8gc3RlcElkeCB0ZW1wb3JhaXJlXG4gICAgICAgICAgICAvKiBMT09LIEZPUiBWQUxVRSBTRUxFQ1RFRCBJTlRPIEZPUk0gU0VSVklDRSAoKiphcnJheVN0ZXBzKiopXG4gICAgICAgICAgICAgICAgTEEgQ09ORElUSU9OIEEgVEVTVEVSIEVUIEpFIExBIENPTVBBUkUgQVZFQyBMQSBWQUxFVVIgREUgTEEgU1RFUCBDT1VSQU5URVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpICE9ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xuICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy52YWx1ZVNlbGVjdGVkKTtcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcy5uYW1lKTtcblxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSBkYXRhcy5saXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgb25DaG9vc2VWYWwoJGV2ZW50KXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJGV2ZW50KTtcblxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiAkZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxuICAgICAgICB9KVxuXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
