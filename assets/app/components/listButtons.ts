import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "./form.service";

@Component({
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
         <span class="label label-info" *ngIf="footNote != ''">{{footNote}} </span>
     </div>
`
})

export class ListButtonsComponent {
    @Input() objStep;
    @Input() listOfElements;
    @Input() stepIdx;
    @Input() valueSelected; // Value to pass to the formService containing the selection
    @Input() footNote = ''; //Optional insert a footnote in component
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

            if (typeof (this._formService.arraySteps.find(x => x[keyCondition] === valueCondition)) != 'undefined'){
                this.display = true;
            }
        }
        else{
            this.display = true;
        }

         // console.log(this.listOfElements);
         // console.log(this.valueSelected);
        for (let datas of this.listOfElements){
            // console.log(datas);
            // console.log(datas.name);

            if (datas.name == this.objStep.name){
                this.currentList = datas.list;
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
