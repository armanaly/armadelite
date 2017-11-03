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
        this.language = 'en';
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
            _this.steps = response.json();
            var objs = [];
            var objTest = [];
            for (var i = 0; i < _this.steps.length; i++) {
                _this.step[i] = (new stepModel_1.StepModel(_this.steps[i].step_id, _this.steps[i].type, _this.steps[i].name, _this.steps[i].logo_url, _this.steps[i].configuration, _this.steps[i].master_name, _this.steps[i].master_type, _this.steps[i].conditions, []));
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
        __metadata('design:paramtypes', [http_1.Http])
    ], StepService);
    return StepService;
}());
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;base64,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QUFBRCxDQTdDQSxBQTZDQyxJQUFBO0FBN0NZLG1CQUFXLGNBNkN2QixDQUFBIiwiZmlsZSI6IkVuZ2luZS9zdGVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGVwTW9kZWwgfSBmcm9tIFwiLi9zdGVwTW9kZWxcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbmltcG9ydCAncnhqcy9SeCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RlcFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG4gICAgLy9kYXRhcztcbiAgICBzdGVwID0gbmV3IEFycmF5KCk7XG4gICAgc3RlcHM6IFN0ZXBNb2RlbFtdID0gW107XG4gICAgbGFuZ3VhZ2UgPSAnZW4nO1xuICAgIGdldFN0ZXBzKGFwcE5hbWUpOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcHBOYW1lKTtcblxuICAgICAgICB2YXIgcXVlcnkgPSAnYXBwX25hbWU9JyArYXBwTmFtZTtcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3N0ZXA/JytxdWVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9ialRlc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhW2ldLnN0ZXBfaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBbaV0gPSAobmV3IFN0ZXBNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0uc3RlcF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0ubG9nb191cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzW2ldLm1hc3Rlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS5tYXN0ZXJfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0uY29uZGl0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgW10pKTtcbiAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnIy9hZG1pbicpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2FkbWluJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBzKTtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
