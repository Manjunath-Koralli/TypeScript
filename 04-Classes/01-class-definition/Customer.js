var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
//let myCustomer = new Customer();
/*myCustomer.firstName = "Manju";
myCustomer.lastName = "Koralli";*/
var myCustomer = new Customer("Manju", "koralli");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
