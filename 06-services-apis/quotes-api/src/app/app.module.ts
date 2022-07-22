import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { QuotesListComponent } from './components/quotes-list/quotes-list.component';
import { QuotesItemsComponent } from './components/quotes-items/quotes-items.component';
import { RedditListComponent } from './components/reddit-list/reddit-list.component';
import { RedditItemComponent } from './components/reddit-item/reddit-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesListComponent,
    QuotesItemsComponent,
    RedditListComponent,
    RedditItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
