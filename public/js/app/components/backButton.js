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
        console.log(this._formService.arraySteps);
        console.log(keyName);
        console.log(this.idxStepObj);
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
            template: "\n        <nav class=\"form-navArrow\">\n            <button (click)=\"onClick()\" class=\"btn btn-default btn-lg\" ><i class=\"glyphicon glyphicon-triangle-left\" >  </i></button>\n        </nav>\n"
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService, form_service_1.FormService])
    ], BackButtonComponent);
    return BackButtonComponent;
}());
exports.BackButtonComponent = BackButtonComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsNkJBQTBCLHdCQUUxQixDQUFDLENBRmlEO0FBWWxEO0lBSUksNkJBQW9CLFlBQXlCLEVBQVUsWUFBeUI7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUR0RSxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFDNEMsQ0FBQztJQUNuRixxQ0FBTyxHQUFQO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRTlELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FB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QUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFyREc7UUFBQyxZQUFLLEVBQUU7OzJEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3VEQUFBO0lBYmI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLHdNQUliO1NBQ0EsQ0FBQzs7MkJBQUE7SUF5REQsMEJBQUM7QUFBRCxDQXRERCxBQXNERSxJQUFBO0FBdERXLDJCQUFtQixzQkFzRDlCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9iYWNrQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIlxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ByZXZpb3VzLXBhZ2UnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBidG4tbGdcIiA+PGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLXRyaWFuZ2xlLWxlZnRcIiA+ICA8L2k+PC9idXR0b24+XG4gICAgICAgIDwvbmF2PlxuYFxufSlcblxuLy8gVVNFIFRPIEdPIEJBQ0sgVE8gUFJFVklPVVMgU1RFUCBJTiBERUNJU0lPTiBXT1JLRkxPV1xuZXhwb3J0IGNsYXNzIEJhY2tCdXR0b25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIGlkeFN0ZXBPYmo7XG4gICAgQElucHV0KCkgc3RlcElkO1xuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2Upe31cbiAgICBvbkNsaWNrKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcbiAgICAgICAgbGV0IHN0ZXBJbmRleCA9IHRoaXMuaWR4U3RlcE9iajtcbiAgICAgICAgbGV0IGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwW3RoaXMuaWR4U3RlcE9ial0ubmFtZTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGtleU5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkeFN0ZXBPYmopO1xuICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3RoaXMuaWR4U3RlcE9ial1ba2V5TmFtZV0gPSAnJztcbiAgICAgICAgdGhpcy5pZHhTdGVwT2JqIC0tO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQpO1xuICAgICAgICAvLyBDSEVDSyBJRiBUSEUgUFJFVklPVVMgU1RFUCBIQVMgVEhFIFNBTUUgU1RFUF9JRFxuICAgICAgICB3aGlsZSAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5zdGVwX2lkID09IHRoaXMuc3RlcElkKXtcbiAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQgIT0gdGhpcy5zdGVwSWQpe1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXSk7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBTSSBJTCBZIEEgREVTIENPTkRJVElPTlMgREVGSU5JRVMgQSBMJ0VUQVBFIFBSRUNFREVOVEUgQUxPUlMgT04gVkVSSUZJRSBRVUVMTEUgRVRBUEUgQ09SUkVTUE9ORCBBIExBIENPTkRJVElPTiBTSU5PTiBPTiBSRUNVTEVcbiAgICAgICAgLy8gREFOUyBMRSBUQUJMRUFVIERFUyBFVEFQRVNcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXSk7XG4gICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMClcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYiBvZiBjb25kaXRpb246XCIgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xuICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5Q29uZGl0aW9uOiBcIiArIGtleUNvbmRpdGlvbik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSlcblxuICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgICAgIGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcblxuXG4gICAgICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmlkeFN0ZXBPYmopO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoeyBuZXdJZHhTdGVwT2JqOiB0aGlzLmlkeFN0ZXBPYmp9KTtcbn19Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
