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
var data_service_1 = require("./data.service");
var PhoneComponent = (function () {
    function PhoneComponent(dataService) {
        this.dataService = dataService;
        this.items = [];
    }
    PhoneComponent.prototype.addItem = function (name, price) {
        this.dataService.addData(name, price);
    };
    PhoneComponent.prototype.ngOnInit = function () {
        this.items = this.dataService.getData();
    };
    return PhoneComponent;
}());
PhoneComponent = __decorate([
    core_1.Component({
        selector: 'phone-comp',
        templateUrl: 'app/services-dependency-injection/phone-template.html',
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [data_service_1.DataService])
], PhoneComponent);
exports.PhoneComponent = PhoneComponent;
//# sourceMappingURL=phone.component.js.map