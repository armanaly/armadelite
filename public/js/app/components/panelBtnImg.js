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
var step_service_1 = require("../Engine/step.service");
var PanelBtnComponent = (function () {
    function PanelBtnComponent(_stepService) {
        this._stepService = _stepService;
        this.footNote = '';
        this.change = new core_1.EventEmitter();
        this.currentList = [];
        this.display = false;
    }
    PanelBtnComponent.prototype.ngOnInit = function () {
        if (typeof this.listOfElements != 'undefined') {
            console.log(this.listOfElements);
            for (var _i = 0, _a = this.listOfElements; _i < _a.length; _i++) {
                var datas = _a[_i];
                this.currentList.push({ "name": datas.name, "url": datas.url });
            }
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
            template: "\n     <div *ngIf=\"display\">\n         <div *ngIf=\"_stepService.language == 'en'\" class=\"{{_stepService.template.panel_heading}}\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel}}</p> </div>\n         <div *ngIf=\"_stepService.language == 'es'\" class=\"{{_stepService.template.panel_heading}}\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel_es}}</p> </div>\n         <div *ngIf=\"_stepService.language == 'fr'\" class=\"{{_stepService.template.panel_heading}}\"><p class=\"text-uppercase\">{{objStep.configuration.labelPanel_fr}}</p> </div>\n\n         <div class=\"panel-body\" >       \n            <div class=\"jumbotron\" *ngIf=\"objStep.configuration.header_note && objStep.configuration.header_note != ''\">\n                <p [innerHTML] = \"objStep.configuration.header_note\"></p>\n            </div>\n         \n             <ul class=\"items\" *ngIf=\"objStep.type == 'image_selection'\">\n                    <li *ngFor=\"let valeurList of currentList\">\n                            <a (click)=\"onChooseVal(valeurList.name)\"> <img src=\"{{valeurList.url}} \" />  </a>       \n                    </li>\n            </ul>\n         </div>\n         <div *ngIf=\"_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''\" [innerHTML] = \"objStep.configuration.foot_note\"></div> \n         <div *ngIf=\"_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''\" [innerHTML] = \"objStep.configuration.foot_note_es\"></div>\n         <div *ngIf=\"_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''\" [innerHTML] = \"objStep.configuration.foot_note_fr\"></div>\n     </div>\n"
        }), 
        __metadata('design:paramtypes', [step_service_1.StepService])
    ], PanelBtnComponent);
    return PanelBtnComponent;
}());
exports.PanelBtnComponent = PanelBtnComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxRCxlQUNyRCxDQUFDLENBRG1FO0FBQ3BFLDZCQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBcUNuRDtJQVdJLDJCQUNXLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUDNCLGFBQVEsR0FBRyxFQUFFLENBQUM7UUFDYixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDdEMsZ0JBQVcsR0FBRSxFQUFFLENBQUM7UUFFaEIsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUtmLENBQUM7SUFFRixvQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7WUFHaEMsR0FBRyxDQUFDLENBQWMsVUFBbUIsRUFBbkIsS0FBQSxJQUFJLENBQUMsY0FBYyxFQUFuQixjQUFtQixFQUFuQixJQUFtQixDQUFDO2dCQUFqQyxJQUFJLEtBQUssU0FBQTtnQkFDVixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQzthQUNsRTtZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLEdBQUc7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUcsR0FBRztZQUNuQixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7SUFqQ0Q7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzZEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzREQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3NEQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3VEQUFBO0lBQ1I7UUFBQyxhQUFNLEVBQUU7O3FEQUFBO0lBekNiO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxnd0RBcUJiO1NBQ0EsQ0FBQzs7eUJBQUE7SUE4Q0Ysd0JBQUM7QUFBRCxDQW5DQSxBQW1DQyxJQUFBO0FBbkNZLHlCQUFpQixvQkFtQzdCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9wYW5lbEJ0bkltZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncGFuZWwtYnRuLWltZycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWx9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWxfZXN9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWxfZnJ9fTwvcD4gPC9kaXY+XHJcblxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID4gICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiAqbmdJZj1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGUgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGVcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJvYmpTdGVwLnR5cGUgPT0gJ2ltYWdlX3NlbGVjdGlvbidcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIChjbGljayk9XCJvbkNob29zZVZhbCh2YWxldXJMaXN0Lm5hbWUpXCI+IDxpbWcgc3JjPVwie3t2YWxldXJMaXN0LnVybH19IFwiIC8+ICA8L2E+ICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbicgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVcIj48L2Rpdj4gXHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXMgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lc1wiPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcicgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnJcIj48L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuLypcclxuICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuKi9cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGFuZWxCdG5Db21wb25lbnQge1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xyXG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXHJcbiAgICBASW5wdXQoKSBzdGVwSWR4OyAgICAgICAgLy8gU2VuZCB0aGUgY3VycmVudCBzdGVwIGluIG9yZGVyIHRvIGluY3JlbWVudCBpdFxyXG4gICAgQElucHV0KCkgZm9vdE5vdGUgPSAnJzsgLy9PcHRpb25hbCBpbnNlcnQgYSBmb290bm90ZSBpbiBjb21wb25lbnRcclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG4gICAgY3VycmVudExpc3Q9IFtdO1xyXG5cclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZVxyXG4gICAgKVxyXG4gICAge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGlzdE9mRWxlbWVudHMgIT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cylcclxuXHJcbiAgICAgICAgICAgIC8vIEZST00gQ09MTEVDVElPTlxyXG4gICAgICAgICAgICBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0LnB1c2goeyBcIm5hbWVcIjogZGF0YXMubmFtZSwgXCJ1cmxcIjogZGF0YXMudXJsfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaG9vc2VWYWwodmFsKXtcclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgdmFsdWVOYW1lIDogdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkIDogdmFsLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
