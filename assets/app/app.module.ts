import {NgModule, APP_INITIALIZER}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent}  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import {ROUTING} from "./app.routing"


import {MainComponent} from "./vehicule/main.component";
import {StateComponent} from "./state/state.component";
import {ProfileComponent} from "./profile/profile.component";
import {PhotosComponent} from "./photos/photos.component";
import {FormService} from "./vehicule/form.service";
import {ProfileService} from "./profile/profile.service";
import {PhotosService} from "./photos/photos.service";
import {BackButtonComponent} from "./vehicule/backButton";
import {ListButtonsComponent} from "./vehicule/listButtons";
import {MultiSelectionComponent} from "./vehicule/multipleSelection";
import {StepService} from "./Engine/step.service";
import {CollectionService} from "./Engine/collection.service";
import {PanelBtnComponent} from "./components/panelBtnImg";
import {FieldPanelComponent} from "./components/fieldPanel";
import {SaveButtonComponent} from "./components/saveButton";
import {SaveService} from "./components/saveService";
import {GridPanelComponent} from "./components/gridPanel.component";
import {GridPanelService} from "./components/gridPanel.service";
import {MenuComponent} from "./menu/menu.component";
import {MailService} from "./Engine/mail.service";

function getStepsFirst(_stepService: StepService) {
    return () => _stepService.getSteps()
    // .subscribe(
    //   stepReturn => {

    //      t     his. st   eps = stepReturn;


    //
    // console.log("stepReturn");
    // console.log(stepReturn);
    // console.log(this._stepService.steps);
    // // this.tmp = stepReturn.json();
    // // thi     s._stepService.step = this.tmp;
    // //
    // // //  for ( let i = 0; i < stepReturn.json().length; i++) {
    // // //     console . log(step   Return.json()[  i]);
    // // //
    // // //     console.log(this._st  epService.step);
    // // // }
    // //
    // console.log(this._stepService.step[0]);
    // //
    // // this._stepService.steps = this.tmp;
    // // console.log(this._stepService.steps);
    // // console.log(this.tmp);
    // /* IF DATA ARE STORED IN A COLLECTION IN CONFIG FILE */
    // if (typeof this._stepService.steps[0].configuration.collection != 'undefined') {
    // }
    //
    // /*  IF A LIST EXISTS IN CONFIG FILE */
    // if (typeof this._stepService.steps[0].configuration.list != 'undefined') {
    //     this.lists.push(this._stepService.steps[0].configuration.list);
    //     this.listsData.push({
    //         "name": this._stepService.steps[0].name,
    //         "list": this._stepService.steps[0].configuration.list
    //     });
    // }
    // console.log(this.listsData);
    // this._stepService.datas = this.listsData.slice();
    // INITIATE FORM SERVICE TO this._formService.init();
//})}
}
@NgModule({
    declarations: [
        AppComponent, MainComponent,
        StateComponent, PhotosComponent, ProfileComponent,
        BackButtonComponent, ListButtonsComponent, MultiSelectionComponent,
        PanelBtnComponent, FieldPanelComponent, SaveButtonComponent, GridPanelComponent, MenuComponent
    ],
    imports: [
        BrowserModule, FormsModule, ROUTING,
        HttpModule, ReactiveFormsModule

    ],
    bootstrap: [AppComponent],
    providers: [ FormService, ProfileService, PhotosService,
                 StepService,
        { provide: APP_INITIALIZER,
                    useFactory: getStepsFirst,
            deps: [StepService],
        multi: true},

                CollectionService, SaveService,
                MailService, GridPanelService]
})
export class AppModule {
    

}

