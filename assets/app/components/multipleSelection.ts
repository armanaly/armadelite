import {Component, Input, Output, EventEmitter} from '@angular/core'
// CAN SELECT MORE THAN ONE VALUE
@Component({
    selector: 'multi-selection',
    template: `
        <div class="panel-heading panel-heading-custom">{{objStep.configuration.labelPanel}} </div>
        <div class="panel-body" >
      
        <!--<div class="col-md-3" *ngFor="let valeurList of listOfElements">-->
        <ul class="items">
            <li *ngFor="let valeurList of currentList">
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
        <div><button btn-default btn-lg (click)="submit()">SUIVANT</button></div>
        <span class="label label-info">{{footNote}} </span>
        </div>
        

`
})

export class MultiSelectionComponent {

    @Input() objStep;
    @Input() valueSelected; // Value to pass to the formService containing the selection
    @Input() stepIdx;
    @Input() listOfElements;
    @Input() valuesSelected;
    // @Input() stepId;        // Send the current step in order to increment it
    // @Input() footNote = ''; //Optional insert a footnote in component
    @Output() change = new EventEmitter(); // Emitter to send back data to parent component

    currentList;

    ngOnInit() {
        console.log('ok');
        console.log(this.listOfElements);
        for (let datas of this.listOfElements){
            // console.log(datas);
            // console.log(datas.name);

            if (datas.name == this.objStep.name){
                this.currentList = datas.list;
            }
        }
    }

    onChooseVal($event) {
        var addOption = true;

        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == event.target.value) {
                this.valuesSelected.splice(i, 1);
                addOption = false;
                break;
            }
        }
        if (addOption) {
            this.valuesSelected.push(event.target.value);
        }



    };

    submit() {
        this.change.emit({
            valueName : this.objStep.configuration.form_value.name,
            valueSelected: this.valuesSelected,
            stepIdx : this.stepIdx
        })
    }

    isSelected(option) {
        for (let i = 0; i < this.valuesSelected.length; i++) {
            if (this.valuesSelected[i] == option) {
                return true;
            }
        }
        return false;
    };


}
