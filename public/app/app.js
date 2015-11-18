angular.module('app', ['ngResource','ngRoute', 'angularUtils.directives.dirPagination', 'textAngular']);

angular.module('app').config(function($routeProvider, $locationProvider) {

    var routeRoleCheck = {
       admin: {
           auth: function (mvAuth) {
               return mvAuth.authorizeCurrentUserForRoute('admin')
           }
       },
        user: {
            auth: function(mvAuth) {
                return mvAuth.authorizeAuthenticatedUserForRoute()
            }

        }
    }

    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: '/partials/main/main',
            controller: 'mvMainCtrl'
        })
        .when('/admin/users', {
            templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl', resolve: routeRoleCheck.admin
        })
        .when('/signup', {
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile', {
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl', resolve: routeRoleCheck.user
        })
        .when('/courses', {
            templateUrl: '/partials/courses/course-list',
            controller: 'mvCourseListCtrl'
        })
        .when('/courses/:id', {
            templateUrl: '/partials/courses/course-details',
            controller: 'mvCourseDetailCtrl'
        })
        .when('/tickets', {
            templateUrl: '/partials/tickets/ticket-list',
            controller: 'mvTicketListCtrl', resolve: routeRoleCheck.user
        })
        .when('/tickets/ticket-list-admin', {
            templateUrl: '/partials/tickets/ticket-list-admin',
            controller: 'mvTicketListCtrl', resolve: routeRoleCheck.admin
        })
        .when('/tickets/add', {
            templateUrl: '/partials/tickets/ticket-add',
            controller: 'mvTicketCreateCtrl', resolve: routeRoleCheck.user
        })
        .when('/tickets/:id', {
            templateUrl: '/partials/tickets/ticket-detail',
            controller: 'mvTicketDetailCtrl', resolve: routeRoleCheck.user
        })


});

// this is going to be a run section on my app module.
// by calling "run", the code within here is going to be executed
// after the module's been completely configured.
// so, it's going to be run after the code that's defined above

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
})