"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? TUPLE Кортеж
const userDataTuple = [
    true,
    48,
    'Jameson',
    'Max',
    'John',
];
const userDataTuple1 = [
    true,
    false,
    false,
    48,
    'Jameson',
];
const res = userDataTuple.map(t => `${t} - data`);
const res1 = userDataTuple1.map(t => `${t} - data`);
console.log(res);
console.log(res1);
//?????      !!!!!!!!! from index1.ts  продолжение урока в видео 24 про интерфейсы на 16 minуте 30 secунде
//* Благодаря такому Интерфейсу мы можем Фильтровать то что нам приходит из например serverNewConfig и backNewConfig --
const serverNewConfig = {
    protocol: 'http',
    port: 3000,
    role: 'ADMIN',
};
//! либо  наоборот , еслт мы добавим BasicConfig - то нам не пропустит role !!  закоментир верхний BasicConfig и разкомент нижний
// const serverNewConfig: BasicConfig = {
// 	protocol: 'http',
// 	port: 3000,
// 	role: 'ADMIN',
// }
const backNewConfig = {
    protocol: 'https',
    port: 3001,
};
const startServerNew = (config) => {
    console.log(`Server started on protocol ${config.protocol}://server:${config.port}`);
    return 'Server started';
};
startServerNew(serverNewConfig);
startServerNew(backNewConfig);
const user = {
    login: 'Maxim75',
    password: 'qwerty',
    age: 47,
};
const userFreeze = {
    login: 'Maxim755',
    password: 'qwerty5',
    age: 45,
};
user.password = 'i8bt7';
// userFreeze.passwod="i8bt7"
function sendUserData(obj, db) {
    var _a, _b;
    console.log((_b = (_a = obj.parents) === null || _a === void 0 ? void 0 : _a.father) === null || _b === void 0 ? void 0 : _b.toLowerCase(), db === null || db === void 0 ? void 0 : db.toUpperCase());
}
const basicPorts = [3000, '3001', '3002'];
// basicPorts[0] = 55;
// basicPorts.push("guu u  ");
const basicPorts1 = [3000, 3001, 3002];
const basicPorts2 = [3000, 3001, 3002];
// basicPorts2[0] = 55;
// basicPorts2.push("guu u  ");
//**  -- ENUM enum ---- ENUM enum ---- ENUM enum ---- ENUM enum ---- ENUM enum ---- ENUM enum -  */
var Directions;
(function (Directions) {
    Directions[Directions["TOP"] = 1] = "TOP";
    Directions[Directions["RIGHT"] = 2] = "RIGHT";
    Directions[Directions["LEFT"] = 7] = "LEFT";
    Directions[Directions["BOTTOM"] = 9] = "BOTTOM";
})(Directions || (Directions = {}));
var TimingFunc;
(function (TimingFunc) {
    TimingFunc["EASE"] = "ease";
    TimingFunc["EASE_IN"] = "ease-in";
    TimingFunc["LINEAR"] = "linear";
})(TimingFunc || (TimingFunc = {}));
var TimingFuncN;
(function (TimingFuncN) {
    TimingFuncN[TimingFuncN["EASE"] = 9] = "EASE";
    TimingFuncN[TimingFuncN["EASE_IN"] = 10] = "EASE_IN";
    TimingFuncN[TimingFuncN["LINEAR"] = 18] = "LINEAR";
})(TimingFuncN || (TimingFuncN = {}));
function frame(elem, dir, tFunc) {
    if (dir === Directions.RIGHT) {
        console.log(tFunc);
        console.log(dir);
        console.log(elem);
    }
}
frame('ID', Directions.RIGHT, TimingFuncN.LINEAR);
//* --UNKNOWN unknown=--UNKNOWN unknown--UNKNOWN unknown--UNKNOWN unknown=--UNKNOWN unknown=
// let smth: unknown;
// smth = "str";
// let data: string[] = smth;
// data.find((e) => e);
// let someValue: any;
// someValue = "str";
// let dataN: string[] = someValue;
// dataN.find((e) => e);
const userDataN = `{"isBirthdayData": true ,"userNameData": "Masha", "ageData": 36}`;
function saveParse(s) {
    return JSON.parse(s);
}
const data = saveParse(userDataN);
function transferData(d) {
    if (typeof d === 'string') {
        console.log(d.toLocaleUpperCase());
    }
    else if (d && typeof d === 'object') {
        console.log(d);
    }
    else
        console.error('Some ERROR');
    ('Some');
}
//* -- Запросы Типов-- Запросы Типов -- Запросы Типов -- Запросы Типов -- Запросы Типов
const dataFromControl = {
    water: 200,
    el: 350,
};
function checkReadingsN(data) {
    const dataFromUser = {
        water: 200,
        el: 350,
    };
    if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
        return true;
    }
    else
        return false;
}
console.log(checkReadingsN(dataFromControl));
const PI = 3.14;
let piClone;
// * -- Type assertion-- Type assertion-- Type assertion-- Type assertion-- Type assertion
const fetchData = (url, method) => {
    // console.log(method);
};
//? First ----------------------------==================================
const reqOptions = {
    url: 'https://someurl.com',
    method: 'GET',
};
fetchData(reqOptions.url, reqOptions.method);
//? Second ----------------------------==================================
const reqOptions2 = {
    url: 'https://someurl.com',
    // method: "GET",
    method: 'GET',
};
fetchData(reqOptions2.url, reqOptions2.method);
//? Third ----------------------------==================================
const reqOptions3 = {
    url: 'https://someurl.com',
    method: 'GET',
};
fetchData(reqOptions3.url, reqOptions3.method);
//* DOM work with errors==========================================================================================
const box = document.querySelector('.box');
// box.style;
// box?.classList;
// const input = document.querySelector("input") as HTMLInputElement;
// //* 1
// const someNumber: number = Number(input.value);
// console.log("someNumber", someNumber);
// //* 2
// const someNumber1: number = +input.value;
// console.log("someNumber1", someNumber1);
// //* 3 НЕ очень хорошо так делать
// const someNumber2: number = input.value as any as number;
// console.log("someNumber2", someNumber2);
let b = { e: '9y8uig', c: false };
let c = [44, 88];
let value = 'value';
let obj = { e: 'aogf', c: false };
let arr = ['yftyd', 'hv'];
// let TO = arr as const;
let a = Math.round(Math.random() * 1) ? 'YES' : 'No';
const department = {
    name: 'web-dev',
    budget: 30000,
};
//* так будет  name и budget и projectBudget, А нам нужно name и projectBudget !
// const mainProject: Project = {
//   ...department,
//   projectBudget: 5000,
// };
function transformDepartment(dep, amount) {
    return {
        name: dep.name,
        projectBudget: amount,
    };
}
const mainProject2 = transformDepartment(department, department.budget);
// console.log(mainProject2);
function ptintMsg1(msg) {
    if (Array.isArray(msg)) {
        msg.forEach(m => console.log(m));
    }
    else if (isNumber(msg)) {
        console.log(msg.toFixed());
    }
    else
        console.log(msg);
    console.log('source', msg);
}
ptintMsg1(5.778787);
ptintMsg1(['jyfvvyufv', '1111', '7i6ru6ru6']);
ptintMsg1(false);
// *FOO  PREDICAT-------------------------------------------------------------------------------------------------
function isNumber(n) {
    return typeof n === 'number';
}
//? ВАЖНО !!! без : car is Car  не будет правильно работать если попробуем мспользовать boolean
//?  :car is Car -- называется type flow
function isCar(car) {
    // return "wheels" in car;
    //* можно и так
    return car.wheels !== undefined;
}
function isShip(ship) {
    return ship.sail !== undefined;
}
function repairVehicle(vehicle) {
    switch (vehicle.name) {
        case 'car':
            console.log(vehicle.wheels.number * 2);
            break;
        case 'ship':
            console.log(vehicle.sail.size);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        default:
            const smth = vehicle;
            console.log('Ouuuuups!');
            break;
    }
}
function calculatefArea(a, b) {
    if (b) {
        const rect = {
            a,
            b,
            area: a * b,
        };
        return rect;
    }
    else {
        const square = {
            a,
            area: a * a,
        };
        return square;
    }
}
const carr = {
    name: 'car',
    engine: 'V8',
};
function repairVehicle1(vehicle) {
    switch (vehicle.name) {
        case 'car':
            console.log('vehicle.wheels! * 2', vehicle.wheels * 2);
            console.log('wheels', vehicle.wheels);
            console.log('engine', vehicle.engine);
            break;
        case 'ship':
            console.log(vehicle.sail);
            break;
        case 'airplane':
            console.log(vehicle.wings);
            break;
        default:
            //!   Эта проверка --> ниже не будет работать!!!!
            // const smth: never = vehicle;
            console.log('Ouuuuups!');
            break;
    }
}
console.log('==================================');
repairVehicle1(carr);
// function after5s(x) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(x);
//     }, 5000);
//   });
// }
// async function mult(input) {
//   const f = await after5s(3);
//   // console.log("f", f);
//   const g = await after5s(4);
//   // console.log("f", f);
//   return input * f * g;
// }
// mult(2).then((value) => {
//   console.log("value", value);
// });
// async function second_mult(input) {
//   const f = after5s(3);
//   // console.log("f", f);
//   const g = after5s(4);
//   // console.log("f", f);
//   return input * (await f) * (await g);
// }
// second_mult(2).then((value) => {
//   console.log("value", value);
// });
