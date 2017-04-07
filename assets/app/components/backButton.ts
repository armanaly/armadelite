import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'previous-page',
    template: `
        <nav class="form-navArrow">
            <button ><i class="glyphicon glyphicon-triangle-left" (click)="onClick()"> </i></button>
        </nav>
`
})

// USE TO GO BACK TO PREVIOUS STEP IN DECISION WORKFLOW
export class BackButtonComponent {
    @Input() idxStepObj;
    @Input() stepId;
    @Output() change = new EventEmitter();

    onClick(){
        console.log(this.stepId);
        this.idxStepObj --;
        // while ( typeof this.currentStep[idxStepObj] == 'undefined' ) {
        //     this.stepId--;
        // }
        this.change.emit({ newIdxStepObj: this.idxStepObj});
    };

}