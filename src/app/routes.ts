import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalisComponent } from './detalis/detalis.component';

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home page'
    },
    {
        path: 'details/:id',
        component: DetalisComponent,
        title: 'Details Page'
    }
];

export default routeConfig;
