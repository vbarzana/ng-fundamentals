import {Component} from '@angular/core';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
    isDirty = true;

    constructor(private router: Router) {
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    canDeactivateCreateEvent() {

    }
}
