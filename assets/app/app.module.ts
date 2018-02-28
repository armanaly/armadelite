import {NgModule, APP_INITIALIZER} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {Observable} from 'rxjs/Observable';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MdDatepickerModule} from '@angular/material';
import {ROUTING} from "./app.routing"


import {MainComponent} from "./main.component";
import {FormService} from "./Engine/form.service";
import {BackButtonComponent} from "./form/backButton";
import {ListButtonsComponent} from "./form/listButtons";
import {MultiSelectionComponent} from "./form/multipleSelection";
import {StepService} from "./Engine/step.service";
import {CollectionService} from "./Engine/collection.service";
import {PanelBtnComponent} from "./form/panelBtnImg";
import {FieldPanelComponent} from "./form/fieldPanel.component";
import {SaveButtonComponent} from "./form/saveButton";
import {SaveService} from "./form/saveService";
import {GridPanelComponent} from "./admin/grid.component";
import {GridPanelService} from "./admin/grid.service";
import {MenuComponent} from "./menu/menu.component";
import {MailService} from "./Engine/mail.service";
// import {assetUrl} from "@angular/compiler/src/identifiers";
// import { Ng2CloudinaryModule } from 'ng2-cloudinary';
// import { FileUploadModule } from 'ng2-file-upload';
import {FileUploadComponent} from "./form/fileUpload";
import {FileUploadService} from "./form/fileUpload.service";
import {AuthService} from "./auth/auth.service";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {MyAutoFocusDirective} from "./directives/autofocus";
import {BalletDetailsComponent} from "./admin/ballet/balletDetails.component";
import {BalletDetailsService} from "./admin/ballet/balletDetails.service";
import {GroupComponent} from "./admin/ballet/group.component";
import {GroupService} from "./admin/ballet/group.service";
import {StudentComponent} from "./admin/ballet/student.component";
import {StudentService} from "./admin/ballet/student.service";
import {BrowserAnimationsModule} from "../../public/js/vendor/@angular/platform-browser/animations/src/module";
import {ExportService} from "./admin/export.service";
import {CargoDetailsComponent} from "./admin/cargo/cargoDetails.component";
import {CargoDetailsService} from "./admin/cargo/cargoDetails.service";
import {OffreComponent} from "./admin/auto/offre.component";
import {OffreService} from "./admin/auto/offre.service";
import {AutoDetailsComponent} from "./admin/auto/autoDetails.component";
import {AutoDetailsService} from "./admin/auto/autoDetails.service";


function getStepsFirst(_stepService: StepService) {
    let appName = window.location.search.replace(new RegExp("^(?:.*[&\\?]" + 'app'.replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1");
    return () => _stepService.getSteps(appName)

}
@NgModule({
    declarations: [
        AppComponent, MainComponent,
        BackButtonComponent, ListButtonsComponent, MultiSelectionComponent,
        PanelBtnComponent, FieldPanelComponent, SaveButtonComponent,
        GridPanelComponent, MenuComponent, FileUploadComponent,
        BalletDetailsComponent, SignupComponent, SigninComponent,
        AuthenticationComponent, MyAutoFocusDirective
        ,GroupComponent, StudentComponent, CargoDetailsComponent,
        AutoDetailsComponent, OffreComponent
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
                MailService, GridPanelService, BalletDetailsService,
                AuthService, GroupService, StudentService,
                CargoDetailsService, ExportService, AutoDetailsService,
                OffreService]
})
export class AppModule {
    

}

