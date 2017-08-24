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
var step_service_1 = require("../Engine/step.service");
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
var global_1 = require("../global");
var FileUploadService = (function () {
    function FileUploadService(_http, _stepService) {
        this._http = _http;
        this._stepService = _stepService;
    }
    FileUploadService.prototype.storeFile = function (fileUploaded) {
        console.log(fileUploaded);
        var body = fileUploaded;
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'multipart/form-data' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'store_file';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    FileUploadService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, step_service_1.StepService])
    ], FileUploadService);
    return FileUploadService;
    var _a;
}());
exports.FileUploadService = FileUploadService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHVCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUV6QztJQUVJLDJCQUFxQixLQUFXLEVBQVUsWUFBeUI7UUFBOUMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUV2RSxxQ0FBUyxHQUFULFVBQVUsWUFBWTtRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBR3pCLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEQsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBSXhELENBQUM7SUFwQkw7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQXFCYix3QkFBQzs7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHlCQUFpQixvQkFvQjdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICAgIFRoaXMgZmlsZSB3aWxsIHNlbmQgdGhlIGZpbGUgdXBsb2FkZWQgdGhlIHRoZSBmaWxlc3RhY2sgUmVzdCBBUElcbiAqL1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7fVxuXG4gICAgc3RvcmVGaWxlKGZpbGVVcGxvYWRlZCkge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbGVVcGxvYWRlZCk7XG4gICAgICAgICAvL2xldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcblxuICAgICAgICAgbGV0IGJvZHkgPSBmaWxlVXBsb2FkZWQ7XG4gICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcbiAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ30pO1xuICAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc3RvcmVfZmlsZSc7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblxuXG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
