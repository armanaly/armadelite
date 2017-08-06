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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
const stepModel_1 = require("./stepModel");
const global_1 = require("../global");
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
let StepService = class StepService {
    constructor(_http) {
        this._http = _http;
        this.step = new Array();
        this.steps = [];
    }
    //appName = '';
    getSteps(appName) {
        console.log(window);
        //let appName = "ballet";
        //let appName = this.route.snapshot.queryParams["app"];
        console.log(appName);
        var query = 'app_name=' + appName;
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'step?' + query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
            console.log(window.location);
            console.log(response.json());
            const data = response.json();
            this.steps = response.json();
            let objs = [];
            let objTest = [];
            console.log("data");
            console.log(data);
            // console.log(this.steps);
            // VIRE STEP CAR INUTILE
            for (let i = 0; i < data.length; i++) {
                // console.log(data[i].step_id);
                this.step[i] = (new stepModel_1.StepModel(data[i].step_id, data[i].type, data[i].name, data[i].configuration, data[i].master_name, data[i].master_type, data[i].conditions, []));
            }
            //objs.push(step);
            //     console.log(objs);
            //   //  objTest.push(step);
            //this.step = objs;
            if (window.location.hash == '#/admin') {
                this.steps[0].master_type = 'admin';
            }
            console.log(this.steps);
            //    console.log(this.step);
            // console.log(this.step[0]);
            // for (let i = 0; i < this.step.length; i++) {
            //     console.log(this.step[i].step_id);
            // }
            //console.log(objTest);
            //   return objs;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
StepService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], StepService);
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;base64,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QUM3QiwrQ0FBK0M7WUFDL0MseUNBQXlDO1lBQ3pDLElBQUk7WUFHSix1QkFBdUI7WUFDMUIsaUJBQWlCO1FBRXRCLENBQUMsQ0FBQzthQUNHLEtBQUssQ0FBQyxLQUFLLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0FBRUwsQ0FBQztBQTdFRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQTRFdkIsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL0VuZ2luZS9zdGVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RlcE1vZGVsIH0gZnJvbSBcIi4vc3RlcE1vZGVsXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0ZXBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoXHJcblxyXG4gICAgICAgIHByaXZhdGUgX2h0dHA6IEh0dHBcclxuICAgICAgKVxyXG4gICAge31cclxuXHJcbiAgICBkYXRhcztcclxuICAgIHN0ZXAgPSBuZXcgQXJyYXkoKTtcclxuICAgIGVzc2FpO1xyXG4gICAgc3RlcHM6IFN0ZXBNb2RlbFtdID0gW107XHJcbiAgICAvL2FwcE5hbWUgPSAnJztcclxuXHJcbiAgICBnZXRTdGVwcyhhcHBOYW1lKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xyXG4gICAgICAgIC8vbGV0IGFwcE5hbWUgPSBcImJhbGxldFwiO1xyXG4gICAgICAgIC8vbGV0IGFwcE5hbWUgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnF1ZXJ5UGFyYW1zW1wiYXBwXCJdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFwcE5hbWUpO1xyXG4gICAgICAgIHZhciBxdWVyeSA9ICdhcHBfbmFtZT0nICthcHBOYW1lO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzdGVwPycrcXVlcnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpUZXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RlcHMpO1xyXG4gICAgICAgICAgICAgICAgLy8gVklSRSBTVEVQIENBUiBJTlVUSUxFXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhW2ldLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcFtpXSA9IChuZXcgU3RlcE1vZGVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnN0ZXBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFzdGVyX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFzdGVyX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY29uZGl0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBbXSkpO1xyXG4gICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIC8vb2Jqcy5wdXNoKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG9ianMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAvLyAgb2JqVGVzdC5wdXNoKHN0ZXApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zdGVwID0gb2JqcztcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnIy9hZG1pbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPSAnYWRtaW4nXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcHMpO1xyXG5cclxuXHJcbiAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2codGhpcy5zdGVwKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RlcFswXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcFtpXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmpUZXN0KTtcclxuICAgICAgICAgICAgIC8vICAgcmV0dXJuIG9ianM7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
