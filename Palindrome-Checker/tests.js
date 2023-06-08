const chai = window.chai
const expect = chai.expect

describe('adpalindromed', () => {
    it('palindrome("eye") should return a boolean', () => {
        expect(palindrome("eye")).to.be.a("boolean");
    })
    it('palindrome("eye") should return true', () => {
        expect(palindrome("eye")).to.deep.equal(true)
    })
    it('palindrome("not a palindrome") should return false', () => {
        expect(palindrome("not a palindrome")).to.deep.equal(false)
    })        
    it('palindrome("race car") should return true', () => {
        expect(palindrome("race car")).to.deep.equal(true)
    }) 
    it('palindrome("A man, a plan, a canal. Panama") should return true', () => {
        expect(palindrome("A man, a plan, a canal. Panama")).to.deep.equal(true)
    }) 
    it('palindrome("never odd or even") should return true', () => {
        expect(palindrome("never odd or even")).to.deep.equal(true)
    }) 
    it('palindrome("almostomla") should return false', () => {
        expect(palindrome("almostomla")).to.deep.equal(false)
    }) 
    it('palindrome("nope") should return false', () => {
        expect(palindrome("nope")).to.deep.equal(false)
    })
    it('palindrome("My age is 0, 0 si ega ym.") should return true', () => {
        expect(palindrome("My age is 0, 0 si ega ym.")).to.deep.equal(true)
    })
    it('palindrome("1 eye for of 1 eye.") should return false', () => {
        expect(palindrome("1 eye for of 1 eye.")).to.deep.equal(false)
    })
    it('palindrome("0_0 (: /-\ :) 0-0") should return true', () => {
        expect(palindrome("0_0 (: /-\ :) 0-0")).to.deep.equal(true)
    })  
    it('palindrome("five|\_/|four") should return false', () => {
        expect(palindrome("five|\_/|four")).to.deep.equal(false)
    })                                                      
})
