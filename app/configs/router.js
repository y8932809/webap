'use strict';

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state('default', {
    url: '',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'controllers/home/index.html',
    controller: 'HomeIndexCtrl'
  });

  $stateProvider.state('notFound', {
    url: '/notFound',
    templateUrl: 'controllers/home/notFound.html',
    controller: 'HomeNotFoundCtrl'
  });

  $urlRouterProvider.otherwise('/notFound');
});
//定义父路由
$urlRouterProvider.state('reader',{
  url:'/readr',
  template:'<div ui-view></div>',
  abstract:true
});
//定义子路由
$urlRouterProvider.state('reader.create',{
 url:'create',
  templateUrl:'contrullers/reader/create.html',
  controller:'ReaderCreateCtrl as vm'
});
