import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './helloWorld.component';
import { CoursesComponent } from './courses/courses.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { SummaryPipe } from './summary.pipe';
import { ContatctFormComponent } from './contatct-form/contatct-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { AddCardDetailsComponent } from './add-card-details/add-card-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CoursesComponent,
    FavouriteComponent,
    BootstrapPanelComponent,
    SummaryPipe,
    ContatctFormComponent,
    SignupFormComponent,
    AddCardDetailsComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
