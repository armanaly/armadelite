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
const input_1 = require("gulp-typescript/release/input");
let FormService = class FormService {
    constructor(_stepService) {
        this._stepService = _stepService;
        // ICI JE VAIS RAMENER this._stepService et de là je créée à la volée les données de mon formulaire de config et je le mets dans les variable du service de formulaire (form.service.ts)
        this.arraySteps = [];
        this.arrayFiles = [];
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
            if (i.type == 'file_upload') {
                let keyName = i.configuration.form_value.name;
                // let formData:FormData = new FormData();
                this.arrayFiles.push({ "nom": keyName, "file": input_1.File });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUNuRCx3QkFBbUIsK0JBQStCLENBQUMsQ0FBQTtBQUVuRDtJQUVJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzdDLHdMQUF3TDtRQUN4TCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFKMkIsQ0FBQztJQU1oRCxJQUFJO1FBRUEsZ0NBQWdDO1FBQ2hDLHVDQUF1QztRQUN2QyxpQ0FBaUM7UUFDakMsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNwQywwQkFBMEI7WUFDMUIsdUJBQXVCO1lBRXpCLDRCQUE0QjtZQUMxQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBRTVGLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFFOUMsb0VBQW9FO2dCQUNwRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztvQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztZQUtMLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO29CQUNwQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFBO2dCQUN0QyxDQUFDO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztZQUM5RCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQSxDQUFDO2dCQUN6QixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRTlDLDBDQUEwQztnQkFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFJLEVBQUMsQ0FBQyxDQUFDO1lBRXpELENBQUM7UUFDTCxDQUFDO1FBQ0cscUJBQXFCO0lBQ3pCLENBQUM7QUFDVCxDQUFDO0FBdEREO0lBQUMsaUJBQVUsRUFBRTs7ZUFBQTtBQUNBLG1CQUFXLGNBcUR2QixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvY29tcG9uZW50cy9mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhpcyBmaWxlIGlzIHRoZSBmb3JtIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXZlcnkgc2luZ2xlIGRhdGEgd2lsbCBiZSBjcmVhdGVkIGhlcmUuIFRoZSB2YXJpYWJsZXMgd2lsbCBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHRocm91Z2ggdGhlIHN0ZXAuc2VydmljZSBjb25maWcgZmlsZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlfSBmcm9tIFwiZ3VscC10eXBlc2NyaXB0L3JlbGVhc2UvaW5wdXRcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSl7fVxyXG4gICAgLy8gSUNJIEpFIFZBSVMgUkFNRU5FUiB0aGlzLl9zdGVwU2VydmljZSBldCBkZSBsw6AgamUgY3LDqcOpZSDDoCBsYSB2b2zDqWUgbGVzIGRvbm7DqWVzIGRlIG1vbiBmb3JtdWxhaXJlIGRlIGNvbmZpZyBldCBqZSBsZSBtZXRzIGRhbnMgbGVzIHZhcmlhYmxlIGR1IHNlcnZpY2UgZGUgZm9ybXVsYWlyZSAoZm9ybS5zZXJ2aWNlLnRzKVxyXG4gICAgYXJyYXlTdGVwcyA9IFtdO1xyXG4gICAgYXJyYXlGaWxlcyA9IFtdO1xyXG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcclxuXHJcbiAgICBpbml0KCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICAvL3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLnNvcnQoKTtcclxuICAgICAgICBsZXQga2V5RXhpc3RzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLnR5cGUpO1xyXG5cclxuICAgICAgICAgIC8vICBsZXQgc3RlcF9pZCA9IGkuc3RlcF9pZDtcclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImNsaWNrX3NlbGVjdGlvblwiIHx8IGkudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyB8fCBpLnR5cGUgPT0gXCJtdWx0aV9zZWxlY3Rpb25cIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBKJ2Fqb3V0ZSB1bmUgc2V1bGUgZm9pcyBsYSB2YXJpYWJsZSBxdWkgdmEgcmVjZXZvaXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlFeGlzdHMuaW5jbHVkZXMoa2V5TmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlFeGlzdHMucHVzaChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyB2b2lyIHNpIGlsIGZhdXQgcmVsaXJlIGxlcyBmb3JtX3ZhbHVlIGRhbnMgY2UgY2FzIGNhciBjJ2VzdCB1biB0YWJsZWF1IGV0IHBsdXMgdW5lIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJmaWVsZF9wYW5lbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogb2YgaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzTGlzdC5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGkubmFtZSAsW2kubmFtZV06IGtleXNMaXN0fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gJ2ZpbGVfdXBsb2FkJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZvcm1EYXRhOkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5RmlsZXMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
