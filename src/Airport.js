function Airport() {
    this.hangar = []
}

Airport.prototype.landPlane = function() {
    return 'Plane has landed'
}

Airport.prototype.takeOff = function() {
    return 'plane has taken off'
}

