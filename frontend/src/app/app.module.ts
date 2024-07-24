import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EditMealbuttonComponent } from './components/edit-mealbutton/edit-mealbutton.component';
import { SelectCategComponent } from './components/select-categ/select-categ.component';
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
import { EditMealPlanComponent } from './components/edit-meal-plan/edit-meal-plan.component';
import { HomepageModule } from './pages/homepage/homepage.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { MealPlansPageModule } from './pages/meal-plans-page/meal-plans-page.module';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { AdminModule } from './pages/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    EditMealbuttonComponent,
    SelectCategComponent,
    NotFoundComponent,
    ForbiddenAccessComponent,
    EditMealPlanComponent,
    LoginComponent,
    RegisterComponent,
    ItemSelectorComponent,
    ContactComponent,
    AuthenticationComponent,

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
    LayoutModule,
    MealPlansPageModule,
    AuthenticationModule,
    AdminModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
