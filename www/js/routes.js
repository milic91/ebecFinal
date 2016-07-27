angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/page1');


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



    .state('eBECFINAL', {
        url: '/page1',
        templateUrl: 'templates/eBECFINAL.html',
        controller: 'eBECFINALCtrl'
    })

    .state('taxify', {
        url: '/taxify',
        templateUrl: 'templates/taxify.html',
        controller: 'taxifyCtrl'
    })

    .state('maps', {
        url: '/page3',
        templateUrl: 'templates/maps.html',
        controller: 'mapsCtrl'
    })

    .state('schedule', {
        url: '/page4',
        templateUrl: 'templates/schedule.html',
        controller: 'scheduleCtrl'
    })

    .state('contactOrganizers', {
        url: '/page6',
        templateUrl: 'templates/contactOrganizers.html',
        controller: 'contactOrganizersCtrl'
    })

    .state('rules', {
        url: '/page7',
        templateUrl: 'templates/rules.html',
        controller: 'rulesCtrl'
    })

    .state('about', {
        url: '/page8',
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
    })

    .state('eBEC', {
        url: '/page9',
        templateUrl: 'templates/eBEC.html',
        controller: 'eBECCtrl'
    })

    .state('welcomeToBelgrade', {
        url: '/page10',
        templateUrl: 'templates/welcomeToBelgrade.html',
        controller: 'welcomeToBelgradeCtrl'
    })

    .state('bEST', {
        url: '/page11',
        templateUrl: 'templates/bEST.html',
        controller: 'bESTCtrl'
    })

    .state('organizers', {
        url: '/page12',
        templateUrl: 'templates/organizers.html',
        controller: 'organizersCtrl'
    })

    .state('participants', {
            url: '/page13',
            templateUrl: 'templates/participants.html',
            controller: 'participantsCtrl'
        })
        .state('day1', {
            url: '/page8',
            templateUrl: 'templates/day1.html',
            controller: 'day1Ctrl'
        })
        .state('day2', {
            url: '/page10',
            templateUrl: 'templates/day2.html',
            controller: 'day2Ctrl'
        })
        .state('day3', {
            url: '/page11',
            templateUrl: 'templates/day3.html',
            controller: 'day3Ctrl'
        })
        .state('day4', {
            url: '/page12',
            templateUrl: 'templates/day4.html',
            controller: 'day4Ctrl'
        })
        .state('day5', {
            url: '/page13',
            templateUrl: 'templates/day5.html',
            controller: 'day5Ctrl'
        })
        .state('day6', {
            url: '/page14',
            templateUrl: 'templates/day6.html',
            controller: 'day6Ctrl'
        })
        .state('day7', {
            url: '/page15',
            templateUrl: 'templates/day7.html',
            controller: 'day7Ctrl'
        })
        .state('day8', {
            url: '/page16',
            templateUrl: 'templates/day8.html',
            controller: 'day8Ctrl'
        })
        .state('day9', {
            url: '/page17',
            templateUrl: 'templates/day9.html',
            controller: 'day9Ctrl'
        })
        .state('day10', {
            url: '/page18',
            templateUrl: 'templates/day10.html',
            controller: 'day10Ctrl'
        })




})