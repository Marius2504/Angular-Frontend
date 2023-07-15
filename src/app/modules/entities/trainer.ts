export class Trainer {
    public id:number = 0;
    public name: string = ""
    public age: number = 0
    public phoneNumber: string = ""
    public email: string = ""

    constructor(id:number = 0,name: string = "", age: number = 0, phoneNumber: string = "", email: string = "") {
        this.id = id;
        this.name = name;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}