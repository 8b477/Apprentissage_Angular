import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToJHMS'
})
export class ExosPipeJHMSPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {

    if(args.length > 0)
    {
      value = args[0]

      let dateTransform = new Date(value).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })

      return dateTransform
    }

    let dateTransform = new Date(value).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric" })
 
    return dateTransform;
  }

}
//02jour(S) 15 heure(S)  01 Minute 00seconde