import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('activeInput') set ai(ref: ElementRef<HTMLInputElement>) {
    setInterval(() => ref.nativeElement.focus(), 1000); // Focus active input
  }
  errorControl = new FormControl('', Validators.required);

  constructor() {
    this.errorControl.markAsTouched(); // Always show error state
  }
}
