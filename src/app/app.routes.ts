import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './pages/profile/user-profile/user-profile.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full'},
    { path: 'register', component: RegisterComponent, pathMatch: 'full'},

    { path: 'home', component:HomeComponent, pathMatch: 'full'},

    { path: 'perfil', component: UserProfileComponent, pathMatch: 'full'}
];
