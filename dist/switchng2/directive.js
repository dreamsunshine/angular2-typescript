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
var Overlay = (function () {
    function Overlay() {
        var el = document.createElement('div');
        el.className = "tip";
        this.el = el;
    }
    Overlay.prototype.close = function () {
        this.el.hidden = true;
    };
    Overlay.prototype.open = function (el, text) {
        this.el.innerHTML = text;
        this.el.hidden = false;
        var rect = el.nativeElement.getBoundingClientRect();
        this.el.style.left = rect.left + 'px';
        this.el.style.top = rect.top + 'px';
    };
    Overlay.prototype.attach = function (target) {
        target.appendChild(this.el);
    };
    Overlay.prototype.detach = function () {
        this.el.parentNode.removeChild(this.el);
    };
    return Overlay;
}());
exports.Overlay = Overlay;
var OverlayMock = (function () {
    function OverlayMock() {
    }
    OverlayMock.prototype.close = function () { };
    OverlayMock.prototype.open = function (el, text) { };
    OverlayMock.prototype.attach = function (target) { };
    OverlayMock.prototype.detach = function () { };
    return OverlayMock;
}());
var Tooltip = (function () {
    function Tooltip(el, overlay) {
        this.el = el;
        this.overlay = overlay;
        this.defaultTip = 'ddd';
        this.overlay.attach(el.nativeElement);
        el.nativeElement.hidden = true;
    }
    Object.defineProperty(Tooltip.prototype, "defaulttip", {
        set: function (name) {
            this.defaultTip = name || this.defaultTip;
        },
        enumerable: true,
        configurable: true
    });
    Tooltip.prototype.onMouseEnter = function () {
        this.overlay.open(this.el, this.tooltip || this.defaultTip);
    };
    Tooltip.prototype.OnMouseLeave = function () {
        this.overlay.close();
    };
    return Tooltip;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], Tooltip.prototype, "defaulttip", null);
__decorate([
    core_1.Input("asTooltip"),
    __metadata("design:type", String)
], Tooltip.prototype, "tooltip", void 0);
__decorate([
    core_1.HostListener('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Tooltip.prototype, "OnMouseLeave", null);
Tooltip = __decorate([
    core_1.Directive({
        selector: "[asTooltip]"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, Overlay])
], Tooltip);
exports.Tooltip = Tooltip;
//# sourceMappingURL=directive.js.map