import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ingredientsFilter',
})
export class IngredientsFilterPipe implements PipeTransform {
  transform(value: any[], searchString: string): unknown {
    if (!searchString) {
      console.log('no search');
      return value;
    }
    return value.filter((it) => {
      const ingredient = it.includes(searchString);

      return ingredient;
    });
  }
}
