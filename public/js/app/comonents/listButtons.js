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
let ListButtonsComponent = class ListButtonsComponent {
    constructor() {
        this.footNote = ''; //Optional insert a footnote in component
        this.change = new core_1.EventEmitter(); // Emitter to send back data to parent component
    }
    ngOnInit() {
        console.log(this.stepIdx);
        console.log(this.objStep);
        // console.log(this.listOfElements);
        // console.log(this.valueSelected);
        for (let datas of this.listOfElements) {
            // console.log(datas);
            // console.log(datas.name);
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
    }
    onChooseVal($event) {
        // console.log($event);
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: $event.target.value,
            stepIdx: this.stepIdx
        });
    }
    ;
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "valueSelected", void 0);
__decorate([
    // Value to pass to the formService containing the selection
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "footNote", void 0);
__decorate([
    //Optional insert a footnote in component
    core_1.Output(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "change", void 0);
ListButtonsComponent = __decorate([
    core_1.Component({
        selector: 'list-buttons',
        template: `
     <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
     <div class="panel-body" >
      
        <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->
        
        <ul class="items">
            <li *ngFor="let valeurList of currentList">
                <button *ngIf="valueSelected != valeurList" class="btn btn-success" type="button" 
                    (click)="onChooseVal($event)"
                    value="{{valeurList}}">{{valeurList}}
                </button>
                <button *ngIf="valueSelected == valeurList" class="btn btn-info-custom" type="button" 
                    (click)="onChooseVal($event)"
                    value="{{valeurList}}">{{valeurList}}
                </button>
            </li>
        </ul>
        

        
     </div>
     <span class="label label-info">{{footNote}} </span>
`
    }), 
    __metadata('design:paramtypes', [])
], ListButtonsComponent);
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW9uZW50cy9saXN0QnV0dG9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQXFELGVBRXJELENBQUMsQ0FGbUU7QUE4QnBFO0lBQUE7UUFLYSxhQUFRLEdBQUcsRUFBRSxDQUFDLENBQUMseUNBQXlDO1FBQ3ZELFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQyxDQUFDLGdEQUFnRDtJQTRCM0YsQ0FBQztJQXpCRyxRQUFRO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekIsb0NBQW9DO1FBQ3BDLG1DQUFtQztRQUNwQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUEsQ0FBQztZQUNuQyxzQkFBc0I7WUFDdEIsMkJBQTJCO1lBRTNCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDbEMsQ0FBQztRQUNMLENBQUM7SUFFTCxDQUFDO0lBQ0QsV0FBVyxDQUFDLE1BQU07UUFDZCx1QkFBdUI7UUFFdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixTQUFTLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDdEQsYUFBYSxFQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSztZQUNuQyxPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFBO0lBRU4sQ0FBQzs7QUFDTCxDQUFDO0FBakNHO0lBQUMsWUFBSyxFQUFFOztxREFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzs0REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOztxREFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzsyREFBQTtBQUNSO0lBRHdCLDREQUE0RDtJQUNuRixZQUFLLEVBQUU7O3NEQUFBO0FBQ1I7SUFEd0IseUNBQXlDO0lBQ2hFLGFBQU0sRUFBRTs7b0RBQUE7QUFsQ2I7SUFBQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXVCYjtLQUNBLENBQUM7O3dCQUFBO0FBRVcsNEJBQW9CLHVCQWtDaEMsQ0FBQSIsImZpbGUiOiJjb21vbmVudHMvbGlzdEJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpc3QtYnV0dG9ucycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbH19IDwvZGl2PlxyXG4gICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxyXG4gICAgICBcclxuICAgICAgICA8IS0tPGRpdiBjbGFzcz1cImNvbC1tZC0zXCIgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgbGlzdE9mRWxlbWVudHNcIj4tLT5cclxuICAgICAgICBcclxuICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiPlxyXG4gICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1pbmZvXCI+e3tmb290Tm90ZX19IDwvc3Bhbj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIGZvb3ROb3RlID0gJyc7IC8vT3B0aW9uYWwgaW5zZXJ0IGEgZm9vdG5vdGUgaW4gY29tcG9uZW50XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuICAgIGN1cnJlbnRMaXN0O1xyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0ZXBJZHgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZhbHVlU2VsZWN0ZWQpO1xyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgb25DaG9vc2VWYWwoJGV2ZW50KXtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgdmFsdWVOYW1lIDogdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkIDogJGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfTtcclxufVxyXG4iXX0=
