import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {EventsAppComponent} from './events-app.component';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';

import {
    EventService,
    EventListResolver,
    EventListComponent,
    EventRouteActivator,
    CreateEventComponent,
    SessionListComponent,
    EventDetailsComponent,
    CreateSessionComponent,
    EventThumbnailComponent,
    CollapsibleWellComponent
} from './events/index';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'})
    ],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        SessionListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateSessionComponent,
        CreateEventComponent,
        Error404Component,
        CollapsibleWellComponent,
        NavbarComponent
    ],
    providers: [
        EventService,
        EventRouteActivator,
        EventListResolver,
        AuthService,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})
export class EventsAppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        return window.confirm('Unsaved changes, do you really want to cancel?');
    }
    return true;
}
