import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
// CAN SELECT MORE THAN ONE VALUE
@Component({
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
})

export class MultiSelectionComponent {

    @Input() objStep;
    @Input() valueSelected; // Value to pass to the formService containing the selection
    @Input() stepIdx;
    @Input() listOfElements;
    @Input() valuesSelected;
    @Output() change = new EventEmitter(); // Emitter to send back data to parent component

    currentList_fr;
    currentList_nl;
    currentList_es;
    currentList_en;
    constructor( private _stepService: StepService ) {}
    ngOnInit() {
        console.log(this.listOfElements);
        for (let datas of this.listOfElements){
            if (datas.name == this.objStep.name){
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
        console.log($event.target)
        console.log(($event.target.value))
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
    };

    submit() {
        this.change.emit({
            valueName : this.objStep.configuration.form_value.name,
            valueSelected: this.valuesSelected,
            stepIdx : this.stepIdx
        })
    }

    isSelected(option) {
        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == option) {
                return true;
            }
        }
        return false;
    };


}
