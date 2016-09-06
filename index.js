var template = require('./uibtn.html');


(function () {
    'use strict';




    return angular
        .module('kio.uibutton', [])
        .directive('uiButton', uiButton);


    /** @ngInject */
    function uiButton () {
        var directive = {
            restrict: 'E',
            // templateUrl: templateUrl,
            template: '<h1>Hello Kris</h1>',
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

            console.log('dftc');

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

})();