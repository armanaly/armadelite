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
const global_1 = require("../../global");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
let StudentService = class StudentService {
    constructor(_http) {
        this._http = _http;
        this.dataGrid = [];
        this.keysName = [];
        this.colTitle = [];
        this.keysName_details = [];
        this.colTitle_details = [];
        this.originalData = this.dataGrid;
    }
    updateStudent(data) {
        let body = data;
        console.log("body");
        console.log(body);
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'update_student';
        return this._http.post(completeUrl, JSON.stringify(body), { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
StudentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StudentService);
exports.StudentService = StudentService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHdDQUF5QztBQUN6Qyx5Q0FBOEM7QUFDOUMsd0NBQTREO0FBQzVELGdEQUE2QztBQUk3QyxJQUFhLGNBQWMsR0FBM0I7SUFFSSxZQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNoQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQU5NLENBQUM7SUFRcEMsYUFBYSxDQUFDLElBQUk7UUFDZCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSWxCLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxnQkFBZ0IsQ0FBQztRQUM3RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFeEQsQ0FBQztDQUVKLENBQUE7QUExQlksY0FBYztJQUQxQixpQkFBVSxFQUFFO3FDQUdtQixXQUFJO0dBRnZCLGNBQWMsQ0EwQjFCO0FBMUJZLHdDQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFsbGV0L3N0dWRlbnQuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbFwiO1xuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge1N0dWRlbnR9IGZyb20gXCIuL3N0dWRlbnRcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0dWRlbnRTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxuICAgIGRhdGFHcmlkID0gW107XG4gICAga2V5c05hbWUgPSBbXTtcbiAgICBjb2xUaXRsZSA9IFtdO1xuICAgIGtleXNOYW1lX2RldGFpbHMgPSBbXTtcbiAgICBjb2xUaXRsZV9kZXRhaWxzID0gW107XG4gICAgb3JpZ2luYWxEYXRhID0gdGhpcy5kYXRhR3JpZDtcblxuICAgIHVwZGF0ZVN0dWRlbnQoZGF0YSkge1xuICAgICAgICBsZXQgYm9keSA9IGRhdGE7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJib2R5XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcblxuXG5cbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3VwZGF0ZV9zdHVkZW50JztcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgSlNPTi5zdHJpbmdpZnkoYm9keSksIHtoZWFkZXJzOiBoZWFkZXJzfSlcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcblxuICAgIH1cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
