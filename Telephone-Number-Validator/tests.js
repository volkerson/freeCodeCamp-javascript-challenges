const chai = window.chai
const expect = chai.expect

describe('telephoneCheck', () => {
    it('telephoneCheck("555-555-5555") should return a boolean', () => {
        expect(telephoneCheck("555-555-5555")).to.be.a("boolean")
    })
    it('telephoneCheck("555-555-5555") should return true', () => {
        expect(telephoneCheck("555-555-5555")).to.deep.equal(true)
    })  
    it('telephoneCheck("1 555-555-5555") should return true', () => {
        expect(telephoneCheck("1 555-555-5555")).to.deep.equal(true)
    }) 
    it('telephoneCheck("1 (555) 555-5555") should return true', () => {
        expect(telephoneCheck("1 (555) 555-5555")).to.deep.equal(true)
    }) 
    it('telephoneCheck("1 555 555 5555") should return true', () => {
        expect(telephoneCheck("1 555 555 5555")).to.deep.equal(true)
    })
    it('telephoneCheck("(555)555-5555") should return true', () => {
        expect(telephoneCheck("(555)555-5555")).to.deep.equal(true)
    })     
    it('telephoneCheck("5555555555") should return true', () => {
        expect(telephoneCheck("5555555555")).to.deep.equal(true)
    }) 
    it('telephoneCheck("1 456 789 4444") should return true', () => {
        expect(telephoneCheck("1 456 789 4444")).to.deep.equal(true)
    })  
    it('telephoneCheck("555-5555") should return false', () => {
        expect(telephoneCheck("555-5555")).to.deep.equal(false)
    }) 
    it('telephoneCheck("5555555") should return false', () => {
        expect(telephoneCheck("55555555")).to.deep.equal(false)
    })  
    it('telephoneCheck("1 555)555-5555") should return false', () => {
        expect(telephoneCheck("1 555)555-5555")).to.deep.equal(false)
    }) 
    it('telephoneCheck("123**&!!asdf#") should return false', () => {
        expect(telephoneCheck("123**&!!asdf#")).to.deep.equal(false)
    }) 
    it('telephoneCheck("55555555") should return false', () => {
        expect(telephoneCheck("55555555")).to.deep.equal(false)
    })
    it('telephoneCheck("(6054756961)")  should return false', () => {
        expect(telephoneCheck("(6054756961)")).to.deep.equal(false)
    }) 
    it('telephoneCheck("2 (757) 622-7382") should return false', () => {
        expect(telephoneCheck("2 (757) 622-7382")).to.deep.equal(false)
    }) 
    it('telephoneCheck("0 (757) 622-7382") should return false', () => {
        expect(telephoneCheck("0 (757) 622-7382")).to.deep.equal(false)
    }) 
    it('telephoneCheck("-1 (757) 622-7382") should return false', () => {
        expect(telephoneCheck("-1 (757) 622-7382")).to.deep.equal(false)
    }) 
    it('telephoneCheck("2 757 622-7382") should return false', () => {
        expect(telephoneCheck("2 757 622-7382")).to.deep.equal(false)
    }) 
    it('telephoneCheck("10 (757) 622-7382") should return false', () => {
        expect(telephoneCheck("10 (757) 622-7382")).to.deep.equal(false)
    })  
    it('telephoneCheck("27576227382") should return false', () => {
        expect(telephoneCheck("27576227382")).to.deep.equal(false)
    }) 
    it('telephoneCheck("(275)76227382") should return false', () => {
        expect(telephoneCheck("(275)76227382")).to.deep.equal(false)
    })  
    it('telephoneCheck("2(757)622-7382") should return false', () => {
        expect(telephoneCheck("2(757)622-7382")).to.deep.equal(false)
    }) 
    it('telephoneCheck("555)-555-5555") should return false', () => {
        expect(telephoneCheck("555)-555-5555")).to.deep.equal(false)
    }) 
    it('telephoneCheck("(555-555-5555") should return false', () => {
        expect(telephoneCheck("(555-555-5555")).to.deep.equal(false)
    })  
    it('telephoneCheck("(555)5(55?)-5555") should return false', () => {
        expect(telephoneCheck("(555)5(55?)-5555")).to.deep.equal(false)
    }) 
    it('telephoneCheck("55 55-55-555-5") should return false', () => {
        expect(telephoneCheck("55 55-55-555-5")).to.deep.equal(false)
    }) 
    it('telephoneCheck("11 555-555-5555") should return false', () => {
        expect(telephoneCheck("11 555-555-5555")).to.deep.equal(false)
    })           

})