import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemPrice'
})
export class ItemPricePipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString('ee',
    { maximumFractionDigits: 2, minimumFractionDigits: 2}
    ).replace(",", " ") + " €";
  }

}
