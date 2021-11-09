import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenTitle'
})
export class ShortenTitlePipe implements PipeTransform {

  transform(value: string, wordCount: number): string {             //: string[] { }
    return value.split(" ").slice(0, wordCount).join(" ");
  }

  // "Elas metsas mutionu, keset kuuski"
  // .split("a")
  // ["El","s mets", "s mutionu, keset kuuski"] ---3 erinevat elementi

  // .split( )
  // ["Elas", "metsas", "mutionu,", "keset", "kuuski"] ---5 erineva elementi

  // .slice(0, 3)
  // ["Elas", "metsas", "mutionu"]

  //.join("::")
  //Elas::metsas::mutionu,

}
