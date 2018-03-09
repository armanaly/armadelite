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
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require("rxjs/Rx");
const Observable_1 = require("rxjs/Observable");
const global_1 = require("../global");
const step_service_1 = require("./step.service");
const form_service_1 = require("./form.service");
let MailService = class MailService {
    constructor(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    sendMail(mail_id, form_id, appName) {
        let body = { "mail_id": mail_id, "form_id": form_id, "app_name": appName };
        console.log(form_id);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'send_mail';
        return this._http.post(completeUrl, JSON.stringify(body), { headers: headers })
            .map(mailState => { return mailState; })
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
    logMail(key, value, appName) {
        console.log(appName);
        this._formService.arraySteps.push({ "current_key": key, "value_to_update": value, "app_name": appName });
        let body = this._formService.arraySteps;
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'log_mail';
        return this._http.post(completeUrl, JSON.stringify(body), { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
MailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, form_service_1.FormService, step_service_1.StepService])
], MailService);
exports.MailService = MailService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9tYWlsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBNEM7QUFDNUMsd0NBQTJDO0FBQzNDLG1CQUFpQjtBQUNqQixnREFBNkM7QUFDN0Msc0NBQTJDO0FBQzNDLGlEQUEyQztBQUMzQyxpREFBMkM7QUFJM0MsSUFBYSxXQUFXLEdBQXhCO0lBRUksWUFBb0IsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFDckcsQ0FBQztJQUVELFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLE9BQU87UUFDN0IsSUFBSSxJQUFJLEdBQUcsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxDQUFBO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFdBQVcsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUUsTUFBTSxDQUFDLFNBQVMsQ0FBQSxDQUFBLENBQUMsQ0FBQzthQUNwQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRTVELENBQUM7SUFHRyxPQUFPLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFeEcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFHeEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUN2RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNKLENBQUE7QUE5QlksV0FBVztJQUZ2QixpQkFBVSxFQUFFO3FDQUlrQixXQUFJLEVBQXdCLDBCQUFXLEVBQXdCLDBCQUFXO0dBRjVGLFdBQVcsQ0E4QnZCO0FBOUJZLGtDQUFXIiwiZmlsZSI6IkVuZ2luZS9tYWlsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIE1haWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge1xyXG4gICAgfVxyXG5cclxuICAgIHNlbmRNYWlsKG1haWxfaWQsIGZvcm1faWQsYXBwTmFtZSl7XHJcbiAgICAgICAgbGV0IGJvZHkgPSB7IFwibWFpbF9pZFwiOiBtYWlsX2lkLCBcImZvcm1faWRcIjogZm9ybV9pZCwgXCJhcHBfbmFtZVwiOiBhcHBOYW1lfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZvcm1faWQpXHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3NlbmRfbWFpbCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgSlNPTi5zdHJpbmdpZnkoYm9keSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChtYWlsU3RhdGUgPT4ge3JldHVybiBtYWlsU3RhdGV9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuXHJcbn1cclxuXHJcblxyXG4gICAgbG9nTWFpbChrZXksIHZhbHVlLCBhcHBOYW1lKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcHBOYW1lKVxyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMucHVzaCh7XCJjdXJyZW50X2tleVwiOiBrZXksIFwidmFsdWVfdG9fdXBkYXRlXCI6IHZhbHVlICxcImFwcF9uYW1lXCIgOiBhcHBOYW1lfSk7XHJcbiAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goKVxyXG4gICAgICAgIGxldCBib2R5ID0gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcztcclxuXHJcbiAgICAgICAgLy9TQVZFIEZPUk0gREFUQSBJTlRPIENPTExFQ1RJT05cclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdsb2dfbWFpbCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgSlNPTi5zdHJpbmdpZnkoYm9keSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
