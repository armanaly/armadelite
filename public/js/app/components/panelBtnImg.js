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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUVyRCxDQUFDLENBRm1FO0FBNEJwRTtJQUFBO1FBS2EsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFFLEVBQUUsQ0FBQztRQUVoQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMENwQixDQUFDO0lBeENHLG9DQUFRLEdBQVI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBYzdCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBO1lBR2hDLEdBQUcsQ0FBQyxDQUFjLFVBQW1CLEVBQW5CLEtBQUEsSUFBSSxDQUFDLGNBQWMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUIsQ0FBQztnQkFBakMsSUFBSSxLQUFLLFNBQUE7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBR25CLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO2FBRXZFO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFFeEIsQ0FBQztJQUNMLENBQUM7SUFDRCx1Q0FBVyxHQUFYLFVBQVksR0FBRztRQUdYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsU0FBUyxFQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxJQUFJO1lBQ3RELGFBQWEsRUFBRyxHQUFHO1lBQ25CLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDOztJQWpERDtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NkRBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7NERBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7c0RBQUE7SUFDUjtRQUFDLFlBQUssRUFBRTs7dURBQUE7SUFDUjtRQUFDLGFBQU0sRUFBRTs7cURBQUE7SUFoQ2I7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGVBQWU7WUFDekIsUUFBUSxFQUFFLDhvQkFZYjtTQUNBLENBQUM7O3lCQUFBO0lBOERGLHdCQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQW5EWSx5QkFBaUIsb0JBbUQ3QixDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvcGFuZWxCdG5JbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWJ0bi1pbWcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtaGVhZGluZyBwYW5lbC1oZWFkaW5nLWN1c3RvbVwiIGFsaWduPVwiY2VudGVyXCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5sYWJlbFBhbmVsfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID4gICAgICAgXHJcbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DaG9vc2VWYWwodmFsZXVyTGlzdC5uYW1lKVwiPiA8aW1nIHNyYz1cInt7dmFsZXVyTGlzdC51cmx9fSBcIiAvPiAgPC9hPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbCBsYWJlbC1pbmZvXCIgICpuZ0lmPVwiZm9vdE5vdGUgIT0gJydcIiA+e3tmb290Tm90ZX19IDwvc3Bhbj5cclxuICAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuLypcclxuICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuKi9cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFuZWxCdG5Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xyXG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXHJcbiAgICBASW5wdXQoKSBzdGVwSWR4OyAgICAgICAgLy8gU2VuZCB0aGUgY3VycmVudCBzdGVwIGluIG9yZGVyIHRvIGluY3JlbWVudCBpdFxyXG4gICAgQElucHV0KCkgZm9vdE5vdGUgPSAnJzsgLy9PcHRpb25hbCBpbnNlcnQgYSBmb290bm90ZSBpbiBjb21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG4gICAgY3VycmVudExpc3Q9IFtdO1xyXG5cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0U3RhcnRcIik7XHJcbiAgICAgICAgLy8gRlJPTSBIQVJEQ09ERUQgTElTVFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhkYXRhcyk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXAubmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuY3VycmVudExpc3QgPSBkYXRhcy5saXN0O1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5saXN0T2ZFbGVtZW50cyAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RPZkVsZW1lbnRzKVxyXG5cclxuICAgICAgICAgICAgLy8gRlJPTSBDT0xMRUNUSU9OXHJcbiAgICAgICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFzLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5vYmpTdGVwLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0LnB1c2goeyBcIm5hbWVcIjogZGF0YXMubmFtZSwgXCJ1cmxcIjogZGF0YXMudXJsfSk7XHJcbiAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudExpc3QpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm9ialN0ZXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQ2hvb3NlVmFsKHZhbCl7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdGlvbicpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6IHZhbCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
