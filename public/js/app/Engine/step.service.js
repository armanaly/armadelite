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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUM3QiwrQ0FBK0M7WUFDL0MseUNBQXlDO1lBQ3pDLElBQUk7WUFHSix1QkFBdUI7WUFDMUIsaUJBQWlCO1FBRXRCLENBQUMsQ0FBQzthQUNHLEtBQUssQ0FBQyxLQUFLLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0FBRUwsQ0FBQztBQTdFRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQTRFdkIsQ0FBQSIsImZpbGUiOiJFbmdpbmUvc3RlcC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0ZXBNb2RlbCB9IGZyb20gXCIuL3N0ZXBNb2RlbFwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGVwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG5cclxuICAgICAgICBwcml2YXRlIF9odHRwOiBIdHRwXHJcbiAgICAgIClcclxuICAgIHt9XHJcblxyXG4gICAgZGF0YXM7XHJcbiAgICBzdGVwID0gbmV3IEFycmF5KCk7XHJcbiAgICBlc3NhaTtcclxuICAgIHN0ZXBzOiBTdGVwTW9kZWxbXSA9IFtdO1xyXG4gICAgLy9hcHBOYW1lID0gJyc7XHJcblxyXG4gICAgZ2V0U3RlcHMoYXBwTmFtZSk6IFByb21pc2U8dm9pZD57XHJcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93KTtcclxuICAgICAgICAvL2xldCBhcHBOYW1lID0gXCJiYWxsZXRcIjtcclxuICAgICAgICAvL2xldCBhcHBOYW1lID0gdGhpcy5yb3V0ZS5zbmFwc2hvdC5xdWVyeVBhcmFtc1tcImFwcFwiXTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcHBOYW1lKTtcclxuICAgICAgICB2YXIgcXVlcnkgPSAnYXBwX25hbWU9JyArYXBwTmFtZTtcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnc3RlcD8nK3F1ZXJ5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqVGVzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0ZXBzKTtcclxuICAgICAgICAgICAgICAgIC8vIFZJUkUgU1RFUCBDQVIgSU5VVElMRVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtpXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBbaV0gPSAobmV3IFN0ZXBNb2RlbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5zdGVwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm1hc3Rlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm1hc3Rlcl90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNvbmRpdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgW10pKTtcclxuICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAvL29ianMucHVzaChzdGVwKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhvYmpzKTtcclxuICAgICAgICAgICAgICAgIC8vICAgLy8gIG9ialRlc3QucHVzaChzdGVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc3RlcCA9IG9ianM7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT0gJyMvYWRtaW4nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2FkbWluJ1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBzKTtcclxuXHJcblxyXG4gICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0ZXBbMF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ZXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBbaV0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cob2JqVGVzdCk7XHJcbiAgICAgICAgICAgICAvLyAgIHJldHVybiBvYmpzO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
