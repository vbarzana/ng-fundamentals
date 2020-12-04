import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService, IEvent, ISession} from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    private event: IEvent;
    private addMode = false;
    private filterBy = 'all';
    private sortBy = 'name';

    constructor(private eventsService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        const id: number = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        if (!isNaN(id)) {
            this.event = this.eventsService.getEvent(id);
        }
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventsService.updateEvent(this.event);
        this.addMode = false;
    }

    handleAddSessionCancelled(): void {
        this.addMode = false;
    }
}
