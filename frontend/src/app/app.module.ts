import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ForbiddenAccessComponent } from './pages/forbidden-access/forbidden-access.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/authentication/login/login.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ItemSelectorComponent } from './components/item-selector/item-selector.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { MealPlansPageModule } from './pages/meal-plans-page/meal-plans-page.module';
import { ContactComponent } from './pages/contact/contact.component';
import { StatisticsModule } from './pages/statistics/statistics.module';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { AdminModule } from './pages/admin/admin.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ToastComponent } from './components/toast/toast.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SharedModule } from './components/shared.module';
import { DeleteAccountComponent } from './pages/settings/delete-account/delete-account.component';
import { ChangePasswordComponent } from './pages/settings/change-password/change-password.component';
import { ChangeDetailsComponent } from './pages/settings/change-details/change-details.component';
import { MealPlanDetailsComponent } from './pages/meal-plan-details/meal-plan-details.component';
import { PlanBannerComponent } from './pages/meal-plan-details/components/plan-banner/plan-banner.component';
import { PlanStatsComponent } from './pages/meal-plan-details/components/plan-stats/plan-stats.component';
import { PlanDaysComponent } from './pages/meal-plan-details/components/plan-days/plan-days.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    ForbiddenAccessComponent,
    LoginComponent,
    RegisterComponent,
    ItemSelectorComponent,
    ContactComponent,
    AuthenticationComponent,
    AboutUsComponent,
    ToastComponent,
    SettingsComponent,
    DeleteAccountComponent,
    ChangePasswordComponent,
    ChangeDetailsComponent,
    MealPlanDetailsComponent,
    PlanBannerComponent,
    PlanStatsComponent,
    PlanDaysComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    HomepageModule,
    HttpClientModule,
    LayoutModule,
    MealPlansPageModule,
    StatisticsModule,
    AuthenticationModule,
    AdminModule,
    ReactiveFormsModule,
    SharedModule,
    NgChartsModule,
    

],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
