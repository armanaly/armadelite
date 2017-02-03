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
const http_1 = require("@angular/http");
let FieldPanelService = class FieldPanelService {
    constructor(_http) {
        this._http = _http;
        this.step = [];
    }
};
FieldPanelService = __decorate([
    core_1.Injectable(), 
    __metadata('design:paramtypes', [http_1.Http])
], FieldPanelService);
exports.FieldPanelService = FieldPanelService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMsdUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBSW5DO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFaEMsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFGWSxDQUFDO0FBbUJ4QyxDQUFDO0FBdEJEO0lBQUMsaUJBQVUsRUFBRTs7cUJBQUE7QUFDQSx5QkFBaUIsb0JBcUI3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvZmllbGRQYW5lbC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge1N0ZXBNb2RlbH0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwTW9kZWxcIjtcclxuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7SHR0cH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpZWxkUGFuZWxTZXJ2aWNlIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBfaHR0cDogSHR0cCkge31cclxuXHJcbiAgICBzdGVwOiBTdGVwTW9kZWxbXSA9IFtdO1xyXG4gICAgLy8gZ2V0U3RlcHMoKXtcclxuICAgIC8vICAgICB2YXIgY29tcGxldGVVcmwgPSBHbG9iYWxWYXJpYWJsZS5CQVNFX1VSTCsnc2F2ZSc7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxyXG4gICAgLy8gICAgICAgICAubWFwKHJlc3BvbnNlID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvLyAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcclxuICAgIC8vICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGxldCBzdGVwID0gbmV3IFN0ZXBNb2RlbChkYXRhW2ldLnN0ZXBfaWQsIGRhdGFbaV0udHlwZSwgZGF0YVtpXS5jb25maWd1cmF0aW9uKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBvYmpzLnB1c2goc3RlcCk7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIG9ianM7XHJcbiAgICAvLyAgICAgICAgIH0pXHJcbiAgICAvLyAgICAgICAgIC5jYXRjaChlcnJvciA9PiBPYnNlcnZhYmxlLnRocm93KGVycm9yKSk7XHJcbiAgICAvLyB9XHJcblxyXG59Il19
