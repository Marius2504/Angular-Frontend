import { Login } from "./login";

export class Register extends Login{
    name:string = ""
    isTrainer:boolean = false;
    age:number = 0;
    constructor(email:string="",password:string="",name:string = "",isTrainer:boolean= false,age:number= 0) {
       super(email,password)
       this.name=name;
       this.isTrainer=isTrainer;
       this.age =age;
    }


}