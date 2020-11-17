import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar></app-navbar>
        <app-events-list></app-events-list>
    `,
    styleUrls: []
})
export class EventsAppComponent {
    title = 'ng-fundamentals';
}
