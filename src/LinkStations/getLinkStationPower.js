import { power, reach, distance } from "../Constants/Constants";

const getLinkStationPower = (Point, LinkStation) => {
  if (!Point) throw Error("invalid Point");
  if (!LinkStation) throw Error("invalid LinkStation");
  if (typeof Point !== "object") throw Error("invalid Point");
  if (typeof LinkStation !== "object") throw Error("invalid LinkStation");
  if (Point.length !== 2) throw Error("invalid Point length");
  if (LinkStation.length !== 3) throw Error("invalid LinkStation length");

  Point.forEach((item) => {
    if (typeof item !== "number") throw Error("invalid input");
  });

  LinkStation.forEach((item) => {
    if (typeof item !== "number") throw Error("invalid input");
  });

  return (
    power(
      reach(LinkStation),
      distance(Point, LinkStation),
    )
  );
};

export default getLinkStationPower;
