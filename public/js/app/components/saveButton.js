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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUVwRSwrQ0FBMEM7QUFRMUMsSUFBYSxtQkFBbUIsR0FBaEM7SUFHSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFaEQsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoRCxTQUFTLENBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0NBRUosQ0FBQTtBQWRZO0lBQVIsWUFBSyxFQUFFOzttREFBUTtBQUNQO0lBQVIsWUFBSyxFQUFFOztxREFBVTtBQUZULG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOztzQkFFUTtLQUFDLENBQUM7cUNBS2MseUJBQVc7R0FIcEMsbUJBQW1CLENBZS9CO0FBZlksa0RBQW1CIiwiZmlsZSI6ImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7U2F2ZVNlcnZpY2V9IGZyb20gXCIuL3NhdmVTZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnc2F2ZS1idXR0b24nLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBhbGlnbj1cImNlbnRlclwiID4gXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJzYXZlU3RlcCgpXCIgID5TYXZlPC9idXR0b24+ICBcbiAgICAgICAgICAgICAgIDwvZGl2PmB9KVxuXG5leHBvcnQgY2xhc3MgU2F2ZUJ1dHRvbkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgc3RlcElkO1xuICAgIEBJbnB1dCgpIGFwcF9uYW1lO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3NhdmVTZXJ2aWNlOiBTYXZlU2VydmljZSl7fVxuXG4gICAgc2F2ZVN0ZXAoKXtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXBwX25hbWUpO1xuICAgICAgICB0aGlzLl9zYXZlU2VydmljZS5zYXZlRGF0YSh0aGlzLnN0ZXBJZCx0aGlzLmFwcF9uYW1lKVxuICAgICAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
