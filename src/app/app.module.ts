import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
