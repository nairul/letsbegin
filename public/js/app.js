(function() {

"use strict";

angular
  .module("letsBegin", [
    "auth0.lock",
    "angular-jwt",
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    Router
  ])
  .config(
    function($sceDelegateProvider, lockProvider, $urlRouterProvider){
       $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'https://www.youtube.com/**',
    'https://developer.mozilla.org/**'
    ]);
    lockProvider.init({
      clientID: 'asKlYQz5evgkrfIcNzfCGfygYx12P5zM',
      domain: 'nairul.auth0.com',
      options: {
        _idTokenVerification: false
      }
      });
    $urlRouterProvider.otherwise('/');
    }
  )
  .factory("ResourceFactory", [
    "$resource",
    ResourceFactory
  ])
  .controller("indexCtrl", [
    "$state",
    "ResourceFactory",
    "authService",
    indexController
  ])

  function Router ($stateProvider, lockProvider, $urlRouterProivder) {
    $stateProvider
      .state("index", {
        url: "/",
        templateUrl: "/assets/js/ng-views/index.html",
        controller: "indexCtrl",
        controllerAs: "vm"
      })
  }

  function ResourceFactory ($resource) {
    return $resource("/api/resources/:name", {}, {
      update: { method: "PUT" }
    });
  }

  function indexController ($state, ResourceFactory, authService) {
    this.resources = ResourceFactory.query()
    // this.newResource = new Show()
    // this.create = function () {
    //   this.newResource.$save().then(function(show){
    //     $state.go("index", { name: show.name} )
    //   })
    // }
    var vm = this
    vm.authService = authService
    authService.getProfileDeferred().then(function (profile) {
    vm.user = profile;
    });
  }

})();