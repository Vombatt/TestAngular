import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { SwiperModule } from 'angular2-useful-swiper';

import { SwiperComponent} from './components/swiper/swiper.component';
import { FeaturesComponent } from './components/features/features.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SwiperComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
