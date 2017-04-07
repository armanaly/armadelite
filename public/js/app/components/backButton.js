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
            <button ><i class="glyphicon glyphicon-triangle-left" (click)="onClick()"> </i></button>
        </nav>
`
    }), 
    __metadata('design:paramtypes', [])
], BackButtonComponent);
exports.BackButtonComponent = BackButtonComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYmFja0J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBRXJELENBQUMsQ0FGbUU7QUFZcEU7SUFBQTtRQUdjLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQVcxQyxDQUFDO0lBVEcsT0FBTztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEVBQUcsQ0FBQztRQUNuQixpRUFBaUU7UUFDakUscUJBQXFCO1FBQ3JCLElBQUk7UUFDSixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOztBQUVMLENBQUM7QUFiRztJQUFDLFlBQUssRUFBRTs7dURBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7bURBQUE7QUFDUjtJQUFDLGFBQU0sRUFBRTs7bURBQUE7QUFiYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Q0FJYjtLQUNBLENBQUM7O3VCQUFBO0FBR1csMkJBQW1CLHNCQWMvQixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvYmFja0J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncHJldmlvdXMtcGFnZScsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxuYXYgY2xhc3M9XCJmb3JtLW5hdkFycm93XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gPjxpIGNsYXNzPVwiZ2x5cGhpY29uIGdseXBoaWNvbi10cmlhbmdsZS1sZWZ0XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPiA8L2k+PC9idXR0b24+XHJcbiAgICAgICAgPC9uYXY+XHJcbmBcclxufSlcclxuXHJcbi8vIFVTRSBUTyBHTyBCQUNLIFRPIFBSRVZJT1VTIFNURVAgSU4gREVDSVNJT04gV09SS0ZMT1dcclxuZXhwb3J0IGNsYXNzIEJhY2tCdXR0b25Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgaWR4U3RlcE9iajtcclxuICAgIEBJbnB1dCgpIHN0ZXBJZDtcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgb25DbGljaygpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RlcElkKTtcclxuICAgICAgICB0aGlzLmlkeFN0ZXBPYmogLS07XHJcbiAgICAgICAgLy8gd2hpbGUgKCB0eXBlb2YgdGhpcy5jdXJyZW50U3RlcFtpZHhTdGVwT2JqXSA9PSAndW5kZWZpbmVkJyApIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zdGVwSWQtLTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7IG5ld0lkeFN0ZXBPYmo6IHRoaXMuaWR4U3RlcE9ian0pO1xyXG4gICAgfTtcclxuXHJcbn0iXX0=
