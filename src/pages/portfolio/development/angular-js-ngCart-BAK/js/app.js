/* Gem Store */
//(function() {
//	var app = angular.module('gemStore', ['store-directives']);
//	app.controller('StoreController', ['$http',
//		function($http) {
//			var store = this;
//			store.products = [];
//			$http.get('store-products.json').success(function(data) {
//				store.products = data;
//			});
//		}
//	]);
//	app.controller('ReviewController', function() {
//		this.review = {};
//		this.addReview = function(product) {
//			product.reviews.push(this.review);
//			this.review = {};
//		};
//	});
//})();

/* Cart */
var myApp = angular.module('CartDemo', ['ngCart']);

myApp.controller ('myCtrl', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);    
}]);