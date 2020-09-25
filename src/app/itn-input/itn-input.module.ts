import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormFieldDirective } from './form-field.directive';
import { LabelComponent } from './label.component';
import { SuffixDirective } from './suffix.directive';

const classes = [LabelComponent, FormFieldDirective, SuffixDirective];

@NgModule({
  declarations: classes,
  imports: [CommonModule],
  exports: classes,
})
export class ItnInputModule {}
