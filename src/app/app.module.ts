import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventsAppComponent } from "./events-app.component";
import { EventsListComponent } from "./events/events-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail-component";
import { NavBarComponent } from './navbar/navbar.component';
import {EventService} from './events/shared/event.service';

@NgModule({
  imports: [BrowserModule],
  declarations: [EventsAppComponent, EventsListComponent, EventThumbnailComponent, NavBarComponent],
  // Angular injector is aware of this and if we need we can import it in another document and will know where to go
  // to get this service
  // after you need to inject it in your component (in a the EnventList class constructor for instance)
  providers: [EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}
