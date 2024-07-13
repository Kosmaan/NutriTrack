import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealCardComponent } from './meal-card/meal-card.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [	
    AppComponent,
    MealCardComponent,
    AdminNavbarComponent,
    HomepageComponent,
    
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
