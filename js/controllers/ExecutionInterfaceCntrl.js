/*
*
* Controllers for the execution interface
*
 */


// The angular module for the page
var ExecutionInterface = angular.module('ExecutionInterface', ['ui.bootstrap']);


var ExecutionInterfaceCtrl=function ($scope,$http) {

    //Variables related to Run Workflow

    $scope.WorkflowInputs=[];
    $scope.ExperimentName='';
    $scope.WorkflowInterpreterURL='/axis2/services/WorkflowInterpretor';
    $scope.GFacURL='/axis2/services/GFacService';

    $scope.getWorkflowInputs=function(){

    }

    $scope.todos = [
        {text:'learn angular', done:true},
        {text:'build an angular app', done:false}];

    $scope.addTodo = function() {
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done) $scope.todos.push(todo);
        });
    };
}