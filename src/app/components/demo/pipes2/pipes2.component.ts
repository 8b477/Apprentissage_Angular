import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes2',
  templateUrl: './pipes2.component.html',
  styleUrls: ['./pipes2.component.scss']
})
export class Pipes2Component {

  public allDataInObject : any = {
    titlePromos : "Profitez de -50% sur tout les pignoufs",
    dateDebut   : new Date(),
    dateFin     : new Date(),
    remise      : 1999.99
  }

  public powerPipe : number = 42
}
