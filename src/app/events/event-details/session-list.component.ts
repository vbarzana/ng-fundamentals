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
        const byVotes = sortBy === 'votes';
        return this.visibleSessions.sort(
            (session1: ISession, session2: ISession) => {
                if (byVotes) {
                    return session1.voters?.length >= session2.voters?.length ? -1 : 1;
                }
                return session1[sortBy] >= session2[sortBy] ? 1 : -1;
            }
        );
    }
}
