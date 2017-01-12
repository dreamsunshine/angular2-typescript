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
var sites_1 = require("./sites");
// import {SwApp} from "./switchng2/ngapp";
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'list';
        this.mysite = 'something';
        this.sites = [new sites_1.Site(1, 'google'), new sites_1.Site(1, 'bing'), new sites_1.Site(1, 'baidu')];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h1>{{title}}</h1>\n    <h2>my love:{{mysite}}</h2>\n    <p>\u5217\u8868</p>\n    <ul>\n      <li *ngFor=\"let site of sites\">{{site.name}}</li>\n    </ul>\n    <click-me></click-me>\n    <ss-form></ss-form> \n  "
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
var SwApp = (function () {
    function SwApp() {
        this.todos = ['vue', 'ng2'];
    }
    return SwApp;
}());
SwApp = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'dist/swapp.html'
    }),
    __metadata("design:paramtypes", [])
], SwApp);
exports.SwApp = SwApp;
//# sourceMappingURL=app.component.js.map