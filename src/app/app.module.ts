import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {NgProgressModule} from '@ngx-progressbar/core';
import {NgProgressHttpModule} from '@ngx-progressbar/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OfComponent} from './of/of.component';
import {OfListComponent} from './of-list/of-list.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './of-list/list/list.component';
import { InputComponent } from './of-list/input/input.component';
import { FibonacciPipe } from './of-list/fibonacci.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OfComponent,
    OfListComponent,
    HomeComponent,
    ListComponent,
    InputComponent,
    FibonacciPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgProgressModule.withConfig({
      spinner: false,
      thick: true,
    }),
    NgProgressHttpModule,
    NoopAnimationsModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
