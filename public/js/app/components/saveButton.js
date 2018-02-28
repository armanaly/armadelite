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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUFvRTtBQUVwRSwrQ0FBMEM7QUFRMUMsSUFBYSxtQkFBbUIsR0FBaEM7SUFHSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFFLENBQUM7SUFFaEQsUUFBUTtRQUVKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNoRCxTQUFTLENBQ04sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUN6QixLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQzlCLENBQUE7SUFDVCxDQUFDO0NBRUosQ0FBQTtBQWRZO0lBQVIsWUFBSyxFQUFFOzttREFBUTtBQUNQO0lBQVIsWUFBSyxFQUFFOztxREFBVTtBQUZULG1CQUFtQjtJQU4vQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGFBQWE7UUFDdkIsUUFBUSxFQUFFOztzQkFFUTtLQUFDLENBQUM7cUNBS2MseUJBQVc7R0FIcEMsbUJBQW1CLENBZS9CO0FBZlksa0RBQW1CIiwiZmlsZSI6ImNvbXBvbmVudHMvc2F2ZUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1NhdmVTZXJ2aWNlfSBmcm9tIFwiLi9zYXZlU2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3NhdmUtYnV0dG9uJyxcclxuICAgIHRlbXBsYXRlOiBgPGRpdiBhbGlnbj1cImNlbnRlclwiID4gXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cInNhdmVTdGVwKClcIiAgPlNhdmU8L2J1dHRvbj4gIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5gfSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlQnV0dG9uQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIHN0ZXBJZDtcclxuICAgIEBJbnB1dCgpIGFwcF9uYW1lO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2F2ZVNlcnZpY2U6IFNhdmVTZXJ2aWNlKXt9XHJcblxyXG4gICAgc2F2ZVN0ZXAoKXtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFwcF9uYW1lKTtcclxuICAgICAgICB0aGlzLl9zYXZlU2VydmljZS5zYXZlRGF0YSh0aGlzLnN0ZXBJZCx0aGlzLmFwcF9uYW1lKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICApXHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
