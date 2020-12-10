import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ISession} from '../shared/index';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() public sessions: ISession[];
    @Input() public filterBy: string;
    @Input() public sortBy: string;
    @Input() public eventId: number;

    public visibleSessions: ISession[] = [];

    constructor(private auth: AuthService, private voterService: VoterService) {
    }

    ngOnChanges() {
        if (!this.sessions) {
            return;
        }
        this.filterSessionsByLevel(this.filterBy);
        this.sortSessionsByField(this.sortBy === 'name' ? this.sortBy : 'votes');
    }

    filterSessionsByLevel(filterBy: string) {
        if (!filterBy || filterBy === 'all') {
            return this.visibleSessions = this.sessions;
        }
        return this.visibleSessions = this.sessions.filter(
            (session: ISession) => session?.level.toLocaleLowerCase() === filterBy
        );
    }

    sortSessionsByField(sortBy: string) {
        const sorterFn = sortBy === 'votes'
            ? sortByVotesDescending
            : sortByFieldAscending.bind(null, sortBy);

        return this.visibleSessions.sort(sorterFn);
    }

    userHasVoted(session: ISession) {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDescending);
        }
    }
}

function sortByFieldAscending(field: string, session1: ISession, session2: ISession): number {
    if (session1[field] > session2[field]) {
        return 1;
    } else if (session1[field] === session2[field]) {
        return 0;
    }
    return -1;
}

function sortByVotesDescending(session1: ISession, session2: ISession): number {
    return session2.voters?.length - session1.voters?.length;
}
