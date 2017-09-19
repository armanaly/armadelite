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
var core_1 = require('@angular/core');
var PanelBtnComponent = (function () {
    function PanelBtnComponent() {
        this.footNote = '';
        this.change = new core_1.EventEmitter();
        this.currentList = [];
        this.display = false;
    }
    PanelBtnComponent.prototype.ngOnInit = function () {
        console.log("ngOnInitStart");
        if (typeof this.listOfElements != 'undefined') {
            console.log(this.listOfElements);
            for (var _i = 0, _a = this.listOfElements; _i < _a.length; _i++) {
                var datas = _a[_i];
                console.log(datas.name);
                this.currentList.push({ "name": datas.name, "url": datas.url });
            }
            console.log(this.currentList);
            this.display = true;
        }
    };
    PanelBtnComponent.prototype.onChooseVal = function (val) {
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: val,
            stepIdx: this.stepIdx
        });
    };
    ;
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
            template: "\n     <div *ngIf=\"display\">\n         <div class=\"panel-heading panel-heading-custom\" align=\"center\"><p class=\"text-uppercase\">{{objStep.labelPanel}}</p> </div>\n         <div class=\"panel-body\" >       \n             <ul class=\"items\" *ngIf=\"objStep.type == 'image_selection'\">\n                    <li *ngFor=\"let valeurList of currentList\">\n                            <a (click)=\"onChooseVal(valeurList.name)\"> <img src=\"{{valeurList.url}} \" />  </a>       \n                    </li>\n            </ul>\n         </div>\n         <span class=\"label label-info\"  *ngIf=\"footNote != ''\" >{{footNote}} </span>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], PanelBtnComponent);
    return PanelBtnComponent;
}());
exports.PanelBtnComponent = PanelBtnComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBNEJwRTtJQUFBO1FBS2EsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFFLEVBQUUsQ0FBQztRQUVoQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMENwQixDQUFDO0lBeENHLG9DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBYzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBR2hDLEdBQUcsQ0FBQyxDQUFjLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsQ0FBQztnQkFBakMsSUFBSSxLQUFLLFNBQUE7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBR25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO2FBRXZFO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFeEIsQ0FBQztJQUNMLENBQUM7SUFDRCx1Q0FBVyxHQUFYLFVBQVksR0FBRztRQUdYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3RELGFBQWEsRUFBRyxHQUFHO1lBQ25CLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDOztJQWpERDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFoQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLDhvQkFZYjtTQUNBLENBQUM7O3lCQUFBO0lBOERGLHdCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSx5QkFBaUIsb0JBbUQ3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFuZWxCdG5JbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWJ0bi1pbWcnLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5sYWJlbFBhbmVsfX08L3A+IDwvZGl2PlxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+ICAgICAgIFxuICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbidcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKHZhbGV1ckxpc3QubmFtZSlcIj4gPGltZyBzcmM9XCJ7e3ZhbGV1ckxpc3QudXJsfX0gXCIgLz4gIDwvYT4gICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgPC9kaXY+XG4gICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsIGxhYmVsLWluZm9cIiAgKm5nSWY9XCJmb290Tm90ZSAhPSAnJ1wiID57e2Zvb3ROb3RlfX0gPC9zcGFuPlxuICAgICA8L2Rpdj5cbmBcbn0pXG5cbi8qXG4gIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4taW5mby1jdXN0b21cIiB0eXBlPVwiYnV0dG9uXCIgXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiovXG5cblxuZXhwb3J0IGNsYXNzIFBhbmVsQnRuQ29tcG9uZW50IHtcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7ICAgICAgICAvLyBTZW5kIHRoZSBjdXJyZW50IHN0ZXAgaW4gb3JkZXIgdG8gaW5jcmVtZW50IGl0XG4gICAgQElucHV0KCkgZm9vdE5vdGUgPSAnJzsgLy9PcHRpb25hbCBpbnNlcnQgYSBmb290bm90ZSBpbiBjb21wb25lbnRcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcbiAgICBjdXJyZW50TGlzdD0gW107XG5cbiAgICBkaXNwbGF5ID0gZmFsc2U7XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJuZ09uSW5pdFN0YXJ0XCIpO1xuICAgICAgICAvLyBGUk9NIEhBUkRDT0RFRCBMSVNUXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xuICAgICAgICAvLyBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKXtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xuICAgICAgICAvLyAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSBkYXRhcy5saXN0O1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cblxuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5saXN0T2ZFbGVtZW50cyAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cylcblxuICAgICAgICAgICAgLy8gRlJPTSBDT0xMRUNUSU9OXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YXMubmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3QucHVzaCh7IFwibmFtZVwiOiBkYXRhcy5uYW1lLCBcInVybFwiOiBkYXRhcy51cmx9KTtcbiAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50TGlzdCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkNob29zZVZhbCh2YWwpe1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0aW9uJyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgdmFsdWVOYW1lIDogdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lLFxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6IHZhbCxcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcbiAgICAgICAgfSlcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
