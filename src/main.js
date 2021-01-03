import LinkStations from "./LinkStations/LinkStations"
import PredefinedPoints from "./PredefinedPoints/PredefinedPoints";
import getLinkStationPower from "./LinkStations/getLinkStationPower";

function processData(Points, LinkStations){



    console.log(Points);
    console.log(LinkStations);
}

function main(){

    console.log(getLinkStationPower(PredefinedPoints[0], LinkStations[1]));

    for (let Point of PredefinedPoints){
        // iterate over all points... checking all LinkStations for each Point

        console.log(getLinkStationPower(Point, LinkStations[0]));
    }

    // print results using logger

    // terminate
}

main();