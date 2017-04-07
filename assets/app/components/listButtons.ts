import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'list-buttons',
    template: `
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
     <span class="label label-info">{{footNote}} </span>
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

    ngOnInit() {
         console.log(this.stepIdx);
        console.log(this.objStep);
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
