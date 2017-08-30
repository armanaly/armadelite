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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var FieldPanelService = (function () {
    function FieldPanelService(_http) {
        this._http = _http;
        this.step = [];
    }
    FieldPanelService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], FieldPanelService);
    return FieldPanelService;
    var _a;
}());
exports.FieldPanelService = FieldPanelService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBSW5DO0lBRUksMkJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRWhDLFNBQUksR0FBZ0IsRUFBRSxDQUFDO0lBRlksQ0FBQztJQUh4QztRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBc0JiLHdCQUFDOztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlkseUJBQWlCLG9CQXFCN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkUGFuZWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7U3RlcE1vZGVsfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXBNb2RlbFwiO1xuaW1wb3J0IHsgR2xvYmFsVmFyaWFibGUgfSBmcm9tIFwiLi4vZ2xvYmFsXCI7XG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRmllbGRQYW5lbFNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XG5cbiAgICBzdGVwOiBTdGVwTW9kZWxbXSA9IFtdO1xuICAgIC8vIGdldFN0ZXBzKCl7XG4gICAgLy8gICAgIHZhciBjb21wbGV0ZVVybCA9IEdsb2JhbFZhcmlhYmxlLkJBU0VfVVJMKydzYXZlJztcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGNvbXBsZXRlVXJsKVxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmpzb24oKTtcbiAgICAvLyAgICAgICAgICAgICBsZXQgb2JqczogYW55W10gPSBbXTtcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBuZXcgU3RlcE1vZGVsKGRhdGFbaV0uc3RlcF9pZCwgZGF0YVtpXS50eXBlLCBkYXRhW2ldLmNvbmZpZ3VyYXRpb24pO1xuICAgIC8vICAgICAgICAgICAgICAgICBvYmpzLnB1c2goc3RlcCk7XG4gICAgLy9cbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuIG9ianM7XG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICAgICAgLmNhdGNoKGVycm9yID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IpKTtcbiAgICAvLyB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
