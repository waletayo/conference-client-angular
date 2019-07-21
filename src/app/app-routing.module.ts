import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexPageComponent} from "./components/index-page/index-page.component";
import {AttendeeListComponent} from "./components/attendee-list/attendee-list.component";


const routes: Routes = [
  {
    path: "",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "home",
    component: IndexPageComponent
  },
  {
    path: "attendeeList",
    component: AttendeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
