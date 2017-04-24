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
        let keyExists = [];
        for (let i of this._stepService.steps) {
            // console.log(i.step_id);
            // console.log(i.type);
            //  let step_id = i.step_id;
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {
                let keyName = i.configuration.form_value.name;
                // J'ajoute une seule fois la variable qui va recevoir le formulaire
                if (!keyExists.includes(keyName)) {
                    this.arraySteps.push({ [keyName]: "" });
                    keyExists.push(keyName);
                }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUVuRDtJQUVJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzdDLHdMQUF3TDtRQUN4TCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUVBLGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsMEJBQTBCO1lBQzFCLHVCQUF1QjtZQUV6Qiw0QkFBNEI7WUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRTlDLG9FQUFvRTtnQkFDcEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7WUFLTCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtnQkFDdEMsQ0FBQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztRQUVMLENBQUM7UUFDRyxxQkFBcUI7SUFDekIsQ0FBQztBQUNULENBQUM7QUEvQ0Q7SUFBQyxpQkFBVSxFQUFFOztlQUFBO0FBQ0EsbUJBQVcsY0E4Q3ZCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhpcyBmaWxlIGlzIHRoZSBmb3JtIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXZlcnkgc2luZ2xlIGRhdGEgd2lsbCBiZSBjcmVhdGVkIGhlcmUuIFRoZSB2YXJpYWJsZXMgd2lsbCBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHRocm91Z2ggdGhlIHN0ZXAuc2VydmljZSBjb25maWcgZmlsZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSl7fVxyXG4gICAgLy8gSUNJIEpFIFZBSVMgUkFNRU5FUiB0aGlzLl9zdGVwU2VydmljZSBldCBkZSBsw6AgamUgY3LDqcOpZSDDoCBsYSB2b2zDqWUgbGVzIGRvbm7DqWVzIGRlIG1vbiBmb3JtdWxhaXJlIGRlIGNvbmZpZyBldCBqZSBsZSBtZXRzIGRhbnMgbGVzIHZhcmlhYmxlIGR1IHNlcnZpY2UgZGUgZm9ybXVsYWlyZSAoZm9ybS5zZXJ2aWNlLnRzKVxyXG4gICAgYXJyYXlTdGVwcyA9IFtdO1xyXG5cclxuICAgIGN1cnJlbnRfc3RlcF9pZCA9IDE7XHJcblxyXG4gICAgaW5pdCgpe1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxJU1Qgb2YgU1RFUFNcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAgICAgLy90aGlzLl9zdGVwU2VydmljZS5zdGVwcy5zb3J0KCk7XHJcbiAgICAgICAgbGV0IGtleUV4aXN0cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS50eXBlKTtcclxuXHJcbiAgICAgICAgICAvLyAgbGV0IHN0ZXBfaWQgPSBpLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJjbGlja19zZWxlY3Rpb25cIiB8fCBpLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicgfHwgaS50eXBlID09IFwibXVsdGlfc2VsZWN0aW9uXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSidham91dGUgdW5lIHNldWxlIGZvaXMgbGEgdmFyaWFibGUgcXVpIHZhIHJlY2V2b2lyIGxlIGZvcm11bGFpcmVcclxuICAgICAgICAgICAgICAgIGlmICgha2V5RXhpc3RzLmluY2x1ZGVzKGtleU5hbWUpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7W2tleU5hbWVdOiBcIlwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RXhpc3RzLnB1c2goa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9pciBzaSBpbCBmYXV0IHJlbGlyZSBsZXMgZm9ybV92YWx1ZSBkYW5zIGNlIGNhcyBjYXIgYydlc3QgdW4gdGFibGVhdSBldCBwbHVzIHVuZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiZmllbGRfcGFuZWxcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIG9mIGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGoubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5c0xpc3QucHVzaCh7W2tleU5hbWVdOiBcIlwifSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBpLm5hbWUgLFtpLm5hbWVdOiBrZXlzTGlzdH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgfVxyXG59Il19
