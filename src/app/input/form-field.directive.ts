import {
  ContentChildren,
  Directive,
  DoCheck,
  OnDestroy,
  OnInit,
  QueryList,
} from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';

@Directive({
  selector: 'mat-form-field', // tslint:disable-line:directive-selector
})
export class FormFieldDirective implements OnInit, DoCheck, OnDestroy {
  // Size each icon to 20x20 by setting inline to true:
  @ContentChildren(MatIcon) set _icons(icons: QueryList<MatIcon>) {
    icons.forEach((icon) => (icon.inline = true));
  }

  private updating?: number;
  private interval?: number;

  constructor(private host: MatFormField) {}

  ngOnInit(): void {
    this.host.appearance = 'outline'; // Always have outline appearance
  }

  ngDoCheck(): void {
    // Fix Material bug where label whitespace (the "outline gap")
    // remains the width of the native (non-Lato) font:
    clearTimeout(this.updating);
    if (!this.interval) {
      const updateGap = () => this.host.updateOutlineGap();
      this.interval = setInterval(updateGap, 20) as any;
    }
    this.updating = setTimeout(() => clearInterval(this.interval), 500) as any;
  }

  ngOnDestroy(): void {
    clearTimeout(this.updating);
    clearInterval(this.interval);
  }
}
