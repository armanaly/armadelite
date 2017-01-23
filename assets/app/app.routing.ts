import {Routes, RouterModule} from "@angular/router";

import {MainComponent} from './vehicule/main.component';
import {StateComponent} from './state/state.component';
import {ProfileComponent} from "./profile/profile.component";
import {PhotosComponent} from "./photos/photos.component";
import {GridPanelComponent} from "./components/gridPanel.component";
import {MenuComponent} from "./menu/menu.component";

const APP_ROUTES: Routes = [
    {path: '', component: MenuComponent},
    {path: 'step/:id', component: MainComponent},
    {path: 'step', component: MainComponent},
    //{path: 'details/:name', component: VehiculeComponent},
    {path: 'grid', component: GridPanelComponent},
    {path: 'photos', component: PhotosComponent},
    {path: 'profile', component: ProfileComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);