import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
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
    public events = this.activatedRoute.snapshot.data.events;

    constructor(private toastService: ToastrService, private activatedRoute: ActivatedRoute) {
//        this.events = this.activatedRoute.snapshot.data.events;
    }

    // ngOnInit() {
    //     this.events = this.activatedRoute.snapshot.data.events;
    // }

    handleThumbnailClick(name: string) {
        this.toastService.success(name);
    }
}
