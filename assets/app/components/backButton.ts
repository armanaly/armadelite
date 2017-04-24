import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "./form.service";
import {StepService} from "../Engine/step.service"

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
    constructor(private _stepService: StepService, private _formService: FormService){}
    onClick(){
        console.log(this.stepId);
        let stepIndex = this.idxStepObj;

        this.idxStepObj --;
        console.log(this._stepService.steps[this.idxStepObj].step_id);
        // CHECK IF THE PREVIOUS STEP HAS THE SAME STEP_ID
        while (this._stepService.steps[this.idxStepObj].step_id == this.stepId){
            this.idxStepObj --;
            console.log(this._stepService.steps[this.idxStepObj]);
            break;
        }
        // SI IL Y A DES CONDITIONS DEFINIES A L'ETAPE PRECEDENTE ALORS ON VERIFIE QUELLE ETAPE CORRESPOND A LA CONDITION SINON ON RECULE
        // DANS LE TABLEAU DES ETAPES
        console.log(this._stepService.steps[this.idxStepObj]);
        if (this._stepService.steps[this.idxStepObj].conditions.length > 0)
        {
            console.log("nb of condition:" + this._stepService.steps[this.idxStepObj].conditions.length);
            let keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
            let valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;

            console.log("valueCondition: " + valueCondition);
            console.log("keyCondition: " + keyCondition);
            console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition))

            while (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) === 'undefined') {
                this.idxStepObj --;
                keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
                valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
                // break;
            }
console.log(this.idxStepObj);
            // if (this._stepService.steps[this.idxStepObj].conditions.length > 0)
        // {
        //     let keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
        //     let valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
        //     console.log()
        //     while (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined'){
        //     //while (this._formService.arraySteps[stepIndex][keyCondition] != valueCondition){
        //         console.log("condition pas remplie, je recule de 1 indice dans le tableau. Indice: " + this.idxStepObj);
        //         this.idxStepObj--;
        //         if (this._stepService.steps[this.idxStepObj].conditions.length > 0) {
        //             let keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
        //             let valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
        //             console.log(valueCondition);
        //             console.log(this._formService.arraySteps[0][keyCondition]);
        //         }
        //         break;
        //     }
        //     console.log('condition remplie, je reste sur l indice: ' + this.idxStepObj)
        // }
        // while ( typeof this.currentStep[idxStepObj] == 'undefined' ) {
        //     this.stepId--;
        // }

        }
    console.log(this.idxStepObj);
    this.change.emit({ newIdxStepObj: this.idxStepObj});
}}