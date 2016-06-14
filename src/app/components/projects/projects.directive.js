
angular
	.module('Garan')
	.directive("projects",['projectsService', '$http', '$interval', function(projectsService, $http, $interval){
		return {
			restrict: 'AE',
			templateUrl: "app/components/projects/projects.view.html",
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
				technologies: '='
			},
			controller: function($scope){
				// console.log('my title', $scope.title, $scope.images);
			 	
			}
		};
}]);