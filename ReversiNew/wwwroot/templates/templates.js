Handlebars.getTemplate = function (name) {
	if (Handlebars.templates === undefined || Handlebars.templates[name] === undefined) {
		$.ajax({
			url: 'templatesfolder/' + name + '.hbs',
			success: function (data) {
				if (Handlebars.templates === undefined) {
					Handlebars.templates = {};
				}
				Handlebars.templates[name] = Handlebars.compile(data);
			},
			async: false
		});
	}
	return Handlebars.templates[name];
};

(function () {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['gameplay.hbs'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "﻿<h3>De "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"player") || (depth0 != null ? lookupProperty(depth0,"player") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"player","hash":{},"data":data,"loc":{"start":{"line":1,"column":8},"end":{"line":1,"column":18}}}) : helper)))
    + " speler is aan de beurt!</h3>";
},"useData":true});
})();