import { Component } from '@angular/core';

// Insert <span> element inside <mat-label> to shrink whitespace:
@Component({
  selector: 'mat-label', // tslint:disable-line:component-selector
  template: '<span><ng-content></ng-content></span>',
})
export class LabelComponent {}
