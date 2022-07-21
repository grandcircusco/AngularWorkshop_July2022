import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { AllPeopleComponent } from './all-people/all-people.component';
import { FormsModule } from '@angular/forms';
import { PersonFormComponent } from './person-form/person-form.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPaneComponent } from './accordion-pane/accordion-pane.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonDetailComponent,
    AllPeopleComponent,
    PersonFormComponent,
    AccordionComponent,
    AccordionPaneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
