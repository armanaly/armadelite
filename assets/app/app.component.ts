import {Component} from '@angular/core';
import {FormService} from "./Engine/form.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: ` 
               
           <router-outlet></router-outlet>
     `})

export class AppComponent {

    constructor(private _formService: FormService){}
    ngOnInit() {
        this._formService.init();
    }

 }