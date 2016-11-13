

(function(){
	
	angular.module("lunchCheck", [])
	
	.controller("LunchCheckController", LunchCheckController);
	
	LunchCheckController.$inject = ["$scope"];
	
	function LunchCheckController($scope){
		$scope.food = "";
		$scope.message = "";
		$scope.colorClass = "";
		$scope.checkIfTooMuch = function(){
			if($scope.food.length == 0){
				$scope.message = "Please enter data first";
				$scope.colorClass = "redText";
				$scope.borderClass = "redBorder";
			} else {
				var food = $scope.food.split(",");
				
				var goodFoodCounter = 0;
				var badFoodCounter = 0;
				
				$scope.colorClass = "greenText";
				$scope.borderClass = "greenBorder";
				
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
					$scope.message += " (Empty elements are not food!)"
				}
			}
		}
	};
	
})();