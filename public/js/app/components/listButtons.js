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
const form_service_1 = require("./form.service");
let ListButtonsComponent = class ListButtonsComponent {
    constructor(_formService) {
        this._formService = _formService;
        this.footNote = ''; //Optional insert a footnote in component
        this.change = new core_1.EventEmitter(); // Emitter to send back data to parent component
        this.display = false;
    }
    ngOnInit() {
        console.log("ngOnInitStart");
        console.log("this.stepIdx " + this.stepIdx);
        console.log("this.objStep " + this.objStep);
        if (this.objStep.conditions.length > 0) {
            let valueCondition = this.objStep.conditions[0].value;
            let keyCondition = this.objStep.conditions[0].key;
            console.log("valueCondition: " + valueCondition);
            console.log("keyCondition: " + keyCondition);
            console.log(this._formService);
            // console.log(this._formService.arraySteps.find(keyCondition));
            let tmpStepIdx = this.stepIdx - 1; // stepIdx temporaire
            /* LOOK FOR VALUE SELECTED INTO FORM SERVICE (**arraySteps**)
                LA CONDITION A TESTER ET JE LA COMPARE AVEC LA VALEUR DE LA STEP COURANTE
             */
            //console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition));
            if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined') {
                this.display = true;
            }
        }
        else {
            this.display = true;
        }
        // console.log(this.listOfElements);
        // console.log(this.valueSelected);
        for (let datas of this.listOfElements) {
            // console.log(datas);
            // console.log(datas.name);
            if (datas.name == this.objStep.name) {
                this.currentList = datas.list;
            }
        }
    }
    onChooseVal($event) {
        // console.log($event);
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
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "objStep", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "listOfElements", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "stepIdx", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "valueSelected", void 0);
__decorate([
    // Value to pass to the formService containing the selection
    core_1.Input(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "footNote", void 0);
__decorate([
    //Optional insert a footnote in component
    core_1.Output(), 
    __metadata('design:type', Object)
], ListButtonsComponent.prototype, "change", void 0);
ListButtonsComponent = __decorate([
    core_1.Component({
        selector: 'list-buttons',
        template: `
     <div *ngIf="display">
         <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
         <div class="panel-body" >
          
            <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->
            
            <ul class="items">
                <li *ngFor="let valeurList of currentList">
                    <button *ngIf="valueSelected != valeurList" class="btn btn-success" type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" class="btn btn-info-custom" type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
         </div>
         <span class="label label-info">{{footNote}} </span>
     </div>
`
    }), 
    __metadata('design:paramtypes', [form_service_1.FormService])
], ListButtonsComponent);
exports.ListButtonsComponent = ListButtonsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFlBQUssRUFBRTs7NERBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7cURBQUE7QUFDUjtJQUFDLFlBQUssRUFBRTs7MkRBQUE7QUFDUjtJQUR3Qiw0REFBNEQ7SUFDbkYsWUFBSyxFQUFFOztzREFBQTtBQUNSO0lBRHdCLHlDQUF5QztJQUNoRSxhQUFNLEVBQUU7O29EQUFBO0FBakNiO0lBQUMsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxjQUFjO1FBQ3hCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXNCYjtLQUNBLENBQUM7O3dCQUFBO0FBRVcsNEJBQW9CLHVCQWlFaEMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL2xpc3RCdXR0b25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuaW1wb3J0IHtGb3JtU2VydmljZX0gZnJvbSBcIi4vZm9ybS5zZXJ2aWNlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGlzdC1idXR0b25zJyxcclxuICAgIHRlbXBsYXRlOiBgXHJcbiAgICAgPGRpdiAqbmdJZj1cImRpc3BsYXlcIj5cclxuICAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsLWhlYWRpbmcgcGFuZWwtaGVhZGluZy1jdXN0b21cIj57e29ialN0ZXAuY29uZmlndXJhdGlvbi5sYWJlbFBhbmVsfX0gPC9kaXY+XHJcbiAgICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1ib2R5XCIgPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiY29sLW1kLTNcIiAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBsaXN0T2ZFbGVtZW50c1wiPi0tPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxsaSAqbmdGb3I9XCJsZXQgdmFsZXVyTGlzdCBvZiBjdXJyZW50TGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJ2YWx1ZVNlbGVjdGVkICE9IHZhbGV1ckxpc3RcIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uQ2hvb3NlVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInt7dmFsZXVyTGlzdH19XCI+e3t2YWxldXJMaXN0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwidmFsdWVTZWxlY3RlZCA9PSB2YWxldXJMaXN0XCIgY2xhc3M9XCJidG4gYnRuLWluZm8tY3VzdG9tXCIgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib25DaG9vc2VWYWwoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3t2YWxldXJMaXN0fX1cIj57e3ZhbGV1ckxpc3R9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWwgbGFiZWwtaW5mb1wiPnt7Zm9vdE5vdGV9fSA8L3NwYW4+XHJcbiAgICAgPC9kaXY+XHJcbmBcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0QnV0dG9uc0NvbXBvbmVudCB7XHJcbiAgICBASW5wdXQoKSBvYmpTdGVwO1xyXG4gICAgQElucHV0KCkgbGlzdE9mRWxlbWVudHM7XHJcbiAgICBASW5wdXQoKSBzdGVwSWR4O1xyXG4gICAgQElucHV0KCkgdmFsdWVTZWxlY3RlZDsgLy8gVmFsdWUgdG8gcGFzcyB0byB0aGUgZm9ybVNlcnZpY2UgY29udGFpbmluZyB0aGUgc2VsZWN0aW9uXHJcbiAgICBASW5wdXQoKSBmb290Tm90ZSA9ICcnOyAvL09wdGlvbmFsIGluc2VydCBhIGZvb3Rub3RlIGluIGNvbXBvbmVudFxyXG4gICAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gRW1pdHRlciB0byBzZW5kIGJhY2sgZGF0YSB0byBwYXJlbnQgY29tcG9uZW50XHJcbiAgICBjdXJyZW50TGlzdDtcclxuICAgIGRpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIF9mb3JtU2VydmljZTogRm9ybVNlcnZpY2VcclxuICAgIClcclxuICAgIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXRTdGFydFwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuc3RlcElkeCBcIiArIHRoaXMuc3RlcElkeCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLm9ialN0ZXAgXCIgKyB0aGlzLm9ialN0ZXApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5vYmpTdGVwLmNvbmRpdGlvbnMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZUNvbmRpdGlvbiA9IHRoaXMub2JqU3RlcC5jb25kaXRpb25zWzBdLnZhbHVlO1xyXG4gICAgICAgICAgICBsZXQga2V5Q29uZGl0aW9uID0gdGhpcy5vYmpTdGVwLmNvbmRpdGlvbnNbMF0ua2V5O1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlQ29uZGl0aW9uOiBcIiArIHZhbHVlQ29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZXlDb25kaXRpb246IFwiICsga2V5Q29uZGl0aW9uKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5fZm9ybVNlcnZpY2UpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtU2VydmljZS5hcnJheVN0ZXBzLmZpbmQoa2V5Q29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG1wU3RlcElkeCA9IHRoaXMuc3RlcElkeCAtIDE7IC8vIHN0ZXBJZHggdGVtcG9yYWlyZVxyXG4gICAgICAgICAgICAvKiBMT09LIEZPUiBWQUxVRSBTRUxFQ1RFRCBJTlRPIEZPUk0gU0VSVklDRSAoKiphcnJheVN0ZXBzKiopXHJcbiAgICAgICAgICAgICAgICBMQSBDT05ESVRJT04gQSBURVNURVIgRVQgSkUgTEEgQ09NUEFSRSBBVkVDIExBIFZBTEVVUiBERSBMQSBTVEVQIENPVVJBTlRFXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuX2Zvcm1TZXJ2aWNlLmFycmF5U3RlcHMuZmluZCh4ID0+IHhba2V5Q29uZGl0aW9uXSA9PT0gdmFsdWVDb25kaXRpb24pKSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saXN0T2ZFbGVtZW50cyk7XHJcbiAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmFsdWVTZWxlY3RlZCk7XHJcbiAgICAgICAgZm9yIChsZXQgZGF0YXMgb2YgdGhpcy5saXN0T2ZFbGVtZW50cyl7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFzKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YXMubmFtZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGF0YXMubmFtZSA9PSB0aGlzLm9ialN0ZXAubmFtZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRMaXN0ID0gZGF0YXMubGlzdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNob29zZVZhbCgkZXZlbnQpe1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCRldmVudCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQoe1xyXG4gICAgICAgICAgICB2YWx1ZU5hbWUgOiB0aGlzLm9ialN0ZXAuY29uZmlndXJhdGlvbi5mb3JtX3ZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlU2VsZWN0ZWQgOiAkZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBzdGVwSWR4IDogdGhpcy5zdGVwSWR4XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9O1xyXG59XHJcbiJdfQ==
