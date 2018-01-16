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
        if (this.objStep.conditions.length > 0) {
            console.log('test conditions');
            let valueCondition = this.objStep.conditions[0].value;
            let keyCondition = this.objStep.conditions[0].key;
            let tmpStepIdx = this.stepIdx - 1;
            if (typeof this._formService.arraySteps.find(x => x[keyCondition] === valueCondition) != 'undefined') {
                if (typeof this.objStep.conditions[1] != 'undefined') {
                    let valueCondition2 = this.objStep.conditions[1].value;
                    let keyCondition2 = this.objStep.conditions[1].key;
                    if (typeof this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2) != 'undefined') {
                        this.display = true;
                    }
                }
                else {
                    this.display = true;
                }
            }
        }
        else {
            this.display = true;
        }
        console.log(this._stepService.language);
        console.log(this.listOfElements);
        for (let datas of this.listOfElements) {
            if (datas.name == this.objStep.name) {
                if (datas.list_es.length > 0)
                    this.currentList_es = datas.list_es;
                else
                    this.currentList_es = datas.list;
                if (datas.list_nl.length > 0)
                    this.currentList_nl = datas.list_nl;
                else
                    this.currentList_nl = datas.list;
                if (datas.list_fr.length > 0)
                    this.currentList_fr = datas.list_fr;
                else
                    this.currentList_fr = datas.list;
                if (datas.list_en.length > 0)
                    this.currentList_en = datas.list_en;
                else
                    this.currentList_en = datas.list;
                break;
            }
        }
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
         </div>
         <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
         <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
         <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
         <div *ngIf="_stepService.language == 'nl' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_nl != ''" [innerHTML] = "objStep.configuration.foot_note_nl"></div>
