import{
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from "./events"

import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
/*
 * events/:id -> let us send a http parameter to the url, we can get in the eventDetailsComponent
 * { events/1 }
 * pathMatch: "full" => full or prefix
 *
 * canActivate : used for routeGuard, for instance to avoid having a wrong id
 * */
export const appRoutes: Routes = [
  {
    path: "events/new",
    component: CreateEventComponent,
    canDeactivate: ["canDeactivateCreateEvent"]
  },
  {
    path: "events",
    component: EventsListComponent,
    resolve: { events: EventsListResolver }
  },
  {
    path: "events/:id",
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/events", pathMatch: "full" },
  { path: "user", loadChildren:"./user/user.module#UserModule" }
  // ./user/user.module --> path to the module || #UserModule -> name of the module
];
