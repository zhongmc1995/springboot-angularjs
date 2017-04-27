/**
 * Created by zhongmc on 2017/4/27.
 */
/**
 * 定义一个模块
 * @type {module}
 */
var actionApp = angular.module('actionApp',['ngRoute']);
/**
 * 模块配置
 * 配置路由器
 */
actionApp.config(['$routeProvider' , function ($routeProvider) {
    $routeProvider.when('/oper',{
        controller : 'View1Controller',
        templateUrl : 'views/view1.html',
    }).when('/directive',{
        controller : 'View2Controller',
        templateUrl : 'views/view2.html',
    });
}]);