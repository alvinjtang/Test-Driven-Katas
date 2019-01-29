
const expect = require('chai').expect



describe('wrap', () =>{
    it('is a function', () =>{
        expect(typeof wrap).to.equal("function")
    });

    it('Returns empty string if empty string was provided', () =>{
        expect(wrap("", 100)).to.equal("")
    })


}
)