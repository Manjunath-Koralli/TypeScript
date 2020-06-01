class Customer {
    firstName : string;
    lastName : string;

    constructor(firstName : string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

//let myCustomer = new Customer();
/*myCustomer.firstName = "Manju";
myCustomer.lastName = "Koralli";*/
let myCustomer = new Customer("Manju","koralli");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
