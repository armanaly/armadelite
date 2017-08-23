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
var core_1 = require("@angular/core");
var step_service_1 = require("../Engine/step.service");
var FormService = (function () {
    function FormService(_stepService) {
        this._stepService = _stepService;
        this.arraySteps = [];
        this.arrayFiles = new FormData();
        this.current_step_id = 1;
    }
    FormService.prototype.init = function () {
        var keyExists = [];
        for (var _i = 0, _a = this._stepService.steps; _i < _a.length; _i++) {
            var i = _a[_i];
            console.log(i.step_id);
            console.log(i.type);
            console.log(i.name);
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {
                var keyName = i.configuration.form_value.name;
                if (keyExists.indexOf(keyName) == -1) {
                    this.arraySteps.push((_b = {}, _b[keyName] = "", _b));
                    keyExists.push(keyName);
                }
                console.log("keyExists");
                console.log((keyExists));
            }
            if (i.type == "field_panel") {
                var keysList = [];
                for (var _c = 0, _d = i.configuration.form_values; _c < _d.length; _c++) {
                    var j = _d[_c];
                    var keyName = j.name;
                    keysList.push((_e = {}, _e[keyName] = "", _e));
                    console.log(keysList);
                    console.log(keyName);
                }
                this.arraySteps.push((_f = { "nom": i.name }, _f[i.name] = keysList, _f));
            }
            if (i.type == 'file_upload') {
                var keyName = i.configuration.form_value.name;
                this.arraySteps.push({ "nom": keyName, "type": "file" });
            }
        }
        console.log(this.arraySteps);
        var _b, _e, _f;
    };
    FormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [step_service_1.StepService])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFHbkQ7SUFFSSxxQkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFN0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFHLENBQUMsQ0FBQztJQUoyQixDQUFDO0lBTWhELDBCQUFJLEdBQUo7UUFLSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLENBQVUsVUFBdUIsRUFBdkIsS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBdkIsY0FBdUIsRUFBdkIsSUFBdUIsQ0FBQztZQUFqQyxJQUFJLENBQUMsU0FBQTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFFNUYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUk5QyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFDLE9BQU8sQ0FBQyxHQUFFLEVBQUUsS0FBQyxDQUFDLENBQUM7b0JBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFHN0IsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsQ0FBVSxVQUEyQixFQUEzQixLQUFBLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUEzQixjQUEyQixFQUEzQixJQUEyQixDQUFDO29CQUFyQyxJQUFJLENBQUMsU0FBQTtvQkFFTixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBQyxPQUFPLENBQUMsR0FBRSxFQUFFLEtBQUMsQ0FBQyxDQUFBO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUN2QjtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFFLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFFLFFBQVEsS0FBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFHMUQsQ0FBQztTQUNKO1FBS0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBRTdCLENBQUM7SUEvRFQ7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWdFYixrQkFBQztBQUFELENBL0RBLEFBK0RDLElBQUE7QUEvRFksbUJBQVcsY0ErRHZCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhpcyBmaWxlIGlzIHRoZSBmb3JtIG9mIHRoZSBhcHBsaWNhdGlvbi4gRXZlcnkgc2luZ2xlIGRhdGEgd2lsbCBiZSBjcmVhdGVkIGhlcmUuIFRoZSB2YXJpYWJsZXMgd2lsbCBiZSBjcmVhdGVkIGR5bmFtaWNhbGx5IHRocm91Z2ggdGhlIHN0ZXAuc2VydmljZSBjb25maWcgZmlsZS5cclxuICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGaWxlfSBmcm9tIFwiZ3VscC10eXBlc2NyaXB0L3JlbGVhc2UvaW5wdXRcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSl7fVxyXG4gICAgLy8gSUNJIEpFIFZBSVMgUkFNRU5FUiB0aGlzLl9zdGVwU2VydmljZSBldCBkZSBsw6AgamUgY3LDqcOpZSDDoCBsYSB2b2zDqWUgbGVzIGRvbm7DqWVzIGRlIG1vbiBmb3JtdWxhaXJlIGRlIGNvbmZpZyBldCBqZSBsZSBtZXRzIGRhbnMgbGVzIHZhcmlhYmxlIGR1IHNlcnZpY2UgZGUgZm9ybXVsYWlyZSAoZm9ybS5zZXJ2aWNlLnRzKVxyXG4gICAgYXJyYXlTdGVwcyA9IFtdO1xyXG4gICAgYXJyYXlGaWxlczogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGN1cnJlbnRfc3RlcF9pZCA9IDE7XHJcblxyXG4gICAgaW5pdCgpe1xyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxJU1Qgb2YgU1RFUFNcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2Uuc3RlcCk7XHJcbiAgICAgICAgLy90aGlzLl9zdGVwU2VydmljZS5zdGVwcy5zb3J0KCk7XHJcbiAgICAgICAgbGV0IGtleUV4aXN0cyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaS50eXBlKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaS5uYW1lKTtcclxuICAgICAgICAgIC8vICBsZXQgc3RlcF9pZCA9IGkuc3RlcF9pZDtcclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImNsaWNrX3NlbGVjdGlvblwiIHx8IGkudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyB8fCBpLnR5cGUgPT0gXCJtdWx0aV9zZWxlY3Rpb25cIikge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBKJ2Fqb3V0ZSB1bmUgc2V1bGUgZm9pcyBsYSB2YXJpYWJsZSBxdWUgdmEgcmVjZXZvaXIgbGUgZm9ybXVsYWlyZVxyXG4gICAgICAgICAgICAgICAgLy9jaGVjayBpZiB2YXJpYWJsZSBpcyBhbHJlYWR5IGluIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5RXhpc3RzLmluZGV4T2Yoa2V5TmFtZSkgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtba2V5TmFtZV06IFwiXCJ9KTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlFeGlzdHMucHVzaChrZXlOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2V5RXhpc3RzXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coKGtleUV4aXN0cykpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyB2b2lyIHNpIGlsIGZhdXQgcmVsaXJlIGxlcyBmb3JtX3ZhbHVlIGRhbnMgY2UgY2FzIGNhciBjJ2VzdCB1biB0YWJsZWF1IGV0IHBsdXMgdW5lIHZhcmlhYmxlXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpLnR5cGUgPT0gXCJmaWVsZF9wYW5lbFwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGogb2YgaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gai5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleXNMaXN0LnB1c2goe1trZXlOYW1lXTogXCJcIn0pXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5c0xpc3QpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coa2V5TmFtZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBpLm5hbWUgLFtpLm5hbWVdOiBrZXlzTGlzdH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09ICdmaWxlX3VwbG9hZCcpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGxldCBmb3JtRGF0YTpGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1wibm9tXCI6IGtleU5hbWUsIFwidHlwZVwiOiBcImZpbGVcIn0pXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFycmF5RmlsZXMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
