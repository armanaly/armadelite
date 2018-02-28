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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const step_service_1 = require("../Engine/step.service");
let PanelBtnComponent = class PanelBtnComponent {
    constructor(_stepService) {
        this._stepService = _stepService;
        this.footNote = '';
        this.change = new core_1.EventEmitter();
        this.currentList = [];
        this.display = false;
    }
    ngOnInit() {
        if (typeof this.listOfElements != 'undefined') {
            console.log(this.listOfElements);
            for (let datas of this.listOfElements) {
                this.currentList.push({ "name": datas.name, "url": datas.url });
            }
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
    __metadata("design:type", Object)
], PanelBtnComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PanelBtnComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PanelBtnComponent.prototype, "valueSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PanelBtnComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], PanelBtnComponent.prototype, "footNote", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PanelBtnComponent.prototype, "change", void 0);
PanelBtnComponent = __decorate([
    core_1.Component({
        selector: 'panel-btn-img',
        template: `
     <div *ngIf="display">
         <div *ngIf="_stepService.language == 'en'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
         <div *ngIf="_stepService.language == 'es'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_es}}</p> </div>
         <div *ngIf="_stepService.language == 'fr'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_fr}}</p> </div>

         <div class="panel-body" >       
            <div class="jumbotron" *ngIf="objStep.configuration.header_note && objStep.configuration.header_note != ''">
                <p [innerHTML] = "objStep.configuration.header_note"></p>
            </div>
         
             <ul class="items" *ngIf="objStep.type == 'image_selection'">
                    <li *ngFor="let valeurList of currentList">
                            <a (click)="onChooseVal(valeurList.name)"> <img src="{{valeurList.url}} " />  </a>       
                    </li>
            </ul>
         </div>
         <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
         <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
         <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
     </div>
`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService])
], PanelBtnComponent);
exports.PanelBtnComponent = PanelBtnComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vcGFuZWxCdG5JbWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUseURBQW1EO0FBcUNuRCxJQUFhLGlCQUFpQixHQUE5QjtJQVdJLFlBQ1csWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFQM0IsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNiLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUN0QyxnQkFBVyxHQUFFLEVBQUUsQ0FBQztRQUVoQixZQUFPLEdBQUcsS0FBSyxDQUFDO0lBS2YsQ0FBQztJQUVGLFFBQVE7UUFDSixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxjQUFjLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUdoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFDbkUsQ0FBQztZQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7SUFDTCxDQUFDO0lBRUQsV0FBVyxDQUFDLEdBQUc7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUcsR0FBRztZQUNuQixPQUFPLEVBQUcsSUFBSSxDQUFDLE9BQU87U0FDekIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUFBLENBQUM7Q0FDTCxDQUFBO0FBbENZO0lBQVIsWUFBSyxFQUFFOztrREFBUztBQUNSO0lBQVIsWUFBSyxFQUFFOzt5REFBZ0I7QUFDZjtJQUFSLFlBQUssRUFBRTs7d0RBQWU7QUFDZDtJQUFSLFlBQUssRUFBRTs7a0RBQVM7QUFDUjtJQUFSLFlBQUssRUFBRTs7bURBQWU7QUFDYjtJQUFULGFBQU0sRUFBRTs7aURBQTZCO0FBTjdCLGlCQUFpQjtJQW5DN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxlQUFlO1FBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUJiO0tBQ0EsQ0FBQztxQ0F1QjJCLDBCQUFXO0dBWjNCLGlCQUFpQixDQW1DN0I7QUFuQ1ksOENBQWlCIiwiZmlsZSI6ImZvcm0vcGFuZWxCdG5JbWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ3BhbmVsLWJ0bi1pbWcnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2ZyfX08L3A+IDwvZGl2PlxyXG5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+ICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCIgKm5nSWY9XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlICE9ICcnXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlXCI+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwib2JqU3RlcC50eXBlID09ICdpbWFnZV9zZWxlY3Rpb24nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwib25DaG9vc2VWYWwodmFsZXVyTGlzdC5uYW1lKVwiPiA8aW1nIHNyYz1cInt7dmFsZXVyTGlzdC51cmx9fSBcIiAvPiAgPC9hPiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlXCI+PC9kaXY+IFxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcycgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXNcIj48L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnIgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyXCI+PC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbi8qXHJcbiAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIGNsYXNzPVwiYnRuIGJ0bi1pbmZvLWN1c3RvbVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiovXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBhbmVsQnRuQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxyXG4gICAgQElucHV0KCkgc3RlcElkeDsgICAgICAgIC8vIFNlbmQgdGhlIGN1cnJlbnQgc3RlcCBpbiBvcmRlciB0byBpbmNyZW1lbnQgaXRcclxuICAgIEBJbnB1dCgpIGZvb3ROb3RlID0gJyc7IC8vT3B0aW9uYWwgaW5zZXJ0IGEgZm9vdG5vdGUgaW4gY29tcG9uZW50XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuICAgIGN1cnJlbnRMaXN0PSBbXTtcclxuXHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2VcclxuICAgIClcclxuICAgIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmxpc3RPZkVsZW1lbnRzICE9ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubGlzdE9mRWxlbWVudHMpXHJcblxyXG4gICAgICAgICAgICAvLyBGUk9NIENPTExFQ1RJT05cclxuICAgICAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdC5wdXNoKHsgXCJuYW1lXCI6IGRhdGFzLm5hbWUsIFwidXJsXCI6IGRhdGFzLnVybH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hvb3NlVmFsKHZhbCl7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6IHZhbCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
