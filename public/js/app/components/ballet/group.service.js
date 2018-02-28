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
let GroupService = class GroupService {
    constructor(_http) {
        this._http = _http;
    }
    getGroups(rec_id, course_type, stage) {
        let query = "id=" + rec_id + "&course=" + course_type + "&stage=" + stage;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'get_groups?' + query;
        return this._http.get(completeUrl)
            .map(response => {
            console.log(response);
            let data = response.json();
            console.log(data);
            return data;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
    changeGroup(groupName, userId) {
        let body = JSON.stringify({ "groupName": groupName, "_id": userId });
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'set_group_to_user';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
GroupService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroupService);
exports.GroupService = GroupService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFDekMseUNBQThDO0FBQzlDLHdDQUE0RDtBQUM1RCxnREFBNkM7QUFHN0MsSUFBYSxZQUFZLEdBQXpCO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07SUFBRyxDQUFDO0lBRXBDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEtBQUs7UUFFaEMsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFDLE1BQU0sR0FBQyxVQUFVLEdBQUMsV0FBVyxHQUFDLFNBQVMsR0FBQyxLQUFLLENBQUM7UUFDaEUsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLGFBQWEsR0FBQyxLQUFLLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFWixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCxXQUFXLENBQUMsU0FBUyxFQUFFLE1BQU07UUFDekIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFDLFdBQVcsRUFBRyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7UUFDcEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2xFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3hELEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXhELENBQUM7Q0FDSixDQUFBO0FBOUJZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FHbUIsV0FBSTtHQUZ2QixZQUFZLENBOEJ4QjtBQTlCWSxvQ0FBWSIsImZpbGUiOiJjb21wb25lbnRzL2JhbGxldC9ncm91cC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9uc30gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEdyb3VwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgZ2V0R3JvdXBzKHJlY19pZCwgY291cnNlX3R5cGUsIHN0YWdlKXtcclxuXHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gXCJpZD1cIityZWNfaWQrXCImY291cnNlPVwiK2NvdXJzZV90eXBlK1wiJnN0YWdlPVwiK3N0YWdlO1xyXG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnZ2V0X2dyb3Vwcz8nK3F1ZXJ5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUdyb3VwKGdyb3VwTmFtZSwgdXNlcklkKXtcclxuICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcImdyb3VwTmFtZVwiIDogZ3JvdXBOYW1lLCBcIl9pZFwiOiB1c2VySWR9KTtcclxuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzZXRfZ3JvdXBfdG9fdXNlcic7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
