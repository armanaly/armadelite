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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBQ3BFLGlDQUFpQztBQWdDakM7SUFBQTtRQU9JLDRFQUE0RTtRQUM1RSxvRUFBb0U7UUFDMUQsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEO0lBcUQzRixDQUFDO0lBakRHLFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFDO1lBQ25DLHNCQUFzQjtZQUN0QiwyQkFBMkI7WUFFM0IsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNkLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQztRQUVyQixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQy9DLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDO0lBSUwsQ0FBQzs7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixTQUFTLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDdEQsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2xDLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQU07UUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDOztBQUdMLENBQUM7QUE1REc7SUFBQyxZQUFLLEVBQUU7O3dEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7OzhEQUFBO0FBQ1I7SUFEd0IsNERBQTREO0lBQ25GLFlBQUssRUFBRTs7d0RBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7K0RBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7K0RBQUE7QUFHUjtJQUFDLGFBQU0sRUFBRTs7dURBQUE7QUF4Q2I7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBMEJiO0tBQ0EsQ0FBQzs7MkJBQUE7QUFFVywrQkFBdUIsMEJBOERuQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG4vLyBDQU4gU0VMRUNUIE1PUkUgVEhBTiBPTkUgVkFMVUVcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ211bHRpLXNlbGVjdGlvbicsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19IDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxyXG4gICAgICBcclxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgbGlzdE9mRWxlbWVudHNcIj4tLT5cclxuICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gZmFsc2VcIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbVwiPlxyXG4gICAgICAgICAgICB7e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gdHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiICBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCI+XHJcbiAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPGRpdj48YnV0dG9uIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwic3VibWl0KClcIj5TVUlWQU5UPC9idXR0b24+PC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1pbmZvXCI+e3tmb290Tm90ZX19IDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuXHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxyXG4gICAgQElucHV0KCkgc3RlcElkeDtcclxuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xyXG4gICAgQElucHV0KCkgdmFsdWVzU2VsZWN0ZWQ7XHJcbiAgICAvLyBASW5wdXQoKSBzdGVwSWQ7ICAgICAgICAvLyBTZW5kIHRoZSBjdXJyZW50IHN0ZXAgaW4gb3JkZXIgdG8gaW5jcmVtZW50IGl0XHJcbiAgICAvLyBASW5wdXQoKSBmb290Tm90ZSA9ICcnOyAvL09wdGlvbmFsIGluc2VydCBhIGZvb3Rub3RlIGluIGNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcblxyXG4gICAgY3VycmVudExpc3Q7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ29rJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cyk7XHJcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnZhbHVlc1NlbGVjdGVkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlc1NlbGVjdGVkW2ldID09IGV2ZW50LnRhcmdldC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZXNTZWxlY3RlZC5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICBhZGRPcHRpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRPcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZXNTZWxlY3RlZC5wdXNoKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZDogdGhpcy52YWx1ZXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWxlY3RlZChvcHRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzU2VsZWN0ZWRbaV0gPT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuIl19
