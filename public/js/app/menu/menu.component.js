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
let MenuComponent = class MenuComponent {
};
MenuComponent = __decorate([
    core_1.Component({
        selector: 'grid-panel',
        template: `
    <div class="row" align="center">
        
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Contacts </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Documents </a></button></div>
    </div>
` }), 
    __metadata('design:paramtypes', [])
], MenuComponent);
exports.MenuComponent = MenuComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBY3BFO0FBRUEsQ0FBQztBQWREO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Q0FRYixFQUFFLENBQUM7O2lCQUFBO0FBRVMscUJBQWEsZ0JBRXpCLENBQUEiLCJmaWxlIjoibWVudS9tZW51LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ3JpZC1wYW5lbCcsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInJvd1wiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL2dyaWQnXVwiPiBEYXRhIGdyaWQgPC9hPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnL3N0ZXAnXVwiPiBOb3V2ZWF1IGZsb3c8L2E+PC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiPjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+PGEgW3JvdXRlckxpbmtdPVwiWycvJ11cIj4gQ29udGFjdHMgPC9hPjwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTNcIj48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPjxhIFtyb3V0ZXJMaW5rXT1cIlsnLyddXCI+IERvY3VtZW50cyA8L2E+PC9idXR0b24+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuYCB9KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnR7XHJcblxyXG59Il19
