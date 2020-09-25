import { Component, QueryList, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChildren(MatFormField) formFields: QueryList<MatFormField>;
  errorControl = new FormControl('Input Text', Validators.minLength(15));

  constructor() {
    this.errorControl.markAsTouched(); // Show error state
  }
}
