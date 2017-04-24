"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var bold_component_1 = require("./bold-directive/bold.component");
var bold_directive_1 = require("./bold-directive/bold.directive");
var ngif_component_1 = require("./ngif-directive/ngif.component");
var while_component_1 = require("./while-structure-directive/while.component");
var while_directive_1 = require("./while-structure-directive/while.directive");
var phone_component_1 = require("./services-dependency-injection/phone.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent,
            bold_directive_1.BoldDirective,
            bold_component_1.BoldComponent,
            ngif_component_1.NgIf,
            while_directive_1.WhileDirective,
            while_component_1.WhileComponent,
            phone_component_1.PhoneComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map