var SPA = (function ($) {
    var configMap = {
        environment: ""
    }

    var init = function () {
        SPA.Data.init('development');
        return true;
    };

    return {
        init: init
    };
})(jQuery);

var SPA = SPA || {};

var template = (function () {
    var configMap = {};

    var init = function () {
        return true;
    };

    return {
        init: init
    };
});