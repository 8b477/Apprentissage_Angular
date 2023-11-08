import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-struct3',
  templateUrl: './directive-struct3.component.html',
  styleUrls: ['./directive-struct3.component.scss']
})
export class DirectiveStruct3Component {

  public open : boolean = true
  public isConnect : boolean = false
  public afficheBoutDeLorem : boolean = false

  public valueFilter : string = ""

  public listPiments : any[] = [
    { id : 1, name : "Poivron", scoville : "0 - 100", categ : "light" },
    { id : 2, name : "Anaheim", scoville : "500 - 1000", categ : "light" },
    { id : 3, name : "Ancho", scoville : "1000 - 1500", categ : "medium" },
    { id : 4, name : "Chimayo", scoville : "2500 - 5000", categ : "medium" },
    { id : 5, name : "Fatali", scoville : "125 000 - 325 000", categ : "hot" },
    { id : 6, name : "Scorpion", scoville : "1 250 000", categ : "hot" },
    { id : 7, name : "Regret", scoville : "9 000 000", categ : "extreme" },
    { id : 8, name : "capsaïcine pur", scoville : "10 000 000 - 14 000 000", categ : "elemental" },
  ]

  listButtonsSorting : any[] = [
    { humanName : "Light score", value : "light" },
    { humanName : "Medium score", value : "medium" },
    { humanName : "Hot score", value : "hot" },
    { humanName : "Extreme score", value : "extreme" },
    { humanName : "Elemental score", value : "elemental" },
  ]

  openCloseDesc(){
    this.open = !this.open
  }

  connect(){
    this.isConnect = !this.isConnect
  }


  setFilterName(valueFilter : string){
    this.valueFilter = valueFilter
  }

}
