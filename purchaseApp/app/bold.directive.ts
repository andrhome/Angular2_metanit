import {Directive, Input, HostBinding} from '@angular/core';

@Directive({
    selector: '[bold]'
})
export class BoldDirective{
    @Input() defaultSize: string;

    constructor() {}

    @HostBinding('style.fontSize') get getFontSize() {
        return this.defaultSize;
    }
}