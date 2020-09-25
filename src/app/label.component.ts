import { Component } from '@angular/core';

@Component({
  selector: 'mat-label', // tslint:disable-line:component-selector
  // Insert <span> element inside <mat-label> to shrink whitespace:
  template: '<span><ng-content></ng-content></span>',
})
export class LabelComponent {}
