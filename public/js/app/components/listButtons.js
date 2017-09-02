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
            template: "\n     <div *ngIf=\"display\">\n         <div class=\"panel-heading panel-heading-custom\">{{objStep.configuration.labelPanel}} </div>\n         <div class=\"panel-body\" >\n            <div class=\"jumbotron\" *ngIf=\"objStep.configuration.header_note != ''\">\n                <p [innerHTML] = \"objStep.configuration.header_note\"></p>\n            </div>\n            <!--<div class=\"col-md-3\" *ngFor=\"let valeurList of listOfElements\">-->\n            \n            <ul class=\"items\" >\n                <li *ngFor=\"let valeurList of currentList\">\n                    <button *ngIf=\"valueSelected != valeurList\" class=\"btn btn-primary\" type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                    <button *ngIf=\"valueSelected == valeurList\" class=\"btn btn-info-custom\" type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                </li>\n            </ul>\n         </div>\n         <span class=\"label label-info\" *ngIf=\"objStep.configuration?.foot_note != ''\">{{objStep.configuration.foot_note}} </span>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], ListButtonsComponent);
    return ListButtonsComponent;
}());
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,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O0lBQ1I7UUFBQyxZQUFLLEVBQUU7OytEQUFBO0lBRVI7UUFBQyxhQUFNLEVBQUU7O3dEQUFBO0lBbkNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxxeENBd0JiO1NBQ0EsQ0FBQzs7NEJBQUE7SUFtRUYsMkJBQUM7QUFBRCxDQWpFQSxBQWlFQyxJQUFBO0FBakVZLDRCQUFvQix1QkFpRWhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9saXN0QnV0dG9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdsaXN0LWJ1dHRvbnMnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiICpuZ0lmPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlICE9ICcnXCI+XG4gICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZVwiPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGxpc3RPZkVsZW1lbnRzXCI+LS0+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgPlxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCAhPSB2YWxldXJMaXN0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW5mb1wiICpuZ0lmPVwib2JqU3RlcC5jb25maWd1cmF0aW9uPy5mb290X25vdGUgIT0gJydcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGV9fSA8L3NwYW4+XG4gICAgIDwvZGl2PlxuYFxufSlcblxuZXhwb3J0IGNsYXNzIExpc3RCdXR0b25zQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXG5cbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICBjdXJyZW50TGlzdDtcbiAgICBkaXNwbGF5ID0gZmFsc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlXG4gICAgKVxuICAgIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0U3RhcnRcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5zdGVwSWR4IFwiICsgdGhpcy5zdGVwSWR4KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcbiAgICAgICAgaWYgKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0udmFsdWU7XG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0ua2V5O1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZUNvbmRpdGlvbjogXCIgKyB2YWx1ZUNvbmRpdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKGtleUNvbmRpdGlvbikpO1xuXG4gICAgICAgICAgICBsZXQgdG1wU3RlcElkeCA9IHRoaXMuc3RlcElkeCAtIDE7IC8vIHN0ZXBJZHggdGVtcG9yYWlyZVxuICAgICAgICAgICAgLyogTE9PSyBGT1IgVkFMVUUgU0VMRUNURUQgSU5UTyBGT1JNIFNFUlZJQ0UgKCoqYXJyYXlTdGVwcyoqKVxuICAgICAgICAgICAgICAgIExBIENPTkRJVElPTiBBIFRFU1RFUiBFVCBKRSBMQSBDT01QQVJFIEFWRUMgTEEgVkFMRVVSIERFIExBIFNURVAgQ09VUkFOVEVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSAhPSAndW5kZWZpbmVkJyl7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3RPZkVsZW1lbnRzKTtcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWVTZWxlY3RlZCk7XG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMubmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIG9uQ2hvb3NlVmFsKCRldmVudCl7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRldmVudCk7XG5cbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkIDogJGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcbiAgICAgICAgfSlcblxuICAgIH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
