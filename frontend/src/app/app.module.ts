import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ForbiddenAccessComponent } from './pages/forbidden-access/forbidden-access.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EditMealComponent } from './components/edit-meal/edit-meal.component';
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
import { AddPageComponent } from './pages/add-page/add-page.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddPageModule } from './pages/add-page/add-page.module';
import { LayoutModule } from './layout/layout.module';
import { MealPlansPageModule } from './pages/meal-plans-page/meal-plans-page.module';
import { RemovePageComponent } from './pages/remove-page/remove-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditMealPlanComponent } from './pages/edit-meal-plan/edit-meal-plan.component';
import { EditMealPlanModule } from './pages/edit-meal-plan/edit-meal-plan.module';
import { StatisticsModule } from './pages/statistics/statistics.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotFoundComponent,
    ForbiddenAccessComponent,
    EditMealComponent,
    LoginComponent,
    RegisterComponent,
    ItemSelectorComponent,
    AddPageComponent,
    RemovePageComponent,
    ContactComponent,
    EditMealPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    HomepageModule,
    HttpClientModule,
    AddPageModule,
    LayoutModule,
    MealPlansPageModule,
    EditMealPlanModule,
    StatisticsModule
],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
