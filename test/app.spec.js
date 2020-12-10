const assert = require('assert');
const {add} = require('../src/app');
const {expect} = require('chai');

describe("Add function tests", () => {

  it("should add two numbers together", () => {
   const res = add(2,2);
   expect(res).to.be.eq(4);
  });

  it('should be able to handle one number', () => {
    const res = add(2);
    expect(res).to.be.eq(2)
  });

  it("should be able to handle 0 vlaues", () => {
    const res = add();
    expect(res).to.be.eq(0)
  });

  it("should return 0 if input is not a number", () => {
    const res = add(2, "hi");
    expect(res).to.be.eq(0)
  })
  it("should alwase output a number", () => {
    const res = add(2,1);
    expect(res).to.be.an('number')
  })
});
