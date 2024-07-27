import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReviewCarouselComponent } from 'src/app/pages/homepage/components/review-carousel/review-carousel.component';
import { DiagonalShowcaseComponent } from 'src/app/pages/homepage/components/diagonal-showcase/diagonal-showcase.component';
import { SecondaryBannerComponent } from 'src/app/pages/homepage/components/secondary-banner/secondary-banner.component';
import { ToolsShowcaseComponent } from 'src/app/pages/homepage/components/tools-showcase/tools-showcase.component';
import { BannerWithButtonComponent } from 'src/app/pages/homepage/components/banner-with-button/banner-with-button.component';
import { AccentButtonComponent } from './components/accent-button/accent-button.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const COMPONENTS: any[] = [
  BannerComponent,
  ReviewCarouselComponent,
  DiagonalShowcaseComponent,
  SecondaryBannerComponent,
  ToolsShowcaseComponent,
  BannerWithButtonComponent,
  AccentButtonComponent
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule,RouterModule],
  exports: [COMPONENTS],
  providers: [],
  bootstrap: [HomepageComponent],
})
export class HomepageModule {}
