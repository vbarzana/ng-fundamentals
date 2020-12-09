import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/auth.service';

@Component({
    selector: 'app-root',
    template: `
        <app-navbar></app-navbar>
        <router-outlet></router-outlet>
    `,
    styleUrls: []
})
export class EventsAppComponent implements OnInit {
    constructor(private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.checkAuthenticationStatus();
    }
}
