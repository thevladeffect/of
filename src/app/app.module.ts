import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OfComponent} from './of/of.component';
import {OfListComponent} from './of-list/of-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    OfListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.forRoot({
      spinner: false,
      thick: true,
    }),
    NgProgressHttpModule.forRoot(),
    NoopAnimationsModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
