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
        //return Promise.resolve (this._http.get(completeUrl)
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
        console.log(select);
        if (filters.length > 0) {
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
        }
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
        for (var item of this._stepService.steps) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9jb2xsZWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFzRCxlQUFlLENBQUMsQ0FBQTtBQUN0RSx1QkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QyxxQ0FBcUM7QUFDckMseUJBQStCLFdBQVcsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzNDLCtCQUEwQiw0QkFBNEIsQ0FBQyxDQUFBO0FBRXZEO0lBRUssWUFBcUIsS0FBVyxFQUFVLFlBQXlCLEVBQVUsWUFBeUI7UUFBakYsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBQzNHOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTTtRQUN0QyxJQUFJLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUM3QixJQUFJLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUM5QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDekUsQ0FBQztRQUVELElBQUksS0FBSyxHQUFHLE1BQU0sR0FBRSxHQUFHLEdBQUcsWUFBWSxHQUFHLFFBQVEsR0FBRyxnQkFBZ0Is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QkFtR3pCLENBQUEiLCJmaWxlIjoiRW5naW5lL2NvbGxlY3Rpb24uc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbi8vIGltcG9ydCB7IE1hcnF1ZSB9IGZyb20gXCIuL21hcnF1ZVwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4vc3RlcC5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvcm0uc2VydmljZVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uU2VydmljZSB7IFxyXG5cclxuICAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCwgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UpIHt9XHJcbiAgICAvKlxyXG4gICAgICAgIFBBUkFNUzogY29sbE5hbWUgLS0+IE5hbWUgb2YgdGhlIGNvbGxlY3Rpb24gd2hlcmUgYXJlIHN0b3JlZCB0aGUgZGF0YVxyXG4gICAgICAgICAgICAgICAgZmlsdGVycyAgLS0+IE9iamVjdCB3aXRoIHRoZSBmaWx0ZXIgbmFtZSBhbmQgdGhlIHN0ZXBfaWQgd2hlcmUgaXMgc3RvcmVkIHRoZSB2YWx1ZSBvZiB0aGUgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICBzZWxlY3QgICAtLT4gVGhlIHZhbHVlIHRoYXQgd2lsbCBiZSByZXRyaWV2ZWQgaW4gdGhlIGNvbGxlY3Rpb24gYW5kIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuXHJcbiAgICAgKi9cclxuICAgIGdldEZvcm1EYXRhKF9pZCwgY29sbE5hbWUsIGZpbHRlcnMsIHNlbGVjdCl7XHJcbiAgICAgICAgbGV0IGZpbHRlcnNOYW1lVG9TdHJpbmcgPSBbXTtcclxuICAgICAgICBsZXQgZmlsdGVyc1ZhbHVlVG9TdHJpbmcgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGZpbHRlcnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICBmaWx0ZXJzTmFtZVRvU3RyaW5nLnB1c2goZmlsdGVyc1tpXS5maWVsZCk7XHJcbiAgICAgICAgICAgIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2godGhpcy5nZXRWYWx1ZVNlbGVjdGVkKGZpbHRlcnNbaV0uc3RlcF9pZCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ19pZD0nICtfaWQgKyAnJmNvbGxOYW1lPScgKyBjb2xsTmFtZSArICcmZmlsdGVyc19uYW1lPScgKyBmaWx0ZXJzTmFtZVRvU3RyaW5nICsgJyZmaWx0ZXJzX3ZhbHVlPScgKyBmaWx0ZXJzVmFsdWVUb1N0cmluZztcclxuXHJcbiAgICAgICAgbGV0IGNvbXBsZXRlVXJsID0gIEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydnZXRGb3JtRGF0YT8nK3F1ZXJ5O1xyXG4gICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSAodGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgLy8gIGxldCBib2R5ID0geyBcImZpbHRlcnNcIjogZmlsdGVycywgXCJjb2xsTmFtZVwiIDogY29sbE5hbWV9O1xyXG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PnJlc3BvbnNlLmpzb24oKSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuZ2V0RGF0YXMoY29sbE5hbWUsIGZpbHRlcnMsIHNlbGVjdClcclxuXHJcbiAgICAgICAgLy8gcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFzKGNvbGxOYW1lLCBmaWx0ZXJzLCBzZWxlY3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHZhciBmaWx0ZXJzTmFtZVRvU3RyaW5nID0gW11cclxuICAgICAgICB2YXIgZmlsdGVyc1ZhbHVlVG9TdHJpbmcgPSBbXVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpbHRlcnMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRklFTEQgRklMVEVSIFNJWkVcIilcclxuICAgICAgICBjb25zb2xlLmxvZyhmaWx0ZXJzKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3QpO1xyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDAgKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnNOYW1lVG9TdHJpbmcucHVzaChmaWx0ZXJzW2ldLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnNWYWx1ZVRvU3RyaW5nLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuZ2V0VmFsdWVTZWxlY3RlZChmaWx0ZXJzW2ldLnN0ZXBfaWQpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsdGVyc1ZhbHVlVG9TdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgLy8gZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCgnQVVESScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBmb3IgKHZhciBpPTA7IGk8IGZpbHRlcnMubGVuZ3RoO2krKykge1xyXG4gICAgICAgICAgICAvLyAgICAgZm9yICh2YXIgaj0wOyBpPCBmaWx0ZXJzW2pdLmZpZWxkLmxlbmd0aDtqKyspIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBmaWx0ZXJzTmFtZVRvU3RyaW5nLnB1c2goZmlsdGVyc1tpXS5maWVsZFtqXSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZmlsdGVyc1ZhbHVlVG9TdHJpbmcucHVzaCh0aGlzLmdldFZhbHVlU2VsZWN0ZWQoZmlsdGVyc1tpXS5zdGVwX2lkW2pdKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gJ2NvbGxOYW1lPScgKyBjb2xsTmFtZSArICcmZmlsdGVyc19uYW1lPScgKyBmaWx0ZXJzTmFtZVRvU3RyaW5nICsgJyZmaWx0ZXJzX3ZhbHVlPScgKyBmaWx0ZXJzVmFsdWVUb1N0cmluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGVjdCAhPSAnJyl7XHJcbiAgICAgICAgICAgIHF1ZXJ5ID0gcXVlcnkgKyAnJnNlbGVjdD0nICsgc2VsZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbHRlcnNUb1N0cmluZyk7XHJcbiAgICAgICAgbGV0IGNvbXBsZXRlVXJsID0gIEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydjdXN0b21fY29sbGVjdGlvbj8nK3F1ZXJ5O1xyXG4gICAgICAgIC8vcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgICAgLy8gIGxldCBib2R5ID0geyBcImZpbHRlcnNcIjogZmlsdGVycywgXCJjb2xsTmFtZVwiIDogY29sbE5hbWV9O1xyXG4gICAgICAgIGxldCBoZWFkZXJzPSBuZXcgSGVhZGVycyh7J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30pO1xyXG4gICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVycyB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZhbHVlU2VsZWN0ZWQoc3RlcElkKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX3N0ZXBTZXJ2aWNlKTtcclxuICAgICAgICAvL1JFVFJJRVZFIElOIFNURVAgQ09ORklHIEZJTEUgVEhFIE5BTUUgT0YgU0FWRUQgVkFMVUUgRk9SIFRIRSBTUEVDSUZJRUQgU1RFUFxyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fc3RlcFNlcnZpY2Uuc3RlcHMpIHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uc3RlcF9pZCA9PSBzdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZUZvckZvcm1TZXJ2aWNlID0gaXRlbS5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZUZvckZvcm1TZXJ2aWNlKTtcclxuICAgICAgICAvLyBSRVRVUk4gVEhFIENPTlRFTlQgT0YgVkFSSUFCTEUgUElDS0VEIFVQIElOIFNURVAgU0VSVklDRVxyXG4gICAgICAgIGZvciAodmFyIGl0ZW0gb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGV2YWwoJ2l0ZW0uJyArIHZhbHVlRm9yRm9ybVNlcnZpY2UpICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXZhbCgnaXRlbS4nICsgdmFsdWVGb3JGb3JtU2VydmljZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gcmV0dXJuIHZhbHVlU2VsZWN0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBleHRyYWN0RGF0YShyZXM6IFJlc3BvbnNlKSB7XHJcbiAgICAgICAgbGV0IGJvZHkgPSByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBib2R5LmRhdGEgfHwgeyB9O1xyXG4gICAgfVxyXG4gICAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
