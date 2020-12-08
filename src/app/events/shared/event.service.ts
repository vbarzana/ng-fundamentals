import {EVENTS_DATA} from '../../../misc/event-data';
import {Injectable} from '@angular/core';
import {IEvent, ISession} from './index';
import {from, Observable, of} from 'rxjs';
import {delay, filter} from 'rxjs/operators';

@Injectable()
export class EventService {
    getEvents(): Observable<IEvent[]> {
        return of(EVENTS_DATA).pipe(delay(500));
    }

    getEvent(id: number): IEvent {
        return EVENTS_DATA.find(evt => evt.id === id);
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
}
