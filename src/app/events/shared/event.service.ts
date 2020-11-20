import {EVENTS_DATA} from '../../../misc/event-data.js';
import {Injectable} from '@angular/core';

@Injectable()
export class EventService {
    getEvents() {
        return EVENTS_DATA;
    }

    getEvent(id: number) {
        return EVENTS_DATA.find(evt => evt.id === id);
    }
}
