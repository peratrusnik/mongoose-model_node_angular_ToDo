const app = angular.module('todoApp', [])

app.controller('mainCtrl', function ($scope,$http) {
    //  $scope.car = "Pera"
    $scope.todos = [];
    $scope.newMessage = '';
    $http.get('/todos').then(res => {
        $scope.todos = res.data;        
    })
    $scope.createTodo = function () {
        let data = {
            msg: $scope.newMessage
        }
        $http.post('/todo', data).then(res => {
            $scope.todos = res.data;
            $scope.newMessage = '';
        })
    }
    $scope.filterTodo = function (level) {
        $http.get(`/todos/${level}`).then(res => {
            $scope.todos = res.data;
        })
    }
})