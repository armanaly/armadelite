import {Component, Input, Output, EventEmitter} from '@angular/core'
import {FormService} from "../vehicule/form.service";
import {SaveButtonService} from "./saveButtonService";

@Component({
    selector: 'save-button',
    template: `<div align="center" > 
                    <button type="button" (click)="saveStep()"  >Save</button>  
               </div>`})

export class SaveButtonComponent {
    @Input() stepId;
    constructor(private _saveButtonService: SaveButtonService){}

    saveStep(){
        //console.log(this._formService);
        console.log(this.stepId);
        this._saveButtonService.saveDatas(this.stepId)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            )
    }

}