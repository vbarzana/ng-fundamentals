import {EVENTS_DATA} from '../../../misc/event-data';
import {Injectable} from '@angular/core';
import {IEvent} from './index';

@Injectable()
export class EventService {
    getEvents(): IEvent[] {
        return EVENTS_DATA;
    }

    getEvent(id: number): IEvent {
        return EVENTS_DATA.find(evt => evt.id === id);
    }
}
