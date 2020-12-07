import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public searchTerm = '';
    public foundSessions: ISession[] = null;

    constructor(public authService: AuthService, private eventService: EventService) {
    }

    searchSessions(searchTerm: string) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => this.foundSessions = sessions
        );
    }
}
