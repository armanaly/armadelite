import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent}  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';

import {ROUTING} from "./app.routing"


import {MainComponent} from "./components/main.component";
import {FormService} from "./components/form.service";
import {BackButtonComponent} from "./components/backButton";
import {ListButtonsComponent} from "./components/listButtons";
import {MultiSelectionComponent} from "./components/multipleSelection";
import {StepService} from "./Engine/step.service";
import {CollectionService} from "./Engine/collection.service";
import {PanelBtnComponent} from "./components/panelBtnImg";
import {FieldPanelComponent} from "./components/fieldPanel.component";
import {SaveButtonComponent} from "./components/saveButton";
import {SaveService} from "./components/saveService";
import {GridPanelComponent} from "./components/gridPanel.component";
import {GridPanelService} from "./components/gridPanel.service";
import {MenuComponent} from "./menu/menu.component";
import {MailService} from "./Engine/mail.service";
import {assetUrl} from "@angular/compiler/src/identifiers";
import { Ng2CloudinaryModule } from 'ng2-cloudinary';
import { FileUploadModule } from 'ng2-file-upload';
import {FileUploadComponent} from "./components/fileUpload";
import {FileUploadService} from "./components/fileUpload.service";
import {GridDetailsComponent} from "./components/gridDetails.component";
import {GridDetailsService} from "./components/gridDetails.service";
import {AuthService} from "./auth/auth.service";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MyAutoFocusDirective} from "./directives/autofocus";



function getStepsFirst(_stepService: StepService) {
    let appName = window.location.search.replace(new RegExp("^(?:.*[&\\?]" + 'app'.replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");
    return () => _stepService.getSteps(appName)

}
@NgModule({
    declarations: [
        AppComponent, MainComponent,
        // StateComponent, PhotosComponent, ProfileComponent,
        BackButtonComponent, ListButtonsComponent, MultiSelectionComponent,
        PanelBtnComponent, FieldPanelComponent, SaveButtonComponent,
        GridPanelComponent, MenuComponent, FileUploadComponent,
        GridDetailsComponent, SignupComponent, SigninComponent,
        AuthenticationComponent, MyAutoFocusDirective
    ],
    imports: [
        BrowserModule, FormsModule, ROUTING,
        HttpModule, ReactiveFormsModule
    ],


    bootstrap: [AppComponent],

    providers: [ FormService, StepService,
                {   provide: APP_INITIALIZER,
                    useFactory: getStepsFirst,
                    deps: [StepService],
                    multi: true
                },
                // provideCloudinary(require('cloudinary-core'), { cloud_name: 'havjcqppv' } as CloudinaryConfiguration),
                CollectionService, SaveService, FileUploadService,
                MailService, GridPanelService, GridDetailsService,
                AuthService]
})
export class AppModule {
    

}

