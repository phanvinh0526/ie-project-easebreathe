// Add router module to the ts file
import { Routes } from '@angular/router';

// Components
import { HomeComponent } from './layout/home/home.component';
import { Home2Component } from './layout/home2/home2.component';





export const routes: Routes = [
    // Redirect all other URLs to HomePag
    {path: '', redirectTo: '/home', pathMatch: 'full'},

    {path: 'home2', component: Home2Component},

    {path: 'home', component: HomeComponent}
        // children: [
        //     {
        //         path: '',
        //         loadChildren: 'home'
        //     }
        // ],
        // // canActivate: [AuthenticationGuard],
        // runGuardsAndResolvers: 'always',
    
    
];
