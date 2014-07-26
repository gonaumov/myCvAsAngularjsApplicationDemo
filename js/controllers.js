/* Controllers */

var georgiNaumovCvControllers = angular.module('georgiNaumovCvControllers', []);

georgiNaumovCvControllers.controller('RootController',
    function ($scope, $http) {
        var cvUrl = 'http://query.yahooapis.com/v1/public/yql?q=' +
            encodeURIComponent('SELECT * FROM json WHERE url = "https://sites.google.com/site/learningbashshell/GeorgeNaumovCv.json"') +
            '&format=json&callback=JSON_CALLBACK';
        $http.jsonp(cvUrl)
            .success(function (data) {
                if (angular.isDefined(data.query.results.json.Additional_Details)) {
                    // a secret :)
                    delete data.query.results.json.Additional_Details;
                }

                $scope.cdData = data.query.results.json;
            });
    });
