import LinkStations from "./LinkStations";

test("LinkStations is exported as an object", () => {
    expect(typeof LinkStations).toBe("object");
});

test("LinkStations contains at least 1 item", ()=>{
    expect(LinkStations.length).toBeGreaterThanOrEqual(1)
});

test("All objects inside LinkStations are objects", () =>{
    for (let LinkStation of LinkStations){
        expect(typeof LinkStation).toBe("object");

    }
});

test("All objects inside LinkStations have a length of 3", ()=>{
    for (let LinkStation of LinkStations){
        expect(LinkStation.length).toBe(3)
    }
})