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
var global_1 = require("../global");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var form_service_1 = require("./form.service");
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
    SaveService.prototype.saveData = function (currentStep) {
        this._formService.arraySteps.push({ "step_id": currentStep });
        var body = this._formService.arraySteps;
        console.log("body");
        console.log(body);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRzNDO0lBRUkscUJBQXFCLEtBQVcsRUFBVSxZQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRXZFLCtCQUFTLEdBQVQ7UUFDUSxJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDO2FBQ3pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRWIsOEJBQVEsR0FBUixVQUFTLFdBQVc7UUFFWixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFJbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRWxFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFoQ1Q7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWlDUixrQkFBQzs7QUFBRCxDQWhDTCxBQWdDTSxJQUFBO0FBaENPLG1CQUFXLGNBZ0NsQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTYXZlU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxuXG4gICAgc2F2ZUZpbGVzKCkge1xuICAgICAgICAgICAgbGV0IGhlYWRlckZpbGVzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAgICAgICAgIGhlYWRlckZpbGVzLmFwcGVuZCgnRW5jVHlwZScsICdtdWx0aXBhcnQvZm9ybS1kYXRhJyk7XG4gICAgICAgICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogaGVhZGVyRmlsZXN9KTtcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3N0b3JlX2ZpbGUnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb21wbGV0ZVVybH1gLCB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLCB7aGVhZGVyczogaGVhZGVyRmlsZXN9KVxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxuICAgICAgICAgICAgICAgIH1cblxuICAgIHNhdmVEYXRhKGN1cnJlbnRTdGVwKSB7XG5cbiAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMucHVzaCh7XCJzdGVwX2lkXCI6IGN1cnJlbnRTdGVwfSk7XG4gICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHM7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9keVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuXG4gICAgICAgICAgICAvL1NBVkUgRk9STSBEQVRBIElOVE8gQ09MTEVDVElPTlxuXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kZW1hbmQnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzYXZlX2RhdGFzJztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIEpTT04uc3RyaW5naWZ5KGJvZHkpLCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcbiAgICAgICAgfVxuICAgICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
