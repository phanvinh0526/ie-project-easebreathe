import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './layout/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { AsthmaComponent } from './components/asthma/asthma.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TriggersComponent } from './components/triggers/triggers.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { WeatherComponent } from './components/weather/weather.component';
import { PollenComponent } from './components/pollen/pollen.component';
import { CounterComponent } from './components/counter/counter.component';

//-- Services
import { WeatherApiService } from './services/weather-api.service';
import { ServerApiService } from './services/server-api.service';

//-- HttpClient
import { HttpClientModule } from '@angular/common/http';
import { MultipolygonComponent } from './components/multipolygon/multipolygon.component';
import { ProcessComponent } from './components/process/process.component';
import { FirstAidComponent } from './components/first-aid/first-aid.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { GoodcontrolComponent } from './components/activities/goodcontrol/goodcontrol.component';
import { PartialcontrolComponent } from './components/activities/partialcontrol/partialcontrol.component';
import { BadcontrolComponent } from './components/activities/badcontrol/badcontrol.component';
import { BodyComponent } from './layout/body/body.component';
import { Home2Component } from './layout/home2/home2.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizzComponent } from './components/quizz/quizz.component';
import { MainsliderComponent } from './components/mainslider/mainslider.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


// Global variables
import { Globals } from './globals';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    AsthmaComponent,
    StatisticsComponent,
    TriggersComponent,
    SymptomsComponent,
    WeatherComponent,
    PollenComponent,
    CounterComponent,
    MultipolygonComponent,
    ProcessComponent,
    FirstAidComponent,
    ActivitiesComponent,
    GoodcontrolComponent,
    PartialcontrolComponent,
    BadcontrolComponent,
    BodyComponent,
    Home2Component,
    QuizzComponent,
    MainsliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule
    
  ],
  providers: [
    WeatherApiService, 
    ServerApiService, 
    // {provide: LocationStrategy, useClass: HashLocationStrategy},
    Globals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
