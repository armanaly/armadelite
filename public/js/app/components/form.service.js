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
            if (i.type == 'file_upload') {
                let keyName = i.configuration.form_value.name;
                // let formData:FormData = new FormData();
                this.arraySteps.push({ "nom": keyName, "file_uploaded": File });
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQywrQkFBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQUVuRDtJQUVJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQzdDLHdMQUF3TDtRQUN4TCxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBRWhCLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUVBLGdDQUFnQztRQUNoQyx1Q0FBdUM7UUFDdkMsaUNBQWlDO1FBQ2pDLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsMEJBQTBCO1lBQzFCLHVCQUF1QjtZQUV6Qiw0QkFBNEI7WUFDMUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRTlDLG9FQUFvRTtnQkFDcEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUM7b0JBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7WUFLTCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtnQkFDdEMsQ0FBQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUU5QywwQ0FBMEM7Z0JBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUVsRSxDQUFDO1FBQ0wsQ0FBQztRQUNHLHFCQUFxQjtJQUN6QixDQUFDO0FBQ1QsQ0FBQztBQXRERDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQXFEdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBUaGlzIGZpbGUgaXMgdGhlIGZvcm0gb2YgdGhlIGFwcGxpY2F0aW9uLiBFdmVyeSBzaW5nbGUgZGF0YSB3aWxsIGJlIGNyZWF0ZWQgaGVyZS4gVGhlIHZhcmlhYmxlcyB3aWxsIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgdGhyb3VnaCB0aGUgc3RlcC5zZXJ2aWNlIGNvbmZpZyBmaWxlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XHJcbiAgICAvLyBJQ0kgSkUgVkFJUyBSQU1FTkVSIHRoaXMuX3N0ZXBTZXJ2aWNlIGV0IGRlIGzDoCBqZSBjcsOpw6llIMOgIGxhIHZvbMOpZSBsZXMgZG9ubsOpZXMgZGUgbW9uIGZvcm11bGFpcmUgZGUgY29uZmlnIGV0IGplIGxlIG1ldHMgZGFucyBsZXMgdmFyaWFibGUgZHUgc2VydmljZSBkZSBmb3JtdWxhaXJlIChmb3JtLnNlcnZpY2UudHMpXHJcbiAgICBhcnJheVN0ZXBzID0gW107XHJcblxyXG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcclxuXHJcbiAgICBpbml0KCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICAvL3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLnNvcnQoKTtcclxuICAgICAgICBsZXQga2V5RXhpc3RzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLnR5cGUpO1xyXG5cclxuICAgICAgICAgIC8vICBsZXQgc3RlcF9pZCA9IGkuc3RlcF9pZDtcclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImNsaWNrX3NlbGVjdGlvblwiIHx8IGkudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyB8fCBpLnR5cGUgPT0gXCJtdWx0aV9zZWxlY3Rpb25cIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBKJ2Fqb3V0ZSB1bmUgc2V1bGUgZm9pcyBsYSB2YXJpYWJsZSBxdWkgdmEgcmVjZXZvaXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICAgICAgaWYgKCFrZXlFeGlzdHMuaW5jbHVkZXMoa2V5TmFtZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlFeGlzdHMucHVzaChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyB2b2lyIHNpIGlsIGZhdXQgcmVsaXJlIGxlcyBmb3JtX3ZhbHVlIGRhbnMgY2UgY2FzIGNhciBjJ2VzdCB1biB0YWJsZWF1IGV0IHBsdXMgdW5lIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJmaWVsZF9wYW5lbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogb2YgaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzTGlzdC5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGkubmFtZSAsW2kubmFtZV06IGtleXNMaXN0fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gJ2ZpbGVfdXBsb2FkJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZvcm1EYXRhOkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJmaWxlX3VwbG9hZGVkXCI6IEZpbGV9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
