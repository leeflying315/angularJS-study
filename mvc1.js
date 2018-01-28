function parentController($scope) {
    $scope.breadCrumb = 1;

    $scope.$on("MyEvent", function() {
        $scope.breadCrumb++;
    });


}

function currentController($scope) {
    // body...
    $scope.$on("MyEvent", function() {
        $scope.breadCrumb--;
    });
}
function other_controller($scope) {
	    $scope.breadCrumb = 10;

    $scope.$on("MyEvent", function() {
        $scope.breadCrumb--;
    });
}
function sameLevelController($scope) {
		    $scope.$on("MyEvent", function() {
        $scope.breadCrumb=$scope.breadCrumb+2;
    });
}
function childController($scope) {
	    $scope.$on("MyEvent", function() {
        $scope.breadCrumb=$scope.breadCrumb+10;
    });
}