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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFELGVBQ3JELENBQUMsQ0FEbUU7QUFFcEUsNEJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBUTFDO0lBRUksNkJBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUUsQ0FBQztJQUVoRCxzQ0FBUSxHQUFSO1FBRUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNsQyxTQUFTLENBQ04sVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFqQixDQUFpQixFQUN6QixVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQWxCLENBQWtCLENBQzlCLENBQUE7SUFDVCxDQUFDO0lBWEQ7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBUFo7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsUUFBUSxFQUFFLHVJQUVRLEVBQUMsQ0FBQzs7MkJBQUE7SUFnQnhCLDBCQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSwyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zYXZlQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL3NhdmVTZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2F2ZS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGFsaWduPVwiY2VudGVyXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2F2ZVN0ZXAoKVwiICA+U2F2ZTwvYnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PmB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVCdXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgc3RlcElkO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2F2ZVNlcnZpY2U6IFNhdmVTZXJ2aWNlKXt9XHJcblxyXG4gICAgc2F2ZVN0ZXAoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZCk7XHJcbiAgICAgICAgdGhpcy5fc2F2ZVNlcnZpY2Uuc2F2ZURhdGEodGhpcy5zdGVwSWQpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
