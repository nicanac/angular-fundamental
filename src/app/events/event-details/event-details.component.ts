import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ActivatedRoute } from "@angular/router";

/**
 *
 * ActivatedRoute let us know the current route url
 * Add plus ( + ) to cast un string to number => +this.ID
 */
@Component({
  selector: "app-event-details",
  templateUrl: "./event-details.component.html",
  styleUrls: ["./event-details.component.scss"]
})
export class EventDetailsComponent implements OnInit {
  public event: EventService;
  public ID: number;
  public constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): any {
    this.ID = this.route.snapshot.params["id"];
    this.event = this.eventService.getEvent(+this.ID);
  }
}
