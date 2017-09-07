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
var saveService_1 = require("./saveService");
var SaveButtonComponent = (function () {
    function SaveButtonComponent(_saveService) {
        this._saveService = _saveService;
    }
    SaveButtonComponent.prototype.saveStep = function () {
        console.log(this.app_name);
        this._saveService.saveData(this.stepId, this.app_name)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SaveButtonComponent.prototype, "stepId", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SaveButtonComponent.prototype, "app_name", void 0);
    SaveButtonComponent = __decorate([
        core_1.Component({
            selector: 'save-button',
            template: "<div align=\"center\" > \n                    <button type=\"button\" (click)=\"saveStep()\"  >Save</button>  \n               </div>" }), 
        __metadata('design:paramtypes', [saveService_1.SaveService])
    ], SaveButtonComponent);
    return SaveButtonComponent;
}());
exports.SaveButtonComponent = SaveButtonComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFFcEUsNEJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBUTFDO0lBR0ksNkJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUVoRCxzQ0FBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDO2FBQ2hELFNBQVMsQ0FDTixVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLEVBQ3pCLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtJQUNULENBQUM7SUFaRDtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7eURBQUE7SUFSWjtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsYUFBYTtZQUN2QixRQUFRLEVBQUUsdUlBRVEsRUFBQyxDQUFDOzsyQkFBQTtJQWlCeEIsMEJBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLDJCQUFtQixzQkFlL0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NhdmVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9zYXZlU2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3NhdmUtYnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgYWxpZ249XCJjZW50ZXJcIiA+IFxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2F2ZVN0ZXAoKVwiICA+U2F2ZTwvYnV0dG9uPiAgXG4gICAgICAgICAgICAgICA8L2Rpdj5gfSlcblxuZXhwb3J0IGNsYXNzIFNhdmVCdXR0b25Db21wb25lbnQge1xuICAgIEBJbnB1dCgpIHN0ZXBJZDtcbiAgICBASW5wdXQoKSBhcHBfbmFtZTtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYXZlU2VydmljZTogU2F2ZVNlcnZpY2Upe31cblxuICAgIHNhdmVTdGVwKCl7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcF9uYW1lKTtcbiAgICAgICAgdGhpcy5fc2F2ZVNlcnZpY2Uuc2F2ZURhdGEodGhpcy5zdGVwSWQsdGhpcy5hcHBfbmFtZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
