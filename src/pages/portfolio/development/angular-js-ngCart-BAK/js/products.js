(function() {
	var app = angular.module('store-directives', []);
	app.directive("productDescription", function() {
		return {
			restrict: 'E',
			scope: {
				item: "="
			},
			templateUrl: "product-description.html"
		};
	});
	app.directive("productReviews", function() {
		return {
			restrict: 'E',
			scope: {
				reviewedProduct: "="
			},
			templateUrl: "product-reviews.html"
		};
	});
	app.directive("productSpecs", function() {
		return {
			restrict: "A",
			scope: {
				item: "="
			},
			templateUrl: "product-specs.html"
		};
	});
	app.directive("tabGroup", function() {
		return {
			restrict: "E",
			transclude: true,
			templateUrl: "product-tabs.html",
			controller: function($scope) {
				$scope.tabs = [];
				this.addTab = function(tab) {
					if($scope.tabs.length === 0) {
						tab.selected = true;
					}
					$scope.tabs.push(tab);
				};
				this.select = function(selectedTab) {
					angular.forEach($scope.tabs, function(tab) {
						tab.selected = angular.equals(tab, selectedTab);
					});
				}
			},
			controllerAs: "tabGroup"
		};
	});
	app.directive("tab", function() {
		return {
			restrict: "E",
			scope: {
				title: "@"
			},
			transclude: true,
			template: "<div ng-show='selected' ng-transclude=''></div>",
			require: "^tabGroup",
			link: function(scope, element, attrs, ctrl) {
				ctrl.addTab(scope);
			}
		};
	});
	app.directive("productGallery", function() {
		return {
			restrict: "E",
			templateUrl: "product-gallery.html",
			controller: function() {
				this.current = 0;
				this.setCurrent = function(imageNumber) {
					this.current = imageNumber || 0;
				};
			},
			controllerAs: "gallery"
		};
	});
})();