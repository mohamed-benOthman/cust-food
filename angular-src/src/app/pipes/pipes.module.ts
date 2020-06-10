import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InitialsPipe } from './initials.pipe';
import { IngredientsFilterPipe } from './ingredients-filter.pipe';

@NgModule({
  declarations: [InitialsPipe, IngredientsFilterPipe],
  exports: [InitialsPipe, IngredientsFilterPipe],
  imports: [CommonModule],
})
export class PipesModule {}
