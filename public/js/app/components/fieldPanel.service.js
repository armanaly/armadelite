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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZmllbGRQYW5lbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFHekMscUJBQW1CLGVBQWUsQ0FBQyxDQUFBO0FBSW5DO0lBRUksMkJBQXFCLEtBQVc7UUFBWCxVQUFLLEdBQUwsS0FBSyxDQUFNO1FBRWhDLFNBQUksR0FBZ0IsRUFBRSxDQUFDO0lBRlksQ0FBQztJQUh4QztRQUFDLGlCQUFVLEVBQUU7O3lCQUFBO0lBc0JiLHdCQUFDOztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlkseUJBQWlCLG9CQXFCN0IsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2ZpZWxkUGFuZWwuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtTdGVwTW9kZWx9IGZyb20gXCIuLi9FbmdpbmUvc3RlcE1vZGVsXCI7XHJcbmltcG9ydCB7IEdsb2JhbFZhcmlhYmxlIH0gZnJvbSBcIi4uL2dsb2JhbFwiO1xyXG5pbXBvcnQge0h0dHB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFBhbmVsU2VydmljZSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgX2h0dHA6IEh0dHApIHt9XHJcblxyXG4gICAgc3RlcDogU3RlcE1vZGVsW10gPSBbXTtcclxuICAgIC8vIGdldFN0ZXBzKCl7XHJcbiAgICAvLyAgICAgdmFyIGNvbXBsZXRlVXJsID0gR2xvYmFsVmFyaWFibGUuQkFTRV9VUkwrJ3NhdmUnO1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLl9odHRwLmdldChjb21wbGV0ZVVybClcclxuICAgIC8vICAgICAgICAgLm1hcChyZXNwb25zZSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IG9ianM6IGFueVtdID0gW107XHJcbiAgICAvLyAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IG5ldyBTdGVwTW9kZWwoZGF0YVtpXS5zdGVwX2lkLCBkYXRhW2ldLnR5cGUsIGRhdGFbaV0uY29uZmlndXJhdGlvbik7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb2Jqcy5wdXNoKHN0ZXApO1xyXG4gICAgLy9cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIHJldHVybiBvYmpzO1xyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goZXJyb3IgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcikpO1xyXG4gICAgLy8gfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
