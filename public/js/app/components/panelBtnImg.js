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
let PanelBtnComponent = class PanelBtnComponent {
    constructor() {
        this.footNote = ''; //Optional insert a footnote in component
        this.change = new core_1.EventEmitter(); // Emitter to send back data to parent component
        this.display = false;
    }
    ngOnInit() {
        console.log(this.listOfElements);
        for (let datas of this.listOfElements) {
            // console.log(datas);
            // console.log(datas.name);
            // console.log(this.objStep.name);
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
        console.log(this.currentList);
        // console.log(this.objStep);
    }
    onChooseVal(val) {
        // console.log('selection');
        // console.log(val);
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: val,
            stepIdx: this.stepIdx
        });
    }
    ;
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "valueSelected", void 0);
__decorate([
    // Value to pass to the formService containing the selection
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "stepIdx", void 0);
__decorate([
    // Send the current step in order to increment it
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "footNote", void 0);
__decorate([
    //Optional insert a footnote in component
    core_1.Output(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "change", void 0);
PanelBtnComponent = __decorate([
    core_1.Component({
        selector: 'panel-btn-img',
        template: `
     <div class="panel-heading panel-heading-custom" align="center">{{objStep.labelPanel}} </div>
     <div class="panel-body" >       
         <ul class="items" *ngIf="objStep.type == 'image_selection'">
                <li *ngFor="let valeurList of currentList">
                        <a (click)="onChooseVal(valeurList.name)"> <img src="{{valeurList.url}} " />  </a>       
                </li>
        </ul>
     </div>
     <span class="label label-info">{{footNote}} </span>
`
    }), 
    __metadata('design:paramtypes', [])
], PanelBtnComponent);
exports.PanelBtnComponent = PanelBtnComponent;

<<<<<<< HEAD
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBMEJwRTtJQUFBO1FBS2EsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUN2RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7UUFHdkYsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXlCcEIsQ0FBQztJQXZCRyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQixrQ0FBa0M7WUFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLDZCQUE2QjtJQUVqQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQUc7UUFDWCw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3RELGFBQWEsRUFBRyxHQUFHO1lBQ25CLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDOztBQUNMLENBQUM7QUFqQ0c7SUFBQyxZQUFLLEVBQUU7O2tEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3lEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3dEQUFBO0FBQ1I7SUFEd0IsNERBQTREO0lBQ25GLFlBQUssRUFBRTs7a0RBQUE7QUFDUjtJQUR5QixpREFBaUQ7SUFDekUsWUFBSyxFQUFFOzttREFBQTtBQUNSO0lBRHdCLHlDQUF5QztJQUNoRSxhQUFNLEVBQUU7O2lEQUFBO0FBOUJiO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7OztDQVViO0tBQ0EsQ0FBQzs7cUJBQUE7QUFXVyx5QkFBaUIsb0JBa0M3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFuZWxCdG5JbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWJ0bi1pbWcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+e3tvYmpTdGVwLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID4gICAgICAgXHJcbiAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DaG9vc2VWYWwodmFsZXVyTGlzdC5uYW1lKVwiPiA8aW1nIHNyYz1cInt7dmFsZXVyTGlzdC51cmx9fSBcIiAvPiAgPC9hPiAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICA8L2Rpdj5cclxuICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIj57e2Zvb3ROb3RlfX0gPC9zcGFuPlxyXG5gXHJcbn0pXHJcblxyXG4vKlxyXG4gIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYW5lbEJ0bkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAgICAvLyBTZW5kIHRoZSBjdXJyZW50IHN0ZXAgaW4gb3JkZXIgdG8gaW5jcmVtZW50IGl0XHJcbiAgICBASW5wdXQoKSBmb290Tm90ZSA9ICcnOyAvL09wdGlvbmFsIGluc2VydCBhIGZvb3Rub3RlIGluIGNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICBjdXJyZW50TGlzdDtcclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cyk7XHJcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50TGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuXHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCh2YWwpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3Rpb24nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiB2YWwsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
=======
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBMEJwRTtJQUFBO1FBS2EsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUN2RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7UUFHdkYsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXlCcEIsQ0FBQztJQXZCRyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQixrQ0FBa0M7WUFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLDZCQUE2QjtJQUVqQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQUc7UUFDWCw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3RELGFBQWEsRUFBRyxHQUFHO1lBQ25CLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDOztBQUNMLENBQUM7QUFqQ0c7SUFBQyxZQUFLLEVBQUU7O2tEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3lEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3dEQUFBO0FBQ1I7SUFEd0IsNERBQTREO0lBQ25GLFlBQUssRUFBRTs7a0RBQUE7QUFDUjtJQUR5QixpREFBaUQ7SUFDekUsWUFBSyxFQUFFOzttREFBQTtBQUNSO0lBRHdCLHlDQUF5QztJQUNoRSxhQUFNLEVBQUU7O2lEQUFBO0FBOUJiO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7OztDQVViO0tBQ0EsQ0FBQzs7cUJBQUE7QUFXVyx5QkFBaUIsb0JBa0M3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFuZWxCdG5JbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWJ0bi1pbWcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+e3tvYmpTdGVwLmxhYmVsUGFuZWx9fSA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID4gICAgICAgXHJcbiAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DaG9vc2VWYWwodmFsZXVyTGlzdC5uYW1lKVwiPiA8aW1nIHNyYz1cInt7dmFsZXVyTGlzdC51cmx9fSBcIiAvPiAgPC9hPiAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICA8L2Rpdj5cclxuICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIj57e2Zvb3ROb3RlfX0gPC9zcGFuPlxyXG5gXHJcbn0pXHJcblxyXG4vKlxyXG4gIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4qL1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQYW5lbEJ0bkNvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAgICAvLyBTZW5kIHRoZSBjdXJyZW50IHN0ZXAgaW4gb3JkZXIgdG8gaW5jcmVtZW50IGl0XHJcbiAgICBASW5wdXQoKSBmb290Tm90ZSA9ICcnOyAvL09wdGlvbmFsIGluc2VydCBhIGZvb3Rub3RlIGluIGNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICBjdXJyZW50TGlzdDtcclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cyk7XHJcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMubmFtZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTtcclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdCA9IGRhdGFzLmxpc3Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50TGlzdCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcclxuXHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCh2YWwpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3Rpb24nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiB2YWwsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG4iXX0=
>>>>>>> task_15
