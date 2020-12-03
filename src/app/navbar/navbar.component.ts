import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

    constructor(private authService: AuthService) {
    }

}
