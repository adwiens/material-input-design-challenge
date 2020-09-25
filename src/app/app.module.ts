import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LabelComponent } from './label.component';
import { FormFieldDirective } from './form-field.directive';
import { SuffixDirective } from './suffix.directive';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    FormFieldDirective,
    SuffixDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
