import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    `,
    styleUrls: []
})
export class EventsAppComponent {
    title = 'ng-fundamentals';
}
