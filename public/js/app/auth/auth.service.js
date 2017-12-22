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
    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
};
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], AuthService);
exports.AuthService = AuthService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgvYXV0aC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLHdDQUFzRDtBQUN0RCxzQ0FBeUM7QUFDekMsZ0RBQTZDO0FBRzdDLDRDQUF1QztBQUd2QyxJQUFhLFdBQVcsR0FBeEI7SUFDSSxZQUFvQixLQUFXLEVBQVUsTUFBYztRQUFuQyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFFLENBQUM7SUFFMUQsTUFBTSxDQUFDLElBQVU7UUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUV6RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RCxHQUFHLENBQUMsQ0FBQyxHQUFhLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQyxLQUFLLENBQUMsQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFckUsQ0FBQztJQUVELE1BQU0sQ0FBQyxXQUFXO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7UUFDMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEQsR0FBRyxDQUFDLENBQUMsR0FBYSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbEMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBR0QsTUFBTTtRQUNGLElBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFVBQVU7UUFDTixNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLENBQUM7SUFFbEQsQ0FBQztDQUNKLENBQUE7QUF0Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUVrQixXQUFJLEVBQWtCLGVBQU07R0FEOUMsV0FBVyxDQXNDdkI7QUF0Q1ksa0NBQVciLCJmaWxlIjoiYXV0aC9hdXRoLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2VyLm1vZGVsXCI7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpe31cblxuICAgIHNpZ251cCh1c2VyOiBVc2VyKXtcbiAgICAgICAgY29uc29sZS5sb2codXNlcik7XG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodXNlcik7XG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcblxuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdhdXRoX3NpZ251cCc7XG5cbiAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3I6IFJlc3BvbnNlKSA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xuXG4gICAgfVxuXG4gICAgc2lnbmluKGNyZWRlbnRpYWxzKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb25uZWN0aW5nXCIpO1xuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGNyZWRlbnRpYWxzKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ2F1dGhfc2lnbmluJztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxuICAgICAgICAgICAgLm1hcCgocmVzOiBSZXNwb25zZSkgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcbiAgICB9XG5cblxuICAgIGxvZ291dCgpe1xuICAgICAgICBsZXQgYXBwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcCcpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvc2lnbmluJywgYXBwXSk7XG4gICAgfVxuXG4gICAgaXNMb2dnZWRJbigpe1xuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykgIT09IG51bGw7XG5cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
