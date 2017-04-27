/**
 * Created by zhongmc on 2017/4/27.
 */

/**
 * 定义controller一
 */
actionApp.controller('View1Controller', ['$rootScope', '$scope', '$http',
    function ($rootScope, $scope, $http) {

    $scope.$on('$viewContentLoaded',function () {
       console.log("页面加载完成");
    });

        /**
         * 查询方法 供外部调用
         * 调用http.get()方法发起ajax请求
         */
    $scope.search = function () {
        personName = $scope.personName;
        $http.get('search',{
            params : {personName : personName}
        }).success(function (data) {
            $scope.person = data;
        });
    }
}]);

/**
 * controller 二
 */
actionApp.controller('View2Controller', ['$rootScope', '$scope',
    function ($rootScope, $scope) {

        $scope.$on('$viewContentLoaded',function () {
            console.log("页面加载完成");
        });

    }]);