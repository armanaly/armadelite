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
        this.language = '';
        this.languages = [];
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
            _this.language = response.json()[0].default_language;
            _this.languages = response.json()[0].languages;
            _this.template = response.json()[0].design;
            var objs = [];
            var objTest = [];
            _this.steps.splice(0, 1);
            for (var i = 0; i < _this.steps.length; i++) {
                _this.step[i] = (new stepModel_1.StepModel(_this.steps[i].step_id, _this.steps[i].type, _this.steps[i].name, _this.steps[i].logo_url, _this.steps[i].configuration, _this.steps[i].master_name, _this.steps[i].master_type, _this.steps[i].conditions, []));
            }
            if (window.location.hash == '#/admin') {
                _this.steps[0].master_type = 'admin';
            }
            console.log(_this.steps);
            console.log(_this.language);
            console.log(_this.languages);
            console.log(_this.template);
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

//# sourceMappingURL=data:application/json;base64,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USxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUE7WUFDdkMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQzthQUNHLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDakQsQ0FBQztJQXJETDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBc0RiLGtCQUFDO0FBQUQsQ0FyREEsQUFxREMsSUFBQTtBQXJEWSxtQkFBVyxjQXFEdkIsQ0FBQSIsImZpbGUiOiJFbmdpbmUvc3RlcC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cCwgSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3RlcE1vZGVsIH0gZnJvbSBcIi4vc3RlcE1vZGVsXCI7XG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7QWN0aXZhdGVkUm91dGUsIFJvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0ZXBTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuICAgIC8vZGF0YXM7XG4gICAgc3RlcCA9IG5ldyBBcnJheSgpO1xuICAgIHN0ZXBzOiBTdGVwTW9kZWxbXSA9IFtdO1xuICAgIGxhbmd1YWdlID0gJyc7XG4gICAgbGFuZ3VhZ2VzID0gW107XG4gICAgdGVtcGxhdGU6ICcnO1xuICAgIGdldFN0ZXBzKGFwcE5hbWUpOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcHBOYW1lKTtcblxuICAgICAgICB2YXIgcXVlcnkgPSAnYXBwX25hbWU9JyArYXBwTmFtZTtcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3N0ZXA/JytxdWVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IHJlc3BvbnNlLmpzb24oKVswXS5kZWZhdWx0X2xhbmd1YWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gcmVzcG9uc2UuanNvbigpWzBdLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVzcG9uc2UuanNvbigpWzBdLmRlc2lnbjtcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqVGVzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsMSk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbaV0uc3RlcF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcFtpXSA9IChuZXcgU3RlcE1vZGVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS5zdGVwX2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS5sb2dvX3VybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0uY29uZmlndXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0ubWFzdGVyX25hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzW2ldLm1hc3Rlcl90eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS5jb25kaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICBbXSkpO1xuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjL2FkbWluJyl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPSAnYWRtaW4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcHMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGFuZ3VhZ2VzKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnRlbXBsYXRlKVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
