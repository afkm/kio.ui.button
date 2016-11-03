
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
            template:'<div class="ui-button ui-button--{{button.type}} is-{{button.state}}"><a ng-if="button.ref" ui-sref="{{button.ref}}" ng-click="button.blurCond()"></a><div ng-if="button.type === \'close-square\' || button.type === \'openclose\' || button.type === \'plus\' || button.type === \'plus-small\'" class="ui-button__inner"><svg width="100%" height="100%" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M14.163 11.496L1.683.57.54 1.627l-.012.01 10.97 12.526L.57 26.643l1.057 1.145.01.01L14.162 16.83l12.48 10.925 1.145-1.056.01-.01L16.83 14.162l10.926-12.48L26.7.54l-.01-.012-12.527 10.97zm-2.803 2.66l.003-.002.002.002-.002.003-.003-.004z" fill="#fff"></path></g></svg></div><div ng-if="button.type === \'minus\'" class="ui-button__inner"><svg width="26" height="4" viewBox="0 0 26 4" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M13 0l13 .932v.02l-.045 2.12L13.003 4H13L0 3.068v-.02L.046.928 12.997 0H13" fill="#fff"></path></g></svg></div><div ng-if="button.type === \'continue-square\' || button.type === \'continue-square-bright\' || button.type === \'arrow-left\' || button.type === \'arrow-right\' || button.type === \'arrow-left-circle\' || button.type === \'arrow-right-circle\' || button.type === \'arrow-left-square\' || button.type === \'arrow-right-square\'" class="ui-button__inner" ng-class="{\'has-caption\' : button.text}"><span class="ui-button__caption" ng-if="button.text">{{button.text}}</span> <span class="ui-button__symbol"><svg width="100%" height="100%" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M33.255 17.686L15.23 33.896l-1.03-1.218 14.236-14.56H0v-2.342h28.434L14.2 1.218 15.23 0l18.025 16.21v1.476z" fill="#fff"></path></g></svg></span></div><div ng-if="button.type === \'down-trans\'" class="ui-button__inner"><svg width="100%" height="100%" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M33.255 17.686L15.23 33.896l-1.03-1.218 14.236-14.56H0v-2.342h28.434L14.2 1.218 15.23 0l18.025 16.21v1.476z" fill="#fff"></path></g></svg></div><div ng-if="button.type === \'top-small\'" class="ui-button__inner"><svg width="100%" height="100%" viewBox="0 0 28 16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M14.913 5.807l11.75 10.103 1.105-.95L14.542.027 14.52 0h-1.27L0 14.96l1.104.95 11.75-10.1 2.06-.003" fill="#fff"></path></g></svg></div><div ng-if="button.type === \'play\'" class="ui-button__inner"><svg width="21" height="35" viewBox="0 0 21 35" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M2.866 30.734l11.848-11.93-.003-2.597L2.867 4.277v26.457zM0 33.62l1.197 1.39L20.06 18.307v-1.6L1.198 0 0 1.39v32.23z" fill="#fff"></path></g></svg></div><div ng-if="button.type === \'pause\'" class="ui-button__inner"><svg width="14" height="20" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M0 0l.98 19.998H1l2.968-.035L4.2 0H0zm13.02 20H13l-2.97-.035L9.8.005 14 0l-.98 20z" fill="#fff"></path></g></svg></div><div ng-if="button.type === \'rewind\'" class="ui-button__inner"><svg width="22" height="24" viewBox="0 0 22 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="#fff"><path d="M5.532 10.655L12.004.933 10.516 0 0 10.884v1.706l10.516 10.884 1.488-.932-6.47-9.722-.002-2.165"></path><path d="M14.807 10.655L21.28.933 19.79 0 9.277 10.884v1.706L19.79 23.474l1.49-.932-6.47-9.722-.003-2.165"></path></g></g></svg></div><div ng-if="button.type === \'info\'" class="ui-button__inner"><svg width="10" height="33" viewBox="0 0 10 33" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.496C7.2.768 6.768 0 4.992 0 3.168 0 2.64.768 2.64 2.496c0 1.824.528 2.64 2.352 2.64 1.776 0 2.208-.816 2.208-2.64zm2.448 29.52v-1.584l-3.6-1.056-.096-.192V9.792L0 11.568v1.392l3.6.624.096.192v15.792l-.144.192H.48v2.256h9.168z" fill="#FFF" fill-rule="evenodd"></path></svg></div><div ng-if="button.type === \'logout\'" class="ui-button__inner"><svg width="20" height="23" viewBox="0 0 21 23" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M13.912 3.72l-.262 2.86c2.1 1.3 3.675 3.64 3.675 6.24 0 4.16-3.412 7.28-7.35 7.28-3.938 0-7.35-3.38-7.35-7.28 0-2.6 1.313-4.68 3.412-5.98l-.262-2.86C2.362 5.54 0 8.92 0 12.82c0 5.46 4.463 9.88 9.975 9.88 5.513 0 9.975-4.42 9.975-9.88.262-4.16-2.363-7.54-6.037-9.1z" fill="#010202"></path><path d="M9.975 10h1.107l.474-9.214H8.394L9.026 10h.95z" fill="#000"></path></g></svg></div></div>',
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
