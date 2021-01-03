import {power, reach, distance} from "./Constants"


describe("Power constant", () => {

    describe("testing logic of Power", () => {

        test("power returns an integer", () => {
            expect(typeof power(0, 0)).toBe("number");
        });

        test("if distance > reach, return 0", () => {
            expect(power(0, 1)).toBe(0);
        });

        test("if distance = 0 and reach = 0, return 0", () => {
            expect(power(0, 0)).toBe(0);
        });

        test("negative reach does not throw", () => {
            expect(typeof power(-1, 0)).toBe("number");
        });

        test("negative distance does not throw", () => {
            expect(typeof power(0, -1)).toBe("number");
        });

    });

    describe("variable testing", () => {

        describe("distance = 0 ...", () => {

            test("reach = 1, return 1^2 (1)", () => {
                expect(power(1, 0)).toBe(1**2);
            });

            test("reach = 2, return 2^2 (4)", () => {
                expect(power(2, 0)).toBe(2**2);
            });

            test("reach = 10, return 10^2 (100)", () => {
                expect(power(10, 0)).toBe(10**2);
            });
        });

        describe("distance = 1 ...", () => {

            test("reach = 1, return 0^2 (0)", () => {
                expect(power(1, 1)).toBe(0**2);
            });

            test("reach = 2, return 1^2 (1)", () => {
                expect(power(2, 1)).toBe(1**2);
            });

            test("reach = 10, return 9^2 (81)", () => {
                expect(power(10, 1)).toBe(9**2);
            });
        });

        describe("distance = 0.5 ...", () => {

            test("reach = 1, return (0.5)^2 (0.25)", () => {
                expect(power(1, 0.5)).toBe(0.5**2);
            });

            test("reach = 2, return (1.5)^2 (2.25)", () => {
                expect(power(2, 0.5)).toBe(1.5**2);
            });

            test("reach = 10, return (9.5)^2 (90.25)", () => {
                expect(power(10, 0.5)).toBe(9.5**2);
            });
        })

    });

    describe("error handling", () => {

        describe("undefined input", () => {
            test("no params throws", () => {
                expect(() => {
                    power()
                }).toThrowError('invalid');
            });
            test("no reach throws", () => {
                expect(() => {
                    power(undefined, 0)
                }).toThrowError('invalid reach');
            });
            test("no distance throws", () => {
                expect(() => {
                    power(0, undefined)
                }).toThrowError('invalid distance');
            })
        });

        describe("invalid input", () => {

            test("invalid reach throws", () => {
                expect(() => {
                    power("a",0)
                }).toThrowError('invalid reach');
            });

            test("invalid distance throws", () => {
                expect(() => {
                    power(0,"a")
                }).toThrowError('invalid distance');
            });

        })
    })

});

describe("Reach constant", () => {
    test("invalid input throws", () => {
        expect(() => {reach(undefined)}).toThrowError("invalid LinkStation")
    });
    test("non object input throws", () => {
        let nonObject = "not an object";
        expect(()=>{reach(nonObject)}).toThrowError("invalid LinkStation")
    });

    describe("invalid length of input throws", () => {
        test("length = 2", () => {
            expect(()=>{reach([1,2])}).toThrowError("invalid LinkStation length")
        });
        test("length = 4", () => {
            expect(()=>{reach([1,2,3,4])}).toThrowError("invalid LinkStation length")
        });
    });

    describe("invalid array items throws", () => {
        test("1 != number", () => {
            expect(()=>{reach(["a", 2, 3])}).toThrowError("invalid LinkStation")
        });
        test("2 != number", () => {
            expect(()=>{reach([1, "a", 3])}).toThrowError("invalid LinkStation")
        });
        test("3 != number", () => {
            expect(()=>{reach([1, 2, "a"])}).toThrowError("invalid LinkStation")
        });
    });


    test("correct reach is returned", () => {
        let testLinkStation = [0,1,2];
        let returnedValue = reach(testLinkStation);
        expect(returnedValue).toBe(testLinkStation[2]);
    })


});

describe("Distance constant", () => {

    let validLinkStation = [1,2,3];
    let validPoint = [1,2];

    describe("Point...", () => {
        describe("invalid input", () => {
            test("undefined input throws", () => {
                expect(()=>distance(undefined, validLinkStation)).toThrowError("invalid Point or LinkStation")
            })
        });
        describe("invalid length", () => {
            let testObject = [];

            // too short
            for (let max = 2, i = 0; i < max; i++){
                test(`length ${i} throws`, ()=>{
                    expect(()=>{distance(testObject, validLinkStation)}).toThrowError("invalid Point or LinkStation length")
                });
            }

            // too long
            test("length 3 throws", () => {
                expect(()=>{distance([1,2,3], validLinkStation)}).toThrowError("invalid Point or LinkStation length");
            })
        });
        describe("invalid array items", () => {
                test(`item 1 = undefined throws`, () => {
                    expect(() => {distance([undefined, 2], validLinkStation)}).toThrowError("invalid input type");
                });
                test(`item 2 = undefined throws`, () => {
                    expect(() => {distance([1, undefined], validLinkStation)}).toThrowError("invalid input type");
                });
            });
    });

    describe("LinkStation...", () => {
        describe("invalid input", () => {
            test("undefined input throws", () => {
                expect(()=>distance(validPoint, undefined)).toThrowError("invalid Point or LinkStation")
            })
        });
        describe("invalid length", () => {
            let testObject = [];

            // too short
            for (let max = 3, i = 0; i < max; i++){
                test(`length ${i} throws`, ()=>{
                    expect(()=>{distance(validPoint, testObject)}).toThrowError("invalid Point or LinkStation length")
                });
            }

            // too long
            test("length 4 throws", () => {
                expect(()=>{distance(validPoint, [1,2,3,4])}).toThrowError("invalid Point or LinkStation length");
            })
        });
        describe("invalid array items", () => {
                test(`item 0 = undefined throws`, () => {
                    expect(() => {distance(validPoint, [undefined, 2, 3])}).toThrowError("invalid input type");
                });
                test(`item 1 = undefined throws`, () => {
                    expect(() => {distance(validPoint, [1, undefined, 3])}).toThrowError("invalid input type");
                });
                test(`item 2 = undefined throws`, () => {
                    expect(() => {distance(validPoint, [1,2, undefined])}).toThrowError("invalid input type");
                });
            });
    });

    describe("Both Point & Linkstation...", () => {
        test("valid input returns correct output", () => {
            expect(distance([1,1],[2,2,2])).toBe(
                Math.sqrt(((1-2)**2)+((1-2)**2))
            )
        })
    });
});