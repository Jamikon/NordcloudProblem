import getLinkStationPower from "./getLinkStationPower";

describe("getLinkStationPower", () => {

    describe("invalid input throws", () => {
        test("invalid point throws", () => {
            expect(()=> getLinkStationPower(undefined, [1,2,3])).toThrowError("invalid Point")
        });
        test("invalid LinkStation throws", () => {
            expect(()=> getLinkStationPower([1,2], undefined)).toThrowError("invalid LinkStation")
        });
        test("invalid point type throws", () => {
            expect(()=> getLinkStationPower("abc", [1,2,3])).toThrowError("invalid Point")
        });
        test("invalid LinkStation type throws", () => {
            expect(()=> getLinkStationPower([1,2], "abc")).toThrowError("invalid LinkStation")
        });
        test("invalid Point length throws", ()=>{
            expect(()=> getLinkStationPower([1,2,3], [1,2,3])).toThrowError("invalid Point length");
        });
        test("invalid LinkStation length throws", ()=>{
            expect(()=> getLinkStationPower([1,2], [1,2,3,4])).toThrowError("invalid LinkStation length");
        });
        describe("invalid Point array items", ()=> {
            test("item 0 = undefined throws", ()=> {
                expect(() => getLinkStationPower([undefined, 2], [1,2,3])).toThrowError("invalid input");
            });
            test("item 1 = undefined throws", ()=> {
                expect(() => getLinkStationPower([1, undefined], [1,2,3])).toThrowError("invalid input");
            });
        });
        describe("invalid LinkStation array items", ()=> {
            test("item 0 = undefined throws", ()=> {
                expect(() => getLinkStationPower([1, 2], [undefined,2,3])).toThrowError("invalid input");
            });
            test("item 1 = undefined throws", ()=> {
                expect(() => getLinkStationPower([1, 2], [1,undefined,3])).toThrowError("invalid input");
            });
            test("item 2 = undefined throws", ()=> {
                expect(() => getLinkStationPower([1, 2], [1,2,undefined])).toThrowError("invalid input");
            });
        })
    });

    test("valid simple values returns expected value", () => {
        expect(getLinkStationPower([1,1], [1,1,1])).toBe(1)
    });
    test("valid simple values returns expected value", () => {
        expect(getLinkStationPower([1,1], [1,1,10])).toBe(100)
    });
    test("valid complex values returns expected value", () => {
        expect(getLinkStationPower([2,2], [1,1,2])).toBe(
            (2 - Math.sqrt(((2-1)**2)+((2-1)**2)))**2
        )
    });
});