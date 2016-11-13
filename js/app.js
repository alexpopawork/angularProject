

(function(){
	
	angular.module("lunchCheck", [])
	
	.controller("lunchController", lunchController);
	
	$lunchController.$inject = ["$scope"];
	
	function lunchController($scope){
		$scope.food = "";
		$scope.message = "";
		$scope.checkIfTooMuch = function(){
			if($scope.food.length == 0){
				$scope.message = "Please enter data first";
			} else {
				var food = $scope.food.split(",");
				
				var goodFoodCounter = 0;
				var badFoodCounter = 0;
				for(var i = 0; i < food.length; i++){
					if(food[i] != ''){
						goodFoodCounter++;
					} else {
						badFoodCounter++;
					}
				}
				
				if(goodFoodCounter > 3){
					$scope.message = "Too much!";
				} else {
					$scope.message = "Enjoy!";
				}
				if(badFoodCounter > 0){
					$scope.message += " (Empty elements are ignored!)"
				}
			}
		}
	};
	
})();