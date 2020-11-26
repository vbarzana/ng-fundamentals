import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit, CanActivate {
    public profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {
        const {currentUser} = authService;
        if (!currentUser) {
            this.router.navigate(['user/login']);
        }
    }

    canActivate(route: ActivatedRouteSnapshot) {
        return !!this.authService.currentUser;
    }

    ngOnInit() {
        const {currentUser} = this.authService;
        const firstName = new FormControl(currentUser.firstName);
        const lastName = new FormControl(currentUser.lastName);
        this.profileForm = new FormGroup({
            firstName,
            lastName
        });
    }

    saveProfile(formValues) {
        console.log(formValues);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
