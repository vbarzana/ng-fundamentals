import {SessionListComponent} from './session-list.component';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {ISession} from '../shared/event.model';

describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService: AuthService;
    let mockVotersService: VoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVotersService);
    });

    describe('ngOnChanges', () => {
        it('should filter the sessions correctly', () => {
            component.sessions = <ISession[]>[
                {name: 'session 1', level: 'beginner'},
                {name: 'session 2', level: 'intermediate'},
                {name: 'session 3', level: 'beginner'}
            ];
            component.filterBy = 'beginner';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort the sessions correctly', () => {
            component.sessions = <ISession[]>[
                {name: 'session 3', level: 'beginner'},
                {name: 'session 1', level: 'intermediate'},
                {name: 'session 2', level: 'beginner'}
            ];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;
            component.ngOnChanges();

            expect(component.visibleSessions[0].name).toBe('session 1');
            expect(component.visibleSessions[1].name).toBe('session 2');
            expect(component.visibleSessions[2].name).toBe('session 3');
        });
    });
});
