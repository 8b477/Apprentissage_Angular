import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'displayPannier'
})
export class DisplayPannierPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    switch (value) {
      case 1:
        value = 'Un'
        break;

          case 2:
        value = 'Deux'
        break;

      case 3:
        value = 'Trois'
        break;

      case 4:
        value = 'Quatre'
        break;

      case 5:
        value = 'Cinq'
        break;

      default:
        break;
    }  

    return `${value}`
  }

}
