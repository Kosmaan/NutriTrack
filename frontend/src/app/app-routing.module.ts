import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AdminComponent } from './pages/admin/admin.component';
import { OverviewComponent } from './pages/admin/components/overview/overview.component';
import { AddComponent } from './pages/admin/components/add/add.component';
import { AddMealComponent } from './pages/admin/components/add-meal/add-meal.component';
import { EditComponent } from './pages/admin/components/edit/edit.component';
import { EditMealComponent } from './pages/admin/components/edit-meal/edit-meal.component';
import { AddMealPlanComponent } from './pages/admin/components/add-meal-plan/add-meal-plan.component';
import { MealPlansPageComponent } from './pages/meal-plans-page/meal-plans-page.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { DeleteAccountComponent } from './pages/settings/delete-account/delete-account.component';
import { ChangePasswordComponent } from './pages/settings/change-password/change-password.component';
import { ChangeDetailsComponent } from './pages/settings/change-details/change-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomepageComponent },
      { path: 'contact-us', component: ContactComponent },
      { path: 'plans', component: MealPlansPageComponent },
      { path: 'statistics', component: StatisticsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'settings', component: SettingsComponent, children: [
        {
          path: 'delete', component: DeleteAccountComponent
        },
        {
          path: 'change-pass', component: ChangePasswordComponent
        },
        {
          path: 'change-details', component: ChangeDetailsComponent
        }
      ] },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      { path: 'overview', component: OverviewComponent },
      {
        path: 'add',
        component: AddComponent,
        children: [
          {
            path: 'add-meal',
            component: AddMealComponent,
          },
          {
            path: 'add-meal-plan',
            component: AddMealPlanComponent,
          },
        ],
      },
      {
        path: 'edit',
        component: EditComponent,
        children: [
          {
            path: 'edit-meal',
            component: EditMealComponent,
          },
        ],
      },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
