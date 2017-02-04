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
const core_1 = require("@angular/core");
const global_1 = require("../global");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
const form_service_1 = require("../vehicule/form.service");
let SaveService = class SaveService {
    constructor(_http, _formService) {
        this._http = _http;
        this._formService = _formService;
    }
    saveData(currentStep) {
        // console.log('saveDemande');
        // console.log(form);
        this._formService.arraySteps.push({ "step_id": currentStep });
        let body = JSON.stringify(this._formService.arraySteps);
        console.log("body");
        console.log(body);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'save_datas';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
SaveService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, form_service_1.FormService])
], SaveService);
exports.SaveService = SaveService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsdUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLCtCQUEwQiwwQkFBMEIsQ0FBQyxDQUFBO0FBR3JEO0lBRUksWUFBcUIsS0FBVyxFQUFVLFlBQXlCO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFFdkUsUUFBUSxDQUFDLFdBQVc7UUFDaEIsOEJBQThCO1FBQzlCLHFCQUFxQjtRQUVyQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxtRkFBbUY7UUFDbkYsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3hELEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxLQUFLLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBRUwsQ0FBQztBQXRCRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQXFCdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NhdmVTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vdmVoaWN1bGUvZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTYXZlU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSkge31cclxuXHJcbiAgICBzYXZlRGF0YShjdXJyZW50U3RlcCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NhdmVEZW1hbmRlJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZm9ybSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMucHVzaCh7XCJzdGVwX2lkXCI6IGN1cnJlbnRTdGVwfSk7XHJcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeSh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJib2R5XCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kZW1hbmQnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc2F2ZV9kYXRhcyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
