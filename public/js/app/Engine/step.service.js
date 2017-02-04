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
const stepModel_1 = require("./stepModel");
const global_1 = require("../global");
require('rxjs/Rx');
const Observable_1 = require("rxjs/Observable");
let StepService = class StepService {
    constructor(_http) {
        this._http = _http;
        this.step = [];
    }
    getSteps() {
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'step';
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
            console.log(response.json());
            const data = response.json();
            this.steps = response.json();
            let objs = [];
            let objTest = [];
            console.log("data");
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                console.log(data[i].step_id);
                this.step.push(new stepModel_1.StepModel(data[i].step_id, data[i].type, data[i].name, data[i].configuration, data[i].master_name, data[i].master_type, []));
            }
            //this.step = objs;
            console.log(this.step[0]);
            for (let i = 0; i < this.step.length; i++) {
                console.log(this.step[i].step_id);
            }
            //console.log(objTest);
            //   return objs;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
StepService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], StepService);
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9zdGVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyx1QkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsNEJBQTBCLGFBQWEsQ0FBQyxDQUFBO0FBQ3hDLHlCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUN6QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFaEMsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFGWSxDQUFDO0lBR3BDLFFBQVE7UUFDSixJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsUUFBUTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUNuQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBS1QsQ0FBQztZQUNELG1CQUFtQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN0QyxDQUFDO1lBR0QsdUJBQXVCO1lBQzFCLGlCQUFpQjtRQUV0QixDQUFDLENBQUM7YUFDRyxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztBQUVMLENBQUM7QUFoREQ7SUFBQyxpQkFBVSxFQUFFOztlQUFBO0FBQ0EsbUJBQVcsY0ErQ3ZCLENBQUEiLCJmaWxlIjoiRW5naW5lL3N0ZXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdGVwTW9kZWwgfSBmcm9tIFwiLi9zdGVwTW9kZWxcIjtcclxuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGVwU2VydmljZSB7XHJcbiAgICBkYXRhcztcclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG4gICAgc3RlcHM6IGFueTtcclxuICAgIHN0ZXA6IFN0ZXBNb2RlbFtdID0gW107XHJcbiAgICBnZXRTdGVwcygpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzdGVwJztcclxuICAgICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5qc29uKCkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqVGVzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhW2ldLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcC5wdXNoKG5ldyBTdGVwTW9kZWwoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uc3RlcF9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0uY29uZmlndXJhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5tYXN0ZXJfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5tYXN0ZXJfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBbXSkpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgICAgICAvL29ianMucHVzaChzdGVwKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhvYmpzKTtcclxuICAgICAgICAgICAgICAgIC8vICAgLy8gIG9ialRlc3QucHVzaChzdGVwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vdGhpcy5zdGVwID0gb2JqcztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcFswXSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RlcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcFtpXS5zdGVwX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhvYmpUZXN0KTtcclxuICAgICAgICAgICAgIC8vICAgcmV0dXJuIG9ianM7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG59Il19
