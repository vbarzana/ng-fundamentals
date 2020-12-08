import {Component, ElementRef, Inject, Input, ViewChild} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Component({
    selector: 'simple-modal',
    templateUrl: 'simple-modal.component.html',
    styleUrls: ['simple-modal.component.scss']
})
export class SimpleModalComponent {
    @Input() public title: string;
    @Input() public elementId: string;
    @Input() public closeOnBodyClick: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {
    }

    closeModal() {
        if (this.closeOnBodyClick !== 'false') {
            this.$(this.containerEl.nativeElement).modal('hide');
        }
    }
}
