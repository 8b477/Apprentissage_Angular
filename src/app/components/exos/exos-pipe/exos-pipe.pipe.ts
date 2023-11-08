import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToBTC'
})
export class ExosPipePipe implements PipeTransform {

private readonly deviceBTC : number = 32568

  transform(value: number, ...args: number[]): number {
    if(args.length > 0)
    {
      value = args[0] / this.deviceBTC
      return value;
    }
    value = value / this.deviceBTC
    return value
  }

}
