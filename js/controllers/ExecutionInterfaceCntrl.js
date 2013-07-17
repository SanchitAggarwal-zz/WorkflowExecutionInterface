/*
 *
 * Controllers for the execution interface
 *
 */

// The angular module for the execution interface which depends on Angular-UI
var executionInterface = angular.module('executionInterface',['ui']);


var executionInterfaceCtrl=function ($scope,$http) {

    //Variables related to Run Workflow

    $scope.isWorkflowOpen=false;
    $scope.isWorkflowRunning=false;
    $scope.workflowInputs=[];
    $scope.experimentName='';
    $scope.workflowInterpreterURL='/axis2/services/WorkflowInterpretor';
    $scope.gfacURL='/axis2/services/GFacService';
    $scope.templateId='';

    //get the inputs for the open workflow
    $scope.getWorkflowInputs=function(){

    };

    //validate the inputs
    $scope.validateInputs=function(){

    };

    //run experiment
    $scope.runExperiment=function(){

    };

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