import {Component} from '@angular/core';
import {FormService} from "./Engine/form.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: ` 
        <div class="container">          
           <router-outlet></router-outlet>
        </div>          
     `})

export class AppComponent {

    constructor(private _formService: FormService){}
    ngOnInit() {
        this._formService.init();
    }

 }