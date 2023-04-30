const chai = window.chai
const expect = chai.expect

describe('rot13', () => {
    it("rot13('SERR PBQR PNZ') convertToRoman should return a string", () => {
        expect(rot13("SERR PBQR PNZC")).to.be.a('string')
    })
    it("rot13('SERR PBQR PNZC') should decode to the string FREE CODE CAMP", () => {
        expect(rot13("SERR PBQR PNZC")).to.deep.equal("FREE CODE CAMP")
    })  
    it("rot13('SERR CVMMN!') should decode to the string FREE PIZZA!", () => {
        expect(rot13("SERR CVMMN!")).to.deep.equal("FREE PIZZA!")
    }) 
    it("rot13('SERR YBIR?') should decode to the string FREE LOVE?", () => {
        expect(rot13("SERR YBIR?")).to.deep.equal("FREE LOVE?")
    }) 
    it("rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.') should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.", () => {
        expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).to.deep.equal("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")
    })                     
})
