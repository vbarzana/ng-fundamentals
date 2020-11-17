import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .pad-left {
            margin-left: 5px;
        }

        .well div {
            color: #BBBBBB;
        }
    `]
})
export class EventThumbnailComponent {
    @Input() event: any;
}
