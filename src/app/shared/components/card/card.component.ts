import { Component, Input } from '@angular/core';


@Component({
    selector: 'ap-card',
    templateUrl: './card.component.html'
})

export class CardComponent {

    @Input() title: string = '';

    @Input() class: string = ""

}