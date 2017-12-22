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
let CargoDetailsService = class CargoDetailsService {
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
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'cargo_details?' + query;
        return this._http.get(completeUrl)
            .map(response => {
            console.log(response);
            let data = response.json();
            console.log(data);
            return data;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
CargoDetailsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CargoDetailsService);
exports.CargoDetailsService = CargoDetailsService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZ28vY2FyZ29EZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFFekMseUNBQThDO0FBQzlDLHdDQUE0RDtBQUM1RCxnREFBNkM7QUFJN0MsSUFBYSxtQkFBbUIsR0FBaEM7SUFFSSxZQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUNoQyxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxxQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDdEIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQU5NLENBQUM7SUFRcEMsUUFBUSxDQUFDLE1BQU07UUFFWCxJQUFJLEtBQUssR0FBRyxLQUFLLEdBQUMsTUFBTSxDQUFDO1FBQ3pCLElBQUksT0FBTyxHQUFFLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUMvRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUN2RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBQyxnQkFBZ0IsR0FBQyxLQUFLLENBQUM7UUFDakUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixHQUFHLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFFWixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3RCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0lBQ2hELENBQUM7Q0FrQkosQ0FBQTtBQTNDWSxtQkFBbUI7SUFEL0IsaUJBQVUsRUFBRTtxQ0FHbUIsV0FBSTtHQUZ2QixtQkFBbUIsQ0EyQy9CO0FBM0NZLGtEQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL2NhcmdvL2NhcmdvRGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBNb2RlbH0gZnJvbSBcIi4uLy4uL0VuZ2luZS9zdGVwTW9kZWxcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCBpbmNsdWRlcyA9IHJlcXVpcmUoXCJjb3JlLWpzL2ZuL3N0cmluZy9pbmNsdWRlc1wiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhcmdvRGV0YWlsc1NlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG4gICAgZGF0YUdyaWQgPSBbXTtcclxuICAgIGtleXNOYW1lID0gW107XHJcbiAgICBjb2xUaXRsZSA9IFtdO1xyXG4gICAga2V5c05hbWVfZGV0YWlscyA9IFtdO1xyXG4gICAgY29sVGl0bGVfZGV0YWlscyA9IFtdO1xyXG4gICAgb3JpZ2luYWxEYXRhID0gdGhpcy5kYXRhR3JpZDtcclxuXHJcbiAgICBnZXREYXRhcyhyZWNfaWQpe1xyXG5cclxuICAgICAgICBsZXQgcXVlcnkgPSBcImlkPVwiK3JlY19pZDtcclxuICAgICAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2NhcmdvX2RldGFpbHM/JytxdWVyeTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0VGVjaEluZm9zKHZlcnNpb24pe1xyXG4gICAgLy8gICAgIGxldCBxdWVyeSA9IFwidmVyc2lvbj1cIit2ZXJzaW9uO1xyXG4gICAgLy8gICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgLy8gICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgIC8vICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsndGVjaF9kZXRhaWxzPycrcXVlcnk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+XHJcbiAgICAvLyAgICAgICAgIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICAvLyB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
