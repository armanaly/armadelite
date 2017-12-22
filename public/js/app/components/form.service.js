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
const step_service_1 = require("../Engine/step.service");
let FormService = class FormService {
    constructor(_stepService) {
        this._stepService = _stepService;
        this.arraySteps = [];
        this.arrayFiles = new FormData();
        this.current_step_id = 1;
    }
    init() {
        let keyExists = [];
        for (let i of this._stepService.steps) {
            console.log(i.step_id);
            console.log(i.type);
            console.log(i.name);
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {
                let keyName = i.configuration.form_value.name;
                if (keyExists.indexOf(keyName) == -1) {
                    this.arraySteps.push({ [keyName]: "" });
                    keyExists.push(keyName);
                }
                console.log("keyExists");
                console.log((keyExists));
            }
            if (i.type == "field_panel") {
                let keysList = [];
                for (let j of i.configuration.form_values) {
                    let keyName = j.name;
                    keysList.push({ [keyName]: "" });
                    console.log(keysList);
                    console.log(keyName);
                }
                this.arraySteps.push({ "nom": i.name, [i.name]: keysList });
            }
            if (i.type == 'file_upload') {
                let keyName = i.configuration.form_value.name;
                this.arraySteps.push({ "nom": keyName, "type": "file" });
            }
        }
        console.log(this.arraySteps);
    }
};
FormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [step_service_1.StepService])
], FormService);
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsd0NBQTJDO0FBQzNDLHlEQUFtRDtBQUduRCxJQUFhLFdBQVcsR0FBeEI7SUFFSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUU3QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUtBLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBSTlDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztvQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUc3QixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFHMUQsQ0FBQztRQUNMLENBQUM7UUFLRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU3QixDQUFDO0NBQ1IsQ0FBQTtBQS9EWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR3lCLDBCQUFXO0dBRnBDLFdBQVcsQ0ErRHZCO0FBL0RZLGtDQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgICBUaGlzIGZpbGUgaXMgdGhlIGZvcm0gb2YgdGhlIGFwcGxpY2F0aW9uLiBFdmVyeSBzaW5nbGUgZGF0YSB3aWxsIGJlIGNyZWF0ZWQgaGVyZS4gVGhlIHZhcmlhYmxlcyB3aWxsIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgdGhyb3VnaCB0aGUgc3RlcC5zZXJ2aWNlIGNvbmZpZyBmaWxlLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsZX0gZnJvbSBcImd1bHAtdHlwZXNjcmlwdC9yZWxlYXNlL2lucHV0XCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XG4gICAgLy8gSUNJIEpFIFZBSVMgUkFNRU5FUiB0aGlzLl9zdGVwU2VydmljZSBldCBkZSBsw6AgamUgY3LDqcOpZSDDoCBsYSB2b2zDqWUgbGVzIGRvbm7DqWVzIGRlIG1vbiBmb3JtdWxhaXJlIGRlIGNvbmZpZyBldCBqZSBsZSBtZXRzIGRhbnMgbGVzIHZhcmlhYmxlIGR1IHNlcnZpY2UgZGUgZm9ybXVsYWlyZSAoZm9ybS5zZXJ2aWNlLnRzKVxuICAgIGFycmF5U3RlcHMgPSBbXTtcbiAgICBhcnJheUZpbGVzOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGN1cnJlbnRfc3RlcF9pZCA9IDE7XG5cbiAgICBpbml0KCl7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMSVNUIG9mIFNURVBTXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcbiAgICAgICAgLy90aGlzLl9zdGVwU2VydmljZS5zdGVwcy5zb3J0KCk7XG4gICAgICAgIGxldCBrZXlFeGlzdHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coaS5zdGVwX2lkKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkudHlwZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLm5hbWUpO1xuICAgICAgICAgIC8vICBsZXQgc3RlcF9pZCA9IGkuc3RlcF9pZDtcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJjbGlja19zZWxlY3Rpb25cIiB8fCBpLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicgfHwgaS50eXBlID09IFwibXVsdGlfc2VsZWN0aW9uXCIpIHtcblxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcblxuICAgICAgICAgICAgICAgIC8vIEonYWpvdXRlIHVuZSBzZXVsZSBmb2lzIGxhIHZhcmlhYmxlIHF1ZSB2YSByZWNldm9pciBsZSBmb3JtdWxhaXJlXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YXJpYWJsZSBpcyBhbHJlYWR5IGluIGFycmF5XG4gICAgICAgICAgICAgICAgaWYgKGtleUV4aXN0cy5pbmRleE9mKGtleU5hbWUpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1trZXlOYW1lXTogXCJcIn0pO1xuICAgICAgICAgICAgICAgICAgICBrZXlFeGlzdHMucHVzaChrZXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlFeGlzdHNcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKGtleUV4aXN0cykpO1xuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyBUT0RPIHZvaXIgc2kgaWwgZmF1dCByZWxpcmUgbGVzIGZvcm1fdmFsdWUgZGFucyBjZSBjYXMgY2FyIGMnZXN0IHVuIHRhYmxlYXUgZXQgcGx1cyB1bmUgdmFyaWFibGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImZpZWxkX3BhbmVsXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQga2V5c0xpc3QgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIG9mIGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcykge1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gai5uYW1lO1xuICAgICAgICAgICAgICAgICAgICBrZXlzTGlzdC5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzTGlzdClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5TmFtZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGkubmFtZSAsW2kubmFtZV06IGtleXNMaXN0fSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gJ2ZpbGVfdXBsb2FkJyl7XG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZvcm1EYXRhOkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGtleU5hbWUsIFwidHlwZVwiOiBcImZpbGVcIn0pXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hcnJheUZpbGVzLnB1c2goe1wibm9tXCI6IGtleU5hbWUsIFwiZmlsZVwiOiBGaWxlfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlTdGVwcyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
