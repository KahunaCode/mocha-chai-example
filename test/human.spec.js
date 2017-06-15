var chai = require("chai");

var expect = chai.expect;
var should = chai.should();

var Human = require('../human.js');

//console.log(james);

describe('Human Class', function(){

	var human = Human;
  var james;

  //this will put a var james at the top of every function
  //make sure to make a global var not a local var inside the beforeEach
  beforeEach(function(){
    james = new Human('james');
  });

	it('should be a function', function(){
		expect(human).to.be.a('function');
	});

  it('should have property name', function(){
    //var james = new Human('james');
    expect(james.name).to.equal('james');
  });

  it('should have a method sayName', function(){
    //var james = new Human('james');
    expect(james.sayName).to.be.a('function');
    expect(james.sayName()).to.equal('james');
  });

});
