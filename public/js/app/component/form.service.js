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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsdUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBRW5EO0lBRUksWUFBbUIsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDNUMsd0xBQXdMO1FBQ3hMLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFKMEIsQ0FBQztJQU0vQyxJQUFJO1FBRUEsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsMEJBQTBCO1lBQzFCLHVCQUF1QjtZQUV2QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDO1lBQ3hCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBRTdELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7WUFHMUMsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7Z0JBQ3RDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUM7UUFFTCxDQUFDO1FBQ0cscUJBQXFCO0lBQ3pCLENBQUM7QUFDVCxDQUFDO0FBdkNEO0lBQUMsaUJBQVUsRUFBRTs7ZUFBQTtBQUNBLG1CQUFXLGNBc0N2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudC9mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhpcyBmaWxlIGlzIHRoZSBmb3JtIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXZlcnkgc2luZ2xlIGRhdGEgd2lsbCBiZSBjcmVhdGVkIGhlcmUuIFRoZSB2YXJpYWJsZXMgd2lsbCBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHRocm91Z2ggdGhlIHN0ZXAuc2VydmljZSBjb25maWcgZmlsZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XHJcbiAgICAvLyBJQ0kgSkUgVkFJUyBSQU1FTkVSIHRoaXMuX3N0ZXBTZXJ2aWNlIGV0IGRlIGzDoCBqZSBjcsOpw6llIMOgIGxhIHZvbMOpZSBsZXMgZG9ubsOpZXMgZGUgbW9uIGZvcm11bGFpcmUgZGUgY29uZmlnIGV0IGplIGxlIG1ldHMgZGFucyBsZXMgdmFyaWFibGUgZHUgc2VydmljZSBkZSBmb3JtdWxhaXJlIChmb3JtLnNlcnZpY2UudHMpXHJcbiAgICBhcnJheVN0ZXBzID0gW107XHJcblxyXG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcclxuXHJcbiAgICBpbml0KCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICB0aGlzLl9zdGVwU2VydmljZS5zdGVwLnNvcnQoKTtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS50eXBlKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzdGVwX2lkID0gaS5zdGVwX2lkO1xyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiY2xpY2tfc2VsZWN0aW9uXCIgfHwgaS50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1trZXlOYW1lXTogXCJcIn0pO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyB2b2lyIHNpIGlsIGZhdXQgcmVsaXJlIGxlcyBmb3JtX3ZhbHVlIGRhbnMgY2UgY2FzIGNhciBjJ2VzdCB1biB0YWJsZWF1IGV0IHBsdXMgdW5lIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJmaWVsZF9wYW5lbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogb2YgaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzTGlzdC5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGkubmFtZSAsW2kubmFtZV06IGtleXNMaXN0fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB9XHJcbn0iXX0=
