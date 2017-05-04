import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'panel-btn-img',
    template: `
     <div class="panel-heading panel-heading-custom" align="center">{{objStep.labelPanel}} </div>
     <div class="panel-body" >       
         <ul class="items" *ngIf="objStep.type == 'image_selection'">
                <li *ngFor="let valeurList of currentList">
                        <a (click)="onChooseVal(valeurList.name)"> <img src="{{valeurList.url}} " />  </a>       
                </li>
        </ul>
     </div>
     <span class="label label-info">{{footNote}} </span>
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
    currentList;

    display = false;

    ngOnInit() {
        console.log(this.listOfElements);
        for (let datas of this.listOfElements){
            // console.log(datas);
            // console.log(datas.name);
            // console.log(this.objStep.name);
            if (datas.name == this.objStep.name){
                this.currentList = datas.list;
            }
        }
        console.log(this.currentList);
        // console.log(this.objStep);

    }
    onChooseVal(val){
        // console.log('selection');
        // console.log(val);
        this.change.emit({
            valueName : this.objStep.configuration.form_value.name,
            valueSelected : val,
            stepIdx : this.stepIdx
        })
    };
}
