/// <reference path="../../node_modules/immutable/dist/immutable.d.ts" />
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
var immutable_1 = require("immutable");
var InputBox = (function () {
    function InputBox() {
        this.inputText = new core_1.EventEmitter();
    }
    InputBox.prototype.emitText = function (text) {
        this.inputText.emit(text);
    };
    InputBox.prototype.ngDoCheck = function () {
        console.log('Change detection run in the InputBox component');
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
// template标签引用
var TodoList = (function () {
    function TodoList() {
        this.toggle = new core_1.EventEmitter();
    }
    // toggleComplete(index:number){
    //   this.toggle.emit(index);
    // }
    TodoList.prototype.ngDoCheck = function () {
        console.log('Change detection run in the TodoList component');
    };
    return TodoList;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TodoList.prototype, "todos", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", core_1.TemplateRef)
], TodoList.prototype, "itemsTemplate", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TodoList.prototype, "toggle", void 0);
TodoList = __decorate([
    core_1.Component({
        selector: 'todo-list',
        template: "\n    <ul>\n        <!-- <li *ngFor=\"let todo of todos; let index=index\" [class.completed]=\"todo.completed\">\n          <input type=\"checkbox\" [checked]=\"todo.completed\" (change)=\"toggleComplete(index)\" />\n          {{todo.label}}\n        </li> -->\n        <template *ngFor=\"let todo of todos; template:itemsTemplate\"></template>\n    </ul>\n  "
    }),
    __metadata("design:paramtypes", [])
], TodoList);
var TodoApp = (function () {
    // public todos:Todo[];
    function TodoApp() {
        // this.todos =[{label:'buy milk',completed:false},{label:'do sth',completed:true}];
        this.todos = immutable_1.List.of({
            label: 'buy milk', completed: false
        }, {
            label: 'do sth', completed: true
        });
    }
    TodoApp.prototype.toggleComplete = function (todo) {
        // todo.completed=!todo.completed
        this.todos = todo.updateIn(this.todos, function (todo) {
            var newTodo = {
                label: todo.label,
                completed: !todo.completed
            };
            return newTodo;
        });
        console.log(this.todos);
    };
    TodoApp.prototype.addTodo = function (value) {
        this.todos = this.todos.push({ label: value, completed: false });
    };
    TodoApp.prototype.ngDoCheck = function () {
        console.log('Change detection run in the TodoApp component');
    };
    return TodoApp;
}());
__decorate([
    core_1.ContentChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], TodoApp.prototype, "itemsTemplate", void 0);
__decorate([
    core_1.ViewChildren(TodoList),
    __metadata("design:type", core_1.QueryList)
], TodoApp.prototype, "todoLists", void 0);
TodoApp = __decorate([
    core_1.Component({
        selector: 'todo-app',
        template: "\n    <div><text-input inputPlaceholder=\"New todo...\" buttonLabel=\"Add\" (inputText)=\"addTodo($event)\">Add new item:</text-input></div>\n    <todo-list [todos]=\"todos\" (toggle)=\"toggleComplete($event)\" [itemsTemplate]=\"itemsTemplate\"></todo-list>\n  ",
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], TodoApp);
// tabs demo
var Tab = (function () {
    // 前向引用
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
// tab分组件
// tab标题
var TabTitle = (function () {
    function TabTitle() {
        this.tabSelected = new core_1.EventEmitter();
    }
    TabTitle.prototype.handleClick = function () {
        this.tabSelected.emit(this);
    };
    return TabTitle;
}());
__decorate([
    core_1.Output('selected'),
    __metadata("design:type", core_1.EventEmitter)
], TabTitle.prototype, "tabSelected", void 0);
TabTitle = __decorate([
    core_1.Component({
        selector: 'tab-title',
        styles: ["\n    .tab-title {\n      display: inline-block;\n      cursor: pointer;\n      padding: 5px;\n      border: 1px solid #ccc;\n    }\n  "],
        template: "\n    <div class='tab-title' (click)=\"handleClick()\"><ng-content></ng-content></div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TabTitle);
// tab内容
var TabContent = (function () {
    function TabContent() {
        this.isActive = false;
    }
    return TabContent;
}());
TabContent = __decorate([
    core_1.Component({
        selector: 'tab-content',
        styles: ["\n    .tab-content{\n      border: 1px solid #ccc;\n      border-top: none;\n      padding: 5px;\n    }\n  "],
        template: "\n    <div class=\"tab-content\" [hidden]=\"!isActive\">\n      <ng-content></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TabContent);
// tab主体
var TabsMain = (function () {
    function TabsMain() {
        this.tabChange = new core_1.EventEmitter();
    }
    TabsMain.prototype.select = function (index) {
        var contents = this.tabContents.toArray();
        contents[this.active].isActive = false;
        this.active = index;
        contents[this.active].isActive = true;
        this.tabChange.emit(index);
    };
    TabsMain.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.tabTitles
            .map(function (t) { return t.tabSelected; })
            .forEach(function (t, i) {
            t.subscribe(function (_) {
                _this.select(i);
            });
        });
        this.active = 0;
        this.select(0);
    };
    return TabsMain;
}());
__decorate([
    core_1.Output('tabChange'),
    __metadata("design:type", core_1.EventEmitter)
], TabsMain.prototype, "tabChange", void 0);
__decorate([
    core_1.ContentChildren(TabTitle),
    __metadata("design:type", core_1.QueryList)
], TabsMain.prototype, "tabTitles", void 0);
__decorate([
    core_1.ContentChildren(TabContent),
    __metadata("design:type", core_1.QueryList)
], TabsMain.prototype, "tabContents", void 0);
TabsMain = __decorate([
    core_1.Component({
        selector: 'tabs-main',
        styles: ["\n    .tab {\n        display: inline-block;\n      }\n      .tab-nav {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n  "],
        template: "\n    <div class=\"tab\">\n      <div class=\"tab-nav\">\n        <ng-content select=\"tab-title\"></ng-content>\n      </div>\n      <ng-content select=\"tab-content\"></ng-content>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], TabsMain);
var SwApp = (function () {
    function SwApp() {
        this.isvalid = true;
        // this.todos =[{label:'buy milk',completed:false},{label:'do sth',completed:true}]
        this.tooltip = 'first declarations';
    }
    SwApp.prototype.toggleComplete = function (todo) {
        // this.todos[index].completed=!this.todos[index].completed
        todo.completed = !todo.completed;
        console.log('todo', todo);
        if (todo.completed) {
            console.log('已置为已完成');
        }
        else {
            console.log('已置为未完成');
        }
    };
    // addTodo(value){
    //   this.todos.push({label:value,completed:false})
    // }
    SwApp.prototype.tabChanged = function (tab) {
        console.log(tab);
    };
    SwApp.prototype.tabChange = function (index) {
        // console.log(index);
    };
    SwApp.prototype.ngDoCheck = function () {
        console.log('Change detection run in the SwApp component');
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
        declarations: [SwApp, directive_1.Tooltip, TodoList, InputBox, Tabs, Tab, TabsMain, TabContent, TabTitle, TodoApp],
        bootstrap: [SwApp]
    }),
    __metadata("design:paramtypes", [])
], SwAppModule);
exports.SwAppModule = SwAppModule;
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(SwAppModule);
//# sourceMappingURL=ngapp.js.map