'use strict';

const fabricmuch = angular.module('FabricMuchApp', [
  'ui.router',
  'ui.router.state.events',
  'ui.materialize',
  'ngFileUpload'
  // 'quagga'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('root', {
    url: '/',
    templateUrl: 'app/templates/pages/home.html'
  })

  //parent state - abstract true does not render; placeholder only
  .state('fabrics', {
    abstract: true,
    templateUrl: 'app/templates/pages/fabrics.html'
  })

  //child state of fabric
  .state('fabrics.items', {
    url: '/fabrics',
    views: {
      'fabrics': {
        component: 'fabricsComponent'
      }
    },
    data: { requireAuth: true }
  })

  .state('fabricsDetail', {
    abstract: true,
    templateUrl: 'app/templates/pages/fabric-detail.html',
  })

  .state('fabricsDetail.page', {
    url: '/fabrics/:fabricId',
    views: {
      'fabricsDetail': {
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
    url: '/fabrics/:fabricId/edit',
    views: {
      'editFabric': {
        component: 'fabricEditComponent'
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
  })

  .state('storeFinder', {
    abstract: true,
    templateUrl: 'app/templates/pages/store-finder.html',
  })

  .state('storeFinder.view', {
    url: '/storefinder',
    views: {
      'storefinder': {
        component: 'storeFinderComponent'
      }
    },
    data: { requireAuth: true }
  });
}]);

// .run(function($rootScope, $state, authFactory) {
//   // On every state change, check if auth is required
//   $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
//     if (toState.data && toState.data.requireAuth) {
//       let currentUser = authFactory.getCurrentUser();

//       if (!currentUser && $state.current.name !== 'root') {
//         $state.go('root');
//       };
//     }
//   });
// });

