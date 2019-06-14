import { Component, EventEmitter, Input, Output } from "@angular/core";
/*
 * ngSwitchCase -> structural directive
 * [ngSwitch]
 * [class.green] -> class binding
 * [ngClass] -> expect object with boolean return
 * */
@Component({
  selector: "event-thumbnail",
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <div>Date: {{ event.date }}</div>
      <div
        [ngStyle]="getInlineStyle()"
        [ngClass]="getAccentuation()"
        [ngSwitch]="event?.time"
      >
        Time: {{ event?.time }}

        <span *ngSwitchCase="'8:00 am'">Early time</span>
        <span *ngSwitchCase="'10:00 am'">Late time</span>
        <span *ngSwitchDefault>Normal time</span>
      </div>
      <div>Price: \${{ event.price }}</div>
      <div *ngIf="event?.location">
        Location:
        <span>{{ event?.location?.address }}</span>
        <span>{{ event?.location?.city }}</span>
        <span>{{ event?.location?.country }}</span>
        <div [hidden]="!event?.onlineUrl">
          Online url: {{ event.onlineUrl }}<br />
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .thumbnail {
        min-height: 250px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well{
        color: #bbb;
      }
      .green {
        color: #51a351 !important;
      }
      .bold {
        font-weight: bold;
      }
    `
  ]
})
export class EventThumbnailComponent {
  /*
   * @Input () : decorator to passe value"
   * @Output () : to communicate with a parent
   * EventEmitter : is an angular thing
   * */
  @Input() event: any;
  @Output() testClick = new EventEmitter();
  // @Output() someValue: string = "test Value";

  private getHighlight() {
    const earlyStart = this.event && this.event.time === "8:00 am";

    return {
      green: earlyStart,
      bold: earlyStart
    };
  }
  private getAccentuation(): string {
    if (this.event && this.event.time === "8:00 am") {
      return "green bold";
    }
  }
  private getInlineStyle(): object {
    if (this.event && this.event.time === "8:00 am") {
      return { "font-style": "italic" };
    }
  }
}
