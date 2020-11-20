import {Component, Input} from '@angular/core';
import {IEvent} from '../shared/event.model';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    getStartTimeClass() {
        return this.event.time === '8:00 am' ? 'green bold' : '';
    }
}
