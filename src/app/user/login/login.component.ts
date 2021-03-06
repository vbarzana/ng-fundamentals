import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em {
            float: right;
            color: #E05C65;
            padding-left: 10px;
        }
    `]
})
export class LoginComponent {
    public userName: string;
    public password: string;
    public mouseoverLogin: boolean;
    public loginInvalid = false;

    constructor(private authService: AuthService, private router: Router) {
    }

    login(formValues) {
        this.authService.loginWithUserAndPassword(formValues.userName, formValues.password)
            .subscribe((user) => {
                if (!user) {
                    return this.loginInvalid = true;
                }
                this.router.navigate(['/events']);
            });

    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
