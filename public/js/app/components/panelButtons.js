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
        console.log(this.objStep);
    }
    onChooseVal($event) {
        this.change.emit({
            valueSelected: $event.target.value,
            stepId: this.stepId
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
], ListButtonsComponent.prototype, "labelPanel", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "valueSelected", void 0);
__decorate([
    // Value to pass to the formService containing the selection
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "stepId", void 0);
__decorate([
    // Send the current step in order to increment it
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
        selector: 'panel-img-btn',
        template: `
<div class="panel panel-default">
     <div class="panel-heading panel-heading-custom" align="center">{{labelPanel}} </div>
     <div class="panel-body panel-body-custom" >
      
        <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->
        
        <ul class="items" *ngIf="objStep.image">
            <li *ngFor="let valeurList of listOfElements">
                <button *ngIf="valueSelected != valeurList" class="btn btn-primary btn-primary-custom btn-primary-custom" type="button" 
                    (click)="onChooseVal($event)"
                    value="{{valeurList}}">{{valeurList}}
                </button>
                <button *ngIf="valueSelected == valeurList" class="btn btn-info-custom" type="button" 
                    (click)="onChooseVal($event)"
                    value="{{valeurList}}">{{valeurList}}
                </button>
            </li>
        </ul>
        
         <ul class="items" *ngIf="!objStep.image">
                <li *ngFor="let valeurList of listOfElements">
                        <a [routerLink]="['/details', valeurList.name]"> <img src="{{valeurList.url}} " />  </a>       
                </li>
        </ul>
        
     </div>
     <span class="label label-info">{{footNote}} </span>
 </div>
`
    }), 
    __metadata('design:paramtypes', [])
], ListButtonsComponent);
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdXR0b25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx1QkFBcUQsZUFFckQsQ0FBQyxDQUZtRTtBQW9DcEU7SUFBQTtRQU1hLGFBQVEsR0FBRyxFQUFFLENBQUMsQ0FBQyx5Q0FBeUM7UUFDdkQsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDLENBQUMsZ0RBQWdEO0lBWTNGLENBQUM7SUFWRyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUNELFdBQVcsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixhQUFhLEVBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ25DLE1BQU0sRUFBRyxJQUFJLENBQUMsTUFBTTtTQUN2QixDQUFDLENBQUE7SUFFTixDQUFDOztBQUNMLENBQUM7QUFsQkc7SUFBQyxZQUFLLEVBQUU7O3FEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3dEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7OzREQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7OzJEQUFBO0FBQ1I7SUFEd0IsNERBQTREO0lBQ25GLFlBQUssRUFBRTs7b0RBQUE7QUFDUjtJQUR3QixpREFBaUQ7SUFDeEUsWUFBSyxFQUFFOztzREFBQTtBQUNSO0lBRHdCLHlDQUF5QztJQUNoRSxhQUFNLEVBQUU7O29EQUFBO0FBekNiO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0E2QmI7S0FDQSxDQUFDOzt3QkFBQTtBQUVXLDRCQUFvQix1QkFtQmhDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYW5lbEJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWltZy1idG4nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuPGRpdiBjbGFzcz1cInBhbmVsIHBhbmVsLWRlZmF1bHRcIj5cclxuICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+e3tsYWJlbFBhbmVsfX0gPC9kaXY+XHJcbiAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHkgcGFuZWwtYm9keS1jdXN0b21cIiA+XHJcbiAgICAgIFxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPi0tPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJvYmpTdGVwLmltYWdlXCI+XHJcbiAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1wcmltYXJ5LWN1c3RvbSBidG4tcHJpbWFyeS1jdXN0b21cIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgXHJcbiAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCIhb2JqU3RlcC5pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGxpc3RPZkVsZW1lbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIFtyb3V0ZXJMaW5rXT1cIlsnL2RldGFpbHMnLCB2YWxldXJMaXN0Lm5hbWVdXCI+IDxpbWcgc3JjPVwie3t2YWxldXJMaXN0LnVybH19IFwiIC8+ICA8L2E+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIFxyXG4gICAgIDwvZGl2PlxyXG4gICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW5mb1wiPnt7Zm9vdE5vdGV9fSA8L3NwYW4+XHJcbiA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSBsYWJlbFBhbmVsO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIHN0ZXBJZDsgICAgICAgIC8vIFNlbmQgdGhlIGN1cnJlbnQgc3RlcCBpbiBvcmRlciB0byBpbmNyZW1lbnQgaXRcclxuICAgIEBJbnB1dCgpIGZvb3ROb3RlID0gJyc7IC8vT3B0aW9uYWwgaW5zZXJ0IGEgZm9vdG5vdGUgaW4gY29tcG9uZW50XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgfVxyXG4gICAgb25DaG9vc2VWYWwoJGV2ZW50KXtcclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6ICRldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIHN0ZXBJZCA6IHRoaXMuc3RlcElkXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==
