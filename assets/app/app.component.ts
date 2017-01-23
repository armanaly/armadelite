import {Component, Output, Inject} from '@angular/core';
import {StepService} from "./Engine/step.service";
import {CollectionService} from "./Engine/collection.service";
import {FormService} from "./vehicule/form.service";
//i                  mport {Mar     queService} from "./marque/marque.service";
//i                                      mport      v {Mar     queService} from "./marque/marque.service";
//i                   ;,                                                 mport {Marque} from "./marque/marque";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div class="container">          
           <router-outlet
             ></router-outlet></div>
     `})

export class AppComponent {

    constructor(
        public _formService: FormService,
        public _stepService: StepService
    ){}
    lists = [];
    listsData = [];
    tmp = [];
    ngOnInit() {
        this._stepService.getSteps()
            .subscribe(
                stepReturn => {

                    //      t     his.st   eps = stepReturn;



                    console.log("stepReturn");
                    console.log(stepReturn);
                    console.log(this._stepService.steps);
                    // this.tmp = stepReturn.json();
                    // this._stepService.step = this.tmp;
                    //
                    // // for ( let i = 0; i < stepReturn.json().length; i++) {
                    // //     console.log(step   Return.json()[  i]);
                    // //
                    // //     console.log(this._stepService.step);
                    // // }
                    //
                    console.log(this._stepService.step[0]);
                    //
                    // this._stepService.steps = this.tmp;
                    // console.log(this._stepService.steps);
                    // console.log(this.tmp);
                    /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
                    if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
                    }

                    /*  IF A LIST EXISTS IN CONFIG FILE */
                    if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
                        this.lists.push(this._stepService.steps[0].configuration.list);
                        this.listsData.push({
                            "name": this._stepService.steps[0].name,
                            "list": this._stepService.steps[0].configuration.list
                        });
                    }
                    console.log(this.listsData);
                    this._stepService.datas = this.listsData.slice();
                    // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
                    this._formService.init();

//console.  log(this._formService);
//Big list contains all list of buttons
//var keyName = this._stepService.s        ep[0].configuration.form_value.name;
//this._formService.arraySteps[0][keyName] =  this.route.snapshot.params.name;
//this.labelPanel = this._stepService.step[this.indexStepObj].configuration.labelPanel;
                },
                error => console.log(error)
            );
    }
 }