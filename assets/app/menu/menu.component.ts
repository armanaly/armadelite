import {Component, Input, Output, EventEmitter} from '@angular/core'
import {StepService} from "../Engine/step.service";
import {Router} from '@angular/router';
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
         public _stepService: StepService, private router: Router
        )
    {}

  //  router = new Router;

    ngOnInit(){

         ///setTimeout(() => {
             if (this._stepService.steps[0].master_type == 'form'){
                 this.router.navigate(['/step']);
             }
        // }, 10000)

    }
}