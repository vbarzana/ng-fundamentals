import {Directive, ElementRef, Inject, OnInit} from '@angular/core';
import {JQ_TOKEN} from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;

    constructor(private ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
        this.el = ref.nativeElement;
    }

    ngOnInit() {
        this.el.addEventListener('click', e => {
            const dialog = this.$('#simple-modal').modal({});
        });
    }
}
