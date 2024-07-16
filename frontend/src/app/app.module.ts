import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { AdminNavbarComponent } from './components/admin-navbar/admin-navbar.component';
import { FiltersComponent } from './components/filters/filters.component';
import { BannerComponent } from './components/banner/banner.component';
import { AccentButtonComponent } from './components/accent-button/accent-button.component';
import { ReviewCarouselComponent } from './components/review-carousel/review-carousel.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DiagonalShowcaseComponent } from './components/diagonal-showcase/diagonal-showcase.component';
import { SecondaryBannerComponent } from './components/secondary-banner/secondary-banner.component';
import { ToolsShowcaseComponent } from './components/tools-showcase/tools-showcase.component';
import { BannerWithButtonComponent } from './components/banner-with-button/banner-with-button.component';
import { HomepageComponent } from './pages/homepage/homepage.component';

import { EditMealbuttonComponent } from './components/edit-mealbutton/edit-mealbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectCategComponent } from './components/select-categ/select-categ.component';
import { AddMealComponent } from './pages/add-meal/add-meal.component';
import { FileUploadComponent } from './pages/file-upload/file-upload.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
    MealCardComponent,
    AdminNavbarComponent,
    FiltersComponent,
    BannerComponent,
    AccentButtonComponent,
    ReviewCarouselComponent,
    HeaderComponent,
    FooterComponent,
    DiagonalShowcaseComponent,
    SecondaryBannerComponent,
    ToolsShowcaseComponent,
    BannerWithButtonComponent,
    HomepageComponent,
    EditMealbuttonComponent,
    SelectCategComponent,
    AddMealComponent,
   ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FileUploadComponent,
    FormsModule,
    ReactiveFormsModule,BrowserAnimationsModule, MatSelectModule,MatFormFieldModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
