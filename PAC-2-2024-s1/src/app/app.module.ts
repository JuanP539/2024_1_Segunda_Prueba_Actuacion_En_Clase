import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DogFactsComponent } from './dog-facts/dog-facts.component';
import { ConsignaComponent } from './consigna/consigna.component';
import { DogFactServiceService } from './dog-fact-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogFactsComponent,
    ConsignaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DogFactServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
