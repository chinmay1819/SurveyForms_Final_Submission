import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { LandComponent } from './land/land.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { HomeComponent } from './home/home.component';
import { PreviousFormsComponent } from './previous-forms/previous-forms.component';

const routes: Routes = [
  {
    component: LandComponent,
    path: ''
  },
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: SignupComponent,
    path: 'signup'
  },
  {
    component: CreateFormComponent,
    path: 'create-form'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'previous-forms', pathMatch: 'full'},
  {path: 'previous-forms', component: PreviousFormsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
