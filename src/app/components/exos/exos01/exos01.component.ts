import { Component } from '@angular/core';

@Component({
  selector: 'app-exos01',
  templateUrl: './exos01.component.html',
  styleUrls: ['./exos01.component.scss']
})
export class Exos01Component {

//#region First Chrono
public isStartedFirst : boolean = false
public counter   : number = 0
private interval : any


StartChrono()
{
  this.interval = setInterval(()=>{ this.counter++},1000)
  this.isStartedFirst = true  
}

StopChrono()
{
  if(this.interval)
  {
    clearInterval(this.interval)
    this.isStartedFirst = false
  }
}

ResetChrono()
{
    if(this.interval)
  {
    clearInterval(this.interval)
    this.counter = 0
    this.isStartedFirst = false
  }
}
//#endregion

//#region Seconde Chrono
public interval2 : any
public minute    : number = 0
public seconde   : number = 0
public isStartedFirst2    = false

StartChrono2()
{
  this.interval2 = setInterval(()=>
  {
   this.seconde++

    if(this.seconde > 60)
    {
      this.seconde = 0
      this.minute++
    }
  },1000)

  this.isStartedFirst2 = true 
}


StopChrono2()
{
  if(this.interval2)
  {
    clearInterval(this.interval2)
    this.isStartedFirst2 = false
  }
}

ResetChrono2()
{
    if(this.interval2)
  {
    clearInterval(this.interval2)
    this.minute = 0
    this.seconde = 0
    this.isStartedFirst2 = false
  }
}
//#endregion

//#region Third Chrono
public interval3 : any
public minute2   : number = 0
public seconde2  : number = 0
public mili      : number = 0
public isStartedFirst3    = false

StartChrono3()
{
  this.interval3 = setInterval(()=>
  { 
  this.mili++

    if(this.mili > 1000)
    {
      this.mili = 0
      this.seconde2++

      if(this.seconde2 > 60)
      {
        this.seconde2 = 0
        this.minute2++
      }
    }

  },1)
  this.isStartedFirst3 = true
}

StopChrono3()
{
  if(this.interval3)
  {
    clearInterval(this.interval3)
    this.isStartedFirst3 = false
  }
}

ResetChrono3()
{
    if(this.interval3)
  {
    clearInterval(this.interval3)
    this.minute2  = 0
    this.seconde2 = 0
    this.mili     = 0
    this.isStartedFirst3 = false
  }
}
//#endregion
}
