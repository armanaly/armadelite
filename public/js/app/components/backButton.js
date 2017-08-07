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

//# sourceMappingURL=data:application/json;base64,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QTtJQUNSO1FBQUMsWUFBSyxFQUFFOzt1REFBQTtJQUNSO1FBQUMsYUFBTSxFQUFFOzt1REFBQTtJQWJiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSwrTEFJYjtTQUNBLENBQUM7OzJCQUFBO0lBMkVELDBCQUFDO0FBQUQsQ0F4RUQsQUF3RUUsSUFBQTtBQXhFVywyQkFBbUIsc0JBd0U5QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFja0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJldmlvdXMtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwidGctYm40b1wiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID4gUkVUT1VSIDwvaT48L2J1dHRvbj5cclxuICAgICAgICA8L25hdj5cclxuYFxyXG59KVxyXG5cclxuLy8gVVNFIFRPIEdPIEJBQ0sgVE8gUFJFVklPVVMgU1RFUCBJTiBERUNJU0lPTiBXT1JLRkxPV1xyXG5leHBvcnQgY2xhc3MgQmFja0J1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpZHhTdGVwT2JqO1xyXG4gICAgQElucHV0KCkgc3RlcElkO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKXt9XHJcbiAgICBvbkNsaWNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIGxldCBzdGVwSW5kZXggPSB0aGlzLmlkeFN0ZXBPYmo7XHJcbiAgICAgICAgbGV0IGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaWR4U3RlcE9ial0ubmFtZTtcclxuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaWR4U3RlcE9ial1ba2V5TmFtZV0gPSAnJztcclxuICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5zdGVwX2lkKTtcclxuICAgICAgICAvLyBDSEVDSyBJRiBUSEUgUFJFVklPVVMgU1RFUCBIQVMgVEhFIFNBTUUgU1RFUF9JRFxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQgPT0gdGhpcy5zdGVwSWQpe1xyXG4gICAgICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQgIT0gdGhpcy5zdGVwSWQpe1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBTSSBJTCBZIEEgREVTIENPTkRJVElPTlMgREVGSU5JRVMgQSBMJ0VUQVBFIFBSRUNFREVOVEUgQUxPUlMgT04gVkVSSUZJRSBRVUVMTEUgRVRBUEUgQ09SUkVTUE9ORCBBIExBIENPTkRJVElPTiBTSU5PTiBPTiBSRUNVTEVcclxuICAgICAgICAvLyBEQU5TIExFIFRBQkxFQVUgREVTIEVUQVBFU1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0pO1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmIgb2YgY29uZGl0aW9uOlwiICsgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlDb25kaXRpb246IFwiICsga2V5Q29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpXHJcblxyXG4gICAgICAgICAgICB3aGlsZSAodHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgLy8gICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgIC8vICAgICB3aGlsZSAodHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIC8vICAgICAvL3doaWxlICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3N0ZXBJbmRleF1ba2V5Q29uZGl0aW9uXSAhPSB2YWx1ZUNvbmRpdGlvbil7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImNvbmRpdGlvbiBwYXMgcmVtcGxpZSwgamUgcmVjdWxlIGRlIDEgaW5kaWNlIGRhbnMgbGUgdGFibGVhdS4gSW5kaWNlOiBcIiArIHRoaXMuaWR4U3RlcE9iaik7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlkeFN0ZXBPYmotLTtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUNvbmRpdGlvbik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1swXVtrZXlDb25kaXRpb25dKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gcmVtcGxpZSwgamUgcmVzdGUgc3VyIGwgaW5kaWNlOiAnICsgdGhpcy5pZHhTdGVwT2JqKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB3aGlsZSAoIHR5cGVvZiB0aGlzLmN1cnJlbnRTdGVwW2lkeFN0ZXBPYmpdID09ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0ZXBJZC0tO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoeyBuZXdJZHhTdGVwT2JqOiB0aGlzLmlkeFN0ZXBPYmp9KTtcclxufX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
