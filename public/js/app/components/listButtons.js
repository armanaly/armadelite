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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGlzdEJ1dHRvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx3Q0FBb0U7QUFDcEUsaURBQTJDO0FBQzNDLHlEQUFtRDtBQTZGbkQsSUFBYSxvQkFBb0IsR0FBakM7SUFlSSxZQUNZLFlBQXlCLEVBQVUsWUFBeUI7UUFBNUQsaUJBQVksR0FBWixZQUFZLENBQWE7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQVY5RCxXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFPdEMsWUFBTyxHQUFHLEtBQUssQ0FBQztJQUtmLENBQUM7SUFFRixRQUFRO1FBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBK0JqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDaEMsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFBLENBQUM7WUFDbkMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxJQUFJO29CQUNBLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFFckMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO29CQUN6QixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQ3hDLElBQUk7b0JBQ0EsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUVyQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztnQkFDeEMsSUFBSTtvQkFDQSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBRXJDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO2dCQUN4QyxJQUFJO29CQUNBLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDckMsS0FBSyxDQUFDO1lBQ1YsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBQ0QsV0FBVyxDQUFDLE1BQU07UUFFZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNiLFNBQVMsRUFBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsSUFBSTtZQUN0RCxhQUFhLEVBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1lBQ25DLE9BQU8sRUFBRyxJQUFJLENBQUMsT0FBTztTQUN6QixDQUFDLENBQUE7SUFDTixDQUFDO0lBQUEsQ0FBQztDQUNMLENBQUE7QUF2Rlk7SUFBUixZQUFLLEVBQUU7O3FEQUFTO0FBQ1I7SUFBUixZQUFLLEVBQUU7OzREQUFnQjtBQUNmO0lBQVIsWUFBSyxFQUFFOztxREFBUztBQUNSO0lBQVIsWUFBSyxFQUFFOzsyREFBZTtBQUViO0lBQVQsYUFBTSxFQUFFOztvREFBNkI7QUFON0Isb0JBQW9CO0lBM0ZoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNGYjtLQUNBLENBQUM7cUNBa0I0QiwwQkFBVyxFQUF3QiwwQkFBVztHQWhCL0Qsb0JBQW9CLENBd0ZoQztBQXhGWSxvREFBb0IiLCJmaWxlIjoiY29tcG9uZW50cy9saXN0QnV0dG9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXHJcbmltcG9ydCB7Rm9ybVNlcnZpY2V9IGZyb20gXCIuL2Zvcm0uc2VydmljZVwiO1xyXG5pbXBvcnQge1N0ZXBTZXJ2aWNlfSBmcm9tIFwiLi4vRW5naW5lL3N0ZXAuc2VydmljZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpc3QtYnV0dG9ucycsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICAgIDxkaXYgKm5nSWY9XCJkaXNwbGF5XCI+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWxfZW59fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VzJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWxfZXN9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWxfZnJ9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJ1wiIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUucGFuZWxfaGVhZGluZ319XCI+PHAgY2xhc3M9XCJ0ZXh0LXVwcGVyY2FzZVwiPnt7b2JqU3RlcC5jb25maWd1cmF0aW9uLmxhYmVsUGFuZWxfbmx9fTwvcD4gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwianVtYm90cm9uXCIgKm5nSWY9XCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uaGVhZGVyX25vdGUgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlICE9ICcnXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmhlYWRlcl9ub3RlXCI+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiAgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJ1wiID5cclxuICAgICAgICAgICAgICAgIDxsaSAgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RfZnJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPCEtLWRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIFwiLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3M9XCJpdGVtc1wiICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdlcydcIiAgPlxyXG4gICAgICAgICAgICAgICAgPGxpICAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdF9lc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyBfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtdG9nZ2xlPVwidG9vbHRpcFwiIHRpdGxlPVwiIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7X3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZW4nXCIgID5cclxuICAgICAgICAgICAgICAgIDxsaSAgKm5nRm9yPVwibGV0IHZhbGV1ckxpc3Qgb2YgY3VycmVudExpc3RfZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCAhPSB2YWxldXJMaXN0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgX3N0ZXBTZXJ2aWNlLnRlbXBsYXRlLmxpc3RfYnRufX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgPT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXRvZ2dsZT1cInRvb2x0aXBcIiB0aXRsZT1cIiB0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7e19zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIml0ZW1zXCIgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ25sJ1wiICA+XHJcbiAgICAgICAgICAgICAgICA8bGkgICpuZ0Zvcj1cImxldCB2YWxldXJMaXN0IG9mIGN1cnJlbnRMaXN0X25sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInZhbHVlU2VsZWN0ZWQgIT0gdmFsZXVyTGlzdFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7IF9zdGVwU2VydmljZS50ZW1wbGF0ZS5saXN0X2J0bn19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkID09IHZhbGV1ckxpc3RcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10b2dnbGU9XCJ0b29sdGlwXCIgdGl0bGU9XCIgdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tfc3RlcFNlcnZpY2UudGVtcGxhdGUubGlzdF9idG59fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvbkNob29zZVZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ7e3ZhbGV1ckxpc3R9fVwiPnt7dmFsZXVyTGlzdH19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2VuJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGUgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZVwiPjwvZGl2PiBcclxuICAgICAgICAgPGRpdiAqbmdJZj1cIl9zdGVwU2VydmljZS5sYW5ndWFnZSA9PSAnZXMnICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZXMgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9lcyAhPSAnJ1wiIFtpbm5lckhUTUxdID0gXCJvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2VzXCI+PC9kaXY+XHJcbiAgICAgICAgIDxkaXYgKm5nSWY9XCJfc3RlcFNlcnZpY2UubGFuZ3VhZ2UgPT0gJ2ZyJyAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX2ZyICYmIG9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfZnIgIT0gJydcIiBbaW5uZXJIVE1MXSA9IFwib2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mclwiPjwvZGl2PlxyXG4gICAgICAgICA8ZGl2ICpuZ0lmPVwiX3N0ZXBTZXJ2aWNlLmxhbmd1YWdlID09ICdubCcgJiYgb2JqU3RlcC5jb25maWd1cmF0aW9uLmZvb3Rfbm90ZV9mciAmJiBvYmpTdGVwLmNvbmZpZ3VyYXRpb24uZm9vdF9ub3RlX25sICE9ICcnXCIgW2lubmVySFRNTF0gPSBcIm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb290X25vdGVfbmxcIj48L2Rpdj5cclxuYFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIExpc3RCdXR0b25zQ29tcG9uZW50IHtcclxuICAgIEBJbnB1dCgpIG9ialN0ZXA7XHJcbiAgICBASW5wdXQoKSBsaXN0T2ZFbGVtZW50cztcclxuICAgIEBJbnB1dCgpIHN0ZXBJZHg7XHJcbiAgICBASW5wdXQoKSB2YWx1ZVNlbGVjdGVkOyAvLyBWYWx1ZSB0byBwYXNzIHRvIHRoZSBmb3JtU2VydmljZSBjb250YWluaW5nIHRoZSBzZWxlY3Rpb25cclxuXHJcbiAgICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBFbWl0dGVyIHRvIHNlbmQgYmFjayBkYXRhIHRvIHBhcmVudCBjb21wb25lbnRcclxuXHJcbiAgICBjdXJyZW50TGlzdF9lcztcclxuICAgIGN1cnJlbnRMaXN0X2ZyO1xyXG4gICAgY3VycmVudExpc3Rfbmw7XHJcbiAgICBjdXJyZW50TGlzdF9lbjtcclxuICAgIGxpc3REZWZhdWx0O1xyXG4gICAgZGlzcGxheSA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2Zvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSwgcHJpdmF0ZSBfc3RlcFNlcnZpY2U6IFN0ZXBTZXJ2aWNlXHJcbiAgICApXHJcbiAgICB7fVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGFucyBMSVNUIEJVVFRPTlNcIik7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMub2JqU3RlcC5jb25kaXRpb25zLmxlbmd0aCA+IDApe1xyXG4gICAgICAgIC8vICAgICBsZXQgdmFsdWVDb25kaXRpb24gPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1swXS52YWx1ZTtcclxuICAgICAgICAvLyAgICAgbGV0IGtleUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLmtleTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBsZXQgdG1wU3RlcElkeCA9IHRoaXMuc3RlcElkeCAtIDE7IC8vIHN0ZXBJZHggdGVtcG9yYWlyZVxyXG4gICAgICAgIC8vICAgICAvKiBMT09LIEZPUiBWQUxVRSBTRUxFQ1RFRCBJTlRPIEZPUk0gU0VSVklDRSAoKiphcnJheVN0ZXBzKiopXHJcbiAgICAgICAgLy8gICAgICAgICBMQSBDT05ESVRJT04gQSBURVNURVIgRVQgSkUgTEEgQ09NUEFSRSBBVkVDIExBIFZBTEVVUiBERSBMQSBTVEVQIENPVVJBTlRFXHJcbiAgICAgICAgLy8gICAgICAqL1xyXG4gICAgICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICBpZiAodHlwZW9mIHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pICE9ICd1bmRlZmluZWQnKXtcclxuICAgICAgICAvLyAgICAgICAgIC8vIFNJIElMIFkgQSBVTkUgMmVtZSBDT05ESVRJT05cclxuICAgICAgICAvLyAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMV0gIT0gJ3VuZGVmaW5lZCcpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbjIgPSB0aGlzLm9ialN0ZXAuY29uZGl0aW9uc1sxXS52YWx1ZTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uMiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzFdLmtleTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5fZm9ybVNlcnZpY2UuYXJyYXlTdGVwcy5maW5kKHggPT4geFtrZXlDb25kaXRpb24yXSA9PT0gdmFsdWVDb25kaXRpb24yKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBlbHNle1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9zdGVwU2VydmljZS5sYW5ndWFnZSlcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3RPZkVsZW1lbnRzKVxyXG4gICAgICAgIGZvciAobGV0IGRhdGFzIG9mIHRoaXMubGlzdE9mRWxlbWVudHMpe1xyXG4gICAgICAgICAgICBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXMubGlzdF9lcy5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfZXMgPSBkYXRhcy5saXN0X2VzO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfZXMgPSBkYXRhcy5saXN0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkYXRhcy5saXN0X25sLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9ubCA9IGRhdGFzLmxpc3Rfbmw7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TGlzdF9ubCA9IGRhdGFzLmxpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFzLmxpc3RfZnIubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2ZyID0gZGF0YXMubGlzdF9mcjtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0X2ZyID0gZGF0YXMubGlzdDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YXMubGlzdF9lbi5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfZW4gPSBkYXRhcy5saXN0X2VuO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudExpc3RfZW4gPSBkYXRhcy5saXN0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIG9uQ2hvb3NlVmFsKCRldmVudCl7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiAkZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
