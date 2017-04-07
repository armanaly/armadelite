import {Component, Output, Inject} from '@angular/core';
import {StepService} from "./Engine/step.service";
import {ActivatedRoute} from '@angular/router';
import {FormService} from "./components/form.service";
//i                   mport {Mar               queService} from "./marqu     e/marque.service";
//i                                                           mpo rt      v {Mar     queService} from "./marque/marque.service";
//i                                             ;,                                                  mport {Marque} from "./marque/marque";

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
        private _formService: FormService/*,
        private _stepService: StepService*/
    ){}
    lists = [];
    listsData = [];
    tmp = [];

    ngOnInit() {

        this._formService.init();
//         console   .log('ap                          pCompo                nent');
//         th      is.                            np           m                        For Adults_s                         te                              p      Serv  ice.getSteps()
//             .subscri                                          be(
//                 stepReturn              =     > {
//

//                     //      t     his.                st   eps = stepReturn;
//
//
//
//                     console.log("stepReturn");
//                     conso      le.  log(st epReturn);
//                     console       .lo g(this._stepService.steps);
//                     // this.tmp = step Return.json();
//                     // thi     s._stepService.step = this.tmp;
//                     //
//                     // //                for ( let i = 0; i < stepReturn.json(). length; i++) {
//                     // //     console . log(step   Return.json()[  i]);
//                     // //
//                     // //     c    onsole.log(this._st  epService.step);
//                     // // }
//                     //
//                     console.log(this._stepService.step[0]);
//                     //
//                     // this._stepService.steps = this.tmp;
//                     // console.     log(this._stepService.steps);
//                     // console.log(this.tmp);
//                     /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
//                     if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
//                     }
//
//                     /*  IF A LIST EXISTS IN CONFIG FILE */
//                     if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
//                         this.lists.push(this._stepService.steps[0].configuration.list);
//                         this.listsData.push({
//                             "name": this._stepService.steps[0].name,
//                             "list": this._stepService.steps[0].configuration.list
//                         });
//                     }
//                     console.log(this.listsData);
//                     this._stepService.datas = this.listsData.slice();
//                     // INITIATE FORM SERVICE TO KEEP ALL SELECTIONS MADE BY USER IN STEPS
//                     this._formService.init();
//
// //console.  log(this._formS      ervice);
// //Big list contains all list of buttons
// //var keyName = this._stepService.s        ep[0].configuration.form_value.name;
// //this._formService.arraySteps[0][keyName] =  this.route.snapshot.params.name;
// //this.labelPanel = this._stepService.step[this.indexStepObj].configuration.labelPanel;
//                 } ,
//                 error => console.log(error)
//             );
//     }
 }}