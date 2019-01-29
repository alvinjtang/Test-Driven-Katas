const expect = require('chai').expect;
const wrap = require('./wrap');

describe('wrap', () => {
  it('is a function', () => {
    expect(typeof wrap).to.eql('function');
  });

  it('Returns empty string if empty string was provided', () => {
    expect(wrap('', 100)).to.equal('');
  });

  it('works!', () => {
      expect(wrap('hello world', 3)).to.equal('hel\nlo\nwor\nld');
  })
});
