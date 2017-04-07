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
        // @Input() stepId;        // Send the current step in order to increment it
        // @Input() footNote = ''; //Optional insert a footnote in component
        this.change = new core_1.EventEmitter(); // Emitter to send back data to parent component
    }
    ngOnInit() {
        console.log('ok');
        console.log(this.listOfElements);
        for (let datas of this.listOfElements) {
            // console.log(datas);
            // console.log(datas.name);
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
    }
    onChooseVal($event) {
        var addOption = true;
        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == event.target.value) {
                this.valuesSelected.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.valuesSelected.push(event.target.value);
        }
    }
    ;
    submit() {
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: this.valuesSelected,
            stepIdx: this.stepIdx
        });
    }
    isSelected(option) {
        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == option) {
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
], MultiSelectionComponent.prototype, "valueSelected", void 0);
__decorate([
    // Value to pass to the formService containing the selection
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], MultiSelectionComponent.prototype, "valuesSelected", void 0);
__decorate([
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
            <li *ngFor="let valeurList of currentList">
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
        <div><button btn-default btn-lg (click)="submit()">SUIVANT</button></div>
        <span class="label label-info">{{footNote}} </span>
        </div>
        

`
    }), 
    __metadata('design:paramtypes', [])
], MultiSelectionComponent);
exports.MultiSelectionComponent = MultiSelectionComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW9uZW50cy9tdWx0aXBsZVNlbGVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBRXJELENBQUMsQ0FGbUU7QUFDcEUsaUNBQWlDO0FBZ0NqQztJQUFBO1FBT0ksNEVBQTRFO1FBQzVFLG9FQUFvRTtRQUMxRCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7SUFxRDNGLENBQUM7SUFqREcsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUUzQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUEsQ0FBQztnQkFDakMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO1lBQ2xDLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXJCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2dCQUNsQixLQUFLLENBQUM7WUFDVixDQUFDO1FBQ0wsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDWixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7SUFJTCxDQUFDOztJQUVELE1BQU07UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbEMsT0FBTyxFQUFHLElBQUksQ0FBQyxPQUFPO1NBQ3pCLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBTTtRQUNiLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNsRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2pCLENBQUM7O0FBR0wsQ0FBQztBQTVERztJQUFDLFlBQUssRUFBRTs7d0RBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7OERBQUE7QUFDUjtJQUR3Qiw0REFBNEQ7SUFDbkYsWUFBSyxFQUFFOzt3REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzsrREFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzsrREFBQTtBQUdSO0lBQUMsYUFBTSxFQUFFOzt1REFBQTtBQXhDYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0EwQmI7S0FDQSxDQUFDOzsyQkFBQTtBQUVXLCtCQUF1QiwwQkE4RG5DLENBQUEiLCJmaWxlIjoiY29tb25lbnRzL211bHRpcGxlU2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuLy8gQ0FOIFNFTEVDVCBNT1JFIFRIQU4gT05FIFZBTFVFXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtdWx0aS1zZWxlY3Rpb24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID5cclxuICAgICAgXHJcbiAgICAgICAgPCEtLTxkaXYgY2xhc3M9XCJjb2wtbWQtM1wiICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGxpc3RPZkVsZW1lbnRzXCI+LS0+XHJcbiAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0XCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IGZhbHNlXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tcHJpbWFyeS1jdXN0b21cIj5cclxuICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IHRydWVcIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiPlxyXG4gICAgICAgICAgICB7e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDxkaXY+PGJ1dHRvbiBidG4tZGVmYXVsdCBidG4tbGcgKGNsaWNrKT1cInN1Ym1pdCgpXCI+U1VJVkFOVDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW5mb1wiPnt7Zm9vdE5vdGV9fSA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcblxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTXVsdGlTZWxlY3Rpb25Db21wb25lbnQge1xyXG5cclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHZhbHVlc1NlbGVjdGVkO1xyXG4gICAgLy8gQElucHV0KCkgc3RlcElkOyAgICAgICAgLy8gU2VuZCB0aGUgY3VycmVudCBzdGVwIGluIG9yZGVyIHRvIGluY3JlbWVudCBpdFxyXG4gICAgLy8gQElucHV0KCkgZm9vdE5vdGUgPSAnJzsgLy9PcHRpb25hbCBpbnNlcnQgYSBmb290bm90ZSBpbiBjb21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG5cclxuICAgIGN1cnJlbnRMaXN0O1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdvaycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaG9vc2VWYWwoJGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGFkZE9wdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXNTZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNTZWxlY3RlZFtpXSA9PSBldmVudC50YXJnZXQudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWVzU2VsZWN0ZWQuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkT3B0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWVzU2VsZWN0ZWQucHVzaChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH07XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQ6IHRoaXMudmFsdWVzU2VsZWN0ZWQsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGlzU2VsZWN0ZWQob3B0aW9uKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlc1NlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1NlbGVjdGVkW2ldID09IG9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcblxyXG59XHJcbiJdfQ==
