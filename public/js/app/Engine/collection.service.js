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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var global_1 = require("../global");
var step_service_1 = require("./step.service");
var form_service_1 = require("../components/form.service");
var CollectionService = (function () {
    function CollectionService(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    CollectionService.prototype.getFormData = function (_id, collName, filters, select) {
        var filtersNameToString = [];
        var filtersValueToString = [];
        for (var i = 0; i < filters.length; i++) {
            filtersNameToString.push(filters[i].field);
            filtersValueToString.push(this.getValueSelected(filters[i].step_id));
        }
        var query = '_id=' + _id + '&collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'getFormData?' + query;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    CollectionService.prototype.getDatas = function (collName, filters, select, type) {
        var filtersNameToString = [];
        var filtersValueToString = [];
        console.log(filters);
        console.log("FIELD FILTER SIZE");
        console.log(filters);
        console.log(select);
        var query = 'col_name=' + collName + '&return_type=' + type;
        if (filters.length > 0) {
            for (var i = 0; i < filters.length; i++) {
                filtersNameToString.push(filters[i].field);
                filtersValueToString.push(encodeURIComponent(this.getValueSelected(filters[i].step_id)));
                console.log(filtersValueToString);
            }
            query = query + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        }
        else {
            query = query + '&filters_name=&filters_value=';
        }
        if (select != '') {
            query = query + '&select=' + select;
        }
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'custom_collection?' + query;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log('before GET');
        return this._http.get(completeUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    CollectionService.prototype.getValueSelected = function (stepId) {
        console.log(this._formService);
        console.log(this._stepService);
        for (var _i = 0, _a = this._stepService.steps; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.step_id == stepId) {
                var valueForFormService = item.configuration.form_value.name;
            }
        }
        console.log(valueForFormService);
        for (var _b = 0, _c = this._formService.arraySteps; _b < _c.length; _b++) {
            var item = _c[_b];
            if (typeof eval('item.' + valueForFormService) != 'undefined') {
                return eval('item.' + valueForFormService);
            }
        }
    };
    CollectionService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    CollectionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, form_service_1.FormService, step_service_1.StepService])
    ], CollectionService);
    return CollectionService;
    var _a;
}());
exports.CollectionService = CollectionService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUk3Qyx1QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsNkJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFHdkQ7SUFFSywyQkFBcUIsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBTTNHLHVDQUFXLEdBQVgsVUFBWSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNO1FBQ3RDLElBQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0Msb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFFLEdBQUcsR0FBRyxZQUFZLEdBQUcsUUFBUSxHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixHQUFHLGlC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QUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO0lBQzVCLENBQUM7SUEvR0w7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQWdIVCx3QkFBQzs7QUFBRCxDQS9HSixBQStHSyxJQUFBO0FBL0dRLHlCQUFpQixvQkErR3pCLENBQUEiLCJmaWxlIjoiRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgJ3J4anMvUngnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcblxuXG4vLyBpbXBvcnQgeyBNYXJxdWUgfSBmcm9tIFwiLi9tYXJxdWVcIjtcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vc3RlcC5zZXJ2aWNlXCI7XG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcbmltcG9ydCB7cmVzb2x2ZX0gZnJvbSBcInVybFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25TZXJ2aWNlIHsgXG5cbiAgICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7fVxuICAgIC8qXG4gICAgICAgIFBBUkFNUzogY29sbE5hbWUgLS0+IE5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gd2hlcmUgYXJlIHN0b3JlZCB0aGUgZGF0YVxuICAgICAgICAgICAgICAgIGZpbHRlcnMgIC0tPiBPYmplY3Qgd2l0aCB0aGUgZmlsdGVyIG5hbWUgYW5kIHRoZSBzdGVwX2lkIHdoZXJlIGlzIHN0b3JlZCB0aGUgdmFsdWUgb2YgdGhlIGZpbHRlclxuICAgICAgICAgICAgICAgIHNlbGVjdCAgIC0tPiBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBpbiB0aGUgY29sbGVjdGlvbiBhbmQgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW5cbiAgICAgKi9cbiAgICBnZXRGb3JtRGF0YShfaWQsIGNvbGxOYW1lLCBmaWx0ZXJzLCBzZWxlY3Qpe1xuICAgICAgICBsZXQgZmlsdGVyc05hbWVUb1N0cmluZyA9IFtdO1xuICAgICAgICBsZXQgZmlsdGVyc1ZhbHVlVG9TdHJpbmcgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBmaWx0ZXJzLmxlbmd0aDtpKyspIHtcbiAgICAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkKTtcbiAgICAgICAgICAgIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2godGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ19pZD0nICtfaWQgKyAnJmNvbGxOYW1lPScgKyBjb2xsTmFtZSArICcmZmlsdGVyc19uYW1lPScgKyBmaWx0ZXJzTmFtZVRvU3RyaW5nICsgJyZmaWx0ZXJzX3ZhbHVlPScgKyBmaWx0ZXJzVmFsdWVUb1N0cmluZztcblxuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSAgR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2dldEZvcm1EYXRhPycrcXVlcnk7XG4gICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSAodGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXG4gICAgICAgIC8vICBsZXQgYm9keSA9IHsgXCJmaWx0ZXJzXCI6IGZpbHRlcnMsIFwiY29sbE5hbWVcIiA6IGNvbGxOYW1lfTtcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UgOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcjogUmVzcG9uc2UpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSlcblxuXG5cblxuICAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXG4gICAgICAgIC8vICAgICAudG9Qcm9taXNlKClcbiAgICAgICAgLy8gICAgIC50aGVuKHJlc3BvbnNlID0+cmVzcG9uc2UuanNvbigpKVxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxuXG4gICAgfVxuXG4gICAgZ2V0RGF0YXMoY29sbE5hbWUsIGZpbHRlcnMsIHNlbGVjdCwgdHlwZSkge1xuICAgICAgICB2YXIgZmlsdGVyc05hbWVUb1N0cmluZyA9IFtdXG4gICAgICAgIHZhciBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZJRUxEIEZJTFRFUiBTSVpFXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3QpO1xuICAgICAgICBsZXQgcXVlcnkgPSAnY29sX25hbWU9JyArIGNvbGxOYW1lICsgJyZyZXR1cm5fdHlwZT0nICsgdHlwZVxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwICkge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJzTmFtZVRvU3RyaW5nLnB1c2goZmlsdGVyc1tpXS5maWVsZCk7XG4gICAgICAgICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaChlbmNvZGVVUklDb21wb25lbnQodGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZCkpKTtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnNWYWx1ZVRvU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAvLyBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKCdBVURJJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvciAodmFyIGk9MDsgaTwgZmlsdGVycy5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaj0wOyBpPCBmaWx0ZXJzW2pdLmZpZWxkLmxlbmd0aDtqKyspIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGRbal0pO1xuICAgICAgICAgICAgLy8gICAgICAgICBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKHRoaXMuZ2V0VmFsdWVTZWxlY3RlZChmaWx0ZXJzW2ldLnN0ZXBfaWRbal0pKTtcbiAgICAgICAgICAgIC8vICAgICB9XG5cblxuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArICcmZmlsdGVyc19uYW1lPScgKyBmaWx0ZXJzTmFtZVRvU3RyaW5nICsgJyZmaWx0ZXJzX3ZhbHVlPScgKyBmaWx0ZXJzVmFsdWVUb1N0cmluZztcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcXVlcnkgPSBxdWVyeSArICcmZmlsdGVyc19uYW1lPSZmaWx0ZXJzX3ZhbHVlPSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZWN0ICE9ICcnKXtcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyAnJnNlbGVjdD0nICsgc2VsZWN0O1xuICAgICAgICB9XG4gICAgICAgLy8gY29uc29sZS5sb2coZmlsdGVyc1RvU3RyaW5nKTtcbiAgICAgICAgbGV0IGNvbXBsZXRlVXJsID0gIEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydjdXN0b21fY29sbGVjdGlvbj8nK3F1ZXJ5O1xuICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXG4gICAgICAvLyAgbGV0IGJvZHkgPSB7IFwiZmlsdGVyc1wiOiBmaWx0ZXJzLCBcImNvbGxOYW1lXCIgOiBjb2xsTmFtZX07XG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdiZWZvcmUgR0VUJylcbiAgICAgICAgLy8gbGV0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgLy9cbiAgICAgICAgLy8gfSlcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxuICAgICAgICAgICAgLnRvUHJvbWlzZSgpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcblxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0VmFsdWVTZWxlY3RlZChzdGVwSWQpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XG4gICAgICAgIC8vUkVUUklFVkUgSU4gU1RFUCBDT05GSUcgRklMRSBUSEUgTkFNRSBPRiBTQVZFRCBWQUxVRSBGT1IgVEhFIFNQRUNJRklFRCBTVEVQXG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpIHtcbiAgICAgICAgICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gc3RlcElkKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlRm9yRm9ybVNlcnZpY2UgPSBpdGVtLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlRm9yRm9ybVNlcnZpY2UpO1xuICAgICAgICAvLyBSRVRVUk4gVEhFIENPTlRFTlQgT0YgVkFSSUFCTEUgUElDS0VEIFVQIElOIFNURVAgU0VSVklDRVxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXZhbCgnaXRlbS4nICsgdmFsdWVGb3JGb3JtU2VydmljZSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZhbCgnaXRlbS4nICsgdmFsdWVGb3JGb3JtU2VydmljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIHZhbHVlU2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGJvZHkuZGF0YSB8fCB7IH07XG4gICAgfVxuICAgIH1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
