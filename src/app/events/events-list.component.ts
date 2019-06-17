import { Component, OnInit } from "@angular/core";import { EventService } from "./shared/event.service";import { ToastrService } from "../common/toastr.service";/* * [event] -> to pass data from one component to the child * eventClick -> come from the child event emitter (event-thumbnail) *             -> when it's fired call the handleEventClicked in the parent (events-list) *             -> $event -> data emitted by the thumbnail (foo) * *  ngfor      -> is a structural directive, it means it's going to change the shape of the dom. Add or remove html. *             -> the expression inside create a LOCAL variable, ngfor will duplicate the element as many times as *             -> needed. *             -> Not only the element can be duplicate * * */@Component({  selector: "events-list",  template: `    <div>      <h1>Upcoming event</h1>      <hr />      <div class="row">        <div *ngFor="let event of events; trackBy: trackByFn" class="col-md-5">          <event-thumbnail            (click)="handleThumbnailClick(event.name)"            #thumbnail            [event]="event"          ></event-thumbnail>        </div>      </div>    </div>  `})export class EventsListComponent implements OnInit {  /*   * Same as :   *  public constructor() {   *    this.enventService = eventService;   *  }   * */  public events: any;  public constructor(    private eventService: EventService,    private toastr: ToastrService  ) {}  /*   * When using ngOnInit() it's better to implement the OnInit Interface to save some   * angular compilation   * */  public ngOnInit(): void {    this.events = this.eventService.getEvents();  }  public handleThumbnailClick(eventName: string): any {    this.toastr.success(eventName);  }  public trackByFn(index: any, item: any): any {    return index;  }}