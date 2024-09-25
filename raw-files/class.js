// function Person(){

// }
class Customer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.department = "fire";
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static getPhoneNumber(phone) {
    if(phone.includes('0')){
        console.log('YES')
    }
    // return this.phone;
  }
}

const customerOne = new Customer("Obi", "Keita", "Finance")
// const customerTwo = new Customer("Azubike", "Samson", "Cleaning")
// console.log(customerOne.getFullName(), customerTwo.getFullName())
// console.log(Customer.getPhoneNumber("08133165161"))


class Contact extends Customer{
    constructor(phone, address, city, firstName, lastName, department){
        super(firstName, lastName, department)
        this.phone = phone
        this.address =address
        this.city = city

    }
}

// const contactOne = new Contact("08133165161", "123 Main St", "New York", customerOne.firstName, customerOne.lastName, customerOne.department )
// console.log(contactOne.getFullName())

class InterestItems extends Customer{
    constructor(beverages, groceries,firstName,lastName){
        super(firstName, lastName)
        this.beverages = beverages
        groceries = groceries
    }
}

const interestItemsOne = new InterestItems({one: "Milo", two:"4 cousins"}, {one: "Vegetable", two : "fruits"}, customerOne.firstName, customerOne.lastName)
console.log(interestItemsOne.getFullName())