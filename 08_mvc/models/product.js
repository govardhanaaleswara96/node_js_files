const products = [];
module.exports = class Product {
  constructor(name, email, age, gender, city) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.gender = gender;
    this.city = city;
  }
  save() {
    products.push(this);
  }
  static fetchAll() {
    return products;
  }
};
