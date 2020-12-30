const power = (reach, distance) => {
    if (typeof reach !== "number") throw new Error("invalid reach");
    if (typeof distance !== "number") throw new Error("invalid distance");

    return distance > reach ? 0 : ((reach - distance)**2);
};

const reach = (LinkStation) => {
    if (typeof LinkStation !== "object") throw Error("invalid LinkStation");
    if (LinkStation.length !== 3) throw Error("invalid LinkStation length");
    if (
        typeof LinkStation[0] !== "number" || typeof LinkStation[1] !== "number" || typeof LinkStation[2] !== "number"
    ) throw Error("invalid LinkStation");

    return LinkStation[2];
};

const distance = (Point, LinkStation) => {

    if (!Point || !LinkStation) throw Error("invalid Point or LinkStation");

    if (Point.length !== 2 || LinkStation.length !== 3) throw Error("invalid input. Point or LinkStation too short");

    let [AX, AY, BX, BY] = [...Point, ...LinkStation];
    if (!AX || !AY || !BX || !BY) throw Error("invalid input for either Point or LinkStation");

    if (
        [AX, AY, BX, BY].map(
            (item) => {
                if (typeof item !== "number") throw Error(`invalid input. Expected type number, but got type ${typeof item}`);
            }
        )
    )

    return Math.sqrt(
        (((AX - BX)**2) + ((AY - BY)**2))
    )
};

export {power, reach, distance};
