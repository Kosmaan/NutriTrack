import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { FiltersComponent } from './filters/filters.component';
import { BannerComponent } from './banner/banner.component';
import { AccentButtonComponent } from './accent-button/accent-button.component';
import { ReviewCarouselComponent } from './review-carousel/review-carousel.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiagonalShowcaseComponent } from './diagonal-showcase/diagonal-showcase.component';
import { SecondaryBannerComponent } from './secondary-banner/secondary-banner.component';
import { ToolsShowcaseComponent } from './tools-showcase/tools-showcase.component';
import { BannerWithButtonComponent } from './banner-with-button/banner-with-button.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { EditMealbuttonComponent } from './edit-mealbutton/edit-mealbutton.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SelectCategComponent } from './select-categ/select-categ.component';

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
    SelectCategComponent
   ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatSelectModule,MatFormFieldModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
