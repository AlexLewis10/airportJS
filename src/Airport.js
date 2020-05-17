// will need to have method to change number of planes
const MAX_PLANES = 3

function Airport() {
    this.hangar = []
    this.capacity = 3
}

Airport.prototype.landPlane = function(plane) {
    if (this.isHangarFull() === true) {
        return "Cannot land. Hangar full"
    }
    this.hangar.push(plane)
}

Airport.prototype.takeOff = function() {
    if (this.isHangarEmpty() === true) {
        return "Hangar empty, no planes available"
    }
    this.hangar.pop()
    return 'plane has taken off'
}

Airport.prototype.isHangarFull = function() {
    if (this.hangar.length >= MAX_PLANES) {
        return true
    }
    return false
}

Airport.prototype.isHangarEmpty = function() {
    if (this.hangar.length > 0) {
        return false
    }
    return true
}

Airport.prototype.setCapacity = function(number) {
    this.capacity = number
}

