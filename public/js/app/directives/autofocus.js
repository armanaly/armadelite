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
var core_1 = require('@angular/core');
var MyAutoFocusDirective = (function () {
    function MyAutoFocusDirective(el) {
        this.el = el;
    }
    MyAutoFocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    MyAutoFocusDirective = __decorate([
        core_1.Directive({
            selector: '[myAutofocus]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof core_1.ElementRef !== 'undefined' && core_1.ElementRef) === 'function' && _a) || Object])
    ], MyAutoFocusDirective);
    return MyAutoFocusDirective;
    var _a;
}());
exports.MyAutoFocusDirective = MyAutoFocusDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYXV0b2ZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFNMUU7SUFDSSw4QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRSxDQUFDO0lBRXJDLDhDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBVEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLGVBQWU7U0FDM0IsQ0FBQzs7NEJBQUE7SUFRRiwyQkFBQzs7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLDRCQUFvQix1QkFNaEMsQ0FBQSIsImZpbGUiOiJkaXJlY3RpdmVzL2F1dG9mb2N1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOidbbXlBdXRvZm9jdXNdJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE15QXV0b0ZvY3VzRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKXt9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCl7XHJcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
