/*
 * jQuery Socialstats
 * Author: Hyperbolic - http://hyperbolic.com.br/
 * Version: 1.0.0
 * Url: https://github.com/hyperbolicbr/jquery.socialstats
 * Licensed under MIT
 */

( function($) {

		$.fn.socialstats = function(options) {

			var settings = $.extend({
				zeroText : "0",
				facebookApi : "http://graph.facebook.com/",
				twitterApi : "https://cdn.api.twitter.com/1/urls/count.json"
			}, options);

			return this.each(function() {

				var counter;
				var elem;

				elem = $(this);

				if (!elem.hasClass("socialstats-loaded")) {

					if (elem.attr("data-network") == "facebook") {

						$.getJSON(settings.facebookApi + "?ids=" + encodeURIComponent(elem.attr("data-url")), function(data) {

							if (elem.attr("data-action") == "comments") {
								counter = data[elem.attr("data-url")].comments;
							} else if (elem.attr("data-action") == "all") {
								counter = data[elem.attr("data-url")].shares+data[elem.attr("data-url")].comments;
							} else {
								counter = data[elem.attr("data-url")].shares;
							}

							if ((counter != undefined)) {
								elem.html(counter);
							} else {
								elem.html(settings.zeroText);
							}

						});

					} else if (elem.attr("data-network") == "twitter") {

						$.getJSON(settings.twitterApi + "?callback=?&url=" + encodeURIComponent(elem.attr("data-url")), function(data) {

							counter = data.count;
							if ((counter != undefined)) {
								elem.html(counter);
							} else {
								elem.html(settings.zeroText);
							}
						});

					}

					elem.addClass("socialstats-loaded");

				}

			});

		};

	}(jQuery)); 