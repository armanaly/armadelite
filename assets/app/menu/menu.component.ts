import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
import {Router} from '@angular/router';
import {GridPanelService} from "../components/gridPanel.service";
@Component({
    selector: 'grid-panel',
    template: `
    <div class="row" align="center">
        
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>

    </div>
` })

export class MenuComponent{
    constructor(
         private _stepService: StepService, private router: Router, private _gridService: GridPanelService
        )
    {}
    ngOnInit(){
console.log(window);

             if (this._stepService.steps[0].master_type == 'form'){
                 this.router.navigate(['/step']);
             }else{
                 this._gridService.getDatas()
                     .subscribe(data => {
                             // this.router.navigate(['/grid']);
                         },
                         error => console.log(error)
                     )
             }
    }
}