/*
 *
 * Controllers for the execution interface
 *
 */

// The angular module for the execution interface which depends on Angular-UI
var executionInterface = angular.module('executionInterface',['ui']);


//Main Controller for execution Interface
var executionInterfaceCtrl=function ($scope,$http) {

    //Variables related to Run Workflow

    $scope.isWorkflowOpen=true;
    $scope.isWorkflowRunning=false;
    $scope.workflowInputs=[];
    $scope.experimentName='Experiment Name';
    $scope.workflowInterpreterURL='Workflow Interpreter URL';
    $scope.gfacURL='GFac URL';
    $scope.templateId='';

    $scope.workflowInputs.push({"id":$scope.experimentName,"name":$scope.experimentName,"datatype":"","value":"Experiment Name"});
    $scope.workflowInputs.push({"id":$scope.workflowInterpreterURL,"name":$scope.workflowInterpreterURL,"datatype":"","value":"Workflow Interpreter URL"});
    $scope.workflowInputs.push({"id":$scope.gfacURL,"name":$scope.gfacURL,"datatype":"","value":"gfacURL"});

    //get the inputs for the open workflow to render run workflow modal
    $scope.getWorkflowInputs=function(){
          //Airavata Client API call to get number of inputs for given template id
    };

    //validate the inputs
    $scope.validateInputs=function(){

    };

    //run experiment
    $scope.runExperiment=function(){
         //Airavata client API call to run experiment with
    };

}