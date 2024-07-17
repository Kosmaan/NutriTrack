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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
