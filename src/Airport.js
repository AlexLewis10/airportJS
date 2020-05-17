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
    if (this.hangar.length >= 3) {
        return true
    }
    return false
}

