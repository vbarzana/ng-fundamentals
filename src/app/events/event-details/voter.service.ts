import {Injectable} from '@angular/core';
import {ISession} from '../shared/event.model';
import {catchError} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

const BASE_URL = `/api/events`;

@Injectable()
export class VoterService {
    constructor(private http: HttpClient) {
    }

    deleteVoter(eventId: number, session: ISession, voterName: string): void {
        const url = `${BASE_URL}/${eventId}/sessions/${session.id}/voters/${voterName}`;
        this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter')))
            .subscribe();
    }

    addVoter(eventId: number, session: ISession, voterName: string): void {
        const url = `${BASE_URL}/${eventId}/sessions/${session.id}/voters/${voterName}`;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError('addVoter')))
            .subscribe();
    }

    userHasVoted(session: ISession, voterName: string): boolean {
        return session.voters.some(voter => voter === voterName);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}

