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
const step_service_1 = require("./step.service");
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
                if (keyExists.indexOf(keyName) == -1) {
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
    __metadata("design:paramtypes", [step_service_1.StepService])
], FormService);
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSx3Q0FBMkM7QUFDM0MsaURBQTJDO0FBRzNDLElBQWEsV0FBVyxHQUF4QjtJQUVJLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBRTdDLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFhLElBQUksUUFBUSxFQUFFLENBQUM7UUFDdEMsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFKMkIsQ0FBQztJQU1oRCxJQUFJO1FBS0EsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUVwQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBRTVGLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFJOUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7b0JBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO29CQUN0QyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixDQUFDO1lBSUwsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBRXhDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3JCLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUE7Z0JBR2xDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFBO1lBQzFELENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUFqRFksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUd5QiwwQkFBVztHQUZwQyxXQUFXLENBaUR2QjtBQWpEWSxrQ0FBVyIsImZpbGUiOiJFbmdpbmUvZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIFRoaXMgZmlsZSBpcyB0aGUgZm9ybSBvZiB0aGUgYXBwbGljYXRpb24uIEV2ZXJ5IHNpbmdsZSBkYXRhIHdpbGwgYmUgY3JlYXRlZCBoZXJlLiBUaGUgdmFyaWFibGVzIHdpbGwgYmUgY3JlYXRlZCBkeW5hbWljYWxseSB0aHJvdWdoIHRoZSBzdGVwLnNlcnZpY2UgY29uZmlnIGZpbGUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0ZpbGV9IGZyb20gXCJndWxwLXR5cGVzY3JpcHQvcmVsZWFzZS9pbnB1dFwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKXt9XHJcbiAgICAvLyBJQ0kgSkUgVkFJUyBSQU1FTkVSIHRoaXMuX3N0ZXBTZXJ2aWNlIGV0IGRlIGzDoCBqZSBjcsOpw6llIMOgIGxhIHZvbMOpZSBsZXMgZG9ubsOpZXMgZGUgbW9uIGZvcm11bGFpcmUgZGUgY29uZmlnIGV0IGplIGxlIG1ldHMgZGFucyBsZXMgdmFyaWFibGUgZHUgc2VydmljZSBkZSBmb3JtdWxhaXJlIChmb3JtLnNlcnZpY2UudHMpXHJcbiAgICBhcnJheVN0ZXBzID0gW107XHJcbiAgICBhcnJheUZpbGVzOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcclxuXHJcbiAgICBpbml0KCl7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5zdGVwKTtcclxuICAgICAgICAvL3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLnNvcnQoKTtcclxuICAgICAgICBsZXQga2V5RXhpc3RzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLl9zdGVwU2VydmljZS5zdGVwcykge1xyXG4gICAgICAgICAgLy8gIGxldCBzdGVwX2lkID0gaS5zdGVwX2lkO1xyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiY2xpY2tfc2VsZWN0aW9uXCIgfHwgaS50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIHx8IGkudHlwZSA9PSBcIm11bHRpX3NlbGVjdGlvblwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEonYWpvdXRlIHVuZSBzZXVsZSBmb2lzIGxhIHZhcmlhYmxlIHF1ZSB2YSByZWNldm9pciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhcmlhYmxlIGlzIGFscmVhZHkgaW4gYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmIChrZXlFeGlzdHMuaW5kZXhPZihrZXlOYW1lKSA9PSAtMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1trZXlOYW1lXTogXCJcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUV4aXN0cy5wdXNoKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJrZXlFeGlzdHNcIik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygoa2V5RXhpc3RzKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHZvaXIgc2kgaWwgZmF1dCByZWxpcmUgbGVzIGZvcm1fdmFsdWUgZGFucyBjZSBjYXMgY2FyIGMnZXN0IHVuIHRhYmxlYXUgZXQgcGx1cyB1bmUgdmFyaWFibGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImZpZWxkX3BhbmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBvZiBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5c0xpc3QucHVzaCh7W2tleU5hbWVdOiBcIlwifSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXlzTGlzdClcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhrZXlOYW1lKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGkubmFtZSAsW2kubmFtZV06IGtleXNMaXN0fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gJ2ZpbGVfdXBsb2FkJyl7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJ0eXBlXCI6IFwiZmlsZVwifSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
