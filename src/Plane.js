function Plane() {
    this.status = "Flying"
}

Plane.prototype.changeStatus = function() {
    if (this.status === "Flying") {
        this.status ="Landed"
    } else {
        this.status = "Flying"
    }
    
}
