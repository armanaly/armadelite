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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var form_service_1 = require("./form.service");
var global_1 = require("../global");
var SaveService = (function () {
    function SaveService(_http, _formService) {
        this._http = _http;
        this._formService = _formService;
    }
    SaveService.prototype.saveFiles = function () {
        var headerFiles = new http_1.Headers();
        headerFiles.append('EncType', 'multipart/form-data');
        headerFiles.append('Accept', 'application/json');
        var options = new http_1.RequestOptions({ headers: headerFiles });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'store_file';
        return this._http.post("" + completeUrl, this._formService.arrayFiles, { headers: headerFiles })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    SaveService.prototype.saveData = function (currentStep, appName) {
        console.log(appName);
        this._formService.arraySteps.push({ "step_id": currentStep }, { "app_name": appName });
        var body = this._formService.arraySteps;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'save_datas';
        return this._http.post(completeUrl, JSON.stringify(body), { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SaveService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, form_service_1.FormService])
    ], SaveService);
    return SaveService;
    var _a;
}());
exports.SaveService = SaveService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsdUJBQTZCLFdBQVcsQ0FBQyxDQUFBO0FBR3pDO0lBRUkscUJBQXFCLEtBQVcsRUFBVSxZQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRXZFLCtCQUFTLEdBQVQ7UUFDUSxJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDO2FBQ3pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRWIsOEJBQVEsR0FBUixVQUFTLFdBQVcsRUFBRSxPQUFPO1FBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLEVBQUMsRUFBQyxVQUFVLEVBQUcsT0FBTyxFQUFDLENBQUMsQ0FBQztRQUVuRixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUd4QyxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLEVBQVIsQ0FBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7SUFDeEQsQ0FBQztJQTVCVDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBNkJSLGtCQUFDOztBQUFELENBNUJMLEFBNEJNLElBQUE7QUE1Qk8sbUJBQVcsY0E0QmxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zYXZlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYXZlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxuXG4gICAgc2F2ZUZpbGVzKCkge1xuICAgICAgICAgICAgbGV0IGhlYWRlckZpbGVzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGhlYWRlckZpbGVzLmFwcGVuZCgnRW5jVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgICAgICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogaGVhZGVyRmlsZXN9KTtcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3N0b3JlX2ZpbGUnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb21wbGV0ZVVybH1gLCB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLCB7aGVhZGVyczogaGVhZGVyRmlsZXN9KVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgIHNhdmVEYXRhKGN1cnJlbnRTdGVwLCBhcHBOYW1lKSB7XG5jb25zb2xlLmxvZyhhcHBOYW1lKVxuICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5wdXNoKHtcInN0ZXBfaWRcIjogY3VycmVudFN0ZXB9LHtcImFwcF9uYW1lXCIgOiBhcHBOYW1lfSk7XG4gICAgICAgICAgICAvL3RoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMucHVzaCgpXG4gICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHM7XG5cbiAgICAgICAgICAgIC8vU0FWRSBGT1JNIERBVEEgSU5UTyBDT0xMRUNUSU9OXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3NhdmVfZGF0YXMnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgSlNPTi5zdHJpbmdpZnkoYm9keSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuICAgICAgICB9XG4gICAgIH1cbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
