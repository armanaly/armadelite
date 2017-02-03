import {NgModule}      from '@angular/core';
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
                 StepService, CollectionService, SaveService,
                MailService, GridPanelService]
})
export class AppModule {
    

}

