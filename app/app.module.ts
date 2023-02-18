import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { PoliticsComponent } from './politics/politics.component';
import { CrimeComponent } from './crime/crime.component';
import { WorldComponent } from './world/world.component';
import { TechnologyComponent } from './technology/technology.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { HeadComponent } from './head/head.component';
import { SportsComponent } from './sports/sports.component';
import { RouterModule } from '@angular/router';
import { DescriptionPipe } from './description';
import { Routes } from '@angular/router';


const allLinks:Routes = [
  {path: 'BusinessNews',component:BusinessNewsComponent},
  {path: 'Crime',component:CrimeComponent},
  {path: 'Politics',component:PoliticsComponent},
  {path: 'World',component:WorldComponent},
  {path: 'Technology',component:TechnologyComponent},
  {path: 'Sports',component:SportsComponent},
  {path: 'newsDetail/:category',component:NewsDetailsComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BusinessNewsComponent,
    PoliticsComponent,
    CrimeComponent,
    WorldComponent,
    TechnologyComponent,
    NewsDetailsComponent,
    HeadComponent,
    SportsComponent,
    DescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(allLinks)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
