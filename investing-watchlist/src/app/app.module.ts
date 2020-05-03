import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WatchListComponent } from './components/watch-list/watch-list.component';
import { WatchlistItemComponent } from './components/watchlist-item/watchlist-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddWatchlistComponent } from './components/add-watchlist/add-watchlist.component';
import { AboutComponent } from './components/pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchListComponent,
    WatchlistItemComponent,
    HeaderComponent,
    AddWatchlistComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
