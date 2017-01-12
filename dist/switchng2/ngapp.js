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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var directive_1 = require("./directive");
var SwApp = (function () {
    function SwApp() {
        this.isvalid = true;
        this.todos = ['vue', 'ng2'];
        this.tooltip = 'first declarations';
    }
    return SwApp;
}());
SwApp = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'dist/swapp.html',
        styles: [
            "\n      ul,li{\n        list-style:none\n      }\n      .completed{\n        text-decoration:line-through\n      }\n    "
        ],
        encapsulation: core_1.ViewEncapsulation.Emulated
    }),
    __metadata("design:paramtypes", [])
], SwApp);
exports.SwApp = SwApp;
var SwAppModule = (function () {
    function SwAppModule() {
        this.title = 'swtitle';
    }
    return SwAppModule;
}());
SwAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        providers: [directive_1.Overlay],
        declarations: [SwApp, directive_1.Tooltip],
        bootstrap: [SwApp]
    }),
    __metadata("design:paramtypes", [])
], SwAppModule);
exports.SwAppModule = SwAppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);
//# sourceMappingURL=ngapp.js.map