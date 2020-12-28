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
    })
})