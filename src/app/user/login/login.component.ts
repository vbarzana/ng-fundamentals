import {Component} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    private userName: string;
    private password: string;

    constructor(private authService: AuthService) {
    }

    public login(formValues) {
        this.authService.loginWithUserAndPassword(formValues.userName, formValues.password);
    }
}
