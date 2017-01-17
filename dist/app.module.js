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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var appCp = require("./app.component");
var clickme_component_1 = require("./clickme.component");
var form_component_1 = require("./form.component");
var siteform_component_1 = require("./siteform.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [appCp.AppComponent, clickme_component_1.clickmeComponent, form_component_1.FormComponent, siteform_component_1.siteformComponent, appCp.panel],
        bootstrap: [appCp.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
var SwAppModule = (function () {
    function SwAppModule() {
    }
    return SwAppModule;
}());
SwAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [appCp.SwApp],
        bootstrap: [appCp.SwApp]
    }),
    __metadata("design:paramtypes", [])
], SwAppModule);
exports.SwAppModule = SwAppModule;
//# sourceMappingURL=app.module.js.map