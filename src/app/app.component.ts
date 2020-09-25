import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('activeInput') set input(ref: ElementRef<HTMLInputElement>) {
    setInterval(() => ref.nativeElement.focus(), 1000); // Focus "active" input
  }
  @ViewChildren(MatFormField) formFields: QueryList<MatFormField>;
  errorControl = new FormControl('Input Text', Validators.minLength(15));

  constructor() {
    this.errorControl.markAsTouched(); // Show error state
  }

  ngAfterViewInit(): void {
    // Fix for Material bug where label whitespace (the "outline gap")
    // remains the width of the native (non-Lato) font:
    // TODO: This does not quite work correctly when input starts out empty
    this.formFields.forEach(field => setTimeout(() => field.updateOutlineGap(), 500));
  }
}
