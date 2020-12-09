import {Injectable} from '@angular/core';
import {IUser} from './user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Injectable()
export class AuthService {
    public currentUser: IUser;
    public isLoggedIn = false;

    constructor(private http: HttpClient) {
    }

    loginWithUserAndPassword(userName: string, password: string) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const loginInfo = {
            password,
            username: userName
        };
        return this.http.post('/api/login/', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            .pipe(catchError(error => of(false)));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    checkAuthenticationStatus() {
        this.http.get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    this.currentUser = <IUser>data;
                }
            }))
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        if (!this.currentUser) {
            return;
        }
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}
