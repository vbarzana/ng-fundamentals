import {EVENTS_DATA} from '../../../misc/event-data';
import {Injectable} from '@angular/core';
import {IEvent} from './index';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable()
export class EventService {
    getEvents(): Observable<IEvent[]> {
        return of(EVENTS_DATA).pipe(delay(2000));
    }

    getEvent(id: number): IEvent {
        return EVENTS_DATA.find(evt => evt.id === id);
    }
}
