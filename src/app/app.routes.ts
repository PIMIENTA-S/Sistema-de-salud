import { Routes } from '@angular/router';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: 'login', 
        component: LoginHomeComponent 
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path:'**',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
