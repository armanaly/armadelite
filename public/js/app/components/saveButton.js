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
        console.log(this.stepId);
        this._saveService.saveData(this.stepId)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SaveButtonComponent.prototype, "stepId", void 0);
    SaveButtonComponent = __decorate([
        core_1.Component({
            selector: 'save-button',
            template: "<div align=\"center\" > \n                    <button type=\"button\" (click)=\"saveStep()\"  >Save</button>  \n               </div>" }), 
        __metadata('design:paramtypes', [saveService_1.SaveService])
    ], SaveButtonComponent);
    return SaveButtonComponent;
}());
exports.SaveButtonComponent = SaveButtonComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFFcEUsNEJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBUTFDO0lBRUksNkJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUVoRCxzQ0FBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBWEQ7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBUFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHVJQUVRLEVBQUMsQ0FBQzs7MkJBQUE7SUFnQnhCLDBCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSwyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zYXZlQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xuaW1wb3J0IHtTYXZlU2VydmljZX0gZnJvbSBcIi4vc2F2ZVNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdzYXZlLWJ1dHRvbicsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGFsaWduPVwiY2VudGVyXCIgPiBcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNhdmVTdGVwKClcIiAgPlNhdmU8L2J1dHRvbj4gIFxuICAgICAgICAgICAgICAgPC9kaXY+YH0pXG5cbmV4cG9ydCBjbGFzcyBTYXZlQnV0dG9uQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBzdGVwSWQ7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2F2ZVNlcnZpY2U6IFNhdmVTZXJ2aWNlKXt9XG5cbiAgICBzYXZlU3RlcCgpe1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xuICAgICAgICB0aGlzLl9zYXZlU2VydmljZS5zYXZlRGF0YSh0aGlzLnN0ZXBJZClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIClcbiAgICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
