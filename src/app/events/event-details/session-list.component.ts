import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ISession} from '../shared/index';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})
export class SessionListComponent implements OnChanges {
    @Input() private sessions: ISession[];
    @Input() private filterBy: string;
    @Input() private sortBy: string;

    private visibleSessions: ISession[] = [];

    ngOnChanges(changes: SimpleChanges) {
        if (!this.sessions) {
            return void 0;
        }
        this.filterSessions(this.filterBy);
        this.sortSessions(this.sortBy);
    }

    filterSessions(filterBy: string) {
        if (!filterBy || filterBy === 'all') {
            return this.visibleSessions = this.sessions;
        }
        return this.visibleSessions = this.sessions.filter((session: ISession) => session?.level.toLocaleLowerCase() === filterBy);
    }

    sortSessions(sortBy: string) {
        const sorterFn = sortBy === 'votes'
            ? this.sortByVotesDescending
            : this.sortByFieldAscending.bind(this, sortBy);

        return this.visibleSessions.sort(sorterFn);
    }

    sortByFieldAscending(field: string, session1: ISession, session2: ISession) {
        return session1.name >= session2.name ? 1 : -1;
    }

    sortByVotesDescending(session1: ISession, session2: ISession) {
        return session1.voters?.length >= session2.voters?.length ? -1 : 1;
    }
}
