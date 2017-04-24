import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<bold-directive></bold-directive>
                <hr>
                <ng-if-for></ng-if-for>
                <hr>
                <while-structure-directive></while-structure-directive>
                <hr>
                <phone-comp></phone-comp>`
})
export class AppComponent {}