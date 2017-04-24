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
var BoldDirective = (function () {
    function BoldDirective() {
    }
    Object.defineProperty(BoldDirective.prototype, "getFontSize", {
        get: function () {
            return this.defaultSize;
        },
        enumerable: true,
        configurable: true
    });
    return BoldDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BoldDirective.prototype, "defaultSize", void 0);
__decorate([
    core_1.HostBinding('style.fontSize'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], BoldDirective.prototype, "getFontSize", null);
BoldDirective = __decorate([
    core_1.Directive({
        selector: '[bold]'
    }),
    __metadata("design:paramtypes", [])
], BoldDirective);
exports.BoldDirective = BoldDirective;
//# sourceMappingURL=bold.directive.js.map