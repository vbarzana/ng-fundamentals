import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    public profileForm: FormGroup;
    private firstName: FormControl;
    private lastName: FormControl;

    constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
        if (!authService.currentUser) {
            this.router.navigate(['/user/login']);
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
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
                .subscribe(() => {
                    this.toastr.success('Profile saved!');
                });
        }
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}
