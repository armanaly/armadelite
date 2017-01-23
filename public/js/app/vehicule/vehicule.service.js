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
const vehicule_1 = require("./vehicule");
const global_1 = require("../global");
let VehiculeService = class VehiculeService {
    constructor(_http) {
        this._http = _http;
        this.vehicules = [];
    }
    getDetails(modeleSelected) {
        //return this._http.get('http://localhost:3000/vehicule/' + modeleSelected)
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'vehicule/';
        return this._http.get(completeUrl + modeleSelected)
            .map(response => {
            const data = response.json().obj;
            let objs = [];
            for (let i = 0; i < data.length; i++) {
                let vehicule = new vehicule_1.Vehicule(data[i].marque, data[i].modele, data[i].date_debut, data[i].date_fin, data[i].version, data[i].portes, data[i].carburant, data[i].puissance, data[i].boite_vitesse);
                objs.push(vehicule);
            }
            return objs;
        })
            .catch(error => Observable_1.Observable.throw(error));
    }
};
VehiculeService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], VehiculeService);
exports.VehiculeService = VehiculeService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL3ZlaGljdWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUE4QixlQUFlLENBQUMsQ0FBQTtBQUM5Qyx1QkFBeUMsZUFBZSxDQUFDLENBQUE7QUFDekQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQiw2QkFBMkIsaUJBQWlCLENBQUMsQ0FBQTtBQUU3QywyQkFBeUIsWUFBWSxDQUFDLENBQUE7QUFDdEMseUJBQTZCLFdBQVcsQ0FBQyxDQUFBO0FBR3pDO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFDaEMsY0FBUyxHQUFlLEVBQUUsQ0FBQztJQURRLENBQUM7SUFFcEMsVUFBVSxDQUFDLGNBQWM7UUFDckIsMkVBQTJFO1FBQzNFLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFdBQVcsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQzthQUN0QyxHQUFHLENBQUMsUUFBUTtZQUNULE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUM7WUFDakMsSUFBSSxJQUFJLEdBQVUsRUFBRSxDQUFDO1lBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUNuQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDNUwsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QixDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUM7YUFDRyxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDakQsQ0FBQztBQWdDYixDQUFDO0FBbkREO0lBQUMsaUJBQVUsRUFBRTs7bUJBQUE7QUFDQSx1QkFBZSxrQkFrRDNCLENBQUEiLCJmaWxlIjoidmVoaWN1bGUvdmVoaWN1bGUuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHAsIEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHsgVmVoaWN1bGUgfSBmcm9tIFwiLi92ZWhpY3VsZVwiO1xyXG5pbXBvcnQge0dsb2JhbFZhcmlhYmxlfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWZWhpY3VsZVNlcnZpY2Uge1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuICAgIHZlaGljdWxlczogVmVoaWN1bGVbXSA9IFtdO1xyXG4gICAgZ2V0RGV0YWlscyhtb2RlbGVTZWxlY3RlZCl7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92ZWhpY3VsZS8nICsgbW9kZWxlU2VsZWN0ZWQpXHJcbiAgICAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3ZlaGljdWxlLyc7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsICsgbW9kZWxlU2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCkub2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmVoaWN1bGUgPSBuZXcgVmVoaWN1bGUoZGF0YVtpXS5tYXJxdWUsIGRhdGFbaV0ubW9kZWxlLCBkYXRhW2ldLmRhdGVfZGVidXQsIGRhdGFbaV0uZGF0ZV9maW4sIGRhdGFbaV0udmVyc2lvbixkYXRhW2ldLnBvcnRlcyxkYXRhW2ldLmNhcmJ1cmFudCxkYXRhW2ldLnB1aXNzYW5jZSxkYXRhW2ldLmJvaXRlX3ZpdGVzc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHZlaGljdWxlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqcztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIC8vIGdldERldGFpbHMoeWVhclNlbGVjdGVkKXtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC92ZWhpY3VsZS8nICsgeWVhclNlbGVjdGVkKVxyXG4gICAgLy8gICAgIC8vcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vc2VsbG15Y2FyZmFzdC5oZXJva3VhcHAuY29tL3ZlaGljdWxlLycgKyBtb2RlbGVTZWxlY3RlZClcclxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpLm9iajtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHZlaGljdWxlID0gbmV3IFZlaGljdWxlKGRhdGFbaV0ubWFycXVlLCBkYXRhW2ldLm1vZGVsZSwgZGF0YVtpXS5kYXRlX2RlYnV0LCBkYXRhW2ldLmRhdGVfZmluLCBkYXRhW2ldLnZlcnNpb24sZGF0YVtpXS5wb3J0ZXMsZGF0YVtpXS5jYXJidXJhbnQsZGF0YVtpXS5wdWlzc2FuY2UsZGF0YVtpXS5ib2l0ZV92aXRlc3NlKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBvYmpzLnB1c2godmVoaWN1bGUpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICAvLyB9XHJcbiAgICAvL1xyXG4gICAgLy8gZ2V0QWxsWWVhcnMobWFycXVlU2VsZWN0ZWQpe1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3ZlaGljdWxlLycgKyBtYXJxdWVTZWxlY3RlZClcclxuICAgIC8vICAgICAvL3JldHVybiB0aGlzLl9odHRwLmdldCgnaHR0cDovL3NlbGxteWNhcmZhc3QuaGVyb2t1YXBwLmNvbS92ZWhpY3VsZS8nICsgbW9kZWxlU2VsZWN0ZWQpXHJcbiAgICAvLyAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKS5vYmo7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCB2ZWhpY3VsZSA9IG5ldyBWZWhpY3VsZShkYXRhW2ldLm1hcnF1ZSwgZGF0YVtpXS5tb2RlbGUsIGRhdGFbaV0uZGF0ZV9kZWJ1dCwgZGF0YVtpXS5kYXRlX2ZpbiwgZGF0YVtpXS52ZXJzaW9uLGRhdGFbaV0ucG9ydGVzLGRhdGFbaV0uY2FyYnVyYW50LGRhdGFbaV0ucHVpc3NhbmNlLGRhdGFbaV0uYm9pdGVfdml0ZXNzZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHZlaGljdWxlKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==
