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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
require('rxjs/Rx');
const global_1 = require("../global");
let ProfileService = class ProfileService {
    constructor(_http) {
        this._http = _http;
    }
    saveDemand(form) {
        // console.log('saveDemande');
        // console.log(form);
        const body = JSON.stringify(form);
        // console.log("body");
        // console.log(body);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'demand';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(response => response.json())
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
ProfileService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], ProfileService);
exports.ProfileService = ProfileService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIseUJBQStCLFdBQVcsQ0FBQyxDQUFBO0FBRTNDO0lBQ0ksWUFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFBRyxDQUFDO0lBRWxDLFVBQVUsQ0FBQyxJQUFpQjtRQUN4Qiw4QkFBOEI7UUFDOUIscUJBQXFCO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbkUsbUZBQW1GO1FBQ2xGLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN2RCxHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQyxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztBQUNMLENBQUM7QUFqQkQ7SUFBQyxpQkFBVSxFQUFFOztrQkFBQTtBQUNBLHNCQUFjLGlCQWdCMUIsQ0FBQSIsImZpbGUiOiJhc3NldHMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZVNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDpIdHRwKSB7fVxyXG5cclxuICAgIHNhdmVEZW1hbmQoZm9ybTogRm9ybVNlcnZpY2Upe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzYXZlRGVtYW5kZScpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZvcm0pO1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShmb3JtKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJvZHlcIik7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYm9keSk7XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZGVtYW5kJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ2RlbWFuZCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
