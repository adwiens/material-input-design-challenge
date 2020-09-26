import {
  ContentChild,
  ContentChildren,
  Directive,
  DoCheck,
  OnDestroy,
  OnInit,
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
export class FormFieldDirective implements OnInit, DoCheck, OnDestroy {
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

  private unsubscribe = new Subject<boolean | void>();
  private updating?: number;
  private interval?: number;

  constructor(private host: MatFormField) {}

  ngOnInit(): void {
    this.host.appearance = 'outline'; // Always have outline appearance
  }

  ngDoCheck(): void {
    // Fix Material bug where label whitespace (the "outline gap")
    // remains the width of the native (non-Lato) font:
    if (this.updating) {
      clearTimeout(this.updating);
    }
    if (!this.interval) {
      const updateGap = () => this.host.updateOutlineGap();
      this.interval = setInterval(updateGap, 20) as any;
    }
    this.updating = setTimeout(() => clearInterval(this.interval), 500) as any;
  }

  ngOnDestroy(): void {
    // Clean up subscriptions:
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
