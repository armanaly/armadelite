import {Routes, RouterModule} from "@angular/router";

import {MainComponent} from './main.component';

import {GridPanelComponent} from "./admin/grid.component";
import {MenuComponent} from "./menu/menu.component";
import {SignupComponent} from "./auth/signup.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {BalletDetailsComponent} from "./admin/ballet/balletDetails.component";
import {GroupComponent} from "./admin/ballet/group.component";
import {StudentComponent} from "./admin/ballet/student.component";
import {CargoDetailsComponent} from "./admin/cargo/cargoDetails.component";
import {AutoDetailsComponent} from "./admin/auto/autoDetails.component";
import {SigninComponent} from "./auth/signin.component";

const APP_ROUTES: Routes = [
    {path: '', component:MenuComponent  },
    // {path: 'home/:app/:master/:premenu', component:MenuComponent  },
    {path: 'menu/:app', component:MenuComponent  },
    // {path: 'menu', component:MenuComponent  },
    {path: 'step/:id', component: MainComponent},
    {path: 'step', component: MainComponent},
    {path: 'grid', component: GridPanelComponent},
    {path: 'grid/:grid_name', component: GridPanelComponent},
    {path: 'grid/:grid_name/:master_val/:app_name', component: GridPanelComponent},
    {path: 'details/:record/:grid_name', component: BalletDetailsComponent},
    {path: 'auto_details/:record/:grid_name', component: AutoDetailsComponent},
    {path: 'cargo_details/:record/:grid_name', component: CargoDetailsComponent},
    {path: 'auth/signup', component: SignupComponent},
    {path: 'signin/:app', component: SigninComponent},
    {path: ':firstLoad', component:MenuComponent},
    {path: 'groupManagement/:record/:course_type/:stage', component: GroupComponent},
    {path: 'editStudent/:record/:course_type/:stage', component: StudentComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);