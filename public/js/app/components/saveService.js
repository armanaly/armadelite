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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLDZCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRzNDO0lBRUkscUJBQXFCLEtBQVcsRUFBVSxZQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRXZFLCtCQUFTLEdBQVQ7UUFDUSxJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUcsV0FBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBQyxDQUFDO2FBQ3pGLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRWIsOEJBQVEsR0FBUixVQUFTLFdBQVc7UUFFWixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFJbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRWxFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFoQ1Q7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQWlDUixrQkFBQzs7QUFBRCxDQWhDTCxBQWdDTSxJQUFBO0FBaENPLG1CQUFXLGNBZ0NsQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhdmVTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlKSB7fVxyXG5cclxuICAgIHNhdmVGaWxlcygpIHtcclxuICAgICAgICAgICAgbGV0IGhlYWRlckZpbGVzID0gbmV3IEhlYWRlcnMoKTtcclxuICAgICAgICAgICAgaGVhZGVyRmlsZXMuYXBwZW5kKCdFbmNUeXBlJywgJ211bHRpcGFydC9mb3JtLWRhdGEnKTtcclxuICAgICAgICAgICAgaGVhZGVyRmlsZXMuYXBwZW5kKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7aGVhZGVyczogaGVhZGVyRmlsZXN9KTtcclxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc3RvcmVfZmlsZSc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoYCR7Y29tcGxldGVVcmx9YCwgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcywge2hlYWRlcnM6IGhlYWRlckZpbGVzfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgc2F2ZURhdGEoY3VycmVudFN0ZXApIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMucHVzaCh7XCJzdGVwX2lkXCI6IGN1cnJlbnRTdGVwfSk7XHJcbiAgICAgICAgICAgIGxldCBib2R5ID0gdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYm9keVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcblxyXG4gICAgICAgICAgICAvL1NBVkUgRk9STSBEQVRBIElOVE8gQ09MTEVDVElPTlxyXG5cclxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kZW1hbmQnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3NhdmVfZGF0YXMnO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBKU09OLnN0cmluZ2lmeShib2R5KSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIH1cclxuICAgICB9XHJcbi8vIH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
