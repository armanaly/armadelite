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
const form_service_1 = require("./form.service");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUNwRSxpREFBMkM7QUFDM0MseURBQWtEO0FBWWxELElBQWEsbUJBQW1CLEdBQWhDO0lBSUksWUFBb0IsWUFBeUIsRUFBVSxZQUF5QjtRQUE1RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRHRFLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUM0QyxDQUFDO0lBQ25GLE9BQU87UUFFSCxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ2hDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFLNUQsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO1FBR25CLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO1lBQ25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7Z0JBQ2pFLEtBQUssQ0FBQztZQUNWLENBQUM7UUFHTCxDQUFDO1FBS0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQ25FLENBQUM7WUFDRyxJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUM7WUFDMUIsT0FBTyxjQUFjLEVBQUMsQ0FBQztnQkFDbkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzlFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO2dCQUdsRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsRSxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztvQkFDL0UsSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7b0JBa0JuRixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDO29CQUNySCxJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxLQUFLLGVBQWUsQ0FBQyxDQUFDLEtBQUssV0FBVyxDQUFDO29CQUd2SCxFQUFFLENBQUMsQ0FBQyxVQUFVLElBQUksVUFBVSxDQUFDLENBQzdCLENBQUM7d0JBRUcsY0FBYyxHQUFHLEtBQUssQ0FBQzt3QkFDdkIsS0FBSyxDQUFDO29CQUNWLENBQUM7b0JBQ0QsSUFBSSxDQUFBLENBQUM7d0JBRUQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUN0QixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBTUYsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxjQUFjLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7d0JBQ3RHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDdEIsQ0FBQztvQkFDRCxJQUFJLENBQUMsQ0FBQzt3QkFDRixjQUFjLEdBQUcsS0FBSyxDQUFDO3dCQUN2QixLQUFLLENBQUM7b0JBQ1YsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUM7UUFHRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQUMsQ0FBQTtBQXpGTztJQUFSLFlBQUssRUFBRTs7dURBQVk7QUFDWDtJQUFSLFlBQUssRUFBRTs7bURBQVE7QUFDTjtJQUFULGFBQU0sRUFBRTs7bURBQTZCO0FBSDdCLG1CQUFtQjtJQVYvQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFOzs7O0NBSWI7S0FDQSxDQUFDO3FDQU9vQywwQkFBVyxFQUF3QiwwQkFBVztHQUp2RSxtQkFBbUIsQ0EwRjFCO0FBMUZPLGtEQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL2JhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ByZXZpb3VzLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljayk9XCJvbkNsaWNrKClcIiBjbGFzcz1cImJyb3duX2J1dHRvblwiID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiID4gIDwvaT48L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuLy8gVVNFIFRPIEdPIEJBQ0sgVE8gUFJFVklPVVMgU1RFUCBJTiBERUNJU0lPTiBXT1JLRkxPV1xyXG5leHBvcnQgY2xhc3MgQmFja0J1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpZHhTdGVwT2JqO1xyXG4gICAgQElucHV0KCkgc3RlcElkO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKXt9XHJcbiAgICBvbkNsaWNrKCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIGxldCBzdGVwSW5kZXggPSB0aGlzLmlkeFN0ZXBPYmo7XHJcbiAgICAgICAgbGV0IGtleU5hbWUgPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLm5hbWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coa2V5TmFtZSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuICAgICAgICAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbdGhpcy5pZHhTdGVwT2JqXVtrZXlOYW1lXSA9ICcnO1xyXG4gICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLnN0ZXBfaWQpO1xyXG4gICAgICAgIC8vIENIRUNLIElGIFRIRSBQUkVWSU9VUyBTVEVQIEhBUyBUSEUgU0FNRSBTVEVQX0lEXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uc3RlcF9pZCA9PSB0aGlzLnN0ZXBJZCl7XHJcbiAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uc3RlcF9pZCAhPSB0aGlzLnN0ZXBJZCl7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNJIElMIFkgQSBERVMgQ09ORElUSU9OUyBERUZJTklFUyBBIEwnRVRBUEUgUFJFQ0VERU5URSBBTE9SUyBPTiBWRVJJRklFIFFVRUxMRSBFVEFQRSBDT1JSRVNQT05EIEEgTEEgQ09ORElUSU9OIFNJTk9OIE9OIFJFQ1VMRVxyXG4gICAgICAgIC8vIERBTlMgTEUgVEFCTEVBVSBERVMgRVRBUEVTXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjb25kaXRpb25GYWxzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHdoaWxlIChjb25kaXRpb25GYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibmIgb2YgY29uZGl0aW9uOlwiICsgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlDb25kaXRpb24yID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzFdLmtleTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24yID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzFdLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZUNvbmRpdGlvbjI6IFwiICsgdmFsdWVDb25kaXRpb24yKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjI6IFwiICsga2V5Q29uZGl0aW9uMik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uMl0gPT09IHZhbHVlQ29uZGl0aW9uMikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbjJdID09PSB2YWx1ZUNvbmRpdGlvbjIpKSAhPT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZW9mICh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbjJdID09PSB2YWx1ZUNvbmRpdGlvbjIpKSAhPT0gJ3VuZGVmaW5lZCcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tDb25kMSA9IHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpICE9PSAndW5kZWZpbmVkJztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hlY2tDb25kMiA9IHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb24yXSA9PT0gdmFsdWVDb25kaXRpb24yKSkgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoZWNrQ29uZDEgJiYgY2hlY2tDb25kMilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMiBjb25kaXRpb25zIHJlbXBsaWVzXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkZhbHNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIjIgY29uZGl0aW9ucyBwYXMgcmVtcGxpZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkeFN0ZXBPYmotLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSlcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlkeFN0ZXBPYmotLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbkZhbHNlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuLy8gY29uc29sZS5sb2codGhpcy5pZHhTdGVwT2JqKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IG5ld0lkeFN0ZXBPYmo6IHRoaXMuaWR4U3RlcE9ian0pO1xyXG4gICAgfX0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
