import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "event-thumbnail",
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event.name }}</h2>
      <p>
        {{ event.date }}<br />
        {{ event.time }}<br />
        \${{ event.price }}<br />
        {{ event.location.address }}
        {{ event.location.city }}
        {{ event.location.country }}

        <img src="{{ event.imageUrl }}" /><br />
      </p>
    </div>
  `,
  styles: []
})
export class EventThumbnailComponent {
  /*
   * @Input () : decorator to passe value
   * @Output () : to communicate with a parent
   * EventEmitter : is an angular thing
   * */
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
}
