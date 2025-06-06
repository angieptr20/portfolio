/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

const technologies = [
  { name: "HTML5", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS3", icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express.js", icon: "https://cdn.simpleicons.org/express" },
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
];

const gallery = document.querySelector(".gallery");

technologies.forEach(tech => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<img src="${tech.icon}" alt="${tech.name}"><h3>${tech.name}</h3>`;
  gallery.appendChild(card);
});

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});

})(jQuery);