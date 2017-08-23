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
var BackButtonComponent = (function () {
    function BackButtonComponent(_stepService, _formService) {
        this._stepService = _stepService;
        this._formService = _formService;
        this.change = new core_1.EventEmitter();
    }
    BackButtonComponent.prototype.onClick = function () {
        console.log(this.stepId);
        var stepIndex = this.idxStepObj;
        var keyName = this._stepService.step[this.idxStepObj].name;
        this._formService.arraySteps[this.idxStepObj][keyName] = '';
        this.idxStepObj--;
        console.log(this._stepService.steps[this.idxStepObj].step_id);
        while (this._stepService.steps[this.idxStepObj].step_id == this.stepId) {
            this.idxStepObj--;
            if (this._stepService.steps[this.idxStepObj].step_id != this.stepId) {
                break;
            }
            console.log(this._stepService.steps[this.idxStepObj]);
        }
        console.log(this._stepService.steps[this.idxStepObj]);
        if (this._stepService.steps[this.idxStepObj].conditions.length > 0) {
            console.log("nb of condition:" + this._stepService.steps[this.idxStepObj].conditions.length);
            var keyCondition_1 = this._stepService.steps[this.idxStepObj].conditions[0].key;
            var valueCondition_1 = this._stepService.steps[this.idxStepObj].conditions[0].value;
            console.log("valueCondition: " + valueCondition_1);
            console.log("keyCondition: " + keyCondition_1);
            console.log(this._formService.arraySteps.find(function (x) { return x[keyCondition_1] === valueCondition_1; }));
            while (typeof (this._formService.arraySteps.find(function (x) { return x[keyCondition_1] === valueCondition_1; })) === 'undefined') {
                this.idxStepObj--;
                if (this._stepService.steps[this.idxStepObj].conditions.length > 0) {
                    keyCondition_1 = this._stepService.steps[this.idxStepObj].conditions[0].key;
                    valueCondition_1 = this._stepService.steps[this.idxStepObj].conditions[0].value;
                }
                else {
                    break;
                }
            }
            console.log(this.idxStepObj);
        }
        console.log(this.idxStepObj);
        this.change.emit({ newIdxStepObj: this.idxStepObj });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BackButtonComponent.prototype, "idxStepObj", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BackButtonComponent.prototype, "stepId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BackButtonComponent.prototype, "change", void 0);
    BackButtonComponent = __decorate([
        core_1.Component({
            selector: 'previous-page',
            template: "\n        <nav class=\"form-navArrow\">\n            <button (click)=\"onClick()\" class=\"tg-bn4o\" ><i class=\"glyphicon glyphicon-triangle-left\" > RETOUR </i></button>\n        </nav>\n"
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService, form_service_1.FormService])
    ], BackButtonComponent);
    return BackButtonComponent;
}());
exports.BackButtonComponent = BackButtonComponent;

//# sourceMappingURL=data:application/json;base64,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O0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBYmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLCtMQUliO1NBQ0EsQ0FBQzs7MkJBQUE7SUFzREQsMEJBQUM7QUFBRCxDQW5ERCxBQW1ERSxJQUFBO0FBbkRXLDJCQUFtQixzQkFtRDlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWNrQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCJcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcmV2aW91cy1wYWdlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwib25DbGljaygpXCIgY2xhc3M9XCJ0Zy1ibjRvXCIgPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPiBSRVRPVVIgPC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmF2PlxyXG5gXHJcbn0pXHJcblxyXG4vLyBVU0UgVE8gR08gQkFDSyBUTyBQUkVWSU9VUyBTVEVQIElOIERFQ0lTSU9OIFdPUktGTE9XXHJcbmV4cG9ydCBjbGFzcyBCYWNrQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGlkeFN0ZXBPYmo7XHJcbiAgICBASW5wdXQoKSBzdGVwSWQ7XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2Upe31cclxuICAgIG9uQ2xpY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgbGV0IHN0ZXBJbmRleCA9IHRoaXMuaWR4U3RlcE9iajtcclxuICAgICAgICBsZXQga2V5TmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBbdGhpcy5pZHhTdGVwT2JqXS5uYW1lO1xyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pZHhTdGVwT2JqXVtrZXlOYW1lXSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQpO1xyXG4gICAgICAgIC8vIENIRUNLIElGIFRIRSBQUkVWSU9VUyBTVEVQIEhBUyBUSEUgU0FNRSBTVEVQX0lEXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uc3RlcF9pZCA9PSB0aGlzLnN0ZXBJZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uc3RlcF9pZCAhPSB0aGlzLnN0ZXBJZCl7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNJIElMIFkgQSBERVMgQ09ORElUSU9OUyBERUZJTklFUyBBIEwnRVRBUEUgUFJFQ0VERU5URSBBTE9SUyBPTiBWRVJJRklFIFFVRUxMRSBFVEFQRSBDT1JSRVNQT05EIEEgTEEgQ09ORElUSU9OIFNJTk9OIE9OIFJFQ1VMRVxyXG4gICAgICAgIC8vIERBTlMgTEUgVEFCTEVBVSBERVMgRVRBUEVTXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYiBvZiBjb25kaXRpb246XCIgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVDb25kaXRpb246IFwiICsgdmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSlcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5jb25zb2xlLmxvZyh0aGlzLmlkeFN0ZXBPYmopO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoeyBuZXdJZHhTdGVwT2JqOiB0aGlzLmlkeFN0ZXBPYmp9KTtcclxufX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
