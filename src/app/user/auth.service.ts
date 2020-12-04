import {Injectable} from '@angular/core';
import {IUserModel} from './user.model';

@Injectable()
export class AuthService {
    public currentUser: IUserModel;

    loginWithUserAndPassword(userName: string, password: string) {
        // @todo: login the user against some storage
        this.currentUser = {
            id: 1,
            userName: userName,
            firstName: 'Victor',
            lastName: 'Daddy'
        };
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    updateCurrentUser(firstName: string, lastName: string) {
        if (!this.currentUser) {
            return;
        }
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}
