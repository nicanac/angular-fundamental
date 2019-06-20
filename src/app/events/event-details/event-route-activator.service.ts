import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { EventService } from "../shared/event.service";

@Injectable()
export class EventRouteActivator implements CanActivate {
  public constructor(private eventService: EventService, private router:Router) {}

  public canActivate(route: ActivatedRouteSnapshot) {
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExists){
      this.router.navigate(['/404']);
    } else {
      return eventExists;
    }
  }
}
