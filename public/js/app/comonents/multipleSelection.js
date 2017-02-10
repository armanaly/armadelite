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
// CAN SELECT MORE THAN ONE VALUE
let MultiSelectionComponent = class MultiSelectionComponent {
    constructor() {
        this.footNote = ''; //Optional insert a footnote in component
        this.change = new core_1.EventEmitter(); // Emitter to send back data to parent component
        this.tmpArray = [];
    }
    onChooseVal($event) {
        var addOption = true;
        for (let i = 0; i < this.tmpArray.length; i++) {
            if (this.tmpArray[i] == event.target.value) {
                this.tmpArray.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.tmpArray.push(event.target.value);
        }
        this.change.emit({
            valueSelected: $event.target.value,
            stepId: this.stepId
        });
    }
    ;
    isSelected(option) {
        for (let i = 0; i < this.tmpArray.length; i++) {
            if (this.tmpArray[i] == option) {
                return true;
            }
        }
        return false;
    }
    ;
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "valueSelected", void 0);
__decorate([
    // Value to pass to the formService containing the selection
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "stepId", void 0);
__decorate([
    // Send the current step in order to increment it
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "footNote", void 0);
__decorate([
    //Optional insert a footnote in component
    core_1.Output(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "change", void 0);
MultiSelectionComponent = __decorate([
    core_1.Component({
        selector: 'multi-selection',
        template: `
        <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
        <div class="panel-body" >
      
        <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->
        <ul class="items">
            <li *ngFor="let valeurList of listOfElements">
            <button *ngIf="isSelected(valeurList) == false" type="button" 
                    (click)="onChooseVal($event)"  
                    value="{{valeurList}}" 
                    class="btn btn-primary btn-primary-custom">
            {{valeurList}}
            </button>
            <button *ngIf="isSelected(valeurList) == true" type="button" 
                    (click)="onChooseVal($event)"  
                    value="{{valeurList}}" 
                    class="btn btn-info-custom">
            {{valeurList}}
            </button>
            </li>
        </ul>
        </div>
        <span class="label label-info">{{footNote}} </span>

`
    }), 
    __metadata('design:paramtypes', [])
], MultiSelectionComponent);
exports.MultiSelectionComponent = MultiSelectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW9uZW50cy9tdWx0aXBsZVNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBRXJELENBQUMsQ0FGbUU7QUFDcEUsaUNBQWlDO0FBOEJqQztJQUFBO1FBT2EsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUN2RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7UUFFdkYsYUFBUSxHQUFHLEVBQUUsQ0FBQztJQWlDbEIsQ0FBQztJQS9CRyxXQUFXLENBQUMsTUFBTTtRQUNkLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztRQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDNUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDM0IsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixhQUFhLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ2xDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUN0QixDQUFDLENBQUE7SUFFTixDQUFDOztJQUVELFVBQVUsQ0FBQyxNQUFNO1FBQ2IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDakIsQ0FBQzs7QUFHTCxDQUFDO0FBekNHO0lBQUMsWUFBSyxFQUFFOzt3REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzsrREFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzt3REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzs4REFBQTtBQUNSO0lBRHdCLDREQUE0RDtJQUNuRixZQUFLLEVBQUU7O3VEQUFBO0FBQ1I7SUFEd0IsaURBQWlEO0lBQ3hFLFlBQUssRUFBRTs7eURBQUE7QUFDUjtJQUR3Qix5Q0FBeUM7SUFDaEUsYUFBTSxFQUFFOzt1REFBQTtBQXJDYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBd0JiO0tBQ0EsQ0FBQzs7MkJBQUE7QUFFVywrQkFBdUIsMEJBMkNuQyxDQUFBIiwiZmlsZSI6ImNvbW9uZW50cy9tdWx0aXBsZVNlbGVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbi8vIENBTiBTRUxFQ1QgTU9SRSBUSEFOIE9ORSBWQUxVRVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXVsdGktc2VsZWN0aW9uJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX0gPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+XHJcbiAgICAgIFxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPi0tPlxyXG4gICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSBmYWxzZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiICBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgYnRuLXByaW1hcnktY3VzdG9tXCI+XHJcbiAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSB0cnVlXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIj5cclxuICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIj57e2Zvb3ROb3RlfX0gPC9zcGFuPlxyXG5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE11bHRpU2VsZWN0aW9uQ29tcG9uZW50IHtcclxuXHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4O1xyXG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXHJcbiAgICBASW5wdXQoKSBzdGVwSWQ7ICAgICAgICAvLyBTZW5kIHRoZSBjdXJyZW50IHN0ZXAgaW4gb3JkZXIgdG8gaW5jcmVtZW50IGl0XHJcbiAgICBASW5wdXQoKSBmb290Tm90ZSA9ICcnOyAvL09wdGlvbmFsIGluc2VydCBhIGZvb3Rub3RlIGluIGNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcblxyXG4gICAgdG1wQXJyYXkgPSBbXTtcclxuXHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRtcEFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRtcEFycmF5W2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50bXBBcnJheS5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRPcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy50bXBBcnJheS5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZDogJGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBpc1NlbGVjdGVkKG9wdGlvbikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50bXBBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50bXBBcnJheVtpXSA9PSBvcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH07XHJcblxyXG5cclxufVxyXG4iXX0=
