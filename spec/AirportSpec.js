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

        it('Cannot land if the hangar is full', function() {
            heathrow.hangar = ["plane1", "plane2", "plane3"]
            expect(heathrow.landPlane("plane")).toEqual("Cannot land. Hangar full")
        })

        it('Can see if the hangar is has space', function() {
            heathrow.hangar = ["plane1", "plane2"]
            expect(heathrow.isHangarFull()).toEqual(false) 
        })

        it('Can see if the hangar does not have space', function() {
            heathrow.hangar = ["plane1", "plane2", "plane3"]
            expect(heathrow.isHangarFull()).toEqual(true) 
        })
    })



    describe('Plane can take off from the airport', function() {
        it('removes the plane from the Hangar', function() {
            heathrow.hangar = ["plane1", "plane2", "plane3"]
            heathrow.takeOff()
            expect(heathrow.hangar).toEqual(["plane1", "plane2"])
        })
        
        it('states that the plane has taken off', function() {
            expect(heathrow.takeOff()).toEqual('plane has taken off')
        })
    })
})