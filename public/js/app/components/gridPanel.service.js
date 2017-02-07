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
const global_1 = require("../global");
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
let GridPanelService = class GridPanelService {
    constructor(_http) {
        this._http = _http;
        this.dataGrid = [];
        this.keysName = [];
        this.colTitle = [];
    }
    getDatas() {
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'data_grid';
        return this._http.get(completeUrl)
            .map(response => {
            console.log(response);
            let data = response.json();
            console.log(data);
            for (var i in data[0].config) {
                // if (key != '_id' && key != 'step_id'){
                console.log(data[0].config[i]);
                // console.log(key.valueOf())
                //  if(typeof data[0].config[i] === "object"){
                var result = "";
                // for (var p in data[0].config[i]) {
                if (typeof data[0].config[i].field_panel_name != 'undefined') {
                    //var j = 0;
                    for (var q in data[0].config[i].field_panel_values) {
                        // console.log(p)
                        // console.log(q);
                        // result += p + " , " + data[0].colNames[i][p] + "\n";
                        // console.log(p+"_"+data[0].colNames[i][p][j])
                        // this.keysName.push(p+"_"+data[0].colNames[i][p][j]);
                        this.keysName.push(data[0].config[i].field_panel_name + '_' + data[0].config[i].field_panel_values[q].data);
                        this.colTitle.push(data[0].config[i].field_panel_values[q].title);
                    }
                }
                else {
                    this.keysName.push(data[0].config[i].data);
                    this.colTitle.push(data[0].config[i].title);
                }
            }
            data.shift();
            console.log(this.keysName);
            this.dataGrid = data;
            return 'ok';
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
GridPanelService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], GridPanelService);
exports.GridPanelService = GridPanelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZ3JpZFBhbmVsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUV6Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsdUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBQ25DLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRzdDO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFDaEMsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDZCxhQUFRLEdBQUcsRUFBRSxDQUFDO0lBSHFCLENBQUM7SUFLcEMsUUFBUTtRQUNKLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFdBQVcsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQzdCLEdBQUcsQ0FBQyxRQUFRO1lBRVQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN0QixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDMUIseUNBQXlDO2dCQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsNkJBQTZCO2dCQUMvQiw4Q0FBOEM7Z0JBQzVDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztnQkFFaEIscUNBQXFDO2dCQUM3QixFQUFFLENBQUEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLElBQUksV0FBWSxDQUFDLENBQUMsQ0FBQztvQkFDM0QsWUFBWTtvQkFDWixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUEsQ0FBQzt3QkFDaEQsaUJBQWlCO3dCQUNqQixrQkFBa0I7d0JBQ2xCLHVEQUF1RDt3QkFDdkQsK0NBQStDO3dCQUMvQyx1REFBdUQ7d0JBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQzVHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBR3JFLENBQUM7Z0JBQ0wsQ0FBQztnQkFJVCxJQUFJLENBQUEsQ0FBQztvQkFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUMvQyxDQUFDO1lBQ0wsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUE7UUFDZixDQUFDLENBQUM7YUFjRCxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDaEQsQ0FBQztBQUVMLENBQUM7QUFuRUQ7SUFBQyxpQkFBVSxFQUFFOztvQkFBQTtBQUNBLHdCQUFnQixtQkFrRTVCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ncmlkUGFuZWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwTW9kZWx9IGZyb20gXCIuLi9FbmdpbmUvc3RlcE1vZGVsXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHcmlkUGFuZWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuICAgIGRhdGFHcmlkID0gW107XHJcbiAgICBrZXlzTmFtZSA9IFtdO1xyXG4gICAgY29sVGl0bGUgPSBbXTtcclxuXHJcbiAgICBnZXREYXRhcygpe1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydkYXRhX2dyaWQnO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiBkYXRhWzBdLmNvbmZpZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgKGtleSAhPSAnX2lkJyAmJiBrZXkgIT0gJ3N0ZXBfaWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhWzBdLmNvbmZpZ1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5LnZhbHVlT2YoKSlcclxuICAgICAgICAgICAgICAgICAgLy8gIGlmKHR5cGVvZiBkYXRhWzBdLmNvbmZpZ1tpXSA9PT0gXCJvYmplY3RcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciAodmFyIHAgaW4gZGF0YVswXS5jb25maWdbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBkYXRhWzBdLmNvbmZpZ1tpXS5maWVsZF9wYW5lbF9uYW1lICE9ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFyIGogPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHEgaW4gZGF0YVswXS5jb25maWdbaV0uZmllbGRfcGFuZWxfdmFsdWVzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlc3VsdCArPSBwICsgXCIgLCBcIiArIGRhdGFbMF0uY29sTmFtZXNbaV1bcF0gKyBcIlxcblwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhwK1wiX1wiK2RhdGFbMF0uY29sTmFtZXNbaV1bcF1bal0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMua2V5c05hbWUucHVzaChwK1wiX1wiK2RhdGFbMF0uY29sTmFtZXNbaV1bcF1bal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXNOYW1lLnB1c2goZGF0YVswXS5jb25maWdbaV0uZmllbGRfcGFuZWxfbmFtZSArICdfJyArIGRhdGFbMF0uY29uZmlnW2ldLmZpZWxkX3BhbmVsX3ZhbHVlc1txXS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xUaXRsZS5wdXNoKGRhdGFbMF0uY29uZmlnW2ldLmZpZWxkX3BhbmVsX3ZhbHVlc1txXS50aXRsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVswXS5jb2xOYW1lc1tpXVtwXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9qKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5c05hbWUucHVzaChkYXRhWzBdLmNvbmZpZ1tpXS5kYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xUaXRsZS5wdXNoKGRhdGFbMF0uY29uZmlnW2ldLnRpdGxlKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRhdGEuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5c05hbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhR3JpZCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ29rJ1xyXG4gICAgICAgICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBsZXQgc3RlcCA9IG5ldyBTdGVwTW9kZWwoZGF0YVtpXS5zdGVwX2lkLCBkYXRhW2ldLnR5cGUsIGRhdGFbaV0uY29uZmlndXJhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgb2Jqcy5wdXNoKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBvYmpzO1xyXG4gICAgICAgICAgICAvL30pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgIH1cclxuXHJcbn0iXX0=
