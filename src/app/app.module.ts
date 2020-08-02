import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarModule } from './search-bar/search-bar.module';
import { ThingModule } from './thing/thing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SearchBarModule,
    ThingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
