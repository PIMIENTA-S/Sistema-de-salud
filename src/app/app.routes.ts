import { Routes } from '@angular/router';
import { LoginHomeComponent } from './login/login-home/login-home.component';
import { RegisterComponent } from './login/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ConsultAppointmentComponent } from './pages/consult-appointment/consult-appointment.component';
import { HistoryComponent } from './pages/history-user/history.component';
import { authGuard } from './guards/auth.guard';
import { PoliTermsComponent } from './pages/poli-terms/poli-terms.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

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
        component: HomeComponent,
        canActivate: [authGuard]
    },
    {
        path: 'nosotros',
        component: ContactComponent,
        canActivate: [authGuard]
    },
    {
        path: 'citas',
        component: ConsultAppointmentComponent,
        canActivate: [authGuard]
    },
    {
        path: 'historia-clinica',
        component: HistoryComponent,
        canActivate: [authGuard]
    },
    {
        path: 'politicas-terminos',
        component: PoliTermsComponent
    },
    {
        path: 'news',
        component: NewsDetailsComponent
    },
    {
        path:'**',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
