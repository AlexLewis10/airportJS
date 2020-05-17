describe('Airport', function() {
    var heathrow;

    beforeEach(function() {
        heathrow = new Airport()
    })

    describe('Airport hangar is an array', function() {
        it ('returns an array', function() {
            expect(heathrow.hangar).toEqual([])
        })
    })
})