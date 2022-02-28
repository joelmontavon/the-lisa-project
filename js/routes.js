var routes = angular.module('routes', []);
routes.config (['$routeProvider', function ($routeProvider) {
	$routeProvider.
	  when ('/', {
		  templateUrl: 'partials/home.html'
	  }).
	  when('/our-people', {
  		templateUrl: 'partials/our-people.html'
	  }).
	  when('/contact', {
	    controller: 'MapCtrl',
  		templateUrl: 'partials/contact.html'
	  }).
	  when('/stars', {
	    controller: 'ChartCtrl',
  		templateUrl: 'partials/stars.html'
	  }).
	  when('/mtm', {
  		templateUrl: 'partials/mtm.html'
	  }).
	  when('/news', {
	    controller: 'FeedCtrl',
  		templateUrl: 'partials/news.html'
	  }).
	  when('/cql', {
	    controller: 'FeedCtrl',
  		templateUrl: 'https://joelmontavon.github.io/flu-vax-cql/'
	  }).
	  otherwise ({
		  redirectTo: '/'
	  });
}]);
