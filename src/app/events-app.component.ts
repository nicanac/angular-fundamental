import { Component } from "@angular/core";

/**
 * Static files :
 * View angular json for the assets array to define the path that are automatically loaded (src/assets)
 * For style and js :
 */
@Component({
  selector: "events-app",
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventsAppComponent {
  title = "My app has been created";
}
