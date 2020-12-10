import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {SessionListComponent} from './session-list.component';
import {DebugElement} from '@angular/core';
import {AuthService} from '../../user/auth.service';
import {VoterService} from './voter.service';
import {ISession} from '../shared/event.model';
import {UpvoteComponent} from './upvote.component';
import {DurationPipe} from '../shared/duration.pipe';
import {CollapsibleWellComponent} from '../common/collapsible-well.component';

describe('SessionListComponent integrated', () => {
    let fixture: ComponentFixture<SessionListComponent>;
    let component: SessionListComponent;
    let element: HTMLElement;
    let debugEl: DebugElement;

    beforeEach(waitForAsync(() => {
        const mockAuthService = {
            isAuthenticated: () => true,
            currentUser: {userName: 'martinfowler'}
        };
        const mockVoterService = {
            userHasVoted: () => true
        };

        TestBed.configureTestingModule({
            imports: [],
            declarations: [
                SessionListComponent,
                UpvoteComponent,
                DurationPipe,
                CollapsibleWellComponent
            ],
            providers: [
                {provide: AuthService, useValue: mockAuthService},
                {provide: VoterService, useValue: mockVoterService}
            ],
            schemas: []
        });
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SessionListComponent);
        component = fixture.componentInstance;
        debugEl = fixture.debugElement;
        element = fixture.nativeElement;
    });

    describe('initial display', () => {
        it('should have the correct session title', () => {
            component.sessions = <ISession[]>[{
                id: 3,
                name: 'Session 1',
                abstract: 'My super cool session',
                level: 'beginner',
                duration: 1,
                voters: ['jonhsnow', 'martinfowler']
            }];
            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 4;

            component.ngOnChanges();
            fixture.detectChanges();

            expect(element.querySelector('[class=well-title]').textContent).toContain('Session 1');
        });
    });
});
