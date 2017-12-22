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
const core_1 = require("@angular/core");
const step_service_1 = require("../Engine/step.service");
const Observable_1 = require("rxjs/Observable");
const http_1 = require("@angular/http");
const global_1 = require("../global");
let FileUploadService = class FileUploadService {
    constructor(_http, _stepService) {
        this._http = _http;
        this._stepService = _stepService;
    }
    storeFile(fileUploaded) {
        console.log(fileUploaded);
        let body = fileUploaded;
        console.log(body);
        const headers = new http_1.Headers({ 'Content-Type': 'multipart/form-data' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'store_file';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
FileUploadService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, step_service_1.StepService])
], FileUploadService);
exports.FileUploadService = FileUploadService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmlsZVVwbG9hZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSUEsd0NBQTJDO0FBQzNDLHlEQUFtRDtBQUNuRCxnREFBNkM7QUFDN0Msd0NBQTREO0FBQzVELHNDQUF5QztBQUV6QyxJQUFhLGlCQUFpQixHQUE5QjtJQUVJLFlBQXFCLEtBQVcsRUFBVSxZQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRXZFLFNBQVMsQ0FBQyxZQUFZO1FBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHekIsSUFBSSxJQUFJLEdBQUcsWUFBWSxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUscUJBQXFCLEVBQUMsQ0FBQyxDQUFDO1FBQ3JFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUMxRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RCxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUl4RCxDQUFDO0NBQ0osQ0FBQTtBQXBCWSxpQkFBaUI7SUFEN0IsaUJBQVUsRUFBRTtxQ0FHbUIsV0FBSSxFQUF3QiwwQkFBVztHQUYxRCxpQkFBaUIsQ0FvQjdCO0FBcEJZLDhDQUFpQiIsImZpbGUiOiJjb21wb25lbnRzL2ZpbGVVcGxvYWQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gICAgVGhpcyBmaWxlIHdpbGwgc2VuZCB0aGUgZmlsZSB1cGxvYWRlZCB0aGUgdGhlIGZpbGVzdGFjayBSZXN0IEFQSVxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZpbGVVcGxvYWRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHt9XG5cbiAgICBzdG9yZUZpbGUoZmlsZVVwbG9hZGVkKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coZmlsZVVwbG9hZGVkKTtcbiAgICAgICAgIC8vbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xuXG4gICAgICAgICBsZXQgYm9keSA9IGZpbGVVcGxvYWRlZDtcbiAgICAgICAgIGNvbnNvbGUubG9nKGJvZHkpO1xuICAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ211bHRpcGFydC9mb3JtLWRhdGEnfSk7XG4gICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzdG9yZV9maWxlJztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXG5cblxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
