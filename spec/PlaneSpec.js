describe('Plane', function() {
    var aeroplane

    beforeEach(function() {
        aeroplane = new Plane()
    })

    describe('Plane has a status', function() {
        it ("Plane returns it's status", function() {
            expect(aeroplane.status()).toEqual("Flying")
        })
    })
})