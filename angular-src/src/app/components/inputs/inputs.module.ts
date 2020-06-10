import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelectComponent } from './select/select.component';
import { SimpleSelectComponent } from './simple-select/simple-select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';
import { IconsModule } from '../icons/icons.module';
import {
  NgbDatepicker,
  NgbDateParserFormatter,
} from '@ng-bootstrap/ng-bootstrap';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { SimpleInputComponent } from './simple-input/simple-input.component';
import { SearchFieldComponent } from './search-field/search-field.component';
@NgModule({
  declarations: [
    SelectComponent,
    SimpleSelectComponent,
    CheckboxComponent,
    DatePickerComponent,
    DateRangePickerComponent,
    SimpleInputComponent,
    SearchFieldComponent,
  ],
  exports: [
    SelectComponent,
    SimpleSelectComponent,
    CheckboxComponent,
    DatePickerComponent,
    DateRangePickerComponent,
    SimpleInputComponent,
    SearchFieldComponent,
  ],
  imports: [CommonModule, NgbModule, FormsModule, IconsModule],
})
export class InputsModule {}
