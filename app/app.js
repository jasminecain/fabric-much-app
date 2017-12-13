'use strict';

const fabricmuch = angular.module('FabricMuchApp', [
  'ui.router',
  'ui.router.state.events'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('root', {
    url: '/',
    templateUrl: 'app/templates/pages/home.html'
  })

  //parent state - abstract true does not render; placeholder only
  .state('fabric', {
    abstract: true,
    templateUrl: 'app/templates/pages/fabric.html'
  })

  //child state of fabric
  .state('fabric.items', {
    url: '/fabric',
    views: {
      'fabric': {
        component: 'fabricComponent'
      }
    },
    data: { requireAuth: true }
  })

  .state('fabric.detail', {
    url: '/fabric/:fabricId',
    views: {
      'fabricDetail': {
        component: 'fabricDetailComponent'
      }
    },
    data: {requireAuth: true }
  })

  .state('editFabric', {
    abstract: true,
    templateUrl: 'app/templates/pages/fabric-edit.html',
  })

  .state('editFabric.view', {
    url: '/fabric/:fabricId/edit',
    views: {
      'editFabric': {
        component: 'editFabricComponent'
      }
    },
    data: { requireAuth: true }
  })

  .state('profile', {
    abstract: true,
    templateUrl: 'app/templates/pages/profile-view.html',
  })

  .state('profile.view', {
    url: '/profile',
    views: {
      'profile': {
        component: 'profileViewComponent'
      }
    },
    data: { requireAuth: true }
  });
}])
