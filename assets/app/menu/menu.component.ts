import {Component, Input, Output, EventEmitter} from '@angular/core'

@Component({
    selector: 'grid-panel',
    template: `
    <div class="row" align="center">
        
            <div  class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/grid']"> Data grid </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/step']"> Nouveau flow</a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Contacts </a></button></div>
            <div class="col-md-3"><button type="button" class="btn btn-success"><a [routerLink]="['/']"> Documents </a></button></div>
    </div>
` })

export class MenuComponent{

}