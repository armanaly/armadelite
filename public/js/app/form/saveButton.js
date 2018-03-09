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
const saveService_1 = require("./saveService");
let SaveButtonComponent = class SaveButtonComponent {
    constructor(_saveService) {
        this._saveService = _saveService;
    }
    saveStep() {
        console.log(this.app_name);
        this._saveService.saveData(this.stepId, this.app_name)
            .subscribe(data => console.log(data), error => console.log(error));
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SaveButtonComponent.prototype, "stepId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SaveButtonComponent.prototype, "app_name", void 0);
SaveButtonComponent = __decorate([
    core_1.Component({
        selector: 'save-button',
        template: `<div align="center" > 
                    <button type="button" (click)="saveStep()"  >Save</button>  
               </div>`
    }),
    __metadata("design:paramtypes", [saveService_1.SaveService])
], SaveButtonComponent);
exports.SaveButtonComponent = SaveButtonComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUVwRSwrQ0FBMEM7QUFRMUMsSUFBYSxtQkFBbUIsR0FBaEM7SUFHSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFaEQsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoRCxTQUFTLENBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0NBRUosQ0FBQTtBQWRZO0lBQVIsWUFBSyxFQUFFOzttREFBUTtBQUNQO0lBQVIsWUFBSyxFQUFFOztxREFBVTtBQUZULG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOztzQkFFUTtLQUFDLENBQUM7cUNBS2MseUJBQVc7R0FIcEMsbUJBQW1CLENBZS9CO0FBZlksa0RBQW1CIiwiZmlsZSI6ImZvcm0vc2F2ZUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL3NhdmVTZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnc2F2ZS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGFsaWduPVwiY2VudGVyXCIgPiBcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAoY2xpY2spPVwic2F2ZVN0ZXAoKVwiICA+U2F2ZTwvYnV0dG9uPiAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PmB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVCdXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgc3RlcElkO1xyXG4gICAgQElucHV0KCkgYXBwX25hbWU7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zYXZlU2VydmljZTogU2F2ZVNlcnZpY2Upe31cclxuXHJcbiAgICBzYXZlU3RlcCgpe1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwX25hbWUpO1xyXG4gICAgICAgIHRoaXMuX3NhdmVTZXJ2aWNlLnNhdmVEYXRhKHRoaXMuc3RlcElkLHRoaXMuYXBwX25hbWUpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxyXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIClcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
