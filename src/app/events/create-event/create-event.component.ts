import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {IEvent} from '../shared/event.model';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
    public isDirty = true;
    public event: IEvent = {
        date: undefined,
        id: 0,
        imageUrl: '',
        name: '',
        price: 0,
        time: '',
        sessions: [],
        location: {address: null, city: null, country: null}
    };

    constructor(private eventsService: EventService, private router: Router) {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues: IEvent) {
        this.eventsService.saveEvent(formValues).subscribe((event: IEvent) => {
            this.event = event;
            this.isDirty = false;
            this.router.navigate(['/events']);
        });
    }
}
