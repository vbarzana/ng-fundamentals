import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {IEvent} from '../shared/event.model';

@Component({
    templateUrl: './create-event.component.html',
    styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
    isDirty = true;

    constructor(private eventsService: EventService, private router: Router) {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveEvent(formValues: any) {
        this.eventsService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }
}
