/**
 * Created by vikranth on 18-04-2017.
 */
/*Routing for front end*/
var myApp = angular.module('myApp',['ngRoute']);
myApp.config(function ($routeProvider) {

    $routeProvider
        .when('/',{
            templateUrl:'templates/list.html',
            controller:'ProductCtrlr'
        })
        .when('/products',{
            templateUrl:'templates/list.html',
            controller:'ProductCtrlr'
        })
        .when('/products/create',{
            templateUrl:'templates/add.html',
            controller:'ProductCtrlr'
        })
        .when('/products/:id/edit',{
            templateUrl:'templates/edit.html',
            controller:'ProductCtrlr'
        })
        .when('/products/:id/show',{
            templateUrl:'templates/show.html',
            controller:'ProductCtrlr'
        });

    });