import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ISession} from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() public sessions: ISession[];
    @Input() public filterBy: string;
    @Input() public sortBy: string;

    public visibleSessions: ISession[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (!this.sessions) {
            return;
        }
        if (!this.filterBy && !this.sortBy) {
            this.visibleSessions = this.sessions;
        }
        if (this.filterBy) {
            this.filterSessions(this.filterBy);
        }
        if (this.sortBy) {
            this.sortSessions(this.sortBy);
        }
    }

    filterSessions(filterBy: string) {
        if (!filterBy || filterBy === 'all') {
            return this.visibleSessions = this.sessions;
        }
        return this.visibleSessions = this.sessions.filter(
            (session: ISession) => session?.level.toLocaleLowerCase() === filterBy
        );
    }

    sortSessions(sortBy: string) {
        const sorterFn = sortBy === 'votes'
            ? sortByVotesDescending
            : sortByFieldAscending.bind(null, sortBy);

        return this.visibleSessions.sort(sorterFn);
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
