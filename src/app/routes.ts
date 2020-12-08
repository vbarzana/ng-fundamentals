import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';

import {
    CreateEventComponent,
    CreateSessionComponent,
    EventDetailsComponent,
    EventListComponent,
    EventListResolver,
    EventResolver
} from './events/index';

export const appRoutes: Routes = [
    {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
