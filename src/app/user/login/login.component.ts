import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    private userName: string;
    private password: string;

    constructor(private authService: AuthService, private router: Router) {
    }

    login(formValues) {
        this.authService.loginWithUserAndPassword(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
