import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "../vehicule/form.service";
import {SaveService} from "./saveService";

@Component({
    selector: 'save-button',
    template: `<div align="center" > 
                    <button type="button" (click)="saveStep()"  >Save</button>  
               </div>`})

export class SaveButtonComponent {
    @Input() stepId;
    constructor(private _saveService: SaveService){}

    saveStep(){
        //console.log(this._formService);
        console.log(this.stepId);
        this._saveService.saveData(this.stepId)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            )
    }

}