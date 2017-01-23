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
const form_service_1 = require("../vehicule/form.service");
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
            filtersValueToString.push(this.getValueSelected(filters[i].step_id));
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxxQ0FBcUM7QUFDckMseUJBQStCLFdBQVcsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQiwwQkFBMEIsQ0FBQyxDQUFBO0FBRXJEO0lBRUssWUFBcUIsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBQzNHOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUN0QyxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRSxHQUFHLEdBQUcsWUFBWSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0Is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LE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9CLDZFQUE2RTtRQUM3RSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixJQUFJLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztZQUNqRSxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNqQywyREFBMkQ7UUFDM0QsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQzVELE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLG1CQUFtQixDQUFDLENBQUM7WUFDL0MsQ0FBQztRQUNMLENBQUM7UUFDRCx3QkFBd0I7SUFDNUIsQ0FBQztJQUVPLFdBQVcsQ0FBQyxHQUFhO1FBQzdCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFHLENBQUM7SUFDNUIsQ0FBQztBQUNELENBQUM7QUE3R0w7SUFBQyxpQkFBVSxFQUFFOztxQkFBQTtBQUNBLHlCQUFpQixvQkE0R3pCLENBQUEiLCJmaWxlIjoiRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbi8vIGltcG9ydCB7IE1hcnF1ZSB9IGZyb20gXCIuL21hcnF1ZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi92ZWhpY3VsZS9mb3JtLnNlcnZpY2VcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ29sbGVjdGlvblNlcnZpY2UgeyBcclxuXHJcbiAgICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHAsIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlKSB7fVxyXG4gICAgLypcclxuICAgICAgICBQQVJBTVM6IGNvbGxOYW1lIC0tPiBOYW1lIG9mIHRoZSBjb2xsZWN0aW9uIHdoZXJlIGFyZSBzdG9yZWQgdGhlIGRhdGFcclxuICAgICAgICAgICAgICAgIGZpbHRlcnMgIC0tPiBPYmplY3Qgd2l0aCB0aGUgZmlsdGVyIG5hbWUgYW5kIHRoZSBzdGVwX2lkIHdoZXJlIGlzIHN0b3JlZCB0aGUgdmFsdWUgb2YgdGhlIGZpbHRlclxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ICAgLS0+IFRoZSB2YWx1ZSB0aGF0IHdpbGwgYmUgcmV0cmlldmVkIGluIHRoZSBjb2xsZWN0aW9uIGFuZCBkaXNwbGF5ZWQgb24gdGhlIHNjcmVlblxyXG4gICAgICovXHJcbiAgICBnZXRGb3JtRGF0YShfaWQsIGNvbGxOYW1lLCBmaWx0ZXJzLCBzZWxlY3Qpe1xyXG4gICAgICAgIGxldCBmaWx0ZXJzTmFtZVRvU3RyaW5nID0gW107XHJcbiAgICAgICAgbGV0IGZpbHRlcnNWYWx1ZVRvU3RyaW5nID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBmaWx0ZXJzLmxlbmd0aDtpKyspIHtcclxuICAgICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGQpO1xyXG4gICAgICAgICAgICBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKHRoaXMuZ2V0VmFsdWVTZWxlY3RlZChmaWx0ZXJzW2ldLnN0ZXBfaWQpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBxdWVyeSA9ICdfaWQ9JyArX2lkICsgJyZjb2xsTmFtZT0nICsgY29sbE5hbWUgKyAnJmZpbHRlcnNfbmFtZT0nICsgZmlsdGVyc05hbWVUb1N0cmluZyArICcmZmlsdGVyc192YWx1ZT0nICsgZmlsdGVyc1ZhbHVlVG9TdHJpbmc7XHJcblxyXG4gICAgICAgIGxldCBjb21wbGV0ZVVybCA9ICBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnZ2V0Rm9ybURhdGE/JytxdWVyeTtcclxuICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgLy8gIGxldCBib2R5ID0geyBcImZpbHRlcnNcIjogZmlsdGVycywgXCJjb2xsTmFtZVwiIDogY29sbE5hbWV9O1xyXG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0RGF0YXMoY29sbE5hbWUsIGZpbHRlcnMsIHNlbGVjdClcclxuXHJcbiAgICAgICAgLy8gcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFzKGNvbGxOYW1lLCBmaWx0ZXJzLCBzZWxlY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHZhciBmaWx0ZXJzTmFtZVRvU3RyaW5nID0gW11cclxuICAgICAgICB2YXIgZmlsdGVyc1ZhbHVlVG9TdHJpbmcgPSBbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklFTEQgRklMVEVSIFNJWkVcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJzKTtcclxuICAgICAgICBmb3IgKHZhciBpPTA7IGk8IGZpbHRlcnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICBmaWx0ZXJzTmFtZVRvU3RyaW5nLnB1c2goZmlsdGVyc1tpXS5maWVsZCk7XHJcbiAgICAgICAgICAgIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2godGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZCkpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyc1ZhbHVlVG9TdHJpbmcpO1xyXG4gICAgICAgICAgICAvLyBmaWx0ZXJzVmFsdWVUb1N0cmluZy5wdXNoKCdBVURJJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmb3IgKHZhciBpPTA7IGk8IGZpbHRlcnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgIC8vICAgICBmb3IgKHZhciBqPTA7IGk8IGZpbHRlcnNbal0uZmllbGQubGVuZ3RoO2orKykge1xyXG4gICAgICAgIC8vICAgICAgICAgZmlsdGVyc05hbWVUb1N0cmluZy5wdXNoKGZpbHRlcnNbaV0uZmllbGRbal0pO1xyXG4gICAgICAgIC8vICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkW2pdKSk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcblxyXG4gICAgICAgIHZhciBxdWVyeSA9ICdjb2xsTmFtZT0nICsgY29sbE5hbWUgKyAnJmZpbHRlcnNfbmFtZT0nICsgZmlsdGVyc05hbWVUb1N0cmluZyArICcmZmlsdGVyc192YWx1ZT0nICsgZmlsdGVyc1ZhbHVlVG9TdHJpbmc7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3QgIT0gJycpe1xyXG4gICAgICAgICAgICBxdWVyeSA9IHF1ZXJ5ICsgJyZzZWxlY3Q9JyArIHNlbGVjdDtcclxuICAgICAgICB9XHJcbiAgICAgICAvLyBjb25zb2xlLmxvZyhmaWx0ZXJzVG9TdHJpbmcpO1xyXG4gICAgICAgIGxldCBjb21wbGV0ZVVybCA9ICBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnY3VzdG9tX2NvbGxlY3Rpb24/JytxdWVyeTtcclxuICAgICAgICAvL3JldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgIC8vICBsZXQgYm9keSA9IHsgXCJmaWx0ZXJzXCI6IGZpbHRlcnMsIFwiY29sbE5hbWVcIiA6IGNvbGxOYW1lfTtcclxuICAgICAgICBsZXQgaGVhZGVycz0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh7IGhlYWRlcnM6IGhlYWRlcnMgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuXHJcblxyXG4gICAgICAgICAgLy8gIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgICAgICAgICAvLyAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICAvLyAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIC8vIGxldCBtYXJxdWUgPSBuZXcgTWFycXVlKGRhdGFbaV0ubmFtZSwgZGF0YVtpXS51cmwsIGRhdGFbaV0ubW9kZWxlcyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgIG9ianMucHVzaChkYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIC8vICB9XHJcbiAgICAgICAgICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhvYmpzKVxyXG4gICAgICAgICAgICAgICAgLy8gIHJldHVybiBvYmpzO1xyXG4gICAgICAgIC8vKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWYWx1ZVNlbGVjdGVkKHN0ZXBJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZSk7XHJcbiAgICAgICAgLy9SRVRSSUVWRSBJTiBTVEVQIENPTkZJRyBGSUxFIFRIRSBOQU1FIE9GIFNBVkVEIFZBTFVFIEZPUiBUSEUgU1BFQ0lGSUVEIFNURVBcclxuICAgICAgICBmb3IgKHZhciBpdGVtIG9mIHRoaXMuX3N0ZXBTZXJ2aWNlLnN0ZXApIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBzdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUZvckZvcm1TZXJ2aWNlID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUZvckZvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBSRVRVUk4gVEhFIENPTlRFTlQgT0YgVkFSSUFCTEUgUElDS0VEIFVQIElOIFNURVAgU0VSVklDRVxyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2YWwoJ2l0ZW0uJyArIHZhbHVlRm9yRm9ybVNlcnZpY2UpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZhbCgnaXRlbS4nICsgdmFsdWVGb3JGb3JtU2VydmljZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHZhbHVlU2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5LmRhdGEgfHwgeyB9O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuIl19
