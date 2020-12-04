import {EVENTS_DATA} from '../../../misc/event-data';
import {Injectable} from '@angular/core';
import {IEvent} from './index';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

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
}
