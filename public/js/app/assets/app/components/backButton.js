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
const core_1 = require('@angular/core');
const form_service_1 = require("./form.service");
const step_service_1 = require("../Engine/step.service");
let BackButtonComponent = class BackButtonComponent {
    constructor(_stepService, _formService) {
        this._stepService = _stepService;
        this._formService = _formService;
        this.change = new core_1.EventEmitter();
    }
    onClick() {
        console.log(this.stepId);
        let stepIndex = this.idxStepObj;
        this.idxStepObj--;
        console.log(this._stepService.steps[this.idxStepObj].step_id);
        // CHECK IF THE PREVIOUS STEP HAS THE SAME STEP_ID
        while (this._stepService.steps[this.idxStepObj].step_id == this.stepId) {
            this.idxStepObj--;
            console.log(this._stepService.steps[this.idxStepObj]);
            break;
        }
        // SI IL Y A DES CONDITIONS DEFINIES A L'ETAPE PRECEDENTE ALORS ON VERIFIE QUELLE ETAPE CORRESPOND A LA CONDITION SINON ON RECULE
        // DANS LE TABLEAU DES ETAPES
        console.log(this._stepService.steps[this.idxStepObj]);
        if (this._stepService.steps[this.idxStepObj].conditions.length > 0) {
            console.log("nb of condition:" + this._stepService.steps[this.idxStepObj].conditions.length);
            let keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
            let valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
            console.log("valueCondition: " + valueCondition);
            console.log("keyCondition: " + keyCondition);
            console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition));
            while (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) === 'undefined') {
                this.idxStepObj--;
                keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
                valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
            }
            console.log(this.idxStepObj);
        }
        console.log(this.idxStepObj);
        this.change.emit({ newIdxStepObj: this.idxStepObj });
    }
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
        template: `
        <nav class="form-navArrow">
            <button ><i class="glyphicon glyphicon-triangle-left" (click)="onClick()"> </i></button>
        </nav>
`
    }), 
    __metadata('design:paramtypes', [step_service_1.StepService, form_service_1.FormService])
], BackButtonComponent);
exports.BackButtonComponent = BackButtonComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsK0JBQTBCLHdCQUUxQixDQUFDLENBRmlEO0FBWWxEO0lBSUksWUFBb0IsWUFBeUIsRUFBVSxZQUF5QjtRQUE1RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRHRFLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUM0QyxDQUFDO0lBQ25GLE9BQU87UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRWhDLElBQUksQ0FBQyxVQUFVLEVBQUcsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxrREFBa0Q7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsVUFBVSxFQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUM7UUFDVixDQUFDO1FBQ0QsaUlBQWlJO1FBQ2pJLDZCQUE2QjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNuRSxDQUFDO1lBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzlFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUE7WUFFdkYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDekcsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO2dCQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzFFLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUVsRixDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUF3QnJCLENBQUM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQUEsQ0FBQztBQTlERTtJQUFDLFlBQUssRUFBRTs7dURBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7bURBQUE7QUFDUjtJQUFDLGFBQU0sRUFBRTs7bURBQUE7QUFiYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Q0FJYjtLQUNBLENBQUM7O3VCQUFBO0FBR1csMkJBQW1CLHNCQStEOUIsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL2NvbXBvbmVudHMvYmFja0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJldmlvdXMtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPiA8L2k+PC9idXR0b24+XHJcbiAgICAgICAgPC9uYXY+XHJcbmBcclxufSlcclxuXHJcbi8vIFVTRSBUTyBHTyBCQUNLIFRPIFBSRVZJT1VTIFNURVAgSU4gREVDSVNJT04gV09SS0ZMT1dcclxuZXhwb3J0IGNsYXNzIEJhY2tCdXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaWR4U3RlcE9iajtcclxuICAgIEBJbnB1dCgpIHN0ZXBJZDtcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UsIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSl7fVxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICBsZXQgc3RlcEluZGV4ID0gdGhpcy5pZHhTdGVwT2JqO1xyXG5cclxuICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5zdGVwX2lkKTtcclxuICAgICAgICAvLyBDSEVDSyBJRiBUSEUgUFJFVklPVVMgU1RFUCBIQVMgVEhFIFNBTUUgU1RFUF9JRFxyXG4gICAgICAgIHdoaWxlICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQgPT0gdGhpcy5zdGVwSWQpe1xyXG4gICAgICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU0kgSUwgWSBBIERFUyBDT05ESVRJT05TIERFRklOSUVTIEEgTCdFVEFQRSBQUkVDRURFTlRFIEFMT1JTIE9OIFZFUklGSUUgUVVFTExFIEVUQVBFIENPUlJFU1BPTkQgQSBMQSBDT05ESVRJT04gU0lOT04gT04gUkVDVUxFXHJcbiAgICAgICAgLy8gREFOUyBMRSBUQUJMRUFVIERFUyBFVEFQRVNcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdKTtcclxuICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zLmxlbmd0aCA+IDApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5iIG9mIGNvbmRpdGlvbjpcIiArIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZUNvbmRpdGlvbjogXCIgKyB2YWx1ZUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5Q29uZGl0aW9uOiBcIiArIGtleUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKVxyXG5cclxuICAgICAgICAgICAgd2hpbGUgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZHhTdGVwT2JqIC0tO1xyXG4gICAgICAgICAgICAgICAga2V5Q29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAgICAgICAgIHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgIC8vIHtcclxuICAgICAgICAvLyAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgLy8gICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coKVxyXG4gICAgICAgIC8vICAgICB3aGlsZSAodHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIC8vICAgICAvL3doaWxlICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzW3N0ZXBJbmRleF1ba2V5Q29uZGl0aW9uXSAhPSB2YWx1ZUNvbmRpdGlvbil7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImNvbmRpdGlvbiBwYXMgcmVtcGxpZSwgamUgcmVjdWxlIGRlIDEgaW5kaWNlIGRhbnMgbGUgdGFibGVhdS4gSW5kaWNlOiBcIiArIHRoaXMuaWR4U3RlcE9iaik7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmlkeFN0ZXBPYmotLTtcclxuICAgICAgICAvLyAgICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUNvbmRpdGlvbik7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1swXVtrZXlDb25kaXRpb25dKTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdjb25kaXRpb24gcmVtcGxpZSwgamUgcmVzdGUgc3VyIGwgaW5kaWNlOiAnICsgdGhpcy5pZHhTdGVwT2JqKVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyB3aGlsZSAoIHR5cGVvZiB0aGlzLmN1cnJlbnRTdGVwW2lkeFN0ZXBPYmpdID09ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0ZXBJZC0tO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQoeyBuZXdJZHhTdGVwT2JqOiB0aGlzLmlkeFN0ZXBPYmp9KTtcclxufX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
