import {EVENTS_DATA} from '../../../misc/event-data.js';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class EventService {
    getEvents(): Subject<any> {
        const subject = new Subject();
        setTimeout(() => {
            subject.next(EVENTS_DATA);
            subject.complete();
        }, 1000);

        return subject;
    }

    getEvent(id: number) {
        return EVENTS_DATA.find(evt => evt.id === id);
    }
}
