const chai = window.chai
const expect = chai.expect

describe('aconvertToRoman', () => {
    it("convertToRoman should return a string", () => {
        expect(convertToRoman(2)).to.be.a('string')
    })
 
    it("convertToRoman(3) should return the string III.", () => {
        expect(convertToRoman(3)).to.deep.equal('III')
    })  
    it("convertToRoman(4) should return the string IV.", () => {
        expect(convertToRoman(4)).to.deep.equal('IV')
    })   
    it("convertToRoman(7) should return the string VII.", () => {
        expect(convertToRoman(7)).to.deep.equal('VII')
    }) 
    it("convertToRoman(9) should return the string IX.", () => {
        expect(convertToRoman(9)).to.deep.equal('IX')
    })
    it("convertToRoman(12) should return the string XII.", () => {
        expect(convertToRoman(12)).to.deep.equal('XII')
    })  
    it("convertToRoman(16) should return the string XVI.", () => {
        expect(convertToRoman(16)).to.deep.equal('XVI')
    }) 
    it("convertToRoman(29) should return the string XXIX.", () => {
        expect(convertToRoman(29)).to.deep.equal('XXIX')
    })
    it("convertToRoman(44) should return the string XLIV.", () => {
        expect(convertToRoman(44)).to.deep.equal('XLIV')
    }) 
    it("convertToRoman(45) should return the string XLV.", () => {
        expect(convertToRoman(45)).to.deep.equal('XLV')
    })  
    it("convertToRoman(68) should return the string LXVIII.", () => {
        expect(convertToRoman(68)).to.deep.equal('LXVIII')
    })  
    it("convertToRoman(83) should return the string LXXXIII.", () => {
        expect(convertToRoman(83)).to.deep.equal('LXXXIII')
    })                                        
    it("convertToRoman(97) should return the string XCVII.", () => {
        expect(convertToRoman(97)).to.deep.equal('XCVII')
    }) 
    it("convertToRoman(99) should return the string XCIX.", () => {
        expect(convertToRoman(99)).to.deep.equal('XCIX')
    }) 
    it("convertToRoman(279) should return the string CCLXXIX.", () => {
        expect(convertToRoman(279)).to.deep.equal('CCLXXIX')
    })     
    it("convertToRoman(400) should return the string CD.", () => {
        expect(convertToRoman(400)).to.deep.equal('CD')
    }) 
    it("convertToRoman(500) should return the string D.", () => {
        expect(convertToRoman(500)).to.deep.equal('D')
    })

    it("convertToRoman(501) should return the string DI.", () => {
        expect(convertToRoman(501)).to.deep.equal('DI')
    })
    it("convertToRoman(510) should return the string DI.", () => {
        expect(convertToRoman(510)).to.deep.equal('DX')
    })    
       
    it("convertToRoman(609) should return the string DCIX.", () => {
        expect(convertToRoman(609)).to.deep.equal('DCIX')
    })     

    it("convertToRoman(649) should return the string DCXLIX.", () => {
        expect(convertToRoman(649)).to.deep.equal('DCXLIX')
    }) 
  
    it("convertToRoman(798) should return the string DCCXCVIII.", () => {
        expect(convertToRoman(798)).to.deep.equal('DCCXCVIII')
    })  
    it("convertToRoman(891) should return the string DCCCXCI.", () => {
        expect(convertToRoman(891)).to.deep.equal('DCCCXCI')
    }) 
    it("convertToRoman(1000) should return the string M.", () => {
        expect(convertToRoman(1000)).to.deep.equal('M')
    })  
    it("convertToRoman(1004) should return the string MIV.", () => {
        expect(convertToRoman(1004)).to.deep.equal('MIV')
    }) 
    it("convertToRoman(1006) should return the string MVI.", () => {
        expect(convertToRoman(1006)).to.deep.equal('MVI')
    })   
    it("convertToRoman(1023) should return the string MXXIII.", () => {
        expect(convertToRoman(1023)).to.deep.equal('MXXIII')
    }) 
    it("convertToRoman(2014) should return the string MMXIV.", () => {
        expect(convertToRoman(2014)).to.deep.equal('MMXIV')
    }) 
    it("convertToRoman(3999) should return the string MMMDMXCIX.", () => {
        expect(convertToRoman(3999)).to.deep.equal('MMMCMXCIX')
    })                           
                                     
})