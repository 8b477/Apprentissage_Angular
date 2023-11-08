import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings1',
  templateUrl: './bindings1.component.html',
  styleUrls: ['./bindings1.component.scss']
})
export class Bindings1Component {

  // binding One Way
  public str    : string  = 'Bonjour'
  public num    : number  = 42
  public bool   : boolean = false
  public dateDJ : Date    = new Date

  // binding Two Way
  public str2 ! : string
  public date2! : Date
  public color! : string

  // binding Event
  public counter  : number = 0
  public timer    : number = 0
  public interval : any
  public chrono   : number = 0
  public inter    : any    = null


  addToCount(){
    this.counter++
  }

  remToCount(){
    this.counter--
  }

  startChrono()
  {
    if(this.inter == null || this.inter >= 1)
    {
      clearInterval(this.inter)
      this.inter = setInterval(() => {
        this.chrono++
      },1000)
    }
  }

  stopChrono()
  {
    clearInterval(this.inter)
  }

  resetChrono()
  {
    this.chrono = 0
  }
}
