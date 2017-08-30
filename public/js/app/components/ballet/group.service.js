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
var global_1 = require("../../global");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var GroupService = (function () {
    function GroupService(_http) {
        this._http = _http;
    }
    GroupService.prototype.getGroups = function (rec_id, course_type, stage) {
        var query = "id=" + rec_id + "&course=" + course_type + "&stage=" + stage;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'get_groups?' + query;
        return this._http.get(completeUrl)
            .map(function (response) {
            console.log(response);
            var data = response.json();
            console.log(data);
            return data;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    GroupService.prototype.changeGroup = function (groupName, userId) {
        var body = JSON.stringify({ "groupName": groupName, "_id": userId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'set_group_to_user';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(function (response) { return response; })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    GroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], GroupService);
    return GroupService;
    var _a;
}());
exports.GroupService = GroupService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx1QkFBK0IsY0FBYyxDQUFDLENBQUE7QUFDOUMscUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDJCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRzdDO0lBRUksc0JBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVwQyxnQ0FBUyxHQUFULFVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxLQUFLO1FBRWhDLElBQUksS0FBSyxHQUFHLEtBQUssR0FBQyxNQUFNLEdBQUMsVUFBVSxHQUFDLFdBQVcsR0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksT0FBTyxHQUFFLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBQyxhQUFhLEdBQUMsS0FBSyxDQUFDO1FBQzlELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7YUFDN0IsR0FBRyxDQUFDLFVBQUEsUUFBUTtZQUVULE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxTQUFTLEVBQUUsTUFBTTtRQUN6QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUMsV0FBVyxFQUFHLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFNLE9BQU8sR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDbEUsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFDLENBQUM7YUFDeEQsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxFQUFSLENBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO0lBRXhELENBQUM7SUE5Qkw7UUFBQyxpQkFBVSxFQUFFOztvQkFBQTtJQStCYixtQkFBQzs7QUFBRCxDQTlCQSxBQThCQyxJQUFBO0FBOUJZLG9CQUFZLGVBOEJ4QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFsbGV0L2dyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlcXVlc3RPcHRpb25zfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR3JvdXBTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBnZXRHcm91cHMocmVjX2lkLCBjb3Vyc2VfdHlwZSwgc3RhZ2Upe1xyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSBcImlkPVwiK3JlY19pZCtcIiZjb3Vyc2U9XCIrY291cnNlX3R5cGUrXCImc3RhZ2U9XCIrc3RhZ2U7XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydnZXRfZ3JvdXBzPycrcXVlcnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlR3JvdXAoZ3JvdXBOYW1lLCB1c2VySWQpe1xyXG4gICAgICAgIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoe1wiZ3JvdXBOYW1lXCIgOiBncm91cE5hbWUsIFwiX2lkXCI6IHVzZXJJZH0pO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMICsgJ3NldF9ncm91cF90b191c2VyJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5wb3N0KGNvbXBsZXRlVXJsLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
