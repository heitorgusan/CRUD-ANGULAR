import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {

    if(value == 'Natureza')return 'forest';
    if(value == 'Obras')return 'key';
    if(value == 'Alimentação')return 'local_dining';
    return 'apps';
  }

}
