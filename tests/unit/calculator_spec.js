var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(calculator.runningTotal, 5)
  })

  it('it should subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  it('it should divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1)
    calculator.numberClick(2)
    calculator.numberClick(3)
    calculator.numberClick(4)
    calculator.numberClick(5)
    assert.equal(calculator.runningTotal, 12345)
  })

  it('it should chain multiple operations together', function(){
    calculator.operatorClick('+')
    assert.equal(calculator.previousTotal, 0)
  })

  it('it should clear the running total without affecting the calculation', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    calculator.clearClick()
    assert.equal(calculator.runningTotal, 0)
  })

});
