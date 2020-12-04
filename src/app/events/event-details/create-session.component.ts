import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ISession, restrictedWords} from '../shared/index';

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html'
})
export class CreateSessionComponent implements OnInit {
    @Output() private saveNewSession = new EventEmitter();
    @Output() private cancelAddSession = new EventEmitter();
    public newSessionForm: FormGroup;
    public name: FormControl;
    public presenter: FormControl;
    public duration: FormControl;
    public level: FormControl;
    public abstract: FormControl;


    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [
            restrictedWords(['foo', 'bar']),
            Validators.required,
            Validators.maxLength(400)
        ]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }

    saveSession(formValues: any): void {
        const session: ISession = {
            id: Math.random(),
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: formValues.voters
        };
        this.saveNewSession.emit(session);
    }

    handleCancelAddSession() {
        this.cancelAddSession.emit();
    }
}
