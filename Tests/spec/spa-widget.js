describe("SPA.Widget tests.", function () {

    it("SPA.Widget exists.", function () {
        expect(SPA.Widget().init()).toBe(true);
    });

    it("Localstorage is working.", function () {
        localStorage.clear(); 
        SPA.Widget().showFail("test", "test");
        expect(localStorage.getItem("0")).toBe("test");
    });

    describe("DOM tests.", function () {

        it("WidgetFail is visible.", function () {
            SPA.Widget().showFail("test", "test");
            expect(document.getElementById('widget').classList.contains("fail")).toBe(true);
        });

        it("WidgetFail can be closed.", function () {
            SPA.Widget().showFail("test", "test");
            SPA.Widget().hideWidget();
            expect(document.getElementById('widget').classList.contains("slide-fade-in")).toBe(false);

        });

        it("WidgetSucces is visible.", function () {
            SPA.Widget().showSucces("test", "test");
            expect(document.getElementById('widget').classList.contains("succes")).toBe(true);
        });

        it("WidgetMessage can be closed.", function () {
            SPA.Widget().showSucces("test", "test");
            SPA.Widget().hideWidget();
            expect(document.getElementById('widget').classList.contains("slide-fade-in")).toBe(false);
        })
    });
    /*
    describe("Spy tests.", function(){
        beforeEach(function (){
            jasmine.Ajax.install();
            onSuccess = jasmine.createSpy("onSuccess");
            onFailure = jasmine.createSpy("onFailure");

            spyOn(SPA.Widget(), "showSucces");
            spyOn(SPA.Widget(), "showFail");

            SPA.Widget().showSucces("test", "test");
            SPA.Widget().showSucces("Koel", "boeee");

            SPA.Widget().showFail("Ohno","Oops");
        });

        afterEach(function () {
            jasmine.Ajax.uninstall();
        });

        it("tracks that showSucces was called", function() {
            expect(SPA.Widget().showSucces).toHaveBeenCalled();
        });

        it("tracks that showSucces was called twice", function() {
            expect(SPA.Widget().showSucces).toHaveBeenCalledTimes(2);
        });

        it("tracks that showSucces was called with the set parameters", function() {
            expect(SPA.Widget().showSucces).toHaveBeenCalledWith("test", "test");
            expect(SPA.Widget().showSucces).toHaveBeenCalledWith("Koel", "boeee");
        });

        it("tracks that showFail was called", function() {
            expect(SPA.Widget().showFail).toHaveBeenCalled();
        });

        it("tracks that showFail was called with the set parameters", function() {
            expect(SPA.Widget().showFail).toHaveBeenCalledWith("Ohno","Oops");
        });
    });

    afterEach(function(){
        $("#widget").empty();
    });
    */
});