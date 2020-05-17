const MAX_PLANES = 3

function Airport() {
    this.hangar = []
}

Airport.prototype.landPlane = function(plane) {
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

