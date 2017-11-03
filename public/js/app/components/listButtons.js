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
        console.log(this._stepService);
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
            template: "\n     <div *ngIf=\"display\">\n         <div *ngIf=\"_stepService.language == 'en'\" class=\"panel-heading panel-heading-custom\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel}}</p> </div>\n         <div *ngIf=\"_stepService.language == 'es'\" class=\"panel-heading panel-heading-custom\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel_es}}</p> </div>\n         <div class=\"panel-body\" >\n            <div class=\"jumbotron\" *ngIf=\"objStep.configuration.header_note && objStep.configuration.header_note != ''\">\n                <p [innerHTML] = \"objStep.configuration.header_note\"></p>\n            </div>\n            <!--<div class=\"col-md-3\" *ngFor=\"let valeurList of listOfElements\">-->\n\n            <ul class=\"items\" >\n                <li *ngFor=\"let valeurList of currentList\">\n                     <!--data-toggle=\"tooltip\" title=\" \"-->\n                    <button *ngIf=\"valueSelected != valeurList\" \n                        class=\"brown_button\"\n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                    <button *ngIf=\"valueSelected == valeurList\" \n                        data-toggle=\"tooltip\" title=\" text\"\n                        class=\"brown_button\" \n                        type=\"button\" \n                        (click)=\"onChooseVal($event)\"\n                        value=\"{{valeurList}}\">{{valeurList}}\n                    </button>\n                </li>\n            </ul>\n         </div>\n         <div class=\"panel-heading panel-heading-custom\" *ngIf=\"objStep.configuration.foot_note && objStep.configuration.foot_note != ''\"> <p [innerHTML] = \"objStep.configuration.foot_note\"></p> </div>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [form_service_1.FormService, step_service_1.StepService])
    ], ListButtonsComponent);
    return ListButtonsComponent;
}());
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,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QztBQUFELENBbkZBLEFBbUZDLElBQUE7QUFuRlksNEJBQW9CLHVCQW1GaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xpc3RCdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlzdC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiICpuZ0lmPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAhPSAnJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZVwiPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPi0tPlxyXG5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLWRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJyb3duX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJyb3duX2J1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIiAqbmdJZj1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAhPSAnJ1wiPiA8cCBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZVwiPjwvcD4gPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0QnV0dG9uc0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4O1xyXG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXHJcblxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICBjdXJyZW50TGlzdDtcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZVxyXG4gICAgKVxyXG4gICAge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0U3RhcnRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnN0ZXBJZHggXCIgKyB0aGlzLnN0ZXBJZHgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVDb25kaXRpb246IFwiICsgdmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZChrZXlDb25kaXRpb24pKTtcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgdG1wU3RlcElkeCA9IHRoaXMuc3RlcElkeCAtIDE7IC8vIHN0ZXBJZHggdGVtcG9yYWlyZVxyXG4gICAgICAgICAgICAvKiBMT09LIEZPUiBWQUxVRSBTRUxFQ1RFRCBJTlRPIEZPUk0gU0VSVklDRSAoKiphcnJheVN0ZXBzKiopXHJcbiAgICAgICAgICAgICAgICBMQSBDT05ESVRJT04gQSBURVNURVIgRVQgSkUgTEEgQ09NUEFSRSBBVkVDIExBIFZBTEVVUiBERSBMQSBTVEVQIENPVVJBTlRFXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgLy8gU0kgSUwgWSBBIFVORSAyZW1lIENPTkRJVElPTlxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1sxXSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uMiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzFdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24yID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMV0ua2V5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uMl0gPT09IHZhbHVlQ29uZGl0aW9uMikgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5jb25zb2xlLmxvZygnT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PJylcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXkpXHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZhbHVlU2VsZWN0ZWQpO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRMaXN0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiAkZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
