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
const global_1 = require("../global");
let PhotosService = class PhotosService {
    constructor(_http) {
        this._http = _http;
    }
    upload(photo) {
        var completeUrl = global_1.GlobalVariable.BASE_URL + 'load_image';
        // let headers = new Headers({'Content-Type': 'application/json'});
        console.log(photo);
        // var tmpImg = {"path": photo};
        //let bodyString = JSON.stringify(tmpImg);
        //   let options = new RequestOptions({ headers: headers});
        //  console.log(bodyString);
        console.log("apres body");
        return this._http.post(completeUrl, photo)
            .map(response => response.json())
            .catch(error => Observable_1.Observable.throw(error.json()));
        // //return this._http.get('sellmycarfast.herokuapp.com/marque')
        //     .catch(error => Observable.throw(error));
    }
};
PhotosService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], PhotosService);
exports.PhotosService = PhotosService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBob3Rvcy9waG90b3Muc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQTRDLGVBQWUsQ0FBQyxDQUFBO0FBQzVELHVCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBQ2pCLDZCQUEyQixpQkFBaUIsQ0FBQyxDQUFBO0FBRTdDLHlCQUE2QixXQUFXLENBQUMsQ0FBQTtBQUl6QztJQUdJLFlBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO0lBQUcsQ0FBQztJQUVwQyxNQUFNLENBQUMsS0FBSztRQUNSLElBQUksV0FBVyxHQUFHLHVCQUFjLENBQUMsUUFBUSxHQUFDLFlBQVksQ0FBQztRQUN4RCxtRUFBbUU7UUFDbkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixnQ0FBZ0M7UUFDL0IsMENBQTBDO1FBQzdDLDJEQUEyRDtRQUMxRCw0QkFBNEI7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUcxQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQzthQUNwQyxHQUFHLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNoQyxLQUFLLENBQUMsS0FBSyxJQUFJLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHckQsZ0VBQWdFO1FBQ2hFLGdEQUFnRDtJQUNwRCxDQUFDO0FBRUwsQ0FBQztBQTFCRDtJQUFDLGlCQUFVLEVBQUU7O2lCQUFBO0FBQ0EscUJBQWEsZ0JBeUJ6QixDQUFBIiwiZmlsZSI6InBob3Rvcy9waG90b3Muc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuaW1wb3J0IHtHbG9iYWxWYXJpYWJsZX0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBob3Rvc1NlcnZpY2Uge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICB1cGxvYWQocGhvdG8pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydsb2FkX2ltYWdlJztcclxuICAgICAgIC8vIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoeydDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9KTtcclxuICAgICAgIGNvbnNvbGUubG9nKHBob3RvKTtcclxuICAgICAgIC8vIHZhciB0bXBJbWcgPSB7XCJwYXRoXCI6IHBob3RvfTtcclxuICAgICAgICAvL2xldCBib2R5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkodG1wSW1nKTtcclxuICAgICAvLyAgIGxldCBvcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogaGVhZGVyc30pO1xyXG4gICAgICAvLyAgY29uc29sZS5sb2coYm9keVN0cmluZyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhcHJlcyBib2R5XCIpO1xyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAucG9zdChjb21wbGV0ZVVybCwgcGhvdG8pXHJcbiAgICAgICAgICAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yLmpzb24oKSkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gLy9yZXR1cm4gdGhpcy5faHR0cC5nZXQoJ3NlbGxteWNhcmZhc3QuaGVyb2t1YXBwLmNvbS9tYXJxdWUnKVxyXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
