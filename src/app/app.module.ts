import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './clothing/clothing.component';
import { LifestyleEventsComponent } from './lifestyle-events/lifestyle-events.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationPageComponent } from './navigation-page/navigation-page.component';
import { BaseCarouselComponent } from './base-carousel/base-carousel.component';
import { BaseContainerComponent } from './base-container/base-container.component';
import { NavDarkThemeComponent } from './nav-dark-theme/nav-dark-theme.component';
import { NavLightThemeComponent } from './nav-light-theme/nav-light-theme.component';
import { SplitContainerComponent } from './split-container/split-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClothingComponent,
    LifestyleEventsComponent,
    ContactUsComponent,
    NavigationPageComponent,
    BaseCarouselComponent,
    BaseContainerComponent,
    NavDarkThemeComponent,
    NavLightThemeComponent,
    SplitContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