`
    }),
    __metadata("design:paramtypes", [form_service_1.FormService, step_service_1.StepService])
], ListButtonsComponent);
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdEJ1dHRvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsaURBQTJDO0FBQzNDLHlEQUFtRDtBQTZGbkQsSUFBYSxvQkFBb0IsR0FBakM7SUFlSSxZQUNZLFlBQXlCLEVBQVUsWUFBeUI7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVY5RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFPdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUtmLENBQUM7SUFFRixRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ2pDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO1lBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtZQUM5QixJQUFJLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDdEQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBRWxELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1lBTWxDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLGNBQWMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxDQUFBLENBQUM7Z0JBRWxHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUks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Q2Y7SUFBUixZQUFLLEVBQUU7O3FEQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7OzJEQUFlO0FBRWI7SUFBVCxhQUFNLEVBQUU7O29EQUE2QjtBQU43QixvQkFBb0I7SUEzRmhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsY0FBYztRQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBc0ZiO0tBQ0EsQ0FBQztxQ0FrQjRCLDBCQUFXLEVBQXdCLDBCQUFXO0dBaEIvRCxvQkFBb0IsQ0F5RmhDO0FBekZZLG9EQUFvQiIsImZpbGUiOiJjb21wb25lbnRzL2xpc3RCdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RlcFNlcnZpY2V9IGZyb20gXCIuLi9FbmdpbmUvc3RlcC5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlzdC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9lbn19PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9lc319PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9mcn19PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnbmwnXCIgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5wYW5lbF9oZWFkaW5nfX1cIj48cCBjbGFzcz1cInRleHQtdXBwZXJjYXNlXCI+e3tvYmpTdGVwLmNvbmZpZ3VyYXRpb24ubGFiZWxQYW5lbF9ubH19PC9wPiA8L2Rpdj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWJvZHlcIiA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJqdW1ib3Ryb25cIiAqbmdJZj1cIm9ialN0ZXAuY29uZmlndXJhdGlvbi5oZWFkZXJfbm90ZSAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGUgIT0gJydcIj5cclxuICAgICAgICAgICAgICAgIDxwIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGVcIj48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInXCIgPlxyXG4gICAgICAgICAgICAgICAgPGxpICAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdF9mclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICA8IS0tZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIgXCItLT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCAhPSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiICA+XHJcbiAgICAgICAgICAgICAgICA8bGkgICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0X2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGxpICAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdF9lblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnbmwnXCIgID5cclxuICAgICAgICAgICAgICAgIDxsaSAgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RfbmxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCAhPSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlXCI+PC9kaXY+IFxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcycgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXNcIj48L2Rpdj5cclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnIgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyXCI+PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfbmwgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9ubFwiPjwvZGl2PlxyXG5gXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTGlzdEJ1dHRvbnNDb21wb25lbnQge1xyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xyXG4gICAgQElucHV0KCkgc3RlcElkeDtcclxuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxyXG5cclxuICAgIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIEVtaXR0ZXIgdG8gc2VuZCBiYWNrIGRhdGEgdG8gcGFyZW50IGNvbXBvbmVudFxyXG5cclxuICAgIGN1cnJlbnRMaXN0X2VzO1xyXG4gICAgY3VycmVudExpc3RfZnI7XHJcbiAgICBjdXJyZW50TGlzdF9ubDtcclxuICAgIGN1cnJlbnRMaXN0X2VuO1xyXG4gICAgbGlzdERlZmF1bHQ7XHJcbiAgICBkaXNwbGF5ID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2VcclxuICAgIClcclxuICAgIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJkYW5zIExJU1QgQlVUVE9OU1wiKTtcclxuICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0IGNvbmRpdGlvbnMnKVxyXG4gICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLmtleTtcclxuXHJcbiAgICAgICAgICAgIGxldCB0bXBTdGVwSWR4ID0gdGhpcy5zdGVwSWR4IC0gMTsgLy8gc3RlcElkeCB0ZW1wb3JhaXJlXHJcbiAgICAgICAgICAgIC8qIExPT0sgRk9SIFZBTFVFIFNFTEVDVEVEIElOVE8gRk9STSBTRVJWSUNFICgqKmFycmF5U3RlcHMqKilcclxuICAgICAgICAgICAgICAgIExBIENPTkRJVElPTiBBIFRFU1RFUiBFVCBKRSBMQSBDT01QQVJFIEFWRUMgTEEgVkFMRVVSIERFIExBIFNURVAgQ09VUkFOVEVcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb25dID09PSB2YWx1ZUNvbmRpdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoeCA9PiB4W2tleUNvbmRpdGlvbl0gPT09IHZhbHVlQ29uZGl0aW9uKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAvLyBTSSBJTCBZIEEgVU5FIDJlbWUgQ09ORElUSU9OXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzFdICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVDb25kaXRpb24yID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleUNvbmRpdGlvbjIgPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1sxXS5rZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb24yXSA9PT0gdmFsdWVDb25kaXRpb24yKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5fc3RlcFNlcnZpY2UubGFuZ3VhZ2UpXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cylcclxuICAgICAgICBmb3IgKGxldCBkYXRhcyBvZiB0aGlzLmxpc3RPZkVsZW1lbnRzKXtcclxuICAgICAgICAgICAgaWYgKGRhdGFzLm5hbWUgPT0gdGhpcy5vYmpTdGVwLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzLmxpc3RfZXMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2VzID0gZGF0YXMubGlzdF9lcztcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2VzID0gZGF0YXMubGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXMubGlzdF9ubC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfbmwgPSBkYXRhcy5saXN0X25sO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfbmwgPSBkYXRhcy5saXN0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhcy5saXN0X2ZyLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9mciA9IGRhdGFzLmxpc3RfZnI7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9mciA9IGRhdGFzLmxpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzLmxpc3RfZW4ubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2VuID0gZGF0YXMubGlzdF9lbjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2VuID0gZGF0YXMubGlzdDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpe1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgdmFsdWVOYW1lIDogdGhpcy5vYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9ybV92YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZVNlbGVjdGVkIDogJGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
