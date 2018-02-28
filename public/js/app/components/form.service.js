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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsd0NBQTJDO0FBQzNDLHlEQUFtRDtBQUduRCxJQUFhLFdBQVcsR0FBeEI7SUFFSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUU3QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUtBLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBSTlDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztvQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUc3QixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFHMUQsQ0FBQztRQUNMLENBQUM7UUFLRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU3QixDQUFDO0NBQ1IsQ0FBQTtBQS9EWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR3lCLDBCQUFXO0dBRnBDLFdBQVcsQ0ErRHZCO0FBL0RZLGtDQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIFRoaXMgZmlsZSBpcyB0aGUgZm9ybSBvZiB0aGUgYXBwbGljYXRpb24uIEV2ZXJ5IHNpbmdsZSBkYXRhIHdpbGwgYmUgY3JlYXRlZCBoZXJlLiBUaGUgdmFyaWFibGVzIHdpbGwgYmUgY3JlYXRlZCBkeW5hbWljYWxseSB0aHJvdWdoIHRoZSBzdGVwLnNlcnZpY2UgY29uZmlnIGZpbGUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RmlsZX0gZnJvbSBcImd1bHAtdHlwZXNjcmlwdC9yZWxlYXNlL2lucHV0XCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2Upe31cclxuICAgIC8vIElDSSBKRSBWQUlTIFJBTUVORVIgdGhpcy5fc3RlcFNlcnZpY2UgZXQgZGUgbMOgIGplIGNyw6nDqWUgw6AgbGEgdm9sw6llIGxlcyBkb25uw6llcyBkZSBtb24gZm9ybXVsYWlyZSBkZSBjb25maWcgZXQgamUgbGUgbWV0cyBkYW5zIGxlcyB2YXJpYWJsZSBkdSBzZXJ2aWNlIGRlIGZvcm11bGFpcmUgKGZvcm0uc2VydmljZS50cylcclxuICAgIGFycmF5U3RlcHMgPSBbXTtcclxuICAgIGFycmF5RmlsZXM6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjdXJyZW50X3N0ZXBfaWQgPSAxO1xyXG5cclxuICAgIGluaXQoKXtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMSVNUIG9mIFNURVBTXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgICAgIC8vdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMuc29ydCgpO1xyXG4gICAgICAgIGxldCBrZXlFeGlzdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkuc3RlcF9pZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkudHlwZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkubmFtZSk7XHJcbiAgICAgICAgICAvLyAgbGV0IHN0ZXBfaWQgPSBpLnN0ZXBfaWQ7XHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJjbGlja19zZWxlY3Rpb25cIiB8fCBpLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbicgfHwgaS50eXBlID09IFwibXVsdGlfc2VsZWN0aW9uXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSidham91dGUgdW5lIHNldWxlIGZvaXMgbGEgdmFyaWFibGUgcXVlIHZhIHJlY2V2b2lyIGxlIGZvcm11bGFpcmVcclxuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFyaWFibGUgaXMgYWxyZWFkeSBpbiBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYgKGtleUV4aXN0cy5pbmRleE9mKGtleU5hbWUpID09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7W2tleU5hbWVdOiBcIlwifSk7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5RXhpc3RzLnB1c2goa2V5TmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUV4aXN0c1wiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChrZXlFeGlzdHMpKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9pciBzaSBpbCBmYXV0IHJlbGlyZSBsZXMgZm9ybV92YWx1ZSBkYW5zIGNlIGNhcyBjYXIgYydlc3QgdW4gdGFibGVhdSBldCBwbHVzIHVuZSB2YXJpYWJsZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiZmllbGRfcGFuZWxcIikge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXNMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqIG9mIGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlcykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGoubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlzTGlzdC5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleXNMaXN0KVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleU5hbWUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjogaS5uYW1lICxbaS5uYW1lXToga2V5c0xpc3R9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSAnZmlsZV91cGxvYWQnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZm9ybURhdGE6Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBrZXlOYW1lLCBcInR5cGVcIjogXCJmaWxlXCJ9KVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hcnJheUZpbGVzLnB1c2goe1wibm9tXCI6IGtleU5hbWUsIFwiZmlsZVwiOiBGaWxlfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5U3RlcHMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
