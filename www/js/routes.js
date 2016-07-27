angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/ebecfinal');


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    .state('eBECFINAL', {
        url: '/ebecfinal',
        templateUrl: 'templates/eBECFINAL.html',
        controller: 'eBECFINALCtrl'
    })

    .state('taxify', {
        url: '/taxify',
        templateUrl: 'templates/taxify.html',
        controller: 'taxifyCtrl'
    })

    .state('maps', {
        url: '/maps',
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
    })

    .state('schedule', {
        url: '/schedule',
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
    })

    .state('contactOrganizers', {
        url: '/contact-organizers',
        templateUrl: 'templates/contactOrganizers.html',
        controller: 'contactOrganizersCtrl'
    })

    .state('rules', {
        url: '/rules',
        templateUrl: 'templates/rules.html',
        controller: 'rulesCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
    })

    .state('eBEC', {
        url: '/ebec',
        templateUrl: 'templates/eBEC.html',
        controller: 'eBECCtrl'
    })

    .state('welcomeToBelgrade', {
        url: '/welcome-to-belgrade',
        templateUrl: 'templates/welcomeToBelgrade.html',
        controller: 'welcomeToBelgradeCtrl'
    })

    .state('bEST', {
        url: '/best',
        templateUrl: 'templates/bEST.html',
        controller: 'bESTCtrl'
    })

    .state('organizers', {
        url: '/organizers',
        templateUrl: 'templates/organizers.html',
        controller: 'organizersCtrl'
    })

    .state('participants', {
        url: '/participants',
        templateUrl: 'templates/participants.html',
        controller: 'participantsCtrl'
    })
    .state('day1', {
        url: '/day-1',
        templateUrl: 'templates/day1.html',
        controller: 'day1Ctrl'
    })
    .state('day2', {
        url: '/day-2',
        templateUrl: 'templates/day2.html',
        controller: 'day2Ctrl'
    })
    .state('day3', {
        url: '/day-3',
        templateUrl: 'templates/day3.html',
        controller: 'day3Ctrl'
    })
    .state('day4', {
        url: '/day-4',
        templateUrl: 'templates/day4.html',
        controller: 'day4Ctrl'
    })
    .state('day5', {
        url: '/day-5',
        templateUrl: 'templates/day5.html',
        controller: 'day5Ctrl'
    })
    .state('day6', {
        url: '/day-6',
        templateUrl: 'templates/day6.html',
        controller: 'day6Ctrl'
    })
    .state('day7', {
        url: '/day-7',
        templateUrl: 'templates/day7.html',
        controller: 'day7Ctrl'
    })
    .state('day8', {
        url: '/day-8',
        templateUrl: 'templates/day8.html',
        controller: 'day8Ctrl'
    })
    .state('day9', {
        url: '/day-9',
        templateUrl: 'templates/day9.html',
        controller: 'day9Ctrl'
    })
    .state('day10', {
        url: '/day-10',
        templateUrl: 'templates/day10.html',
        controller: 'day10Ctrl'
    })




})