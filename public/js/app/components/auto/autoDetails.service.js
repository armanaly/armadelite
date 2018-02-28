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
let AutoDetailsService = class AutoDetailsService {
    constructor(_http) {
        this._http = _http;
        this.dataGrid = [];
        this.keysName = [];
        this.colTitle = [];
        this.keysName_details = [];
        this.colTitle_details = [];
        this.originalData = this.dataGrid;
    }
    getDatas(rec_id) {
        let query = "id=" + rec_id;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'grid_details?' + query;
        return this._http.get(completeUrl)
            .map(response => {
            console.log(response);
            let data = response.json();
            console.log(data);
            return data;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
    getTechInfos(version) {
        let query = "version=" + version;
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'tech_details?' + query;
        return this._http.get(completeUrl)
            .map(response => {
            let data = response.json();
            console.log(data);
            return data;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
AutoDetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AutoDetailsService);
exports.AutoDetailsService = AutoDetailsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXV0by9hdXRvRGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsd0NBQXlDO0FBQ3pDLHlDQUE4QztBQUM5Qyx3Q0FBNEQ7QUFDNUQsZ0RBQTZDO0FBSTdDLElBQWEsa0JBQWtCLEdBQS9CO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFDaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFOTSxDQUFDO0lBUXBDLFFBQVEsQ0FBQyxNQUFNO1FBRVgsSUFBSSxLQUFLLEdBQUcsS0FBSyxHQUFDLE1BQU0sQ0FBQztRQUN6QixJQUFJLE9BQU8sR0FBRSxJQUFJLGNBQU8sQ0FBQyxFQUFDLGNBQWMsRUFBRSxrQkFBa0IsRUFBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDdkQsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUMsZUFBZSxHQUFDLEtBQUssQ0FBQztRQUNoRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQzdCLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUVaLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDdEIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQTtRQUNmLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUdELFlBQVksQ0FBQyxPQUFPO1FBQ2hCLElBQUksS0FBSyxHQUFHLFVBQVUsR0FBQyxPQUFPLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUUsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLGVBQWUsR0FBQyxLQUFLLENBQUM7UUFDaEUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFWixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFBO1FBQ2YsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0NBRUosQ0FBQTtBQTNDWSxrQkFBa0I7SUFEOUIsaUJBQVUsRUFBRTtxQ0FHbUIsV0FBSTtHQUZ2QixrQkFBa0IsQ0EyQzlCO0FBM0NZLGdEQUFrQiIsImZpbGUiOiJjb21wb25lbnRzL2F1dG8vYXV0b0RldGFpbHMuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBpbmNsdWRlcyA9IHJlcXVpcmUoXCJjb3JlLWpzL2ZuL3N0cmluZy9pbmNsdWRlc1wiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dG9EZXRhaWxzU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcbiAgICBkYXRhR3JpZCA9IFtdO1xyXG4gICAga2V5c05hbWUgPSBbXTtcclxuICAgIGNvbFRpdGxlID0gW107XHJcbiAgICBrZXlzTmFtZV9kZXRhaWxzID0gW107XHJcbiAgICBjb2xUaXRsZV9kZXRhaWxzID0gW107XHJcbiAgICBvcmlnaW5hbERhdGEgPSB0aGlzLmRhdGFHcmlkO1xyXG5cclxuICAgIGdldERhdGFzKHJlY19pZCl7XHJcblxyXG4gICAgICAgIGxldCBxdWVyeSA9IFwiaWQ9XCIrcmVjX2lkO1xyXG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnZ3JpZF9kZXRhaWxzPycrcXVlcnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldFRlY2hJbmZvcyh2ZXJzaW9uKXtcclxuICAgICAgICBsZXQgcXVlcnkgPSBcInZlcnNpb249XCIrdmVyc2lvbjtcclxuICAgICAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3RlY2hfZGV0YWlscz8nK3F1ZXJ5O1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
