import {EVENTS_DATA} from '../../../misc/event-data';
import {Injectable} from '@angular/core';
import {IEvent, ISession} from './index';
import {Observable, of} from 'rxjs';
import {catchError, delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EventService {
    constructor(private http: HttpClient) {
    }

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
            .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
    }

    getEvent(id: number): Observable<IEvent> {
        return this.http.get<IEvent>(`/api/events/${id}`)
            .pipe(catchError(this.handleError<IEvent>('getEvent')));
    }

    saveEvent(event: IEvent) {
        event.id = EVENTS_DATA.length + 1;
        event.sessions = [];
        EVENTS_DATA.push(event);
    }

    updateEvent(eventToModify: IEvent) {
        const position = EVENTS_DATA.findIndex(event => event.id === eventToModify.id);
        EVENTS_DATA[position] = eventToModify;
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        const lowerSearch = searchTerm.toLocaleLowerCase();
        const results: ISession[] = EVENTS_DATA.reduce((acc: ISession[], event: IEvent) => {
            const matchingSessions = event.sessions.filter((session: ISession) => {
                if (session.name.toLocaleLowerCase().indexOf(lowerSearch) > -1) {
                    session.eventId = event.id;
                    return session;
                }
                return null;
            });
            return acc.concat(matchingSessions);
        }, []);
        return of(results);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
