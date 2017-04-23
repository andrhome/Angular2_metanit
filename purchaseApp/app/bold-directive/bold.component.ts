import { Component } from '@angular/core';

@Component({
    selector: 'bold-directive',
    templateUrl: 'app/bold-directive/bold-directive-template.html'
})
export class BoldComponent {
    number: number = 12;
    size1: string = this.number + 'px';

    constructor() {}

    changeSize(val: number) {
        if(!val) {
            this.number++;
            this.size1 = this.number + 'px';
        } else{
            this.size1 = val + 'px';
        }
    }
}