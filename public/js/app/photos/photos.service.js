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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
const global_1 = require("../global");
let PhotosService = class PhotosService {
    constructor(_http) {
        this._http = _http;
    }
    upload(photo) {
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'load_image';
        console.log(photo);
        console.log("apres body");
        return this._http.post(completeUrl, photo)
            .map(response => response.json())
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
PhotosService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
], PhotosService);
exports.PhotosService = PhotosService;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHlCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUl6QztJQUdJLFlBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVwQyxNQUFNLENBQUMsS0FBSztRQUNSLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFlBQVksQ0FBQztRQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBS2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFHMUIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUM7YUFDcEMsR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDaEMsS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBS3pELENBQUM7QUFFTCxDQUFDO0FBMUJEO0lBQUMsaUJBQVUsRUFBRTs7aUJBQUE7QUFDQSxxQkFBYSxnQkF5QnpCLENBQUEiLCJmaWxlIjoicGhvdG9zL3Bob3Rvcy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGhvdG9zU2VydmljZSB7XHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIHVwbG9hZChwaG90byk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2xvYWRfaW1hZ2UnO1xyXG4gICAgICAgLy8gbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgY29uc29sZS5sb2cocGhvdG8pO1xyXG4gICAgICAgLy8gdmFyIHRtcEltZyA9IHtcInBhdGhcIjogcGhvdG99O1xyXG4gICAgICAgIC8vbGV0IGJvZHlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeSh0bXBJbWcpO1xyXG4gICAgIC8vICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzfSk7XHJcbiAgICAgIC8vICBjb25zb2xlLmxvZyhib2R5U3RyaW5nKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFwcmVzIGJvZHlcIik7XHJcblxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBwaG90bylcclxuICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcblxyXG5cclxuICAgICAgICAvLyAvL3JldHVybiB0aGlzLl9odHRwLmdldCgnc2VsbG15Y2FyZmFzdC5oZXJva3VhcHAuY29tL21hcnF1ZScpXHJcbiAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
