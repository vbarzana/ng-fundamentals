import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {EventsAppComponent} from './events-app.component';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';

import {
    CreateEventComponent,
    EventDetailsComponent,
    EventListComponent,
    EventListResolver,
    EventRouteActivator,
    EventService,
    EventThumbnailComponent
} from './events/index';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        NavbarComponent
    ],
    providers: [
        ToastrService,
        EventService,
        EventRouteActivator,
        EventListResolver,
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
