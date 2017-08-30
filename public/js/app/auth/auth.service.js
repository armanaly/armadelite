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
var global_1 = require("../global");
var Observable_1 = require("rxjs/Observable");
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
    }
    AuthService.prototype.signup = function (user) {
        console.log(user);
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'auth_signup';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    AuthService.prototype.signin = function (credentials) {
        console.log("connecting");
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'auth_signin';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELHVCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUN6QywyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUs3QztJQUNJLHFCQUFvQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUFFLENBQUM7SUFFbEMsNEJBQU0sR0FBTixVQUFPLElBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV6RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RCxHQUFHLENBQUMsVUFBQyxHQUFhLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUE7SUFFakQsQ0FBQztJQUVELDRCQUFNLEdBQU4sVUFBTyxXQUFXO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEQsR0FBRyxDQUFDLFVBQUMsR0FBYSxJQUFLLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNsQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUExQkw7UUFBQyxpQkFBVSxFQUFFOzttQkFBQTtJQTJCYixrQkFBQzs7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLG1CQUFXLGNBMEJ2QixDQUFBIiwiZmlsZSI6ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwKXt9XHJcblxyXG4gICAgc2lnbnVwKHVzZXI6IFVzZXIpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG5cclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdhdXRoX3NpZ251cCc7XHJcblxyXG4gICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzaWduaW4oY3JlZGVudGlhbHMpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGluZ1wiKTtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKTtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcblxyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ2F1dGhfc2lnbmluJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
