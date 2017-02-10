/*
    This file is the form of the application. Every single data will be created here. The variables will be created dynamically through the step.service config file.
 */
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
const core_1 = require("@angular/core");
const step_service_1 = require("../Engine/step.service");
let FormService = class FormService {
    constructor(_stepService) {
        this._stepService = _stepService;
        // ICI JE VAIS RAMENER this._stepService et de là je créée à la volée les données de mon formulaire de config et je le mets dans les variable du service de formulaire (form.service.ts)
        this.arraySteps = [];
        this.current_step_id = 1;
    }
    init() {
        // console.log("LIST of STEPS");
        // console.log(this._stepService.step);
        this._stepService.step.sort();
        for (let i of this._stepService.step) {
            // console.log(i.step_id);
            // console.log(i.type);
            let step_id = i.step_id;
            if (i.type == "click_selection" || i.type == 'image_selection') {
                let keyName = i.configuration.form_value.name;
                this.arraySteps.push({ [keyName]: "" });
            }
            if (i.type == "field_panel") {
                let keysList = [];
                for (let j of i.configuration.form_values) {
                    let keyName = j.name;
                    keysList.push({ [keyName]: "" });
                }
                this.arraySteps.push({ "nom": i.name, [i.name]: keysList });
            }
        }
        // console.log(this);
    }
};
FormService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [step_service_1.StepService])
], FormService);
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUVuRDtJQUVJLFlBQW1CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzVDLHdMQUF3TDtRQUN4TCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjBCLENBQUM7SUFNL0MsSUFBSTtRQUVBLGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDOUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25DLDBCQUEwQjtZQUMxQix1QkFBdUI7WUFFdkIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQztZQUN4QixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU3RCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBRzFDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1FBRUwsQ0FBQztRQUNHLHFCQUFxQjtJQUN6QixDQUFDO0FBQ1QsQ0FBQztBQXZDRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQXNDdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBUaGlzIGZpbGUgaXMgdGhlIGZvcm0gb2YgdGhlIGFwcGxpY2F0aW9uLiBFdmVyeSBzaW5nbGUgZGF0YSB3aWxsIGJlIGNyZWF0ZWQgaGVyZS4gVGhlIHZhcmlhYmxlcyB3aWxsIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgdGhyb3VnaCB0aGUgc3RlcC5zZXJ2aWNlIGNvbmZpZyBmaWxlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2Upe31cclxuICAgIC8vIElDSSBKRSBWQUlTIFJBTUVORVIgdGhpcy5fc3RlcFNlcnZpY2UgZXQgZGUgbMOgIGplIGNyw6nDqWUgw6AgbGEgdm9sw6llIGxlcyBkb25uw6llcyBkZSBtb24gZm9ybXVsYWlyZSBkZSBjb25maWcgZXQgamUgbGUgbWV0cyBkYW5zIGxlcyB2YXJpYWJsZSBkdSBzZXJ2aWNlIGRlIGZvcm11bGFpcmUgKGZvcm0uc2VydmljZS50cylcclxuICAgIGFycmF5U3RlcHMgPSBbXTtcclxuXHJcbiAgICBjdXJyZW50X3N0ZXBfaWQgPSAxO1xyXG5cclxuICAgIGluaXQoKXtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMSVNUIG9mIFNURVBTXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgICAgIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXAuc29ydCgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLnR5cGUpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN0ZXBfaWQgPSBpLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJjbGlja19zZWxlY3Rpb25cIiB8fCBpLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7W2tleU5hbWVdOiBcIlwifSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHZvaXIgc2kgaWwgZmF1dCByZWxpcmUgbGVzIGZvcm1fdmFsdWUgZGFucyBjZSBjYXMgY2FyIGMnZXN0IHVuIHRhYmxlYXUgZXQgcGx1cyB1bmUgdmFyaWFibGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImZpZWxkX3BhbmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBvZiBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXNMaXN0LnB1c2goe1trZXlOYW1lXTogXCJcIn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjogaS5uYW1lICxbaS5uYW1lXToga2V5c0xpc3R9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxufSJdfQ==
