import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipePow'
})
export class CustomPipePowPipe implements PipeTransform {

    transform(value: number, ...args: any[]): number {

    if(args.length == 1)
    {
      return value = Math.pow(value,args[0]);
    }
    if(args.length == 2)
    {
      value = Math.pow(value,args[0])
      value = value * ((args[1]/100) +1)
      return value 
    }
        return value = Math.pow(value,2)
  }

  
}
