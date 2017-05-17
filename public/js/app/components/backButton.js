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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFDcEUsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsK0JBQTBCLHdCQUUxQixDQUFDLENBRmlEO0FBWWxEO0lBSUksWUFBb0IsWUFBeUIsRUFBVSxZQUF5QjtRQUE1RCxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRHRFLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQUM0QyxDQUFDO0lBQ25GLE9BQU87UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRWhDLElBQUksQ0FBQyxVQUFVLEVBQUcsQ0FBQztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxrREFBa0Q7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQztZQUNwRSxJQUFJLENBQUMsVUFBVSxFQUFHLENBQUM7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0RCxLQUFLLENBQUM7UUFDVixDQUFDO1FBQ0QsaUlBQWlJO1FBQ2pJLDZCQUE2QjtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUNuRSxDQUFDO1lBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdGLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQzlFLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRWxGLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsY0FBYyxDQUFDLENBQUM7WUFDakQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxZQUFZLENBQUMsQ0FBQztZQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxDQUFDLENBQUE7WUFFdkYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUUsQ0FBQztnQkFDekcsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO2dCQUNuQixZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7Z0JBQzFFLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUVsRixDQUFDO1lBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUF3QnJCLENBQUM7UUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQUEsQ0FBQztBQTlERTtJQUFDLFlBQUssRUFBRTs7dURBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7bURBQUE7QUFDUjtJQUFDLGFBQU0sRUFBRTs7bURBQUE7QUFiYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Q0FJYjtLQUNBLENBQUM7O3VCQUFBO0FBR1csMkJBQW1CLHNCQStEOUIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2JhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIlxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ByZXZpb3VzLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uID48aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tdHJpYW5nbGUtbGVmdFwiIChjbGljayk9XCJvbkNsaWNrKClcIj4gPC9pPjwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmF2PlxyXG5gXHJcbn0pXHJcblxyXG4vLyBVU0UgVE8gR08gQkFDSyBUTyBQUkVWSU9VUyBTVEVQIElOIERFQ0lTSU9OIFdPUktGTE9XXHJcbmV4cG9ydCBjbGFzcyBCYWNrQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIGlkeFN0ZXBPYmo7XHJcbiAgICBASW5wdXQoKSBzdGVwSWQ7XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2Upe31cclxuICAgIG9uQ2xpY2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgbGV0IHN0ZXBJbmRleCA9IHRoaXMuaWR4U3RlcE9iajtcclxuXHJcbiAgICAgICAgdGhpcy5pZHhTdGVwT2JqIC0tO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uc3RlcF9pZCk7XHJcbiAgICAgICAgLy8gQ0hFQ0sgSUYgVEhFIFBSRVZJT1VTIFNURVAgSEFTIFRIRSBTQU1FIFNURVBfSURcclxuICAgICAgICB3aGlsZSAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5zdGVwX2lkID09IHRoaXMuc3RlcElkKXtcclxuICAgICAgICAgICAgdGhpcy5pZHhTdGVwT2JqIC0tO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNJIElMIFkgQSBERVMgQ09ORElUSU9OUyBERUZJTklFUyBBIEwnRVRBUEUgUFJFQ0VERU5URSBBTE9SUyBPTiBWRVJJRklFIFFVRUxMRSBFVEFQRSBDT1JSRVNQT05EIEEgTEEgQ09ORElUSU9OIFNJTk9OIE9OIFJFQ1VMRVxyXG4gICAgICAgIC8vIERBTlMgTEUgVEFCTEVBVSBERVMgRVRBUEVTXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9ucy5sZW5ndGggPiAwKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuYiBvZiBjb25kaXRpb246XCIgKyB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoKTtcclxuICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWVDb25kaXRpb246IFwiICsgdmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUNvbmRpdGlvbjogXCIgKyBrZXlDb25kaXRpb24pO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSlcclxuXHJcbiAgICAgICAgICAgIHdoaWxlICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuICAgICAgICAgICAgICAgIGtleUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzW3RoaXMuaWR4U3RlcE9ial0uY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbmNvbnNvbGUubG9nKHRoaXMuaWR4U3RlcE9iaik7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnMubGVuZ3RoID4gMClcclxuICAgICAgICAvLyB7XHJcbiAgICAgICAgLy8gICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgIC8vICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKClcclxuICAgICAgICAvLyAgICAgd2hpbGUgKHR5cGVvZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAvLyAgICAgLy93aGlsZSAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwc1tzdGVwSW5kZXhdW2tleUNvbmRpdGlvbl0gIT0gdmFsdWVDb25kaXRpb24pe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJjb25kaXRpb24gcGFzIHJlbXBsaWUsIGplIHJlY3VsZSBkZSAxIGluZGljZSBkYW5zIGxlIHRhYmxlYXUuIEluZGljZTogXCIgKyB0aGlzLmlkeFN0ZXBPYmopO1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5pZHhTdGVwT2JqLS07XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHNbdGhpcy5pZHhTdGVwT2JqXS5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLl9zdGVwU2VydmljZS5zdGVwc1t0aGlzLmlkeFN0ZXBPYmpdLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVDb25kaXRpb24pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbMF1ba2V5Q29uZGl0aW9uXSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnY29uZGl0aW9uIHJlbXBsaWUsIGplIHJlc3RlIHN1ciBsIGluZGljZTogJyArIHRoaXMuaWR4U3RlcE9iailcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gd2hpbGUgKCB0eXBlb2YgdGhpcy5jdXJyZW50U3RlcFtpZHhTdGVwT2JqXSA9PSAndW5kZWZpbmVkJyApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGVwSWQtLTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaWR4U3RlcE9iaik7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHsgbmV3SWR4U3RlcE9iajogdGhpcy5pZHhTdGVwT2JqfSk7XHJcbn19Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
