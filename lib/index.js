"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hold = void 0;
function hold(time) {
    if (typeof time === 'number') {
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(); }, time);
        });
    }
    else if (typeof time === 'string') {
        if (time.endsWith('ms')) {
            var number_1 = parseInt(time.split('ms')[0]);
            return new Promise(function (resolve) {
                setTimeout(function () { return resolve(); }, number_1);
            });
        }
        else if (time.endsWith('s')) {
            var number_2 = parseInt(time.split('s')[0]);
            return new Promise(function (resolve) {
                setTimeout(function () { return resolve(); }, number_2);
            });
        }
        else {
            throw new Error("Can't parse given time string: " + time);
        }
    }
    else {
        throw new Error("Time must have a type of number or string, but recieved " + typeof time);
    }
}
exports.hold = hold;
