// will need to have method to change number of planes
const MAX_PLANES = 3

function Airport() {
    this.hangar = []
}

Airport.prototype.landPlane = function(plane) {
    if (this.isHangarFull() === true) {
        return "Cannot land. Hangar full"
    }
    this.hangar.push(plane)
}

Airport.prototype.takeOff = function() {
    return 'plane has taken off'
}

Airport.prototype.isHangarFull = function() {
    if (this.hangar.length >= MAX_PLANES) {
        return true
    }
    return false
}

