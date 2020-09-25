import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  errorControl = new FormControl('Input Text', Validators.minLength(11));
  active = false;

  constructor() {
    this.errorControl.markAsTouched(); // Show error state
  }
}
