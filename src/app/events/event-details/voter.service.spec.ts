import {VoterService} from './voter.service';
import {ISession} from '../shared/event.model';
import {of} from 'rxjs';

describe('VoterService', () => {
    let voterService: VoterService;
    let mockHttp;
    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
        voterService = new VoterService(mockHttp);
    });

    describe('deleteVoter', () => {
        it('should remove a voters from a given session', () => {
            const session = {id: 6, voters: ['johnsnow', 'martinfowler']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'johnsnow');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('martinfowler');
        });

        it('should call http with the right URL', () => {
            const session = {id: 6, voters: ['johnsnow', 'martinfowler']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'johnsnow');
            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/johnsnow');
        });
    });

    describe('addVoter', () => {
        it('should add a voter the session', () => {
            const session = {id: 6, voters: ['martinfowler']};
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, 'johnsnow');

            expect(session.voters.length).toBe(2);
            expect(session.voters[0]).toBe('martinfowler');
        });

        it('should call http with the right URL', () => {
            const session = {id: 6, voters: ['johnsnow', 'martinfowler']};
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, 'johnsnow');
            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/johnsnow', {}, jasmine.any(Object));
        });
    });

});
