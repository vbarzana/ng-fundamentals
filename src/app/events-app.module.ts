import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavbarComponent} from './navbar/navbar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        ToastrService,
        EventService
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavbarComponent,
        EventDetailsComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class EventsAppModule {
}
