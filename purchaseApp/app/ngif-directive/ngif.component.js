"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var NgIf = (function () {
    function NgIf() {
        // NgIf directive
        this.condition = true;
        // NgFor directive
        this.items = ["Apple iPhone 7", "Huawei Mate 9", "Samsung Galaxy S7", "Motorola Moto Z"];
        // NgSwitch directive
        this.count = 5;
    }
    NgIf.prototype.toggle = function () {
        this.condition = !this.condition;
    };
    return NgIf;
}());
NgIf = __decorate([
    core_1.Component({
        selector: 'ng-if-for',
        templateUrl: 'app/ngif-directive/ng-if-for.html'
    })
], NgIf);
exports.NgIf = NgIf;
//# sourceMappingURL=ngif.component.js.map