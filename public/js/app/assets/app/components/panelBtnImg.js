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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBMEJwRTtJQUFBO1FBS2EsYUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLHlDQUF5QztRQUN2RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUMsQ0FBQyxnREFBZ0Q7UUFHdkYsWUFBTyxHQUFHLEtBQUssQ0FBQztJQXlCcEIsQ0FBQztJQXZCRyxRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDakMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsc0JBQXNCO1lBQ3RCLDJCQUEyQjtZQUMzQixrQ0FBa0M7WUFDbEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlCLDZCQUE2QjtJQUVqQyxDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQUc7UUFDWCw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3RELGFBQWEsRUFBRyxHQUFHO1lBQ25CLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDOztBQUNMLENBQUM7QUFqQ0c7SUFBQyxZQUFLLEVBQUU7O2tEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3lEQUFBO0FBQ1I7SUFBQyxZQUFLLEVBQUU7O3dEQUFBO0FBQ1I7SUFEd0IsNERBQTREO0lBQ25GLFlBQUssRUFBRTs7a0RBQUE7QUFDUjtJQUR5QixpREFBaUQ7SUFDekUsWUFBSyxFQUFFOzttREFBQTtBQUNSO0lBRHdCLHlDQUF5QztJQUNoRSxhQUFNLEVBQUU7O2lEQUFBO0FBOUJiO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7OztDQVViO0tBQ0EsQ0FBQzs7cUJBQUE7QUFXVyx5QkFBaUIsb0JBa0M3QixDQUFBIiwiZmlsZSI6ImFzc2V0cy9hcHAvY29tcG9uZW50cy9wYW5lbEJ0bkltZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGFuZWwtYnRuLWltZycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkaW5nIHBhbmVsLWhlYWRpbmctY3VzdG9tXCIgYWxpZ249XCJjZW50ZXJcIj57e29ialN0ZXAubGFiZWxQYW5lbH19IDwvZGl2PlxyXG4gICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPiAgICAgICBcclxuICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiAqbmdJZj1cIm9ialN0ZXAudHlwZSA9PSAnaW1hZ2Vfc2VsZWN0aW9uJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNob29zZVZhbCh2YWxldXJMaXN0Lm5hbWUpXCI+IDxpbWcgc3JjPVwie3t2YWxldXJMaXN0LnVybH19IFwiIC8+ICA8L2E+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW5mb1wiPnt7Zm9vdE5vdGV9fSA8L3NwYW4+XHJcbmBcclxufSlcclxuXHJcbi8qXHJcbiAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhbmVsQnRuQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxyXG4gICAgQElucHV0KCkgc3RlcElkeDsgICAgICAgIC8vIFNlbmQgdGhlIGN1cnJlbnQgc3RlcCBpbiBvcmRlciB0byBpbmNyZW1lbnQgaXRcclxuICAgIEBJbnB1dCgpIGZvb3ROb3RlID0gJyc7IC8vT3B0aW9uYWwgaW5zZXJ0IGEgZm9vdG5vdGUgaW4gY29tcG9uZW50XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuICAgIGN1cnJlbnRMaXN0O1xyXG5cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RPZkVsZW1lbnRzKTtcclxuICAgICAgICBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKXtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcy5uYW1lKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRMaXN0KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG5cclxuICAgIH1cclxuICAgIG9uQ2hvb3NlVmFsKHZhbCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGlvbicpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6IHZhbCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
