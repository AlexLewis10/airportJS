describe('Plane', function() {
    var aeroplane

    beforeEach(function() {
        aeroplane = new Plane()
    })

    describe('Plane has a status', function() {
        it("Plane has a status", function() {
            expect(aeroplane.status).toEqual("Flying")
        })
        
        
        it("Plane changes status after take off", function() {
            aeroplane.status = "Landed"
            aeroplane.changeStatus()
            expect(aeroplane.status).toEqual("Flying")
        })

        it("Changes the planes status after it lands", function() {
            aeroplane.status = "Flying"
            aeroplane.changeStatus()
            expect(aeroplane.status).toEqual("Landed")
        })

    })
})