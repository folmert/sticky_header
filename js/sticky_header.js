'use strict';

var sticky_header = (function () { 

	var querySelectorAll = document.querySelectorAll.bind(document);
	
	var header = querySelectorAll('header')[0];
	var headerHeight = header.offsetHeight;

	var headerLink = querySelectorAll('header ul li a');
	var headerLinkHeight = headerLink[0].offsetHeight;

	var body = querySelectorAll('body')[0];
	window.addEventListener('scroll', function () {

		if (window.pageYOffset > headerHeight/2) {
			body.classList.add('js-sticky_header');
			body.style.paddingTop = headerHeight + 'px';
			header.style.height = headerHeight/2 + 'px';

			for (var i = headerLink.length - 1; i >= 0; i--) {
				headerLink[i].style.lineHeight = headerHeight/2 + 'px';
			}

		}
		else {
			body.classList.remove('js-sticky_header');
			body.style.paddingTop = 0 + 'px';
			header.style.height = headerHeight + 'px';

			for (var j = headerLink.length - 1; j >= 0; j--) {
				headerLink[j].style.lineHeight = headerLinkHeight + 'px';
			}

		}

	});

	setTimeout(function(){
	// window.scrollTo(0,0);
	window.scrollTo(0,window.pageYOffset);	// trigger scroll event on page reload
},10);

})();