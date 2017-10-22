import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "./form.service";

@Component({
    selector: 'list-buttons',
    template: `
     <div *ngIf="display">
         <div class="panel-heading panel-heading-custom"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
         <div class="panel-body" >
            <div class="jumbotron" *ngIf="objStep.configuration.header_note && objStep.configuration.header_note != ''">
                <p [innerHTML] = "objStep.configuration.header_note"></p>
            </div>
            <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->

            <ul class="items" >
                <li *ngFor="let valeurList of currentList">
                     <!--data-toggle="tooltip" title=" "-->
                    <button *ngIf="valueSelected != valeurList" 
                        class="brown_button"
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                    <button *ngIf="valueSelected == valeurList" 
                        data-toggle="tooltip" title=" text"
                        class="brown_button" 
                        type="button" 
                        (click)="onChooseVal($event)"
                        value="{{valeurList}}">{{valeurList}}
                    </button>
                </li>
            </ul>
         </div>
         <div class="panel-heading panel-heading-custom" *ngIf="objStep.configuration.foot_note && objStep.configuration.foot_note != ''"> <p [innerHTML] = "objStep.configuration.foot_note"></p> </div>
     </div>
`
})

export class ListButtonsComponent {
    @Input() objStep;
    @Input() listOfElements;
    @Input() stepIdx;
    @Input() valueSelected; // Value to pass to the formService containing the selection

    @Output() change = new EventEmitter(); // Emitter to send back data to parent component
    currentList;
    display = false;

    constructor(
        private _formService: FormService
    )
    {}

    ngOnInit() {

        console.log("ngOnInitStart");
        console.log("this.stepIdx " + this.stepIdx);
        console.log(this.objStep.conditions.length);
        console.log(this.objStep);
        if (this.objStep.conditions.length > 0){
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

            if (typeof this._formService.arraySteps.find(x => x[keyCondition] === valueCondition) != 'undefined'){
                // SI IL Y A UNE 2eme CONDITION
                if (typeof this.objStep.conditions[1] != 'undefined'){
                    let valueCondition2 = this.objStep.conditions[1].value;
                    let keyCondition2 = this.objStep.conditions[1].key;

                    if (typeof this._formService.arraySteps.find(x => x[keyCondition2] === valueCondition2) != 'undefined'){
                        this.display = true;
                    }
                }
                else{
                    this.display = true;
                }

            }

        }
        else{
            this.display = true;
        }
console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
        console.log(this.display)
         // console.log(this.listOfElements);
         // console.log(this.valueSelected);
        for (let datas of this.listOfElements){
            // console.log(datas);
            // console.log(datas.name);

            if (datas.name == this.objStep.name){
                this.currentList = datas.list;
                console.log(this.currentList);
            }
        }

    }
    onChooseVal($event){
        // console.log($event);

        this.change.emit({
            valueName : this.objStep.configuration.form_value.name,
            valueSelected : $event.target.value,
            stepIdx : this.stepIdx
        })

    };
}
