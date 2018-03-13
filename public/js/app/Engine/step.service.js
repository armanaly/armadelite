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
const http_1 = require("@angular/http");
const core_1 = require("@angular/core");
const global_1 = require("../global");
let StepService = class StepService {
    constructor(_http) {
        this._http = _http;
        this.steps = [];
        this.language = '';
        this.languages = [];
        this.menu_level = 0;
    }
    getSteps(appName) {
        var query = 'app_name=' + appName;
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'step?' + query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
            this.steps = response.json();
            this.language = response.json()[0].default_language;
            this.languages = response.json()[0].languages;
            this.template = response.json()[0].design;
            this.menu_level = response.json()[0].menu_level;
            this.steps.splice(0, 1);
            if (window.location.hash == '#/admin') {
                this.steps[0].master_type = 'admin';
            }
            else
                this.steps[0].master_type = 'form';
        })
            .catch(error => console.log(error));
    }
};
StepService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StepService);
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9zdGVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBOEM7QUFDOUMsd0NBQXlEO0FBRXpELHNDQUF5QztBQUV6QyxJQUFhLFdBQVcsR0FBeEI7SUFFSSxZQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUVoQyxVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGVBQVUsR0FBRyxDQUFDLENBQUE7SUFOcUIsQ0FBQztJQVFwQyxRQUFRLENBQUMsT0FBTztRQUNaLElBQUksS0FBSyxHQUFHLFdBQVcsR0FBRSxPQUFPLENBQUM7UUFDakMsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQzdCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBRWhELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUV2QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDeEMsQ0FBQztZQUNELElBQUk7Z0JBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBR2hELENBQUMsQ0FBQzthQUNHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0NBQ0osQ0FBQTtBQWpDWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR21CLFdBQUk7R0FGdkIsV0FBVyxDQWlDdkI7QUFqQ1ksa0NBQVciLCJmaWxlIjoiRW5naW5lL3N0ZXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBTdGVwTW9kZWwgfSBmcm9tIFwiLi9zdGVwTW9kZWxcIjtcclxuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGVwU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgc3RlcHM6IFN0ZXBNb2RlbFtdID0gW107XHJcbiAgICBsYW5ndWFnZSA9ICcnO1xyXG4gICAgbGFuZ3VhZ2VzID0gW107XHJcbiAgICB0ZW1wbGF0ZTogJyc7XHJcbiAgICBtZW51X2xldmVsID0gMFxyXG5cclxuICAgIGdldFN0ZXBzKGFwcE5hbWUpOiBQcm9taXNlPHZvaWQ+e1xyXG4gICAgICAgIHZhciBxdWVyeSA9ICdhcHBfbmFtZT0nICthcHBOYW1lO1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzdGVwPycrcXVlcnk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgICAgICAgICAudG9Qcm9taXNlKClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwcyA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2UgPSByZXNwb25zZS5qc29uKClbMF0uZGVmYXVsdF9sYW5ndWFnZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gcmVzcG9uc2UuanNvbigpWzBdLmxhbmd1YWdlcztcclxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSByZXNwb25zZS5qc29uKClbMF0uZGVzaWduO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZW51X2xldmVsID0gcmVzcG9uc2UuanNvbigpWzBdLm1lbnVfbGV2ZWw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwcy5zcGxpY2UoMCwxKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbi5oYXNoKTtcclxuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnIy9hZG1pbicpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPSAnYWRtaW4nO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2Zvcm0nO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RlcHMpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
