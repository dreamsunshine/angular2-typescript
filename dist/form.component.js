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
var FormComponent = (function () {
    function FormComponent() {
        this.active = true;
        this.urls = ['baidu.com', 'google.com', 'bing.com', 'soso.com'];
        this.model = new sites_1.Form(1, '百度', this.urls[0], 10000);
        this.submitted = false;
    }
    FormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    Object.defineProperty(FormComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.newSite = function () {
        var _this = this;
        this.model = new sites_1.Form(5, '', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'site-form',
        templateUrl: 'site-form.component.html'
    }),
    __metadata("design:paramtypes", [])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map