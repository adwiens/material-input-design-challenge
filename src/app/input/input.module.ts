import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormFieldDirective } from './form-field.directive';
import { LabelComponent } from './label.component';

@NgModule({
  declarations: [LabelComponent, FormFieldDirective],
  imports: [CommonModule],
  exports: [LabelComponent, FormFieldDirective],
})
export class InputModule {}
