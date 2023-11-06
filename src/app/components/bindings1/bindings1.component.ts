import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings1',
  templateUrl: './bindings1.component.html',
  styleUrls: ['./bindings1.component.scss']
})
export class Bindings1Component {

  // binding One Way
  public str : string = 'Bonjour'
  public num : number = 42
  public bool : boolean = false
  public dateDJ : Date = new Date

  // binding Two Way
  public str2! : string
  public date2! : Date
  public color! : string

  // binding Event
  public counter : number = 0
  public timer : number = 0
  public interval : any


  addToCount(){
    this.counter++
  }

  remToCount(){
    this.counter--
  }

  startChrono(){
   this.interval = setInterval(()=>{
    this.timer++
   },1000)

   if(this.interval) 
    clearInterval(this.interval)
  }
}
