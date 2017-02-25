import {Routes, RouterModule} from "@angular/router";

import {MainComponent} from './components/main.component';
import {StateComponent} from './state/state.component';
import {ProfileComponent} from "./profile/profile.component";
import {PhotosComponent} from "./photos/photos.component";
import {GridPanelComponent} from "./components/gridPanel.component";
import {MenuComponent} from "./menu/menu.component";

const APP_ROUTES: Routes = [
    {path: '', component:MenuComponent,  },    //
    {path: 'step/:id', component: MainComponent},
    {path: 'step', component: MainComponent},
    {path: 'grid', component: GridPanelComponent},
    {path: 'grid/:grid_name', component: GridPanelComponent},
    {path: 'photos', component: PhotosComponent},
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);