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
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var global_1 = require("../global");
var step_service_1 = require("./step.service");
var form_service_1 = require("../components/form.service");
var MailService = (function () {
    function MailService(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    MailService.prototype.sendMail = function (mail_id, form_id) {
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'send_mail?' + 'mail_id=' + mail_id + '&form_id=' + form_id;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .map(function (mailState) { return mailState; })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    MailService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, form_service_1.FormService, step_service_1.StepService])
    ], MailService);
    return MailService;
    var _a;
}());
exports.MailService = MailService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9tYWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx1QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsNkJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFJdkQ7SUFFSSxxQkFBb0IsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFDckcsQ0FBQztJQUVMLDhCQUFRLEdBQVIsVUFBUyxPQUFPLEVBQUUsT0FBTztRQUNyQixJQUFJLFdBQVcsR0FBSSx1QkFBYyxDQUFDLFFBQVEsR0FBQyxZQUFZLEdBQUMsVUFBVSxHQUFDLE9BQU8sR0FBQyxXQUFXLEdBQUMsT0FBTyxDQUFDO1FBQy9GLElBQUksT0FBTyxHQUFFLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQzdCLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSyxNQUFNLENBQUMsU0FBUyxDQUFBLENBQUEsQ0FBQyxDQUFDO2FBQ3BDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7SUFDakQsQ0FBQztJQWREO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFnQmIsa0JBQUM7O0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxtQkFBVyxjQWN2QixDQUFBIiwiZmlsZSI6IkVuZ2luZS9tYWlsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgTWFpbFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7XHJcbiAgICB9XHJcblxyXG5zZW5kTWFpbChtYWlsX2lkLCBmb3JtX2lkKXtcclxuICAgIGxldCBjb21wbGV0ZVVybCA9ICBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnc2VuZF9tYWlsPycrJ21haWxfaWQ9JyttYWlsX2lkKycmZm9ybV9pZD0nK2Zvcm1faWQ7XHJcbiAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAubWFwKG1haWxTdGF0ZSA9PiB7cmV0dXJuIG1haWxTdGF0ZX0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxufVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
