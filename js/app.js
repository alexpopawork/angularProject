

(function(){
	
	angular.module("angularApp", [])
	
	.controller("firstController", firstController);
	
	$firstController.$inject = ["$scope"];
	
	function firstController($scope){
		$scope.food = "";
		$scope.message = "";
		$scope.checkIfTooMuch = function(){
			if($scope.food.length == 0){
				$scope.message = "Please enter data first";
			} else {
				var food = $scope.food.split(",");
				
				var goodFoodCounter = 0;
				for(var i = 0; i < food.length; i++){
					if(food[i] != ''){
						goodFoodCounter++;
					}
				}
				
				if(goodFoodCounter > 3){
					$scope.message = "Too much!";
				} else {
					$scope.message = "Enjoy!";
				}
			}
		}
	};
	
})();