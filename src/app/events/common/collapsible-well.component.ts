import {Component, Input} from '@angular/core';

@Component({
    selector: 'collapsible-well',
    templateUrl: './collapsible-well.component.html'
})
export class CollapsibleWellComponent {
    private visible = true;
    @Input()
    private title: string;

    toggleContent() {
        this.visible = !this.visible;

    }
}
