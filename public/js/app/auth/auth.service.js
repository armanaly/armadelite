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
const http_1 = require("@angular/http");
const global_1 = require("../global");
const Observable_1 = require("rxjs/Observable");
const router_1 = require("@angular/router");
let AuthService = class AuthService {
    constructor(_http, router) {
        this._http = _http;
        this.router = router;
    }
    signup(user) {
        console.log(user);
        let body = JSON.stringify(user);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'auth_signup';
        return this._http.post(completeUrl, body, { headers: headers })
            .map((res) => res.json())
            .catch((error) => Observable_1.Observable.throw(error.json()));
    }
    signin(credentials) {
        console.log("connecting");
        let body = JSON.stringify(credentials);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'auth_signin';
        return this._http.post(completeUrl, body, { headers: headers })
            .map((res) => res.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    logout() {
        let app = localStorage.getItem('app');
        localStorage.clear();
        this.router.navigate(['/signin', app]);
    }
    isLoggedIn(currentApp) {
        let app = localStorage.getItem('app');
        if (app == currentApp) {
            return localStorage.getItem('token') !== null;
        }
        else {
            return false;
        }
    }
};
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,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ImF1dGgvYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXNwb25zZX0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5cbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKXt9XG5cbiAgICBzaWdudXAodXNlcjogVXNlcil7XG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHVzZXIpO1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG5cbiAgICAgICAgbGV0IGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnYXV0aF9zaWdudXAnO1xuXG4gICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXG4gICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBSZXNwb25zZSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblxuICAgIH1cblxuICAgIHNpZ25pbihjcmVkZW50aWFscyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29ubmVjdGluZ1wiKTtcbiAgICAgICAgbGV0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShjcmVkZW50aWFscyk7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcblxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdhdXRoX3NpZ25pbic7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXG4gICAgfVxuXG5cbiAgICBsb2dvdXQoKXtcbiAgICAgICAgbGV0IGFwcCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcHAnKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL3NpZ25pbicsIGFwcF0pO1xuICAgIH1cblxuICAgIGlzTG9nZ2VkSW4oY3VycmVudEFwcCl7XG4gICAgICAgIGxldCBhcHAgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwJyk7XG4gICAgICAgIGlmIChhcHAgPT0gY3VycmVudEFwcCl7XG4gICAgICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
