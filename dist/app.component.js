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
// 生命周期
var panel = (function () {
    function panel() {
    }
    panel.prototype.ngOnChanges = function (changes) {
        console.log('On changes', changes);
    };
    panel.prototype.ngOnInit = function () {
        console.log('Initialized');
    };
    panel.prototype.ngDoCheck = function () {
        console.log('Do check');
    };
    panel.prototype.ngOnDestroy = function () {
        console.log('Destroy');
    };
    panel.prototype.ngAfterContentInit = function () {
        console.log('After content init');
    };
    panel.prototype.ngAfterContentChecked = function () {
        console.log('After content checked');
    };
    panel.prototype.ngAfterViewInit = function () {
        console.log('After view init');
    };
    panel.prototype.ngAfterViewChecked = function () {
        console.log('After view checked');
    };
    return panel;
}());
panel = __decorate([
    core_1.Component({
        selector: 'panel',
        inputs: ['title', 'caption'],
        template: '<ng-content></ng-content>'
    }),
    __metadata("design:paramtypes", [])
], panel);
exports.panel = panel;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'list';
        this.mysite = 'something';
        this.sites = [new sites_1.Site(1, 'google'), new sites_1.Site(1, 'bing'), new sites_1.Site(1, 'baidu')];
        this.links = [{ href: '/', name: '首页' }, { href: '/app.html', name: 'app' }];
        this.counter = 0;
    }
    AppComponent.prototype.toggle = function () {
        this.counter += 1;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div>\n      <ul>\n        <li *ngFor=\"let link of links\"><a href=\"{{link.href}}\">{{link.name}}</a></li>\n      </ul>\n    </div>\n    <h1>{{title}}</h1>\n    <h2>my love:{{mysite}}</h2>\n    <p>\u5217\u8868</p>\n    <ul>\n      <li *ngFor=\"let site of sites\">{{site.name}}</li>\n    </ul>\n    <click-me></click-me>\n    <ss-form></ss-form>\n    <!--\n    <div>\n      <button (click)=\"toggle()\">Toggle</button>\n      <div *ngIf=\"counter % 2 == 0\">\n        <panel caption=\"Sample caption\" title=\"Sample\">Hello world!</panel>\n      </div>\n    </div> -->\n    \n  "
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