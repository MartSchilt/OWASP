describe("SPA initialization tests.", function () {

  it("SPA exists.", function () {
    expect(SPA.init()).toBe(true);
  });

  it("SPA.Widget exists.", function () {
    expect(SPA.Widget().init()).toBe(true);
  });

  /*it("SPA.Chart exists", function () {
    expect(SPA.Chart().init()).toBeDefined();
  });*/
  
  it("SPA.API exists.", function () {
    expect(SPA.API().init()).toBe(true);
  });

  it("SPA.Data exists.", function () {
    expect(SPA.Data.init()).toBe(true);
  });

  it("SPA.Model exists", function () {
    expect(SPA.Model.init()).toBe(true);
  });

  it("SPA.Reversi exists.", function () {
    expect(SPA.Reversi.init()).toBe(true);
  });
});