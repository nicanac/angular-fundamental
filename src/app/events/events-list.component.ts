import { Component } from '@angular/core';

/*
 * [event] -> to pass data from one component to the child
 * eventClick -> come from the child event emmiter (event-thumbnail)
 *             -> when it's fired call the handleEventClicked in the parent (events-list)
 *             -> $event -> data emited by the thumbnail (foo)
 * */
@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming event</h1>
      <hr />
      <event-thumbnail
        (eventClick)="handleEventClicked($event)"
        [event]="eventList"
      ></event-thumbnail>
    </div>
  `
})
export class EventsListComponent {
  eventList = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
  handleEventClicked(data) {
    console.log(data);
  }
}
