import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'previous-page',
    template: `
        <nav class="form-navArrow">
            <i class="glyphicon glyphicon-chevron-left" (click)="onClick()">PRECEDENT</i>
        </nav>
`
})

// USE TO GO BACK TO PREVIOUS STEP IN DECISION WORKFLOW
export class BackButtonComponent {
    @Input() currentStep;
    @Input() stepId;
    @Output() change = new EventEmitter();

    onClick(){
        this.stepId --;
        while ( typeof this.currentStep[this.stepId] == 'undefined' ) {
            this.stepId--;
        }
        this.change.emit({ newStepId: this.stepId});
    };

}