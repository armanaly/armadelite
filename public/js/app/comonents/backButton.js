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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW9uZW50cy9iYWNrQnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUQsZUFFckQsQ0FBQyxDQUZtRTtBQVlwRTtJQUFBO1FBR2MsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO0lBVzFDLENBQUM7SUFURyxPQUFPO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRyxDQUFDO1FBQ25CLGlFQUFpRTtRQUNqRSxxQkFBcUI7UUFDckIsSUFBSTtRQUNKLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7O0FBRUwsQ0FBQztBQWJHO0lBQUMsWUFBSyxFQUFFOzt1REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzttREFBQTtBQUNSO0lBQUMsYUFBTSxFQUFFOzttREFBQTtBQWJiO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7OztDQUliO0tBQ0EsQ0FBQzs7dUJBQUE7QUFHVywyQkFBbUIsc0JBYy9CLENBQUEiLCJmaWxlIjoiY29tb25lbnRzL2JhY2tCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3ByZXZpb3VzLXBhZ2UnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8bmF2IGNsYXNzPVwiZm9ybS1uYXZBcnJvd1wiPlxyXG4gICAgICAgICAgICA8aSBjbGFzcz1cImdseXBoaWNvbiBnbHlwaGljb24tY2hldnJvbi1sZWZ0XCIgKGNsaWNrKT1cIm9uQ2xpY2soKVwiPlBSRUNFREVOVDwvaT5cclxuICAgICAgICA8L25hdj5cclxuYFxyXG59KVxyXG5cclxuLy8gVVNFIFRPIEdPIEJBQ0sgVE8gUFJFVklPVVMgU1RFUCBJTiBERUNJU0lPTiBXT1JLRkxPV1xyXG5leHBvcnQgY2xhc3MgQmFja0J1dHRvbkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBpZHhTdGVwT2JqO1xyXG4gICAgQElucHV0KCkgc3RlcElkO1xyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBvbkNsaWNrKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIHRoaXMuaWR4U3RlcE9iaiAtLTtcclxuICAgICAgICAvLyB3aGlsZSAoIHR5cGVvZiB0aGlzLmN1cnJlbnRTdGVwW2lkeFN0ZXBPYmpdID09ICd1bmRlZmluZWQnICkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnN0ZXBJZC0tO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHsgbmV3SWR4U3RlcE9iajogdGhpcy5pZHhTdGVwT2JqfSk7XHJcbiAgICB9O1xyXG5cclxufSJdfQ==
