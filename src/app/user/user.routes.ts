import {Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';


export const userRoutes: Routes = [
    {path: 'profile', component: ProfileComponent, canActivate: [ProfileComponent]},
    {path: 'login', component: LoginComponent}
];
