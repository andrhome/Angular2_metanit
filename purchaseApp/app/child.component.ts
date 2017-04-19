import { Input, Component } from '@angular/core';

@Component ({
    selector: 'child-comp',
    template: `<p>User's name: {{userName}}</p>
                <p>User's age: {{userAge}}</p>`
})
export class ChildComponent {
    @Input() userName: string;
    _userAge: number;

    @Input()
    set userAge(age: number) {
        if(age < 0)
            this._userAge = 0;
        else if(age > 100)
            this._userAge = 100;
        else
            this._userAge = age;
    }

    get userAge() {return this._userAge;}
}




// Learn TypeScript
/* interface Shape {
    name: string;
    printArea: () => void;
}

class Rectangle implements Shape {
    name: string = 'Rectangle';

    height: number;
    width: number;

    constructor(h: number, w: number) {
        this.height = h;
        this.width = w;
    }

    printArea() {
        let area: number = this.height + this.width;
        console.log(`Area of ${this.name} is ${area}!`);
    }
}

class Circle implements Shape {
    name: string = 'Circle';

    radius: number;

    constructor(r: number) {
        this.radius = r;
    }

    printArea() {
        let area = Math.PI * Math.pow(this.radius, 2);
        console.log(`Area of ${this.name} is ${area}!`);
    }
}

let shapes: Array<Shape> = new Array<Shape>();
shapes[0] = new Rectangle(100, 100);
shapes[1] = new Circle(30);

for (let i = 0; i < shapes.length; i++) {
    let currentShape = shapes[i];
    currentShape.printArea();
} */

