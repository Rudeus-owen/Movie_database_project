import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { MoveListComponent } from './move-list/move-list.component';
import { AddEventListenerOptions } from 'rxjs/internal/observable/fromEvent';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
    MoveListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
