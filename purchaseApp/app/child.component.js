"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ChildComponent = (function () {
    function ChildComponent() {
    }
    Object.defineProperty(ChildComponent.prototype, "userAge", {
        get: function () { return this._userAge; },
        set: function (age) {
            if (age < 0)
                this._userAge = 0;
            else if (age > 100)
                this._userAge = 100;
            else
                this._userAge = age;
        },
        enumerable: true,
        configurable: true
    });
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "userName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ChildComponent.prototype, "userAge", null);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-comp',
        template: "<p>User's name: {{userName}}</p>\n                <p>User's age: {{userAge}}</p>"
    })
], ChildComponent);
exports.ChildComponent = ChildComponent;
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
//# sourceMappingURL=child.component.js.map