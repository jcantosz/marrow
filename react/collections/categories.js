var Backbone = require('backbone');
var settings = require('../settings');

module.exports = Backbone.Collection.extend({
	comparator: 'date',
	url: function() {
		return settings.api = '/categories/' + this.where;
	}
});
