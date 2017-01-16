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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var directive_1 = require("./directive");
var InputBox = (function () {
    function InputBox() {
        this.inputText = new core_1.EventEmitter();
    }
    InputBox.prototype.emitText = function (text) {
        this.inputText.emit(text);
    };
    return InputBox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputBox.prototype, "inputPlaceholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], InputBox.prototype, "buttonLabel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InputBox.prototype, "inputText", void 0);
InputBox = __decorate([
    core_1.Component({
        selector: 'text-input',
        template: "\n    <!-- \u5185\u5BB9\u6295\u5F71 -->\n    <ng-content></ng-content>\n    <input [(ngModel)]=\"additem\" [placeholder]=\"inputPlaceholder\" type=\"text\" /><button (click)=\"emitText(additem); additem=''\">{{buttonLabel}}</button>\n    "
    }),
    __metadata("design:paramtypes", [])
], InputBox);
var TodoList = (function () {
    function TodoList() {
        this.toggle = new core_1.EventEmitter();
    }
    TodoList.prototype.toggleComplete = function (index) {
        this.toggle.emit(index);
    };
    return TodoList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], TodoList.prototype, "todos", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoList.prototype, "toggle", void 0);
TodoList = __decorate([
    core_1.Component({
        selector: 'todo-list',
        template: "\n    <ul>\n        <li *ngFor=\"let todo of todos; let index=index\" [class.completed]=\"todo.completed\">\n          <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"toggleComplete(index)\" />\n          {{todo.label}}\n        </li>\n    </ul>\n  "
    }),
    __metadata("design:paramtypes", [])
], TodoList);
// tabs demo
var Tab = (function () {
    function Tab(tabs) {
        this.tabs = tabs;
        this.tabs.addTab(this);
    }
    return Tab;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Tab.prototype, "title", void 0);
Tab = __decorate([
    core_1.Component({
        selector: 'tab',
        template: '<div [hidden]="!isActive"><ng-content></ng-content></div>'
    }),
    __param(0, core_1.Inject(core_1.forwardRef(function () { return Tabs; }))), __param(0, core_1.Host()),
    __metadata("design:paramtypes", [Tabs])
], Tab);
var Tabs = (function () {
    function Tabs() {
        this.tabChanged = new core_1.EventEmitter();
        this.tabs = [];
        this.active = 0;
    }
    Tabs.prototype.addTab = function (tab) {
        if (this.tabs.length == this.active) {
            tab.isActive = true;
        }
        this.tabs.push(tab);
    };
    Tabs.prototype.select = function (index) {
        this.tabs[this.active].isActive = false;
        this.active = index;
        this.tabs[index].isActive = true;
        this.tabChanged.emit(this.tabs[index]);
    };
    return Tabs;
}());
__decorate([
    core_1.Output('changed'),
    __metadata("design:type", core_1.EventEmitter)
], Tabs.prototype, "tabChanged", void 0);
Tabs = __decorate([
    core_1.Component({
        selector: 'tabs',
        styles: [
            "\n      .tab {\n        display: inline-block;\n      }\n      .tab-header {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n      .tab-header .is-active {\n        background-color: #eee;\n      }\n      .tab-header li {\n        display: inline-block;\n        cursor: pointer;\n        padding: 5px;\n        border: 1px solid #ccc;\n      }\n      .tab-content {\n        border: 1px solid #ccc;\n        border-top: none;\n        padding: 5px;\n      }\n    "
        ],
        template: "\n    <div class=\"tab\">\n      <ul class=\"tab-header\">\n        <li *ngFor=\"let tab of tabs;let index=index\" [class.is-active]=\"active==index\" (click)=\"select(index)\">{{tab.title}}</li>\n      </ul>\n      <div class=\"tab-content\"><ng-content></ng-content></div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], Tabs);
var SwApp = (function () {
    function SwApp() {
        this.isvalid = true;
        this.todos = [{ label: 'buy milk', completed: false }, { label: 'do sth', completed: true }];
        this.tooltip = 'first declarations';
    }
    SwApp.prototype.toggleComplete = function (index) {
        this.todos[index].completed = !this.todos[index].completed;
    };
    SwApp.prototype.addTodo = function (value) {
        this.todos.push({ label: value, completed: false });
    };
    SwApp.prototype.tabChanged = function (tab) {
        console.log(tab);
    };
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
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        providers: [directive_1.Overlay],
        declarations: [SwApp, directive_1.Tooltip, TodoList, InputBox, Tabs, Tab],
        bootstrap: [SwApp]
    }),
    __metadata("design:paramtypes", [])
], SwAppModule);
exports.SwAppModule = SwAppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);
//# sourceMappingURL=ngapp.js.map