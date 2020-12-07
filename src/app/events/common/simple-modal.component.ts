import {Component, Input} from '@angular/core';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styleUrls: ['simple-modal.component.scss']
})
export class SimpleModalComponent {
    @Input() public title: string;
}
