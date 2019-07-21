import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {IndexPageComponent} from './components/index-page/index-page.component';
import {AppService} from "./service/app-service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { AttendeeListComponent } from './components/attendee-list/attendee-list.component';
import { TalkListComponent } from './talk-list/talk-list.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    AttendeeListComponent,
    TalkListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
