import { Component } from "@angular/core";

/*
 * Static files :
 * View angular json for the assets array to diffine the path that are automatically loaded (src/assets)
 * For style and js :
 *
 *
 *
 * */
@Component({
  selector: "events-app",
  template: `
    <nav-bar></nav-bar>
    <events-list></events-list>
  `
})
export class EventsAppComponent {
  title = "My app has been created";
}
