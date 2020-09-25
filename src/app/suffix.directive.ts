import { Directive } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';

@Directive({
  selector: '[matSuffix]', // tslint:disable-line:directive-selector
})
export class SuffixDirective {
  constructor(private host: MatIcon) {}

  setColor(iconColor?: ThemePalette): void {
    this.host.color = iconColor;
  }
}
