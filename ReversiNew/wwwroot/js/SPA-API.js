SPA.API = (function () {
    var configMap = {};

    var init = function () {
        return true;
    };

    var numbers = function () {
        SPA.Data.numbersApi();
    };

    return {
        init: init,
        numbers: numbers
    };
});