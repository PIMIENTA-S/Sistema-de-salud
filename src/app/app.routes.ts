import { Routes } from '@angular/router';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConsultAppointmentComponent } from './pages/consult-appointment/consult-appointment.component';
import { HistoryComponent } from './pages/history-user/history.component';

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
        path: 'nosotros',
        component: ContactComponent
    },
    {
        path: 'citas',
        component: ConsultAppointmentComponent
    },
    {
        path: 'historia-clinica',
        component: HistoryComponent
    },
    {
        path:'**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
