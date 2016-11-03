
/* commonjs package manager support (eg componentjs) */
if (typeof module !== "undefined" && typeof exports !== "undefined" && module.exports === exports){

    module.exports = 'kio.ui.button';
}


(function (angular) {
    'use strict';


    return angular
        .module('kio.ui.button', [])
        .directive('uiButton', uiButton);


    /** @ngInject */
    function uiButton () {

        var directive = {
            restrict: 'E',
            templateUrl: 'ui-button.directive.html',
            scope: true,
            controller: UiButtonController,
            controllerAs: 'button',
            link: linkFunc,
            bindToController: {
                type: '@',
                text: '@',
                color: '@',
                ref: '@',
                state: '@'
            }
        };

        return directive;


        function linkFunc (scope, ele, attr, vm) {

            vm.link = ele[0].querySelector("a");
        }


        /** @ngInject */
        function UiButtonController () {


            var vm = this;

            /// @param type can be
            /// default,
            /// close, plus, plus-small, minus, next, top, top-small, pause, rewind, play,
            /// back-square, close-square,
            /// down-trans,
            /// continue, bigstart
            /// openclose

            if (!vm.type) {

                vm.type = 'default';
            }


            if (!vm.state) {

                vm.state = 'tbd';
            }


            // if this is no real link, unfocus after click

            vm.blurCond = function () {

                if (!vm.ref) {

                    vm.link.blur();
                }
            };
        }
    }

})(window.angular);
