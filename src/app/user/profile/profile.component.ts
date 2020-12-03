import {Component, Injectable, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    public profileForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {
        if (!authService.currentUser) {
            this.router.navigate(['user/login']);
        }
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
        this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
