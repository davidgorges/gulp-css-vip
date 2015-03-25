var through = require("through2"),
    rework = require("rework"),
	gutil = require("gulp-util");

module.exports = function () {
	"use strict";
    // Fix nested rules
    function addImportantToCssRules(rules) {
        rules.forEach(function(r) {
            if (r.declarations) {
                r.declarations.forEach(function(d) {
                    // Don't add important twice
                    if (d.value && d.value.indexOf('!important') === -1) {
                        d.value += ' !important';
                    }
                });
            }
            if (r.rules) {
                addImportantToCssRules(r.rules);
            }
        });
    }

	// see "Writing a plugin"
	// https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/README.md
	function cssVip(file, enc, callback) {
		/*jshint validthis:true*/

		// Do nothing if no contents
		if (file.isNull()) {
			this.push(file);
			return callback();
		}

		if (file.isStream()) {
			// accepting streams is optional
			this.emit("error",
				new gutil.PluginError("gulp-css-vip", "Stream content is not supported"));
			return callback();
		}

		// check if file.contents is a `Buffer`
		if (file.isBuffer()) {

            var css = rework(String(file.contents)).use(function(values) {
                addImportantToCssRules(values.rules);
            }).toString();
			file.contents = new Buffer(css);

			this.push(file);

		}
		return callback();
	}

	return through.obj(cssVip);
};
