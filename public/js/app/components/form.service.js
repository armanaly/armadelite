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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsK0JBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFHbkQ7SUFFSSxZQUFvQixZQUF5QjtRQUF6QixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUU3QyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ3RDLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO0lBSjJCLENBQUM7SUFNaEQsSUFBSTtRQUtBLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNuQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFcEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUU1RixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7Z0JBSTlDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUNsQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQztvQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUc3QixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztvQkFFeEMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsQ0FBQTtvQkFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtvQkFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDeEIsQ0FBQztnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFHMUQsQ0FBQztRQUNMLENBQUM7UUFLRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUU3QixDQUFDO0FBQ1QsQ0FBQztBQWhFRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQStEdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2Zvcm0uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgVGhpcyBmaWxlIGlzIHRoZSBmb3JtIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXZlcnkgc2luZ2xlIGRhdGEgd2lsbCBiZSBjcmVhdGVkIGhlcmUuIFRoZSB2YXJpYWJsZXMgd2lsbCBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHRocm91Z2ggdGhlIHN0ZXAuc2VydmljZSBjb25maWcgZmlsZS5cbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge0ZpbGV9IGZyb20gXCJndWxwLXR5cGVzY3JpcHQvcmVsZWFzZS9pbnB1dFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSl7fVxuICAgIC8vIElDSSBKRSBWQUlTIFJBTUVORVIgdGhpcy5fc3RlcFNlcnZpY2UgZXQgZGUgbMOgIGplIGNyw6nDqWUgw6AgbGEgdm9sw6llIGxlcyBkb25uw6llcyBkZSBtb24gZm9ybXVsYWlyZSBkZSBjb25maWcgZXQgamUgbGUgbWV0cyBkYW5zIGxlcyB2YXJpYWJsZSBkdSBzZXJ2aWNlIGRlIGZvcm11bGFpcmUgKGZvcm0uc2VydmljZS50cylcbiAgICBhcnJheVN0ZXBzID0gW107XG4gICAgYXJyYXlGaWxlczogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBjdXJyZW50X3N0ZXBfaWQgPSAxO1xuXG4gICAgaW5pdCgpe1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTElTVCBvZiBTVEVQU1wiKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCk7XG4gICAgICAgIC8vdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMuc29ydCgpO1xuICAgICAgICBsZXQga2V5RXhpc3RzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkuc3RlcF9pZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLnR5cGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaS5uYW1lKTtcbiAgICAgICAgICAvLyAgbGV0IHN0ZXBfaWQgPSBpLnN0ZXBfaWQ7XG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiY2xpY2tfc2VsZWN0aW9uXCIgfHwgaS50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIHx8IGkudHlwZSA9PSBcIm11bHRpX3NlbGVjdGlvblwiKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAvLyBKJ2Fqb3V0ZSB1bmUgc2V1bGUgZm9pcyBsYSB2YXJpYWJsZSBxdWUgdmEgcmVjZXZvaXIgbGUgZm9ybXVsYWlyZVxuICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgdmFyaWFibGUgaXMgYWxyZWFkeSBpbiBhcnJheVxuICAgICAgICAgICAgICAgIGlmIChrZXlFeGlzdHMuaW5kZXhPZihrZXlOYW1lKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KTtcbiAgICAgICAgICAgICAgICAgICAga2V5RXhpc3RzLnB1c2goa2V5TmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5RXhpc3RzXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKChrZXlFeGlzdHMpKTtcbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgLy8gVE9ETyB2b2lyIHNpIGlsIGZhdXQgcmVsaXJlIGxlcyBmb3JtX3ZhbHVlIGRhbnMgY2UgY2FzIGNhciBjJ2VzdCB1biB0YWJsZWF1IGV0IHBsdXMgdW5lIHZhcmlhYmxlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJmaWVsZF9wYW5lbFwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGtleXNMaXN0ID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBvZiBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMpIHtcblxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGoubmFtZTtcbiAgICAgICAgICAgICAgICAgICAga2V5c0xpc3QucHVzaCh7W2tleU5hbWVdOiBcIlwifSlcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5c0xpc3QpXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleU5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBpLm5hbWUgLFtpLm5hbWVdOiBrZXlzTGlzdH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaS50eXBlID09ICdmaWxlX3VwbG9hZCcpe1xuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBmb3JtRGF0YTpGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBrZXlOYW1lLCBcInR5cGVcIjogXCJmaWxlXCJ9KVxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYXJyYXlGaWxlcy5wdXNoKHtcIm5vbVwiOiBrZXlOYW1lLCBcImZpbGVcIjogRmlsZX0pO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG5cblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5U3RlcHMpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
