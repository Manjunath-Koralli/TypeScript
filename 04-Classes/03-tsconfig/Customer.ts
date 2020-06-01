//to run this file
//tsc --noEmitOnError Customer.ts -- .js file wont get generated
/*setting up targetting file 
    tsc --target ES5 --noEmitOnError customer.ts */
/*tsc --init 
in cmd to generate tsconfig.json*/

class Customer {
    private _firstName : string;
    private _lastName: string;
    

    constructor(firstName : string, lastName: string){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public set firstName(value: string){
        this._firstName = value;
    }
    public get firstName():string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }


}

let myCustomer = new Customer("Manju","koralli");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
