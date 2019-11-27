
const calibration = {
    A: 2.94,
    B: 0.91,
    C: 3.67,
    D: 0.28
}

function effortMultipliers(EMS) {
    let multEm = 1
    let pos
    for (pos in EMS) multEm *= EMS[pos]
    return multEm
}
function scaleFactor(SFS) {
    var sumSF = 0
    var sf
    for (sf in SFS) {
        console.log(SFS[sf]);
        sumSF += SFS[sf]
    }
    return sumSF
}

let estimate = (SFS, EMS, codeLines) => {
    let SF = scaleFactor(SFS)
    let EM = effortMultipliers(EMS)
    let E = calibration.B + (0.01 * SF)
    let PM = calibration.A * Math.pow((codeLines / 1000), E) * EM
    let F = calibration.D + 0.2 * (E - calibration.B)
    let TDEV = calibration.C * Math.pow(PM, F)
    return {
        TDEV,
        PM,
        F,
        E
    }

}

module.exports = {
    estimate
}