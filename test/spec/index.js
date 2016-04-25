var expect = require('chai').expect;

describe('random-hammertime: ', function () {

  var randomHammerTime = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomHammerTime()).to.be.a('number');
    }
  });
});
