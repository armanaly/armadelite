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
const http_1 = require("@angular/http");
const Observable_1 = require("rxjs/Observable");
const form_service_1 = require("./form.service");
const global_1 = require("../global");
let SaveService = class SaveService {
    constructor(_http, _formService) {
        this._http = _http;
        this._formService = _formService;
    }
    saveFiles() {
        let headerFiles = new http_1.Headers();
        headerFiles.append('EncType', 'multipart/form-data');
        headerFiles.append('Accept', 'application/json');
        let options = new http_1.RequestOptions({ headers: headerFiles });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'store_file';
        return this._http.post(`${completeUrl}`, this._formService.arrayFiles, { headers: headerFiles })
            .map(res => res.json())
            .catch(error => Observable_1.Observable.throw(error));
    }
    saveData(currentStep, appName) {
        console.log(appName);
        this._formService.arraySteps.push({ "step_id": currentStep }, { "app_name": appName });
        let body = this._formService.arraySteps;
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'save_datas';
        return this._http.post(completeUrl, JSON.stringify(body), { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
SaveService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, form_service_1.FormService])
], SaveService);
exports.SaveService = SaveService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBeUM7QUFDekMsd0NBQTREO0FBQzVELGdEQUE2QztBQUM3QyxpREFBMkM7QUFDM0Msc0NBQXlDO0FBR3pDLElBQWEsV0FBVyxHQUF4QjtJQUVJLFlBQXFCLEtBQVcsRUFBVSxZQUF5QjtRQUE5QyxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7SUFBRyxDQUFDO0lBRXZFLFNBQVM7UUFDRCxJQUFJLFdBQVcsR0FBRyxJQUFJLGNBQU8sRUFBRSxDQUFDO1FBQ2hDLFdBQVcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLHFCQUFxQixDQUFDLENBQUM7UUFDckQsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNqRCxJQUFJLE9BQU8sR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLENBQUM7YUFDekYsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUViLFFBQVEsQ0FBQyxXQUFXLEVBQUUsT0FBTztRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBRyxPQUFPLEVBQUMsQ0FBQyxDQUFDO1FBRW5GLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO1FBR3hDLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDekQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzthQUN6QixLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Q0FDSCxDQUFBO0FBNUJPLFdBQVc7SUFEdkIsaUJBQVUsRUFBRTtxQ0FHbUIsV0FBSSxFQUF3QiwwQkFBVztHQUYxRCxXQUFXLENBNEJsQjtBQTVCTyxrQ0FBVyIsImZpbGUiOiJjb21wb25lbnRzL3NhdmVTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0h0dHAsIFJlcXVlc3RPcHRpb25zLCBIZWFkZXJzfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2ZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG4gICAgc2F2ZUZpbGVzKCkge1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVyRmlsZXMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0VuY1R5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJGaWxlc30pO1xyXG4gICAgICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzdG9yZV9maWxlJztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb21wbGV0ZVVybH1gLCB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLCB7aGVhZGVyczogaGVhZGVyRmlsZXN9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YShjdXJyZW50U3RlcCwgYXBwTmFtZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcHBOYW1lKVxyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goe1wic3RlcF9pZFwiOiBjdXJyZW50U3RlcH0se1wiYXBwX25hbWVcIiA6IGFwcE5hbWV9KTtcclxuICAgICAgICAgICAgLy90aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goKVxyXG4gICAgICAgICAgICBsZXQgYm9keSA9IHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHM7XHJcblxyXG4gICAgICAgICAgICAvL1NBVkUgRk9STSBEQVRBIElOVE8gQ09MTEVDVElPTlxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc2F2ZV9kYXRhcyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIEpTT04uc3RyaW5naWZ5KGJvZHkpLCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuLy8gfSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
