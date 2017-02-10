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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUvcHJvZmlsZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMsdUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBRTVDLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLFFBQU8sU0FBUyxDQUFDLENBQUE7QUFDakIseUJBQStCLFdBQVcsQ0FBQyxDQUFBO0FBRTNDO0lBQ0ksWUFBb0IsS0FBVTtRQUFWLFVBQUssR0FBTCxLQUFLLENBQUs7SUFBRyxDQUFDO0lBRWxDLFVBQVUsQ0FBQyxJQUFpQjtRQUN4Qiw4QkFBOEI7UUFDOUIscUJBQXFCO1FBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEMsdUJBQXVCO1FBQ3ZCLHFCQUFxQjtRQUNyQixNQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbkUsbUZBQW1GO1FBQ2xGLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN2RCxHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQyxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztBQUNMLENBQUM7QUFqQkQ7SUFBQyxpQkFBVSxFQUFFOztrQkFBQTtBQUNBLHNCQUFjLGlCQWdCMUIsQ0FBQSIsImZpbGUiOiJwcm9maWxlL3Byb2ZpbGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFByb2ZpbGVTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6SHR0cCkge31cclxuXHJcbiAgICBzYXZlRGVtYW5kKGZvcm06IEZvcm1TZXJ2aWNlKXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2F2ZURlbWFuZGUnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcclxuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZm9ybSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJib2R5XCIpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGJvZHkpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2RlbWFuZCcsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdkZW1hbmQnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICB9XHJcbn0iXX0=
