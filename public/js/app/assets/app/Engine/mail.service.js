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
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
const global_1 = require("../global");
const step_service_1 = require("./step.service");
const form_service_1 = require("../components/form.service");
let MailService = class MailService {
    constructor(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    sendMail(mail_id, form_id) {
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'send_mail?' + 'mail_id=' + mail_id + '&form_id=' + form_id;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .map(mailState => { return mailState; })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
MailService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, form_service_1.FormService, step_service_1.StepService])
], MailService);
exports.MailService = MailService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9tYWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUM3Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsK0JBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsK0JBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFJdkQ7SUFFSSxZQUFvQixLQUFXLEVBQVUsWUFBeUIsRUFBVSxZQUF5QjtRQUFqRixVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUNyRyxDQUFDO0lBRUwsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPO1FBQ3JCLElBQUksV0FBVyxHQUFJLHVCQUFjLENBQUMsUUFBUSxHQUFDLFlBQVksR0FBQyxVQUFVLEdBQUMsT0FBTyxHQUFDLFdBQVcsR0FBQyxPQUFPLENBQUM7UUFDL0YsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDN0IsR0FBRyxDQUFDLFNBQVMsTUFBSyxNQUFNLENBQUMsU0FBUyxDQUFBLENBQUEsQ0FBQyxDQUFDO2FBQ3BDLEtBQUssQ0FBQyxLQUFLLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUNqRCxDQUFDO0FBRUQsQ0FBQztBQWhCRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFFQSxtQkFBVyxjQWN2QixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvRW5naW5lL21haWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBNYWlsU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHtcclxuICAgIH1cclxuXHJcbnNlbmRNYWlsKG1haWxfaWQsIGZvcm1faWQpe1xyXG4gICAgbGV0IGNvbXBsZXRlVXJsID0gIEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzZW5kX21haWw/JysnbWFpbF9pZD0nK21haWxfaWQrJyZmb3JtX2lkPScrZm9ybV9pZDtcclxuICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgIC5tYXAobWFpbFN0YXRlID0+IHtyZXR1cm4gbWFpbFN0YXRlfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG59XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
