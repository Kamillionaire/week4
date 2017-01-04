var weekFour;
(function (weekFour) {
    var Components;
    (function (Components) {
        var name = 'boxerList';
        var template = '/ngApp/components/boxerList/boxerList.html';
        var BoxerList = (function () {
            function BoxerList(BoxerService) {
                var _this = this;
                this.BoxerService = BoxerService;
                this.BoxerService.getBoxers()
                    .then(function (data) {
                    _this.boxers = data;
                }).catch(function (e) {
                    _this.boxers = [];
                    throw new Error(e);
                });
            }
            return BoxerList;
        }());
        Components.BoxerList = BoxerList;
        angular.module('week-four').component(name, {
            templateUrl: template,
            controller: weekFour.Components.BoxerList,
            controllerAs: 'vm'
        });
    })(Components = weekFour.Components || (weekFour.Components = {}));
})(weekFour || (weekFour = {}));
