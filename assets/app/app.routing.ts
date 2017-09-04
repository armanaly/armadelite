import {Routes, RouterModule} from "@angular/router";

import {MainComponent} from './components/main.component';

import {ProfileComponent} from "./profile/profile.component";
import {PhotosComponent} from "./photos/photos.component";
import {GridPanelComponent} from "./components/grid.component";
import {MenuComponent} from "./menu/menu.component";
import {SignupComponent} from "./auth/signup.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {BalletDetailsComponent} from "./components/ballet/balletDetails.component";
import {GroupComponent} from "./components/ballet/group.component";
import {StudentComponent} from "./components/ballet/student.component";

const APP_ROUTES: Routes = [
    {path: '', component:MenuComponent  },    //
    {path: 'step/:id', component: MainComponent},
    {path: 'step', component: MainComponent},
    {path: 'grid', component: GridPanelComponent},
    {path: 'grid/:grid_name', component: GridPanelComponent},
    {path: 'grid/:grid_name/:master_val', component: GridPanelComponent},
    {path: 'details/:record', component: BalletDetailsComponent},
    {path: 'auth/signup', component: SignupComponent},
    {path: ':firstLoad', component:MenuComponent},
    {path: 'groupManagement/:record/:course_type/:stage', component: GroupComponent},
    {path: 'editStudent/:record', component: StudentComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);