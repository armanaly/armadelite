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
        console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
        console.log(this.display);
        for (var _i = 0, _a = this.listOfElements; _i < _a.length; _i++) {
            var datas = _a[_i];
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
                console.log(this.currentList);
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
            template: "\n     <div *ngIf=\"display\">\n         <div class=\"panel-heading panel-heading-custom\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel}}</p> </div>\n         <div class=\"panel-body\" >\n            <div class=\"jumbotron\" *ngIf=\"objStep.configuration.header_note && objStep.configuration.header_note != ''\">\n                <p [innerHTML] = \"objStep.configuration.header_note\"></p>\n            </div>\n            <!--<div class=\"col-md-3\" *ngFor=\"let valeurList of listOfElements\">-->\n\n            <ul class=\"items\" >\n                <li *ngFor=\"let valeurList of currentList\">\n                     <!--data-toggle=\"tooltip\" title=\" \"-->\n                    <button *ngIf=\"valueSelected != valeurList\" \n                        class=\"brown_button\"\n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                    <button *ngIf=\"valueSelected == valeurList\" \n                        data-toggle=\"tooltip\" title=\" text\"\n                        class=\"brown_button\" \n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                </li>\n            </ul>\n         </div>\n         <div class=\"panel-heading panel-heading-custom\" *ngIf=\"objStep.configuration.foot_note && objStep.configuration.foot_note != ''\"> <p [innerHTML] = \"objStep.configuration.foot_note\"></p> </div>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService])
    ], ListButtonsComponent);
    return ListButtonsComponent;
}());
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,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QyxLQUFLO1lBQ25DLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFFTixDQUFDOztJQWpFRDtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7Z0VBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7K0RBQUE7SUFFUjtRQUFDLGFBQU0sRUFBRTs7d0RBQUE7SUF6Q2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGNBQWM7WUFDeEIsUUFBUSxFQUFFLHNuREE4QmI7U0FDQSxDQUFDOzs0QkFBQTtJQXFFRiwyQkFBQztBQUFELENBbkVBLEFBbUVDLElBQUE7QUFuRVksNEJBQW9CLHVCQW1FaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xpc3RCdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlzdC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiAqbmdJZj1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGUgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGVcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgbGlzdE9mRWxlbWVudHNcIj4tLT5cclxuXHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS1kYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiBcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJicm93bl9idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJicm93bl9idXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgKm5nSWY9XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgIT0gJydcIj4gPHAgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVcIj48L3A+IDwvZGl2PlxyXG4gICAgIDwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdEJ1dHRvbnNDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xyXG4gICAgQElucHV0KCkgc3RlcElkeDtcclxuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxyXG5cclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG4gICAgY3VycmVudExpc3Q7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0U3RhcnRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0ZXBJZHggXCIgKyB0aGlzLnN0ZXBJZHgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlDb25kaXRpb246IFwiICsga2V5Q29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoa2V5Q29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG1wU3RlcElkeCA9IHRoaXMuc3RlcElkeCAtIDE7IC8vIHN0ZXBJZHggdGVtcG9yYWlyZVxyXG4gICAgICAgICAgICAvKiBMT09LIEZPUiBWQUxVRSBTRUxFQ1RFRCBJTlRPIEZPUk0gU0VSVklDRSAoKiphcnJheVN0ZXBzKiopXHJcbiAgICAgICAgICAgICAgICBMQSBDT05ESVRJT04gQSBURVNURVIgRVQgSkUgTEEgQ09NUEFSRSBBVkVDIExBIFZBTEVVUiBERSBMQSBTVEVQIENPVVJBTlRFXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5jb25zb2xlLmxvZygnT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PJylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXkpXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZhbHVlU2VsZWN0ZWQpO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiAkZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
