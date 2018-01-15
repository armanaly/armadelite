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
            console.log(window.location.hash);
            if (window.location.hash == '#/admin') {
                this.steps[0].master_type = 'admin';
            }
            else
                this.steps[0].master_type = 'form';
            console.log(this.steps);
        })
            .catch(error => console.log(error.json()));
    }
};
StepService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StepService);
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkVuZ2luZS9zdGVwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBOEM7QUFDOUMsd0NBQXlEO0FBRXpELHNDQUF5QztBQUV6QyxJQUFhLFdBQVcsR0FBeEI7SUFFSSxZQUFxQixLQUFXO1FBQVgsVUFBSyxHQUFMLEtBQUssQ0FBTTtRQUVoQyxVQUFLLEdBQWdCLEVBQUUsQ0FBQztRQUN4QixhQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ2QsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVmLGVBQVUsR0FBRyxDQUFDLENBQUE7SUFOcUIsQ0FBQztJQVFwQyxRQUFRLENBQUMsT0FBTztRQUNaLElBQUksS0FBSyxHQUFHLFdBQVcsR0FBRSxPQUFPLENBQUM7UUFDakMsSUFBSSxXQUFXLEdBQUcsdUJBQWMsQ0FBQyxRQUFRLEdBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO2FBQzdCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1lBQ3BELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUM5QyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1lBRWhELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztZQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztnQkFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBQ3hDLENBQUM7WUFDRCxJQUFJO2dCQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUV4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMvQixDQUFDLENBQUM7YUFDRyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkQsQ0FBQztDQUNKLENBQUE7QUFqQ1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUdtQixXQUFJO0dBRnZCLFdBQVcsQ0FpQ3ZCO0FBakNZLGtDQUFXIiwiZmlsZSI6IkVuZ2luZS9zdGVwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwLCBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBTdGVwTW9kZWwgfSBmcm9tIFwiLi9zdGVwTW9kZWxcIjtcbmltcG9ydCB7R2xvYmFsVmFyaWFibGV9IGZyb20gXCIuLi9nbG9iYWxcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cblxuICAgIHN0ZXBzOiBTdGVwTW9kZWxbXSA9IFtdO1xuICAgIGxhbmd1YWdlID0gJyc7XG4gICAgbGFuZ3VhZ2VzID0gW107XG4gICAgdGVtcGxhdGU6ICcnO1xuICAgIG1lbnVfbGV2ZWwgPSAwXG5cbiAgICBnZXRTdGVwcyhhcHBOYW1lKTogUHJvbWlzZTx2b2lkPntcbiAgICAgICAgdmFyIHF1ZXJ5ID0gJ2FwcF9uYW1lPScgK2FwcE5hbWU7XG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzdGVwPycrcXVlcnk7XG4gICAgICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcbiAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMgPSByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5sYW5ndWFnZSA9IHJlc3BvbnNlLmpzb24oKVswXS5kZWZhdWx0X2xhbmd1YWdlO1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2VzID0gcmVzcG9uc2UuanNvbigpWzBdLmxhbmd1YWdlcztcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gcmVzcG9uc2UuanNvbigpWzBdLmRlc2lnbjtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnVfbGV2ZWwgPSByZXNwb25zZS5qc29uKClbMF0ubWVudV9sZXZlbDtcblxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHMuc3BsaWNlKDAsMSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnIy9hZG1pbicpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2FkbWluJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2Zvcm0nO1xuXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwcylcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvci5qc29uKCkpKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
