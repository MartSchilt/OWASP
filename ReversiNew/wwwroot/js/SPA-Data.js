SPA.Data = (function () {
    var configMap = {
        host: "http://localhost:50000",
        endpoint: "/reversidata/",
        environment: "development",
    };

    var init = function (env) {
        environment = env;
        return true;
    };

    // GET all games
    var getGames = function () {
        //if (configMap.environment == "production") {
            return new Promise(function (resolve, reject) {
                var data = $.get(configMap.host + configMap.endpoint)
                    .done(function () {
                        resolve(data);
                    })
                    .fail(function () {
                        reject(SPA.Widget().showFail("getGames failed!"));
                    });
            });
        //}
    };

    var numbersApi = function () {
        $.ajax({
            type: "GET",
            url: "http://numbersapi.com/random",
            dataType: "text"
        })
            .done(function (data) {
                SPA.Templating().setNumbersApi(data);
            })
            .fail(function (error) {
                SPA.Widget().showFail("API failed: " + error);
                console.log(error);
            });
    };

    return {
        init: init,
        getGames: getGames,
        numbersApi: numbersApi
    };
})();