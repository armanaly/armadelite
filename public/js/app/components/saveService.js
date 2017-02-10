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
const form_service_1 = require("./form.service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsdUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBQzVDLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRzNDO0lBRUksWUFBcUIsS0FBVyxFQUFVLFlBQXlCO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFFdkUsUUFBUSxDQUFDLFdBQVc7UUFDaEIsOEJBQThCO1FBQzlCLHFCQUFxQjtRQUVyQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxtRkFBbUY7UUFDbkYsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3hELEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxLQUFLLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBRUwsQ0FBQztBQXRCRDtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQXFCdkIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL3NhdmVTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhdmVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuICAgIHNhdmVEYXRhKGN1cnJlbnRTdGVwKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2F2ZURlbWFuZGUnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5wdXNoKHtcInN0ZXBfaWRcIjogY3VycmVudFN0ZXB9KTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcImJvZHlcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2RlbWFuZCcsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzYXZlX2RhdGFzJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgfVxyXG5cclxufSJdfQ==
