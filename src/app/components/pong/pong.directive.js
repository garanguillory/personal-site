
angular
	.module('Garan')
	.directive("pong",['pongService', '$http', '$document', function(pongService, $http, $document){
		return {
			restrict: 'AE',
			templateUrl: "app/components/pong/pong.view.html",
			require: 'GaransController',
			controller: function($scope){

			

			}
		};
}]);


