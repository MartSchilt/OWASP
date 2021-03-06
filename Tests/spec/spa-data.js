describe("SPA.Data tests.", function () {

    it("SPA.Data exists", function () {
        expect(SPA.Data.init()).toBe(true);
    });

    it("SPA getGames is promise", function () {
        debugger
        SPA.Data.init("production");
        var promiseGetGames = SPA.Data.getGames();
        expect(Promise.resolve(promiseGetGames) == promiseGetGames).toBe(true);
    });

    describe("Mock tests.", function () {

        beforeEach(function () {
            jasmine.Ajax.install();
        });

        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        it("Mocked getGames", function(){
            var promiseGetGames = SPA.Data.getGames();
            var request = jasmine.Ajax.requests.mostRecent();
            request.respondWith({status: "Success", responseText: "jasmine mock"})
            expect(request.responseText).toBe("jasmine mock");
        });
    });

    describe("Spy tests.", function () {
        let onSuccess, onFailure, request;

        beforeEach(function (){
            jasmine.Ajax.install();
            onSuccess = jasmine.createSpy("onSuccess");
            onFailure = jasmine.createSpy("onFailure");

            spyOn($, "get").and.callFake(function (req){
                let deferred = $.Deferred();
                let data = {x:1, y:2};
                deferred.resolve(data);
                return deferred.promise();
            });
        });

        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        it("Nothing has been called test.", function (){
            expect(onSuccess).not.toHaveBeenCalled();
        });

        it("Spy call.", function (){
            SPA.Data.getGames().then(function (result) {
                onSuccess();
                expect(onSuccess).toHaveBeenCalled();
            });
        });
    });
});