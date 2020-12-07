import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';

import {NavbarComponent} from './navbar/navbar.component';
import {EventsAppComponent} from './events-app.component';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {ToastrModule, ToastrService} from 'ngx-toastr';

import {
    CreateEventComponent,
    CreateSessionComponent,
    DurationPipe,
    EventDetailsComponent,
    EventListComponent,
    EventListResolver,
    EventRouteActivator,
    EventService,
    EventThumbnailComponent,
    SessionListComponent
} from './events/index';

import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CollapsibleWellComponent, JQ_TOKEN, ModalTriggerDirective, SimpleModalComponent} from './events/common/index';

const $ = window['$'];

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot(),
        RouterModule.forRoot(appRoutes, {relativeLinkResolution: 'legacy'})
    ],
    declarations: [
        Error404Component,
        EventsAppComponent,
        EventListComponent,
        SessionListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        CreateSessionComponent,
        CreateEventComponent,
        SimpleModalComponent,
        CollapsibleWellComponent,
        ModalTriggerDirective,
        NavbarComponent,
        DurationPipe
    ],
    providers: [
        AuthService,
        EventService,
        ToastrService,
        EventListResolver,
        EventRouteActivator,
        {
            provide: JQ_TOKEN,
            useValue: $
        },
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
