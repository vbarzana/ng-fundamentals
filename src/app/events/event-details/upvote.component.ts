import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'upvote',
    templateUrl: './upvote.component.html',
    styleUrls: ['./upvote.component.scss']
})
export class UpvoteComponent {
    @Input() count: number;
    iconColor: string;

    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'white';
    }

    @Output()
    public vote: EventEmitter<any> = new EventEmitter();

    onClick() {
        this.vote.emit({});
    }
}
