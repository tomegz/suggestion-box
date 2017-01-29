app.controller("SuggestionController", ["$scope", "$routeParams", "suggestions", function($scope, $routeParams, suggestions){
    $scope.post = suggestions.posts[$routeParams.id];
    $scope.comments = suggestions.posts[$routeParams.id].comments;
    $scope.addComment = function(){
        if(!$scope.userComment || $scope.userComment === ""){
            return;
        }
        $scope.post.comments.push({
            content: $scope.userComment,
            upvotes: 0
        });
        $scope.userComment = "";
    }
    $scope.upVoteComment = function(comment){
        comment.upvotes += 1;
    }
    $scope.hello = "Hello comments";
}]);
