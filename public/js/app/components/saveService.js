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
const form_service_1 = require("./form.service");
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
    saveData(currentStep) {
        // if (this._formService.arrayFiles.has('uploadFile')) {
        //     let headerFiles = new Headers();
        //     headerFiles.append('EncType', 'multipart/form-data');
        //     headerFiles.append('Accept', 'application/json');
        //     let options = new RequestOptions({headers: headerFiles});
        //     var completeUrl = GlobalVariable.BASE_URL + 'store_file';
        //     this._http.post(`${completeUrl}`, this._formService.arrayFiles, {headers: headerFiles})
        //         .map(res => res.json())
        //         .catch(error => Observable.throw(error))
        //         .subscribe(
        //             data => {
        //                 // console.log('success')
        //                 // console.log(data)
        //                 //
        //                 // this._formService.arraySteps.push({"step_id": currentStep});
        //                 //
        //                 // console.log(data[0].step_name);
        //                 // for (let stepName in data) {
        //                 //   //  console.log(stepName);
        //                 //     for (let j = 0; j < this._formService.arraySteps.length; j++) {
        //                 //         if (this._formService.arraySteps[j].nom == data.step_name) {
        //                 //             this._formService.arraySteps[j].file_url = data.file_url;
        //                 //             break;
        //                 //         }
        //                 // }}
        //
        //
        //                 // console.log(this._formService.arraySteps);
        //                 //
        //                 // //SAVE FORM DATA INTO COLLECTION
        //                 // const headers = new Headers({'Content-Type': 'application/json'});
        //                 // let body = JSON.stringify(this._formService.arraySteps);
        //                 // // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        //                 // let saveUrl = GlobalVariable.BASE_URL + 'save_datas';
        //                 // return this._http.post(saveUrl, body, {headers: headers})
        //                 //     .map(response => response)
        //                 //     .catch(error => Observable.throw(error.json()));
        //             },
        //             error => console.log(error)
        //         )
        // }
        // else {
        this._formService.arraySteps.push({ "step_id": currentStep });
        let body = JSON.stringify(this._formService.arraySteps);
        console.log("body");
        console.log(body);
        //SAVE FORM DATA INTO COLLECTION
        const headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        // return this._http.post('http://localhost:3000/demand', body, {headers: headers})
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'save_datas';
        return this._http.post(completeUrl, body, { headers: headers })
            .map(response => response)
            .catch(error => Observable_1.Observable.throw(error.json()));
    }
};
SaveService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http, form_service_1.FormService])
], SaveService);
exports.SaveService = SaveService;
// } 

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2F2ZVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6Qyx5QkFBK0IsV0FBVyxDQUFDLENBQUE7QUFDM0MsdUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBQzdDLCtCQUEwQixnQkFBZ0IsQ0FBQyxDQUFBO0FBRzNDO0lBRUksWUFBcUIsS0FBVyxFQUFVLFlBQXlCO1FBQTlDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtJQUFHLENBQUM7SUFFdkUsU0FBUztRQUNELElBQUksV0FBVyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDaEMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUscUJBQXFCLENBQUMsQ0FBQztRQUNyRCxXQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pELElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztRQUN6RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUMsQ0FBQzthQUN6RixHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN0QixLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUViLFFBQVEsQ0FBQyxXQUFXO1FBRWhCLHdEQUF3RDtRQUN4RCx1Q0FBdUM7UUFDdkMsNERBQTREO1FBQzVELHdEQUF3RDtRQUN4RCxnRUFBZ0U7UUFDaEUsZ0VBQWdFO1FBQ2hFLDhGQUE4RjtRQUM5RixrQ0FBa0M7UUFDbEMsbURBQW1EO1FBQ25ELHNCQUFzQjtRQUN0Qix3QkFBd0I7UUFDeEIsNENBQTRDO1FBQzVDLHVDQUF1QztRQUN2QyxxQkFBcUI7UUFDckIsa0ZBQWtGO1FBQ2xGLHFCQUFxQjtRQUNyQixxREFBcUQ7UUFDckQsa0RBQWtEO1FBQ2xELGtEQUFrRDtRQUNsRCx5RkFBeUY7UUFDekYsMEZBQTBGO1FBQzFGLDJGQUEyRjtRQUMzRix3Q0FBd0M7UUFDeEMsK0JBQStCO1FBQy9CLHdCQUF3QjtRQUN4QixFQUFFO1FBQ0YsRUFBRTtRQUNGLGdFQUFnRTtRQUNoRSxxQkFBcUI7UUFDckIsc0RBQXNEO1FBQ3RELHdGQUF3RjtRQUN4Riw4RUFBOEU7UUFDOUUseUdBQXlHO1FBQ3pHLDJFQUEyRTtRQUMzRSwrRUFBK0U7UUFDL0Usb0RBQW9EO1FBQ3BELDBFQUEwRTtRQUMxRSxpQkFBaUI7UUFDakIsMENBQTBDO1FBQzFDLFlBQVk7UUFDWixJQUFJO1FBQ0osU0FBUztRQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV4RCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEIsZ0NBQWdDO1FBRWhDLE1BQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFFLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNsRSxtRkFBbUY7UUFDbkYsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUcsWUFBWSxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDO2FBQ3hELEdBQUcsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDO2FBQ3pCLEtBQUssQ0FBQyxLQUFLLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0FBQ0osQ0FBQztBQTNFTjtJQUFDLGlCQUFVLEVBQUU7O2VBQUE7QUFDQSxtQkFBVyxjQTBFbEIsQ0FBQTtBQUNOLElBQUkiLCJmaWxlIjoiY29tcG9uZW50cy9zYXZlU2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7SHR0cCwgUmVxdWVzdE9wdGlvbnMsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2F2ZVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwLCBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UpIHt9XHJcblxyXG4gICAgc2F2ZUZpbGVzKCkge1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVyRmlsZXMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0VuY1R5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJGaWxlc30pO1xyXG4gICAgICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzdG9yZV9maWxlJztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChgJHtjb21wbGV0ZVVybH1gLCB0aGlzLl9mb3JtU2VydmljZS5hcnJheUZpbGVzLCB7aGVhZGVyczogaGVhZGVyRmlsZXN9KVxyXG4gICAgICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICBzYXZlRGF0YShjdXJyZW50U3RlcCkge1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlGaWxlcy5oYXMoJ3VwbG9hZEZpbGUnKSkge1xyXG4gICAgICAgIC8vICAgICBsZXQgaGVhZGVyRmlsZXMgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIC8vICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0VuY1R5cGUnLCAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgIC8vICAgICBoZWFkZXJGaWxlcy5hcHBlbmQoJ0FjY2VwdCcsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgICAgLy8gICAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHtoZWFkZXJzOiBoZWFkZXJGaWxlc30pO1xyXG4gICAgICAgIC8vICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCArICdzdG9yZV9maWxlJztcclxuICAgICAgICAvLyAgICAgdGhpcy5faHR0cC5wb3N0KGAke2NvbXBsZXRlVXJsfWAsIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5RmlsZXMsIHtoZWFkZXJzOiBoZWFkZXJGaWxlc30pXHJcbiAgICAgICAgLy8gICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKVxyXG4gICAgICAgIC8vICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAvLyAgICAgICAgICAgICBkYXRhID0+IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goe1wic3RlcF9pZFwiOiBjdXJyZW50U3RlcH0pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhWzBdLnN0ZXBfbmFtZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IHN0ZXBOYW1lIGluIGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAvLyAgY29uc29sZS5sb2coc3RlcE5hbWUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal0ubm9tID09IGRhdGEuc3RlcF9uYW1lKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHNbal0uZmlsZV91cmwgPSBkYXRhLmZpbGVfdXJsO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIH19XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gLy9TQVZFIEZPUk0gREFUQSBJTlRPIENPTExFQ1RJT05cclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHsnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGxldCBib2R5ID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9kZW1hbmQnLCBib2R5LCB7aGVhZGVyczogaGVhZGVyc30pXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIGxldCBzYXZlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc2F2ZV9kYXRhcyc7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLl9odHRwLnBvc3Qoc2F2ZVVybCwgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KVxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAvLyAgICAgLm1hcChyZXNwb25zZSA9PiByZXNwb25zZSlcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgLy8gICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgLy8gICAgICAgICApXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLnB1c2goe1wic3RlcF9pZFwiOiBjdXJyZW50U3RlcH0pO1xyXG4gICAgICAgICAgICBsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMpO1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJib2R5XCIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhib2R5KTtcclxuXHJcbiAgICAgICAgICAgIC8vU0FWRSBGT1JNIERBVEEgSU5UTyBDT0xMRUNUSU9OXHJcblxyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuX2h0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2RlbWFuZCcsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwgKyAnc2F2ZV9kYXRhcyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9odHRwLnBvc3QoY29tcGxldGVVcmwsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSlcclxuICAgICAgICAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4gcmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkpKTtcclxuICAgICAgICB9XHJcbiAgICAgfVxyXG4vLyB9Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
