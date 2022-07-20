import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AllPeopleComponent } from './all-people/all-people.component';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    AllPeopleComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
