import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeText'
})
export class CapitalizeTextPipe implements PipeTransform {

  transform(text: string): string {
    return text[0].toUpperCase() + text.substr(1).toLowerCase();
  }

}
