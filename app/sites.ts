export class Site {
  constructor(
    public id:number,
    public name:string
  ){}
}

export class Form{
  constructor(
    public id:number,
    public name:string,
    public url:string,
    public alexa?:number
    ){}
}