"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference types="node" />
/// <reference types="jsdom" />
const jsdom_1 = require("jsdom");
const isBirthdayData = true;
const userNameData = 'Maxim';
const createError = (msg) => {
    throw new Error(msg);
};
let ageData;
ageData = 37;
const userData = `{"isBirthdayData": true ,"userNameData": "Masha", "ageData": 36}`;
const userObj = JSON.parse(userData);
console.log('userObj=', userObj);
// function logBirthMsg({ isBirthdayData, userNameData, ageData }: IUser) {
function logBirthMsg(isBirthdayData, userNameData, ageData) {
    if (isBirthdayData === true) {
        console.log(`Congrads ${userNameData.toUpperCase()} with your ${ageData + 1} birthday`);
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
const user1Data = {
    isBirthdayData: true,
    userNameData: 'Mira',
    ageData: 12,
    messages: { error: 'Error56' },
};
function logBirthMsg2({ isBirthdayData, userNameData, ageData, messages: { error: error }, }) {
    if (isBirthdayData) {
        console.log(`Congrads ${userNameData.toUpperCase()} with your ${ageData + 1} birthday`);
    }
    else {
        return createError(error);
    }
}
// logBirthMsg2(user1Data);
//??  Destructure Array =================  array=================================== */
const departments = ['Dev', 'Design', 'Marketing'];
const report = departments
    .filter((d) => d !== 'Dev')
    .map((d) => `${d}-Done`);
const [first] = report;
// const [second] = report[1];
// const secondd = report[1];
// console.log("report", report);
// console.log("first", first);
// console.log("second", second);
// console.log("secondd", secondd);
function ptintMsg(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m));
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
const printReadings = (a, b) => {
    if (typeof a === typeof b) {
        console.log(a, b);
    }
    else
        console.log('False');
};
// printReadings(2, 9);
// printReadings(2, true);
const checkReadings = (reading) => {
    if ('system' in reading) {
        console.log('System', Math.pow(reading.system, 2));
    }
    else
        console.log(reading.user);
};
// checkReadings({ system: 8 });
// checkReadings({ user: 8 });
const logValue = (value) => {
    if (value instanceof Date) {
        console.log(value.getFullYear());
    }
    else
        console.log(value.trim());
};
logValue('        989yii8b    ');
const nn = new Date();
console.log(nn);
logValue(nn);
// ? Literal types Literal types  Literal types  Literal types  Literal types  Literal types
const port3000 = 3000;
const port3001 = 3001;
const startServer = (protocol, port) => {
    if (port === port3000 || port === port3001) {
        console.log(`Server started on protocol ${protocol}://server:${port}`);
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
function createAnimation(id, animation, timingFoo = 'ease', duration, iterCount) {
    const dom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body></body></html>');
    const elem = dom.window.document.querySelector(`#${id}`);
    if (elem) {
        elem.style.animation = `${animation} ${timingFoo} ${duration} ${iterCount}`;
    }
    console.log(`"ID ="${id},${animation} ${timingFoo} ${duration} ${iterCount}`);
}
// Wrap your code inside window.onload
const dom = new jsdom_1.JSDOM('<!DOCTYPE html><html><body></body></html>');
dom.window.onload = () => {
    createAnimation('_1', 'yexyry6yy6', 'ease', 600, 3);
    createAnimation('myElement', 'myAnimation', 'ease-out', 3000, 'infinite');
};
function createAnimation1(id, animation, timingFoo = 'ease', duration, iterCount) {
    const elem = document.querySelector(`#${id}`);
    if (elem) {
        elem.style.animation = `${animation}} ${timingFoo} ${duration} ${iterCount}`;
    }
    // console.log(`${animation} ${timingFoo} ${duration} ${iterCount}`);
}
const serverConfig = {
    protocol: 'http',
    port: 3000,
    role: 'ADMIN',
    log: (body) => console.log('Msgttt', body),
    data: new Date(),
};
const startServer1 = (protocol, port, role, 
// log: Function
log, data) => {
    // console.log(`Server started on protocol ${protocol}://server:${port}`);
    log(`Server started on protocol ${protocol}://server:${port} with role ${role} On date ${data} `);
    return 'Server strded';
};
startServer1(serverConfig.protocol, serverConfig.port, serverConfig.role, serverConfig.log, serverConfig.data);
const styles = {
    position: 'absolute',
    top: '30px',
    right: '50px',
};
const friendsDict = {
    Alfred: '101 oihubib i8bby 999',
    liam: ' 777 airborn ;ljmljnljn',
    Monika: ' 0987654vXXCCVV BBBBBBB',
};
//console.log(просто навести на friendsName);
