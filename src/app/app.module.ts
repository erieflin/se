import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { HeaderComponent }  from './layout/header/header'
import { FooterComponent }  from './layout/footer/footer'
import { LinksComponent }  from './layout/links/links'
import { ContentComponent }  from './layout/content/content'
import { DetailComponent }  from './layout/detail/detail'
import { MapComponent }  from './layout/map/map'

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, LinksComponent, ContentComponent, DetailComponent, MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLFyK-IV80BxoYOfzQrHDaluNez6y5dnc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
