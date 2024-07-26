import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PlanDetailsComponent } from './pages/plan-details/plan-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-meal', component: AddMealComponent },
  { path: 'aboutus', component: AboutUsComponent },
  {
    path: 'Monday',
    loadChildren: () =>
      import('./pages/plan-details/plan-details.module').then(
        (m) => m.PlanDetailsComponent
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
