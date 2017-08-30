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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var stepModel_1 = require("./stepModel");
var global_1 = require("../global");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var StepService = (function () {
    function StepService(_http) {
        this._http = _http;
        this.step = new Array();
        this.steps = [];
    }
    StepService.prototype.getSteps = function (appName) {
        var _this = this;
        console.log(window);
        console.log(appName);
        var query = 'app_name=' + appName;
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'step?' + query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(function (response) {
            console.log(window.location);
            var data = response.json();
            _this.steps = response.json();
            var objs = [];
            var objTest = [];
            console.log("data");
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                _this.step[i] = (new stepModel_1.StepModel(data[i].step_id, data[i].type, data[i].name, data[i].configuration, data[i].master_name, data[i].master_type, data[i].conditions, []));
            }
            if (window.location.hash == '#/admin') {
                _this.steps[0].master_type = 'admin';
            }
            console.log(_this.steps);
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    StepService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], StepService);
    return StepService;
    var _a;
}());
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;base64,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LG1CQUFXLGNBK0N2QixDQUFBIiwiZmlsZSI6IkVuZ2luZS9zdGVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGVwTW9kZWwgfSBmcm9tIFwiLi9zdGVwTW9kZWxcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RlcFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG4gICAgLy9kYXRhcztcbiAgICBzdGVwID0gbmV3IEFycmF5KCk7XG4gICAgc3RlcHM6IFN0ZXBNb2RlbFtdID0gW107XG5cbiAgICBnZXRTdGVwcyhhcHBOYW1lKTogUHJvbWlzZTx2b2lkPntcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93KTtcbiAgICAgICAgY29uc29sZS5sb2coYXBwTmFtZSk7XG5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ2FwcF9uYW1lPScgK2FwcE5hbWU7XG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzdGVwPycrcXVlcnk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbilcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmpUZXN0ID0gW107XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RlcHMpO1xuICAgICAgICAgICAgICAgIC8vIFZJUkUgU1RFUCBDQVIgSU5VVElMRVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhW2ldLnN0ZXBfaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBbaV0gPSAobmV3IFN0ZXBNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uc3RlcF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubWFzdGVyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm1hc3Rlcl90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jb25kaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBbXSkpO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjL2FkbWluJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPSAnYWRtaW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcHMpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
