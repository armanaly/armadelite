import {Routes, RouterModule} from "@angular/router";

import {MainComponent} from './components/main.component';

import {GridPanelComponent} from "./components/grid.component";
import {MenuComponent} from "./menu/menu.component";
import {SignupComponent} from "./auth/signup.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {BalletDetailsComponent} from "./components/ballet/balletDetails.component";
import {GroupComponent} from "./components/ballet/group.component";
import {StudentComponent} from "./components/ballet/student.component";
import {CargoDetailsComponent} from "./components/cargo/cargoDetails.component";
import {AutoDetailsComponent} from "./components/auto/autoDetails.component";
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