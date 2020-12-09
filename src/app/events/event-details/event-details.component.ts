import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventService, IEvent, ISession} from '../shared/index';

@Component({
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
    public event: IEvent;
    public addMode = false;
    public filterBy = 'all';
    public sortBy = 'name';

    constructor(private eventsService: EventService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach(data => {
            this.event = data.event;
            this.addMode = false;
        });
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventsService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    handleAddSessionCancelled(): void {
        this.addMode = false;
    }
}
