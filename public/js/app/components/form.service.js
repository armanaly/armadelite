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
    __metadata('design:paramtypes', [step_service_1.StepService])
], FormService);
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFHbkQ7SUFFSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUU3QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUtBLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBSTlDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztvQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUc3QixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFHMUQsQ0FBQztRQUNMLENBQUM7UUFLRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU3QixDQUFDO0FBQ1QsQ0FBQztBQWhFRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQStEdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICBUaGlzIGZpbGUgaXMgdGhlIGZvcm0gb2YgdGhlIGFwcGxpY2F0aW9uLiBFdmVyeSBzaW5nbGUgZGF0YSB3aWxsIGJlIGNyZWF0ZWQgaGVyZS4gVGhlIHZhcmlhYmxlcyB3aWxsIGJlIGNyZWF0ZWQgZHluYW1pY2FsbHkgdGhyb3VnaCB0aGUgc3RlcC5zZXJ2aWNlIGNvbmZpZyBmaWxlLlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGV9IGZyb20gXCJndWxwLXR5cGVzY3JpcHQvcmVsZWFzZS9pbnB1dFwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XHJcbiAgICAvLyBJQ0kgSkUgVkFJUyBSQU1FTkVSIHRoaXMuX3N0ZXBTZXJ2aWNlIGV0IGRlIGzDoCBqZSBjcsOpw6llIMOgIGxhIHZvbMOpZSBsZXMgZG9ubsOpZXMgZGUgbW9uIGZvcm11bGFpcmUgZGUgY29uZmlnIGV0IGplIGxlIG1ldHMgZGFucyBsZXMgdmFyaWFibGUgZHUgc2VydmljZSBkZSBmb3JtdWxhaXJlIChmb3JtLnNlcnZpY2UudHMpXHJcbiAgICBhcnJheVN0ZXBzID0gW107XHJcbiAgICBhcnJheUZpbGVzOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcclxuXHJcbiAgICBpbml0KCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICAvL3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLnNvcnQoKTtcclxuICAgICAgICBsZXQga2V5RXhpc3RzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLnR5cGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLm5hbWUpO1xyXG4gICAgICAgICAgLy8gIGxldCBzdGVwX2lkID0gaS5zdGVwX2lkO1xyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiY2xpY2tfc2VsZWN0aW9uXCIgfHwgaS50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIHx8IGkudHlwZSA9PSBcIm11bHRpX3NlbGVjdGlvblwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEonYWpvdXRlIHVuZSBzZXVsZSBmb2lzIGxhIHZhcmlhYmxlIHF1ZSB2YSByZWNldm9pciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhcmlhYmxlIGlzIGFscmVhZHkgaW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmIChrZXlFeGlzdHMuaW5kZXhPZihrZXlOYW1lKSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1trZXlOYW1lXTogXCJcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUV4aXN0cy5wdXNoKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlFeGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoa2V5RXhpc3RzKSk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHZvaXIgc2kgaWwgZmF1dCByZWxpcmUgbGVzIGZvcm1fdmFsdWUgZGFucyBjZSBjYXMgY2FyIGMnZXN0IHVuIHRhYmxlYXUgZXQgcGx1cyB1bmUgdmFyaWFibGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImZpZWxkX3BhbmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBvZiBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5c0xpc3QucHVzaCh7W2tleU5hbWVdOiBcIlwifSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlOYW1lKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGkubmFtZSAsW2kubmFtZV06IGtleXNMaXN0fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gJ2ZpbGVfdXBsb2FkJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbGV0IGZvcm1EYXRhOkZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJ0eXBlXCI6IFwiZmlsZVwifSlcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXJyYXlGaWxlcy5wdXNoKHtcIm5vbVwiOiBrZXlOYW1lLCBcImZpbGVcIjogRmlsZX0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheVN0ZXBzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
