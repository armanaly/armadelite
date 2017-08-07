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
            if (i.type == "click_selection" || i.type == 'image_selection' || i.type == "multi_selection") {
                var keyName = i.configuration.form_value.name;
                if (!keyExists.includes(keyName)) {
                    this.arraySteps.push((_b = {}, _b[keyName] = "", _b));
                    keyExists.push(keyName);
                }
            }
            if (i.type == "field_panel") {
                var keysList = [];
                for (var _c = 0, _d = i.configuration.form_values; _c < _d.length; _c++) {
                    var j = _d[_c];
                    var keyName = j.name;
                    keysList.push((_e = {}, _e[keyName] = "", _e));
                }
                this.arraySteps.push((_f = { "nom": i.name }, _f[i.name] = keysList, _f));
            }
            if (i.type == 'file_upload') {
                var keyName = i.configuration.form_value.name;
                this.arraySteps.push({ "nom": keyName, "type": "file" });
            }
        }
        var _b, _e, _f;
    };
    FormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [step_service_1.StepService])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFHbkQ7SUFFSSxxQkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFN0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFHLENBQUMsQ0FBQztJQUoyQixDQUFDO0lBTWhELDBCQUFJLEdBQUo7UUFLSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLENBQVUsVUFBdUIsRUFBdkIsS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBdkIsY0FBdUIsRUFBdkIsSUFBdUIsQ0FBQztZQUFqQyxJQUFJLENBQUMsU0FBQTtZQUtOLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFFNUYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQSxDQUFDO29CQUM5QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRSxLQUFDLENBQUMsQ0FBQztvQkFDdEMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsQ0FBQztZQUtMLENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsR0FBRyxDQUFDLENBQVUsVUFBMkIsRUFBM0IsS0FBQSxDQUFDLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBM0IsY0FBMkIsRUFBM0IsSUFBMkIsQ0FBQztvQkFBckMsSUFBSSxDQUFDLFNBQUE7b0JBQ0YsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDckIsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQUMsT0FBTyxDQUFDLEdBQUUsRUFBRSxLQUFDLENBQUMsQ0FBQTtpQkFDckM7Z0JBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBRSxHQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRSxRQUFRLEtBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUM7WUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGFBQWEsQ0FBQyxDQUFBLENBQUM7Z0JBQ3pCLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztnQkFHOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFBO1lBRzFELENBQUM7U0FDSjs7SUFFRCxDQUFDO0lBdERUO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF1RGIsa0JBQUM7QUFBRCxDQXREQSxBQXNEQyxJQUFBO0FBdERZLG1CQUFXLGNBc0R2QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIFRoaXMgZmlsZSBpcyB0aGUgZm9ybSBvZiB0aGUgYXBwbGljYXRpb24uIEV2ZXJ5IHNpbmdsZSBkYXRhIHdpbGwgYmUgY3JlYXRlZCBoZXJlLiBUaGUgdmFyaWFibGVzIHdpbGwgYmUgY3JlYXRlZCBkeW5hbWljYWxseSB0aHJvdWdoIHRoZSBzdGVwLnNlcnZpY2UgY29uZmlnIGZpbGUuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7RmlsZX0gZnJvbSBcImd1bHAtdHlwZXNjcmlwdC9yZWxlYXNlL2lucHV0XCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2Upe31cclxuICAgIC8vIElDSSBKRSBWQUlTIFJBTUVORVIgdGhpcy5fc3RlcFNlcnZpY2UgZXQgZGUgbMOgIGplIGNyw6nDqWUgw6AgbGEgdm9sw6llIGxlcyBkb25uw6llcyBkZSBtb24gZm9ybXVsYWlyZSBkZSBjb25maWcgZXQgamUgbGUgbWV0cyBkYW5zIGxlcyB2YXJpYWJsZSBkdSBzZXJ2aWNlIGRlIGZvcm11bGFpcmUgKGZvcm0uc2VydmljZS50cylcclxuICAgIGFycmF5U3RlcHMgPSBbXTtcclxuICAgIGFycmF5RmlsZXM6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBjdXJyZW50X3N0ZXBfaWQgPSAxO1xyXG5cclxuICAgIGluaXQoKXtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJMSVNUIG9mIFNURVBTXCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApO1xyXG4gICAgICAgIC8vdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMuc29ydCgpO1xyXG4gICAgICAgIGxldCBrZXlFeGlzdHMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkuc3RlcF9pZCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkudHlwZSk7XHJcblxyXG4gICAgICAgICAgLy8gIGxldCBzdGVwX2lkID0gaS5zdGVwX2lkO1xyXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiY2xpY2tfc2VsZWN0aW9uXCIgfHwgaS50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nIHx8IGkudHlwZSA9PSBcIm11bHRpX3NlbGVjdGlvblwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEonYWpvdXRlIHVuZSBzZXVsZSBmb2lzIGxhIHZhcmlhYmxlIHF1aSB2YSByZWNldm9pciBsZSBmb3JtdWxhaXJlXHJcbiAgICAgICAgICAgICAgICBpZiAoIWtleUV4aXN0cy5pbmNsdWRlcyhrZXlOYW1lKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVN0ZXBzLnB1c2goe1trZXlOYW1lXTogXCJcIn0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleUV4aXN0cy5wdXNoKGtleU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIHZvaXIgc2kgaWwgZmF1dCByZWxpcmUgbGVzIGZvcm1fdmFsdWUgZGFucyBjZSBjYXMgY2FyIGMnZXN0IHVuIHRhYmxlYXUgZXQgcGx1cyB1bmUgdmFyaWFibGVcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImZpZWxkX3BhbmVsXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlzTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiBvZiBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBqLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXNMaXN0LnB1c2goe1trZXlOYW1lXTogXCJcIn0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjogaS5uYW1lICxbaS5uYW1lXToga2V5c0xpc3R9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSAnZmlsZV91cGxvYWQnKXtcclxuICAgICAgICAgICAgICAgIGxldCBrZXlOYW1lID0gaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgZm9ybURhdGE6Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlTdGVwcy5wdXNoKHtcIm5vbVwiOiBrZXlOYW1lLCBcInR5cGVcIjogXCJmaWxlXCJ9KVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5hcnJheUZpbGVzLnB1c2goe1wibm9tXCI6IGtleU5hbWUsIFwiZmlsZVwiOiBGaWxlfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcclxuICAgICAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
