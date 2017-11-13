import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
// CAN SELECT MORE THAN ONE VALUE
@Component({
    selector: 'multi-selection',
    template: `
        <div>
            <div class="panel-heading panel-heading-custom"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
            <div class="panel-body" >
                    <ul class="items">
                        <li *ngFor="let valeurList of currentList">
                            <button *ngIf="isSelected(valeurList) == false" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="{{ _stepService.template.list_btn}}">
                            {{valeurList}}
                            </button>
                            <button *ngIf="isSelected(valeurList) == true" type="button" 
                                    (click)="onChooseVal($event)"  
                                    value="{{valeurList}}" 
                                    class="btn btn-info-custom">
                            {{valeurList}}
                            </button>
                        </li>
                    </ul>
            </div>
            <div align="center">
                <button *ngIf="_stepService.language == 'en'" btn-default btn-lg (click)="submit()">NEXT</button>
                <button *ngIf="_stepService.language == 'es'" btn-default btn-lg (click)="submit()">PROXIMO</button>
                <button *ngIf="_stepService.language == 'fr'" btn-default btn-lg (click)="submit()">SUIVANT</button>
            </div>
            <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
            <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
            <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
        <div></div>
        </div>
`
})

export class MultiSelectionComponent {

    @Input() objStep;
    @Input() valueSelected; // Value to pass to the formService containing the selection
    @Input() stepIdx;
    @Input() listOfElements;
    @Input() valuesSelected;
    @Output() change = new EventEmitter(); // Emitter to send back data to parent component

    currentList;
    constructor( private _stepService: StepService ) {}
    ngOnInit() {
        // console.log(this.listOfElements);
        for (let datas of this.listOfElements){
            if (datas.name == this.objStep.name){
                this.currentList = datas.list;
            }
        }
    }

    onChooseVal($event) {
        var addOption = true;

        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == event.target.value) {
                this.valuesSelected.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.valuesSelected.push(event.target.value);
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
