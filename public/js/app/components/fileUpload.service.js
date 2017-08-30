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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFJQSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLHdCQUF3QixDQUFDLENBQUE7QUFDbkQsMkJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFDN0MscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHVCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUV6QztJQUVJLDJCQUFxQixLQUFXLEVBQVUsWUFBeUI7UUFBOUMsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO0lBQUcsQ0FBQztJQUV2RSxxQ0FBUyxHQUFULFVBQVUsWUFBWTtRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBR3pCLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLHFCQUFxQixFQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEQsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBSXhELENBQUM7SUFwQkw7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQXFCYix3QkFBQzs7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBcEJZLHlCQUFpQixvQkFvQjdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9maWxlVXBsb2FkLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgVGhpcyBmaWxlIHdpbGwgc2VuZCB0aGUgZmlsZSB1cGxvYWRlZCB0aGUgdGhlIGZpbGVzdGFjayBSZXN0IEFQSVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7fVxyXG5cclxuICAgIHN0b3JlRmlsZShmaWxlVXBsb2FkZWQpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsZVVwbG9hZGVkKTtcclxuICAgICAgICAgLy9sZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcblxyXG4gICAgICAgICBsZXQgYm9keSA9IGZpbGVVcGxvYWRlZDtcclxuICAgICAgICAgY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJ30pO1xyXG4gICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzdG9yZV9maWxlJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG5cclxuXHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
