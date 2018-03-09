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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluL2JhbGxldC9ncm91cC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLHlDQUE4QztBQUM5Qyx3Q0FBNEQ7QUFDNUQsZ0RBQTZDO0FBRzdDLElBQWEsWUFBWSxHQUF6QjtJQUVJLFlBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVwQyxTQUFTLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLO1FBRWhDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBQyxNQUFNLEdBQUMsVUFBVSxHQUFDLFdBQVcsR0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksT0FBTyxHQUFFLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBQyxhQUFhLEdBQUMsS0FBSyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDN0IsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBRVosT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsV0FBVyxDQUFDLFNBQVMsRUFBRSxNQUFNO1FBQ3pCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxXQUFXLEVBQUcsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQzthQUN4RCxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7YUFDekIsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV4RCxDQUFDO0NBQ0osQ0FBQTtBQTlCWSxZQUFZO0lBRHhCLGlCQUFVLEVBQUU7cUNBR21CLFdBQUk7R0FGdkIsWUFBWSxDQThCeEI7QUE5Qlksb0NBQVkiLCJmaWxlIjoiYWRtaW4vYmFsbGV0L2dyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvdXBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRHcm91cHMocmVjX2lkLCBjb3Vyc2VfdHlwZSwgc3RhZ2Upe1xyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSBcImlkPVwiK3JlY19pZCtcIiZjb3Vyc2U9XCIrY291cnNlX3R5cGUrXCImc3RhZ2U9XCIrc3RhZ2U7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydnZXRfZ3JvdXBzPycrcXVlcnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlR3JvdXAoZ3JvdXBOYW1lLCB1c2VySWQpe1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1wiZ3JvdXBOYW1lXCIgOiBncm91cE5hbWUsIFwiX2lkXCI6IHVzZXJJZH0pO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3NldF9ncm91cF90b191c2VyJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
