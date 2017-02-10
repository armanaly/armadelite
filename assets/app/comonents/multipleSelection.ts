import {Component, Input, Output, EventEmitter} from '@angular/core'
// CAN SELECT MORE THAN ONE VALUE
@Component({
    selector: 'multi-selection',
    template: `
        <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
        <div class="panel-body" >
      
        <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->
        <ul class="items">
            <li *ngFor="let valeurList of listOfElements">
            <button *ngIf="isSelected(valeurList) == false" type="button" 
                    (click)="onChooseVal($event)"  
                    value="{{valeurList}}" 
                    class="btn btn-primary btn-primary-custom">
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
        <span class="label label-info">{{footNote}} </span>

`
})

export class MultiSelectionComponent {

    @Input() objStep;
    @Input() listOfElements;
    @Input() stepIdx;
    @Input() valueSelected; // Value to pass to the formService containing the selection
    @Input() stepId;        // Send the current step in order to increment it
    @Input() footNote = ''; //Optional insert a footnote in component
    @Output() change = new EventEmitter(); // Emitter to send back data to parent component

    tmpArray = [];

    onChooseVal($event) {
        var addOption = true;

        for (let i = 0; i < this.tmpArray.length; i++) {
            if (this.tmpArray[i] == event.target.value) {
                this.tmpArray.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.tmpArray.push(event.target.value);
        }

        this.change.emit({
            valueSelected: $event.target.value,
            stepId: this.stepId
        })

    };

    isSelected(option) {
        for (let i = 0; i < this.tmpArray.length; i++) {
            if (this.tmpArray[i] == option) {
                return true;
            }
        }
        return false;
    };


}
