import predefinedLinkStations from "./LinkStations/LinkStations";
import PredefinedPoints from "./PredefinedPoints/PredefinedPoints";
import getLinkStationPower from "./LinkStations/getLinkStationPower";

function getBestLinkStation(Point, LinkStations) {
  if (LinkStations.length === 0) return [-1, -1];

  const resultsArray = [];

  // process LinkStations
  LinkStations.forEach((LinkStation) => {
    resultsArray.push(
      getLinkStationPower(Point, LinkStation),
    );
  });

  // get index of best LinkStation
  const indexOfBestLinkStation = resultsArray.indexOf(
    Math.max(...resultsArray),
  );

  // return [ index, power ]
  return [indexOfBestLinkStation, resultsArray[indexOfBestLinkStation]];
}

function outputString(Point, powerArray, LinkStations) {
  if (powerArray[1] === -1) return `No link station within reach for point ${Point}`;
  return powerArray[1] === 0
    ? `No link station within reach for point ${Point}`
    : `Best link station for point ${Point} is ${LinkStations[powerArray[0]].slice(0, 2)} with power ${powerArray[1]}`;
}

function processPoint(Point, LinkStations) {
  const processedLinkStationsForPoint = getBestLinkStation(Point, LinkStations);
  if (process.env.NODE_ENV === "test") {
    return outputString(Point, processedLinkStationsForPoint, LinkStations);
  }
  if (process.env.NODE_ENV === "production") {
    return outputString(Point, processedLinkStationsForPoint, LinkStations);
  }
  if (process.env.NODE_ENV === "dev") {
    console.log(outputString(Point, processedLinkStationsForPoint, LinkStations));
  }
  return null;
}

// can load own Points or LinkStations
function main(points = PredefinedPoints, linkStations = predefinedLinkStations) {
  // check all input are objects
  if (typeof points !== "object" || typeof linkStations !== "object") throw Error("invalid input");

  // if no points defined, dont bother to check anything else. return empty array of results
  if (points.length === 0) return [];

  // validate points
  points.forEach((point) => {
    // check all points contain arrays of length 2
    if (point.length !== 2) throw Error("invalid point length");
    // check all points are objects
    if (typeof point !== "object") throw Error("invalid point type");
    // check all sub array items are numbers
    if (typeof point[0] !== "number" || typeof point[1] !== "number") throw Error("invalid point sub type(s)");
  });

  // validate linkStations
  linkStations.forEach((linkStation) => {
    // check all linkStation contain arrays of length 2
    if (linkStation.length !== 3) throw Error("invalid linkStation length");
    // check all linkStations are objects
    if (typeof linkStation !== "object") throw Error("invalid linkStation type");
    // check all sub array items are numbers
    if (typeof linkStation[0] !== "number" || typeof linkStation[1] !== "number" || typeof linkStation[2] !== "number") throw Error("invalid linkStation sub type(s)");
  });

  const returnValue = [];

  points.forEach((point) => {
    returnValue.push(processPoint(point, linkStations));
  });

  return returnValue;
}

main();

export default main;
