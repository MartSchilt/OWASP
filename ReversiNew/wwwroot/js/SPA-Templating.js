SPA.Templating = (function () {
    var templates = [];

    var init = function (temp) {
        templates = temp;
    };

    var getTemplate = function (templateId) {
        templateInfo = document.getElementById(templateId).innerHTML;
    };

    var parseTemplate = function (domId, templateId, json) {
        getTemplate(templateId);
        var template = Handlebars.compile(templateInfo);
        var data = template(json);
        document.getElementById(domId).innerHTML += data;
    };

    var setNumbersApi = function (result) {
        $("#api").text(result);
    };

    return {
        init: init,
        getTemplate: getTemplate,
        parseTemplate: parseTemplate,
        setNumbersApi: setNumbersApi
    };
});