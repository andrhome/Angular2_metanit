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
var AppComponent = (function () {
    function AppComponent() {
        this.number = 12;
        this.size1 = this.number + 'px';
    }
    AppComponent.prototype.changeSize = function (val) {
        if (!val) {
            this.number++;
            this.size1 = this.number + 'px';
        }
        else {
            this.size1 = val + 'px';
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<div bold [defaultSize]=\"size1\">\n                    <h2>Hello Angular 2</h2>\n                    <p>Angular 2 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F</p>\n                    <p>Angular 2 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443</p>\n                    <p>Angular 2 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u0443\u044E</p>\n                    <p>Angular 2 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442</p>\n                    <p>Size: {{size1}}</p>\n                    <input type=\"text\" [(ngModel)]=\"val\">\n                    <button type=\"button\" (click)=\"changeSize(val)\">Change size</button>\n                </div>"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map