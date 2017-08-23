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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSxxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiwyQkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUk3Qyx1QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsNkJBQTBCLDRCQUE0QixDQUFDLENBQUE7QUFHdkQ7SUFFSywyQkFBcUIsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBTTNHLHVDQUFXLEdBQVgsVUFBWSxHQUFHLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxNQUFNO1FBQ3RDLElBQUksbUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksb0JBQW9CLEdBQUcsRUFBRSxDQUFDO1FBQzlCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUUsT0FBTyxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ2xDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0Msb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO1FBRUQsSUFBSSxLQUFLLEdBQUcsTUFBTSxHQUFFLEdBQUcsR0FBRyxZQUFZLEdBQUcsUUFBUSxHQUFHLGdCQUFnQixHQUFHLG1CQUFtQixHQUFHLGlC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QUFJLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRyxDQUFDO0lBQzVCLENBQUM7SUEvR0w7UUFBQyxpQkFBVSxFQUFFOzt5QkFBQTtJQWdIVCx3QkFBQzs7QUFBRCxDQS9HSixBQStHSyxJQUFBO0FBL0dRLHlCQUFpQixvQkErR3pCLENBQUEiLCJmaWxlIjoiRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcblxyXG4vLyBpbXBvcnQgeyBNYXJxdWUgfSBmcm9tIFwiLi9tYXJxdWVcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuL3N0ZXAuc2VydmljZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtyZXNvbHZlfSBmcm9tIFwidXJsXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25TZXJ2aWNlIHsgXHJcblxyXG4gICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge31cclxuICAgIC8qXHJcbiAgICAgICAgUEFSQU1TOiBjb2xsTmFtZSAtLT4gTmFtZSBvZiB0aGUgY29sbGVjdGlvbiB3aGVyZSBhcmUgc3RvcmVkIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzICAtLT4gT2JqZWN0IHdpdGggdGhlIGZpbHRlciBuYW1lIGFuZCB0aGUgc3RlcF9pZCB3aGVyZSBpcyBzdG9yZWQgdGhlIHZhbHVlIG9mIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdCAgIC0tPiBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBpbiB0aGUgY29sbGVjdGlvbiBhbmQgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW5cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybURhdGEoX2lkLCBjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0KXtcclxuICAgICAgICBsZXQgZmlsdGVyc05hbWVUb1N0cmluZyA9IFtdO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgZmlsdGVycy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkKTtcclxuICAgICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcXVlcnkgPSAnX2lkPScgK19pZCArICcmY29sbE5hbWU9JyArIGNvbGxOYW1lICsgJyZmaWx0ZXJzX25hbWU9JyArIGZpbHRlcnNOYW1lVG9TdHJpbmcgKyAnJmZpbHRlcnNfdmFsdWU9JyArIGZpbHRlcnNWYWx1ZVRvU3RyaW5nO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSAgR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2dldEZvcm1EYXRhPycrcXVlcnk7XHJcbiAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlICh0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAvLyAgbGV0IGJvZHkgPSB7IFwiZmlsdGVyc1wiOiBmaWx0ZXJzLCBcImNvbGxOYW1lXCIgOiBjb2xsTmFtZX07XHJcbiAgICAgICAgbGV0IGhlYWRlcnM9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBoZWFkZXJzIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2UgOiBSZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yOiBSZXNwb25zZSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgLy8gICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgIC8vICAgICAudGhlbihyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAvLyAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhcyhjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0LCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlcnNOYW1lVG9TdHJpbmcgPSBbXVxyXG4gICAgICAgIHZhciBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVycyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJGSUVMRCBGSUxURVIgU0laRVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdCk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gJ2NvbF9uYW1lPScgKyBjb2xsTmFtZSArICcmcmV0dXJuX3R5cGU9JyArIHR5cGVcclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwICkge1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWx0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzTmFtZVRvU3RyaW5nLnB1c2goZmlsdGVyc1tpXS5maWVsZCk7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnNWYWx1ZVRvU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIC8vIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2goJ0FVREknKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gZm9yICh2YXIgaT0wOyBpPCBmaWx0ZXJzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgLy8gICAgIGZvciAodmFyIGo9MDsgaTwgZmlsdGVyc1tqXS5maWVsZC5sZW5ndGg7aisrKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGRbal0pO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2godGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZFtqXSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyAnJmZpbHRlcnNfbmFtZT0nICsgZmlsdGVyc05hbWVUb1N0cmluZyArICcmZmlsdGVyc192YWx1ZT0nICsgZmlsdGVyc1ZhbHVlVG9TdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyAnJmZpbHRlcnNfbmFtZT0mZmlsdGVyc192YWx1ZT0nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNlbGVjdCAhPSAnJyl7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyAnJnNlbGVjdD0nICsgc2VsZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcnNUb1N0cmluZyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlVXJsID0gIEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydjdXN0b21fY29sbGVjdGlvbj8nK3F1ZXJ5O1xyXG4gICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgLy8gIGxldCBib2R5ID0geyBcImZpbHRlcnNcIjogZmlsdGVycywgXCJjb2xsTmFtZVwiIDogY29sbE5hbWV9O1xyXG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygnYmVmb3JlIEdFVCcpXHJcbiAgICAgICAgLy8gbGV0IG15UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5yZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVNlbGVjdGVkKHN0ZXBJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgLy9SRVRSSUVWRSBJTiBTVEVQIENPTkZJRyBGSUxFIFRIRSBOQU1FIE9GIFNBVkVEIFZBTFVFIEZPUiBUSEUgU1BFQ0lGSUVEIFNURVBcclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXBzKSB7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLnN0ZXBfaWQgPT0gc3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVGb3JGb3JtU2VydmljZSA9IGl0ZW0uY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVGb3JGb3JtU2VydmljZSk7XHJcbiAgICAgICAgLy8gUkVUVVJOIFRIRSBDT05URU5UIE9GIFZBUklBQkxFIFBJQ0tFRCBVUCBJTiBTVEVQIFNFUlZJQ0VcclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBldmFsKCdpdGVtLicgKyB2YWx1ZUZvckZvcm1TZXJ2aWNlKSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2YWwoJ2l0ZW0uJyArIHZhbHVlRm9yRm9ybVNlcnZpY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJldHVybiB2YWx1ZVNlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZXh0cmFjdERhdGEocmVzOiBSZXNwb25zZSkge1xyXG4gICAgICAgIGxldCBib2R5ID0gcmVzLmpzb24oKTtcclxuICAgICAgICByZXR1cm4gYm9keS5kYXRhIHx8IHsgfTtcclxuICAgIH1cclxuICAgIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
