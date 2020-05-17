describe('Airport', function() {
    var heathrow;

    beforeEach(function() {
        heathrow = new Airport()
    })

    describe('Airport hangar is an array', function() {
        it('returns an array', function() {
            expect(heathrow.hangar).toEqual([])
        })
    })

    describe('Plane can land at the airport', function() {
        it('Plane is added to the hangar', function() {
            heathrow.landPlane("plane")
            expect(heathrow.hangar).toEqual(["plane"])
        })


    })

    describe('Plane can take off from the airport', function() {
        it('returns a plane', function() {
            expect(heathrow.takeOff()).toEqual('plane has taken off')
        })
    })
})