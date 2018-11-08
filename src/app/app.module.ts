import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { DemotestService } from './shared/demotest/demotest.service';
import { HttpClientModule } from '@angular/common/http';
import { DemotestListComponent } from './demotest-list/demotest-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DemotestListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DemotestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
