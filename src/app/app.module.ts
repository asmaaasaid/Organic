import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { SliderComponent } from './components/slider.component';
import { ProductsComponent } from './components/products.component';
import { TrendingComponent } from './components/trending.component';
import { FooterComponent } from './components/footer.component';
import { SharedCardComponent } from './components/shared-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    SliderComponent,
    ProductsComponent,
    TrendingComponent,
    FooterComponent,
    SharedCardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
