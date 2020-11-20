import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService, IEvent} from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: IEvent;

    constructor(private eventsService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        if (!isNaN(id)) {
            this.event = this.eventsService.getEvent(id);
        }
    }

}
