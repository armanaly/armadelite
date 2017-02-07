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
            console.log(window.location);
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
            if (window.location.hash == '#/admin') {
                this.steps[0].master_type = 'admin';
            }
            console.log(this.step[0]);
            // for (let i = 0; i < this.step.length; i++) {
            //     console.log(this.step[i].step_id);
            // }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9zdGVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyx1QkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsNEJBQTBCLGFBQWEsQ0FBQyxDQUFBO0FBQ3hDLHlCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUN6QyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFaEMsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFGWSxDQUFDO0lBR3BDLFFBQVE7UUFDSixJQUFJLFdBQVcsR0FBRyx1QkFBYyxDQUFDLFFBQVEsR0FBQyxNQUFNLENBQUM7UUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQzthQUM3QixTQUFTLEVBQUU7YUFDWCxJQUFJLENBQUMsUUFBUTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBRTVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDN0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTdCLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUNyQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxxQkFBUyxDQUN4QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUNuQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUN2QixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBS1QsQ0FBQztZQUNELG1CQUFtQjtZQUNuQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUE7WUFDdkMsQ0FBQztZQUVBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNCLCtDQUErQztZQUMvQyx5Q0FBeUM7WUFDekMsSUFBSTtZQUdKLHVCQUF1QjtZQUMxQixpQkFBaUI7UUFFdEIsQ0FBQyxDQUFDO2FBQ0csS0FBSyxDQUFDLEtBQUssSUFBSSx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7QUFFTCxDQUFDO0FBdEREO0lBQUMsaUJBQVUsRUFBRTs7ZUFBQTtBQUNBLG1CQUFXLGNBcUR2QixDQUFBIiwiZmlsZSI6IkVuZ2luZS9zdGVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgU3RlcE1vZGVsIH0gZnJvbSBcIi4vc3RlcE1vZGVsXCI7XHJcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3RlcFNlcnZpY2Uge1xyXG4gICAgZGF0YXM7XHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuICAgIHN0ZXBzOiBhbnk7XHJcbiAgICBzdGVwOiBTdGVwTW9kZWxbXSA9IFtdO1xyXG4gICAgZ2V0U3RlcHMoKTogUHJvbWlzZTx2b2lkPntcclxuICAgICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnc3RlcCc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmpzb24oKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBvYmpUZXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFbaV0uc3RlcF9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwLnB1c2gobmV3IFN0ZXBNb2RlbChcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5zdGVwX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtpXS5jb25maWd1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm1hc3Rlcl9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhW2ldLm1hc3Rlcl90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIFtdKSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIC8vb2Jqcy5wdXNoKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKG9ianMpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAvLyAgb2JqVGVzdC5wdXNoKHN0ZXApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnN0ZXAgPSBvYmpzO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09ICcjL2FkbWluJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1swXS5tYXN0ZXJfdHlwZSA9ICdhZG1pbidcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwWzBdKTtcclxuICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGVwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5zdGVwW2ldLnN0ZXBfaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG9ialRlc3QpO1xyXG4gICAgICAgICAgICAgLy8gICByZXR1cm4gb2JqcztcclxuXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbn0iXX0=
