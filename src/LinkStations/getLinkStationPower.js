let {power, reach, distance} = require( "../Constants/Constants")

let getLinkStationPower = (Point, LinkStation) => {
    if (!Point) throw Error("invalid Point");
    if (!LinkStation) throw Error("invalid LinkStation");
    if (typeof Point !== 'object') throw Error("invalid Point");
    if (typeof LinkStation !== 'object') throw Error("invalid LinkStation");
    if (Point.length !== 2) throw Error("invalid Point length");
    if (LinkStation.length !== 3) throw Error("invalid LinkStation length");

    for (let item of Point){
        if (typeof item !== 'number') throw Error("invalid input");
    }
    for (let item of LinkStation){
        if (typeof item !== 'number') throw Error("invalid input");
    }

    return (
        power(
            reach(LinkStation),
            distance(Point, LinkStation)
        )
    )

};

module.exports = getLinkStationPower;