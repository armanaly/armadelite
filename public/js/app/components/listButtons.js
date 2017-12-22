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
const form_service_1 = require("./form.service");
const step_service_1 = require("../Engine/step.service");
let ListButtonsComponent = class ListButtonsComponent {
    constructor(_formService, _stepService) {
        this._formService = _formService;
        this._stepService = _stepService;
        this.change = new core_1.EventEmitter();
        this.display = false;
    }
    ngOnInit() {
        console.log("dans LIST BUTTONS");
        console.log(this._stepService.language);
        for (let datas of this.listOfElements) {
            if (datas.name == this.objStep.name) {
                if (typeof datas.list_es !== 'undefined')
                    this.currentList_es = datas.list_es;
                if (typeof datas.list_nl !== 'undefined')
                    this.currentList_nl = datas.list_nl;
                if (typeof datas.list_fr !== 'undefined')
                    this.currentList_fr = datas.list_fr;
                if (typeof datas.list_en !== 'undefined')
                    this.currentList_en = datas.list_en;
                break;
            }
        }
        this.display = true;
    }
    onChooseVal($event) {
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
    __metadata("design:type", Object)
], ListButtonsComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListButtonsComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListButtonsComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ListButtonsComponent.prototype, "valueSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ListButtonsComponent.prototype, "change", void 0);
ListButtonsComponent = __decorate([
    core_1.Component({
        selector: 'list-buttons',
        template: `
     <div *ngIf="display">
         <div *ngIf="_stepService.language == 'en'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_en}}</p> </div>
         <div *ngIf="_stepService.language == 'es'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_es}}</p> </div>
         <div *ngIf="_stepService.language == 'fr'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_fr}}</p> </div>
         <div *ngIf="_stepService.language == 'nl'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_nl}}</p> </div>
         <div class="panel-body" >
            <div class="jumbotron" *ngIf="objStep.configuration.header_note && objStep.configuration.header_note != ''">
                <p [innerHTML] = "objStep.configuration.header_note"></p>
            </div>
            <ul class="items"  *ngIf="_stepService.language == 'fr'" >
                <li  *ngFor="let valeurList of currentList_fr">
                     <!--data-toggle="tooltip" title=" "-->
                    <button *ngIf="valueSelected != valeurList" 
                        class="{{ _stepService.template.list_btn}}"
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" 
                        data-toggle="tooltip" title=" text"
                        class="{{_stepService.template.list_btn}}" 
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
            <ul class="items" *ngIf="_stepService.language == 'es'"  >
                <li  *ngFor="let valeurList of currentList_es">
                    <button *ngIf="valueSelected != valeurList" 
                        class="{{ _stepService.template.list_btn}}"
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" 
                        data-toggle="tooltip" title=" text"
                        class="{{_stepService.template.list_btn}}" 
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
            <ul class="items" *ngIf="_stepService.language == 'en'"  >
                <li  *ngFor="let valeurList of currentList_en">
                    <button *ngIf="valueSelected != valeurList" 
                        class="{{ _stepService.template.list_btn}}"
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" 
                        data-toggle="tooltip" title=" text"
                        class="{{_stepService.template.list_btn}}" 
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
            <ul class="items" *ngIf="_stepService.language == 'nl'"  >
                <li  *ngFor="let valeurList of currentList_nl">
                    <button *ngIf="valueSelected != valeurList" 
                        class="{{ _stepService.template.list_btn}}"
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" 
                        data-toggle="tooltip" title=" text"
                        class="{{_stepService.template.list_btn}}" 
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
         </div>
         <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
         <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
         <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
         <div *ngIf="_stepService.language == 'nl' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_nl != ''" [innerHTML] = "objStep.configuration.foot_note_nl"></div>
     </div>
`
    }),
    __metadata("design:paramtypes", [form_service_1.FormService, step_service_1.StepService])
], ListButtonsComponent);
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdEJ1dHRvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsaURBQTJDO0FBQzNDLHlEQUFtRDtBQTRGbkQsSUFBYSxvQkFBb0IsR0FBakM7SUFjSSxZQUNZLFlBQXlCLEVBQVUsWUFBeUI7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVQ5RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFNdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUtmLENBQUM7SUFFRixRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBK0JqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QsV0FBVyxDQUFDLE1BQU07UUFFZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ25DLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDO0lBQUEsQ0FBQztDQUNMLENBQUE7QUExRVk7SUFBUixZQUFLLEVBQUU7O3FEQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7OzREQUFnQjtBQUNmO0lBQVIsWUFBSyxFQUFFOztxREFBUztBQUNSO0lBQVIsWUFBSyxFQUFFOzsyREFBZTtBQUViO0lBQVQsYUFBTSxFQUFFOztvREFBNkI7QUFON0Isb0JBQW9CO0lBMUZoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUZiO0tBQ0EsQ0FBQztxQ0FpQjRCLDBCQUFXLEVBQXdCLDBCQUFXO0dBZi9ELG9CQUFvQixDQTJFaEM7QUEzRVksb0RBQW9CIiwiZmlsZSI6ImNvbXBvbmVudHMvbGlzdEJ1dHRvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xyXG5pbXBvcnQge0Zvcm1TZXJ2aWNlfSBmcm9tIFwiLi9mb3JtLnNlcnZpY2VcIjtcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdsaXN0LWJ1dHRvbnMnLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICA8ZGl2ICpuZ0lmPVwiZGlzcGxheVwiPlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VufX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2ZyfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCdcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX25sfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImp1bWJvdHJvblwiICpuZ0lmPVwib2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAhPSAnJ1wiPlxyXG4gICAgICAgICAgICAgICAgPHAgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZVwiPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiA+XHJcbiAgICAgICAgICAgICAgICA8bGkgICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0X2ZyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDwhLS1kYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiBcIi0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgID5cclxuICAgICAgICAgICAgICAgIDxsaSAgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RfZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCAhPSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiICA+XHJcbiAgICAgICAgICAgICAgICA8bGkgICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0X2VuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCdcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGxpICAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdF9ubFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZVwiPjwvZGl2PiBcclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXMgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzXCI+PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnIgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mclwiPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCcgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX25sICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfbmxcIj48L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuXHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuXHJcbiAgICBjdXJyZW50TGlzdF9lcztcclxuICAgIGN1cnJlbnRMaXN0X2ZyO1xyXG4gICAgY3VycmVudExpc3Rfbmw7XHJcbiAgICBjdXJyZW50TGlzdF9lbjtcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2UsIHByaXZhdGUgX3N0ZXBTZXJ2aWNlOiBTdGVwU2VydmljZVxyXG4gICAgKVxyXG4gICAge31cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRhbnMgTElTVCBCVVRUT05TXCIpO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLm9ialN0ZXAuY29uZGl0aW9ucy5sZW5ndGggPiAwKXtcclxuICAgICAgICAvLyAgICAgbGV0IHZhbHVlQ29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0udmFsdWU7XHJcbiAgICAgICAgLy8gICAgIGxldCBrZXlDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS5rZXk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgbGV0IHRtcFN0ZXBJZHggPSB0aGlzLnN0ZXBJZHggLSAxOyAvLyBzdGVwSWR4IHRlbXBvcmFpcmVcclxuICAgICAgICAvLyAgICAgLyogTE9PSyBGT1IgVkFMVUUgU0VMRUNURUQgSU5UTyBGT1JNIFNFUlZJQ0UgKCoqYXJyYXlTdGVwcyoqKVxyXG4gICAgICAgIC8vICAgICAgICAgTEEgQ09ORElUSU9OIEEgVEVTVEVSIEVUIEpFIExBIENPTVBBUkUgQVZFQyBMQSBWQUxFVVIgREUgTEEgU1RFUCBDT1VSQU5URVxyXG4gICAgICAgIC8vICAgICAgKi9cclxuICAgICAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBTSSBJTCBZIEEgVU5FIDJlbWUgQ09ORElUSU9OXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzFdICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24yID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMV0udmFsdWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbjIgPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1sxXS5rZXk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uMl0gPT09IHZhbHVlQ29uZGl0aW9uMikgIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UubGFuZ3VhZ2UpXHJcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XHJcbiAgICAgICAgICAgIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YXMubGlzdF9lcyAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9lcyA9IGRhdGFzLmxpc3RfZXM7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFzLmxpc3RfbmwgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfbmwgPSBkYXRhcy5saXN0X25sO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhcy5saXN0X2ZyICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2ZyID0gZGF0YXMubGlzdF9mcjtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YXMubGlzdF9lbiAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9lbiA9IGRhdGFzLmxpc3RfZW47XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgb25DaG9vc2VWYWwoJGV2ZW50KXtcclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZCA6ICRldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIHN0ZXBJZHggOiB0aGlzLnN0ZXBJZHhcclxuICAgICAgICB9KVxyXG4gICAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
