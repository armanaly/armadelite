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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMsdUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBSW5DO0lBRUksWUFBcUIsS0FBVztRQUFYLFVBQUssR0FBTCxLQUFLLENBQU07UUFFaEMsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFGWSxDQUFDO0FBbUJ4QyxDQUFDO0FBdEJEO0lBQUMsaUJBQVUsRUFBRTs7cUJBQUE7QUFDQSx5QkFBaUIsb0JBcUI3QixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvY29tcG9uZW50cy9maWVsZFBhbmVsLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7U3RlcE1vZGVsfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXBNb2RlbFwiO1xyXG5pbXBvcnQgeyBHbG9iYWxWYXJpYWJsZSB9IGZyb20gXCIuLi9nbG9iYWxcIjtcclxuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmllbGRQYW5lbFNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIF9odHRwOiBIdHRwKSB7fVxyXG5cclxuICAgIHN0ZXA6IFN0ZXBNb2RlbFtdID0gW107XHJcbiAgICAvLyBnZXRTdGVwcygpe1xyXG4gICAgLy8gICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzYXZlJztcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoY29tcGxldGVVcmwpXHJcbiAgICAvLyAgICAgICAgIC5tYXAocmVzcG9uc2UgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBvYmpzOiBhbnlbXSA9IFtdO1xyXG4gICAgLy8gICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBuZXcgU3RlcE1vZGVsKGRhdGFbaV0uc3RlcF9pZCwgZGF0YVtpXS50eXBlLCBkYXRhW2ldLmNvbmZpZ3VyYXRpb24pO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIG9ianMucHVzaChzdGVwKTtcclxuICAgIC8vXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm4gb2JqcztcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcclxuICAgIC8vIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
