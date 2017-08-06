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
const saveService_1 = require("./saveService");
let SaveButtonComponent = class SaveButtonComponent {
    constructor(_saveService) {
        this._saveService = _saveService;
    }
    saveStep() {
        //console.log(this._formService);
        console.log(this.stepId);
        this._saveService.saveData(this.stepId)
            .subscribe(data => console.log(data), error => console.log(error));
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], SaveButtonComponent.prototype, "stepId", void 0);
SaveButtonComponent = __decorate([
    core_1.Component({
        selector: 'save-button',
        template: `<div align="center" > 
                    <button type="button" (click)="saveStep()"  >Save</button>  
               </div>` }), 
    __metadata('design:paramtypes', [saveService_1.SaveService])
], SaveButtonComponent);
exports.SaveButtonComponent = SaveButtonComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFFcEUsOEJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBUTFDO0lBRUksWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRSxDQUFDO0lBRWhELFFBQVE7UUFDSixpQ0FBaUM7UUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsQyxTQUFTLENBQ04sSUFBSSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQ3pCLEtBQUssSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUM5QixDQUFBO0lBQ1QsQ0FBQztBQUVMLENBQUM7QUFiRztJQUFDLFlBQUssRUFBRTs7bURBQUE7QUFQWjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsYUFBYTtRQUN2QixRQUFRLEVBQUU7O3NCQUVRLEVBQUMsQ0FBQzs7dUJBQUE7QUFFWCwyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiYXNzZXRzL2FwcC9jb21wb25lbnRzL3NhdmVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vc2F2ZVNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYXZlLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgYWxpZ249XCJjZW50ZXJcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzYXZlU3RlcCgpXCIgID5TYXZlPC9idXR0b24+ICBcclxuICAgICAgICAgICAgICAgPC9kaXY+YH0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBzdGVwSWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYXZlU2VydmljZTogU2F2ZVNlcnZpY2Upe31cclxuXHJcbiAgICBzYXZlU3RlcCgpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICB0aGlzLl9zYXZlU2VydmljZS5zYXZlRGF0YSh0aGlzLnN0ZXBJZClcclxuICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
