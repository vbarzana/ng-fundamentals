import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';

import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        ToastrService,
        EventService
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        NavbarComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class EventsAppModule {
}
