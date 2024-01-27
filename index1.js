"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="node" />
/// <reference types="jsdom" />
var jsdom_1 = require("jsdom");
var isBirthdayData = true;
var userNameData = 'Maxim';
var createError = function (msg) {
    throw new Error(msg);
};
var ageData;
ageData = 37;
var userData = "{\"isBirthdayData\": true ,\"userNameData\": \"Masha\", \"ageData\": 36}";
var userObj = JSON.parse(userData);
console.log('userObj=', userObj);
// function logBirthMsg({ isBirthdayData, userNameData, ageData }: IUser) {
function logBirthMsg(isBirthdayData, userNameData, ageData) {
    if (isBirthdayData === true) {
        console.log("Congrads ".concat(userNameData.toUpperCase(), " with your ").concat(ageData + 1, " birthday"));
    }
    else if (typeof isBirthdayData === 'string') {
        return console.log('Too bad');
    }
    else
        return createError('Errorerrerorrerer');
}
logBirthMsg('true', 'Masha', 38);
// logBirthMsg(userObj);
// const logBirthMsg = (
//   isBirthdayData: boolean,
//   userNameData: string,
//   ageData: number
// ): string => {
//   if (isBirthdayData) {
//     return `Congrads ${userNameData.toUpperCase()} with your ${
//       ageData + 1
//     } birthday`;
//   }
//   // else return createError("Error");
//   else return "Error";
// };
// logBirthMsg(isBirthdayData, userNameData, 37);
//??  Destructure OBJ ==================================================== */
var user1Data = {
    isBirthdayData: true,
    userNameData: 'Mira',
    ageData: 12,
    messages: { error: 'Error56' },
};
function logBirthMsg2(_a) {
    var isBirthdayData = _a.isBirthdayData, userNameData = _a.userNameData, ageData = _a.ageData, error = _a.messages.error;
    if (isBirthdayData) {
        console.log("Congrads ".concat(userNameData.toUpperCase(), " with your ").concat(ageData + 1, " birthday"));
    }
    else {
        return createError(error);
    }
}
// logBirthMsg2(user1Data);
//??  Destructure Array =================  array=================================== */
var departments = ['Dev', 'Design', 'Marketing'];
var report = departments
    .filter(function (d) { return d !== 'Dev'; })
    .map(function (d) { return "".concat(d, "-Done"); });
var first = report[0];
// const [second] = report[1];
// const secondd = report[1];
// console.log("report", report);
// console.log("first", first);
// console.log("second", second);
// console.log("secondd", secondd);
function ptintMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(function (m) { return console.log(m); });
    }
    else if (typeof msg === 'number') {
        console.log(msg.toFixed());
    }
    else
        console.log(msg);
}
// ptintMsg(5.778787);
// ptintMsg(["jyfvvyufv", "1111", "7i6ru6ru6"]);
// ptintMsg(false);
var printReadings = function (a, b) {
    if (typeof a === typeof b) {
        console.log(a, b);
    }
    else
        console.log('False');
};
// printReadings(2, 9);
// printReadings(2, true);
var checkReadings = function (reading) {
    if ('system' in reading) {
        console.log('System', Math.pow(reading.system, 2));
    }
    else
        console.log(reading.user);
};
// checkReadings({ system: 8 });
// checkReadings({ user: 8 });
var logValue = function (value) {
    if (value instanceof Date) {
        console.log(value.getFullYear());
    }
    else
        console.log(value.trim());
};
logValue('        989yii8b    ');
var nn = new Date();
console.log(nn);
logValue(nn);
// ? Literal types Literal types  Literal types  Literal types  Literal types  Literal types
var port3000 = 3000;
var port3001 = 3001;
var startServer = function (protocol, port) {
    if (port === port3000 || port === port3001) {
        console.log("Server started on protocol ".concat(protocol, "://server:").concat(port));
    }
    return 'Server startediiiii';
};
startServer('https', 3000);
//??      timingFoo: "ease" | "ease-out" | "ease-in" = "ease",   timingFoo: "ease" | "ease-out" | "ease-in" = "ease",
// function createAnimation(
// 	id: string | number,
// 	animation: string,
// 	timingFoo: 'ease' | 'ease-out' | 'ease-in' = 'ease',
// 	duration: number,
// 	iterCount: 'infinite' | number
// ): void {
// 	const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
// 	const elem = dom.window.document.querySelector(`#${id}`) as HTMLElement
// 	// const elem = document.querySelector(`#${id}`) as HTMLElement
// 	if (elem) {
// 		elem.style.animation = `${animation}} ${timingFoo} ${duration} ${iterCount}`
// 	}
// 	console.log(`${animation} ${timingFoo} ${duration} ${iterCount}`)
// }
function createAnimation(id, animation, timingFoo, duration, iterCount) {
    if (timingFoo === void 0) { timingFoo = 'ease'; }
    var dom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body></body></html>');
    var elem = dom.window.document.querySelector("#".concat(id));
    if (elem) {
        elem.style.animation = "".concat(animation, " ").concat(timingFoo, " ").concat(duration, " ").concat(iterCount);
    }
    console.log("\"ID =\"".concat(id, ",").concat(animation, " ").concat(timingFoo, " ").concat(duration, " ").concat(iterCount));
}
// Wrap your code inside window.onload
var dom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body></body></html>');
dom.window.onload = function () {
    createAnimation('_1', 'yexyry6yy6', 'ease', 600, 3);
    createAnimation('myElement', 'myAnimation', 'ease-out', 3000, 'infinite');
};
function createAnimation1(id, animation, timingFoo, duration, iterCount) {
    if (timingFoo === void 0) { timingFoo = 'ease'; }
    var elem = document.querySelector("#".concat(id));
    if (elem) {
        elem.style.animation = "".concat(animation, "} ").concat(timingFoo, " ").concat(duration, " ").concat(iterCount);
    }
    // console.log(`${animation} ${timingFoo} ${duration} ${iterCount}`);
}
var serverConfig = {
    protocol: 'http',
    port: 3000,
    role: 'ADMIN',
    log: function (body) { return console.log('Msg', body); },
    data: new Date(),
};
var startServer1 = function (protocol, port, role, 
// log: Function
log, data) {
    // console.log(`Server started on protocol ${protocol}://server:${port}`);
    log("Server started on protocol ".concat(protocol, "://server:").concat(port, " with role ").concat(role, " On date ").concat(data, " "));
    return 'Server started';
};
startServer1(serverConfig.protocol, serverConfig.port, serverConfig.role, serverConfig.log, serverConfig.data);
var styles = {
    position: 'absolute',
    top: '30px',
    right: '50px',
};
