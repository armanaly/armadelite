import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";

@Component({
    selector: 'panel-btn-img',
    template: `
     <div *ngIf="display">
         <div *ngIf="_stepService.language == 'en'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel}}</p> </div>
         <div *ngIf="_stepService.language == 'es'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_es}}</p> </div>
         <div *ngIf="_stepService.language == 'fr'" class="{{_stepService.template.panel_heading}}"><p class="text-uppercase">{{objStep.configuration.labelPanel_fr}}</p> </div>

         <div class="panel-body" >       
            <div class="jumbotron" *ngIf="objStep.configuration.header_note && objStep.configuration.header_note != ''">
                <p [innerHTML] = "objStep.configuration.header_note"></p>
            </div>
         
             <ul class="items" *ngIf="objStep.type == 'image_selection'">
                    <li *ngFor="let valeurList of currentList">
                            <a (click)="onChooseVal(valeurList.name)"> <img src="{{valeurList.url}} " />  </a>       
                    </li>
            </ul>
         </div>
         <div *ngIf="_stepService.language == 'en' && objStep.configuration.foot_note && objStep.configuration.foot_note != ''" [innerHTML] = "objStep.configuration.foot_note"></div> 
         <div *ngIf="_stepService.language == 'es' && objStep.configuration.foot_note_es && objStep.configuration.foot_note_es != ''" [innerHTML] = "objStep.configuration.foot_note_es"></div>
         <div *ngIf="_stepService.language == 'fr' && objStep.configuration.foot_note_fr && objStep.configuration.foot_note_fr != ''" [innerHTML] = "objStep.configuration.foot_note_fr"></div>
     </div>
`
})

/*
  <button *ngIf="valueSelected == valeurList" class="btn btn-info-custom" type="button" 
                    (click)="onChooseVal($event)"
                    value="{{valeurList}}">{{valeurList}}
                </button>

*/


export class PanelBtnComponent {
    @Input() objStep;
    @Input() listOfElements;
    @Input() valueSelected; // Value to pass to the formService containing the selection
    @Input() stepIdx;        // Send the current step in order to increment it
    @Input() footNote = ''; //Optional insert a footnote in component
    @Output() change = new EventEmitter(); // Emitter to send back data to parent component
    currentList= [];

    display = false;

    constructor(
       private _stepService: StepService
    )
    {}

    ngOnInit() {
        if (typeof this.listOfElements != 'undefined') {
            console.log(this.listOfElements)

            // FROM COLLECTION
            for (let datas of this.listOfElements) {
                this.currentList.push({ "name": datas.name, "url": datas.url});
            }
            this.display = true;
        }
    }

    onChooseVal(val){
        this.change.emit({
            valueName : this.objStep.configuration.form_value.name,
            valueSelected : val,
            stepIdx : this.stepIdx
        })
    };
}
