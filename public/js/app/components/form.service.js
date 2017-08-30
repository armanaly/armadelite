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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZm9ybS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFHbkQ7SUFFSSxxQkFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFFN0MsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQWEsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN0QyxvQkFBZSxHQUFHLENBQUMsQ0FBQztJQUoyQixDQUFDO0lBTWhELDBCQUFJLEdBQUo7UUFLSSxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsR0FBRyxDQUFDLENBQVUsVUFBdUIsRUFBdkIsS0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBdkIsY0FBdUIsRUFBdkIsSUFBdUIsQ0FBQztZQUFqQyxJQUFJLENBQUMsU0FBQTtZQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksaUJBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxpQkFBaUIsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLGlCQUFpQixDQUFDLENBQUMsQ0FBQztnQkFFNUYsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUk5QyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFDLE9BQU8sQ0FBQyxHQUFFLEVBQUUsS0FBQyxDQUFDLENBQUM7b0JBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVCLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFHN0IsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixHQUFHLENBQUMsQ0FBVSxVQUEyQixFQUEzQixLQUFBLENBQUMsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUEzQixjQUEyQixFQUEzQixJQUEyQixDQUFDO29CQUFyQyxJQUFJLENBQUMsU0FBQTtvQkFFTixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNyQixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBQyxPQUFPLENBQUMsR0FBRSxFQUFFLEtBQUMsQ0FBQyxDQUFBO29CQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO29CQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO2lCQUN2QjtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFFLEdBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFFLFFBQVEsS0FBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDekIsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO2dCQUc5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUE7WUFHMUQsQ0FBQztTQUNKO1FBS0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7O0lBRTdCLENBQUM7SUEvRFQ7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWdFYixrQkFBQztBQUFELENBL0RBLEFBK0RDLElBQUE7QUEvRFksbUJBQVcsY0ErRHZCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9mb3JtLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIFRoaXMgZmlsZSBpcyB0aGUgZm9ybSBvZiB0aGUgYXBwbGljYXRpb24uIEV2ZXJ5IHNpbmdsZSBkYXRhIHdpbGwgYmUgY3JlYXRlZCBoZXJlLiBUaGUgdmFyaWFibGVzIHdpbGwgYmUgY3JlYXRlZCBkeW5hbWljYWxseSB0aHJvdWdoIHRoZSBzdGVwLnNlcnZpY2UgY29uZmlnIGZpbGUuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xuaW1wb3J0IHtGaWxlfSBmcm9tIFwiZ3VscC10eXBlc2NyaXB0L3JlbGVhc2UvaW5wdXRcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2Upe31cbiAgICAvLyBJQ0kgSkUgVkFJUyBSQU1FTkVSIHRoaXMuX3N0ZXBTZXJ2aWNlIGV0IGRlIGzDoCBqZSBjcsOpw6llIMOgIGxhIHZvbMOpZSBsZXMgZG9ubsOpZXMgZGUgbW9uIGZvcm11bGFpcmUgZGUgY29uZmlnIGV0IGplIGxlIG1ldHMgZGFucyBsZXMgdmFyaWFibGUgZHUgc2VydmljZSBkZSBmb3JtdWxhaXJlIChmb3JtLnNlcnZpY2UudHMpXG4gICAgYXJyYXlTdGVwcyA9IFtdO1xuICAgIGFycmF5RmlsZXM6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgY3VycmVudF9zdGVwX2lkID0gMTtcblxuICAgIGluaXQoKXtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkxJU1Qgb2YgU1RFUFNcIik7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApO1xuICAgICAgICAvL3RoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzLnNvcnQoKTtcbiAgICAgICAgbGV0IGtleUV4aXN0cyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpLnN0ZXBfaWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coaS50eXBlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkubmFtZSk7XG4gICAgICAgICAgLy8gIGxldCBzdGVwX2lkID0gaS5zdGVwX2lkO1xuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSBcImNsaWNrX3NlbGVjdGlvblwiIHx8IGkudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJyB8fCBpLnR5cGUgPT0gXCJtdWx0aV9zZWxlY3Rpb25cIikge1xuXG4gICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBpLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xuXG4gICAgICAgICAgICAgICAgLy8gSidham91dGUgdW5lIHNldWxlIGZvaXMgbGEgdmFyaWFibGUgcXVlIHZhIHJlY2V2b2lyIGxlIGZvcm11bGFpcmVcbiAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIHZhcmlhYmxlIGlzIGFscmVhZHkgaW4gYXJyYXlcbiAgICAgICAgICAgICAgICBpZiAoa2V5RXhpc3RzLmluZGV4T2Yoa2V5TmFtZSkgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7W2tleU5hbWVdOiBcIlwifSk7XG4gICAgICAgICAgICAgICAgICAgIGtleUV4aXN0cy5wdXNoKGtleU5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImtleUV4aXN0c1wiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygoa2V5RXhpc3RzKSk7XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIC8vIFRPRE8gdm9pciBzaSBpbCBmYXV0IHJlbGlyZSBsZXMgZm9ybV92YWx1ZSBkYW5zIGNlIGNhcyBjYXIgYydlc3QgdW4gdGFibGVhdSBldCBwbHVzIHVuZSB2YXJpYWJsZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaS50eXBlID09IFwiZmllbGRfcGFuZWxcIikge1xuICAgICAgICAgICAgICAgIGxldCBrZXlzTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogb2YgaS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWVzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleU5hbWUgPSBqLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGtleXNMaXN0LnB1c2goe1trZXlOYW1lXTogXCJcIn0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGtleXNMaXN0KVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhrZXlOYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjogaS5uYW1lICxbaS5uYW1lXToga2V5c0xpc3R9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGkudHlwZSA9PSAnZmlsZV91cGxvYWQnKXtcbiAgICAgICAgICAgICAgICBsZXQga2V5TmFtZSA9IGkuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgZm9ybURhdGE6Rm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFycmF5U3RlcHMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJ0eXBlXCI6IFwiZmlsZVwifSlcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFycmF5RmlsZXMucHVzaCh7XCJub21cIjoga2V5TmFtZSwgXCJmaWxlXCI6IEZpbGV9KTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuXG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hcnJheVN0ZXBzKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
