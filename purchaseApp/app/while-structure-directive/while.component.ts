import { Component } from '@angular/core';

@Component({
    selector: 'while-structure-directive',
    templateUrl: 'app/while-structure-directive/while-template.html'
})
export class WhileComponent {
    condition: boolean = true;

    toggle() {
        this.condition = !this.condition;
    }
}