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
let BackButtonComponent = class BackButtonComponent {
    constructor() {
        this.change = new core_1.EventEmitter();
    }
    onClick() {
        this.stepId--;
        while (typeof this.currentStep[this.stepId] == 'undefined') {
            this.stepId--;
        }
        this.change.emit({ newStepId: this.stepId });
    }
    ;
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], BackButtonComponent.prototype, "currentStep", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], BackButtonComponent.prototype, "stepId", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], BackButtonComponent.prototype, "change", void 0);
BackButtonComponent = __decorate([
    core_1.Component({
        selector: 'previous-page',
        template: `
        <nav class="form-navArrow">
            <i class="glyphicon glyphicon-chevron-left" (click)="onClick()">PRECEDENT</i>
        </nav>
`
    }), 
    __metadata('design:paramtypes', [])
], BackButtonComponent);
exports.BackButtonComponent = BackButtonComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL2JhY2tCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBWXBFO0lBQUE7UUFHYyxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFVMUMsQ0FBQztJQVJHLE9BQU87UUFDSCxJQUFJLENBQUMsTUFBTSxFQUFHLENBQUM7UUFDZixPQUFRLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksV0FBVyxFQUFHLENBQUM7WUFDM0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDOztBQUVMLENBQUM7QUFaRztJQUFDLFlBQUssRUFBRTs7d0RBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7bURBQUE7QUFDUjtJQUFDLGFBQU0sRUFBRTs7bURBQUE7QUFiYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Q0FJYjtLQUNBLENBQUM7O3VCQUFBO0FBR1csMkJBQW1CLHNCQWEvQixDQUFBIiwiZmlsZSI6InZlaGljdWxlL2JhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ByZXZpb3VzLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlBSRUNFREVOVDwvaT5cclxuICAgICAgICA8L25hdj5cclxuYFxyXG59KVxyXG5cclxuLy8gVVNFIFRPIEdPIEJBQ0sgVE8gUFJFVklPVVMgU1RFUCBJTiBERUNJU0lPTiBXT1JLRkxPV1xyXG5leHBvcnQgY2xhc3MgQmFja0J1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBjdXJyZW50U3RlcDtcclxuICAgIEBJbnB1dCgpIHN0ZXBJZDtcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIHRoaXMuc3RlcElkIC0tO1xyXG4gICAgICAgIHdoaWxlICggdHlwZW9mIHRoaXMuY3VycmVudFN0ZXBbdGhpcy5zdGVwSWRdID09ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBJZC0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgbmV3U3RlcElkOiB0aGlzLnN0ZXBJZH0pO1xyXG4gICAgfTtcclxuXHJcbn0iXX0=
