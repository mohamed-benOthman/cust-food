import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  /**
   * Transform a fullName string to initials only
   * @param value String value
   */
  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.split(' ').map(d => d[0].toUpperCase()).join('');
  }

}
