module.exports = (function () {
    'use strict';

    Date.prototype.valueOfInUnix = function () {
        var temp = this.valueOf();
        temp = Math.floor(temp / 1000);
        return temp;
    };

    if (!Date.nowValueInUnix) {
        Date.nowValueInUnix = function () {
            return new Date().valueOfInUnix();
        };
    }

    if (!Date.fromUnix) {
        Date.fromUnix = function (unixValue) {
            var value = unixValue * 1000;
            return new Date(value);
        };
    }

})();
