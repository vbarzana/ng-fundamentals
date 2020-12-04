import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {IEvent} from '../shared/event.model';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
    isDirty = true;
    private newEvent: IEvent;

    constructor(private eventsService: EventService, private router: Router) {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues: IEvent) {
        this.eventsService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
}
