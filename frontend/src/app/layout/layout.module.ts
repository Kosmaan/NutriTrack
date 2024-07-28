import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';



@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UserMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [HeaderComponent,FooterComponent]

})
export class LayoutModule { }