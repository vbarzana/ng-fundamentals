import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

    @Input()
    event: any;

    constructor() {
    }

    ngOnInit() {
    }

}
