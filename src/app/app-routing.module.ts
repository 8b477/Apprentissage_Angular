import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/compos/home/home.component';
import { Bindings1Component } from './components/demo/bindings1/bindings1.component';
import { Exos01Component } from './components/exos/exos01/exos01.component';
import { FourOfourComponent } from './shared/compos/four-ofour/four-ofour.component';
import { Pipes2Component } from './components/demo/pipes2/pipes2.component';
import { ExosPipeComponent } from './components/exos/exos-pipe/exos-pipe.component';
import { DirectiveStruct3Component } from './components/demo/directive-struct3/directive-struct3.component';
import { ExosDirectiveComponent } from './components/exos/exos-directive/exos-directive.component';


const routes: Routes = 
[
  {path : '', component : HomeComponent},
  {path : 'bindings1', component : Bindings1Component},
  {path : 'exos01', component : Exos01Component},
  {path : 'pipes2', component : Pipes2Component},
  {path : 'exospipe', component : ExosPipeComponent},
  {path : 'directive3', component : DirectiveStruct3Component},
  {path : 'exosdirective', component : ExosDirectiveComponent},



  {path : '**', component : FourOfourComponent} // -> Toujours mettre le chemin error en dernier
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }