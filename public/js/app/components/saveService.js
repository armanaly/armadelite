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
        __metadata('design:paramtypes', [http_1.Http, form_service_1.FormService])
    ], SaveService);
    return SaveService;
}());
exports.SaveService = SaveService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNEMsZUFBZSxDQUFDLENBQUE7QUFDNUQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsdUJBQTZCLFdBQVcsQ0FBQyxDQUFBO0FBR3pDO0lBRUkscUJBQXFCLEtBQVcsRUFBVSxZQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRXZFLCtCQUFTLEdBQVQ7UUFDUSxJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDO2FBQ3pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRWIsOEJBQVEsR0FBUixVQUFTLFdBQVcsRUFBRSxPQUFPO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFHLE9BQU8sRUFBQyxDQUFDLENBQUM7UUFFbkYsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFHeEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUE1QlQ7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTZCUixrQkFBQztBQUFELENBNUJMLEFBNEJNLElBQUE7QUE1Qk8sbUJBQVcsY0E0QmxCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9zYXZlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVyc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhdmVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuICAgIHNhdmVGaWxlcygpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRlckZpbGVzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgICAgaGVhZGVyRmlsZXMuYXBwZW5kKCdFbmNUeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgaGVhZGVyRmlsZXMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogaGVhZGVyRmlsZXN9KTtcclxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc3RvcmVfZmlsZSc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7Y29tcGxldGVVcmx9YCwgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcywge2hlYWRlcnM6IGhlYWRlckZpbGVzfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgc2F2ZURhdGEoY3VycmVudFN0ZXAsIGFwcE5hbWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYXBwTmFtZSlcclxuICAgICAgICAgICAgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5wdXNoKHtcInN0ZXBfaWRcIjogY3VycmVudFN0ZXB9LHtcImFwcF9uYW1lXCIgOiBhcHBOYW1lfSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5wdXNoKClcclxuICAgICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzO1xyXG5cclxuICAgICAgICAgICAgLy9TQVZFIEZPUk0gREFUQSBJTlRPIENPTExFQ1RJT05cclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3NhdmVfZGF0YXMnO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBKU09OLnN0cmluZ2lmeShib2R5KSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
