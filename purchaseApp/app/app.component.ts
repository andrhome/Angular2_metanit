import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div bold [defaultSize]="size1">
                    <h2>Hello Angular 2</h2>
                    <p>Angular 2 представляет модульную архитектуру приложения</p>
                    <p>Angular 2 представляет модульную архитектуру</p>
                    <p>Angular 2 представляет модульную</p>
                    <p>Angular 2 представляет</p>
                    <p>Size: {{size1}}</p>
                    <input type="text" [(ngModel)]="val">
                    <button type="button" (click)="changeSize(val)">Change size</button>
                </div>`
})
export class AppComponent {
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