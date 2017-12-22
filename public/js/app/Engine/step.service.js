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
const stepModel_1 = require("./stepModel");
const global_1 = require("../global");
let StepService = class StepService {
    constructor(_http) {
        this._http = _http;
        this.step = new Array();
        this.steps = [];
        this.language = '';
        this.languages = [];
        this.menu_level = 0;
    }
    getSteps(appName) {
        console.log(window);
        console.log(appName);
        var query = 'app_name=' + appName;
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'step?' + query;
        return this._http.get(completeUrl)
            .toPromise()
            .then(response => {
            console.log(window.location);
            this.steps = response.json();
            this.language = response.json()[0].default_language;
            this.languages = response.json()[0].languages;
            this.template = response.json()[0].design;
            this.menu_level = response.json()[0].menu_level;
            let objs = [];
            let objTest = [];
            this.steps.splice(0, 1);
            for (let i = 0; i < this.steps.length; i++) {
                this.step[i] = (new stepModel_1.StepModel(this.steps[i].step_id, this.steps[i].type, this.steps[i].name, this.steps[i].logo_url, this.steps[i].configuration, this.steps[i].master_name, this.steps[i].master_type, this.steps[i].conditions, []));
            }
            this.steps[0].master_type = 'form';
            console.log(window.location.hash);
            if (window.location.hash == '#/admin') {
                this.steps[0].master_type = 'admin';
            }
            console.log(this.steps);
            console.log(this.language);
            console.log(this.languages);
            console.log(this.template);
        })
            .catch(error => console.log(error.json()));
    }
};
StepService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StepService);
exports.StepService = StepService;

//# sourceMappingURL=data:application/json;base64,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QUcsTUFBTSxDQUFDO1lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQSxDQUFDO2dCQUNuQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDeEMsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQzthQUNHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRCxDQUFDO0NBQ0EsQ0FBQTtBQXpEUSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR21CLFdBQUk7R0FGdkIsV0FBVyxDQXlEbkI7QUF6RFEsa0NBQVciLCJmaWxlIjoiRW5naW5lL3N0ZXAuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFN0ZXBNb2RlbCB9IGZyb20gXCIuL3N0ZXBNb2RlbFwiO1xuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xuLy8gaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuLy8gaW1wb3J0ICdyeGpzL1J4Jztcbi8vIGltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBSb3V0ZXJ9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGVwU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cbiAgICAvL2RhdGFzO1xuICAgIHN0ZXAgPSBuZXcgQXJyYXkoKTtcbiAgICBzdGVwczogU3RlcE1vZGVsW10gPSBbXTtcbiAgICBsYW5ndWFnZSA9ICcnO1xuICAgIGxhbmd1YWdlcyA9IFtdO1xuICAgIGRhdGFzO1xuICAgIHRlbXBsYXRlOiAnJztcbiAgICBtZW51X2xldmVsPSAwO1xuICAgIGdldFN0ZXBzKGFwcE5hbWUpOiBQcm9taXNlPHZvaWQ+e1xuICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cpO1xuICAgICAgICBjb25zb2xlLmxvZyhhcHBOYW1lKTtcblxuICAgICAgICB2YXIgcXVlcnkgPSAnYXBwX25hbWU9JyArYXBwTmFtZTtcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3N0ZXA/JytxdWVyeTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxuICAgICAgICAgICAgIC50b1Byb21pc2UoKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhdGlvbilcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzID0gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMubGFuZ3VhZ2UgPSByZXNwb25zZS5qc29uKClbMF0uZGVmYXVsdF9sYW5ndWFnZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IHJlc3BvbnNlLmpzb24oKVswXS5sYW5ndWFnZXM7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IHJlc3BvbnNlLmpzb24oKVswXS5kZXNpZ247XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51X2xldmVsID0gcmVzcG9uc2UuanNvbigpWzBdLm1lbnVfbGV2ZWw7XG4gICAgICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9ialRlc3QgPSBbXTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzLnNwbGljZSgwLDEpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhW2ldLnN0ZXBfaWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBbaV0gPSAobmV3IFN0ZXBNb2RlbChcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0uc3RlcF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0ubG9nb191cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzW2ldLmNvbmZpZ3VyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzW2ldLm1hc3Rlcl9uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGVwc1tpXS5tYXN0ZXJfdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbaV0uY29uZGl0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgW10pKTtcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc3RlcHNbMF0ubWFzdGVyX3R5cGUgPSAnZm9ybSc7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmxvY2F0aW9uLmhhc2gpO1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnIy9hZG1pbicpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBzWzBdLm1hc3Rlcl90eXBlID0gJ2FkbWluJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwcyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYW5ndWFnZSk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5sYW5ndWFnZXMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGVtcGxhdGUpXG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IuanNvbigpKSk7XG4gICAgfVxuICAgIH1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
