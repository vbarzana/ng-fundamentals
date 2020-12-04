import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    public profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private authService: AuthService, private router: Router) {
        if (!authService.currentUser) {
            this.router.navigate(['user/login']);
        }
    }

    ngOnInit() {
        const {currentUser} = this.authService;
        this.firstName = new FormControl(currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);
        this.lastName = new FormControl(currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')]);

        this.profileForm = new FormGroup({
            firstName: this.firstName,
            lastName: this.lastName
        });
    }

    validateLastName() {
        return this.lastName.valid || this.lastName.untouched;
    }

    validateFirstName() {
        return this.firstName.valid || this.firstName.untouched;
    }

    saveProfile(formValues) {
        if (this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.router.navigate(['events']);
        }
    }

    cancel() {
        this.router.navigate(['events']);
    }
}
