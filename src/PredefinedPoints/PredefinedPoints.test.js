import PredefinedPoints from "./PredefinedPoints";

test("PredefinedPoints is exported as an object", () => {
    expect(typeof PredefinedPoints).toBe("object");
});

test("PredefinedPoints contains at least 1 item", ()=>{
    expect(PredefinedPoints.length).toBeGreaterThanOrEqual(1)
});

test("All objects inside PredefinedPoints are objects", () =>{
    for (let PredefinedPoint of PredefinedPoints){
        expect(typeof PredefinedPoint).toBe("object");

    }
});

test("All objects inside PredefinedPoints have a length of 2", ()=>{
    for (let PredefinedPoint of PredefinedPoints){
        expect(PredefinedPoint.length).toBe(2)
    }
})