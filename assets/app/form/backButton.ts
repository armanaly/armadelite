import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "../Engine/form.service";
import {StepService} from "../Engine/step.service"

@Component({
    selector: 'previous-page',
    template: `
        <div class="form-navArrow">
            <button (click)="onClick()" class="brown_button" ><i class="glyphicon glyphicon-triangle-left" >  </i></button>
        </div>
`
})

// USE TO GO BACK TO PREVIOUS STEP IN DECISION WORKFLOW
export class BackButtonComponent {
    @Input() idxStepObj;
    @Input() stepId;
    @Output() change = new EventEmitter();
    constructor(private _stepService: StepService, private _formService: FormService){}
    onClick(){
        // console.log(this.stepId);
        let stepIndex = this.idxStepObj;
        let keyName = this._stepService.steps[this.idxStepObj].name;
        // console.log(this._formService.arraySteps);
        // console.log(keyName);
        // console.log(this.idxStepObj);
        //this._formService.arraySteps[this.idxStepObj][keyName] = '';
        this.idxStepObj --;
        // console.log(this._stepService.steps[this.idxStepObj].step_id);
        // CHECK IF THE PREVIOUS STEP HAS THE SAME STEP_ID
        while (this._stepService.steps[this.idxStepObj].step_id == this.stepId){
            this.idxStepObj --;
            if (this._stepService.steps[this.idxStepObj].step_id != this.stepId){
                break;
            }
            // console.log(this._stepService.steps[this.idxStepObj]);

        }
        // SI IL Y A DES CONDITIONS DEFINIES A L'ETAPE PRECEDENTE ALORS ON VERIFIE QUELLE ETAPE CORRESPOND A LA CONDITION SINON ON RECULE
        // DANS LE TABLEAU DES ETAPES
        // console.log(this._stepService.steps[this.idxStepObj]);

        if (this._stepService.steps[this.idxStepObj].conditions.length > 0)
        {
            let conditionFalse = true;
            while (conditionFalse){
                let keyCondition = this._stepService.steps[this.idxStepObj].conditions[0].key;
                let valueCondition = this._stepService.steps[this.idxStepObj].conditions[0].value;
                // console.log("nb of condition:" + this._stepService.steps[this.idxStepObj].conditions.length);

                if (this._stepService.steps[this.idxStepObj].conditions.length == 2) {
                    let keyCondition2 = this._stepService.steps[this.idxStepObj].conditions[1].key;
                    let valueCondition2 = this._stepService.steps[this.idxStepObj].conditions[1].value;

                    // console.log("valueCondition: " + valueCondition);
                    // console.log("keyCondition: " + keyCondition);
                    //
                    // console.log("valueCondition2: " + valueCondition2);
                    // console.log("keyCondition2: " + keyCondition2);
                    //
                    // console.log(this._formService.arraySteps)
                    //
                    // console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition));
                    // console.log(this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2));
                    //
                    // console.log((this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) !== 'undefined');
                    // console.log((this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2)) !== 'undefined');
                    //
                    // console.log(typeof (this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2)) !== 'undefined');

                    let checkCond1 = typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) !== 'undefined';
                    let checkCond2 = typeof (this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2)) !== 'undefined';


                    if (checkCond1 && checkCond2)
                    {
                        // console.log("2 conditions remplies")
                        conditionFalse = false;
                        break;
                    }
                    else{
                        // console.log("2 conditions pas remplie")
                        this.idxStepObj--;
                    }
                }
                else {
                    // console.log("valueCondition: " + valueCondition);
                    // console.log("keyCondition: " + keyCondition);

                    // console.log(this._formService.arraySteps.find(x => x[keyCondition] === valueCondition))

                    if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) === 'undefined') {
                        this.idxStepObj--;
                    }
                    else {
                        conditionFalse = false;
                        break;
                    }
                }
            }
        }
// console.log(this.idxStepObj);

        this.change.emit({ newIdxStepObj: this.idxStepObj});
    }}