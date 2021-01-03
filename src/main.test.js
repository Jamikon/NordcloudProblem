import main from "./main";

let validPoint = [
    [1,1],
    [2,2]
];

let validLinkStation = [
    [1,1,1],
    [2,2,2]
];

describe("testing main()", () => {
    describe("invalid inputs throw", () => {
        test("bad point type throws", () => {
            expect(() => main("abc")).toThrowError("invalid input")
        });
        test("bad point length throws", () => {
            expect(() => main([1,2,3,4])).toThrowError("invalid point length")
        });
        test("bad point sub array type throws", () => {
            expect(() => main([["abc",2]])).toThrowError("invalid point sub type(s)")
        });

        test("bad linkStation type throws", () => {
            expect(() => main(undefined,"abc")).toThrowError("invalid input")
        });
        test("bad linkStation length throws", () => {
            expect(() => main(undefined,[1,2,3,4])).toThrowError("invalid linkStation length")
        });
        test("bad linkStation sub array type throws", () => {
            expect(() => main(undefined,[["abc",2,3]])).toThrowError("invalid linkStation sub type(s)")
        });
    });
    describe("valid input", () => {
        test("no input does not throw", ()=> {
            expect(()=>main()).not.toThrow();
        });
        test("valid custom points does not throw", ()=> {
            expect(()=>main(validPoint)).not.toThrow();
        });
        test("valid custom linkStation does not throw", ()=> {
            expect(()=>main(undefined, validLinkStation)).not.toThrow();
        });
        test("function returns an array", ()=>{
            expect(typeof main()).toBe("object")
        });
        test("0 length inputs returns 0 length output", () => {
            expect(main([],[]).length).toBe(0);
        });
        test("0 length points returns 0 length output", () => {
            expect(main([]).length).toBe(0);
        });
        test("0 length linkStations returns length of points length output", () => {
            expect(main(validPoint, []).length).toBe(validPoint.length);
        });

        describe("valid input returns expected result", () => {
            test("point[1,1], linkstation[1,1,1] returns \"Best link station for point 1,1 is 1,1 with power 1\"", () => {
                expect(main([[1,1]], [[1,1,1]])[0]).toBe("Best link station for point 1,1 is 1,1 with power 1")
            });
            test("point[1,1], linkstation[2,2,2] returns \"Best link station for point 1,1 is 2,2 with power 0.3431457505076197\"", () => {
                expect(main([[1,1]], [[2,2,2]])[0]).toBe("Best link station for point 1,1 is 2,2 with power 0.3431457505076197")
            });
            test("point[1,1], linkstation[2,2,0] returns \"No link station within reach for point 1,1\"", () => {
                expect(main([[1,1]], [[2,2,0]])[0]).toBe("No link station within reach for point 1,1")
            });
        })
    })
})