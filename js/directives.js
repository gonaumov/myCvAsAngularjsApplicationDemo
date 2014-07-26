/**
 * Directives
 */
var georgiNaumovCvDirectives = angular.module('georgiNaumovCvDirectives', []);

georgiNaumovCvDirectives.directive("cvtree", function (RecursionHelper) {
    return {
        restrict: "E",
        scope: {cvtree: '='},
        templateUrl: './partials/cvtree.html',
        compile: function (element) {
            return RecursionHelper.compile(element, function (scope, iElement, iAttrs, controller, transcludeFn) {
                scope.isObject = function (inputObj) {
                    return angular.isObject(inputObj);
                }
            });
        }
    }
});

