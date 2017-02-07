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
require("reflect-metadata");
var core_1 = require("@angular/core");
var BUFFER_SIZE = Symbol('buffer-size');
var Buffer = (function () {
    // 显式注入
    function Buffer(size) {
        this.size = size;
        console.log(this.size);
    }
    return Buffer;
}());
Buffer = __decorate([
    __param(0, core_1.Inject(BUFFER_SIZE)),
    __metadata("design:paramtypes", [Number])
], Buffer);
// @Injectable()
// class Socket{
//   constructor(private buffer:Buffer){}
// }
var Socket = (function () {
    function Socket(buffer) {
        this.buffer = buffer;
    }
    Socket.prototype.open = function () {
        this.isOpen = true;
    };
    return Socket;
}());
Socket = __decorate([
    __param(0, core_1.Inject(core_1.forwardRef(function () { return Buffer; }))),
    __metadata("design:paramtypes", [Buffer])
], Socket);
var injector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: BUFFER_SIZE, useValue: 42 }, Buffer,
    // Socket
    { provide: Socket, useClass: Socket }
]);
injector.get(Buffer);
var Certificate = (function () {
    function Certificate() {
    }
    return Certificate;
}());
var Crypto = (function () {
    function Crypto() {
    }
    return Crypto;
}());
var TLSConnection = (function () {
    function TLSConnection() {
    }
    return TLSConnection;
}());
var factoryInjector = core_1.ReflectiveInjector.resolveAndCreate([
    { provide: TLSConnection, useFactory: function (socket, crypto, certificate) {
            var connection = new TLSConnection();
            connection.socket = socket;
            connection.crypto = crypto;
            connection.certificate = certificate;
            socket.open();
            return connection;
        }, deps: [Socket, Crypto, Certificate] },
    { provide: BUFFER_SIZE, useValue: 32 },
    Buffer, Certificate, Crypto, Socket
]);
console.log(factoryInjector.get(TLSConnection));
//# sourceMappingURL=injector.js.map