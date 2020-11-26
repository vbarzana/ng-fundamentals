import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {IEvent} from './shared/event.model';
import {map} from 'rxjs/operators';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events | async" class="col-md-5">
                    <app-event-thumbnail
                            (click)="handleThumbnailClick(event.name)"
                            [event]="event"
                    ></app-event-thumbnail>
                </div>
            </div>
        </div>
    `
})
export class EventListComponent {
    public events: Observable<IEvent[]> = this.activatedRoute.data.pipe(map(data => data.events));

    constructor(private toastService: ToastrService, private activatedRoute: ActivatedRoute) {
    }

    handleThumbnailClick(name: string) {
        this.toastService.success(name);
    }
}
