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
const saveButtonService_1 = require("./saveButtonService");
let SaveButtonComponent = class SaveButtonComponent {
    constructor(_saveButtonService) {
        this._saveButtonService = _saveButtonService;
    }
    saveStep() {
        //console.log(this._formService);
        console.log(this.stepId);
        this._saveButtonService.saveDatas(this.stepId)
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
    __metadata('design:paramtypes', [saveButtonService_1.SaveButtonService])
], SaveButtonComponent);
exports.SaveButtonComponent = SaveButtonComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFFcEUsb0NBQWdDLHFCQUFxQixDQUFDLENBQUE7QUFRdEQ7SUFFSSxZQUFvQixrQkFBcUM7UUFBckMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtJQUFFLENBQUM7SUFFNUQsUUFBUTtRQUNKLGlDQUFpQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7YUFDekMsU0FBUyxDQUNOLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQTtJQUNULENBQUM7QUFFTCxDQUFDO0FBYkc7SUFBQyxZQUFLLEVBQUU7O21EQUFBO0FBUFo7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOztzQkFFUSxFQUFDLENBQUM7O3VCQUFBO0FBRVgsMkJBQW1CLHNCQWMvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTYXZlQnV0dG9uU2VydmljZX0gZnJvbSBcIi4vc2F2ZUJ1dHRvblNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdzYXZlLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZTogYDxkaXYgYWxpZ249XCJjZW50ZXJcIiA+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzYXZlU3RlcCgpXCIgID5TYXZlPC9idXR0b24+ICBcclxuICAgICAgICAgICAgICAgPC9kaXY+YH0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUJ1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBzdGVwSWQ7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYXZlQnV0dG9uU2VydmljZTogU2F2ZUJ1dHRvblNlcnZpY2Upe31cclxuXHJcbiAgICBzYXZlU3RlcCgpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICB0aGlzLl9zYXZlQnV0dG9uU2VydmljZS5zYXZlRGF0YXModGhpcy5zdGVwSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXX0=
