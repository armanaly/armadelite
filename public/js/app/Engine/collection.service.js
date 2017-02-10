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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
// import { Marque } from "./marque";
const global_1 = require("../global");
const step_service_1 = require("./step.service");
const form_service_1 = require("../components/form.service");
let CollectionService = class CollectionService {
    constructor(_http, _formService, _stepService) {
        this._http = _http;
        this._formService = _formService;
        this._stepService = _stepService;
    }
    /*
        PARAMS: collName --> Name of the collection where are stored the data
                filters  --> Object with the filter name and the step_id where is stored the value of the filter
                select   --> The value that will be retrieved in the collection and displayed on the screen
     */
    getFormData(_id, collName, filters, select) {
        let filtersNameToString = [];
        let filtersValueToString = [];
        for (let i = 0; i < filters.length; i++) {
            filtersNameToString.push(filters[i].field);
            filtersValueToString.push(this.getValueSelected(filters[i].step_id));
        }
        var query = '_id=' + _id + '&collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'getFormData?' + query;
        //return Promise.resolve(this._http.get(completeUrl)
        //  let body = { "filters": filters, "collName" : collName};
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    getDatas(collName, filters, select) {
        var filtersNameToString = [];
        var filtersValueToString = [];
        console.log(filters);
        console.log("FIELD FILTER SIZE");
        console.log(filters);
        for (var i = 0; i < filters.length; i++) {
            filtersNameToString.push(filters[i].field);
            filtersValueToString.push(encodeURIComponent(this.getValueSelected(filters[i].step_id)));
            console.log(filtersValueToString);
        }
        // for (var i=0; i< filters.length;i++) {
        //     for (var j=0; i< filters[j].field.length;j++) {
        //         filtersNameToString.push(filters[i].field[j]);
        //         filtersValueToString.push(this.getValueSelected(filters[i].step_id[j]));
        //     }
        var query = 'collName=' + collName + '&filters_name=' + filtersNameToString + '&filters_value=' + filtersValueToString;
        if (select != '') {
            query = query + '&select=' + select;
        }
        // console.log(filtersToString);
        let completeUrl = global_1.GlobalVariable.BASE_URL + 'custom_collection?' + query;
        //return Promise.resolve(this._http.get(completeUrl)
        //  let body = { "filters": filters, "collName" : collName};
        let headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        let options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => response.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    getValueSelected(stepId) {
        console.log(this._formService);
        console.log(this._stepService);
        //RETRIEVE IN STEP CONFIG FILE THE NAME OF SAVED VALUE FOR THE SPECIFIED STEP
        for (var item of this._stepService.step) {
            if (item.step_id == stepId) {
                var valueForFormService = item.configuration.form_value.name;
            }
        }
        console.log(valueForFormService);
        // RETURN THE CONTENT OF VARIABLE PICKED UP IN STEP SERVICE
        for (var item of this._formService.arraySteps) {
            if (typeof eval('item.' + valueForFormService) != 'undefined') {
                return eval('item.' + valueForFormService);
            }
        }
        // return valueSelected;
    }
    extractData(res) {
        let body = res.json();
        return body.data || {};
    }
};
CollectionService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, form_service_1.FormService, step_service_1.StepService])
], CollectionService);
exports.CollectionService = CollectionService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxxQ0FBcUM7QUFDckMseUJBQStCLFdBQVcsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXZEO0lBRUssWUFBcUIsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBQzNHOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUN0QyxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRSxHQUFHLEdBQUcsWUFBWSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0Is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WSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0IsNkVBQTZFO1FBQzdFLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN0QyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLElBQUksbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ2pFLENBQUM7UUFDTCxDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLDJEQUEyRDtRQUMzRCxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztZQUMvQyxDQUFDO1FBQ0wsQ0FBQztRQUNELHdCQUF3QjtJQUM1QixDQUFDO0lBRU8sV0FBVyxDQUFDLEdBQWE7UUFDN0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUcsQ0FBQztJQUM1QixDQUFDO0FBQ0QsQ0FBQztBQTdHTDtJQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0FBQ0EseUJBQWlCLG9CQTRHekIsQ0FBQSIsImZpbGUiOiJFbmdpbmUvY29sbGVjdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwLCBSZXF1ZXN0T3B0aW9ucywgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuLy8gaW1wb3J0IHsgTWFycXVlIH0gZnJvbSBcIi4vbWFycXVlXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi9zdGVwLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9ybS5zZXJ2aWNlXCI7XHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvbGxlY3Rpb25TZXJ2aWNlIHsgXHJcblxyXG4gICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZSkge31cclxuICAgIC8qXHJcbiAgICAgICAgUEFSQU1TOiBjb2xsTmFtZSAtLT4gTmFtZSBvZiB0aGUgY29sbGVjdGlvbiB3aGVyZSBhcmUgc3RvcmVkIHRoZSBkYXRhXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJzICAtLT4gT2JqZWN0IHdpdGggdGhlIGZpbHRlciBuYW1lIGFuZCB0aGUgc3RlcF9pZCB3aGVyZSBpcyBzdG9yZWQgdGhlIHZhbHVlIG9mIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgIHNlbGVjdCAgIC0tPiBUaGUgdmFsdWUgdGhhdCB3aWxsIGJlIHJldHJpZXZlZCBpbiB0aGUgY29sbGVjdGlvbiBhbmQgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW5cclxuICAgICAqL1xyXG4gICAgZ2V0Rm9ybURhdGEoX2lkLCBjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0KXtcclxuICAgICAgICBsZXQgZmlsdGVyc05hbWVUb1N0cmluZyA9IFtdO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzVmFsdWVUb1N0cmluZyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgZmlsdGVycy5sZW5ndGg7aSsrKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkKTtcclxuICAgICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcXVlcnkgPSAnX2lkPScgK19pZCArICcmY29sbE5hbWU9JyArIGNvbGxOYW1lICsgJyZmaWx0ZXJzX25hbWU9JyArIGZpbHRlcnNOYW1lVG9TdHJpbmcgKyAnJmZpbHRlcnNfdmFsdWU9JyArIGZpbHRlcnNWYWx1ZVRvU3RyaW5nO1xyXG5cclxuICAgICAgICBsZXQgY29tcGxldGVVcmwgPSAgR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ2dldEZvcm1EYXRhPycrcXVlcnk7XHJcbiAgICAgICAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgIC8vICBsZXQgYm9keSA9IHsgXCJmaWx0ZXJzXCI6IGZpbHRlcnMsIFwiY29sbE5hbWVcIiA6IGNvbGxOYW1lfTtcclxuICAgICAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT5yZXNwb25zZS5qc29uKCkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy90aGlzLmdldERhdGFzKGNvbGxOYW1lLCBmaWx0ZXJzLCBzZWxlY3QpXHJcblxyXG4gICAgICAgIC8vIHJlc3BvbnNlLmpzb24oKVxyXG5cclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhcyhjb2xsTmFtZSwgZmlsdGVycywgc2VsZWN0KTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICB2YXIgZmlsdGVyc05hbWVUb1N0cmluZyA9IFtdXHJcbiAgICAgICAgdmFyIGZpbHRlcnNWYWx1ZVRvU3RyaW5nID0gW11cclxuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkZJRUxEIEZJTFRFUiBTSVpFXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZmlsdGVycyk7XHJcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPCBmaWx0ZXJzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGQpO1xyXG4gICAgICAgICAgICBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkKSkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyc1ZhbHVlVG9TdHJpbmcpO1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKCdBVURJJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmb3IgKHZhciBpPTA7IGk8IGZpbHRlcnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgIC8vICAgICBmb3IgKHZhciBqPTA7IGk8IGZpbHRlcnNbal0uZmllbGQubGVuZ3RoO2orKykge1xyXG4gICAgICAgIC8vICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGRbal0pO1xyXG4gICAgICAgIC8vICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkW2pdKSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciBxdWVyeSA9ICdjb2xsTmFtZT0nICsgY29sbE5hbWUgKyAnJmZpbHRlcnNfbmFtZT0nICsgZmlsdGVyc05hbWVUb1N0cmluZyArICcmZmlsdGVyc192YWx1ZT0nICsgZmlsdGVyc1ZhbHVlVG9TdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3QgIT0gJycpe1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgJyZzZWxlY3Q9JyArIHNlbGVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzVG9TdHJpbmcpO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZVVybCA9ICBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnY3VzdG9tX2NvbGxlY3Rpb24/JytxdWVyeTtcclxuICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgIC8vICBsZXQgYm9keSA9IHsgXCJmaWx0ZXJzXCI6IGZpbHRlcnMsIFwiY29sbE5hbWVcIiA6IGNvbGxOYW1lfTtcclxuICAgICAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHJcblxyXG4gICAgICAgICAgLy8gIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICAvLyAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIC8vIGxldCBtYXJxdWUgPSBuZXcgTWFycXVlKGRhdGFbaV0ubmFtZSwgZGF0YVtpXS51cmwsIGRhdGFbaV0ubW9kZWxlcyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIG9ianMucHVzaChkYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhvYmpzKVxyXG4gICAgICAgICAgICAgICAgLy8gIHJldHVybiBvYmpzO1xyXG4gICAgICAgIC8vKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVNlbGVjdGVkKHN0ZXBJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgLy9SRVRSSUVWRSBJTiBTVEVQIENPTkZJRyBGSUxFIFRIRSBOQU1FIE9GIFNBVkVEIFZBTFVFIEZPUiBUSEUgU1BFQ0lGSUVEIFNURVBcclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBzdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUZvckZvcm1TZXJ2aWNlID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUZvckZvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBSRVRVUk4gVEhFIENPTlRFTlQgT0YgVkFSSUFCTEUgUElDS0VEIFVQIElOIFNURVAgU0VSVklDRVxyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2YWwoJ2l0ZW0uJyArIHZhbHVlRm9yRm9ybVNlcnZpY2UpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZhbCgnaXRlbS4nICsgdmFsdWVGb3JGb3JtU2VydmljZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHZhbHVlU2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5LmRhdGEgfHwgeyB9O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuIl19
