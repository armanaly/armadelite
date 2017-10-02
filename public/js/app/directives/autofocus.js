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
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MyAutoFocusDirective);
    return MyAutoFocusDirective;
}());
exports.MyAutoFocusDirective = MyAutoFocusDirective;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvYXV0b2ZvY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBMEQsZUFBZSxDQUFDLENBQUE7QUFNMUU7SUFDSSw4QkFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFBRSxDQUFDO0lBRXJDLDhDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBVEw7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFDLGVBQWU7U0FDM0IsQ0FBQzs7NEJBQUE7SUFRRiwyQkFBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksNEJBQW9CLHVCQU1oQyxDQUFBIiwiZmlsZSI6ImRpcmVjdGl2ZXMvYXV0b2ZvY3VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6J1tteUF1dG9mb2N1c10nXG59KVxuXG5leHBvcnQgY2xhc3MgTXlBdXRvRm9jdXNEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKXt9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
