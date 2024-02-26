import {NgModule} from  '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


export const routes: Routes = [
    {
        path: '',
        component:HomeComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouteModule{};



