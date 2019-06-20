import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-event",
  templateUrl: "./create-event.component.html",
  styleUrls: ["./create-event.component.scss"]
})
export class CreateEventComponent implements OnInit {
  public isDirty = true;
  public constructor(private router: Router) {}
  public cancel() {
    this.router.navigate(["/events"]);
  }
  public ngOnInit() {}
}
