import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
    event: any;

    constructor(private eventsService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        if (!isNaN(id)) {
            this.event = this.eventsService.getEvent(id);
        }
    }

}
