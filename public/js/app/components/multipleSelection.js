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
let MultiSelectionComponent = class MultiSelectionComponent {
    constructor(_stepService) {
        this._stepService = _stepService;
        this.change = new core_1.EventEmitter();
    }
    ngOnInit() {
        console.log(this.listOfElements);
        for (let datas of this.listOfElements) {
            if (datas.name == this.objStep.name) {
                if (typeof datas.list_fr !== 'undefined')
                    this.currentList_fr = datas.list_fr;
                if (typeof datas.list_nl !== 'undefined')
                    this.currentList_nl = datas.list_nl;
                if (typeof datas.list_es !== 'undefined')
                    this.currentList_es = datas.list_nl;
                if (typeof datas.list_en !== 'undefined')
                    this.currentList_en = datas.list_nl;
                break;
            }
        }
    }
    onChooseVal($event) {
        var addOption = true;
        console.log($event);
        console.log($event.target);
        console.log(($event.target.value));
        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == $event.target.value) {
                this.valuesSelected.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.valuesSelected.push($event.target.value);
        }
    }
    ;
    submit() {
        this.change.emit({
            valueName: this.objStep.configuration.form_value.name,
            valueSelected: this.valuesSelected,
            stepIdx: this.stepIdx
        });
    }
    isSelected(option) {
        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == option) {
                return true;
            }
        }
        return false;
    }
    ;
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiSelectionComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiSelectionComponent.prototype, "valueSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiSelectionComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiSelectionComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MultiSelectionComponent.prototype, "valuesSelected", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MultiSelectionComponent.prototype, "change", void 0);
MultiSelectionComponent = __decorate([
    core_1.Component({
        selector: 'multi-selection',
        template: `
        <div>
            <div *ngIf="_stepService.language == 'en'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
            <div *ngIf="_stepService.language == 'es'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_es}}</p> </div>
            <div *ngIf="_stepService.language == 'fr'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_fr}}</p> </div>
            <div *ngIf="_stepService.language == 'nl'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_nl}}</p> </div>
     
            <div class="panel-body" >
                    <ul class="items" *ngIf="_stepService.language == 'en'">
                        <li *ngFor="let valeurList of currentList_fr">
                            <button *ngIf="isSelected(valeurList) == false" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.list_btn}}">
                            {{valeurList}}
                            </button>
                            <button *ngIf="isSelected(valeurList) == true" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.hover_btn}}">
                            {{valeurList}}
                            </button>
                        </li>
                    </ul>
                    <ul class="items" *ngIf="_stepService.language == 'fr'">
                        <li *ngFor="let valeurList of currentList_fr">
                            <button *ngIf="isSelected(valeurList) == false" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.list_btn}}">
                            {{valeurList}}
                            </button>
                            <button *ngIf="isSelected(valeurList) == true" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.hover_btn}}">
                            {{valeurList}}
                            </button>
                        </li>
                    </ul>
                    <ul class="items" *ngIf="_stepService.language == 'es'">
                        <li *ngFor="let valeurList of currentList_fr">
                            <button *ngIf="isSelected(valeurList) == false" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.list_btn}}">
                            {{valeurList}}
                            </button>
                            <button *ngIf="isSelected(valeurList) == true" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.hover_btn}}">
                            {{valeurList}}
                            </button>
                        </li>
                    </ul>
                    <ul class="items" *ngIf="_stepService.language == 'nl'">
                        <li *ngFor="let valeurList of currentList_nl">
                            <button *ngIf="isSelected(valeurList) == false" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.list_btn}}">
                            {{valeurList}}
                            </button>
                            <button *ngIf="isSelected(valeurList) == true" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.hover_btn}}">
                            {{valeurList}}
                            </button>
                        </li>
                    </ul>
            </div>
            <div align="center">
                <button class="{{_stepService.template.list_btn}}"  *ngIf="_stepService.language == 'en'" btn-default btn-lg (click)="submit()">NEXT</button>
                <button class="{{_stepService.template.list_btn}}"  *ngIf="_stepService.language == 'es'" btn-default btn-lg (click)="submit()">PROXIMO</button>
                <button class="{{_stepService.template.list_btn}}"  *ngIf="_stepService.language == 'fr'" btn-default btn-lg (click)="submit()">SUIVANT</button>
                <button class="{{_stepService.template.list_btn}}"  *ngIf="_stepService.language == 'nl'" btn-default btn-lg (click)="submit()">VOLGENDE</button>
            </div>
            <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
            <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
            <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
            <div *ngIf="_stepService.language == 'nl' && objStep.configuration.foot_note_nl && objStep.configuration.foot_note_nl != ''" [innerHTML] = "objStep.configuration.foot_note_nl"></div>
            <div></div>
        </div>`
    }),
    __metadata("design:paramtypes", [step_service_1.StepService])
], MultiSelectionComponent);
exports.MultiSelectionComponent = MultiSelectionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbXVsdGlwbGVTZWxlY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUseURBQW1EO0FBMkZuRCxJQUFhLHVCQUF1QixHQUFwQztJQWFJLFlBQXFCLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBTnBDLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztJQU1ZLENBQUM7SUFDbkQsUUFBUTtRQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQSxDQUFDO1lBQ25DLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUNqQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSyxDQUFDLE9BQU8sS0FBSyxXQUFXLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztvQkFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEtBQUssV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLEtBQUssQ0FBQztZQUNWLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFNO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtRQUNsQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDakMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ1osSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFFRixNQUFNO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDYixTQUFTLEVBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLElBQUk7WUFDdEQsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ2xDLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQU07UUFDYixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQUEsQ0FBQztDQUdMLENBQUE7QUFoRVk7SUFBUixZQUFLLEVBQUU7O3dEQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7OzhEQUFlO0FBQ2Q7SUFBUixZQUFLLEVBQUU7O3dEQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7OytEQUFnQjtBQUNmO0lBQVIsWUFBSyxFQUFFOzsrREFBZ0I7QUFDZDtJQUFULGFBQU0sRUFBRTs7dURBQTZCO0FBUDdCLHVCQUF1QjtJQXpGbkMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxpQkFBaUI7UUFDM0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFvRkM7S0FDZCxDQUFDO3FDQWVxQywwQkFBVztHQWJyQyx1QkFBdUIsQ0FrRW5DO0FBbEVZLDBEQUF1QiIsImZpbGUiOiJjb21wb25lbnRzL211bHRpcGxlU2VsZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtTdGVwU2VydmljZX0gZnJvbSBcIi4uL0VuZ2luZS9zdGVwLnNlcnZpY2VcIjtcclxuLy8gQ0FOIFNFTEVDVCBNT1JFIFRIQU4gT05FIFZBTFVFXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtdWx0aS1zZWxlY3Rpb24nLFxyXG4gICAgdGVtcGxhdGU6IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2VzfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX2ZyfX08L3A+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCdcIiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLnBhbmVsX2hlYWRpbmd9fVwiPjxwIGNsYXNzPVwidGV4dC11cHBlcmNhc2VcIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsX25sfX08L3A+IDwvZGl2PlxyXG4gICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keVwiID5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlbidcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0X2ZyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSBmYWxzZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gdHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUuaG92ZXJfYnRufX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RfZnJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IGZhbHNlXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSB0cnVlXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5ob3Zlcl9idG59fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdF9mclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gZmFsc2VcIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc1NlbGVjdGVkKHZhbGV1ckxpc3QpID09IHRydWVcIiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCIgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmhvdmVyX2J0bn19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0X25sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaXNTZWxlY3RlZCh2YWxldXJMaXN0KSA9PSBmYWxzZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImlzU2VsZWN0ZWQodmFsZXVyTGlzdCkgPT0gdHJ1ZVwiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUuaG92ZXJfYnRufX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwic3VibWl0KClcIj5ORVhUPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiICAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnXCIgYnRuLWRlZmF1bHQgYnRuLWxnIChjbGljayk9XCJzdWJtaXQoKVwiPlBST1hJTU88L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdmcidcIiBidG4tZGVmYXVsdCBidG4tbGcgKGNsaWNrKT1cInN1Ym1pdCgpXCI+U1VJVkFOVDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJ1wiIGJ0bi1kZWZhdWx0IGJ0bi1sZyAoY2xpY2spPVwic3VibWl0KClcIj5WT0xHRU5ERTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZSAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlXCI+PC9kaXY+IFxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcycgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXNcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZnInICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnIgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX25sICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfbmwgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9ubFwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNdWx0aVNlbGVjdGlvbkNvbXBvbmVudCB7XHJcblxyXG4gICAgQElucHV0KCkgb2JqU3RlcDtcclxuICAgIEBJbnB1dCgpIHZhbHVlU2VsZWN0ZWQ7IC8vIFZhbHVlIHRvIHBhc3MgdG8gdGhlIGZvcm1TZXJ2aWNlIGNvbnRhaW5pbmcgdGhlIHNlbGVjdGlvblxyXG4gICAgQElucHV0KCkgc3RlcElkeDtcclxuICAgIEBJbnB1dCgpIGxpc3RPZkVsZW1lbnRzO1xyXG4gICAgQElucHV0KCkgdmFsdWVzU2VsZWN0ZWQ7XHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuXHJcbiAgICBjdXJyZW50TGlzdF9mcjtcclxuICAgIGN1cnJlbnRMaXN0X25sO1xyXG4gICAgY3VycmVudExpc3RfZXM7XHJcbiAgICBjdXJyZW50TGlzdF9lbjtcclxuICAgIGNvbnN0cnVjdG9yKCBwcml2YXRlIF9zdGVwU2VydmljZTogU3RlcFNlcnZpY2UgKSB7fVxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cyk7XHJcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XHJcbiAgICAgICAgICAgIGlmIChkYXRhcy5uYW1lID09IHRoaXMub2JqU3RlcC5uYW1lKXtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YXMubGlzdF9mciAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9mciA9IGRhdGFzLmxpc3RfZnI7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFzLmxpc3RfbmwgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfbmwgPSBkYXRhcy5saXN0X25sO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhcy5saXN0X2VzICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2VzID0gZGF0YXMubGlzdF9ubDtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YXMubGlzdF9lbiAhPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9lbiA9IGRhdGFzLmxpc3Rfbmw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpIHtcclxuICAgICAgICB2YXIgYWRkT3B0aW9uID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZygkZXZlbnQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCRldmVudC50YXJnZXQpXHJcbiAgICAgICAgY29uc29sZS5sb2coKCRldmVudC50YXJnZXQudmFsdWUpKVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52YWx1ZXNTZWxlY3RlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZXNTZWxlY3RlZFtpXSA9PSAkZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlc1NlbGVjdGVkLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGFkZE9wdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkZE9wdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlc1NlbGVjdGVkLnB1c2goJGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICAgIHZhbHVlTmFtZSA6IHRoaXMub2JqU3RlcC5jb25maWd1cmF0aW9uLmZvcm1fdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgdmFsdWVTZWxlY3RlZDogdGhpcy52YWx1ZXNTZWxlY3RlZCxcclxuICAgICAgICAgICAgc3RlcElkeCA6IHRoaXMuc3RlcElkeFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgaXNTZWxlY3RlZChvcHRpb24pIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWVzU2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFsdWVzU2VsZWN0ZWRbaV0gPT0gb3B0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
