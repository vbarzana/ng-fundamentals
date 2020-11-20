import {EVENTS_DATA} from '../../../misc/event-data';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IEvent} from './event.model';

@Injectable()
export class EventService {
    getEvents(): IEvent[] {
        // const subject = new Subject();
        // setTimeout(() => {
        //     subject.next(EVENTS_DATA);
        //     subject.complete();
        // }, 1000);
        // return subject;
        return EVENTS_DATA;
    }

    getEvent(id: number): IEvent {
        return EVENTS_DATA.find(evt => evt.id === id);
    }
}
