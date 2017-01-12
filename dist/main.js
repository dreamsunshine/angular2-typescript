"use strict";
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
if (mainapp) {
    platform.bootstrapModule(app_module_1.AppModule);
}
if (ngapp) {
    platform.bootstrapModule(app_module_1.SwAppModule);
}
//# sourceMappingURL=main.js.map