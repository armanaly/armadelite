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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const form_service_1 = require("../Engine/form.service");
const step_service_1 = require("../Engine/step.service");
let BackButtonComponent = class BackButtonComponent {
    constructor(_stepService, _formService) {
        this._stepService = _stepService;
        this._formService = _formService;
        this.change = new core_1.EventEmitter();
    }
    onClick() {
        let stepIndex = this.idxStepObj;
        let keyName = this._stepService.steps[this.idxStepObj].name;
        this.idxStepObj--;
        while (this._stepService.steps[this.idxStepObj].step_id == this.stepId) {
            this.idxStepObj--;
            if (this._stepService.steps[this.idxStepObj].step_id != this.stepId) {
                break;
            }
        }
        if (this._stepService.steps[this.idxStepObj].conditions.length > 0) {
            let conditionFalse = true;
            while (conditionFalse) {
                let keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
                let valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
                if (this._stepService.steps[this.idxStepObj].conditions.length == 2) {
                    let keyCondition2 = this._stepService.steps[this.idxStepObj].conditions[1].key;
                    let valueCondition2 = this._stepService.steps[this.idxStepObj].conditions[1].value;
                    let checkCond1 = typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) !== 'undefined';
                    let checkCond2 = typeof (this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2)) !== 'undefined';
                    if (checkCond1 && checkCond2) {
                        conditionFalse = false;
                        break;
                    }
                    else {
                        this.idxStepObj--;
                    }
                }
                else {
                    if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) === 'undefined') {
                        this.idxStepObj--;
                    }
                    else {
                        conditionFalse = false;
                        break;
                    }
                }
            }
        }
        this.change.emit({ newIdxStepObj: this.idxStepObj });
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BackButtonComponent.prototype, "idxStepObj", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BackButtonComponent.prototype, "stepId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BackButtonComponent.prototype, "change", void 0);
BackButtonComponent = __decorate([
    core_1.Component({
        selector: 'previous-page',
        template: `
        <div class="form-navArrow">
            <button (click)="onClick()" class="brown_button" ><i class="glyphicon glyphicon-triangle-left" >  </i></button>
        </div>
`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService, form_service_1.FormService])
], BackButtonComponent);
exports.BackButtonComponent = BackButtonComponent;

//# sourceMappingURL=data:application/json;base64,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QzdCLENBQUM7d0JBRUcsY0FBYyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsS0FBSyxDQUFDO29CQUNWLENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBTUYsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxjQUFjLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3RHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixjQUFjLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQUMsQ0FBQTtBQXpGTztJQUFSLFlBQUssRUFBRTs7dURBQVk7QUFDWDtJQUFSLFlBQUssRUFBRTs7bURBQVE7QUFDTjtJQUFULGFBQU0sRUFBRTs7bURBQTZCO0FBSDdCLG1CQUFtQjtJQVYvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFOzs7O0NBSWI7S0FDQSxDQUFDO3FDQU9vQywwQkFBVyxFQUF3QiwwQkFBVztHQUp2RSxtQkFBbUIsQ0EwRjFCO0FBMUZPLGtEQUFtQiIsImZpbGUiOiJmb3JtL2JhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJldmlvdXMtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKGNsaWNrKT1cIm9uQ2xpY2soKVwiIGNsYXNzPVwiYnJvd25fYnV0dG9uXCIgPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgPiAgPC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG4vLyBVU0UgVE8gR08gQkFDSyBUTyBQUkVWSU9VUyBTVEVQIElOIERFQ0lTSU9OIFdPUktGTE9XXHJcbmV4cG9ydCBjbGFzcyBCYWNrQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGlkeFN0ZXBPYmo7XHJcbiAgICBASW5wdXQoKSBzdGVwSWQ7XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2Upe31cclxuICAgIG9uQ2xpY2soKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgbGV0IHN0ZXBJbmRleCA9IHRoaXMuaWR4U3RlcE9iajtcclxuICAgICAgICBsZXQga2V5TmFtZSA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0ubmFtZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXlOYW1lKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmlkeFN0ZXBPYmopO1xyXG4gICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1t0aGlzLmlkeFN0ZXBPYmpdW2tleU5hbWVdID0gJyc7XHJcbiAgICAgICAgdGhpcy5pZHhTdGVwT2JqIC0tO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uc3RlcF9pZCk7XHJcbiAgICAgICAgLy8gQ0hFQ0sgSUYgVEhFIFBSRVZJT1VTIFNURVAgSEFTIFRIRSBTQU1FIFNURVBfSURcclxuICAgICAgICB3aGlsZSAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5zdGVwX2lkID09IHRoaXMuc3RlcElkKXtcclxuICAgICAgICAgICAgdGhpcy5pZHhTdGVwT2JqIC0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5zdGVwX2lkICE9IHRoaXMuc3RlcElkKXtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU0kgSUwgWSBBIERFUyBDT05ESVRJT05TIERFRklOSUVTIEEgTCdFVEFQRSBQUkVDRURFTlRFIEFMT1JTIE9OIFZFUklGSUUgUVVFTExFIEVUQVBFIENPUlJFU1BPTkQgQSBMQSBDT05ESVRJT04gU0lOT04gT04gUkVDVUxFXHJcbiAgICAgICAgLy8gREFOUyBMRSBUQUJMRUFVIERFUyBFVEFQRVNcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGNvbmRpdGlvbkZhbHNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgd2hpbGUgKGNvbmRpdGlvbkZhbHNlKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJuYiBvZiBjb25kaXRpb246XCIgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zLmxlbmd0aCA9PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbjIgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMV0ua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbjIgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMV0udmFsdWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWVDb25kaXRpb246IFwiICsgdmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5Q29uZGl0aW9uOiBcIiArIGtleUNvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uMjogXCIgKyB2YWx1ZUNvbmRpdGlvbjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5Q29uZGl0aW9uMjogXCIgKyBrZXlDb25kaXRpb24yKTtcclxuICAgICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb24yXSA9PT0gdmFsdWVDb25kaXRpb24yKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uMl0gPT09IHZhbHVlQ29uZGl0aW9uMikpICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uMl0gPT09IHZhbHVlQ29uZGl0aW9uMikpICE9PSAndW5kZWZpbmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0NvbmQxID0gdHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGVja0NvbmQyID0gdHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbjJdID09PSB2YWx1ZUNvbmRpdGlvbjIpKSAhPT0gJ3VuZGVmaW5lZCc7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tDb25kMSAmJiBjaGVja0NvbmQyKVxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIyIGNvbmRpdGlvbnMgcmVtcGxpZXNcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uRmFsc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMiBjb25kaXRpb25zIHBhcyByZW1wbGllXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iai0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWVDb25kaXRpb246IFwiICsgdmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwia2V5Q29uZGl0aW9uOiBcIiArIGtleUNvbmRpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSkgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iai0tO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uRmFsc2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4vLyBjb25zb2xlLmxvZyh0aGlzLmlkeFN0ZXBPYmopO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgbmV3SWR4U3RlcE9iajogdGhpcy5pZHhTdGVwT2JqfSk7XHJcbiAgICB9fSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
