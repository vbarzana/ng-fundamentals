import {VoterService} from './voter.service';
import {HttpClient} from '@angular/common/http';
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
        it('should remove a session from the list of voters', () => {
            const session = {id: 6, voters: ['johnsnow', 'martinfowler']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'johnsnow');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('martinfowler');
        });
    });

});
