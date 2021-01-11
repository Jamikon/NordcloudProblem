let main = require( "./src/main");

exports.handler = async (event) => {

    let Points = event.Points;
    let LinkStations = event.LinkStations;

    let output = await main(Points, LinkStations);

    return {
        statusCode: 200,
        body: JSON.stringify(output),
    };
};