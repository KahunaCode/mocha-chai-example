/*jshint esversion: 6 */

class Human {
  constructor(name){
    this.name = name;
  }

  sayName(){
    return this.name;
  }
}

module.exports = Human;