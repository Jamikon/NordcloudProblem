import LinkStations from "./LinkStations";

test("LinkStations is exported as an array", () => {
    expect(typeof LinkStations === "Array");
});

test("LinkStations contains at least 1 item", ()=>{
    expect(LinkStations.length >= 1)
});

test("All objects inside LinkStations are arrays", () =>{
    for (let LinkStation of LinkStations){
        expect(typeof LinkStation === "Array")
    }
});

test("All objects inside LinkStations have a length of 3", ()=>{
    for (let LinkStation of LinkStations){
        expect(LinkStation.length === 3)
    }
})