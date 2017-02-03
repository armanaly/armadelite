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
        console.log(this.stepId);
        this.idxStepObj--;
        // while ( typeof this.currentStep[idxStepObj] == 'undefined' ) {
        //     this.stepId--;
        // }
        this.change.emit({ newIdxStepObj: this.idxStepObj });
    }
    ;
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], BackButtonComponent.prototype, "idxStepObj", void 0);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlaGljdWxlL2JhY2tCdXR0b24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBWXBFO0lBQUE7UUFHYyxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7SUFXMUMsQ0FBQztJQVRHLE9BQU87UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFHLENBQUM7UUFDbkIsaUVBQWlFO1FBQ2pFLHFCQUFxQjtRQUNyQixJQUFJO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7QUFFTCxDQUFDO0FBYkc7SUFBQyxZQUFLLEVBQUU7O3VEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O21EQUFBO0FBQ1I7SUFBQyxhQUFNLEVBQUU7O21EQUFBO0FBYmI7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGVBQWU7UUFDekIsUUFBUSxFQUFFOzs7O0NBSWI7S0FDQSxDQUFDOzt1QkFBQTtBQUdXLDJCQUFtQixzQkFjL0IsQ0FBQSIsImZpbGUiOiJ2ZWhpY3VsZS9iYWNrQnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdwcmV2aW91cy1wYWdlJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPG5hdiBjbGFzcz1cImZvcm0tbmF2QXJyb3dcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJnbHlwaGljb24gZ2x5cGhpY29uLWNoZXZyb24tbGVmdFwiIChjbGljayk9XCJvbkNsaWNrKClcIj5QUkVDRURFTlQ8L2k+XHJcbiAgICAgICAgPC9uYXY+XHJcbmBcclxufSlcclxuXHJcbi8vIFVTRSBUTyBHTyBCQUNLIFRPIFBSRVZJT1VTIFNURVAgSU4gREVDSVNJT04gV09SS0ZMT1dcclxuZXhwb3J0IGNsYXNzIEJhY2tCdXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaWR4U3RlcE9iajtcclxuICAgIEBJbnB1dCgpIHN0ZXBJZDtcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcbiAgICAgICAgLy8gd2hpbGUgKCB0eXBlb2YgdGhpcy5jdXJyZW50U3RlcFtpZHhTdGVwT2JqXSA9PSAndW5kZWZpbmVkJyApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGVwSWQtLTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IG5ld0lkeFN0ZXBPYmo6IHRoaXMuaWR4U3RlcE9ian0pO1xyXG4gICAgfTtcclxuXHJcbn0iXX0=
