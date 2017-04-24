import { Component } from '@angular/core';

@Component({
    selector: 'ng-if-for',
    templateUrl: 'app/ngif-directive/ng-if-for.html'
})
export class NgIf{
    // NgIf directive
    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }

    // NgFor directive
    items: string[] = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];

    // NgSwitch directive
    count: number = 5;
}