import { CustomPipePowPipe } from './components/demo/pipes2/custom-pipe-pow.pipe';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/compos/home/home.component';
import { NavbarComponent } from './shared/compos/navbar/navbar.component';
import { FooterComponent } from './shared/compos/footer/footer.component';
import { Bindings1Component } from './components/demo/bindings1/bindings1.component';
import { FormsModule } from '@angular/forms';
import { Exos01Component } from './components/exos/exos01/exos01.component';
import { FourOfourComponent } from './shared/compos/four-ofour/four-ofour.component';
import { Pipes2Component } from './components/demo/pipes2/pipes2.component';

import { registerLocaleData } from '@angular/common';
import localFr from "@angular/common/locales/fr-BE";
import { ExosPipePipe } from './components/exos/exos-pipe/exos-pipe.pipe';
import { ExosPipeComponent } from './components/exos/exos-pipe/exos-pipe.component';
import { ExosPipeJHMSPipe } from './components/exos/exos-pipe/exos-pipe-jhms.pipe';
import { DirectiveStruct3Component } from './components/demo/directive-struct3/directive-struct3.component';
import { ExosDirectiveComponent } from './components/exos/exos-directive/exos-directive.component';
import { DisplayPannierPipe } from './components/exos/exos-directive/display-pannier.pipe';



 
registerLocaleData(localFr)


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    Bindings1Component,
    Exos01Component,
    FourOfourComponent,
    Pipes2Component,
    CustomPipePowPipe,
    ExosPipePipe,
    ExosPipeComponent,
    ExosPipeJHMSPipe,
    DirectiveStruct3Component,
    ExosDirectiveComponent,
    DisplayPannierPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: 
  [
    { provide : LOCALE_ID, useValue : "fr-BE"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
