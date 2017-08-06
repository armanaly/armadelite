import {Component, Output, Inject} from '@angular/core';
import {FormService} from "./components/form.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: ` 
        <div class="container">          
           <router-outlet></router-outlet>
        </div>          
     `})

export class AppComponent {

    constructor(
        private _formService: FormService/*,
        private _stepService: StepService*/
    ){}
    lists = [];
    listsData = [];
    tmp = [];

    ngOnInit() {
        this._formService.init();
    }

 }