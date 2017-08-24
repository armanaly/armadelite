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
        this.footNote = '';
        this.change = new core_1.EventEmitter();
        this.currentList = [];
        this.display = false;
    }
    ngOnInit() {
        console.log("ngOnInitStart");
        if (typeof this.listOfElements != 'undefined') {
            console.log(this.listOfElements);
            for (let datas of this.listOfElements) {
                console.log(datas.name);
                this.currentList.push({ "name": datas.name, "url": datas.url });
            }
            console.log(this.currentList);
            this.display = true;
        }
    }
    onChooseVal(val) {
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
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "footNote", void 0);
__decorate([
    core_1.Output(), 
    __metadata('design:type', Object)
], PanelBtnComponent.prototype, "change", void 0);
PanelBtnComponent = __decorate([
    core_1.Component({
        selector: 'panel-btn-img',
        template: `
     <div *ngIf="display">
         <div class="panel-heading panel-heading-custom" align="center">{{objStep.labelPanel}} </div>
         <div class="panel-body" >       
             <ul class="items" *ngIf="objStep.type == 'image_selection'">
                    <li *ngFor="let valeurList of currentList">
                            <a (click)="onChooseVal(valeurList.name)"> <img src="{{valeurList.url}} " />  </a>       
                    </li>
            </ul>
         </div>
         <span class="label label-info"  *ngIf="footNote != ''" >{{footNote}} </span>
     </div>
`
    }), 
    __metadata('design:paramtypes', [])
], PanelBtnComponent);
exports.PanelBtnComponent = PanelBtnComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBNEJwRTtJQUFBO1FBS2EsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFFLEVBQUUsQ0FBQztRQUVoQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMENwQixDQUFDO0lBeENHLFFBQVE7UUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBYzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBR2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFHbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFFeEUsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXhCLENBQUM7SUFDTCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEdBQUc7UUFHWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUcsR0FBRztZQUNuQixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7QUFDTCxDQUFDO0FBbERHO0lBQUMsWUFBSyxFQUFFOztrREFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzt5REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzt3REFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOztrREFBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzttREFBQTtBQUNSO0lBQUMsYUFBTSxFQUFFOztpREFBQTtBQWhDYjtJQUFDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsZUFBZTtRQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztDQVliO0tBQ0EsQ0FBQzs7cUJBQUE7QUFXVyx5QkFBaUIsb0JBbUQ3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFuZWxCdG5JbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWJ0bi1pbWcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+e3tvYmpTdGVwLmxhYmVsUGFuZWx9fSA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPiAgICAgICBcbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNob29zZVZhbCh2YWxldXJMaXN0Lm5hbWUpXCI+IDxpbWcgc3JjPVwie3t2YWxldXJMaXN0LnVybH19IFwiIC8+ICA8L2E+ICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1pbmZvXCIgICpuZ0lmPVwiZm9vdE5vdGUgIT0gJydcIiA+e3tmb290Tm90ZX19IDwvc3Bhbj5cbiAgICAgPC9kaXY+XG5gXG59KVxuXG4vKlxuICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCIgdHlwZT1cImJ1dHRvblwiIFxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4qL1xuXG5cbmV4cG9ydCBjbGFzcyBQYW5lbEJ0bkNvbXBvbmVudCB7XG4gICAgQElucHV0KCkgb2JqU3RlcDtcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cbiAgICBASW5wdXQoKSBzdGVwSWR4OyAgICAgICAgLy8gU2VuZCB0aGUgY3VycmVudCBzdGVwIGluIG9yZGVyIHRvIGluY3JlbWVudCBpdFxuICAgIEBJbnB1dCgpIGZvb3ROb3RlID0gJyc7IC8vT3B0aW9uYWwgaW5zZXJ0IGEgZm9vdG5vdGUgaW4gY29tcG9uZW50XG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XG4gICAgY3VycmVudExpc3Q9IFtdO1xuXG4gICAgZGlzcGxheSA9IGZhbHNlO1xuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRTdGFydFwiKTtcbiAgICAgICAgLy8gRlJPTSBIQVJEQ09ERUQgTElTVFxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3RPZkVsZW1lbnRzKTtcbiAgICAgICAgLy8gZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcy5uYW1lKTtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTtcbiAgICAgICAgLy8gICAgIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG5cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGlzdE9mRWxlbWVudHMgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpXG5cbiAgICAgICAgICAgIC8vIEZST00gQ09MTEVDVElPTlxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcC5uYW1lKTtcbiAgICAgICAgICAgICAgICAvLyBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0LnB1c2goeyBcIm5hbWVcIjogZGF0YXMubmFtZSwgXCJ1cmxcIjogZGF0YXMudXJsfSk7XG4gICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudExpc3QpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMub2JqU3RlcCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25DaG9vc2VWYWwodmFsKXtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGlvbicpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiB2YWwsXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XG4gICAgICAgIH0pXG4gICAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
