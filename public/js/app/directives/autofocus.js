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
const core_1 = require('@angular/core');
let MyAutoFocusDirective = class MyAutoFocusDirective {
    constructor(el) {
        this.el = el;
    }
    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
};
MyAutoFocusDirective = __decorate([
    core_1.Directive({
        selector: '[myAutofocus]'
    }), 
    __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
], MyAutoFocusDirective);
exports.MyAutoFocusDirective = MyAutoFocusDirective;
var _a;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYXV0b2ZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBMEQsZUFBZSxDQUFDLENBQUE7QUFNMUU7SUFDSSxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUFFLENBQUM7SUFFckMsZUFBZTtRQUNYLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2xDLENBQUM7QUFDTCxDQUFDO0FBVkQ7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFDLGVBQWU7S0FDM0IsQ0FBQzs7d0JBQUE7QUFFVyw0QkFBb0IsdUJBTWhDLENBQUEiLCJmaWxlIjoiZGlyZWN0aXZlcy9hdXRvZm9jdXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjonW215QXV0b2ZvY3VzXSdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNeUF1dG9Gb2N1c0RpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZil7fVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpe1xyXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
