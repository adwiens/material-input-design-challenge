import {
  ContentChild,
  ContentChildren,
  Directive,
  DoCheck,
  OnDestroy,
  QueryList,
} from '@angular/core';
import { FormControlDirective as FCDirective } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SuffixDirective } from './suffix.directive';

@Directive({
  selector: 'mat-form-field', // tslint:disable-line:directive-selector
})
export class FormFieldDirective implements DoCheck, OnDestroy {
  @ContentChild(SuffixDirective) suffix: SuffixDirective;

  // Size each icon to 20x20 by setting inline to true:
  @ContentChildren(MatIcon) set _icons(icons: QueryList<MatIcon>) {
    icons.forEach((icon) => (icon.inline = true));
  }

  // Set color of suffix icon when the control's validity changes:
  @ContentChild(FCDirective) set _fcd(fcd: FCDirective | undefined) {
    this.unsubscribe.next();
    if (fcd) {
      const setColor = () =>
        this.suffix?.setColor(fcd.invalid ? 'warn' : undefined);
      setColor();
      fcd.statusChanges.pipe(takeUntil(this.unsubscribe)).subscribe(setColor);
    }
  }

  private unsubscribe = new Subject();

  constructor(private host: MatFormField) {
    // Set mat-form-field to always have the outline appearance:
    host.appearance = 'outline';
  }

  ngDoCheck(): void {
    // Fix Material bug where label whitespace (the "outline gap")
    // remains the width of the native (non-Lato) font:
    setTimeout(() => this.host.updateOutlineGap(), 500);
  }

  ngOnDestroy(): void {
    // Clean up any subscriptions:
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
