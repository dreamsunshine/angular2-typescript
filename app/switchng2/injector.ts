import 'reflect-metadata';
import {ReflectiveInjector,Inject,Injectable,OpaqueToken,Provider,forwardRef} from '@angular/core';
const BUFFER_SIZE=Symbol('buffer-size');
class Buffer{
  // 显式注入
  constructor(@Inject(BUFFER_SIZE) private size:Number){
    console.log(this.size);
  }
}

// @Injectable()
// class Socket{
//   constructor(private buffer:Buffer){}
// }
class Socket{
  isOpen:boolean;
  constructor(@Inject(forwardRef(()=>Buffer)) private buffer:Buffer){}
  open(){
    this.isOpen=true;
  }
}

let injector=ReflectiveInjector.resolveAndCreate([
  {provide:BUFFER_SIZE,useValue:42},Buffer,
  // Socket
  {provide:Socket,useClass:Socket}
  ]);

injector.get(Buffer);

class Certificate{}
class Crypto{}
class TLSConnection{
  public socket:Socket;
  public crypto:Crypto;
  public certificate:Certificate;
}

let factoryInjector=ReflectiveInjector.resolveAndCreate([
  {provide:TLSConnection,useFactory:(socket:Socket,crypto:Crypto,certificate:Certificate)=>{
    let connection=new TLSConnection();
    connection.socket=socket;
    connection.crypto=crypto;
    connection.certificate=certificate;
    socket.open();
    return connection;
  },deps:[Socket,Crypto,Certificate]},
  {provide:BUFFER_SIZE,useValue:32},
  Buffer,Certificate,Crypto,Socket
])
console.log(factoryInjector.get(TLSConnection))