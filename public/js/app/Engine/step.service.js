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
        this.step = [];
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
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].step_id);
                this.step.push(new stepModel_1.StepModel(data[i].step_id, data[i].type, data[i].name, data[i].configuration, data[i].master_name, data[i].master_type, []));
            }
            //this.step = objs;
            if (window.location.hash == '#/admin') {
                this.steps[0].master_type = 'admin';
            }
            console.log(this.step[0]);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0FBRUwsQ0FBQztBQXJFRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQW9FdkIsQ0FBQSIsImZpbGUiOiJFbmdpbmUvc3RlcC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFN0ZXBNb2RlbCB9IGZyb20gXCIuL3N0ZXBNb2RlbFwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGVwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKFxyXG5cclxuICAgICAgICBwcml2YXRlIF9odHRwOiBIdHRwXHJcbiAgICAgIClcclxuICAgIHt9XHJcblxyXG4gICAgZGF0YXM7XHJcbiAgICBzdGVwczogYW55O1xyXG4gICAgc3RlcDogU3RlcE1vZGVsW10gPSBbXTtcclxuICAgIC8vYXBwTmFtZSA9ICcnO1xyXG5cclxuICAgIGdldFN0ZXBzKGFwcE5hbWUpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdyk7XHJcbiAgICAgICAgLy9sZXQgYXBwTmFtZSA9IFwiYmFsbGV0XCI7XHJcbiAgICAgICAgLy9sZXQgYXBwTmFtZSA9IHRoaXMucm91dGUuc25hcHNob3QucXVlcnlQYXJhbXNbXCJhcHBcIl07XHJcbiAgICAgICAgY29uc29sZS5sb2coYXBwTmFtZSk7XHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ2FwcF9uYW1lPScgK2FwcE5hbWU7XHJcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3N0ZXA/JytxdWVyeTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cubG9jYXRpb24pXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwcyA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ialRlc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVtpXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXAucHVzaChuZXcgU3RlcE1vZGVsKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnN0ZXBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLmNvbmZpZ3VyYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFzdGVyX25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFzdGVyX3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgW10pKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhzdGVwKTtcclxuICAgICAgICAgICAgICAgICAgICAgLy9vYmpzLnB1c2goc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cob2Jqcyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgIC8vICBvYmpUZXN0LnB1c2goc3RlcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuc3RlcCA9IG9ianM7XHJcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggPT0gJyMvYWRtaW4nKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2FkbWluJ1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcFswXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcFtpXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmpUZXN0KTtcclxuICAgICAgICAgICAgIC8vICAgcmV0dXJuIG9ianM7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG59Il19
