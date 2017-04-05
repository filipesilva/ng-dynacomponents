import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { Reducers } from './states';
import { WizardComponent, WizardStepDirective } from './wizard';
import { StepOneComponent, StepTwoComponent } from './steps';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepDirective,
    StepOneComponent,
    StepTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    StoreModule.provideStore(Reducers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
