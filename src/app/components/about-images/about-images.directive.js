
angular
	.module('Garan')
	.directive("about_images", ['$http', function($http){
		return {
			restrict: 'AE',
			templateUrl: "app/components/about_images/about_images.view.html",
			link: function(scope, element, attrs, controller){

				var rotate;

				angular.element(document).find('img').on('mouseenter', function(){
						var self = this;
						var counter = 1;
						function rotate_image(){
							if(counter < scope.images.length - 1){
								console.log("self.src: ", self.src);
								console.log("counter: ", counter);
								self.src = scope.images[counter];
								++counter;
							} else {
								self.src = scope.images[scope.images.length-1];
								counter = 0;
							}
						}
						if(self.alt == attrs.title){
							rotate = setInterval(rotate_image, 1100);
						}
				});

				angular.element(document).find('img').on('mouseleave', function(){
					var self = this;
					if(self.alt == attrs.title){
						clearInterval(rotate);
					}
				});

			},
			scope: {
				title: '@',
				images: '=',
			},
			controller: function($scope){
				// console.log('my title', $scope.title, $scope.images);
			 	
			}
		};
}]);