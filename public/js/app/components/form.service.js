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
        this.arraySteps = [];
        this.arrayFiles = new FormData();
        this.current_step_id = 1;
    }
    init() {
        let keyExists = [];
        for (let i of this._stepService.steps) {
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {
                let keyName = i.configuration.form_value.name;
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
                this.arraySteps.push({ "nom": keyName, "type": "file" });
            }
        }
    }
};
FormService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [step_service_1.StepService])
], FormService);
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFHbkQ7SUFFSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUU3QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUtBLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFLcEMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBRzlDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO29CQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixDQUFDO1lBS0wsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7Z0JBQ3RDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFHOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFBO1lBRzFELENBQUM7UUFDTCxDQUFDO0lBRUQsQ0FBQztBQUNULENBQUM7QUF2REQ7SUFBQyxpQkFBVSxFQUFFOztlQUFBO0FBQ0EsbUJBQVcsY0FzRHZCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhpcyBmaWxlIGlzIHRoZSBmb3JtIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXZlcnkgc2luZ2xlIGRhdGEgd2lsbCBiZSBjcmVhdGVkIGhlcmUuIFRoZSB2YXJpYWJsZXMgd2lsbCBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHRocm91Z2ggdGhlIHN0ZXAuc2VydmljZSBjb25maWcgZmlsZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlfSBmcm9tIFwiZ3VscC10eXBlc2NyaXB0L3JlbGVhc2UvaW5wdXRcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSl7fVxyXG4gICAgLy8gSUNJIEpFIFZBSVMgUkFNRU5FUiB0aGlzLl9zdGVwU2VydmljZSBldCBkZSBsw6AgamUgY3LDqcOpZSDDoCBsYSB2b2zDqWUgbGVzIGRvbm7DqWVzIGRlIG1vbiBmb3JtdWxhaXJlIGRlIGNvbmZpZyBldCBqZSBsZSBtZXRzIGRhbnMgbGVzIHZhcmlhYmxlIGR1IHNlcnZpY2UgZGUgZm9ybXVsYWlyZSAoZm9ybS5zZXJ2aWNlLnRzKVxyXG4gICAgYXJyYXlTdGVwcyA9IFtdO1xyXG4gICAgYXJyYXlGaWxlczogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGN1cnJlbnRfc3RlcF9pZCA9IDE7XHJcblxyXG4gICAgaW5pdCgpe1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxJU1Qgb2YgU1RFUFNcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAgICAgLy90aGlzLl9zdGVwU2VydmljZS5zdGVwcy5zb3J0KCk7XHJcbiAgICAgICAgbGV0IGtleUV4aXN0cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaS50eXBlKTtcclxuXHJcbiAgICAgICAgICAvLyAgbGV0IHN0ZXBfaWQgPSBpLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJjbGlja19zZWxlY3Rpb25cIiB8fCBpLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicgfHwgaS50eXBlID09IFwibXVsdGlfc2VsZWN0aW9uXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSidham91dGUgdW5lIHNldWxlIGZvaXMgbGEgdmFyaWFibGUgcXVpIHZhIHJlY2V2b2lyIGxlIGZvcm11bGFpcmVcclxuICAgICAgICAgICAgICAgIGlmICgha2V5RXhpc3RzLmluY2x1ZGVzKGtleU5hbWUpKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7W2tleU5hbWVdOiBcIlwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RXhpc3RzLnB1c2goa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9pciBzaSBpbCBmYXV0IHJlbGlyZSBsZXMgZm9ybV92YWx1ZSBkYW5zIGNlIGNhcyBjYXIgYydlc3QgdW4gdGFibGVhdSBldCBwbHVzIHVuZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiZmllbGRfcGFuZWxcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIG9mIGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGoubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5c0xpc3QucHVzaCh7W2tleU5hbWVdOiBcIlwifSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBpLm5hbWUgLFtpLm5hbWVdOiBrZXlzTGlzdH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09ICdmaWxlX3VwbG9hZCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBmb3JtRGF0YTpGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGtleU5hbWUsIFwidHlwZVwiOiBcImZpbGVcIn0pXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFycmF5RmlsZXMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
