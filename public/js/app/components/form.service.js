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
        //this._stepService.steps.sort();
        for (let i of this._stepService.steps) {
            // console.log(i.step_id);
            // console.log(i.type);
            let step_id = i.step_id;
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUVuRDtJQUVJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzdDLHdMQUF3TDtRQUN4TCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUVBLGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQywwQkFBMEI7WUFDMUIsdUJBQXVCO1lBRXZCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBRzFDLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1FBRUwsQ0FBQztRQUNHLHFCQUFxQjtJQUN6QixDQUFDO0FBQ1QsQ0FBQztBQXZDRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQXNDdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBUaGlzIGZpbGUgaXMgdGhlIGZvcm0gb2YgdGhlIGFwcGxpY2F0aW9uLiBFdmVyeSBzaW5nbGUgZGF0YSB3aWxsIGJlIGNyZWF0ZWQgaGVyZS4gVGhlIHZhcmlhYmxlcyB3aWxsIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgdGhyb3VnaCB0aGUgc3RlcC5zZXJ2aWNlIGNvbmZpZyBmaWxlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XHJcbiAgICAvLyBJQ0kgSkUgVkFJUyBSQU1FTkVSIHRoaXMuX3N0ZXBTZXJ2aWNlIGV0IGRlIGzDoCBqZSBjcsOpw6llIMOgIGxhIHZvbMOpZSBsZXMgZG9ubsOpZXMgZGUgbW9uIGZvcm11bGFpcmUgZGUgY29uZmlnIGV0IGplIGxlIG1ldHMgZGFucyBsZXMgdmFyaWFibGUgZHUgc2VydmljZSBkZSBmb3JtdWxhaXJlIChmb3JtLnNlcnZpY2UudHMpXHJcbiAgICBhcnJheVN0ZXBzID0gW107XHJcblxyXG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcclxuXHJcbiAgICBpbml0KCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICAvL3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLnNvcnQoKTtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkuc3RlcF9pZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkudHlwZSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3RlcF9pZCA9IGkuc3RlcF9pZDtcclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImNsaWNrX3NlbGVjdGlvblwiIHx8IGkudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyB8fCBpLnR5cGUgPT0gXCJtdWx0aV9zZWxlY3Rpb25cIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9pciBzaSBpbCBmYXV0IHJlbGlyZSBsZXMgZm9ybV92YWx1ZSBkYW5zIGNlIGNhcyBjYXIgYydlc3QgdW4gdGFibGVhdSBldCBwbHVzIHVuZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiZmllbGRfcGFuZWxcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIG9mIGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGoubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5c0xpc3QucHVzaCh7W2tleU5hbWVdOiBcIlwifSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBpLm5hbWUgLFtpLm5hbWVdOiBrZXlzTGlzdH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgfVxyXG59Il19
